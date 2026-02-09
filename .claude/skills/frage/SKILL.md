---
name: frage
description: "Answer an ISMS subject-matter question (two-step: librarian > researcher)"
---

Answer an ISMS subject-matter question in a two-step process:

**Step 1 — Librarian:** Use the Task tool with `subagent_type: "librarian"` and provide the user's question as prompt. The librarian searches the reference library and delivers a structured briefing.

**Step 2 — Researcher:** Use the Task tool with `subagent_type: "researcher"` and provide both the original question AND the library briefing from step 1 as prompt. The researcher synthesizes a context-appropriate recommendation.

Display the researcher's result to the user.

The user's question follows the `/frage` argument. Example: `/frage How should we design the risk management process?`
