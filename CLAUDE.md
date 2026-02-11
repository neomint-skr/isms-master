# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Central ISMS blueprint for all clients. Policies, handbooks and controls are developed and maintained here. Improvements propagate across all client deployments.

## Global Config

Global rules and user profile are deployed from `claude-code-master` (`gitlab.com/neomint-skr/claude-code-master`) to `~/.claude/` and apply automatically. Changes go there, not here.

## Conventions

### MCP Servers

`.mcp.json` in the repo root defines active MCP servers.

Active servers: sequential-thinking, basic-memory, context7.

**Data sovereignty:** When an MCP server provides data access, that data is accessed exclusively through its MCP tools — never via Read, Edit, Write or Grep directly. On server failure: repair the server, do not read data directly. Permission blocks in `settings.json` enforce this for known MCP data paths.

| MCP Server | Managed Directory | Blocked For |
|---|---|---|
| basic-memory | `.memory/` | Read, Edit, Write |

**Mandatory usage:** Certain MCP servers must be actively used in defined contexts.

| MCP Server | Required Context | Fallback on Failure |
|---|---|---|
| sequential-thinking | Plan mode (any planning activity) | Restart server via `/mcp` |
| context7 | Library/framework research | WebSearch/WebFetch |

### Three-Tier Structure

| Tier | Path | Purpose |
|---|---|---|
| CB — Cookbook | `Cyber-Security-Cookbook/` | Employee wiki (onboarding, emergency card, FAQ, policy framework L1-L4, processes, awareness, templates) |
| HB — Handbook | `ISMS-Handbook/` | Confidential management documentation (clauses, registers, management documents, audit) |
| REF — References | `References/` | Standard extracts, reference material (MD extracts + PDF originals) |

### Policy Hierarchy

| Level | Type | Key Question | Example |
|---|---|---|---|
| L1 | Policy | WHY? Strategic principles | "We protect our information assets" |
| L2 | Standard | WHAT? Requirements and rules | "Access is granted based on least privilege" |
| L3 | Handbook and Concept | HOW? Concrete instructions, checklists, tools | "How to set up MFA: Step 1..." |
| L4 | Cheat Sheet | AT A GLANCE? Quick reference | "Password: min 12 chars, MFA mandatory, never share" |

L2 and L3 are strictly separated: L2 defines requirements, L3 operationalizes them. L4 condenses L3 into quick references — no new requirements, no control coverage. PRC (processes) define the workflow (RACI, triggers, steps) — complementary to L3.

### Three-Layer Model

CLS (HB) defines WHAT (criteria, scales), PRC (CB) defines HOW (workflow, RACI, triggers), REG (HB) holds results (records). MGT (HB) tracks governance activities (roadmap, meeting log, open items). AUD (HB) manages audits (internal audit programme + supplier reviews) and evidence.

### ID Schema

Convention-based: Document ID is constructed from folder abbreviations + filename (without .md). Abbreviations are defined in the INDEX.md abbreviation table.

| Rule | Description |
|---|---|
| Folders | `Descriptive-Name/` (abbreviation defined in INDEX.md) |
| Folders (exception) | `LN_` (policy levels) and `CN_` (clause groups) retain prefix in folder name |
| Files | `NN-Descriptive-Name.md` (number + hyphen + name) |
| Document ID | Folder abbreviations + `_` + filename (e.g. `CB_POL_L1_01-Policy`) |
| Separator | `_` between levels, `-` within names |
| Clauses | Dot notation instead of number (e.g. `HB_CLS_7.4-Communication`) |
| Clause folders | C04..C10 are sort folders, not ID segments |

### Document Format

All ISMS content documents are Markdown (.md) with a metadata block (blockquote), `---` separator, then content.

Metadata block (8 mandatory fields, fixed order): Document ID (path-based), Version (`00.00.000`), Classification (Confidential/Internal/Public), Author, ISO reference, Last modified (YYYY-MM-DD), Approval (`—` until approved), Review cycle.

### Document Structure

Every content document (with metadata block) follows this layout:

| Position | Element | Rule |
|---|---|---|
| After separator | `# [Document name]` | Type + topic in natural language (see H1 convention) |
| 1st H2 | `## Summary` | 3-5 sentences: context, orientation, ISMS contribution, consequence (details in `refs/style-guide.md`) |
| 2nd H2 | `## Objective and Scope` | Bold labels: Objective + Scope (details below). REG documents include `### Key` table for register-specific terminology |
| Middle | Subject chapters | Document-type specific (clause numbers, process steps, register data) |
| Before See also | Allocation matrix (if applicable) | Only in POL documents. Mapping to parent level (e.g. L1 to L2) |
| Second-to-last H2 | `## See also` | Cross-references to related documents |
| Last H2 | `## Changelog` | Table: Version, Date, Author, Change — newest version first |

Excluded: REF extracts (no metadata block), TPL templates (fill-in documents; exceptions: TPL_01, TPL_02, TPL_17, TPL_18 are Markdown), and Records (evidence files in Registers/Records/ and Audit/*/Records/ — no metadata block).

### Objective and Scope (Layout)

Every `## Objective and Scope` section follows this layout:

1. Traceability fields (L2/L3/L4/REG only, see Traceability section)
2. `**Objective:**` — 3x2 pattern: 3 paragraphs of 2 sentences each (WHY, WHAT FOR, WHERE)
3. `**Scope:**` — 1-2 sentences: WHO (roles/audience) + WHAT (scope boundaries)

**Relationship to Summary:** Objective is the primary, more informative definition. Summary is the distillate (4-element pattern) and is written last.

**3x2 pattern:** WHY (problem/needs context), WHAT FOR (outcome/value contribution), WHERE (embedding in document system). Type-specific guiding questions: `refs/style-guide.md`.

### H1 Convention

Document name = type + topic in natural language. No technical prefix (Policy:, Process: etc.), no clause numbers in H1. Type-specific patterns and examples: `refs/isms-conventions.md`.

### Versioning

Format: `Major.Minor.Update` — zero-padded to `00.00.000`.

| Segment | Format | Responsible | Prerequisite | Reset |
|---|---|---|---|---|
| Major | 2-digit | Approval authority per RACI | Formal approval | Minor + Update to 00.000 |
| Minor | 2-digit | Only on explicit user request | User requests draft milestone | Update to 000 |
| Update | 3-digit | Agent automatically | Any content change | — |

Example: `00.01.000` > `00.01.001` > `00.01.002` > (Minor) > `00.02.000` > (Approval) > `01.00.000`

**Agent rule:** On every content change to an ISMS document:
1. Increment update counter by 1
2. Set `Last modified` to current date
3. Add changelog entry (version, date, author, change description)
4. No minor/major bump without explicit user request

### Traceability

Each level references its predecessor level in the `## Objective and Scope` section:

| Level | Required Field | Format | Example |
|---|---|---|---|
| L2 | Policy reference | Principle IDs | `**Policy reference:** P1, P3` |
| L2 | Operationalized by | L3 short-form IDs | `**Operationalized by:** CB_POL_L3_04, CB_POL_L3_05` |
| L3 | Standard reference | L2 short-form IDs | `**Standard reference:** CB_POL_L2_01, CB_POL_L2_02` |
| L3 | Condensed by | L4 short-form IDs (or `—`) | `**Condensed by:** CB_POL_L4_01, CB_POL_L4_03` |
| L4 | Handbook reference | L3 short-form IDs | `**Handbook reference:** CB_POL_L3_01, CB_POL_L3_02` |

Principles P1-P6 are defined in the policy (CB_POL_L1_01). L2 documents without L3 operationalization omit "Operationalized by". L3 documents without L4 condensation use `—`.

### Reference Citation

External sources reside in `References/Library/` as PDF originals + MD extracts.

**Filenames:** `Author_Year_ShortTitle.ext` / `Author_Year_ShortTitle-Extract.md`. `nd` = no date.

**BIBLIOGRAPHY.md** in `Library/` is SSOT for citation keys.

**Citation keys:** `[REF:key]` (document), `[REF:key, Cl. X]` (ISO/BSI), `[REF:key, Ch. X]` (templates/ISACA). Agent rules and examples: `refs/isms-conventions.md`.

### Annex A Controls and SoA

93 controls from ISO 27001:2022 Annex A. SoA (Statement of Applicability) is SSOT for control applicability. Controls do NOT appear as headings but as `(addresses A.x.x)` references in body text.

### Dependency Rules

- **Vertical:** Policy > Standards > Handbooks/Concepts > Cheat Sheets > Processes. Changes propagate top-down.
- **Horizontal:** SoA (SSOT) > Coverage Matrix (INDEX.md) > Documents. Never the reverse.
- **Control coverage:** Each of the 93 Annex A controls must be addressed in at least one document.
- **Terminology:** Consistent terms across all files.

### Storage Strategy

Four layers, no duplication:

| Layer | Location | Purpose | Git |
|---|---|---|---|
| Session | Auto-Memory (`MEMORY.md`) | Current session: what am I working on | No |
| Project memory | `.memory/*.md` (MCP) | Decisions, learnings, progress | Yes |
| Agent knowledge | `.claude/agents/refs/` | SSOT derivatives, conventions | Yes |
| ISMS content | `Cyber-Security-Cookbook/`, `ISMS-Handbook/`, `References/` | Certification artifacts | Yes |

**Routing:** Session = ephemeral (overwritten). Persistent knowledge goes to `.memory/`. Agent rules go to `refs/`. ISMS documents go to subject folders. When session content should persist, move it to `.memory/`.

### Skeleton Filling

When populating skeleton documents with draft text: standard/best-practice content is written as final text, organization-specific values as `[description]` in square brackets. Detailed rules and examples in `.claude/agents/refs/skeleton-filling.md`.

### Changes

- New files: Update INDEX.md
- Control assignment changed: SoA first, then coverage matrix in INDEX.md
- Structural change: Review CLAUDE.md + INDEX.md
- Convention change: Review agent instructions in `.claude/agents/`

### Roles

| Role | Abbreviation | Responsibility |
|---|---|---|
| Chief Information Security Officer (CISO) | CISO | Conception, documentation, advisory |
| IS-Coordinator | ISC | Operational implementation |
| CEO | CEO | Strategic approval |
| CTO | CTO | Technical approval |

### Navigation

Structural data (files, headings, control mapping) resides in `INDEX.md`. Read INDEX.md first.

### Agents

Available agents (`.claude/agents/`):

| Name | Type | Purpose |
|---|---|---|
| `consistency-checker` | Agent (haiku) | 10 checks: metadata ID, INDEX, coverage, paths, SoA, structure, version, citation keys, ref derivative, repo hygiene |
| `mece-checker` | Agent (sonnet) | 6 checks: control distribution, L2/L3 separation, traceability, principles, CLS>PRC>REG, orphaned REG |
| `document-writer` | Agent (sonnet) | Create new documents or align existing ones to conventions |
| `markdown-converter` | Agent (sonnet) | PDF to verified lean Markdown extract (7-phase workflow) |
| `librarian` | Agent (haiku) | Searches reference library, delivers briefing with citations |
| `researcher` | Agent (sonnet) | Subject-matter synthesis through triangulation of library sources |
| `library-analyst` | Team agent (sonnet) | Decompose library sources, route elements, write draft text |
| `library-verifier` | Team agent (sonnet) | Side-effect review: traceability, SoA, hierarchy, style, cross-references |
| `library-lean-checker` | Team agent (sonnet) | Lean review: minimality, necessity, elegance, redundancy |
| `library-certification-checker` | Team agent (sonnet) | ISO certification review: documented information obligations, audit trail, coverage |
| `library-standards-check` | Team agent (haiku) | ISO/BSI cross-check + gap analysis |

**Workflows:**
- **Subject-matter question** — Two-step: `librarian` (source search) then `researcher` (synthesis + recommendation). Librarian also usable standalone.
- **Consistency check** — `consistency-checker` subagent.
- **Document change** — Main context (direct control).
- **Library mining** — Agent team: analyst(s) then verifier + lean-checker + certification-checker + standards-check (parallel). Output: recommendation report in `.temp/`.

**Agent references (refs/):** Refs can be derivatives (with SSOT reference, change direction SSOT to ref) or primary originals (ARE the SSOT). Derivative: `refs/isms-conventions.md` (SSOT: document control policy + CLAUDE.md). Originals: `refs/style-guide.md`, `refs/skeleton-filling.md`, `refs/library-routing-logic.md`, `refs/markdown-converter-rules.md`. Consistency checker verifies derivative alignment.

### Language

Document content: English. Filenames: Mixed — Cookbook English (ISO-aligned), ISMS Handbook English (ISO-aligned), REF English. Control documents: English.

**Style guide:** Style per document type defined in `.claude/agents/refs/style-guide.md`. Agents read this when creating or editing documents.
