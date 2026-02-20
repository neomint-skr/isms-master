> **Document ID:** CB_POL_L2_07-Organisation
> **Version:** 00.03.018
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.2-5.6, A.5.9-5.10
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** Annual

---

# Organisation Standard

## Summary

Information security requires clear organizational frameworks for governance and asset management. This standard defines the requirements for security organization, roles, segregation of duties, authority contacts, and the systematic management of information assets. It ensures that responsibilities, governance mechanisms, and information assets are systematically captured and maintained. Without uniform organizational requirements, IS responsibilities remain unclear and governance gaps go undetected.

## Objective and Scope

**Policy reference:** P1, P2, P3, P4, P5
**Operationalized by:** CB_POL_L3_01-User-Handbook

**Objective:** Information security requires clear organizational frameworks. Without uniform rules for roles, segregation of duties, and asset management, IS responsibilities remain unclear and governance mechanisms incomplete.

This standard defines the organizational requirements for security governance, roles, authority contacts, and asset management (addresses A.5.2-5.6, A.5.9-5.11). It establishes criteria for the overarching management and organizational structure of the ISMS.

The standard implements the principles P1 (Protection), P2 (Compliance), P4 (Awareness), and P5 (Continual improvement) of the IS policy. Incident management requirements are defined in CB_POL_L2_13 (Incident and Threat Management). Compliance requirements are defined in CB_POL_L2_14 (Compliance and Legal). Operational implementation is provided through CB_POL_L3_01 (User Handbook) and CB_PRC_12 (Asset Management).

**Scope:** All organizational units and employees within the ISMS scope. Covers organizational governance and asset management.

## Assets

Asset management ensures that all assets relevant to the ISMS are systematically identified, uniquely referenced, kept current, and documented in their dependencies in a traceable manner. It forms the structural foundation for the protection requirements analysis and risk assessment (addresses A.5.9).

**Scope delineation:** Asset management covers exclusively the identification, structuring, and relationship mapping of assets. Assessments (protection requirements, risks, controls) are not included and are conducted in accordance with the Risk Management Policy (CB_POL_L2_11-Risk-Management) and the associated processes (CB_PRC_13-Protection-Requirements, CB_PRC_07-Risk-Management).

**Scope:** All organizational units, processes, applications, IT systems, communication links, and rooms and buildings within the ISMS scope.

### Asset Types

Assets are classified by the following types and documented in separate registers:

| Abbreviation | Type | Description |
|---|---|---|
| PRC | Processes | Business processes — primary asset type |
| APP | Applications | Software, SaaS services, databases |
| PIT | IT systems (physical) | Servers, endpoints, physical hardware |
| VIT | IT systems (virtual) | Virtual machines, containers |
| CON | Communication links | Network connections, segments, communication paths |
| ROM | Rooms | Server rooms, offices, technical rooms |
| BLD | Buildings | Locations, buildings |
| INF | Information types | Attribute of processes — classification reference table |

### Modelling Principles

- Each asset is assigned to exactly one asset type.
- Each asset has a unique, stable asset ID. Asset IDs do not change over the lifecycle.
- Relationships between assets are mapped through explicit cross-reference registers. Additionally, asset tables contain denormalized relationship columns as quick reference. In case of conflict, the cross-reference registers serve as SSOT.
- Protection requirements are not determined in asset management but according to the protection requirement categories from CB_POL_L2_11-Risk-Management within the protection requirements assessment process (CB_PRC_13). Results are documented in the C/I/A columns of the asset register.
- Decommissioned assets are not deleted but marked as out of service and retained in the register for evidentiary purposes.

**Process:** CB_PRC_12-Asset-Management describes the workflow from identification to maintenance.
**Register:** HB_REG_AM_01-Asset-Register documents all assets and their relationships.

### Asset Grouping

Assets sharing an identical security-management profile are consolidated into target objects (Zielobjekte). This reduces complexity and focuses resource investment on distinct risk profiles rather than individual items (addresses A.5.9) [REF:BSI17, Cl. 8.1.1].

**General grouping criteria** — objects may be assigned to the same group when they all [REF:BSI17, Cl. 8.1.1]:

1. are of the same type
2. serve similar tasks
3. are subject to similar conditions
4. share the same protection requirement level

**Additional technical grouping criteria** — for technical objects, grouping is additionally indicated when they [REF:BSI17, Cl. 8.1.1]:

1. are similarly configured
2. are similarly integrated into the network (e.g. same network segment)
3. are subject to similar administrative and infrastructural conditions
4. serve similar applications
5. share the same protection requirement level

**Normative interpretation.** The criteria describe the target state (how assets shall be managed). Deviations of individual assets from the group profile (e.g. missing patch level) are deficiencies to be remediated — not grounds for dissolving the group. Where permanent deviation is unavoidable, an exception approval shall be obtained and tracked as a risk in the risk management process.

**Protection-requirement inheritance.** The maximum principle applies — the most severe potential damage determines the protection requirement [REF:BSI17, Cl. 8.2.2]. Grouping is performed only after the protection-requirement assessment is complete.

**Communication links — special classification** [REF:BSI17, Cl. 8.2.8]. Three categories of critical connections are distinguished:

1. External connections (traversing uncontrolled areas — always critical)
2. Connections carrying information with high protection requirements
3. Connections at production boundaries or network perimeters

**Documentation.** Grouped assets are recorded in the asset register with count and included individual objects. The operational detail inventory (serial numbers, licences) is maintained externally (CMDB).

**Traceability chain.** Seamless traceability from process through application, IT system, communication link to room and building shall be maintained. Information types are documented as an attribute of each process and serve as a classification reference (addresses A.5.9). The totality of processed information types determines the sensitivity profile of a process and constitutes the input basis for the protection requirements assessment (C/I). Without documented information types, an adequate assessment of confidentiality and integrity is not possible. Cross-reference tables in the asset register map the inheritance chain.

## Governance

Information security is governed through a clear organizational structure with defined roles, responsibilities, and authorities (addresses A.5.2).

**IS governance requirements:**

| # | Requirement | Control |
|---|---|---|
| 1 | IS roles and responsibilities are defined, documented, and assigned | A.5.2 |
| 2 | Conflicting duties and areas of responsibility are segregated to prevent misuse or errors | A.5.3 |
| 3 | Top management ensures IS policies are observed and provides the necessary resources | A.5.4 |
| 4 | Contacts with relevant authorities (BSI, data protection authority, law enforcement) are maintained | A.5.5 |
| 5 | Contacts with special interest groups and security forums are maintained | A.5.6 |

The role structure is organized into organizational roles, ISMS roles (Chief Information Security Officer, steering committee), and control-specific roles. One person may hold multiple roles provided segregation of duties is maintained [REF:DG25-HB, Kap. 6]. The detailed role description is documented in HB_CLS_5.3-Roles.

### Segregation of Duties

Segregation of duties is a key control for managing risk in critical business processes (addresses A.5.3). The following steps must be followed:

1. Identify critical business processes that require segregation of duties (finance, IT administration, security administration, purchasing, ISMS policy approval)
2. Identify specific activities within these processes that cannot be performed by the same individual
3. Assign identified activities to appropriate job roles
4. Implement mandatory controls to ensure segregation is maintained
5. Provide training on the new procedures to relevant personnel
6. Monitor the success of implemented segregation through internal audit and take corrective action where necessary

Where only a few incompatible duties exist and role splitting is impractical, procedural controls must be implemented and documented. Changes to segregation measures are managed through the change control process.

### Contact with Authorities

The procedure for contact with authorities specifies contact points within the company (addresses A.5.5, A.5.6). Maintained contacts include:

- **Law and enforcement:** Police, prosecution authorities
- **Regulators:** BSI (Bundesamt fuer Sicherheit in der Informationstechnik), [data protection authority]
- **Special interest groups:** Industry forums, vendor security advisories
- **Suppliers and partners:** As documented in the supplier register
- **Utilities:** Emergency services (112), electricity/water suppliers

## See also

- CB_POL_L2_13-Incident-and-Threat — Incident management and threat intelligence requirements
- CB_POL_L2_14-Compliance-and-Legal — Legal, regulatory, and compliance requirements
- CB_POL_L2_11-Risk-Management — Risk criteria and protection requirement categories
- CB_POL_L2_08-Document-Control — Policy compliance, documented information
- CB_POL_L3_01-User-Handbook — Acceptable use, governance guidance
- CB_PRC_12-Asset-Management — Asset capture and maintenance
- HB_CLS_5.3-Roles-and-Responsibilities — ISMS roles and RACI
- HB_REG_AM_01-Asset-Register — Asset inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.03.018 | 2026-02-20 | Claude (AI) | Removed A.5.11 from ISO Reference (primary: L2_10) |
| 00.03.017 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.03.016 | 2026-02-19 | Claude (AI) | Traceability fix: add P3 to Policy reference (L1 allocation matrix assigns L2_07 to P3 Risk orientation) |
| 00.03.015 | 2026-02-18 | CISO | Added P2 to Policy reference (L1 allocation matrix assigns L2_07 to P2 Compliance — traceability fix) |
| 00.03.014 | 2026-02-17 | Claude (AI) | Traceability chain: normative requirement for documented information types as prerequisite for C/I assessment |
| 00.03.013 | 2026-02-17 | Claude (AI) | Asset types: PRC as primary type, INF as process attribute; abbreviations aligned (GP→PRC, SYS-P→PIT, SYS-V→VIT, NET→CON, RAUM→ROM, GEB→BLD); traceability chain updated |
| 00.03.012 | 2026-02-11 | Claude (AI) | Split: Incidents → L2_13, Compliance → L2_14; reduced to Governance + Assets; added Segregation of Duties and Contact with Authorities |
| 00.03.011 | 2026-02-11 | Claude (AI) | Protection requirements process references: CB_PRC_07 → CB_PRC_13 |
| 00.03.010 | 2026-02-11 | SKR | Asset grouping (Zielobjekte) methodology added: criteria, inheritance, communication links, documentation |
| 00.03.009 | 2026-02-09 | CISO | Aligned role terminology |
| 00.03.008 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.03.007 | 2026-02-09 | CISO | Incidents (A.5.24-28), compliance (A.5.31-33), governance (A.5.2-5.6) populated (Batch-D) |
| 00.03.006 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.03.005 | 2026-02-09 | CISO | Threat intelligence (A.5.7) added under incidents (REC-419) |
| 00.03.004 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.03.003 | 2026-02-08 | CISO | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.03.002 | 2026-02-08 | CISO | Assets: cross-reference to L2_11-Risk-Management added |
| 00.03.001 | 2026-02-07 | CISO | See-also section added |
| 00.03.000 | 2026-02-07 | CISO | Asset management (A.5.9): types, modelling, references |
| 00.02.000 | 2026-02-07 | CISO | Split: HR -> L2_10, Physical -> L2_09 |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
