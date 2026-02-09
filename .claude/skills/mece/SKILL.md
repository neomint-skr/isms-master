---
name: mece
description: MECE verification of ISMS architecture (6 checks)
---

Launch the `mece-checker` agent as a subagent (sonnet). It performs 6 checks: control distribution, L2/L3 separation, traceability, principle coverage, CLS-PRC-REG chain, orphaned registers.

Use the Task tool with `subagent_type: "mece-checker"` and provide as prompt:

"Run the full MECE verification protocol (6 checks) and report the results table."

Display the result to the user as a compact table.
