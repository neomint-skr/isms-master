# Data Model and Key Relationships

## Overview

The registers form the data model of the ISMS. Each register maintains specific ID patterns and foreign key relationships to adjacent registers. The information flow follows a defined sequence: assets (REG_03) are assessed for protection requirements (TPL_19), business criticality (REG_04), and threats/vulnerabilities (Risk-Framework catalogues). This assessment produces risk scenarios (REG_05), which drive treatment decisions (REG_06) that reference concrete security measures (REG_07). The SoA (REG_08) is the SSOT for control selection across all 93 Annex A controls. Exceptions (REG_EXC_01) and nonconformities (REG_12) are governance registers that feed back into the risk register and the continual improvement cycle.

---

## ID Patterns

| Pattern | Example | Format | Used In | Description |
|---|---|---|---|---|
| Asset-ID | INF-001, APP-003, PIT-007 | `{TYPE}-{NNN}` | HB_REG_03, TPL_19, TPL_21, HB_REG_05 | Unique asset identifier: type prefix (3 chars) + hyphen + 3-digit sequence number |
| SC-ID | SC-APP-003-0001 | `SC-{Asset-ID}-{NNNN}` | HB_REG_05, HB_REG_06, TPL_21 | Risk scenario: fixed prefix SC + embedded Asset-ID + 4-digit sequence per asset |
| SM-ID | SM-0001 | `SM-{NNNN}` | HB_REG_06, HB_REG_07, HB_REG_05 | Security measure identifier: fixed prefix SM + 4-digit sequence |
| Vulnerability-ID | APP-V01, PIT-V07 | `{TYPE}-V{NN}` | TPL_21, Risk-Framework catalogues | Vulnerability from layer-specific catalogue: asset-type prefix + V + 2-digit sequence |
| Threat-ID | G 0.28 | `G 0.{NN}` | HB_REG_05, TPL_21, Risk-Framework/Threats | BSI elementary threat identifier (G 0.1–G 0.47) with domain and aspect tags |
| EXC-ID | EXC-001 | `EXC-{NNN}` | HB_REG_EXC_01 | Exception identifier: fixed prefix EXC + 3-digit sequence |
| NC-ID / OFI-ID / OBS-ID | NC-001, OFI-001, OBS-001 | `{TYPE}-{NNN}` | HB_REG_12 | Nonconformity finding identifier: type prefix (NC/OFI/OBS) + 3-digit sequence |
| BIA Tier | 1, 2, 3, 4 | Integer 1–4 | HB_REG_04, HB_REG_03, TPL_19 | Recovery tier assignment: 1 = Critical, 2 = Important, 3 = Normal, 4 = Low |
| Annex A ref | A.5.9, A.8.28 | `A.{theme}.{control}` | HB_REG_06, HB_REG_07, HB_REG_08 | ISO 27001:2022 Annex A control reference |

**Asset-ID type prefixes:**

| Prefix | Asset Category |
|---|---|
| INF | Information |
| PRC | Processes |
| APP | Applications |
| PIT | Physical IT Systems |
| VIT | Virtual IT Systems |
| CON | Communication Links |
| ROM | Rooms |
| BLD | Buildings |

---

## Register Schemas

### HB_REG_03 — Asset Register

**Mandatory inventory fields (applies to all 8 asset categories):**

| Field | Content |
|---|---|
| Asset-ID | Unique identifier (type prefix + 3-digit number, e.g. APP-003) |
| Asset type | Primary (information) or secondary (hardware, software, service, person) |
| Asset name | Designation |
| Asset owner | Business role (not individual person) |
| Asset description | Character, directory location |
| Asset category | Grouping (e.g. "Customer data", "Production systems") |
| Personal data | Yes / No |
| Sensitive customer data | Yes / No |
| Confidentiality (C) | Normal / High / Very high |
| Integrity (I) | Normal / High / Very high |
| Availability (A) | Normal / High / Very high |
| Review interval | Monthly / 3 / 6 / 12 months |
| Date of last review | YYYY-MM-DD |
| Date of next review | YYYY-MM-DD |

**Optional field:**

| Field | Content |
|---|---|
| BIA Tier | 1–4, populated from HB_REG_04 |

**Category-specific columns** (additional quick-reference columns per table):

| Category | Additional columns |
|---|---|
| Information | Count, Includes, Process(es) |
| Processes | Count, Includes, Information, Applications |
| Applications | Count, Includes, Processes, IT Systems |
| Physical IT Systems | Count, Includes, Applications, Room |
| Virtual IT Systems | Count, Includes, Applications, Host system |
| Communication Links | Count, Includes, Criticality, Source, Target |
| Rooms | Count, Includes, Building |
| Buildings | Count, Includes |

### HB_REG_04 — BIA Register

**Tier definitions table:**

| Field | Content |
|---|---|
| Tier | 1 / 2 / 3 / 4 |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| Criticality | Critical / Important / Normal / Low |
| Backup frequency | Hourly / daily / weekly / as needed |
| Test frequency | Semi-annual / Annual / — |
| Examples | Representative systems |

**BIA Assessment table:**

| Field | Content |
|---|---|
| Asset-ID | Reference to HB_REG_03 |
| Name | Asset name |
| Disruption impact | Description of business impact |
| Tier | 1–4 |
| RTO (h) | Recovery time objective in hours |
| RPO (h) | Recovery point objective in hours |
| MTD (h) | Maximum Tolerable Disruption in hours |
| Recovery priority | Sequence for recovery |
| Derived V | Availability protection requirement derived from tier (Tier 1 = Very high, Tier 2 = High, Tier 3/4 = Normal) |

**Continuity Plan Register:**

| Field | Content |
|---|---|
| Asset/Process | Asset-ID and name |
| Plan reference | Document reference |
| Responsible | Role |
| Last review | YYYY-MM-DD |
| Next review | YYYY-MM-DD |
| Result | Review outcome |

**Test Log:**

| Field | Content |
|---|---|
| Date | YYYY-MM-DD |
| Component | System or component tested |
| Test | Test type |
| Remarks | Findings and observations |
| Executed by | Tester name / role |

### HB_REG_05 — Risk Register

**Risk Entries table:**

| Field | Content |
|---|---|
| SC-ID | Unique scenario identifier (SC-{Asset-ID}-{NNNN}) |
| Asset-ID | Reference to HB_REG_03 |
| Asset name | Name for readability |
| Threat (G 0.x) | BSI elementary threat with title |
| Vulnerability-ID | Reference to Risk-Framework vulnerability catalogue |
| L (1-4) | Likelihood: 1=Rare, 2=Possible, 3=Likely, 4=Frequent |
| I (1-4) | Impact: 1=Low, 2=Moderate, 3=High, 4=Critical |
| Gross risk | L×I before controls: Low / Medium / High / Critical |
| Net risk | L×I after existing controls: Low / Medium / High / Critical |
| Treatment | Avoid / Reduce / Transfer / Accept / Exception |
| Existing SM | SM-IDs of currently operational measures |
| Planned SM | SM-IDs of measures planned for implementation |
| Owner | Risk owner role |
| Status | To be assessed / Identified / Under treatment / Accepted / Closed |

**Risk Matrix (L × I):**

|  | Low (1) | Moderate (2) | High (3) | Critical (4) |
|---|---|---|---|---|
| **Frequent (4)** | 4 Medium | 8 High | 12 Critical | 16 Critical |
| **Likely (3)** | 3 Low | 6 Medium | 9 High | 12 Critical |
| **Possible (2)** | 2 Low | 4 Medium | 6 Medium | 8 High |
| **Rare (1)** | 1 Low | 2 Low | 3 Low | 4 Medium |

**Risk Acceptance table:**

| Field | Content |
|---|---|
| SC-ID | Scenario reference |
| Decision | Accept / Accept with conditions |
| Rationale | Justification |
| Approver | CEO / CTO / Risk owner |
| Acceptance date | YYYY-MM-DD |
| Reassessment date | YYYY-MM-DD |

### HB_REG_06 — Risk Treatment Plan

**Treatment Plan table:**

| Field | Content |
|---|---|
| SC-ID | Reference to HB_REG_05 |
| Risk description | Summary of scenario |
| Treatment option | Avoid / Reduce / Transfer / Accept |
| SM-ID(s) | References to HB_REG_07 |
| Annex A ref | A.x.x control reference |
| Responsible | Role responsible for implementation |
| Target date | YYYY-MM-DD |
| Expected residual risk | Low / Medium / High after controls |
| Gap | No gap / Partial gap / Full gap |
| Status | Planned / In progress / Implemented / Verified |

**Approval table:**

| Field | Content |
|---|---|
| Version | Document version |
| Approved by | CEO / CTO |
| Date | YYYY-MM-DD |
| Scope | All risks or specific SC-IDs |
| Residual risks accepted | Yes / No |

### HB_REG_07 — Security Measures Register

Structured in 4 sections (A.5 Organizational, A.6 People, A.7 Physical, A.8 Technological). Same schema per section:

| Field | Content |
|---|---|
| SM-ID | Unique identifier (SM-{NNNN}) |
| Title | Measure title |
| Annex A ref | A.x.x control reference |
| Type | Preventive / Detective / Corrective |
| Description | Measure description |
| Owner | Responsible role |
| Status | Planned / In implementation / Implemented / Verified |
| Evidence | Link to evidence artefact |

**Measure Effectiveness Review:**

| Field | Content |
|---|---|
| SM-ID | Measure reference |
| Review date | YYYY-MM-DD |
| Reviewer | Role |
| Effectiveness rating | Effective / Partially effective / Ineffective |
| Findings | Summary |
| Next review | YYYY-MM-DD |

### HB_REG_08 — Statement of Applicability (SoA)

One row per Annex A control (93 total), structured in 4 sections:

| Field | Content |
|---|---|
| # | Control number (e.g. 5.9, 8.28) |
| Control | Short designation |
| Appl | Applicable: Yes / No / — (open) |
| Justification | Why applicable or not |
| Status | Implemented / Partial / Planned / — (open) |
| Doc | Primary document (short-form ISMS ID) |
| Evidence | Evidence reference |

Current applicability: 87 Yes, 6 No (5.23, 5.30, 7.13, 8.10, 8.12, 8.16).

### HB_REG_EXC_01 — Exception Index

**Exception Index table:**

| Field | Content |
|---|---|
| EXC-ID | Unique exception identifier (EXC-NNN) |
| Date | Request date |
| Requestor | Requesting role |
| Policy / Control ref | Policy section or Annex A control |
| Status | Pending / Approved / Rejected / Expired / Renewed |
| Expiry | Expiry date of approval |
| Approver | Approving role |

Individual exception records stored as `Records/EXC-NNN-Description.md` (evidence files, no formal ISMS ID).

### HB_REG_12 — Nonconformity Register

Structured by audit cycle (one H2 per audit source/year). Per audit, 4 subsections:

| Subsection | ID pattern | Fields |
|---|---|---|
| Major Nonconformities | NC-NNN | Finding ID, Description, Reference (root cause / Annex A), Statement (corrective action), Responsible, Target date, Status |
| Minor Nonconformities | NC-NNN | same as above |
| Opportunities for Improvement | OFI-NNN | same as above |
| Observations | OBS-NNN | same as above |

Status values: Open / In progress / Closed.

---

## Foreign Key Relationships

| Source Register | Source Field | Target Register | Target Field | Relationship |
|---|---|---|---|---|
| HB_REG_03 | Asset-ID | HB_REG_04 | Asset-ID | Asset → BIA assessment |
| HB_REG_04 | Asset-ID | HB_REG_03 | Asset-ID | BIA tier back-reference to asset |
| HB_REG_04 | Derived V | HB_REG_03 | Availability (A) | BIA tier → derived protection requirement (availability) |
| HB_REG_05 | Asset-ID | HB_REG_03 | Asset-ID | Risk scenario → Asset |
| HB_REG_05 | Threat (G 0.x) | Risk-Framework/Threats | Threat-ID | Scenario → BSI elementary threat |
| HB_REG_05 | Vulnerability-ID | Risk-Framework/Vulnerabilities | Vulnerability-ID | Scenario → layer-specific vulnerability |
| HB_REG_05 | Existing SM | HB_REG_07 | SM-ID | Scenario → currently operational measure |
| HB_REG_05 | Planned SM | HB_REG_07 | SM-ID | Scenario → planned measure |
| HB_REG_06 | SC-ID | HB_REG_05 | SC-ID | Treatment → Risk scenario |
| HB_REG_06 | SM-ID(s) | HB_REG_07 | SM-ID | Treatment → Security measure |
| HB_REG_06 | Annex A ref | HB_REG_08 | # (control number) | Treatment → SoA control |
| HB_REG_07 | Annex A ref | HB_REG_08 | # (control number) | Measure → SoA control |
| HB_REG_EXC_01 | EXC-ID | HB_REG_05 | SC-ID | Approved exception → Risk scenario (treatment type "Exception") |
| HB_REG_EXC_01 | Records/EXC-NNN | — | — | Index → individual evidence file |
| HB_REG_12 | Reference | HB_REG_05 | SC-ID | NC finding may reference originating risk scenario |
| TPL_19 | Asset-ID (REG_03) | HB_REG_03 | Asset-ID | PR assessment → Asset |
| TPL_19 | BIA Tier | HB_REG_04 | Tier | PR assessment derives availability from BIA tier |
| TPL_19 | Output C/I/A | HB_REG_03 | C/I/A columns | PR result populates asset register CIA values |
| TPL_21 | Asset-ID | HB_REG_03 | Asset-ID | Risk assessment → Asset |
| TPL_21 | PR record | TPL_19 output file | — | Risk assessment imports CIA from PR document |
| TPL_21 | Vulnerability-ID | Risk-Framework/Vulnerabilities | Vulnerability-ID | Risk assessment → vulnerability catalogue |
| TPL_21 | SC-ID | HB_REG_05 | SC-ID | Risk assessment scenarios feed into risk register |
| TPL_21 | SM-ID | HB_REG_07 | SM-ID | Risk assessment references existing/planned measures |

---

## Entity-Relationship Diagram (Text)

```
Risk-Framework/Threats (G 0.1–G 0.47)
  └── referenced by ──→ HB_REG_05 (Threat column)

Risk-Framework/Vulnerabilities ({TYPE}-Vxx)
  └── referenced by ──→ HB_REG_05 (Vulnerability-ID column)
  └── assessed in   ──→ TPL_21 (Vulnerability Assessment table)

HB_REG_03 (Assets)
  ├──1:1──→ TPL_19 (Protection Requirements Assessment, one file per asset)
  ├──1:1──→ HB_REG_04 (BIA Register, one row per assessed asset)
  ├──1:N──→ HB_REG_05 (Risk Register, N scenarios per asset)
  └──1:N──→ TPL_21 (Risk Assessment files, one file per asset)

HB_REG_04 (BIA)
  └── Derived V ──→ HB_REG_03 (A column, availability protection requirement)

TPL_19 (Protection Requirements Assessment)
  └── C/I/A output ──→ HB_REG_03 (C/I/A columns populated)
  └── BIA Tier ─────→ HB_REG_04 (source for process assets)

TPL_21 (Risk Assessment)
  └── SC-IDs ────────→ HB_REG_05 (scenarios transferred to register)
  └── SM-IDs ────────→ HB_REG_07 (measure references)

HB_REG_05 (Risk Register)
  ├──1:1──→ HB_REG_06 (Risk Treatment Plan, one treatment row per scenario)
  └── Exception type → HB_REG_EXC_01 (exceptions tracked separately)

HB_REG_06 (Risk Treatment Plan)
  ├──N:1──→ HB_REG_07 (Security Measures Register, SM-ID references)
  └──N:1──→ HB_REG_08 (SoA, Annex A ref links treatment to control)

HB_REG_07 (Security Measures Register)
  └──N:1──→ HB_REG_08 (SoA, each measure maps to an Annex A control)

HB_REG_08 (SoA) — SSOT for control selection
  (no outgoing FK; all other registers reference SoA, not vice versa)

HB_REG_EXC_01 (Exception Index)
  └──1:N──→ Records/EXC-NNN-*.md (individual exception records)
  └── feeds ──────────→ HB_REG_05 (as treatment type "Exception")

HB_REG_12 (Nonconformity Register)
  └── root cause may reference ──→ HB_REG_05 (SC-ID)
  └── output feeds ──────────────→ HB_CLS_10.1 (Continual Improvement)
```

---

## Cross-Reference Tables in Asset Register

HB_REG_03 maintains 6 cross-reference tables that are the **SSOT for inter-asset relationships**. The quick-reference columns in the asset tables are denormalized copies; in case of conflict, the cross-reference tables prevail.

| Cross-reference | Columns | Purpose |
|---|---|---|
| Information ↔ Processes | Information-ID, Process-ID, Processing type | Which information is used by which process, and how (e.g. read, generate, update) |
| Processes ↔ Applications | Process-ID, Application-ID, Support type | Which application supports which process, and in what capacity |
| Applications ↔ IT Systems | Application-ID, IT System-ID, System role | Which physical or virtual IT system hosts or supports which application |
| IT Systems ↔ Communication Links | IT System-ID, Communication-ID, Role | Which communication link connects or serves which IT system |
| IT Systems ↔ Rooms | IT System-ID, Room-ID, Usage | In which room each IT system is physically located |
| Rooms ↔ Buildings | Room-ID, Building-ID | In which building each room is located |

These 6 tables enable full traceability from information asset through process, application, IT system, communication link, room, to building.

---

## Template Schemas

### TPL_19 — Protection Requirements Assessment

One document per asset (or asset group). Filed as evidence in `Registers/Protection-Requirements/`.

| Section | Fields |
|---|---|
| Metadata | Document ID, Asset-ID (REG_03), Asset name, Asset type, Asset owner, Assessor, Assessment date |
| Confidentiality | Category (Normal/High/Very high), Damage scenario(s), Rationale |
| Integrity | Category, Damage scenario(s), Rationale |
| Availability | Category, Damage scenario(s), Rationale |
| Overall Protection Requirement | Overall category (= maximum of C, I, A) |
| BIA Derivation (process assets only) | BIA Tier (1–4), Derived availability, Source (HB_REG_04) |
| Override Documentation | Override type (Cumulation/Distribution), Affected core value, Original value, Adjusted value, Affected parent assets, Rationale |
| Inheritance and Effects | Inheritance source(s), Maximum principle chain, Cumulation effect (Yes/No), Distribution effect (Yes/No) |
| Conclusions | Security zone, Special measures, Risk analysis required (Yes/No) |
| Approval | Asset owner approval (name, date), CISO consistency check (name, date) |

### TPL_21 — Risk Assessment

One document per asset. Filed in `Registers/Risk-Assessments/`.

| Section | Fields |
|---|---|
| Asset Context | Asset-ID, Asset name, Layer (asset type), PR record (link to TPL_19 file), Asset owner, Assessment date, Assessor |
| Imported Context | C, I, A from HB_REG_03; relevant threat catalogue and vulnerability catalogue references |
| Vulnerability Assessment | Vulnerability-ID, Vulnerability description, Status (present/not present/unknown/n/a), Evidence/Comment |
| Scenario List | SC-ID, Threat (G 0.x), Vulnerability-ID, Scenario text (structured: "If X occurs and Y exists, this could lead to Z"), Affected aspects (C/I/A) |
| Risk Assessment | SC-ID, L (1-4), I (1-4), Gross risk, Existing SM (SM-IDs), Net L, Net I, Net risk, Treatment, Planned SM (SM-IDs) |
| Exceptions | Excluded item, Type (Threat/Vulnerability), Rationale for exclusion |

---

## Worked Example

This example traces one asset through the full ISMS data flow.

**Step 1 — Asset registration (HB_REG_03)**

Asset APP-001 "Customer Portal" is registered in the Applications table:
- Asset-ID: APP-001
- Owner: CTO
- Personal data: Yes
- CIA: to be determined via PR assessment
- Cross-reference: Applications ↔ IT Systems → PIT-003

**Step 2 — Protection requirements (TPL_19)**

A protection requirements assessment is conducted (CB_PRC_13) and filed as `Registers/Protection-Requirements/Applications/PR-APP-001.md`:
- Confidentiality: High (customer PII, contractual damage if disclosed)
- Integrity: Normal (data errors detectable and correctable)
- Availability: High (SLA with customers; BIA Tier 2 for the underlying process PRC-004)
- Overall: High (maximum of C, I, A)
- Risk analysis required: Yes (any value High or Very high triggers risk assessment)

CIA values High/Normal/High are written back into HB_REG_03 row APP-001.

**Step 3 — BIA (HB_REG_04)**

The supporting process PRC-004 was assessed with Tier 2 (RTO 5–24 h, RPO 5–24 h). Derived availability = High. This confirms the availability rating in step 2.

**Step 4 — Vulnerability assessment (TPL_21, section: Vulnerability Assessment)**

Assessor works through the Applications vulnerability catalogue (Risk-Framework/Vulnerabilities/3-Applications.md):
- APP-V28 "Insufficient patch management (missing update process, no monitoring)" — Status: present
- APP-V29 "No defined vulnerability scanning and remediation workflow" — Status: present
- Other vulnerabilities: not present or n/a

**Step 5 — Scenario (TPL_21 → HB_REG_05)**

From threat catalogue (Risk-Framework/Threats/3-Applications.md), G 0.28 "Software vulnerabilities or defects" is marked relevant (Domain: CYBER, Aspects: C, I, V).

Scenario SC-APP-001-0001 is created:
- SC-ID: SC-APP-001-0001
- Asset-ID: APP-001
- Threat: G 0.28 — Software vulnerabilities or defects
- Vulnerability-ID: APP-V28
- Scenario text: "If an exploitable software vulnerability exists in the customer portal (APP-001) and no timely patch management process is in place (APP-V28), an attacker could exploit the vulnerability to exfiltrate customer PII or manipulate data."
- Affected aspects: C, I, V

**Step 6 — Risk scoring (HB_REG_05)**

- Gross L = 3 (Likely — publicly exploitable frameworks in use, no patch process)
- Gross I = 3 (High — customer PII involved, contractual damage)
- Gross risk = 3 × 3 = 9 (High)
- Existing SM: SM-0012 (Vulnerability Scanning, operational) — reduces L by 1
- Net L = 2, Net I = 3, Net risk = 6 (Medium)
- Treatment: Reduce (net risk still above acceptance threshold for High C assets)
- Status: Under treatment

**Step 7 — Treatment plan (HB_REG_06)**

Treatment plan row for SC-APP-001-0001:
- Treatment option: Reduce
- SM-ID(s): SM-0042 (Patch Management Process — defines mandatory patching within 30 days for High/Critical CVEs)
- Annex A ref: A.8.8 (Management of technical vulnerabilities)
- Responsible: CTO
- Target date: 2026-06-30
- Expected residual risk: Low (L=1 × I=3 = 3 after controlled patch cycle)
- Gap: Partial gap (scanning exists, remediation process missing)
- Status: Planned

Top management approves the plan; CEO formally accepts the interim net risk of 6 (Medium) pending SM-0042 implementation (documented in Risk Acceptance table of HB_REG_05).

**Step 8 — Measure (HB_REG_07)**

SM-0042 "Patch Management Process" added to Technological Controls (A.8) section:
- Annex A ref: A.8.8
- Type: Preventive
- Status: Planned → In implementation → Implemented → Verified

**Step 9 — SoA (HB_REG_08)**

A.8.8 "Management of technical vulnerabilities" is already marked Yes/Implemented in the SoA with Doc = CB_POL_L2_03 and SM-0042 added as evidence reference once implemented.

**Data flow summary:**

```
APP-001 (REG_03)
  → PR-APP-001.md (TPL_19) → CIA = High/Normal/High → back to REG_03
  → BIA Tier 2 (REG_04) → Derived A = High → confirms TPL_19
  → Risk Assessment (TPL_21) → SC-APP-001-0001 → REG_05
  → Treatment (REG_06) → SM-0042 → REG_07
  → SoA A.8.8 (REG_08) — SSOT confirms control is applicable
```
