#!/bin/bash
set -euo pipefail

app="/Applications/OpenTalon.app"
binary="$app/Contents/MacOS/OpenTalon"
if [[ ! -x "$binary" ]]; then
  printf '%s\n' 'Install the MCP-enabled OpenTalon app in /Applications and enable MCP access.' >&2
  exit 1
fi

bridge="$app/Contents/Resources/app.asar/electron/mcp-bridge.cjs"
if [[ -z "${OPENTALON_MCP_CONFIG:-}" || ! -r "$OPENTALON_MCP_CONFIG" ]]; then
  printf '%s\n' 'Copy the local connection file value from OpenTalon agent settings to the Claude plugin settings.' >&2
  exit 1
fi

export ELECTRON_RUN_AS_NODE=1
exec "$binary" "$bridge"
