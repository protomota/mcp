#!/bin/bash
set -euo pipefail

app="/Applications/Glimmer.app"
binary="$app/Contents/MacOS/Glimmer"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install Glimmer for Mac in /Applications from https://www.glimmertoday.com/download and turn on Settings → Agent access.' >&2
  exit 1
fi

exec "$binary" --mcp
