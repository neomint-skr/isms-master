> **Document ID:** HB_REG_03-Asset-Register
> **Version:** 00.02.016
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.9
> **Last modified:** 2026-02-19
> **Approval:** —
> **Review cycle:** Annual

---

# Asset Register

## Summary

Protection requires knowledge — only what is inventoried can be assessed and protected. This register documents all ISMS-relevant assets in 8 categories with 5 cross-reference tables for dependencies. It provides the data basis for protection requirements analysis, risk analysis and business impact assessment. Without a complete asset register, risk management lacks its foundation.

## Objective and Scope

**Requirements:** CB_POL_L2_07-Organisation (section Assets) defines asset types and modelling principles.
**Process:** CB_PRC_12-Asset-Management describes the workflow from identification to maintenance.

**Objective:** Protection requires knowledge — only what is inventoried can be assessed and protected. Without a complete asset inventory, risk management lacks its assessment basis.

The register documents all ISMS-relevant assets in 8 categories with cross-reference tables for dependencies (addresses A.5.9). It provides the data basis for protection requirements analysis, risk analysis and business impact assessment.

Protection requirement values are populated through the protection requirements assessment process (CB_PRC_13) and feed into the risk register (HB_REG_05). The management review (CB_PRC_09) uses the asset inventory as input for the ISMS adequacy assessment.

**Scope:** All organizational units, processes, applications, IT systems, communication links as well as rooms and buildings within the ISMS scope. Target audience: Asset owners (reporting), IS-Coordinator (maintenance), CISO (analysis).

## Data Model

The cross-reference tables (section below) are the **SSOT for relationships** between assets. The relationship columns in the asset tables are denormalized quick references for a fast overview. In case of conflict, the cross-reference tables prevail.

The Confidentiality (C), Integrity (I) and Availability (A) columns are structural placeholders. They are populated through the protection requirements assessment (CB_PRC_13). For process assets (PRC), C/I/A values are primary (from CB_TPL_19). For all other asset types, C/I/A values are inherited from parent processes (maximum principle). BIA parameters are documented in process PR records (CB_TPL_19). BCM recovery data (continuity plans, test logs) is maintained in HB_REG_04 (BCM Register).

Grouped target objects (Zielobjekte) replace individual entries in the ISMS register when assets share an identical security-management profile. The operational detail inventory (serial numbers, licences, individual configurations) is maintained externally in the CMDB. Cross-reference tables provide seamless traceability from process through application, IT system, communication link to room and building. Information types are documented as an attribute of each process and serve as a classification reference.

## Asset Categories

| Abbreviation | Type | Description |
|---|---|---|
| PRC | Processes | Business processes — primary asset type |
| APP | Applications | Software, SaaS services, databases |
| PIT | Physical IT Systems | Servers, endpoints, physical hardware |
| VIT | Virtual IT Systems | Virtual machines, containers |
| CON | Communication Links | Network connections, segments, communication paths |
| ROM | Rooms | Server rooms, offices, technical rooms |
| BLD | Buildings | Sites, buildings |
| INF | Information Types | Attribute of processes — classification reference table |

## Inventory Fields

The asset inventory maintains the following fields for each asset (addresses A.5.9):

**Mandatory fields:**

| Field | Description |
|---|---|
| Asset type | Primary asset (process) or secondary asset (hardware, software, service, person) |
| Asset name | Designation |
| Asset ID | Unique identifier (abbreviation + sequential number) |
| Asset owner | Business role (not person) |
| Asset description | Character, location of the directory |
| Asset category | Grouping (e.g. "Customer data", "Production systems") |
| Processed information | Information type IDs (PRC assets only — maps to Information Types reference table) |
| Personal data | Yes/No |
| Sensitive customer data | Yes/No |
| Confidentiality | Normal/High/Very high — Primary (from CB_TPL_19) for PRC; Inherited (maximum principle) for all others |
| Integrity | Normal/High/Very high — Primary (from CB_TPL_19) for PRC; Inherited (maximum principle) for all others |
| Availability | Normal/High/Very high — Primary (from CB_TPL_19) for PRC; Inherited (maximum principle) for all others |
| PR Source | Process PR record ID for PRC assets; "Inherited from [Process-ID(s)]" for sub-assets |
| Review interval | [Monthly / 3 / 6 / 12 months] |
| Date of last review | Date |
| Date of next review | Date |
| PR_Status | Protection requirements status: `complete` / `suspended_missing_INF` / `pending_approval` |

**Optional field (for assets with availability requirements):**

| Field | Description |
|---|---|
| BIA Tier | Recovery tier (1-4) derived from BIA parameters in process PR record (CB_TPL_19). Populated through protection requirements process (CB_PRC_13). |

The mandatory fields are reflected in the category tables below. CIA values are populated through the protection requirements assessment (CB_PRC_13).

## Processes

| ID | Name | Description | Count | Includes | Responsible | Processed Information | Applications | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Applications

| ID | Name | Description | Count | Includes | Responsible | Processes | IT Systems | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Physical IT Systems

| ID | Name | Description | Count | Includes | Responsible | Applications | Room | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Virtual IT Systems

| ID | Name | Description | Count | Includes | Responsible | Applications | Host system | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Communication Links

| ID | Name | Description | Count | Includes | Criticality | Source | Target | Responsible | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Rooms

| ID | Designation | Description | Count | Includes | Building | Responsible | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|---|

## Buildings

| ID | Name | Description | Count | Includes | Responsible | C | I | A | PR Source | PR_Status |
|---|---|---|---|---|---|---|---|---|---|---|

## Information Types (Reference)

The totality of information types processed by a business process constitutes the assessment basis for that process's criticality. Each process in the process table references its information types through the "Processed Information" column, linking operational assets to their information profile. During protection requirements assessment (CB_PRC_13, Step 2), the assessor evaluates the sensitivity profile of all referenced information types against the damage scenarios — the most sensitive information type determines the minimum damage scenario category for confidentiality and integrity.

This reference table is the SSOT for information type classification and ensures conformity with ISO A.5.9.

| ID | Name | Description | Classification | Review cycle |
|---|---|---|---|---|

## Cross-References

The following tables map relationships between assets. They are the SSOT — in case of conflict with the quick-reference columns in the asset tables, these tables prevail.

### Processes <> Applications

| Process ID | Application ID | Support type |
|---|---|---|

### Applications <> IT Systems

| Application ID | IT System ID | System role |
|---|---|---|

### IT Systems <> Communication Links

| IT System ID | Communication ID | Role |
|---|---|---|

### IT Systems <> Rooms

| IT System ID | Room ID | Usage |
|---|---|---|

### Rooms <> Buildings

| Room ID | Building ID |
|---|---|

## See also

- CB_PRC_13-Protection-Requirements — Protection requirements assessment process
- HB_REG_04-BCM-Register — BCM continuity plan tracking

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.02.016 | 2026-02-19 | Claude (AI) | Inherited PR model: PR Source field, primary/inherited annotations for C/I/A, remove suspended_missing_BIA, BIA Tier source → CB_TPL_19 |
| 00.02.015 | 2026-02-18 | Claude (AI) | Add PR_Status field for protection requirements lifecycle tracking |
| 00.02.014 | 2026-02-17 | Claude (AI) | Information types methodology: argumentative section for INF reference table, "Processed information" added to mandatory fields |
| 00.02.013 | 2026-02-17 | Claude (AI) | Process-centric restructure: PRC as primary asset type, INF as reference table, section reorder, cross-references reduced from 6 to 5 |
| 00.02.012 | 2026-02-11 | Claude (AI) | Asset-ID prefixes aligned to risk methodology: GP→PRC, SYS-P→PIT, SYS-V→VIT, NET→CON, ROOM→ROM, BLDG→BLD |
| 00.02.011 | 2026-02-11 | Claude (AI) | C/I/A scale aligned to Normal/High/Very high (BSI 200-2); process references CB_PRC_07 → CB_PRC_13 |
| 00.02.010 | 2026-02-11 | SKR | Asset grouping schema: Count + Includes columns in all 8 tables, Criticality column in Communication Links, data model note for Zielobjekte |
| 00.02.009 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.02.008 | 2026-02-10 | [CISO] | BIA fields replaced by BIA Tier reference (REG_04 extraction) |
| 00.02.007 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.02.006 | 2026-02-09 | [CISO] | Inventory fields: 14 mandatory fields + 5 optional BIA fields (REC-410) |
| 00.02.005 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.02.004 | 2026-02-09 | [CISO] | Objective and Scope: bold-label pattern (Objective + Scope) |
| 00.02.003 | 2026-02-08 | [CISO] | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.02.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.02.001 | 2026-02-07 | [CISO] | See also section added |
| 00.02.000 | 2026-02-07 | [CISO] | Complete rebuild: 8 asset types, 6 cross-reference tables, data model note |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
