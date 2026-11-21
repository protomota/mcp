#!/bin/bash
if [ ! -x /Applications/Textley.app/Contents/MacOS/Textley ]; then
  echo 'Install the MCP-enabled Textley app in /Applications and enable MCP access.' >&2
  exit 1
fi
exec /Applications/Textley.app/Contents/MacOS/Textley --mcp-stdio
