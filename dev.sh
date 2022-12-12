#!/bin/bash
  
# turn on bash's job control
set -m
# kill all the pm2 processes runnning in the background on exit (control + C)
trap "pm2 delete cra nextjs react-tableql" EXIT

echo ">>>> ReactTableQL Dev enviroment <<<<\n"

install="false"
cleanInstall="false"

while getopts "icha:" OPTION; do
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
    h)
      echo "Usage: sh dev.sh <flags>\n"
      echo "Options: \n"
      echo "  -i    Install dependencies"
      echo "  -c    Install dependencies but first remove all the packages and lock files"
      echo "  -h    Help"
      exit
      ;;
  esac
done

if $cleanInstall ; then
  echo "clean install of dependencies"
  yarn bootstrap:clean
  break
elif $install ; then
  echo "install dependencies"
  yarn bootstrap
  break
fi


echo "Run all the instances as background process:"
yarn run lerna run dockerDev

echo "Start the logs:"
pm2 logs
