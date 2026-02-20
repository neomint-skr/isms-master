> **Document ID:** CB_POL_L3_08-Business-Continuity
> **Version:** 00.01.005
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.29-5.30
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Business Continuity Handbook

## Summary

Business disruptions from cyberattacks, infrastructure failures, or natural events threaten the continuity of critical services. This handbook provides step-by-step guidance for conducting business impact analyses, developing IT continuity plans, testing recovery capabilities, and coordinating restoration of operations. It operationalizes the BCM requirements into actionable procedures that ensure defined RTO and RPO targets are met. Without concrete methodology and tested plans, recovery efforts remain uncoordinated and recovery objectives unachievable.

## Objective and Scope

**Standard reference:** CB_POL_L2_06-Business-Continuity
**Condensed by:** —

**Objective:** Organizations face the risk of prolonged outages when business continuity measures lack practical implementation guidance. Without a structured methodology for impact analysis, plan development, and recovery coordination, normative requirements remain theoretical and unenforceable.

This handbook translates the BCM requirements from CB_POL_L2_06 into concrete procedures for BIA execution, continuity plan creation, test management, and recovery coordination (addresses A.5.29-5.30). It enables IT operations and security teams to implement and maintain recovery capabilities aligned with defined tier objectives.

The handbook connects upstream to CB_POL_L2_06 (requirements and tier model) and laterally to CB_POL_L3_05 (backup strategy) and CB_PRC_03 (operational backup process). Test results and continuity plan tracking feed into HB_REG_BCM (BCM Register).

**Scope:** IT administrators, system owners, and the CISO responsible for BCM implementation. Covers all business-critical IT services and systems within the ISMS scope.

## Conduct Business Impact Analysis

A Business Impact Analysis (BIA) determines the criticality of processes and systems and establishes recovery priorities (addresses A.5.30). Conduct the BIA at least annually or after significant changes to the IT landscape [REF:DG24-BK, Kap. 3.2].

### Identify critical processes and systems

Compile an inventory of all business processes and their supporting IT services. Use HB_REG_AM (Asset Register) as the primary input for system identification.

For each process, document:

- Business function and owning department
- Supporting IT services, applications, and infrastructure components
- Dependencies on internal and external services
- [Key contacts and escalation paths per process]

Collaborate with process owners to validate completeness. Ensure that dependencies between processes are mapped, including upstream and downstream relationships.

### Assess disruption impact

Evaluate the consequences of an outage for each identified process. Consider the following impact dimensions:

| Dimension | Assessment question |
|---|---|
| Financial | What is the revenue or cost impact per hour of downtime? |
| Operational | Which downstream processes are blocked? |
| Legal/regulatory | Are compliance obligations or contractual SLAs affected? |
| Reputational | Is customer trust or public perception at risk? |

Determine the Maximum Tolerable Period of Disruption (MTPD) for each process. The MTPD defines the absolute upper limit before consequences become unacceptable.

Derive RTO and RPO values from the MTPD. The RTO must be shorter than the MTPD to allow for verification and handover after recovery.

### Assign recovery tiers

Classify each process and its supporting IT services into the tier model defined in CB_POL_L2_06:

| Tier | RTO/RPO | Criticality | Recovery priority |
|---|---|---|---|
| Tier 1 | [RTO/MTD Tier 1, e.g. 0-4 h] | Critical | Immediate — automated failover where possible |
| Tier 2 | [RTO/MTD Tier 2, e.g. 5-24 h] | Important | High — manual recovery within one business day |
| Tier 3 | [RTO/MTD Tier 3, e.g. 25-96 h] | Normal | Medium — recovery within four business days |
| Tier 4 | [RTO/MTD Tier 4, e.g. > 97 h] | Low | Standard — recovery on best-effort basis |

Record continuity plan references, test results, and recovery priority tiers in HB_REG_BCM (BCM Register). BIA parameters (RTO, RPO, MTD) for protection requirements derivation are documented in process PR records (CB_TPL_19). Review tier assignments when business processes, IT architecture, or risk posture change.

## Develop Continuity Plans

IT continuity plans document the recovery procedures for each critical service. Each plan must be actionable without prior knowledge of the specific incident [REF:DG24-BK, Kap. 3.2].

### Structure of an IT continuity plan

Each continuity plan follows a standardized structure:

| Section | Content |
|---|---|
| Scope | Covered systems, services, and tier classification |
| Activation criteria | Conditions that trigger plan activation |
| Roles and responsibilities | [Named roles with contact details and deputies] |
| Recovery procedures | Step-by-step instructions per system or service |
| Resource requirements | Hardware, software, network, and personnel needs |
| Communication plan | Internal and external notification procedures |
| Dependencies | Upstream/downstream systems and third-party services |
| Recovery verification | Acceptance criteria confirming successful recovery |

Maintain one plan per Tier-1 and Tier-2 service. Tier-3 and Tier-4 services may be grouped into a single plan where recovery procedures are similar.

### Define recovery strategies

Select a recovery strategy for each critical service based on its tier and technical architecture:

| Strategy | Applicable tiers | Description |
|---|---|---|
| Active-active | Tier 1 | Redundant systems in parallel operation with automatic failover |
| Active-passive | Tier 1-2 | Standby system activated on failure |
| Warm standby | Tier 2 | Pre-configured system requiring data synchronization before activation |
| Cold standby | Tier 3-4 | Hardware or cloud resources provisioned on demand |
| Manual rebuild | Tier 4 | Full system rebuild from backups and documentation |

Align recovery strategies with the backup approach defined in CB_POL_L3_05. Ensure that RPO values are achievable with the selected backup frequency and retention policy.

Document infrastructure requirements for each strategy, including [failover locations, network connectivity, and cloud region assignments].

### Document emergency procedures

Create emergency procedure cards for the first [initial response window, e.g. 60 minutes] after an incident is escalated to a business continuity event. Each card contains:

- **Immediate actions:** Isolate affected systems, activate standby resources, notify [on-call personnel]
- **Assessment checklist:** Confirm scope of impact, identify affected tiers, estimate recovery duration
- **Decision tree:** Criteria for activating full continuity plan vs. standard incident resolution

Ensure emergency procedures integrate with CB_PRC_01 (Incident Management). The transition from incident to business continuity event occurs when the estimated resolution time exceeds the RTO of an affected Tier-1 or Tier-2 service (addresses A.5.29).

Store continuity plans and emergency procedures in [a location accessible during outages, e.g. offline copy, secondary cloud region, or physical binder]. Ensure that at least two persons per plan have access and familiarity with the procedures.

## Test and Maintain Plans

Untested plans provide false assurance. Regular testing validates that procedures work, personnel are prepared, and recovery objectives are achievable [REF:DG24-BK, Kap. 3.1].

### Test types and frequency

| Test type | Scope | Frequency | Participants |
|---|---|---|---|
| Tabletop exercise | Walk-through of plan procedures | [Semi-annually] | Plan owners, CISO, IT operations |
| Component test | Recovery of individual systems | [Quarterly for Tier 1, semi-annually for Tier 2] | System administrators |
| Integrated test | End-to-end recovery of a service chain | [Annually] | All involved teams |
| Full simulation | Simulated disaster with real failover | [Annually for Tier 1 — if feasible] | All BCM stakeholders |

Each test must have defined objectives, a scenario description, and success criteria before execution.

### Evaluate test results

Document test results in a structured report:

| Field | Content |
|---|---|
| Test date and type | When and what was tested |
| Scenario | Description of the simulated disruption |
| Achieved RTO/RPO | Actual recovery time and data loss |
| Target RTO/RPO | Planned values per tier assignment |
| Deviations | Where actuals exceeded targets |
| Root causes | Why deviations occurred |
| Corrective actions | Measures to close identified gaps |
| Responsible | [Named owner for each corrective action] |
| Deadline | Target date for implementation |

Compare achieved RTO/RPO against the targets from the tier model. Treat any deviation where actual values exceed targets as a finding requiring corrective action.

Report test results to [management / the IS steering committee]. Include a summary of findings and the status of corrective actions from previous tests.

### Update cycle

Review and update continuity plans:

- After each test — incorporate lessons learned
- After significant changes to IT infrastructure, applications, or organizational structure
- After an actual business continuity event
- At minimum [annually] as part of the regular review cycle

Track the revision history of each plan. Ensure that outdated versions are archived and that all stakeholders receive notification of updates.

## Coordinate Recovery

During an actual disruption, coordination determines whether recovery objectives are met. This section defines the operational procedures for managing a business continuity event (addresses A.5.29).

### Escalation and communication

Activate the escalation chain when an incident is classified as a business continuity event:

1. [On-call team / IT operations] confirms the disruption and estimates impact scope
2. CISO or [designated BCM coordinator] decides on continuity plan activation
3. Notify affected stakeholders according to the communication plan
4. Establish a [crisis communication channel, e.g. dedicated conference bridge or messaging group]

Communication during recovery follows these principles:

- Status updates at fixed intervals — [every 30 minutes for Tier 1, every 2 hours for Tier 2]
- Single point of communication for external parties — [designated spokesperson]
- Log all decisions and status changes for post-incident review

### Transition to normal operations

Recovery is complete only after verification confirms that services meet their normal operating parameters. Transition from emergency to normal operations requires:

1. Verify service functionality against the acceptance criteria in the continuity plan
2. Confirm data integrity — compare recovered data against the expected RPO
3. Re-enable monitoring and alerting for all recovered services
4. Communicate service restoration to all affected stakeholders
5. Deactivate emergency procedures and stand down crisis teams

Do not rush the transition. Premature deactivation of standby resources risks a secondary outage if the root cause is not fully resolved.

### Post-incident review

Conduct a post-incident review within [5 business days] after recovery is complete. The review covers:

| Topic | Questions |
|---|---|
| Timeline | When was the disruption detected, escalated, and resolved? |
| Effectiveness | Were RTO and RPO targets met? |
| Plan accuracy | Did the continuity plan reflect the actual recovery procedure? |
| Communication | Were stakeholders informed promptly and accurately? |
| Dependencies | Were external dependencies (suppliers, cloud providers) managed effectively? |
| Gaps | What was missing or insufficient in the plan? |

Document findings and corrective actions. Update the affected continuity plan based on lessons learned. Record the event and outcomes in HB_REG_BCM (BCM Register).

## See also

- CB_POL_L2_06-Business-Continuity — BCM requirements and tier model
- CB_POL_L3_05-Data-Backup — Backup strategy and recovery procedures
- CB_PRC_03-Backup-and-Recovery — Operational backup process
- CB_PRC_01-Incident-Management — Transition from incident to emergency
- HB_REG_BCM_01-BCM-Register — BCM continuity plan tracking
- HB_REG_AM_01-Asset-Register — Asset inventory as BIA input

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.005 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.004 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.01.003 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.002 | 2026-02-19 | Claude (AI) | HB_REG_04 references updated: BIA-Register → BCM-Register, BIA params now in CB_TPL_19 |
| 00.01.001 | 2026-02-10 | CISO | Added L4 traceability field (Condensed by) |
| 00.01.000 | 2026-02-10 | CISO | Initial version |
