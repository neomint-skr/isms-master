> **Document ID:** CB_PRC_11-Performance-Monitoring
> **Version:** 00.01.011
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 9.1, 6.2
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Performance Monitoring Process

## Summary

ISMS effectiveness claims require measurable evidence. This process describes the core steps from KPI definition and data collection through analysis and reporting to escalation upon target deviation. Systematic performance monitoring ensures that trends are identified early and improvement measures are traceable. Without this process, the management review lacks objective input and audit evidence remains incomplete.

## Objective and Scope

**Objective:** The effectiveness of controls and ISMS processes cannot be demonstrated without systematic measurement. Without a defined process, improvement decisions are based on assumptions rather than evidence.

This process defines the workflow from KPI definition and measurement methods through data collection and analysis to reporting and escalation upon target deviation. It ensures that trends are identifiable and progress is verifiable.

The process operationalizes the requirements from HB_CLS_9.1 (Monitoring and Measurement) and HB_CLS_6.2 (IS Objectives). Measurement results feed into the management review (CB_PRC_09) as input.

**Scope:** IS processes, controls, and IS objectives (HB_REG_OBJ). Triggers: scheduled measurement cycle or extraordinary information needs.

## KPI definition and measurement methods

KPIs are derived from the IS objectives defined in HB_CLS_6.2 and recorded in HB_REG_OBJ. The CISO defines each KPI according to the six determinations specified in HB_CLS_9.1 (Clause 9.1 a-f). Every KPI satisfies the SMART criteria (specific, measurable, achievable, relevant, time-bound).

The following table lists the initial KPI catalogue. Additional KPIs are added as IS objectives evolve.

| KPI ID | KPI name | Target | Measurement method | Frequency | Responsible |
|---|---|---|---|---|---|
| KPI-01 | Incident response time | Mean time from detection to containment [target value, e.g. ≤ 4 h for critical incidents] | Incident ticket timestamps (addresses A.5.24) | Per incident, aggregated [frequency, e.g. quarterly] | [IS-Coordinator] |
| KPI-02 | Audit finding close-out rate | [target value, e.g. ≥ 90 %] of findings closed within deadline | HB_REG_NC finding status (addresses A.5.35) | [frequency, e.g. Quarterly] | CISO |
| KPI-03 | Awareness training completion | [target value, e.g. ≥ 95 %] of employees trained within cycle | [LMS / training records] (addresses A.6.3) | [Annually \| semi-annually — depending on training cycle] | [IS-Coordinator] |
| KPI-04 | Patch compliance | [target value, e.g. ≥ 95 %] of critical patches applied within SLA | [Vulnerability scanner / patch management tool] (addresses A.8.8) | [security cadence, e.g. Monthly] | [IT operations lead] |
| KPI-05 | Risk treatment plan progress | [target value, e.g. ≥ 80 %] of treatment actions on schedule | HB_REG_SOA risk register (addresses A.5.7) | [frequency, e.g. Quarterly] | CISO |
| KPI-06 | Access review completion | [target value, e.g. 100 %] of scheduled reviews completed on time | Access review log (addresses A.5.18) | [Annually \| semi-annually] | [IT operations lead] |

Each KPI definition includes the measurement method ensuring comparable and reproducible results as required by Clause 9.1 b. Methods are selected to produce quantitative data wherever possible. Where qualitative assessment is necessary, a documented rating scale is applied.

## Data collection

Data is collected by the responsible person indicated in the KPI catalogue. The following data sources are used:

| Source category | Examples | Collection method |
|---|---|---|
| Incident management | Incident tickets, post-incident reports | Export from [ticketing system, e.g. Jira / GitLab Issues] |
| Audit and findings | Internal audit reports, external audit reports | HB_REG_NC, audit programme records |
| Training records | Completion certificates, quiz results | Export from [LMS / HR system] |
| Technical tools | Vulnerability scans, patch reports, SIEM alerts | Automated export from [tool stack] |
| Risk register | Treatment action status, residual risk levels | HB_REG_SOA |
| Access management | Access review logs, provisioning records | Export from [IAM system / directory service] |

**Frequency.** Each KPI specifies its collection frequency in the catalogue above. At minimum, all KPIs are collected once per quarter to ensure timely input for the management review (addresses A.5.36).

**Data quality.** The CISO verifies data completeness and plausibility before analysis. Missing or inconsistent data points are flagged and the root cause is investigated. Where automated collection is feasible, manual data entry is replaced to reduce error rates.

**Retention.** Raw data and aggregated results are retained for [retention period, e.g. 3 years] to support trend analysis and audit evidence.

## Analysis and reporting

### Analysis methods

The CISO analyses collected data using the following methods:

- **Target-actual comparison.** Each KPI value is compared against its defined target. Deviations are classified as minor (< [threshold, e.g. 10 %] below target) or significant (≥ [threshold, e.g. 10 %] below target).
- **Trend analysis.** KPI values are tracked over at least four consecutive periods to identify upward, stable or downward trends.
- **Root-cause investigation.** For significant deviations or negative trends, a root-cause analysis is conducted to identify corrective actions.
- **Control effectiveness assessment.** KPI results are mapped to the controls they address. Consistently underperforming controls are flagged for risk reassessment (addresses A.5.36).

### Reporting format

Results are documented in a performance report containing:

| Section | Content |
|---|---|
| KPI dashboard | Current values, targets, trend arrows, traffic-light status (green / amber / red) |
| Deviation analysis | KPIs below target with root-cause summary |
| Trend overview | Quarter-over-quarter comparison for all KPIs |
| Recommendations | Proposed corrective or improvement actions |
| Control mapping | KPI results linked to Annex A controls |

The report is prepared by the CISO using [reporting tool / template, e.g. TPL_01 or dashboard tool].

### Reporting frequency and recipients

| Report type | Frequency | Recipients |
|---|---|---|
| Operational KPI summary | [frequency, e.g. Monthly] | CISO, [IS-Coordinator] |
| [frequency, e.g. Quarterly] performance report | [frequency, e.g. Quarterly] | CISO, [IS-Coordinator], [CTO] |
| Management review input | Before each management review (CB_PRC_09) | Top management, CISO |
| Ad-hoc report | On significant deviation | Top management, affected process owners |

## Escalation

### Thresholds

KPI deviations trigger escalation based on the following classification:

| Level | Condition | Response |
|---|---|---|
| Green | KPI meets or exceeds target | No action required. Document in routine report. |
| Amber | KPI below target by < [threshold, e.g. 10 %] or negative trend for [2 consecutive periods] | CISO initiates root-cause analysis and defines corrective action with deadline. |
| Red | KPI below target by ≥ [threshold, e.g. 10 %] or negative trend for [3+ consecutive periods] | Escalation to [CTO / top management]. Corrective action plan within [timeframe, e.g. 5 business days]. |

### Escalation path

1. **Process owner level.** The responsible person for the KPI investigates the deviation and proposes corrective measures within [timeframe, e.g. 5 business days].
2. **CISO level.** If the corrective measure is insufficient or the KPI remains red for [number of periods, e.g. 2 consecutive quarters], the CISO escalates to top management.
3. **Management review.** Persistent red KPIs are added as mandatory agenda items to the next management review (CB_PRC_09). Top management decides on resource allocation or strategic adjustments.

### Effectiveness verification

Corrective actions resulting from escalation are tracked in the improvement roadmap (HB_MGT_01). The CISO verifies effectiveness within [timeframe, e.g. one measurement cycle after implementation]. If the KPI does not return to target, the matter is re-escalated to the management review (addresses A.5.36).

## See also

- HB_CLS_5.3-Roles-and-Responsibilities
- HB_CLS_9.1-Monitoring-Measurement
- HB_CLS_6.2-IS-Objectives
- HB_REG_OBJ_01-IS-Objectives-Register
- CB_PRC_09-Management-Review

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.011 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.01.010 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.009 | 2026-02-20 | CISO | Reorganized into numbered subfolder; file renamed to Process_ prefix |
| 00.01.008 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.007 | 2026-02-11 | CISO | Skeleton filling: Summary, KPI catalogue, data collection, analysis/reporting, escalation |
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.004 | 2026-02-08 | CISO | See-also: cross-references to CLS_9.1, CLS_6.2, REG_09, PRC_09 added |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version |
