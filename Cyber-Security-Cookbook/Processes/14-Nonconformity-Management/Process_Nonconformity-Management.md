> **Document ID:** CB_PRC_10-Nonconformity-Management
> **Version:** 00.01.009
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 10.2
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** Annual

---

# Nonconformity Management Process

## Summary

Nonconformities emerge from audits, incidents, monitoring deviations, and employee reports — each requiring a traceable path from detection to verified resolution. This process defines the four core steps: detection and reporting, root cause analysis, corrective action implementation, and effectiveness review. It operationalizes HB_CLS_10.2 and feeds documented results into HB_REG_NC, thereby connecting individual deviations to the continual improvement cycle. Without this process, corrective actions remain ad-hoc, root causes persist, and audit evidence for ISO 27001 Clause 10.2 is incomplete.

## Objective and Scope

**Objective:** Nonconformities arising from audits, incidents, or monitoring require systematic treatment. Without a defined process, root causes remain unidentified, corrective actions uncontrolled, and effectiveness unverified.

This process defines the workflow from detection and reporting through root cause analysis and corrective actions to effectiveness review. It ensures that identified deviations are systematically addressed and their resolution is demonstrated.

The process operationalizes the requirements from HB_CLS_10.2 (Nonconformity and Corrective Action). Findings are documented in HB_REG_NC (Nonconformity Register) and tracked to completion.

**Scope:** All nonconformities within the ISMS scope. Triggers: audit findings (CB_PRC_08), security incidents (CB_PRC_01), monitoring deviations (CB_PRC_11), or external reports.

## Detection and reporting

Nonconformities are identified through the following sources:

| Source | Process reference | Typical findings |
|---|---|---|
| Internal audits | CB_PRC_08 | Control gaps, documentation deficiencies, process deviations |
| External audits | [Certification body / customer audits] | Major NC, Minor NC, OFI, observations |
| Security incidents | CB_PRC_01 | Control failures, policy violations revealed during response |
| Performance monitoring | CB_PRC_11 | KPI threshold breaches, trend deviations |
| Management reviews | CB_PRC_09 | Strategic gaps identified during ISMS evaluation |
| Employee reports | [Reporting channel, e.g. Slack #isms-feedback or email to CISO] | Observed deviations, improvement suggestions |

**Reporting path:**

Any person within the ISMS scope may report a suspected nonconformity. Reports are directed to the CISO or ISC via the designated reporting channel. The CISO encourages all participants to proactively identify and report deviations — reporting is supported, not penalised.

**Documentation at intake:**

Each reported nonconformity is registered in HB_REG_NC_01-Nonconformity-Register with at minimum:

- Unique finding ID (assigned by CISO)
- Date of detection
- Source (audit, incident, monitoring, employee report)
- Description of the deviation
- Affected clause, control, or process
- Severity category (Major NC, Minor NC, OFI, Observation)

**Scheduled detection:**

The CISO includes NC identification activities in the [annual ISMS calendar / audit programme]. These include periodic review of open actions, trend analysis of recurring findings, and scheduled control effectiveness checks.

## Analysis and root cause evaluation

**Immediate action:**

Upon registration, the CISO assesses whether immediate containment is required. Immediate actions aim to remedy the problem, prevent aggravation, and minimise impact. All containment measures are documented with timestamps in HB_REG_NC.

**Root cause analysis (RCA):**

Every Major NC and Minor NC undergoes a formal root cause analysis. The CISO selects the appropriate method based on complexity:

| Method | Application | When to use |
|---|---|---|
| 5-Why analysis | Sequential causal chain | Single-cause deviations with a linear causal path |
| Ishikawa (fishbone) diagram | Multi-factor analysis (people, process, technology, environment) | Complex deviations with multiple contributing factors |

The analysis is performed by the CISO in consultation with the affected process or control owner. External expertise is consulted where internal knowledge is insufficient.

For OFIs and observations, a simplified analysis (documented rationale without formal RCA method) is sufficient.

**Impact assessment:**

Following root cause identification, the CISO evaluates whether similar nonconformities exist or could arise in other areas of the ISMS. This assessment considers:

- Other processes or controls that share the same root cause
- Whether the finding is systemic (affecting the management system) or isolated
- Potential consequences if the nonconformity recurs

The results of the analysis — root cause, impact assessment, and systemic evaluation — are documented in HB_REG_NC.

## Corrective actions

Based on the root cause analysis, the CISO defines corrective actions for each nonconformity. Corrective actions address the root cause, not merely the symptom.

**Action plan:**

Each corrective action is documented in HB_REG_NC with:

| Field | Content |
|---|---|
| Action description | Specific measure to eliminate the root cause |
| Responsible person | Named owner accountable for implementation |
| Deadline | Target completion date, aligned with severity |
| Resources | Required budget, tools, or personnel |
| Expected outcome | Measurable criterion for success |

**Deadlines by severity:**

| Severity | Implementation deadline |
|---|---|
| Major NC | [30 days — or as agreed with certification body] |
| Minor NC | [90 days] |
| OFI | [Next review cycle or as prioritised] |
| Observation | Tracked for trend analysis, no mandatory deadline |

**Implementation:**

The responsible person executes the corrective action and provides evidence of completion to the CISO. Evidence includes updated documentation, configuration changes, training records, or other artefacts demonstrating that the action has been taken.

**ISMS modification:**

If the root cause analysis identifies a systemic defect in the management system, the CISO initiates a revision of the affected ISMS documentation through the document control procedure. Changes to policies, standards, or processes follow the established approval workflow (HB_CLS_7.5).

Upon completion, the responsible person updates the status in HB_REG_NC and notifies the CISO.

## Effectiveness review

Every corrective action undergoes an effectiveness review to verify that the root cause has been eliminated and the nonconformity does not recur.

**Timing:**

| Severity | Review timeframe after action completion |
|---|---|
| Major NC | [30-60 days] |
| Minor NC | [60-90 days] |
| OFI | Next scheduled audit or review cycle |

**Review criteria:**

The CISO evaluates effectiveness based on:

- The root cause is demonstrably eliminated (not merely the symptom)
- No recurrence of the same or similar nonconformity has been observed
- Related KPIs or monitoring data confirm sustained improvement
- Affected controls or processes operate as intended

**Documentation:**

The review result (effective / not effective), date, and supporting evidence are recorded in HB_REG_NC. Effective actions are closed with the review date.

**Escalation on ineffectiveness:**

If a corrective action is assessed as not effective, the CISO initiates one of the following measures:

1. **Revised corrective action** — a new or modified action with updated root cause analysis and adjusted deadline
2. **Escalation to management review** — the finding is included as input to the next management review (CB_PRC_09) for strategic decision-making
3. **Risk acceptance** — where residual risk is within tolerance, the finding is formally accepted through the risk management process (CB_PRC_07) with documented justification

Ineffective actions are never closed without one of the above resolutions.

## See also

- HB_CLS_5.3-Roles-and-Responsibilities
- HB_CLS_10.2-Nonconformity
- HB_CLS_10.1-Continual-Improvement
- HB_REG_NC_01-Nonconformity-Register
- CB_PRC_01-Incident-Management
- CB_PRC_07-Risk-Management
- CB_PRC_08-Internal-Audit
- CB_PRC_09-Management-Review
- CB_PRC_11-Performance-Monitoring

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-20 | Claude (AI) | Fix missed shorthand register references HB_REG_12 → HB_REG_NC |
| 00.01.008 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.007 | 2026-02-11 | CISO | Populated TODO sections: Detection and reporting (sources, channels, scheduled detection), Analysis and RCA (immediate action, 5-Why/Ishikawa, impact assessment), Corrective actions (action plan, deadlines, ISMS modification), Effectiveness review (timing, criteria, escalation), Summary |
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.004 | 2026-02-08 | CISO | See-also: cross-references to CLS_10.2, REG_12, PRC_08 added |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version |
