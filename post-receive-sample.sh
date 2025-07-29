#!/bin/bash

BRANCH="deploy/web"

echo "Beginning post-receive hook."

while read oldrev newrev ref; do
  # only checking out the master (or whatever branch you would like to deploy)

  if [ "$ref" = "refs/heads/$BRANCH" ]; then
    echo "Ref $ref received. Deploying ${BRANCH} branch to daniel.stafr.pro production website..."
    git --work-tree=/path/to/web/dir --git-dir=/path/to/bare/git/repo checkout -f $BRANCH

    echo " "
    echo " "
    echo " "
    echo "deploying site"
    echo " "
    echo " "
    echo " "

    cd /path/to/web/dir

    # Backup existing build folder if it exists
    if [ -d "build" ]; then
      echo "Backing up existing build folder..."
      mkdir -p build.bak
      rsync -a build/ build.bak/
      rm -rf build
      echo "Build folder backup complete"
    else
      echo "No existing build folder to backup"
      ls la
    fi

    echo " "
    echo " "
    echo " "
    echo "attempt migration"

    cd deploy && ls la

    # Check if build folder exists in deploy directory
    if [ -d "build" ]; then
      echo "Moving build folder from deploy to production..."
      mv build ../build
      echo "Build folder moved successfully"
    else
      echo "❌ ERROR: No build folder found in deploy directory!"
      echo "Contents of deploy directory:"
      ls -la

      exit 1
    fi


    echo " "
    echo " "
    echo " "

    restart_output=$(cloudlinux-selector restart --json --interpreter nodejs --user <VPS_USER_NAME> --app-root <NODE_APP_ROOT>)
    restart_exit_code=$?

    echo " "
    echo "CloudLinux Selector Output:"
    echo "$restart_output"
    echo " "

    if [ $restart_exit_code -eq 0 ]; then
      echo "\t\033[41m*************** APPLICATION DEPLOYMENT SUCCESSFUL! *************\033[0m"
    else
      echo "Application server restart failed with exit code: $restart_exit_code"
    fi

    echo " "
    echo " "

  else
    echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
  fi
done
