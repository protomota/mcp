const readline = require('node:readline');

const draftTools = new Set([
  'list_projects', 'list_research', 'list_drafts', 'get_draft', 'edit_draft',
  'list_newsletters', 'get_newsletter', 'save_newsletter',
]);

const supportedMethods = new Set([
  'initialize', 'ping', 'tools/list', 'tools/call', 'notifications/initialized',
]);

function errorReply(id, code, message) {
  if (id === undefined) return null;
  return { jsonrpc: '2.0', id, error: { code, message } };
}

async function handleMessage(message, forward) {
  if (!supportedMethods.has(message?.method)) {
    return errorReply(message?.id, -32601, 'This method is unavailable in the Inkspring draft plugin.');
  }
  if (message.method === 'tools/call' && !draftTools.has(message.params?.name)) {
    return errorReply(message.id, -32602, 'This tool is unavailable in the Inkspring draft plugin.');
  }

  const response = await forward(message);
  if (message.method === 'tools/list' && Array.isArray(response?.result?.tools)) {
    response.result.tools = response.result.tools.filter((tool) => draftTools.has(tool.name));
  }
  if (message.method === 'initialize' && response?.result) {
    response.result.capabilities = { tools: {} };
    response.result.instructions = 'Read saved research and edit unpublished drafts in the local Inkspring workspace. Start with list_projects.';
  }
  return response;
}

async function main() {
  const { forward } = require('/Applications/Inkspring.app/Contents/Resources/app.asar/electron/mcp-bridge.cjs');
  const lines = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  for await (const line of lines) {
    if (!line.trim()) continue;
    let message;
    let response;
    try {
      message = JSON.parse(line);
      response = await handleMessage(message, forward);
    } catch {
      response = message
        ? errorReply(message.id, -32000, 'Open Inkspring and check its agent connection settings.')
        : errorReply(null, -32700, 'Invalid JSON.');
    }
    if (response) process.stdout.write(`${JSON.stringify(response)}\n`);
  }
}

if (require.main === module) {
  main().catch(() => {
    process.stderr.write('Install the MCP-enabled Inkspring Mac app in /Applications and enable agent access.\n');
    process.exitCode = 1;
  });
}

module.exports = { handleMessage };
