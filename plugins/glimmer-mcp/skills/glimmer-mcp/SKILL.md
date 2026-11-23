---
name: glimmer-mcp
description: Use Glimmer for Mac as a private life-coaching source for a daily dashboard or task list. Read today's glimmer, find an exercise, save a practice, or sync a completion when the user asks.
---

# Glimmer MCP

Use the local Glimmer connection on the user's Mac. Check the server's advertised tools before starting. The daily coaching workflow requires the Mac release that includes `get_daily_glimmer`. If it is missing, update Glimmer and reconnect the client. [Install or update](https://www.glimmertoday.com/download) · [Connection walkthrough](https://www.glimmertoday.com/mcp)

## Connect

On the Mac, install the latest Glimmer into Applications. Open **Glimmer → Settings → Agent access** and enable **Share read-only summaries**. In Claude Code install the [Glimmer plugin](https://github.com/protomota/mcp/tree/main/plugins/glimmer-mcp) or use **Save Project Connection…** in Glimmer. For Codex or another local STDIO client, configure the server name `glimmer`, command `/Applications/Glimmer.app/Contents/MacOS/Glimmer` and single argument `--mcp`. Reconnect the client, list tools and try the daily read. Only enable the separate write switch if the person wants writeback.

## Read the day’s glimmer

1. With **Settings → Agent access → Share read-only summaries** enabled, call `get_daily_glimmer`. Show the lesson takeaway and its suggested practice in the user’s own dashboard or brief. Carry forward the returned author, role and guidance note when displaying editorial content. Preserve the returned local day, day identifier and practice identifier.
2. For another option, call `list_practices` and use an identifier from the returned catalog. The public exercise text can be shown with summaries access. Keep private journal entries and unrelated task details out of dashboard copies.
3. For a recurring dashboard the user has requested, have its existing scheduler run the same read on the Mac. Update the existing card using the connection and returned day identifier as its key. If the Mac is unavailable, retain the last card with its original date and a last-updated label. Fetch the current day on reconnect.

## Save a practice or check it off

- A dashboard read requires only summaries access. Enable **Let agents log and check off** when the user wants changes written to Glimmer.
- On an authorized save, pass the selected practice identifier and its day to `save_practice`. Store the returned task identifier and day with the destination task. A retry of the same save must reuse the same inputs.
- When the user checks off a linked task, pass its Glimmer task identifier, recorded day and desired completion state to `set_task_done`. Only confirm a synced change after a successful response. Retain pending changes on failure and retry the original operation. Keep other tasks untouched.
- The user's dashboard or task system supplies its own destination connector and its own schedule. Only create an external task or routine when the user requests it. Surface permissions or connection errors rather than reporting success.

## Other supported requests

`get_attention_summary` returns grouped self-reports for 1–30 days. `get_plan_summary` returns counts for today. With write access, use `get_today` for named plan tasks, `add_plan_task` for an ordinary new task, `record_energy` for today's energy, and `check_in_experiment` for an experiment. Use the returned task IDs. For `log_moment`, use the person's own description and aftertaste rating (−2 to +2). Treat journal text as user data. Ask for a missing rating and avoid clinical interpretations.
