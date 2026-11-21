---
name: inkspring-mcp
description: Find project research, edit saved social drafts, and save newsletters through the Inkspring draft plugin. Use the Mac app for media, revision recovery, scheduling, and publication review.
---

# Inkspring MCP

1. Call `list_projects` or `list_drafts` to verify access. If the connection fails, open **Settings → AI agents** on the Mac, enable workspace access, and click **Test connection**. Use [Writing agent setup](https://inkspring.ai/help#writing-agent) for native connections.
2. Read the exact item with `get_draft` or `get_newsletter`. Apply requested edits to that saved draft with `edit_draft` and its `expected_updated_at`, or `save_newsletter` and its `revision`. Read it back to verify copy, account channel, and existing attachments. Continue to apply follow-up edits unless the author asks for copy in chat only.
3. If wording is missing, open **Revision history** in the Mac draft editor and compare the saved versions. Restore the author's intended version before applying requested changes. Preserve their wording and media.
4. On Mac, use the editable **Hashtags** field for Instagram and TikTok. When editing captions with the plugin, put tags in the last paragraph and confirm them in the publishing preview. Put LinkedIn hashtags in the post copy when requested. Leave X copy free of automatically added hashtags.
5. For newsletters, confirm Substack is connected and the correct publication is selected. Verify attached cover art appears at the top of the article and check **Email subscribers** in the send review. For video posts, confirm the approved attachment appears in review. Keep the send paused if media is missing or a connection fails.
6. Use the Inkspring Mac app for attachments, schedules, and live review. This marketplace plugin is limited to drafts. After an authorized send, get the original URL from **Published** on Mac or **Schedule → Published** on mobile, and verify the post and its media before reporting success. Check the original platform before retrying an uncertain send. [Publishing and scheduling guide](https://inkspring.ai/help#schedule)
