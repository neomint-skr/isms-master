---
name: blueprint-check
description: Validate client ISMS against master blueprint (10 phases)
---

Launch the `blueprint-compliance-checker` agent as a subagent (sonnet). It runs the blueprint-compliance-validator script against a client repo and interprets the results.

Use the Task tool with `subagent_type: "blueprint-compliance-checker"` and provide as prompt:

"Run the blueprint compliance validation against CLIENT_REPO=$args (default: ../isms-retorio). Execute the script, present results, and analyze any failures with remediation recommendations."

Replace `$args` with the user-provided client repo path, or use `../isms-retorio` if no path was provided.

Display the result to the user as the phase summary table plus any remediation details.
