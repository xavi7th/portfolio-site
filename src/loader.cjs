// Override Sveltekit's default BODY_SIZE_LIMIT of 512kb which prevents uploading images of certain sizes
process.env.BODY_SIZE_LIMIT = "50M";

// --- START: ADVANCED LOGGER OVERRIDE ---
// Overwrite console.log and console.error commands to redirect logs to frontend-debug.log file
const fs = require("fs");
const util = require("util");
const path = require("path");

const logDir = path.join(__dirname, "./logs");

// Ensure log directory exists
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

// Create a writable stream to the log file
const logFileStream = fs.createWriteStream(logDir + "/debug.log", { flags: "a" });

/**
 *  Helper function to get caller information for better context
 */
function getCallerInfo() {
  const stack = new Error().stack;
  const stackLines = stack.split("\n");

  // Skip the first few lines to get to the actual caller
  for (let i = 5; i < stackLines.length; i++) {
    const line = stackLines[i];
    if (line && !line.includes("node_modules") && !line.includes("internal/")) {
      const match = line.match(/at\s+(?:(.+?)\s+\()?(.+?):(\d+):(\d+)\)?/);
      if (match) {
        const [, functionName, file, lineNum, column] = match;
        return {
          function: functionName || "anonymous",
          file: file,
          line: lineNum,
          column: column,
        };
      }
    }
  }
  return null;
}

/**
 * Formats a log entry to be compatible with opcodesio/log-viewer.
 * @param {string} level - The log level (e.g., 'NOTICE', 'ERROR').
 * @param {Array<any>} args - The arguments passed to the console command.
 * @returns {string} The formatted log string.
 */
function formatLogEntry(level = "NOTICE", args) {
  // --- Generate Timestamp `[YYYY-MM-DD HH:MM:SS]` ---
  const timestamp = new Date().toISOString().slice(0, 19).replace("T", " "); // e.g., 2025-07-13 06:00:11
  // const timestamp = new Date().toISOString().replace('T', ' ').replace(/\..+/, ''); // e.g., '2025-07-13 06:00:11'
  // const pad = (num) => num.toString().padStart(2, '0'); --- Helper to get a padded number (e.g., 5 -> "05") --- AND then
  // const now = new Date(); AND then
  // const timestamp = `[${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}]`;

  const environment = process.env.NODE_ENV || "production";
  const header = `[${timestamp}] ${environment}.${level.toUpperCase()}:`;
  let message = "";
  let stack = "";
  let context = {};
  let logArgs = [...args]; // Create a mutable copy of the arguments

  // --- Extract context if the last argument is a plain object ---
  const lastArg = logArgs.length > 0 ? logArgs[logArgs.length - 1] : undefined;
  const isLastArgContext = typeof lastArg === "object" && lastArg !== null && !(lastArg instanceof Error) && !Array.isArray(lastArg);

  // An object is only considered context if it's not the ONLY thing being logged.
  // e.g., console.log("Failed to process user update.", e,, { user: user.id, ip: "192.168.1.1" }) -> object is context
  // e.g., console.log({message: "this is the log"}) -> object is the message
  if (isLastArgContext && logArgs.length > 1) {
    context = logArgs.pop(); // Remove context from args and assign it
  }

  // --- Extract Error object and other arguments from the remaining logArgs ---
  const error = logArgs.find((arg) => arg instanceof Error);
  const otherArgs = logArgs.filter((arg) => !(arg instanceof Error));

  // --- Extract the main message from remaining arguments ---
  // util.format can handle multiple arguments, including objects.
  message = util.format(...otherArgs);

  // --- Get the file details that raised this log ---
  const callerInfo = getCallerInfo();

  // --- Format Stack Trace if an Error exists ---
  if (error) {
    // If there's ONLY an error e.g console.log(e), then its message is the primary message.
    if (!message) {
      message = error.message;
    } else {
      message += ` ${error.message}`;
    }

    if (error.stack) {
      const stackLines = error.stack.split("\n");
      // The first line of a Node.js stack is the error message itself, which we've already handled.
      // We format the rest to look like Laravel's stack trace.
      const formattedStack = stackLines
        .slice(1) // Skip the error message line
        .map((line, index) => `#${index} ${line.trim().substring(3)}`) // "at foo (/path...)" -> "foo (/path...)"
        .join("\n");

      stack = `\nStack trace:\n${formattedStack}`;
    }
  }

  // --- Add log location to message ---
  if (callerInfo) {
    message = `${message} in ${callerInfo.file}:${callerInfo.line}\n\n`;
  } else {
    message = `${message}\n\n`;
  }

  // --- Assemble the final log string ---
  const contextString = Object.keys(context).length > 0 ? ` ${JSON.stringify(context, null, 2)}\n` : '{"user":null}\n'; // Add empty context object like Laravel logs

  // The final format is [HEADER] [MESSAGE] [STACK] [CONTEXT]
  return `${header} ${message}${stack}${contextString}\n`;
}

/**
 * Override console.log/err → writes to both frontend-debug.log and stdout/err in Laravel format
 */

// --- First keep original methods to write to the actual console for console visibility ---
const originalStdoutWrite = process.stdout.write.bind(process.stdout);
const originalStderrWrite = process.stderr.write.bind(process.stderr);

// Override console.log
console.log = (...args) => {
  const formattedLogEntry = formatLogEntry("INFO", args);
  logFileStream.write(formattedLogEntry); // Write formatted line to log file
  originalStdoutWrite(util.format(...args) + "\n"); // Write original log to stdout
};

// Override console.error
console.error = (...args) => {
  const formattedLogEntry = formatLogEntry("ERROR", args);
  logFileStream.write(formattedLogEntry); // Write formatted line to log file
  originalStderrWrite(util.format(...args) + "\n"); // Write original error to stderr
};

/**
 * Handle Uncaught Exceptions
 */
process.on("uncaughtException", (err) => {
  // Should use our new formatter automatically
  console.error(`CRITICAL: Uncaught Exception: ${err.message} in ${err.stack ? err.stack.split("\n")[1] : "unknown location"}:`, err);
  // It's often recommended to exit after an uncaught exception
  // process.exit(1);
});

// Add handler for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  // Also good to log unhandled promise rejections
  const error = reason instanceof Error ? reason : new Error(String(reason));
  console.error(`CRITICAL: Unhandled Promise Rejection: ${error.message}`, promise, "reason:", reason, { promise: "unhandled promise", reason: String(reason) });
});

// Optional: Add custom log levels that match Laravel's log levels
const customLogger = {
  // The .filter(Boolean) is a clean way to remove a null `error` argument.
  emergency: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("EMERGENCY", args);
    logFileStream.write(laravelLog);
    process.stderr.write(`EMERGENCY: ${util.format(message)}\n`);
  },
  alert: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("ALERT", args);
    logFileStream.write(laravelLog);
    process.stderr.write(`ALERT: ${util.format(message)}\n`);
  },
  critical: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("CRITICAL", args);
    logFileStream.write(laravelLog);
    process.stderr.write(`CRITICAL: ${util.format(message)}\n`);
  },
  error: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("ERROR", args);
    logFileStream.write(laravelLog);
    process.stderr.write(`ERROR: ${util.format(message)}\n`);
  },
  warning: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("WARNING", args);
    logFileStream.write(laravelLog);
    process.stdout.write(`WARNING: ${util.format(message)}\n`);
  },
  notice: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("NOTICE", args);
    logFileStream.write(laravelLog);
    process.stdout.write(`NOTICE: ${util.format(message)}\n`);
  },
  info: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("INFO", args);
    logFileStream.write(laravelLog);
    process.stdout.write(`INFO: ${util.format(message)}\n`);
  },
  debug: (message, error = null) => {
    const args = [message, error].filter(Boolean);
    const laravelLog = formatLogEntry("DEBUG", args);
    logFileStream.write(laravelLog);
    process.stdout.write(`DEBUG: ${util.format(message)}\n`);
  },
};

// Make custom logger available globally
global.logger = customLogger;
// USAGE
// logger.info("User registration completed");
// logger.error("Payment processing failed", new Error("Gateway timeout"));

// SAMPLE OUTPUT FORMAT
// [2025-07-13 10:30:45] PRODUCTION.INFO: User logged in successfully in /path/to/your/file.js:123 {}
//
// [2024-05-21 10:35:00] PRODUCTION.ERROR: Failed to process user update. Cannot read property 'name' of undefined
// Stack trace:
// #0 TypeError: Cannot read property 'name' of undefined
// #1     at /path/to/your/app/server/another-file.js:45:15
// #2     at ...
//  {"request":{"body":{"email":"test@example.com"}}}

// --- END: ADVANCED LOGGER OVERRIDE ---

/**
 * This file is needed on Namecheap servers in order to properly load the sveltekit app
 *
 * We need this code and this file because shared hosting loaders throw a ERR_REQUIRE_ESM error when we try to use sveltekit's index.js directly as our entry point
 * So on Namecheap, this file serves as the entry point for our app.
 *
 * @see https://stackoverflow.com/questions/74174516/node-js-cpanel-error-im-getting-an-error-err-require-esm-must-use-import
 * @see https://www.digitalocean.com/community/tutorials/how-to-host-multiple-node-js-applications-on-a-single-vps-with-nginx-forever-and-crontab
 */
async function loadApp() {
  await import("./index.js");
}

loadApp();
