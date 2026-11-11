# OpenTalon MCP

Read boards and update tasks in OpenTalon. Tasks are manual by default. The plugin uses the MCP-enabled OpenTalon Mac app in `/Applications`.

1. Open OpenTalon and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-opentalon-mcp --marketplace protomota/mcp`.
3. Open the plugin settings and enter the connection file value shown as `OPENTALON_MCP_CONFIG` in OpenTalon agent setup.
4. Check the MCP connection in a local session and start with a read-only request.

Start with `list_boards`, `list_tasks`, or `get_task`. Read the current revision before changing a task. Use a fresh request key for each mutation. Move a task to Sent to agent only when the user requests dispatch.

[OpenTalon setup and availability](https://protomota.com/mcp#opentalon-claude) · [Support](https://protomota.com/#contact)
