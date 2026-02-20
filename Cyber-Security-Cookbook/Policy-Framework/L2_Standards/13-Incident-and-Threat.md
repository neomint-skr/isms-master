> **Document ID:** CB_POL_L2_13-Incident-and-Threat
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.24-5.28, A.5.7
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Incident and Threat Management Standard

## Summary

Information security incidents require a structured approach from detection through resolution to post-incident learning. This standard consolidates the requirements for incident management planning, assessment, response, evidence collection, and threat intelligence. It ensures that incidents are handled consistently and that lessons learned feed into continual improvement. Without formalized incident management, response times are unpredictable and recurring incidents go unaddressed.

## Objective and Scope

**Policy reference:** P1, P3, P5
**Operationalized by:** —

**Objective:** Information security incidents can cause significant damage if not detected and handled promptly. Without formalized procedures for reporting, assessing, and responding to incidents, the organization cannot minimize impact or learn from events.

This standard defines the requirements for incident management planning, event assessment, incident response, evidence collection, and threat intelligence (addresses A.5.24-5.28, A.5.7). It provides the normative framework for the operational incident management process.

The standard implements the principles P1 (Protection) and P3 (Risk orientation) of the IS policy. Operational implementation is provided through CB_PRC_01 (Incident Management). The emergency card (CB_Emergency-Card) provides immediate-action guidance for employees.

**Scope:** All organizational units and employees within the ISMS scope. Covers the full incident lifecycle from detection to post-incident review, including threat intelligence activities.

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

The operational incident management process is described in CB_PRC_01 (Incident Management).

### Incident Response Procedures

The following procedures must be established for incident response:

- **Reporting:** Responsibilities and procedures for reporting information security events, including weaknesses, must be defined. Irregularities indicating a safety incident must be reported immediately.
- **Assessment:** Each event must be investigated and evaluated based on affected IT components, business processes, protection requirements, possible damage, cause, and remediation measures.
- **Response:** Procedures for containment, eradication, and recovery must be documented. Special authorizations for emergency measures must be predefined.
- **Communication:** An information policy determines which external entities (customers, business partners, authorities) must be informed about incidents. The decision rests with management.
- **Documentation:** All incidents must be documented for learning purposes, change tracking, and potential criminal prosecution. Protocol and log files must be backed up.
- **Follow-up:** After an emergency, the secure normal state must be restored. Response times, alerting effectiveness, and documentation quality must be evaluated.

### Threat Intelligence

The organization collects and analyzes information about potential or existing IS threats to be prepared for, detect, and prevent threats (addresses A.5.7).

**Objectives:**

1. **Early detection:** Recognize early warning signs and take proactive measures
2. **Risk assessment:** Assess specific risks and understand which threats are most likely
3. **Vulnerability identification:** Identify vulnerabilities that could be exploited by attackers

**Sources:**

- **External sources:** Contact with authorities (BSI, [Authority]) and special interest groups (industry forums, vendor advisories)
- **Internal sources:** Log data, vulnerability scans, incident reports

The Chief Information Security Officer analyzes collected information and uses the findings to improve security controls. Results feed into risk assessment (CB_POL_L2_11) and vulnerability management (CB_PRC_04).

## See also

- CB_PRC_01-Incident-Management — Operational incident management process
- CB_POL_L2_07-Organisation — Governance and asset management
- CB_Emergency-Card — Immediate-action guidance for employees
- CB_POL_L2_10-Human-Resources — Reporting obligation (A.6.8)
- CB_POL_L2_11-Risk-Management — Risk criteria and threat context
- CB_TPL_15-Threat-Intelligence-Report — Threat intelligence report template

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.005 | 2026-02-20 | Claude (AI) | Remove dangling CB_TPL_09 reference (template not in master) |
| 00.01.004 | 2026-02-18 | CISO | Reverted Operationalized by to — (PRC is not L3; convention requires L3 IDs only) |
| 00.01.003 | 2026-02-18 | CISO | Added CB_PRC_01 to Operationalized by (PRC_01 is the primary operationalization; traceability fix) |
| 00.01.002 | 2026-02-18 | CISO | Added P5 to Policy reference (incidents and lessons-learned drive continual improvement — aligns with L1 allocation matrix) |
| 00.01.001 | 2026-02-10 | CISO | Added template cross-references |
| 00.01.000 | 2026-02-10 | CISO | Initial version (split from L2_07 Incidents + Threat Intelligence sections) |
