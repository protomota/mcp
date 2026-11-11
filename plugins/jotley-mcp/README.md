# Jotley MCP

Search notes and read transcripts or summaries. Jotley’s in-app access setting governs which edits are allowed. The plugin uses the MCP-enabled Jotley Mac app in `/Applications`.

1. Open Jotley and enable MCP in its agent settings.
2. In a local Claude Code session, run `/plugin install protomota-jotley-mcp --marketplace protomota/mcp`.
3. Start a new local session while Jotley is open.
4. Check the MCP connection in a local session and start with a read-only request.

Start with `search_notes` or `list_notes`. Use `read_note` with a section such as `summary` or `transcript`. Read the current revision before editing.

Try searching for “release checklist”, listing recent notes from a test folder, or reading the summary of a note you choose.

[Jotley setup and availability](https://protomota.com/mcp#jotley-claude) · [Privacy policy](https://github.com/protomota/mcp/blob/main/PRIVACY.md#privacy-for-protomota-mcp-plugins) · [Terms of service](https://protomota.com/terms) · [Support and security reports](https://protomota.com/#contact)
