#!/bin/bash
if [ ! -x /Applications/Glimmer.app/Contents/MacOS/Glimmer ]; then
  echo 'Install Glimmer for Mac in /Applications from https://www.glimmertoday.com/download and turn on Settings → Agent access.' >&2
  exit 1
fi
exec /Applications/Glimmer.app/Contents/MacOS/Glimmer --mcp
