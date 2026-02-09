# Template: Document Metadata

> Copy template for new ISMS documents. Place the block at the beginning of the file and adjust the values.
> ISO Reference: Clause 7.5.2 a (identification), 7.5.3 e (change control).

## Block (copy)

```markdown
> **Document ID:** {PREFIX_Filename}
> **Version:** 00.01.000
> **Classification:** Internal
> **Author:** {Initials}
> **ISO Reference:** {Clause or A.x.x}
> **Last modified:** {YYYY-MM-DD}
> **Approval:** —
> **Review cycle:** Annual

---
```

## Field descriptions

| Field | Instructions | Example |
|---|---|---|
| Document ID | Folder prefixes concatenated + filename without .md | CB_POL_L2_01-Access-and-Identity |
| Version | Semver: 0.x.0 = draft, 1.x.0 = approved | 00.01.000 |
| Classification | Confidential (HB), Internal (CB), Public | Internal |
| Author | Initials: CISO, [IS-Coordinator], [CEO], [CTO] | CISO |
| ISO Reference | Associated clause or Annex A controls | A.5.15-5.18 |
| Last modified | Date of last substantive change (ISO 8601) | 2026-02-06 |
| Approval | Name + date after review, until then `—` | [CEO] 2026-03-15 |
| Review cycle | Next scheduled review | Annual |

## Rules

- Block goes **before** the first heading (`# Title`)
- After the block: blank line -> `---` -> blank line -> heading
- Reference extracts (REF) do **not** receive a block
- Templates (CB_TPL) have their own metadata appropriate to the form type
- Change history is covered by the git log (no separate field)
