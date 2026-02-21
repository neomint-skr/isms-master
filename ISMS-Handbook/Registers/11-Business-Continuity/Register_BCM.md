> **Document ID:** HB_REG_BCM_01-BCM-Register
> **Version:** 00.01.010
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.29-5.30
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# BCM Register

## Summary

Business continuity management requires documented evidence of continuity plans, recovery capabilities, and test results. This register tracks continuity plans, recovery priorities, test logs, findings, and review approvals for all business-critical services. It provides the audit trail for BCM compliance and ensures that continuity planning remains aligned with the tier model defined in CB_POL_L2_06. Without a maintained BCM register, recovery planning lacks traceability and audit evidence.

## Objective and Scope

**Standard reference:** CB_POL_L2_06-Business-Continuity
**Methodology:** CB_POL_L3_08-Business-Continuity

**Objective:** Business continuity requires documented evidence that recovery plans exist, are tested, and remain current. Without a central register, continuity planning lacks traceability and audit evidence.

This register tracks continuity plans, recovery priority tiers, test execution and results, findings and corrective actions, and review approvals for all business-critical services within the ISMS scope (addresses A.5.29-5.30). It provides the decision basis for recovery prioritization and the evidence trail for BCM audits.

The register connects upstream to CB_POL_L2_06 (requirements and tier model) and laterally to CB_POL_L3_08 (methodology) and CB_PRC_03 (operational backup process). Recovery priority tiers are referenced from process PR records (CB_TPL_19).

**Scope:** All business-critical IT services and processes within the ISMS scope. Target audience: CISO (analysis), IT operations (recovery planning), process owners (continuity planning), auditors (evidence).

### Key

| Term | Definition |
|---|---|
| MTPD | Maximum Tolerable Period of Disruption — the longest time a business activity can be unavailable before causing unacceptable consequences |
| MBCO | Minimum Business Continuity Objective — the minimum level of service that must be maintained during a disruption (expressed as percentage of normal capacity) |

## Recovery Priority Tiers

The following tier model is derived from CB_POL_L2_06-Business-Continuity. It governs recovery objectives, backup frequency, and test requirements.

| Tier | RTO | RPO | Criticality | Backup frequency | Test frequency | Examples |
|---|---|---|---|---|---|---|
| 1 | [RTO/MTD Tier 1, e.g. 0-4 h] | [RTO/MTD Tier 1, e.g. 0-4 h] | Critical | [at least hourly] | [frequency, e.g. Semi-annual] | [Production systems, payment processing] |
| 2 | [RTO/MTD Tier 2, e.g. 5-24 h] | [RTO/MTD Tier 2, e.g. 5-24 h] | Important | [at least daily] | [frequency, e.g. Annual] | [Email, CRM] |
| 3 | [RTO/MTD Tier 3, e.g. 25-96 h] | [RTO/MTD Tier 3, e.g. 25-96 h] | Normal | [at least weekly] | [frequency, e.g. Annual] | [Archiving, reporting] |
| 4 | [RTO/MTD Tier 4, e.g. > 97 h] | [RTO/MTD Tier 4, e.g. > 97 h] | Low | [as needed] | — | [Test environments] |

## Continuity Plans

The following table tracks IT continuity plans required by CB_POL_L2_06-Business-Continuity. Each tier 1 and tier 2 asset must be covered by a documented continuity plan.

| Process/Service | Tier | Plan reference | Recovery strategy | Responsible | Last review | Next review | Status |
|---|---|---|---|---|---|---|---|

## Test Log

| Date | Component | Test type | Scenario | Achieved RTO | Achieved RPO | Target met | Remarks | Executed by |
|---|---|---|---|---|---|---|---|---|

## Findings and Actions

| Finding ID | Date | Source | Description | Corrective action | Responsible | Deadline | Status |
|---|---|---|---|---|---|---|---|

## Review and Approval

| Review date | Reviewer | Scope | Findings summary | Approval status | Next review |
|---|---|---|---|---|---|

## See also

- CB_POL_L2_06-Business-Continuity — BCM requirements and tier model
- CB_POL_L3_08-Business-Continuity — BIA methodology and continuity planning
- CB_POL_L3_05-Data-Backup — Backup strategy aligned with tier model
- CB_PRC_03-Backup-and-Recovery — Operational backup and recovery process
- HB_REG_AM_01-Asset-Register — Asset inventory
- HB_REG_RL_01-Risk-Log — Risk assessment input

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.01.008 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.007 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.006 | 2026-02-19 | Claude (AI) | Rename to BCM Register, rescope: remove BIA assessment table and Derived V, add Findings/Actions and Review/Approval sections, retain Recovery Priority Tiers for BCM planning |
| 00.01.005 | 2026-02-18 | Claude (AI) | Add governance columns (Rationale, Date, Owner, Approval status) to BIA assessment table |
| 00.01.004 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 10) |
| 00.01.003 | 2026-02-11 | Claude (AI) | Added Derived V column (Tier-to-protection-requirement mapping) to BIA Assessment table and Key section |
| 00.01.002 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.001 | 2026-02-10 | [CISO] | Key table (MTPD, MBCO); Test Log section |
| 00.01.000 | 2026-02-10 | [CISO] | Initial version |
