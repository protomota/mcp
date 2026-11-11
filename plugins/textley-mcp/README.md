# Textley MCP

Use this plugin with the MCP-enabled Textley Mac app in `/Applications`.

1. Open Textley and add a folder in the sidebar. Open **Settings → Integrations** and turn on **Enable MCP access**.
2. Choose **Read only** to search and read, or **Read & write** to edit and save.
3. In Claude Code, run `/plugin install protomota-textley-mcp --marketplace protomota/mcp`.
4. Start a local session on the same Mac with Textley open. Confirm the connector appears and try `list_vaults` or `list_tabs`.

Read the current revision before editing. Use `save_file` to save a buffer after an edit. Files and folders stay on your Mac, and a connected agent may send the text it retrieves to its AI provider.

Download [Trail Log.md](examples/Trail%20Log.md) into a disposable folder and open the folder in Textley. Then try these prompts:

- “List my open Textley folders and find Markdown files whose names contain ‘trail’.”
- “Open Trail Log.md and show its Markdown preview.” This requires Read & write because it changes the open editor.
- “In Trail Log.md, change ‘Strong wind’ to ‘Light wind’ and save the file.” This requires Read & write.

[Setup and availability](https://textley.ai/mcp/#claude-code) · [Privacy](https://textley.ai/privacy/#mcp) · [Terms](https://protomota.com/terms) · [Support](https://textley.ai/support/)
