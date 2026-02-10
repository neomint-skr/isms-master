> **Document ID:** CB_POL_L2_06-Business-Continuity
> **Version:** 00.01.008
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.29-5.30, A.8.13-8.14
> **Last modified:** 2026-02-10
> **Approval:** —
> **Review cycle:** Annual

---

# Business Continuity Standard

## Summary

Business disruptions caused by IT outages, cyberattacks, or natural events can be existentially threatening. This policy defines the requirements for ICT readiness, recovery time objectives, and data backup for business-critical IT services. It ensures that recovery objectives are defined, backup strategies implemented, and continuity plans regularly tested. Without binding business continuity requirements, planned recovery in an emergency cannot be ensured.

## Objective and Scope

**Policy reference:** P3, P6
**Operationalized by:** CB_POL_L3_05-Data-Backup, CB_POL_L3_08-Business-Continuity

**Objective:** Business disruptions caused by IT outages, cyberattacks, or natural events can be existentially threatening. Without binding requirements for ICT readiness and data backup, the foundation for planned recovery of business operations is missing.

This policy defines the normative requirements for ICT readiness for business continuity, backup strategies, and recovery objectives (addresses A.5.29-5.30, A.8.13-8.14). It establishes criteria for recovery times and backup intervals.

The standard implements the principles P3 (Risk orientation) and P6 (Business continuity) of the IS policy. Operational implementation is provided through CB_POL_L3_05 (Data Backup); the recovery process through CB_PRC_03 (Backup and Recovery).

**Scope:** Top management, IT operations, and Chief Information Security Officer. Covers all business-critical IT services and associated data backup procedures.

## Information Security during Disruptions

Information security controls must be maintained at an adequate level even during disruptions and emergencies (addresses A.5.29).

**Disruptive events:** The following event types must be considered in planning:

- Cyberattacks (ransomware, denial-of-service, malware infections)
- Power outages or IT infrastructure failures
- Equipment failures or hardware malfunctions
- Human errors or accidental data loss
- Natural events (floods, storms, fire)
- Supply chain disruptions for critical IT services
- Pandemics or crises affecting personnel availability

**Risk assessment:** Potential threats and vulnerabilities that may compromise information security during disruptions must be assessed through an impact analysis.

**Adaptation of security controls:** Requirements for adapting IS controls during disruptions must be established. Requirements must cover both technical and organizational aspects and ensure maintenance of security throughout the entire disruption and recovery phase.

**Integration into business continuity:** IS requirements must be integrated into business continuity management processes to ensure alignment between security controls and the overarching continuity efforts [REF:DG24-BK, Kap. 3.1].

## ICT Readiness

The organization must maintain a state of readiness to ensure the resilience of critical IT services in the event of disruptive incidents or emergencies (addresses A.5.30). The primary objective is the availability of information and associated assets during disruptions.

### Business Impact Analysis

A Business Impact Analysis (BIA) must be conducted to determine the impact of disruptions. The BIA identifies critical business processes and IT services, assesses the consequences of an outage, and establishes recovery priorities.

### RTO/RPO Tier Model

Business processes and IT services are categorized according to the following tier model:

| Tier | RTO/RPO | Criticality | Application examples |
|---|---|---|---|
| Tier 1 | 0-4 h | Critical | [Production systems, payment processing, customer systems] |
| Tier 2 | 5-24 h | Important | [Email, intranet, CRM] |
| Tier 3 | 25-96 h | Normal | [Archiving, reporting] |
| Tier 4 | > 97 h | Low | [Test environments, internal documentation] |

The organization focuses primarily on tiers 1 and 2 to ensure the continuity of business-critical services.

### IT Continuity Plans

IT continuity plans must be developed, regularly assessed, and approved by executive management. The plans must include:

- Performance and capacity specifications
- Recovery Time Objectives (RTO) for each prioritized IT service
- Recovery Point Objectives (RPO) for the prioritized IT resources

[REF:DG24-BK, Kap. 3.2]

## Backup and Recovery

Backup copies of information, software, and system configurations must be created, tested, and regularly reviewed in accordance with the defined RPO values (addresses A.8.13).

**Data backup requirements:**

| # | Requirement |
|---|---|
| 1 | Scope, frequency, and retention period of backups are governed by the RTO/RPO tier model (see ICT Readiness) |
| 2 | Backups cover data, applications, system configurations, and log files |
| 3 | At least one backup copy must be stored at a physically separate location or in a separate cloud region |
| 4 | Backup media and transmissions must be protected through encryption |
| 5 | Recovery tests must be conducted [annually &#124; semi-annually — depending on criticality tier]; results must be documented |
| 6 | Backups must also meet retention period requirements (legal and contractual) |

**Redundancy:** For critical IT services at tier 1, sufficient redundancies of information processing facilities must be maintained to meet the defined availability requirements (addresses A.8.14).

The operational backup process including procedures and responsibilities is described in CB_PRC_03 (Backup and Recovery). The concrete backup plans and tools are defined in CB_POL_L3_05 (Data Backup) [REF:DG24-BK, Kap. 4].

## See also

- CB_POL_L2_03-System-and-Network — Redundancy, capacity planning
- CB_POL_L2_05-Supplier-and-Cloud — Supplier dependencies in contingency planning
- CB_POL_L2_11-Risk-Management — Risk-based prioritization
- CB_POL_L3_05-Data-Backup — Backup and recovery
- CB_PRC_03-Backup-and-Recovery — Operational backup process
- CB_PRC_01-Incident-Management — Transition from incident to emergency
- HB_REG_10-BIA-Register — BIA assessment and tier tracking

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.008 | 2026-02-10 | CISO | Added L3_08 traceability and REG_10 cross-reference |
| 00.01.007 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.006 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.005 | 2026-02-09 | CISO | Backup and recovery (A.8.13-14) populated (Batch-D) |
| 00.01.004 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.003 | 2026-02-09 | CISO | IS during disruptions (A.5.29) and ICT readiness with BIA/RTO/RPO (A.5.30) populated (REC-504, REC-501) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
