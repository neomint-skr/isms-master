> **Document ID:** CB_PRC_07-Risk-Management
> **Version:** 00.01.009
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-10
> **Approval:** —
> **Review cycle:** Annual

---

# Risk Management Process

## Summary

Risks must not only be identified but systematically assessed and treated. This process describes the operational workflow from risk identification through analysis and evaluation to treatment, SoA maintenance, and residual risk acceptance. It ensures that the normatively defined criteria are applied consistently and that results are documented traceably. Without a defined process, gaps arise between identified risks and implemented controls.

## Objective and Scope

**Objective:** Risks must not only be identified but systematically assessed and treated. Without a defined process, gaps emerge between recognized risks and implemented controls — risk decisions remain ad hoc and untraceable.

This process describes the operational workflow from asset-based risk identification through analysis, evaluation, and prioritization to treatment, control selection, SoA maintenance, and residual risk acceptance (Clauses 6.1.2, 6.1.3, 8.2, 8.3). It ensures that the normatively defined criteria from CB_POL_L2_11-Risk-Management are applied consistently.

Results are documented in HB_REG_06 (Risk Register) and HB_REG_07 (Risk Treatment Plan). The process is triggered annually before the management review (CB_PRC_09) and on an event-driven basis.

**Scope:** All IS risks within the ISMS scope. Coordinated by the Chief Information Security Officer with risk owners. Triggered annually (before management review) or event-driven.

## Risk assessment

The risk assessment comprises three steps (Clause 8.2).

### Risk identification

The Chief Information Security Officer identifies IS risks systematically. Sources include:

- Asset register (HB_REG_03) with protection requirements analysis
- Security incidents (CB_PRC_01-Incident-Management)
- Audit findings (CB_PRC_08-Internal-Audit)
- Vulnerability advisories (CB_PRC_04-Vulnerability-Management)
- Changes to business processes or the IT landscape

For each identified risk, the following are determined: risk title, description (threat, vulnerability, impact), affected assets, and risk owner. Results are documented in the risk register (HB_REG_06).

### Risk analysis

For each identified risk, the Chief Information Security Officer assesses the likelihood and impact together with the risk owner, using the scales defined in CB_POL_L2_11-Risk-Management. The risk level is derived from the risk matrix (CB_POL_L2_11). The assessment distinguishes:

- **Gross risk:** Risk level without considering implemented controls
- **Net risk:** Risk level after considering already implemented controls

### Risk evaluation and prioritization

The determined risk levels are compared against the acceptance criteria (CB_POL_L2_11). Risks are prioritized in descending order of risk level. Risks rated "Critical" receive immediate treatment priority. The prioritized list is presented to the risk owner and top management.

## Risk treatment

Risk treatment implements the framework defined in Clause 6.1.3 operationally (Clause 8.3).

### Select treatment options

The risk owner selects a treatment option for each unacceptable risk from the four options defined in CB_POL_L2_11-Risk-Management (Avoid, Mitigate, Transfer, Accept).

### Determine controls and reconcile with Annex A

For selected mitigation controls, the Chief Information Security Officer identifies appropriate controls. These are reconciled with Annex A (ISO 27001) to ensure that no relevant controls have been overlooked (Clause 6.1.3 b, c). New or changed control assignments are updated in the SoA (HB_REG_02).

### Create risk treatment plan

For each risk requiring treatment, an entry is created in the risk treatment plan (HB_REG_07) containing: risk ID, selected controls, responsible person, deadline, and expected risk level after implementation.

### Approval and residual risk acceptance

The risk treatment plan is submitted to top management (CEO/CTO) for approval (Clause 6.1.3 f). Risk owners formally and in writing accept the remaining residual risks. Both approvals are documented in the risk register.

## SoA maintenance

The Statement of Applicability (HB_REG_02-Statement-of-Applicability) is updated as a result of risk treatment (Clause 6.1.3 d). With every risk treatment, the Chief Information Security Officer checks whether new controls need to be added or existing justifications adjusted.

The SoA is the SSOT for control applicability. Direction of change: risk treatment -> SoA (HB_REG_02) -> coverage matrix (INDEX.md). Never the reverse.

## Cycles and triggers

### Regular assessment

The complete risk assessment cycle is performed annually, timed before the management review (CB_PRC_09). Results feed into the management review as input (Clause 9.3.2 f).

### Event-driven triggers

An unscheduled risk assessment is triggered by:

- Material changes to IT infrastructure or business processes
- Severe security incidents (classification >= "High" in CB_PRC_01)
- Findings from internal or external audits requiring action
- New or changed regulatory requirements
- Changes to the ISMS scope

## See also

- CB_POL_L2_11-Risk-Management — Normative requirements (scales, criteria, treatment options)
- HB_CLS_6.1-Risks-and-Opportunities — ISO clause assignment
- HB_CLS_8.2-Risk-Assessment — ISO clause assignment
- HB_CLS_8.3-Risk-Treatment — ISO clause assignment
- HB_REG_02-Statement-of-Applicability — Control applicability (SSOT)
- HB_REG_06-Risk-Register — Risk entries
- HB_REG_07-Risk-Treatment-Plan — Treatment plan
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-10 | Claude (AI) | Remove RACI subsection; roles consolidated in CLS 5.3 |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.006 | 2026-02-09 | CISO | Objective and scope: bold-label pattern (Objective + Scope) |
| 00.01.005 | 2026-02-08 | CISO | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.01.004 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.003 | 2026-02-08 | CISO | Content: risk assessment, risk treatment, SoA maintenance, cycles/triggers |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version |
