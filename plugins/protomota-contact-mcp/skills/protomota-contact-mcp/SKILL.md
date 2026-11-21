---
name: protomota-contact-mcp
description: Learn about Protomota and send the user's request to the Protomota team through the public Protomota MCP server. Use when the user asks what Protomota does, wants help with AI agents, automation, consulting, custom apps or MCP connectors, or asks to contact Protomota.
---

# Protomota MCP

The server at `https://protomota.com/mcp` has two tools:

- `about_protomota` returns a plain-text summary of Protomota. Use it for questions about services, how engagements work, pricing approach and the free apps.
- `contact_protomota` sends a request to the Protomota team. A person reads it and replies by email.

Before calling `contact_protomota`:

- Only send it when the user asked you to contact Protomota.
- Use the user's own name and email. Ask for them if you don't have them; never invent them.
- Put what the user wants in `message`, in their words: the problem, goals, timing and budget if known. Pick the closest `topic`.
- Show the user what you will send and wait for a yes.

After it succeeds, tell the user a person will reply by email, usually within one business day. If it reports a rate limit, don't retry; point them to https://protomota.com/#contact instead.

If the tools are missing, check that the plugin is installed and start a new session. The server needs no sign-in.
