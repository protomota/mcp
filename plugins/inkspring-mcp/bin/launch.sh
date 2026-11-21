#!/bin/bash
set -euo pipefail

app="/Applications/Inkspring.app"
binary="$app/Contents/MacOS/Inkspring"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install the MCP-enabled Inkspring app in /Applications and enable MCP access.' >&2
  exit 1
fi

if ! command -v node >/dev/null; then
  printf '%s\n' 'Node.js is required by this plugin. You can also connect directly from Inkspring Settings → AI agents.' >&2
  exit 1
fi

exec node "${BASH_SOURCE[0]%/*}/gateway.cjs" "$binary"
