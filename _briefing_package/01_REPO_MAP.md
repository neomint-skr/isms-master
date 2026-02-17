# Repository Map

> ISMS master repository — external reviewer reference. No direct repo access required.
> Generated: 2026-02-17.

---

## Three-Tier Architecture

The repository is organised into three tiers with distinct purposes and confidentiality levels.

| Tier | Root Folder | Abbreviation | Purpose | Classification |
|---|---|---|---|---|
| CB — Cookbook | `Cyber-Security-Cookbook/` | CB | Employee-facing wiki: onboarding, emergency card, FAQ, policy framework L1-L4, processes, awareness, templates | Internal / Public |
| HB — Handbook | `ISMS-Handbook/` | HB | Confidential management documentation: ISO clause definitions, registers, management documents, audit | Confidential |
| REF — References | `References/` | REF | Standard extracts and reference material: MD extracts + PDF originals | Internal |

**CB** is the operational layer — what employees see and use. **HB** is the governance layer — what auditors and management see. **REF** is the knowledge base — what authors use to write CB and HB content.

---

## Folder Tree (4 Levels)

```
Cyber-Security-Cookbook/
Cyber-Security-Cookbook/Awareness-Training/
Cyber-Security-Cookbook/Policy-Framework/
Cyber-Security-Cookbook/Policy-Framework/L1_Policy/
Cyber-Security-Cookbook/Policy-Framework/L2_Standards/
Cyber-Security-Cookbook/Policy-Framework/L3_Handbooks-and-Concepts/
Cyber-Security-Cookbook/Policy-Framework/L4_Cheat-Sheets/
Cyber-Security-Cookbook/Processes/
Cyber-Security-Cookbook/Templates/
ISMS-Handbook/
ISMS-Handbook/Audit/
ISMS-Handbook/Audit/Internal/
ISMS-Handbook/Audit/Internal/Records/
ISMS-Handbook/Audit/Supplier/
ISMS-Handbook/Audit/Supplier/Records/
ISMS-Handbook/Definitions/
ISMS-Handbook/Definitions/C04_Context/
ISMS-Handbook/Definitions/C05_Leadership/
ISMS-Handbook/Definitions/C06_Planning/
ISMS-Handbook/Definitions/C07_Support/
ISMS-Handbook/Definitions/C08_Operation/
ISMS-Handbook/Definitions/C09_Performance/
ISMS-Handbook/Definitions/C10_Improvement/
ISMS-Handbook/Management/
ISMS-Handbook/Management/Minutes/
ISMS-Handbook/Registers/
ISMS-Handbook/Registers/Exception-Register/
ISMS-Handbook/Registers/Exception-Register/Records/
ISMS-Handbook/Registers/Protection-Requirements/
ISMS-Handbook/Registers/Protection-Requirements/1-Information/
ISMS-Handbook/Registers/Protection-Requirements/2-Process/
ISMS-Handbook/Registers/Protection-Requirements/3-Application/
ISMS-Handbook/Registers/Protection-Requirements/4-Physical-IT-System/
ISMS-Handbook/Registers/Protection-Requirements/5-Virtual-IT-System/
ISMS-Handbook/Registers/Protection-Requirements/6-Communication-Connection/
ISMS-Handbook/Registers/Protection-Requirements/7-Room/
ISMS-Handbook/Registers/Protection-Requirements/8-Building/
ISMS-Handbook/Registers/Risk-Assessments/
ISMS-Handbook/Registers/Risk-Assessments/1-Information/
ISMS-Handbook/Registers/Risk-Assessments/2-Process/
ISMS-Handbook/Registers/Risk-Assessments/3-Application/
ISMS-Handbook/Registers/Risk-Assessments/4-Physical-IT-System/
ISMS-Handbook/Registers/Risk-Assessments/5-Virtual-IT-System/
ISMS-Handbook/Registers/Risk-Assessments/6-Communication-Connection/
ISMS-Handbook/Registers/Risk-Assessments/7-Room/
ISMS-Handbook/Registers/Risk-Assessments/8-Building/
ISMS-Handbook/Registers/Risk-Framework/
ISMS-Handbook/Registers/Risk-Framework/Threats/
ISMS-Handbook/Registers/Risk-Framework/Vulnerabilities/
ISMS-Handbook/Registers/Security-Measures/
References/
References/Library/
References/Library/Policy Templates/
References/Library/Standards/
```

---

## Abbreviation Table

| Abbr | Meaning | Path |
|---|---|---|
| CB | Cookbook | Cyber-Security-Cookbook/ |
| HB | Handbook | ISMS-Handbook/ |
| POL | Policy framework | Policy-Framework/ |
| L1 | Level 1 (Policy) | L1_Policy/ |
| L2 | Level 2 (Standards) | L2_Standards/ |
| L3 | Level 3 (Handbooks and Concepts) | L3_Handbooks-and-Concepts/ |
| L4 | Level 4 (Cheat Sheets) | L4_Cheat-Sheets/ |
| AUD | Audit | Audit/ |
| AUD_INT | Internal audit | Audit/Internal/ |
| AUD_SUP | Supplier review | Audit/Supplier/ |
| AWR | Awareness | Awareness-Training/ |
| TPL | Template | Templates/ |
| REF | References | References/ |
| LIB | Library (norm extracts) | Library/ |
| CLS | Clause (definitions) | Definitions/ |
| C04..C10 | Clause sorting | C04_Context/ .. C10_Improvement/ |
| MGT | Management | Management/ |
| REG | Register | Registers/ |
| REG_EXC | Exception register | Registers/Exception-Register/ |
| REG_RF | Risk framework | Registers/Risk-Framework/ |
| SM | Security Measures | Registers/Security-Measures/ |
| PRC | Process | Processes/ |
| HB_CLS_C05 | (folder) | Definitions/C05_Leadership/ (3 files) |
| HB_CLS_C09 | (folder) | Definitions/C09_Performance/ (3 files) |

---

## Naming Conventions

**Folder naming:** `Descriptive-Name/` in PascalCase-with-hyphens. Each folder has an abbreviation defined in the Abbreviation Table above. Exception: policy level folders (`L1_`, `L2_` etc.) and clause sort folders (`C04_` etc.) retain their prefix in the folder name.

**File naming:** `NN-Descriptive-Name.md` — two-digit number, hyphen, descriptive name in PascalCase. Clause files use dot notation instead: `7.4-Communication.md`.

**Document ID:** Constructed by concatenating folder abbreviations with `_` as separator, then `_` and the filename without extension. Examples:

| File path | Document ID |
|---|---|
| `Cyber-Security-Cookbook/Policy-Framework/L2_Standards/11-Risk-Management.md` | `CB_POL_L2_11-Risk-Management` |
| `Cyber-Security-Cookbook/Processes/07-Risk-Management.md` | `CB_PRC_07-Risk-Management` |
| `ISMS-Handbook/Registers/05-Risk-Register.md` | `HB_REG_05-Risk-Register` |
| `ISMS-Handbook/Definitions/C06_Planning/6.1-Risks-and-Opportunities.md` | `HB_CLS_6.1-Risks-and-Opportunities` |

**Separator rules:**
- `_` between hierarchical levels (tier, type, level, filename)
- `-` within a name segment (multi-word names, clause numbers with dot notation)
- Clause documents use dot notation: `6.1`, `7.4`, `8.2` etc.

---

## Policy Hierarchy

| Level | Type | Key Question | Example |
|---|---|---|---|
| L1 | Policy | WHY? Strategic principles | Management commitment, 6 principles P1-P6, scope, approval |
| L2 | Standard | WHAT? Requirements and rules | "Risk criteria defined, 4x4 matrix, treatment options" |
| L3 | Handbook / Concept | HOW? Concrete instructions | "BIA methodology, step-by-step continuity planning" |
| L4 | Cheat Sheet | AT A GLANCE? Quick reference | Key rules condensed to one page (currently empty — to be populated) |

**Traceability chain:** L1 principles (P1-P6) are referenced by L2 standards. L2 standards reference their L3 handbooks. L3 handbooks reference their L4 cheat sheets. This chain is documented in the `## Objective and Scope` section of each document.

---

## Three-Layer Model

The ISMS operates on three functional layers that together form a closed cycle: define criteria, execute workflow, record results.

| Layer | Document Type | Role | Location |
|---|---|---|---|
| CLS (Clause definitions) | HB Definitions | WHAT — criteria, scales, decision rules | `ISMS-Handbook/Definitions/` |
| PRC (Processes) | CB Processes | HOW — workflow, RACI, triggers, steps | `Cyber-Security-Cookbook/Processes/` |
| REG (Registers) | HB Registers | RESULT — records, evidence, tracking | `ISMS-Handbook/Registers/` |

**Risk process example:**

| Step | Layer | Document | Content |
|---|---|---|---|
| Define risk criteria | CLS | `HB_CLS_6.1-Risks-and-Opportunities` | 4x4 matrix, likelihood/impact scales, acceptance thresholds |
| Define risk standard | L2 | `CB_POL_L2_11-Risk-Management` | Risk criteria, protection requirement categories, treatment options, roles |
| Execute assessment | PRC | `CB_PRC_07-Risk-Management` | Step-by-step workflow: asset → threat → vulnerability → scoring → treatment decision |
| Execute protection req. | PRC | `CB_PRC_13-Protection-Requirements` | Primary assessment, inheritance logic, documentation steps |
| Record results | REG | `HB_REG_05-Risk-Register` | Scenario-based risk entries, scores, acceptance decisions |
| Record treatment | REG | `HB_REG_06-Risk-Treatment-Plan` | Controls per risk, owners, deadlines, gap tracking |
| Record applicability | REG | `HB_REG_08-Statement-of-Applicability` | 93 Annex A controls — SSOT for applicability and coverage |

The SoA (`HB_REG_08`) is the single source of truth (SSOT) for control applicability. It drives the Coverage Matrix in INDEX.md, which in turn drives document assignment.

---

## Coverage Matrix (Annex A)

> Derived from `HB_REG_08-Statement-of-Applicability` (SSOT). Shows primary document + secondary document per control. Short-form IDs (without descriptive suffix).

### A.5 Organizational Controls (37)

| Control | Primary | Secondary |
|---|---|---|
| 5.1 | CB_POL_L1_01 | HB_CLS_5.2 |
| 5.2 | HB_CLS_5.3 | CB_POL_L2_07 |
| 5.3 | CB_POL_L2_07 | |
| 5.4 | HB_CLS_5.1 | CB_POL_L2_07 |
| 5.5 | CB_POL_L2_07 | |
| 5.6 | CB_POL_L2_07 | |
| 5.7 | CB_POL_L2_03 | CB_POL_L2_13, CB_PRC_04 |
| 5.8 | CB_POL_L2_04 | |
| 5.9 | HB_REG_03 | CB_PRC_12, CB_POL_L2_07 |
| 5.10 | CB_POL_L2_07 | CB_POL_L3_01 |
| 5.11 | CB_POL_L2_07 | |
| 5.12 | CB_POL_L2_02 | CB_POL_L3_01 |
| 5.13 | CB_POL_L2_02 | CB_POL_L3_01 |
| 5.14 | CB_POL_L2_02 | |
| 5.15 | CB_POL_L2_01 | CB_POL_L3_02, CB_PRC_02 |
| 5.16 | CB_POL_L2_01 | CB_PRC_02 |
| 5.17 | CB_POL_L2_01 | CB_POL_L3_04 |
| 5.18 | CB_POL_L2_01 | CB_PRC_02 |
| 5.19 | CB_POL_L2_05 | CB_PRC_06 |
| 5.20 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.21 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.22 | CB_POL_L2_05 | CB_PRC_06 |
| 5.23 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.24 | CB_POL_L2_13 | CB_PRC_01, CB_Emergency-Card |
| 5.25 | CB_POL_L2_13 | CB_PRC_01 |
| 5.26 | CB_POL_L2_13 | CB_PRC_01 |
| 5.27 | CB_POL_L2_13 | CB_PRC_01 |
| 5.28 | CB_POL_L2_13 | CB_PRC_01 |
| 5.29 | CB_POL_L2_06 | CB_POL_L3_05, CB_POL_L3_08, HB_REG_04 |
| 5.30 | CB_POL_L2_06 | CB_POL_L3_05, CB_POL_L3_08, HB_REG_04 |
| 5.31 | CB_POL_L2_14 | |
| 5.32 | CB_POL_L2_14 | |
| 5.33 | CB_POL_L2_14 | |
| 5.34 | CB_POL_L2_14 | |
| 5.35 | HB_CLS_9.2 | CB_POL_L2_14 |
| 5.36 | CB_POL_L2_14 | HB_CLS_9.1 |
| 5.37 | CB_POL_L2_14 | CB_POL_L2_08 |

### A.6 People Controls (8)

| Control | Primary | Secondary |
|---|---|---|
| 6.1 | CB_POL_L2_10 | |
| 6.2 | CB_POL_L2_10 | CB_AWR_02 |
| 6.3 | CB_POL_L2_10 | CB_AWR_01 |
| 6.4 | CB_POL_L2_10 | |
| 6.5 | CB_POL_L2_10 | CB_POL_L2_01 |
| 6.6 | CB_POL_L2_10 | CB_AWR_02 |
| 6.7 | CB_POL_L2_10 | CB_POL_L3_01 |
| 6.8 | CB_POL_L2_10 | CB_POL_L3_01, CB_PRC_01, CB_Emergency-Card |

### A.7 Physical Controls (14)

| Control | Primary | Secondary |
|---|---|---|
| 7.1 | CB_POL_L2_09 | |
| 7.2 | CB_POL_L2_09 | |
| 7.3 | CB_POL_L2_09 | |
| 7.4 | CB_POL_L2_09 | |
| 7.5 | CB_POL_L2_09 | |
| 7.6 | CB_POL_L2_09 | |
| 7.7 | CB_POL_L2_09 | CB_POL_L3_01 |
| 7.8 | CB_POL_L2_09 | |
| 7.9 | CB_POL_L2_09 | |
| 7.10 | CB_POL_L2_09 | |
| 7.11 | CB_POL_L2_09 | |
| 7.12 | CB_POL_L2_09 | |
| 7.13 | CB_POL_L2_09 | |
| 7.14 | CB_POL_L2_09 | |

### A.8 Technological Controls (34)

| Control | Primary | Secondary |
|---|---|---|
| 8.1 | CB_POL_L2_03 | |
| 8.2 | CB_POL_L2_01 | CB_POL_L3_02 |
| 8.3 | CB_POL_L2_01 | |
| 8.4 | CB_POL_L2_04 | |
| 8.5 | CB_POL_L2_01 | CB_POL_L3_04 |
| 8.6 | CB_POL_L2_03 | |
| 8.7 | CB_POL_L2_03 | |
| 8.8 | CB_POL_L2_03 | CB_POL_L3_02, CB_PRC_04 |
| 8.9 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.10 | CB_POL_L2_02 | CB_POL_L3_05 |
| 8.11 | CB_POL_L2_02 | |
| 8.12 | CB_POL_L2_02 | CB_POL_L2_03 |
| 8.13 | CB_POL_L2_06 | CB_POL_L3_02, CB_PRC_03 |
| 8.14 | CB_POL_L2_06 | CB_PRC_03 |
| 8.15 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.16 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.17 | CB_POL_L2_03 | |
| 8.18 | CB_POL_L2_03 | |
| 8.19 | CB_POL_L2_03 | |
| 8.20 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.21 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.22 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.23 | CB_POL_L2_03 | |
| 8.24 | CB_POL_L2_02 | CB_POL_L3_04 |
| 8.25 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.26 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.27 | CB_POL_L2_04 | |
| 8.28 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.29 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.30 | CB_POL_L2_04 | CB_POL_L2_05 |
| 8.31 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.32 | CB_POL_L2_04 | CB_POL_L3_03, CB_PRC_05 |
| 8.33 | CB_POL_L2_04 | |
| 8.34 | CB_POL_L2_04 | HB_CLS_9.2 |

---

## File Inventory (Risk-Relevant)

The following ~30 files form the core risk management process chain. Files are grouped by document type and listed with their ID, folder path, and purpose.

### Processes

| ID | File | Purpose |
|---|---|---|
| CB_PRC_01 | Processes/01-Incident-Management.md | Classification, reporting, escalation, response, lessons learned |
| CB_PRC_04 | Processes/04-Vulnerability-Management.md | Identification, evaluation, patching |
| CB_PRC_07 | Processes/07-Risk-Management.md | Risk assessment, risk treatment, SoA maintenance, cycles/triggers |
| CB_PRC_08 | Processes/08-Internal-Audit.md | Audit programme, planning, execution, report, follow-up |
| CB_PRC_09 | Processes/09-Management-Review.md | Scheduling, inputs (9.3.2), execution, outputs (9.3.3) |
| CB_PRC_11 | Processes/11-Performance-Monitoring.md | KPI definition, data collection, evaluation, escalation |
| CB_PRC_12 | Processes/12-Asset-Management.md | Identification, ID assignment, registration, relationships, maintenance |
| CB_PRC_13 | Processes/13-Protection-Requirements.md | Protection requirements assessment (primary, inheritance, documentation) |
| CB_PRC_14 | Processes/14-Exception-Management.md | Exception request, approval, time-limited deviation tracking |

### Standards (L2)

| ID | File | Purpose |
|---|---|---|
| CB_POL_L2_06 | Policy-Framework/L2_Standards/06-Business-Continuity.md | ICT readiness, backup/recovery |
| CB_POL_L2_07 | Policy-Framework/L2_Standards/07-Organisation.md | Assets, governance |
| CB_POL_L2_11 | Policy-Framework/L2_Standards/11-Risk-Management.md | Risk criteria, matrix, protection requirement categories, treatment options, roles |

### Handbooks (L3)

| ID | File | Purpose |
|---|---|---|
| CB_POL_L3_05 | Policy-Framework/L3_Handbooks-and-Concepts/05-Data-Backup.md | Backup strategy, recovery, deletion |
| CB_POL_L3_08 | Policy-Framework/L3_Handbooks-and-Concepts/08-Business-Continuity.md | BIA methodology, continuity plans, test/maintenance, recovery coordination |

### Registers

| ID | File | Purpose |
|---|---|---|
| HB_REG_03 | Registers/03-Asset-Register.md | 8 asset inventories, 6 cross-reference tables, data model |
| HB_REG_04 | Registers/04-BIA-Register.md | BIA assessment, tier assignment, continuity plan tracking |
| HB_REG_05 | Registers/05-Risk-Register.md | 4x4 matrix, scenario-based risk entries, acceptance |
| HB_REG_06 | Registers/06-Risk-Treatment-Plan.md | Controls per risk, owners, deadlines, gap tracking |
| HB_REG_07 | Registers/07-Security-Measures-Register.md | Security measures per risk, linked to controls and assets |
| HB_REG_08 | Registers/08-Statement-of-Applicability.md | 93 controls, SSOT for applicability (drives Coverage Matrix) |
| HB_REG_11 | Registers/11-Competence-Records.md | SOLL/IST competence matrix per ISMS role (20 dimensions) |
| HB_REG_12 | Registers/12-Nonconformity-Register.md | NC tracking with effectiveness review |
| HB_REG_EXC_01 | Registers/Exception-Register/01-Exception-Index.md | Approved policy exceptions with expiry and review tracking |

### Templates

| ID | File | Purpose |
|---|---|---|
| CB_TPL_19 | Templates/19-Protection-Requirements-Assessment.md | Per-asset protection requirements assessment form (C/I/A, inheritance, approval) |
| CB_TPL_20 | Templates/20-Exception-Request.md | Exception request form (justification, risk, compensating controls, expiry) |
| CB_TPL_21 | Templates/21-Risk-Assessment.md | Risk assessment worksheet per asset (threat/vulnerability pairing, risk scoring) |

### Clause Definitions (HB)

| ID | File | Purpose |
|---|---|---|
| HB_CLS_5.3 | Definitions/C05_Leadership/5.3-Roles-and-Responsibilities.md | Roles, responsibilities, authorities |
| HB_CLS_6.1 | Definitions/C06_Planning/6.1-Risks-and-Opportunities.md | Risk and opportunity management (incl. 6.1.2, 6.1.3, SoA) |
| HB_CLS_8.2 | Definitions/C08_Operation/8.2-Risk-Assessment.md | Operational risk assessment |
| HB_CLS_8.3 | Definitions/C08_Operation/8.3-Risk-Treatment.md | Operational risk treatment |
| HB_CLS_9.3 | Definitions/C09_Performance/9.3-Management-Review.md | Management review requirements |
| HB_CLS_10.2 | Definitions/C10_Improvement/10.2-Nonconformity.md | Nonconformity and corrective action |
