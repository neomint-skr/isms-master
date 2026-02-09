> **Document ID:** CB_POL_L2_07-Organisation
> **Version:** 00.03.007
> **Classification:** Internal
> **Author:** skr
> **ISO Reference:** A.5.2-5.7, A.5.9-5.11, A.5.24-5.28, A.5.31-5.37
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# Organisation Policy

## Summary

Information security requires clear organizational frameworks across all disciplines. This policy consolidates the requirements for security organization, asset management, incident reporting, threat intelligence, and compliance monitoring. It ensures that responsibilities, governance mechanisms, and information assets are systematically captured and maintained. Without uniform organizational requirements, IS responsibilities remain unclear and governance gaps go undetected.

## Objective and Scope

**Guideline reference:** P1, P2, P3, P4, P5
**Operationalized by:** CB_POL_L3_01-User-Handbook

**Objective:** Information security requires clear organizational frameworks. Without uniform rules for roles, asset management, incident reporting, and compliance, IS responsibilities remain unclear and governance mechanisms incomplete.

This policy consolidates the organizational requirements for security organization, asset management, incident reporting, compliance, and governance (addresses A.5.2-5.6, A.5.9-5.11, A.5.24-5.28, A.5.31-5.37). It establishes criteria for the overarching management and implementation of all IS disciplines.

The policy implements the principles P1 (Protection), P2 (Compliance), P3 (Risk orientation), P4 (Awareness), and P5 (Continual improvement) of the IS guideline. Operational implementation is provided through CB_POL_L3_01 (User Handbook) and the topic-specific processes (CB_PRC_01, CB_PRC_12).

**Scope:** All organizational units and employees within the ISMS scope. Covers organizational governance, asset management, incident management, and compliance monitoring.

## Incidents

A formalized approach to planning, detection, assessment, treatment, and post-incident review of information security incidents must be established (addresses A.5.24). All employees are obligated to report suspected or confirmed security events immediately through the defined reporting channels (addresses A.6.8, see also CB_POL_L2_10, reporting obligation).

**Incident management requirements:**

| # | Requirement | Control |
|---|---|---|
| 1 | Processes for automatic and manual reporting of anomalous events are defined and communicated | A.5.24 |
| 2 | Roles and responsibilities for incident response are assigned (incident response team, incident manager) | A.5.24 |
| 3 | A classification scheme for assessing and prioritizing events is established | A.5.25 |
| 4 | Procedures for containment, eradication, recovery, and communication are documented | A.5.26 |
| 5 | Lessons learned from incidents are systematically evaluated and translated into improvement actions | A.5.27 |
| 6 | Evidence is collected and documented in a forensically sound manner | A.5.28 |

The operational incident management process is described in CB_PRC_01 (Incident Management) [REF:DG24-AV, Kap. 3].

### Threat Intelligence

The organization collects and analyzes information about potential or existing IS threats to be prepared for, detect, and prevent threats (addresses A.5.7).

**Objectives:**

1. **Early detection:** Recognize early warning signs and take proactive measures
2. **Risk assessment:** Assess specific risks and understand which threats are most likely
3. **Vulnerability identification:** Identify vulnerabilities that could be exploited by attackers

**Sources:**

- **External sources:** Contact with authorities (BSI, ENISA) and special interest groups (industry forums, vendor advisories)
- **Internal sources:** Log data, vulnerability scans, incident reports

The Information Security Officer analyzes collected information and uses the findings to improve security controls. Results feed into risk assessment (CB_POL_L2_11) and vulnerability management (CB_PRC_04) [REF:DG24-AV, Kap. 2.3.2].

## Compliance

The organization ensures that all legal, regulatory, and contractual information security requirements are identified, documented, and fulfilled (addresses A.5.31).

**Requirements:**

| # | Requirement | Control |
|---|---|---|
| 1 | Legal, regulatory, and contractual IS requirements are fully identified and documented up to date | A.5.31 |
| 2 | Intellectual property is protected through defined procedures; licensing terms for software and content are observed | A.5.32 |
| 3 | Records are protected against loss, destruction, forgery, and unauthorized access, and managed according to statutory retention periods | A.5.33 |
| 4 | Data protection requirements are implemented in accordance with GDPR and applicable national regulations; a Data Protection Officer is designated | A.5.34 |

Compliance with IS policies is reviewed regularly (addresses A.5.36). Where nonconformity is identified, root causes must be determined, corrective actions implemented, and their effectiveness verified. Results of compliance reviews feed into the management review [REF:DG25-SC, Kap. 4].

## Assets

Asset management ensures that all assets relevant to the ISMS are systematically identified, uniquely referenced, kept current, and documented in their dependencies in a traceable manner. It forms the structural foundation for the protection requirements analysis and risk assessment (addresses A.5.9).

**Scope delineation:** Asset management covers exclusively the identification, structuring, and relationship mapping of assets. Assessments (protection requirements, risks, controls) are not included and are conducted in accordance with the Risk Management Policy (CB_POL_L2_11-Risk-Management) and the associated process (CB_PRC_07-Risk-Management).

**Scope:** All organizational units, processes, applications, IT systems, communication links, and rooms and buildings within the ISMS scope.

### Asset Types

Assets are classified by the following types and documented in separate registers:

| Abbreviation | Type | Description |
|---|---|---|
| INF | Information | Datasets, documents, records |
| GP | Processes | Core processes with critical information |
| APP | Applications | Software, SaaS services, databases |
| SYS-P | IT systems (physical) | Servers, endpoints, physical hardware |
| SYS-V | IT systems (virtual) | Virtual machines, containers |
| NET | Communication links | Network connections, segments, communication paths |
| RAUM | Rooms | Server rooms, offices, technical rooms |
| GEB | Buildings | Locations, buildings |

### Modelling Principles

- Each asset is assigned to exactly one asset type.
- Each asset has a unique, stable asset ID. Asset IDs do not change over the lifecycle.
- Relationships between assets are mapped through explicit cross-reference registers. Additionally, asset tables contain denormalized relationship columns as quick reference. In case of conflict, the cross-reference registers serve as SSOT.
- Protection requirements are not determined in asset management but according to the protection requirement categories from CB_POL_L2_11-Risk-Management within the risk management process (CB_PRC_07). Results are documented in the C/I/A columns of the asset register.
- Decommissioned assets are not deleted but marked as out of service and retained in the register for evidentiary purposes.

**Process:** CB_PRC_12-Asset-Management describes the workflow from identification to maintenance.
**Register:** HB_REG_03-Asset-Register documents all assets and their relationships.

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

The role structure is organized into organizational roles, ISMS roles (Information Security Officer, steering committee), and control-specific roles. One person may hold multiple roles provided segregation of duties is maintained [REF:DG25-HB, Kap. 6]. The detailed role description is documented in HB_CLS_5.3-Roles.

## See also

- CB_POL_L2_11-Risk-Management — Risk criteria and protection requirement categories
- CB_POL_L2_08-Document-Control — Policy compliance, documented information
- CB_POL_L3_01-User-Handbook — Acceptable use, incident reporting
- CB_PRC_01-Incident-Management — Incident management process
- CB_PRC_12-Asset-Management — Asset capture and maintenance
- HB_CLS_5.3-Roles-and-Responsibilities — ISMS roles and RACI
- HB_REG_03-Asset-Register — Asset inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.03.007 | 2026-02-09 | skr | Incidents (A.5.24-28), compliance (A.5.31-33), governance (A.5.2-5.6) populated (Batch-D) |
| 00.03.006 | 2026-02-09 | skr | Summary: 4-element pattern |
| 00.03.005 | 2026-02-09 | skr | Threat intelligence (A.5.7) added under incidents (REC-419) |
| 00.03.004 | 2026-02-09 | skr | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.03.003 | 2026-02-08 | skr | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.03.002 | 2026-02-08 | skr | Assets: cross-reference to L2_11-Risk-Management added |
| 00.03.001 | 2026-02-07 | skr | See-also section added |
| 00.03.000 | 2026-02-07 | skr | Asset management (A.5.9): types, modelling, references |
| 00.02.000 | 2026-02-07 | skr | Split: HR -> L2_10, Physical -> L2_09 |
| 00.01.000 | 2026-02-06 | skr | Initial version |
