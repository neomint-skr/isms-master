---
name: check
description: ISMS repo consistency check (10 verifications)
---

Launch the `consistency-checker` agent as a subagent (haiku). It performs 10 checks: metadata ID, INDEX.md, coverage matrix, path references, SoA consistency, document structure, version format, citation keys, ref derivative, repo hygiene.

Use the Task tool with `subagent_type: "consistency-checker"` and provide as prompt:

"Run the full verification protocol (10 checks) and report the results table."

Display the result to the user as a compact table.
