> **Document ID:** HB_REG_10-BIA-Register
> **Version:** 00.01.002
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.29-5.30
> **Last modified:** 2026-02-10
> **Approval:** —
> **Review cycle:** Annual

---

# Business Impact Analysis Register

## Summary

Business continuity planning depends on a structured assessment of disruption impacts across all critical assets and processes. This register documents the results of the Business Impact Analysis including tier assignments, recovery objectives, and continuity plan tracking. It provides the evidence basis for prioritizing recovery measures and aligning backup strategies with criticality tiers. Without a maintained BIA register, recovery priorities remain undefined and continuity planning lacks its quantitative foundation.

## Objective and Scope

**Standard reference:** CB_POL_L2_06-Business-Continuity
**Methodology:** CB_POL_L3_08-Business-Continuity

**Objective:** Disruptions to business-critical IT services require predefined recovery priorities based on quantified impact assessments. Without documented BIA results, recovery decisions during incidents lack an objective basis.

The register captures tier assignments, recovery time and recovery point objectives, and maximum tolerable downtimes for all assessed assets (addresses A.5.29-5.30). It provides the decision basis for backup frequency alignment, redundancy planning, and continuity plan development.

BIA results are derived from the asset inventory (HB_REG_03) and feed into risk treatment decisions (HB_REG_06). The continuity plan section tracks review status and ensures that plans remain current and aligned with the tier model defined in CB_POL_L2_06.

**Scope:** All business-critical IT services and processes within the ISMS scope. Target audience: CISO (analysis), IT operations (recovery planning), asset owners (impact assessment), auditors (evidence).

### Key

| Term | Definition |
|---|---|
| MTPD | Maximum Tolerable Period of Disruption — the longest time a business activity can be unavailable before causing unacceptable consequences |
| MBCO | Minimum Business Continuity Objective — the minimum level of service that must be maintained during a disruption (expressed as percentage of normal capacity) |

## Tier Definitions

The following tier model is derived from CB_POL_L2_06-Business-Continuity. It governs recovery objectives, backup frequency, and test requirements.

| Tier | RTO | RPO | Criticality | Backup frequency | Test frequency | Examples |
|---|---|---|---|---|---|---|
| 1 | 0-4 h | 0-4 h | Critical | [at least hourly] | Semi-annual | [Production systems, payment processing] |
| 2 | 5-24 h | 5-24 h | Important | [at least daily] | Annual | [Email, CRM] |
| 3 | 25-96 h | 25-96 h | Normal | [at least weekly] | Annual | [Archiving, reporting] |
| 4 | > 97 h | > 97 h | Low | [as needed] | — | [Test environments] |

## BIA Assessment

The following table records the BIA evaluation results for each assessed asset. Asset IDs reference the asset register (HB_REG_03). Tier assignments determine applicable recovery and backup requirements per the tier model above.

| Asset ID | Name | Disruption impact | Tier | RTO (h) | RPO (h) | MTD (h) | Recovery priority |
|---|---|---|---|---|---|---|---|

## Continuity Plan Register

The following table tracks IT continuity plans required by CB_POL_L2_06-Business-Continuity. Each tier 1 and tier 2 asset must be covered by a documented continuity plan.

| Asset/Process | Plan reference | Responsible | Last review | Next review | Result |
|---|---|---|---|---|---|

## Test Log

| Date | Component | Test | Remarks | Executed by |
|---|---|---|---|---|
| [YYYY-MM-DD] | [System/component] | [Test type] | [Findings and observations] | [Tester name/role] |

## See also

- CB_POL_L2_06-Business-Continuity — BCM requirements and tier model
- CB_POL_L3_08-Business-Continuity — BIA methodology and continuity planning
- CB_POL_L3_05-Data-Backup — Backup strategy aligned with tier model
- CB_PRC_03-Backup-and-Recovery — Operational backup and recovery process
- HB_REG_03-Asset-Register — Asset inventory (BIA Tier reference)
- HB_REG_06-Risk-Register — Risk assessment input

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.002 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.001 | 2026-02-10 | [CISO] | Key table (MTPD, MBCO); Test Log section |
| 00.01.000 | 2026-02-10 | [CISO] | Initial version |
