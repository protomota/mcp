# Inkspring MCP

Find project research, save post ideas and newsletters, and edit unpublished drafts in Inkspring. The plugin uses Inkspring for Mac 1.0.47 or later in `/Applications` and requires Node.js on your PATH.

The Claude Marketplace plugin exposes project and saved research reads, open ideas, draft reads and edits, and local newsletter drafts. Publishing, scheduling, vault access, and image generation are outside the plugin's tool set.

1. Open Inkspring and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-inkspring-mcp --marketplace protomota/mcp`.
3. Check the MCP connection in a local session and start with a read-only request.

Start with `list_projects`. Use `save_idea` with the project ID, title, and exact text to add a specific idea to **Post ideas → Open**, then verify it with `get_idea`. Use `get_draft` and `edit_draft` for an existing draft.

Try listing projects, finding a draft in a test project, or saving a supplied paragraph as an open idea. The Mac display can stay locked.

[Inkspring setup and availability](https://protomota.com/mcp#inkspring-claude) · [Privacy policy](https://github.com/protomota/mcp/blob/main/PRIVACY.md#privacy-for-protomota-mcp-plugins) · [Terms of service](https://protomota.com/terms) · [Support and security reports](https://protomota.com/#contact)
