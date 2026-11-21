# Glimmer MCP

Use this plugin with Glimmer for Mac 1.0.4 or later in `/Applications`. [Download Glimmer](https://www.glimmertoday.com/download).

1. Open Glimmer and finish setup. In **Settings → Agent access**, turn on **Share read-only summaries**.
2. To let Claude log moments and check off tasks, also turn on **Let agents log and check off**.
3. In Claude Code, run `/plugin marketplace add protomota/mcp`, then `/plugin install protomota-glimmer-mcp@protomota-mcp`.
4. Start a new local session on the same Mac. Confirm the connector appears and try `get_plan_summary`.

Glimmer doesn't need to be open. The journal stays on your Mac, and a connected agent may send what it reads to its AI provider. Turn off **Share read-only summaries** to revoke access.

Try these prompts:

- “How did my week feel in Glimmer? Which kinds of moments left me drained?”
- “What's left on my Glimmer plan today?” (needs logging and check-offs)
- “Log 20 minutes of Instagram in Glimmer. It left me a bit off and I want less of it.” (needs logging and check-offs)

[Setup](https://www.glimmertoday.com/mcp#claude-code) · [Privacy](https://www.glimmertoday.com/privacy#mcp) · [Terms](https://www.glimmertoday.com/terms) · [Support](https://www.glimmertoday.com/support)
