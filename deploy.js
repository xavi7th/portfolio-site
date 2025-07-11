//TO RUN THIS SCRIPT RUN bun run push -- api OR bun run push -- frontend OR bun run push
//When run without an option, it defaults to api

import fs from "fs";
import { execSync } from "child_process";

const target = process.argv[2] || "api"; // Defaults to frontend
const prefix = target === "api" ? "api" : "frontend";
const remoteServerName = `${prefix}-remote`; // Assumes remotes are named `api-remote` and `frontend-remote`. check this out with git remote
const branch = `deploy/${prefix}`;
const CONTINUE_FILE = ".deploy_continue";

// Check if we're resuming after a merge conflict
const isResuming = fs.existsSync(CONTINUE_FILE);

if (!isResuming) {
  // Check if there are local changes before stashing
  const statusOutput = execSync("git status --porcelain").toString().trim();
  var hasLocalChanges = !!statusOutput;

  if (hasLocalChanges) {
    console.log("Stashing local changes...");
    execSync("git stash -k -u", { stdio: "inherit" });
  } else {
    console.log("No changes detected. Skipping stash.");
  }

  // Switch to the target deployment branch
  console.log(`Switching to ${branch} branch...`);
  execSync(`git checkout ${branch}`, { stdio: "inherit" });

  console.log(`Merging development branch into ${branch}...`);
  try {
    execSync("git merge development --no-edit", { stdio: "inherit" });
  } catch (_) {
    console.error("❌ Merge conflict detected! Resolve conflicts, then re-run `bun run push`.");
    fs.writeFileSync(CONTINUE_FILE, "true"); // Mark that we're in the middle of a merge
    process.exit(1);
  }
} else {
  console.log("✅ Resuming deployment after merge conflict resolution...");
  fs.unlinkSync(CONTINUE_FILE);
}

// Modify .gitignore depending on the target, to allow public files to be committed
if (target === "api") {
  console.log("Updating .gitignore to allow public files...");
  execSync("sed -i.bak '/public\\/[build\\\\|vendor\\\\|conference]/d' ./.gitignore", { stdio: "inherit" });
} else {
  console.log("Updating .gitignore to allow public files...");
  execSync("sed -i.bak '/frontend\\/build/d' ./.gitignore", { stdio: "inherit" });
  execSync("sed -i.bak '/build/d' ./frontend/.gitignore", { stdio: "inherit" });
}

// Run the build process
if (target === "frontend") {
  console.log("Creating build folder if not exists");
  execSync("mkdir -p ./frontend/build", { stdio: "inherit" });

  console.log("Running build...");
  execSync("(cd ./frontend && bun run build -m production)", { stdio: "inherit" });

  console.log("Copying package.json and node loader script into build folder...");
  execSync("(cd ./frontend && cp -f package.json src/loader.cjs build)", { stdio: "inherit" });
} else {
  console.log("Running build...");
  execSync("(cd ./api && bun run build)", { stdio: "inherit" });
}

// Check if there are new changes after the build
const postBuildStatus = execSync("git status --porcelain").toString().trim();
if (postBuildStatus) {
  const commitMessage = `Build commit: ${Math.random().toString(36).substring(7)}`;
  console.log(`Staging new changes with commit message: ${commitMessage}`);
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
} else {
  console.log("No changes to commit. Proceeding with push...");
}

// Push only the relevant folder as subtree
console.log(`Pushing changes in ${prefix} folder to ${remoteServerName}...`);
try {
  // execSync(`git subtree push --prefix=${prefix} ${remoteServerName} master`, { stdio: "inherit" });
  console.log("Creating subtree split...");
  const subtreeCommit = execSync(`git subtree split --prefix=${prefix} ${branch}`, { stdio: "pipe" }).toString().trim();

  console.log(`Force pushing subtree to ${remoteServerName}/${branch}...`);
  execSync(`git push ${remoteServerName} ${subtreeCommit}:refs/heads/${branch} --force --verbose`, { stdio: "inherit" });

  console.log("Push successful. Switching back to development branch...");
  execSync("git switch development", { stdio: "inherit" });

  console.log("Switch successful.");

  // Restore stashed changes only if we originally stashed something
  if (hasLocalChanges) {
    console.log("Restoring stashed changes...");
    try {
      execSync("git stash pop", { stdio: "inherit" });
    } catch (_) {
      console.error("⚠️ Possible merge conflict detected when restoring stashed changes. Check manually.");
    }
  }
} catch (_) {
  console.error("❌ Push failed. Rolling back the last commit...");

  execSync("git reset --soft HEAD~1", { stdio: "inherit" });
  console.error("Changes kept in the staging area for review.");
}
