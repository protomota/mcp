# Inkspring MCP

Find project research, save post ideas and newsletters, and edit unpublished drafts in Inkspring. The plugin uses Inkspring for Mac 1.0.47 or later in `/Applications` and requires Node.js on your PATH.

The Claude Marketplace plugin exposes project and saved research reads, open ideas, draft edits, and local newsletter drafts. Inkspring for Mac 1.0.65 adds image generation and local image attachments.

1. Open Inkspring and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-inkspring-mcp --marketplace protomota/mcp`.
3. Check the MCP connection in a local session and start with a read-only request.

Start with `list_projects`. Use `save_idea` with the project ID, title, and exact text to add a specific idea to **Post ideas → Open**, then verify it with `get_idea`. Choose a platform and format when creating a draft. Use `get_draft` and `edit_draft` for an existing draft.

Use `make_image` with `idea_id` to generate artwork using the image provider configured on the Mac. Use `attach_image` with `idea_id` and an absolute `file_path` to copy a PNG, JPEG, or WebP into the workspace. Both accept `draft_id` in place of `idea_id`. Refresh the plugin and reconnect it after updating the Mac app to load the current tool list.

Try listing projects, finding a draft in a test project, or saving a supplied paragraph as an open idea. The Mac display can stay locked.

[Inkspring setup and availability](https://protomota.com/mcp#inkspring-claude) · [Privacy policy](https://github.com/protomota/mcp/blob/main/PRIVACY.md#privacy-for-protomota-mcp-plugins) · [Terms of service](https://protomota.com/terms) · [Support and security reports](https://protomota.com/#contact)
