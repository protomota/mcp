# Inkspring MCP

Find project research, edit unpublished drafts, and save newsletters in Inkspring. The plugin uses the MCP-enabled Inkspring Mac app in `/Applications`.

The Claude Marketplace plugin exposes project and saved research reads, draft reads and edits, and local newsletter drafts. Publishing, scheduling, vault access, and image generation are outside this plugin’s tool set.

1. Open Inkspring and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-inkspring-mcp --marketplace protomota/mcp`.
3. Open the plugin settings and enter the connection file value shown as `INKSPRING_MCP_CONFIG` in Inkspring agent setup.
4. Check the MCP connection in a local session and start with a read-only request.

Start with `list_projects`, `list_drafts`, or `get_draft`. Use `edit_draft` on the selected draft. Keep changes unpublished unless the user requests publication or scheduling.

Try listing projects, finding a draft in a test project, or saving a supplied paragraph as an unpublished newsletter.

[Inkspring setup and availability](https://protomota.com/mcp#inkspring-claude) · [Privacy policy](https://github.com/protomota/mcp/blob/main/PRIVACY.md#privacy-for-protomota-mcp-plugins) · [Terms of service](https://protomota.com/terms) · [Support and security reports](https://protomota.com/#contact)
