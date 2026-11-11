#!/bin/bash
set -euo pipefail

app="/Applications/Jotley.app"
binary="$app/Contents/MacOS/Jotley"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install the MCP-enabled Jotley app in /Applications and enable MCP access.' >&2
  exit 1
fi

exec "$binary" --mcp-stdio
