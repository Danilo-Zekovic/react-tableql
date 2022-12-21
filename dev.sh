#!/bin/bash
  
# turn on bash's job control
set -m
# kill all the pm2 processes runnning in the background on exit (control + C) 
# `2> /dev/null` redirects errors to nowhere when there is no processes to be killed
trap "pm2 delete cra nextjs react-tableql api 2> /dev/null && docker kill api-db-1" EXIT

echo ">>>> ReactTableQL Dev enviroment <<<<\n"

echo "For additional options run: \"sh dev.sh -h\" or \"yarn dev -h\"\n"

install="false"
cleanInstall="false"
seed="false"
container="false"

while getopts "icshma:" OPTION; do
  case $OPTION in
    i)
      install="true"
      ;;
    c) 
      cleanInstall="true"
      ;;
    # a) 
    #   avalue="$OPTARG"
    #   echo "example when argument passed to flag $OPTARG"
    #   ;;
    m)
      echo "==== Starting a MongoDB in Docker container ===="
      yarn run lerna run container
      ;;
    s)
      echo "==== Running seed ===="
      yarn run lerna run seed
      ;;
    h)
      echo "Usage: \"sh dev.sh <flags>\" or \"yarn dev <flags>\"\n"
      echo "Options: \n"
      echo "  -i    Install dependencies"
      echo "  -c    Install dependencies but first remove all the packages and lock files"
      echo "  -s    Run seed"
      echo "  -m    Start a MongoDB in a Docker container"
      echo "  -h    Help"
      echo "\nExample 1: yarn dev -i"
      echo "Example 2 (start the db and run seeds): yarn dev -ms\n"
      exit
      ;;
  esac
done

if $cleanInstall ; then
  echo "==== Clean install of dependencies ===="
  yarn bootstrap:clean
  break
elif $install ; then
  echo "==== Installing dependencies ===="
  yarn bootstrap
  break
fi

# Start API separatly for now as it skips it sometimes for some reason
echo "Run API instance as background process:"
yarn run lerna run dockerDevApi

echo "Run all the instances as background process:"
yarn run lerna run dockerDev

echo "Start the logs:"
pm2 logs
