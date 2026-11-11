# Protomota MCP plugins

Connect Jotley, Inkspring, and OpenTalon to Claude Code on your Mac. Each plugin includes the app’s skill and configuration for its local MCP server. Install the corresponding Mac app and enable MCP access before configuring the plugin.

| App | Plugin | Setup |
|---|---|---|
| Jotley | `jotley-mcp` | [Jotley setup](https://protomota.com/mcp#jotley-claude) |
| Inkspring | `inkspring-mcp` | [Inkspring setup](https://protomota.com/mcp#inkspring-claude) |
| OpenTalon | `opentalon-mcp` | [OpenTalon setup](https://protomota.com/mcp#opentalon-claude) |

In a local Claude Code session, install the plugin for the app you use. For example, run `/plugin install jotley-mcp --marketplace protomota/mcp`. Follow the plugin’s README to enter the connection values shown in your Mac app.

The MCP servers run inside their respective apps. Check the [Protomota MCP hub](https://protomota.com/mcp) for Mac availability and [the app skills](https://github.com/protomota/skills). Start with a read-only request and use a disposable item for your first write. Turn MCP access off in the app to revoke its connection.

The plugin files and skills here are MIT-licensed. See each app’s own terms for the app itself.
