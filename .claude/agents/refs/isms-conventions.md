# ISMS Conventions (Agent Reference)

**Derivative status:** This file is an agent-optimized extract. Do not modify independently.

| SSOT | Derived content |
|---|---|
| Document control (L2) | ID schema, metadata format, document structure, H1 convention, versioning, classification |
| `CLAUDE.md` | Traceability fields, three-layer model, citation, Annex A marking, subject chapter integration |

**Derivation rules:** Extract only structural/technical rules. Omit governance (RACI, review workflow, retention). Format: compact/tabular over prose.

## ID schema

Document ID = folder prefixes concatenated with `_` + filename without `.md`.

| Rule | Description |
|---|---|
| Folders | `PREFIX_Descriptive-Name/` (underscore separates prefix) |
| Files | `NN-Descriptive-Name.md` (number + hyphen + name) |
| Separator | `_` between levels, `-` within names |
| Clauses | Dot notation (e.g. `HB_CLS_7.4-Communication`) |
| Clause folders | C4..C10 are sort folders, not ID segments |

Example: `CB_Cyber-Security-Cookbook/POL_Policy-Framework/L2_Standards/01-Access-and-Identity.md` > `CB_POL_L2_01-Access-and-Identity`

## Metadata block (8 mandatory fields, fixed order)

```markdown
> **Document ID:** [Path-based]
> **Version:** 00.01.000
> **Classification:** [Confidential|Internal|Public]
> **Author:** CISO
> **ISO Reference:** [Clause or Annex A controls]
> **Last modified:** [YYYY-MM-DD]
> **Approval:** —
> **Review cycle:** annual

---
```

Exempt: REF extracts (no metadata block), TPL templates (own structure).

## Standard document structure

| Position | Element | Rule |
|---|---|---|
| After separator | `# [Document name]` | Type + topic in natural language |
| 1st H2 | `## Summary` | 3-5 sentences: context, orientation, ISMS contribution, consequence (details: `refs/style-guide.md`) |
| 2nd H2 | `## Objective and scope` | Bold labels: **Objective:** + **Scope:** (see format below) |
| Middle | Subject chapters | Document-type-specific |
| Before See also | Allocation matrix (if applicable) | Only in POL documents |
| Before See also | `## Responsibilities` (REG only) | Register maintenance info |
| Second-to-last H2 | `## See also` | Cross-references |
| Last H2 | `## Changelog` | Table: version, date, author, change (newest first) |

Prohibited synonyms for `## Objective and scope`: Zweck, Geltungsbereich, Scope, Purpose, Anwendungsbereich, Zielsetzung.
Prohibited synonym for `## See also`: Verbundene Dokumente.

**Format "## Objective and scope":**

1. Traceability fields prepended (L2/L3/L4 only)
2. `**Objective:**` — 3x2 pattern: 3 paragraphs of 2 sentences (WHY > FOR WHAT > WHERE). More informative than Summary.
3. `**Scope:**` — 1-2 sentences: WHO (roles/audience) + WHAT (scope boundaries)

| Type | Objective content | Scope content |
|---|---|---|
| CLS | Assignment purpose (clause > documents) | ISMS area + audience |
| L2 | Normative requirements/criteria | Roles + scope boundaries |
| L3 | Concrete tasks/activities | Roles + systems |
| L4 | Condensed quick reference | Target audience + usage context |
| PRC | Process result + target documents | Trigger + participating roles |
| REG | Data structure + SSOT status | Data scope + maintenance/usage |

## Subject chapter integration

Integrate new content into existing subject chapters, do not append at the end. Before insertion: read heading inventory (all H2/H3), identify matching heading. New heading only when no thematic match exists. `<!-- TODO -->` markers signal insertion points. On thematic overlap: merge, do not duplicate.

## H1 convention

No technical prefix (Policy:, Process: etc.), no clause numbers in H1.

| Document type | H1 pattern | Example |
|---|---|---|
| CLS | Topic only | `# Risks and Opportunities` |
| PRC | [Topic] Process | `# Incident Management Process` |
| REG | Type embedded in word | `# Risk Register` |
| L1 | Information Security Policy | `# Information Security Policy` |
| L2 | [Topic] Standard | `# Access and Identity Standard` |
| L3 | [Topic] Handbook/Concept | `# User Handbook` |
| L4 | [Topic] Cheat Sheet | `# Password Security Cheat Sheet` |
| AWR | Free descriptive | `# Awareness Fundamentals` |
| CB Root | Free descriptive | `# Getting Started`, `# Emergency Card` |

## Versioning

Format: `Major.Minor.Update` padded to `00.00.000`.

| Segment | Who | Trigger |
|---|---|---|
| Update (3-digit) | Agent automatically | Every content change |
| Minor (2-digit) | Only on user request | Draft milestone |
| Major (2-digit) | Approval authority | Formal approval |

On change: update +1, update `Last modified`, add changelog row. New documents: `00.01.000`.

## Classification

| Tier | Default |
|---|---|
| CB (Cookbook) | Internal |
| HB (Handbook) | Confidential |

## Policy hierarchy

| Level | Character | Question |
|---|---|---|
| L1 | Policy | WHY? Strategic principles (P1-P6) |
| L2 | Standard | WHAT? Requirements and rules |
| L3 | Handbook and Concept | HOW? Concrete guidance, checklists |
| L4 | Cheat Sheet | AT A GLANCE? Quick reference |

L2 and L3 strictly separated. L4 condenses L3 into quick references — no new requirements, no control coverage. PRC (processes) define workflow (RACI, trigger, steps) — complementary to L3.

## Traceability

| Level | Mandatory field | Format |
|---|---|---|
| L2 | `Policy reference` | Principle IDs (P1-P6) |
| L2 | `Operationalized by` | L3 short-form IDs (or `—`) |
| L3 | `Standard reference` | L2 short-form IDs |
| L3 | `Condensed by` | L4 short-form IDs (or `—`) |
| L4 | `Handbook reference` | L3 short-form IDs |

Principles P1-P6 defined in the policy (CB_POL_L1_01). Allocation matrix L1 to L2 resides there. L3 documents without L4 condensation use `—`.

## Three-layer model

CLS (HB) defines WHAT > PRC (CB) defines HOW > REG (HB) holds results.

## Citation

BIBLIOGRAPHY.md in `REF_References/LIB_Library/` is SSOT for citation keys.

| Level | Format | Example |
|---|---|---|
| Document | `[REF:key]` | `[REF:ISO22-27001]` |
| Section | `[REF:key, Cl. X]` / `[REF:key, Ch. X]` | `[REF:ISO22-27001, Cl. 6.1]` |

`## See also`: internal short-form IDs first, then `[REF:key]` entries.

## Annex A controls

93 controls (A.5.1 through A.8.34). SoA is SSOT. Controls appear as `(addresses A.x.x)` in running text, NOT as headings.

## Three-tier structure

| Tier | Path | Purpose |
|---|---|---|
| CB | `CB_Cyber-Security-Cookbook/` | Employee-facing wiki |
| HB | `HB_ISMS-Handbook/` | Confidential management documentation |
| REF | `REF_References/` | Norm extracts, reference material |
