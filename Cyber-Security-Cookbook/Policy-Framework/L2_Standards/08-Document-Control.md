> **Document ID:** CB_POL_L2_08-Document-Control
> **Version:** 00.04.020
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 7.5
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Document Control Standard

## Summary

Without uniform document control, ISMS documents lose their evidentiary value. This policy governs the entire lifecycle — from creation and identification through review and approval to retention and protection. It forms the backbone of ISMS documentation and ensures that every document is uniquely identifiable, current, and protected against unauthorized access. Without consistent document control, audit evidence is incomplete or contradictory.

## Objective and Scope

**Policy reference:** P2, P5
**Operationalized by:** —

**Objective:** ISMS documents lose their evidentiary value when versioning, identification, and access protection are not uniformly governed. Without consistent document control, audit evidence is incomplete or contradictory.

This policy governs the entire document lifecycle — from creation and identification through review and approval to retention and protection (addresses Clause 7.5.2 a-c, 7.5.3 a-f). It establishes metadata format, standard document structure, versioning scheme, and access rules as binding requirements.

The standard implements the principles P2 (Compliance) and P5 (Continual improvement) of the IS policy. It serves as the SSOT for all document formats and conventions in the ISMS and is not operationalized through a downstream L3 document.

**Scope:** All content documents in the Cookbook (CB) and ISMS Handbook (HB). Excluded are REF extracts (external standards without internal versioning) and control documents (CLAUDE.md, INDEX.md).

## Creation and Identification

Every ISMS content document begins with a **uniform metadata block** (8 fields). This fulfills the requirements of ISO 27001 Clause 7.5.2 a-c for identification, description, and review evidence.

| Field | Content | ISO source |
|---|---|---|
| Document ID | Convention-based ID from folder abbreviations (INDEX.md) + filename | 7.5.2 a |
| Version | Padded `00.01.000`: Major.Minor.Update (see Version control) | 7.5.3 e |
| Classification | Confidential / Internal / Public | A.5.12 |
| Author | Abbreviation of the document owner | 7.5.2 a |
| ISO reference | Associated clause or Annex A controls | Best practice |
| Last modified | Date of last content change (ISO 8601) | 7.5.2 a |
| Approval | Name + date (or `—` until approved) | 7.5.2 c |
| Review cycle | Planned review interval | A.5.1 |

**Template:** CB_TPL_02-Document-Metadata (in the Templates folder).

**ID scheme:** The document ID is derived from folder abbreviations defined in the INDEX.md abbreviation table. Example: `Cyber-Security-Cookbook/Policy-Framework/L2_Standards/01-Access-and-Identity.md` yields the ID `CB_POL_L2_01-Access-and-Identity`. Separators: `_` between tiers, `-` within names (addresses A.5.1).

### Standard Document Structure

Every content document follows this structure:

| Position | Element | Rule |
|---|---|---|
| File start | Metadata block | 8 mandatory fields as blockquote, followed by `---` separator |
| After separator | `# [Document name]` | Type + topic in natural language (see H1 convention) |
| 1st H2 | `## Summary` | 3-5 sentences: context, orientation, ISMS contribution, consequence |
| 2nd H2 | `## Objective and Scope` | Purpose of the document and for whom/what it applies |
| Middle | Subject chapters | Document type-specific (clause numbers, process steps, register data) |
| Before See also | Allocation matrix (if applicable) | Only in POL documents. Mapping to the parent tier |
| Penultimate H2 | `## See also` | Cross-references to related documents |
| Final H2 | `## Changelog` | Table: Version, Date, Author, Change — newest first |

**Governance sections:** L1, L2, L3, CLS, and REG do not carry standalone sections on responsibilities, approval, or review. ISMS roles, the responsibility matrix, and process RACI are centrally defined in HB_CLS_5.3-Roles-and-Responsibilities (SSOT). The review and approval process is governed in this document (section Review and Approval).

### H1 Convention

The document name (H1) integrates the document type in natural language. No technical prefix, no clause numbers.

| Document type | H1 pattern | Example |
|---|---|---|
| CLS | Topic only | `# Risks and Opportunities` |
| PRC | [Topic] Process | `# Incident Management Process` |
| REG | Type in the word | `# Risk Log` |
| L1 | Information Security Policy | `# Information Security Policy` |
| L2 | [Topic] Standard | `# Access and Identity Standard` |
| L3 | [Topic] Handbook | `# User Handbook` |
| L4 | [Topic] Cheat Sheet | `# Password Security Cheat Sheet` |
| AWR | Free descriptive | `# Awareness Fundamentals` |
| CB Root | Free descriptive | `# Getting Started` |

### Exceptions

- **REF extracts** (References/): No metadata block, no standard document structure — external sources are not versioned.
- **Templates** (Templates/): Fill-in templates with their own structure, not bound by the standard document structure.

### Organization Parameters

Organization-specific values that cannot be derived from standards or best practices are represented as bracketed placeholders (e.g. `[Organization]`, `[CISO]`) throughout ISMS documents. The Organization Parameters Register (HB_REG_VAR_01) is the single source of truth for:

- **Canonical form:** The standardized placeholder text used consistently across all documents.
- **Meta Key:** Each parameter carries a canonical dot-notation identifier (e.g. `ORG.LegalName`, `ROLE.CISO.Title`) for structured taxonomy and traceability.
- **Resolved values:** The Value column of the register holds the authoritative value for each parameter. Documents derive their values from this register exclusively.
- **Ownership:** Every parameter has a designated owner responsible for accuracy and currency.

In the blueprint, all values default to `—` (unresolved). During client onboarding, values are completed in HB_REG_VAR_01 and propagated to all consuming documents. No document may contain a resolved value that contradicts its register entry.

## Review and Approval

Every document undergoes a review and approval before initial publication (addresses 7.5.2 c).

| Document tier | Review | Approval |
|---|---|---|
| L1 (Policy) | Chief Information Security Officer ([CISO]) | CEO ([CEO]) |
| L2 (Standards) | Chief Information Security Officer ([CISO]) | CEO ([CEO]) or CTO ([CTO]) |
| L3, PRC, REG, CLS | Chief Information Security Officer ([CISO]) | IS-Coordinator ([IS-Coordinator]) |

- **Review criteria:** Content is factually correct, ISO reference verified, consistency with parent documents ensured.
- **Approval:** Major version increment (e.g., `00.02.003` > `01.00.000`) and approval field in the metadata block populated with name and date.
- **Review cycle:** As specified in the metadata field (default: [review cycle, e.g. annual]). Additional review upon significant changes to the ISMS or referenced standards.

## Distribution and Access

ISMS documentation is provided through two channels (addresses 7.5.3 a, c):

| Channel | Content | Target audience |
|---|---|---|
| Wiki | Cookbook (CB) + ISMS Handbook (HB) | Employees or ISMS team |
| File server | References (REF) — norm extracts, PDF originals | ISMS team |

- **Access by classification:**
  - *Internal* (CB): All employees via the wiki
  - *Confidential* (HB): ISMS team only (Chief Information Security Officer, IS-Coordinator, executive management)
- **Findability:** INDEX.md serves as the central table of contents. Document IDs are stable references for cross-referencing.
- Controlled versions are exclusively those published on the wiki or file server. Local copies or printouts are not considered controlled.

## Version Control

Every content change is documented traceably (addresses 7.5.3 e).

### Version Format

Padded format `Major.Minor.Update` (`00.00.000`):

| Segment | Format | Responsible | Prerequisite | Reset |
|---|---|---|---|---|
| **Major** | 2-digit | Approval authority per RACI (HB_CLS_5.3) | Formal approval by the responsible authority | Minor + Update > 00.000 |
| **Minor** | 2-digit | Chief Information Security Officer on explicit request | Deliberate draft milestone decision | Update > 000 |
| **Update** | 3-digit | Agent automatically | Any content change to the file | — |

Example: `00.01.000` > `00.01.001` > `00.01.002` > (minor milestone) > `00.02.000` > (approval by CEO) > `01.00.000`

### Change Documentation

- **Changelog table** at document end: Every change is captured with version, date, author, and description.
- **Metadata field** "Last modified": Updated with every content change.
- Older versions remain traceable through the version history.

## Records Management

All documented information classified as records (evidence of ISMS activities) is listed in a records register with title, storage location, responsible role, retention period and protection measures (Cl. 7.5). The records register ensures that audit evidence is traceable, complete and retrievable on demand.

## Retention and Disposition

Retention ensures availability and traceability throughout the entire lifecycle (addresses 7.5.3 d, f).

- **Retention:** All document versions are permanently retained in the version history.
- **Readability:** Markdown as document format ensures long-term readability (no proprietary format).
- **Disposition:** Documents that are no longer valid are marked as "withdrawn" (changelog entry + version increment). Documents are not deleted.
- **Retention period:** At least until the next recertification audit ([retention period, e.g. 3 years]).

## Protection

Protection of documented information covers confidentiality, integrity, and availability (addresses 7.5.3 b).

- **Confidentiality:** Access rights to wiki and file server are granted according to classification (see Distribution and Access).
- **Integrity:** Changes to approved documents go through the review and approval process. Unauthorized changes are prevented through access controls.
- **Availability:** Regular backups of the wiki and file server (see CB_POL_L3_05-Data-Backup).

## External Documents

Documented information of external origin is appropriately identified and controlled (addresses 7.5.3 final paragraph).

- **Storage:** References/Library/ on the file server (Markdown extracts + PDF originals).
- **Identification:** Filename with sequential number and short title (e.g., `01-ISO-27001-Extract`). No metadata block, as external sources are not versioned internally.
- **Currency:** When standards are updated or new editions are released, check whether extracts are still valid and update as needed.

## See also

- HB_CLS_5.3-Roles-and-Responsibilities — RACI for document review and approval
- HB_CLS_7.5-Documented-Information — ISO requirement for documented information
- CB_POL_L2_07-Organisation — Governance, policy compliance
- CB_TPL_02-Document-Metadata — Metadata block template
- HB_REG_VAR_01-Variable-Parameters — Organization Parameters Register (client survey questionnaire)

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.04.019 | 2026-02-21 | Claude (AI) | Rename Variable Parameters to Organization Parameters; add Meta Key concept and ownership |
| 00.04.018 | 2026-02-20 | Claude (AI) | Add Variable Parameters subsection — SSOT principle for HB_REG_VAR_01 |
| 00.04.017 | 2026-02-20 | Claude (AI) | Add HB_REG_VAR_01 cross-reference to See also (MECE orphan fix) |
| 00.04.016 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.04.015 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.04.014 | 2026-02-11 | CISO | Add Records Management section with records register requirement (Cl. 7.5) |
| 00.04.013 | 2026-02-11 | CISO | H1 convention table: added L4 Cheat Sheet pattern |
| 00.04.012 | 2026-02-10 | Claude (AI) | Remove REG Responsibilities from document structure; consolidate governance in CLS 5.3 |
| 00.04.011 | 2026-02-10 | CISO | Folder paths updated after prefix removal; pre-existing German path names corrected |
| 00.04.010 | 2026-02-09 | CISO | Aligned role terminology |
| 00.04.009 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.04.008 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.04.007 | 2026-02-08 | CISO | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.04.006 | 2026-02-08 | CISO | Document structure table repaired (broken table cell See-also/Changelog) and missing allocation matrix row added |
| 00.04.005 | 2026-02-08 | CISO | Document structure: ## Roles (PRC) removed — RACI centralized in CLS_5.3 (follow-up from 2026-02-07 decision) |
| 00.04.004 | 2026-02-08 | CISO | References: HB_TPL->CB_TPL (TPL relocation) |
| 00.04.003 | 2026-02-07 | CISO | Library storage updated to References/Library/ |
| 00.04.002 | 2026-02-07 | CISO | AGENTS.md reference replaced with CLAUDE.md |
| 00.04.001 | 2026-02-07 | CISO | See-also section added |
| 00.04.000 | 2026-02-07 | CISO | Version control migrated to Major.Minor.Update scheme |
| 00.03.000 | 2026-02-07 | CISO | Governance convention: roles/responsibilities in standard document structure, reference to CLS_5.3 |
| 00.02.000 | 2026-02-07 | CISO | Content populated for all sections, document structure convention integrated |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
