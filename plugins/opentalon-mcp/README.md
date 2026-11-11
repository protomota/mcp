# OpenTalon MCP

Read boards and update tasks in OpenTalon. Tasks are manual by default. The plugin uses the MCP-enabled OpenTalon Mac app in `/Applications`.

1. Open OpenTalon and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-opentalon-mcp --marketplace protomota/mcp`.
3. Open the plugin settings and enter the connection file value shown as `OPENTALON_MCP_CONFIG` in OpenTalon agent setup.
4. Check the MCP connection in a local session and start with a read-only request.

Start with `list_boards`, `list_tasks`, or `get_task`. Read the current revision before changing a task. Use a fresh request key for each mutation. Move a task to Sent to agent only when the user requests dispatch.

Try listing boards, reading To do tasks on a test board, or adding a manual task to a disposable board.

[OpenTalon setup and availability](https://protomota.com/mcp#opentalon-claude) · [Privacy policy](https://github.com/protomota/mcp/blob/main/PRIVACY.md#privacy-for-protomota-mcp-plugins) · [Terms of service](https://protomota.com/terms) · [Support and security reports](https://protomota.com/#contact)
