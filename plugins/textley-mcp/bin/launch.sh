#!/bin/bash
set -euo pipefail

app="/Applications/Textley.app"
binary="$app/Contents/MacOS/Textley"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install the MCP-enabled Textley app in /Applications and enable MCP access.' >&2
  exit 1
fi

exec "$binary" --mcp-stdio
