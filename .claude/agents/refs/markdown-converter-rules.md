# Format Rules for Markdown Extracts

**SSOT status:** Primary source. Not derived.

This file is read by the markdown-converter agent in phase 5.

## Header format

```markdown
# [Document Title] Extract

> Source: [Exact citation with edition/date].
> Complete lean extract for agent processing.
> Original: [Language]. Extract: [Language]. In case of doubt the original prevails.
> PDFs are retained as originals (audit evidence).
```

## Format rules

| Element | Format | When to use |
|---|---|---|
| Structured requirement lists (a, b, c) | Table `\| # \| Requirement \|` | Whenever the source has numbered/lettered items |
| Narrative sections | Running text | Introductions, context descriptions, explanations |
| Informative notes | `> NOTE: [Text]` | Non-normative remarks, cross-references, examples |
| Documentation obligations | `**[Marker]:** [Text]` | Where the document requires documented evidence |
| Sub-items | Inline numbering `1) ... 2) ...` | When requirements have nested sub-items |
| Abbreviations | Legend table at end of file | All abbreviations used in the extract |

## Completeness rules

- Every "shall/must" statement gets its own line or table row
- Every NOTE/remark captured as `> NOTE:`
- Every cross-reference with clause/section number
- Every annex/appendix in full (do not summarize!)
- Numbered sub-items (e.g. c) 1), c) 2)) written out explicitly

## Known pitfalls

These errors occurred during the initial ISO 27001 extraction. Avoid them:

| Error | Prevention |
|---|---|
| NOTEs overlooked | Explicitly search for "NOTE", "Anmerkung", "Hinweis" in raw text |
| Annexes/appendices omitted or summarized | Annexes are often normative — always extract in full |
| Sub-items swallowed | With nested lists (a > 1, 2) extract each sub-item individually |
| Introductory clauses forgotten | Scope, normative references, terms — belong in the extract |
| Documentation obligations missed | Search for "documented information", "retain", "maintain" |
| Writing before reading | ALWAYS read the entire document first (phase 3) |
