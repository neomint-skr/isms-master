# Skeleton Filling (Agent Reference)

**SSOT status:** Primary source. Not derived.

Rules for populating skeleton documents with draft text. Goal: consistent separation between finished text and organization-specific variables.

## Core principle

Text derivable from ISO standards, BSI standards or general best practices is written directly as finished text. Values only the organization can determine are marked as variables in square brackets with a description.

## Categories

| Category | Format | Example |
|---|---|---|
| Norm/best-practice text | Direct text | "Access is granted per the principle of least privilege." |
| Organization-specific | `[Description]` | `[Locations and legal form of the organization]` |
| Decision required | `[Option A \| Option B — criterion]` | `[annually \| semi-annually — depending on risk posture]` |
| Tool/product | `[Tool category, e.g. product]` | `[Password manager, e.g. Bitwarden/1Password]` |
| Threshold/deadline | `[Value — context]` | `[24-72h — for critical vulnerabilities]` |
| Known roles | Direct text | "CISO (CISO)" |
| Unknown roles | `[Role — context]` | `[IT service provider/internal admin]` |
| Process details (internal) | `[Description]` | `[Approval workflow for access requests]` |

## Rules

| # | Rule |
|---|---|
| 1 | Annex A controls always directly as `(addresses A.x.x)` in running text — never as variable |
| 2 | Citation keys always inserted directly: `[REF:key]` or `[REF:key, Cl. X]` |
| 3 | Internal cross-references (See also, Standard reference) directly as short-form IDs |
| 4 | Metadata block fully populated — no variables in metadata |
| 5 | Variable description short but unambiguous: what goes in, not how |
| 6 | Style level of the target document type must be observed (see `refs/style-guide.md`) |
| 7 | L2 text: WHAT (requirement), never HOW (implementation) — HOW belongs in L3/PRC |
| 8 | Preserve existing content: supplement under existing headings, do not append at end. Replace `<!-- TODO -->` markers with text. |
| 8a | On thematic overlap (skeleton + new source on the same topic): merge content. Do not create a second heading for the same topic. |
| 9 | Observe TRIM/CAVEAT notes from checker feedback (provided in task description) |
| 10 | One variable per fact — do not nest multiple variables in a single sentence |
| 11 | **Objective:** is the primary definition (1-2 sentences), **Scope:** defines space/audience (1-2 sentences). Summary is a distillation, written last. Objective must be more informative than Summary. |

## Example: L2 paragraph with variables

```markdown
### Access control

Access to information and information processing facilities
is governed by the principle of least privilege (addresses A.5.15).
Access rights are granted exclusively on the basis of documented
business requirements.

Privileged access rights are handled restrictively and limited to
[personnel with privileged access, e.g. IT admins, DevOps]
(addresses A.8.2). Provisioning follows
[approval workflow for privileged rights].
Privileged accounts are reviewed [annually | semi-annually — depending
on risk classification].
```

## Example: PRC paragraph with variables

```markdown
### Step 3: Assessment

The ISO assesses the reported vulnerability based on its CVSS score
and relevance to the organization's infrastructure.

| Criticality | CVSS | Patch deadline |
|---|---|---|
| Critical | 9.0-10.0 | [24-72h — depending on exploitability] |
| High | 7.0-8.9 | [7 days] |
| Medium | 4.0-6.9 | [30 days] |
| Low | 0.1-3.9 | [90 days / next maintenance window] |
```
