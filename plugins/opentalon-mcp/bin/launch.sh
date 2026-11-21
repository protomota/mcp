#!/bin/bash
if [ ! -x /Applications/OpenTalon.app/Contents/MacOS/OpenTalon ]; then
  echo 'Install the MCP-enabled OpenTalon app in /Applications and enable MCP access.' >&2
  exit 1
fi
export ELECTRON_RUN_AS_NODE=1
exec /Applications/OpenTalon.app/Contents/MacOS/OpenTalon /Applications/OpenTalon.app/Contents/Resources/app.asar/electron/mcp-bridge.cjs
