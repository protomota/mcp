#!/bin/bash
set -euo pipefail

app="/Applications/Inkspring.app"
binary="$app/Contents/MacOS/Inkspring"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install the MCP-enabled Inkspring app in /Applications and enable MCP access.' >&2
  exit 1
fi

if [[ -z "${INKSPRING_MCP_CONFIG:-}" || ! -r "$INKSPRING_MCP_CONFIG" ]]; then
  printf '%s\n' 'Copy the local connection file value from Inkspring agent settings to the Claude plugin settings.' >&2
  exit 1
fi

export ELECTRON_RUN_AS_NODE=1
exec "$binary" "${BASH_SOURCE[0]%/*}/gateway.cjs"
