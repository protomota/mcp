# Glimmer MCP

Use the current Glimmer for Mac in `/Applications` as a local coaching source for your assistant, dashboard or daily task list. [Download Glimmer](https://www.glimmertoday.com/download).

1. Open Glimmer and finish setup. In **Settings → Agent access**, turn on **Share read-only summaries**.
2. To let Claude log moments and check off tasks, also turn on **Let agents log and check off**.
3. In Claude Code, run `/plugin marketplace add protomota/mcp`, then `/plugin install protomota-glimmer-mcp@protomota-mcp`.
4. Start a new local session on the same Mac. Confirm the connector appears and ask for today’s glimmer.

Glimmer doesn't need to be open. The journal stays on your Mac, and a connected agent may send what it reads to its AI provider. Turn off **Share read-only summaries** to revoke access.

## Codex and other local clients

In a local STDIO MCP client, use the command `/Applications/Glimmer.app/Contents/MacOS/Glimmer` with the single argument `--mcp`. The Mac app’s Agent access screen shows the path for your installation. To use the skill in Codex, copy [SKILL.md](skills/glimmer-mcp/SKILL.md) to `~/.codex/skills/glimmer-mcp/SKILL.md` and start a new session. [Client setup instructions](https://www.glimmertoday.com/mcp#codex)

## Daily dashboard

Ask “Put today’s Glimmer takeaway and one practice on my morning dashboard.” Your local agent reads Glimmer and uses your dashboard’s connector to add or refresh the same daily card. To make this recurring, use the scheduler in your existing agent or dashboard on the Mac.

For two-way tasks, ask “Save that practice in Glimmer and add it to my task list. When I check it off, mark the same task complete in Glimmer.” The skill explains how to retain the day and Glimmer task ID, retry writes and avoid duplicates. You can also use the daily read on its own.

Other supported prompts:

- “How did my week feel in Glimmer? Which kinds of moments left me drained?”
- “What's left on my Glimmer plan today?” (needs logging and check-offs)
- “Log 20 minutes of Instagram in Glimmer. It left me a bit off and I want less of it.” (needs logging and check-offs)

[Setup](https://www.glimmertoday.com/mcp#claude-code) · [Privacy](https://www.glimmertoday.com/privacy#mcp) · [Terms](https://www.glimmertoday.com/terms) · [Support](https://www.glimmertoday.com/support)
