# Protomota MCP plugins

Every Protomota MCP in one place: the public Protomota MCP server, plus Jotley, Inkspring, OpenTalon, TEXTLEY, and Glimmer for Claude Code on your Mac. Each app plugin includes the app’s skill and configuration for its local MCP server. Install the corresponding Mac app and enable MCP access before configuring the plugin.

| App | Plugin | Setup |
|---|---|---|
| Protomota (remote, talk to our team) | `protomota-contact-mcp` | [Protomota MCP setup](https://protomota.com/mcp#agent) |
| Jotley | `protomota-jotley-mcp` | [Jotley setup](https://protomota.com/mcp#jotley-claude) |
| Inkspring | `protomota-inkspring-mcp` | [Inkspring setup](https://protomota.com/mcp#inkspring-claude) |
| OpenTalon | `protomota-opentalon-mcp` | [OpenTalon setup](https://protomota.com/mcp#opentalon-claude) |
| TEXTLEY | `protomota-textley-mcp` | [TEXTLEY setup](https://textley.ai/mcp/#claude-code) |
| Glimmer | `protomota-glimmer-mcp` | [Glimmer setup](https://www.glimmertoday.com/mcp#claude-code) |

In Claude Code, add this marketplace with `/plugin marketplace add protomota/mcp`, then install the plugin you want. For example, run `/plugin install protomota-jotley-mcp@protomota-mcp`. Follow the plugin’s README to enter the connection values shown in your Mac app.

The Protomota MCP server runs at `https://protomota.com/mcp` and needs nothing installed; any MCP-capable agent can connect to that URL. The app MCP servers run inside their respective apps. Check the [Protomota MCP hub](https://protomota.com/mcp) for Mac availability and [the app skills](https://github.com/protomota/skills). Start with a read-only request and use a disposable item for your first write. Turn MCP access off in the app to revoke its connection.

The plugin files and skills here are MIT-licensed. See each app’s own terms for the app itself.
