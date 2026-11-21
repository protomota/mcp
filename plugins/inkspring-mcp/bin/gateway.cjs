const readline = require('node:readline');
const { spawn } = require('node:child_process');

const writingTools = new Set([
  'list_projects', 'list_research', 'list_drafts', 'get_draft', 'edit_draft',
  'list_newsletters', 'get_newsletter', 'save_newsletter',
  'list_ideas', 'get_idea', 'save_idea', 'edit_idea',
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
    return errorReply(message?.id, -32601, 'This method is unavailable in the Inkspring writing plugin.');
  }
  if (message.method === 'tools/call' && !writingTools.has(message.params?.name)) {
    return errorReply(message.id, -32602, 'This tool is unavailable in the Inkspring writing plugin.');
  }

  const response = await forward(message);
  if (message.method === 'tools/list' && Array.isArray(response?.result?.tools)) {
    response.result.tools = response.result.tools.filter((tool) => writingTools.has(tool.name));
  }
  if (message.method === 'initialize' && response?.result) {
    response.result.capabilities = { tools: {} };
    response.result.instructions = 'Start with list_projects. Use save_idea to save an open post idea and get_idea to read it back. Draft edits and newsletters stay in the local Inkspring workspace.';
  }
  return response;
}

async function main(binary) {
  const native = spawn(binary, ['--mcp'], { stdio: ['pipe', 'pipe', 'inherit'] });
  const replies = readline.createInterface({ input: native.stdout, crlfDelay: Infinity });
  const responses = replies[Symbol.asyncIterator]();
  native.on('error', () => replies.close());
  native.stdin.on('error', () => replies.close());
  async function forward(message) {
    if (!native.stdin.writable) throw new Error('Inkspring MCP is unavailable.');
    native.stdin.write(JSON.stringify(message) + '\n');
    if (message.id === undefined) return null;
    const { done, value } = await responses.next();
    if (done) throw new Error('Inkspring MCP closed the connection.');
    return JSON.parse(value);
  }
  const lines = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  try {
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
      if (response) process.stdout.write(JSON.stringify(response) + '\n');
    }
  } finally {
    native.stdin.end();
    replies.close();
  }
}

if (require.main === module) {
  main(process.argv[2]).catch(() => {
    process.stderr.write('Install the MCP-enabled Inkspring Mac app in /Applications and enable agent access.\n');
    process.exitCode = 1;
  });
}

module.exports = { handleMessage };
