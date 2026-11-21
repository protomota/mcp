# Protomota MCP

Talk to Protomota from your AI agent. This plugin connects Claude Code to the public Protomota MCP server at `https://protomota.com/mcp`. Nothing to install on your computer and no account needed.

| Tool | What it does |
|---|---|
| `about_protomota` | A short summary of what Protomota builds, how engagements work, and its free apps. Read only. |
| `contact_protomota` | Sends your request to the Protomota team. A person reads it and replies by email, usually within one business day. |

1. In Claude Code, run `/plugin marketplace add protomota/mcp`, then `/plugin install protomota-contact-mcp@protomota-mcp`.
2. Start a new session and ask: “What does Protomota do?”
3. When you want to reach the team, say so and give your name and email.

Prefer to add the server yourself? Run `claude mcp add --transport http protomota https://protomota.com/mcp`. In Codex, add a streamable HTTP server named `protomota` with the same URL.

Your agent only sends a request when you ask it to. Protomota replies to the email you give and sends nothing to any other address.

[Setup](https://protomota.com/mcp#agent) · [Privacy](https://protomota.com/privacy) · [Terms](https://protomota.com/terms) · [Contact](https://protomota.com/#contact)
