---
name: inkspring-mcp
description: Find project research, save post ideas and images, and edit saved drafts and newsletters through the Inkspring MCP plugin. Use the Mac app for revision recovery, scheduling, and publication review.
---

# Inkspring MCP

1. Call `list_projects` or `list_drafts` to verify access. If the connection fails, open **Settings → AI agents** on the Mac, enable workspace access, and click **Test connection**. Use [Writing agent setup](https://inkspring.ai/help#writing-agent) for native connections.
2. To save a specific post idea, use `save_idea` with `project_id`, `title`, and the exact `text`. Choose platform and format only when creating a draft. Reuse the optional `request_key` for an identical retry. Read the complete idea with `get_idea` and confirm it appears under **Post ideas → Open**. This works while the Mac display is locked and requires Mac version 1.0.47 or later.
3. Read existing drafts and newsletters with `get_draft` or `get_newsletter`. Apply requested edits with `edit_draft` and its `expected_updated_at`, or `save_newsletter` and its `revision`. Read it back to verify copy, account channel, and attachments. Continue to apply follow-up edits unless the author asks for copy in chat only.
4. If wording is missing, open **Revision history** in the Mac draft editor and compare the saved versions. Restore the author's intended version before applying requested changes. Preserve their wording and media.
5. On Mac, use the editable **Hashtags** field for Instagram and TikTok. When editing captions with the plugin, put tags in the last paragraph and confirm them in the publishing preview. Put LinkedIn hashtags in the post copy when requested. Leave X copy free of automatically added hashtags.
6. For newsletters, confirm Substack is connected and the correct publication is selected. Verify attached cover art appears at the top of the article and check **Email subscribers** in the send review. For video posts, confirm the approved attachment appears in review. Keep the send paused if media is missing or a connection fails.
7. On Mac 1.0.65 or later, use `make_image` for a requested image or `attach_image` to save a local PNG, JPEG, or WebP. Pass one `idea_id` or `draft_id` and the last-read `expected_updated_at`. For a file, pass its absolute `file_path`. Read the item back and check its image. An idea’s image is reused when creating photo drafts in the app.
8. Use the Mac app for schedules and live review. After an authorized send, get the original URL from **Published** and verify the post and its media before reporting success. Check the original platform before retrying an uncertain send. [Publishing and scheduling guide](https://inkspring.ai/help#schedule)
