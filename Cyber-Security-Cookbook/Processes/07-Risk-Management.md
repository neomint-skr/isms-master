> **Document ID:** CB_PRC_07-Risk-Management
> **Version:** 00.01.014
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Risk Management Process

## Summary

Risks must not only be identified but systematically assessed and treated. This process describes the operational workflow from risk identification through analysis and evaluation to treatment, SoA maintenance, and residual risk acceptance. It ensures that the normatively defined criteria are applied consistently and that results are documented traceably. Without a defined process, gaps arise between identified risks and implemented controls.

## Objective and Scope

**Objective:** Risks must not only be identified but systematically assessed and treated. Without a defined process, gaps emerge between recognized risks and implemented controls — risk decisions remain ad hoc and untraceable.

This process describes the operational workflow from asset-based risk identification through analysis, evaluation, and prioritization to treatment, control selection, SoA maintenance, and residual risk acceptance (Clauses 6.1.2, 6.1.3, 8.2, 8.3). It ensures that the normatively defined criteria from CB_POL_L2_11-Risk-Management are applied consistently.

Results are documented in HB_REG_05 (Risk Register) and HB_REG_06 (Risk Treatment Plan). The process is triggered annually before the management review (CB_PRC_09) and on an event-driven basis.

**Scope:** All IS risks within the ISMS scope. Coordinated by the Chief Information Security Officer with risk owners. Triggered annually (before management review) or event-driven.

## Risk assessment

The risk assessment follows a catalogue-driven, six-step workflow (Clause 8.2). Vulnerability catalogues (HB_REG_03, per asset layer) and the threat catalogue (HB_REG_11) provide the systematic input. Additional event-driven sources (incidents, audits, vulnerability advisories) remain valid triggers for ad-hoc risk identification outside the catalogue workflow.

### Step 1 — Scope determination

The Chief Information Security Officer identifies the assets requiring individual risk analysis from HB_REG_03. The scope comprises all assets whose protection requirement (PR) is rated **High** or **Very high** in at least one core value (C, I, or A), as flagged by CB_PRC_13 (Protection Requirements). Assets already assessed and unchanged since the last cycle are excluded unless an event-driven trigger applies.

Additional input sources that may expand the scope:

- Security incidents (CB_PRC_01-Incident-Management)
- Audit findings (CB_PRC_08-Internal-Audit)
- Vulnerability advisories (CB_PRC_04-Vulnerability-Management)
- Changes to business processes or the IT landscape

### Step 2 — Vulnerability assessment

For each in-scope asset, the CISO or IS-Coordinator works through the vulnerability catalogue of the asset's layer in HB_REG_03. Each vulnerability entry receives a status:

| Status | Meaning |
|---|---|
| present | Vulnerability exists in the current environment |
| not present | Vulnerability does not apply or has been fully mitigated |
| unknown | Assessment not yet possible; further investigation required |
| n/a | Vulnerability is structurally irrelevant for this asset |

For each assessment, a brief evidence statement or comment is documented (e.g. reference to configuration evidence, scan result, or expert judgement). Vulnerabilities with status "unknown" are treated as "present" for the purpose of scenario generation until resolved.

### Step 3 — Scenario generation

Risk scenarios are generated systematically from the combination of relevant threats (HB_REG_11) and vulnerabilities with status **present** or **unknown**. A threat–vulnerability pair forms a valid scenario only when the aspect tags are compatible (i.e. the threat's aspect tag matches the vulnerability's aspect tag: C, I, A, or combinations).

Each scenario receives a unique identifier: `SC-<Asset-ID>-####` (four-digit sequential number per asset). The scenario description captures the threat, the exploited vulnerability, and the potential impact on the affected core value(s).

### Step 4 — Risk analysis

For each scenario, the Chief Information Security Officer assesses likelihood and impact together with the risk owner:

- **Likelihood (L):** Rated on the 1–4 scale defined in CB_POL_L2_11-Risk-Management. The rationale is documented as free-text justification (Cl. 6.1.2).
- **Impact (I):** Derived from the asset's protection requirement using the mapping table in CB_POL_L2_11 (PR category → impact level).
- **Risk Score:** L × I, plotted on the risk matrix (CB_POL_L2_11).

The assessment distinguishes:

- **Gross risk:** Risk score without considering implemented controls.
- **Net risk:** Existing security measures (referenced by SM-ID from HB_REG_07) are identified per scenario. Their mitigating effect on likelihood and/or impact is assessed, yielding the net risk score.

### Step 5 — Risk evaluation and prioritization

The net risk scores are compared against the acceptance criteria defined in CB_POL_L2_11. Risks are prioritized in descending order of risk score. Risks rated **Critical** receive immediate treatment priority. The prioritized list is presented to the risk owner and top management.

### Step 6 — Documentation

For each in-scope asset, the assessment results are documented:

- An individual risk assessment record is created using CB_TPL_21, filed in `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`.
- Aggregated results (scenario list, risk scores, treatment status) are entered in the risk register (HB_REG_05).

## Risk treatment

Risk treatment implements the framework defined in Clause 6.1.3 operationally (Clause 8.3).

### Select treatment options

The risk owner selects a treatment option for each unacceptable risk from the four options defined in CB_POL_L2_11-Risk-Management (Avoid, Reduce, Transfer, Accept).

### Determine controls and reconcile with Annex A

For treatment option **Reduce**, the Chief Information Security Officer identifies appropriate security measures:

1. **Existing measure lookup:** Check HB_REG_07 (Security Measures Catalogue) for a measure that addresses the scenario's threat–vulnerability combination. If a suitable measure exists, reference it by SM-ID.
2. **New measure creation:** If no suitable measure exists in HB_REG_07, a new measure is defined and added to the catalogue with a new SM-ID.
3. **Risk-to-measure mapping:** The assignment of risk scenarios to security measures is documented in HB_REG_06 (Risk Treatment Plan), linking SC-IDs to SM-IDs.
4. **Annex A reconciliation:** Controls are reconciled with Annex A (ISO 27001) to ensure that no relevant controls have been overlooked (Clause 6.1.3 b, c). New or changed control assignments are updated in the SoA (HB_REG_08).

### Create risk treatment plan

For each risk requiring treatment, an entry is created in the risk treatment plan (HB_REG_06) containing: risk ID (SC-ID), selected treatment option, assigned security measures (SM-IDs), responsible person, deadline, and expected risk level after implementation.

### Approval and residual risk acceptance

The risk treatment plan is submitted to top management (CEO/CTO) for approval (Clause 6.1.3 f). Risk owners formally and in writing accept the remaining residual risks. Both approvals are documented in the risk register.

## SoA maintenance

The Statement of Applicability (HB_REG_08-Statement-of-Applicability) is updated as a result of risk treatment (Clause 6.1.3 d). With every risk treatment, the Chief Information Security Officer checks whether new controls need to be added or existing justifications adjusted.

The SoA is the SSOT for control applicability. Direction of change: risk treatment -> SoA (HB_REG_08) -> coverage matrix (INDEX.md). Never the reverse.

## Cycles and triggers

### Regular assessment

The complete risk assessment cycle is performed annually, timed before the management review (CB_PRC_09). Results feed into the management review as input (Clause 9.3.2 f). Additionally, the Risk Committee convenes quarterly to review the current risk landscape, assess treatment progress, and adjust priorities where necessary.

### Event-driven triggers

An unscheduled risk assessment is triggered by:

- Material changes to IT infrastructure or business processes
- Severe security incidents (classification >= "High" in CB_PRC_01)
- Findings from internal or external audits requiring action
- New or changed regulatory requirements
- Changes to the ISMS scope
- Design phase of new projects or significant project changes (addresses A.5.8)
- Planned contracts with suppliers or service providers that process ISMS-relevant information (addresses A.5.19)

## See also

- CB_POL_L2_11-Risk-Management — Normative requirements (scales, criteria, treatment options)
- CB_PRC_13-Protection-Requirements — Input: assets with assessed protection requirements
- CB_TPL_21 — Risk assessment record template
- HB_CLS_6.1-Risks-and-Opportunities — ISO clause assignment
- HB_CLS_8.2-Risk-Assessment — ISO clause assignment
- HB_CLS_8.3-Risk-Treatment — ISO clause assignment
- HB_REG_08-Statement-of-Applicability — Control applicability (SSOT)
- HB_REG_03-Asset-Register — Asset data, vulnerability catalogues, cross-reference tables
- HB_REG_05-Risk-Register — Risk entries
- HB_REG_06-Risk-Treatment-Plan — Treatment plan (SC-ID → SM-ID mapping)
- HB_REG_11-Threat-Catalogue — Threat catalogue with aspect tags
- HB_REG_07-Security-Measures-Catalogue — Security measures (SM-IDs)
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.014 | 2026-02-11 | Claude (AI) | Restructured risk assessment to 6-step catalogue-driven workflow (vulnerability catalogue, scenario generation, SM-ID linkage); updated risk treatment for HB_REG_07 measure lookup/creation |
| 00.01.013 | 2026-02-11 | Claude (AI) | Added quarterly Risk Committee review cycle (merge from retorio) |
| 00.01.012 | 2026-02-11 | skr | Renamed risk treatment option "Mitigate" to "Reduce" for ISO/BSI alignment |
| 00.01.011 | 2026-02-11 | Claude (AI) | Risk identification input: protection requirements from CB_PRC_13 (was CB_PRC_07 self-reference); add CB_PRC_13 to See also |
| 00.01.010 | 2026-02-11 | CISO | Add project/supplier triggers (A.5.8, A.5.19); add assessment rationale requirement (Cl. 6.1.2) |
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
