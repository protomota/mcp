#!/bin/bash
if [ ! -x /Applications/Jotley.app/Contents/MacOS/Jotley ]; then
  echo 'Install the MCP-enabled Jotley app in /Applications and enable MCP access.' >&2
  exit 1
fi
exec /Applications/Jotley.app/Contents/MacOS/Jotley --mcp-stdio
