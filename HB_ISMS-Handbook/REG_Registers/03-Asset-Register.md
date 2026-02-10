> **Document ID:** HB_REG_03-Asset-Register
> **Version:** 00.02.008
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.9
> **Last modified:** 2026-02-10
> **Approval:** —
> **Review cycle:** Annual

---

# Asset Register

## Summary

Protection requires knowledge — only what is inventoried can be assessed and protected. This register documents all ISMS-relevant assets in 8 categories with 6 cross-reference tables for dependencies. It provides the data basis for protection requirements analysis, risk analysis and business impact assessment. Without a complete asset register, risk management lacks its foundation.

## Objective and Scope

**Requirements:** CB_POL_L2_07-Organisation (section Assets) defines asset types and modelling principles.
**Process:** CB_PRC_12-Asset-Management describes the workflow from identification to maintenance.

**Objective:** Protection requires knowledge — only what is inventoried can be assessed and protected. Without a complete asset inventory, risk management lacks its assessment basis.

The register documents all ISMS-relevant assets in 8 categories with cross-reference tables for dependencies (addresses A.5.9). It provides the data basis for protection requirements analysis, risk analysis and business impact assessment.

Protection requirement values are populated through the risk management process (CB_PRC_07) and feed into the risk register (HB_REG_06). The management review (CB_PRC_09) uses the asset inventory as input for the ISMS adequacy assessment.

**Scope:** All organizational units, processes, applications, IT systems, communication links as well as rooms and buildings within the ISMS scope. Target audience: Asset owners (reporting), IS-Coordinator (maintenance), CISO (analysis).

## Data Model

The cross-reference tables (section below) are the **SSOT for relationships** between assets. The relationship columns in the asset tables are denormalized quick references for a fast overview. In case of conflict, the cross-reference tables prevail.

The Confidentiality (C), Integrity (I) and Availability (A) columns are structural placeholders. They are populated through the protection requirements analysis (CB_PRC_07-Risk-Management). BCM-related recovery data (RTO, RPO, MTD, continuity plans) is maintained in the dedicated BIA Register (HB_REG_10).

## Asset Categories

| Abbreviation | Type | Description |
|---|---|---|
| INF | Information | Datasets, documents, records |
| GP | Processes | Core processes with critical information |
| APP | Applications | Software, SaaS services, databases |
| SYS-P | IT Systems (physical) | Servers, endpoints, physical hardware |
| SYS-V | IT Systems (virtual) | Virtual machines, containers |
| NET | Communication links | Network connections, segments, communication paths |
| ROOM | Rooms | Server rooms, offices, technical rooms |
| BLDG | Buildings | Sites, buildings |

## Inventory Fields

The asset inventory maintains the following fields for each asset (addresses A.5.9):

**Mandatory fields:**

| Field | Description |
|---|---|
| Asset type | Primary asset (information) or secondary asset (hardware, software, service, person) |
| Asset name | Designation |
| Asset ID | Unique identifier (abbreviation + sequential number) |
| Asset owner | Business role (not person) |
| Asset description | Character, location of the directory |
| Asset category | Grouping (e.g. "Customer data", "Production systems") |
| Personal data | Yes/No |
| Sensitive customer data | Yes/No |
| Confidentiality | High/Medium/Low/None |
| Integrity | High/Medium/Low/None |
| Availability | High/Medium/Low/None |
| Review interval | [Monthly / 3 / 6 / 12 months] |
| Date of last review | Date |
| Date of next review | Date |

**Optional field (for assets with availability requirements):**

| Field | Description |
|---|---|
| BIA Tier | Recovery tier (1-4) per BIA Register (HB_REG_10). Populated through BIA process (CB_POL_L3_08). |

The mandatory fields are reflected in the category tables below. CIA values are populated through the protection requirements analysis (CB_PRC_07).

## Information

| ID | Name | Description | Owner | Process(es) | C | I | A |
|---|---|---|---|---|---|---|---|

## Processes

| ID | Name | Description | Responsible | Information | Applications | C | I | A |
|---|---|---|---|---|---|---|---|---|

## Applications

| ID | Name | Description | Responsible | Processes | IT Systems | C | I | A |
|---|---|---|---|---|---|---|---|---|

## IT Systems — Physical

| ID | Name | Description | Responsible | Applications | Room | C | I | A |
|---|---|---|---|---|---|---|---|---|

## IT Systems — Virtual

| ID | Name | Description | Responsible | Applications | Host system | C | I | A |
|---|---|---|---|---|---|---|---|---|

## Communication Links

| ID | Name | Description | Source | Target | Responsible | C | I | A |
|---|---|---|---|---|---|---|---|---|

## Rooms

| ID | Designation | Description | Building | Responsible | C | I | A |
|---|---|---|---|---|---|---|---|

## Buildings

| ID | Name | Description | Responsible | C | I | A |
|---|---|---|---|---|---|---|

## Cross-References

The following tables map relationships between assets. They are the SSOT — in case of conflict with the quick-reference columns in the asset tables, these tables prevail.

### Information <> Processes

| Information ID | Process ID | Processing type |
|---|---|---|

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

## Responsibilities

- **Maintenance:** IS-Coordinator ([IS-Coordinator]) with support from domain departments
- **Trigger:** New assets, significant changes to existing assets, annual review during management review
- **Process:** CB_PRC_12-Asset-Management

## See also

- HB_REG_10-BIA-Register — BIA assessment and tier tracking

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.02.008 | 2026-02-10 | [CISO] | BIA fields replaced by BIA Tier reference (REG_10 extraction) |
| 00.02.007 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.02.006 | 2026-02-09 | [CISO] | Inventory fields: 14 mandatory fields + 5 optional BIA fields (REC-410) |
| 00.02.005 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.02.004 | 2026-02-09 | [CISO] | Objective and Scope: bold-label pattern (Objective + Scope) |
| 00.02.003 | 2026-02-08 | [CISO] | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.02.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.02.001 | 2026-02-07 | [CISO] | See also section added |
| 00.02.000 | 2026-02-07 | [CISO] | Complete rebuild: 8 asset types, 6 cross-reference tables, data model note |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
