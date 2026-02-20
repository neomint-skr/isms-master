> **Document ID:** CB_PRC_07-Risk-Management
> **Version:** 00.01.021
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Risk Management Process

## Summary

Risks must not only be identified but systematically assessed and treated. This process describes the operational workflow from risk identification through analysis and evaluation to treatment, SoA maintenance, and residual risk acceptance. It ensures that the normatively defined criteria are applied consistently and that results are documented traceably. Without a defined process, gaps arise between identified risks and implemented controls.

## Objective and Scope

**Objective:** Risks must not only be identified but systematically assessed and treated. Without a defined process, gaps emerge between recognized risks and implemented controls — risk decisions remain ad hoc and untraceable.

This process describes the operational workflow from asset-based risk identification through analysis, evaluation, and prioritization to treatment, control selection, SoA maintenance, and residual risk acceptance (Clauses 6.1.2, 6.1.3, 8.2, 8.3). It ensures that the normatively defined criteria from CB_POL_L2_11-Risk-Management are applied consistently.

Results are documented in HB_REG_RR (Risk Register) and HB_REG_RT (Risk Treatment Plan). The process is triggered annually before the management review (CB_PRC_09) and on an event-driven basis.

**Scope:** All IS risks within the ISMS scope. Coordinated by the Chief Information Security Officer with risk owners. Triggered annually (before management review) or event-driven.

## Risk assessment

The risk assessment follows a catalogue-driven, six-step workflow (Clause 8.2). Vulnerability catalogues and threat catalogues are maintained in the risk framework (HB_REG_RF — Risk-Framework/Threats/ and Risk-Framework/Vulnerabilities/). Asset-class-specific catalogues provide threats with relevance flags, vulnerabilities with domain/aspect tags, and threat-relevance matrices. Additional event-driven sources (incidents, audits, vulnerability advisories) remain valid triggers for ad-hoc risk identification outside the catalogue workflow.

### Step 1 — Scope determination

The Chief Information Security Officer identifies the assets requiring individual risk analysis from HB_REG_AM. The scope comprises all assets whose protection requirement (PR) is rated **High** or **Very high** in at least one core value (C, I, or A), as flagged by CB_PRC_13 (Protection Requirements). Assets already assessed and unchanged since the last cycle are excluded unless an event-driven trigger applies.

Additional input sources that may expand the scope:

- Security incidents (CB_PRC_01-Incident-Management)
- Audit findings (CB_PRC_08-Internal-Audit)
- Vulnerability advisories (CB_PRC_04-Vulnerability-Management)
- Changes to business processes or the IT landscape

### Step 2 — Vulnerability assessment

For each in-scope asset, the CISO or IS-Coordinator works through the vulnerability catalogue of the asset's class in HB_REG_RF. Each vulnerability entry receives a status:

| Status | Meaning |
|---|---|
| present | Vulnerability exists in the current environment |
| not present | Vulnerability does not apply or has been fully mitigated |
| unknown | Assessment not yet possible; further investigation required |
| n/a | Vulnerability is structurally irrelevant for this asset |

For each assessment, a brief evidence statement or comment is documented (e.g. reference to configuration evidence, scan result, or expert judgement). Vulnerabilities with status "unknown" are treated as "present" for the purpose of scenario generation until resolved.

**Resolve-by deadlines.** Each `unknown` vulnerability entry must be resolved within the deadline defined in CB_POL_L2_11 (Governance for Status Unknown): Very high — [remediation deadline — Very high, e.g. 30 days], High — [remediation deadline — High, e.g. 60 days], Normal — [remediation deadline — Normal, e.g. 90 days]. The resolve-by date is recorded in the risk assessment record (CB_TPL_21). Expired entries without resolution are escalated to the risk owner.

The complete vulnerability assessment is documented in the **Appendix: Vulnerability Assessment** of the risk assessment record (CB_TPL_21). This placement ensures the audit trail is preserved while keeping the risk scenario analysis as the document's focal point.

### Step 3 — Scenario generation

Risk scenarios are generated systematically from the combination of relevant threats (HB_REG_RF) and vulnerabilities with status **present** or **unknown**. The threat-relevance matrix in each catalogue file determines which threats apply to which asset classes. A threat–vulnerability pair forms a valid scenario only when the aspect tags are compatible (i.e. the threat's aspect tag matches the vulnerability's aspect tag: C, I, A, or combinations).

Each scenario receives a unique identifier: `SC-<Asset-ID>-####` (four-digit sequential number per asset). Each scenario includes a two-sentence risk description in subjunctive form per the Scenario Text Template in CB_POL_L2_11: "If [threat] occurs and [vulnerability] exists, this could lead to [impact on affected protection goals] for [asset]." This text is recorded in the Risk Scenario column of the combined risk scenarios table (CB_TPL_21).

### Step 4 — Risk analysis

For each scenario, the Chief Information Security Officer assesses likelihood and impact together with the risk owner:

- **Likelihood (L):** Rated on the 1–4 scale defined in CB_POL_L2_11-Risk-Management. The rationale is documented as free-text justification (Cl. 6.1.2).
- **Impact (I):** Derived from the asset's protection requirement using the mapping table in CB_POL_L2_11 (PR category → impact level).
- **Risk Score:** L × I, plotted on the risk matrix (CB_POL_L2_11).

The assessment distinguishes:

- **Gross risk:** Risk score without considering implemented controls.
- **Net risk:** Existing security measures (referenced by SM-ID from HB_REG_SM) are identified per scenario. Net risk is computed deterministically per CB_POL_L2_11 (Deterministic Net Risk Reduction): `Net_L = max(1, Gross_L − max(Reduction_L))`, `Net_I = max(1, Gross_I − max(Reduction_Impact))`. Reduction values are sourced from HB_REG_SM.

Scenarios with a net risk of **Low (1-3)** automatically receive treatment **Accept** (risk acceptance by risk owner per CB_POL_L2_11 acceptance criteria). Scenarios with net risk **Medium or higher (>= 4)** receive treatment **Treat (→ RTP)** and are forwarded to the risk treatment plan (HB_REG_RT) for treatment option selection by the risk owner.

### Step 5 — Risk evaluation and prioritization

The net risk scores are compared against the acceptance criteria defined in CB_POL_L2_11. Risks are prioritized in descending order of risk score. Risks rated **Critical** receive immediate treatment priority. The prioritized list is presented to the risk owner and top management.

### Step 6 — Documentation

For each in-scope asset, the assessment results are documented:

- An individual risk assessment record is created using CB_TPL_21, filed in `Registers/06-Risk-Assessments/<Layer>/RA-<Asset-ID>.md`.
- Aggregated results (scenario list, risk scores, treatment status) are entered in the risk register (HB_REG_RR).

## Risk treatment

Risk treatment implements the framework defined in Clause 6.1.3 operationally (Clause 8.3).

### Select treatment options

The risk owner selects a treatment option for each unacceptable risk from the four options defined in CB_POL_L2_11-Risk-Management (Avoid, Reduce, Transfer, Accept).

### Determine controls and reconcile with Annex A

For treatment option **Reduce**, the Chief Information Security Officer identifies appropriate security measures:

1. **Existing measure lookup:** Check HB_REG_SM (Security Measures Catalogue) for a measure that addresses the scenario's threat–vulnerability combination. If a suitable measure exists, reference it by SM-ID.
2. **New measure creation:** If no suitable measure exists in HB_REG_SM, a new measure is defined and added to the catalogue with a new SM-ID.
3. **Risk-to-measure mapping:** The assignment of risk scenarios to security measures is documented in HB_REG_RT (Risk Treatment Plan), linking SC-IDs to SM-IDs.
4. **Annex A reconciliation:** Controls are reconciled with Annex A (ISO 27001) to ensure that no relevant controls have been overlooked (Clause 6.1.3 b, c). New or changed control assignments are updated in the SoA (HB_REG_SOA).

### Create risk treatment plan

For each risk requiring treatment, an entry is created in the risk treatment plan (HB_REG_RT) containing: risk ID (SC-ID), selected treatment option, assigned security measures (SM-IDs), responsible person, deadline, and expected risk level after implementation.

### Approval and residual risk acceptance

The risk treatment plan is submitted to top management (CEO/CTO) for approval (Clause 6.1.3 f). Risk owners formally and in writing accept the remaining residual risks. Both approvals are documented in the risk register.

## SoA maintenance

The Statement of Applicability (HB_REG_SOA_01-Statement-of-Applicability) is updated as a result of risk treatment (Clause 6.1.3 d). With every risk treatment, the Chief Information Security Officer checks whether new controls need to be added or existing justifications adjusted.

The SoA is the SSOT for control applicability. Direction of change: risk treatment -> SoA (HB_REG_SOA) -> coverage matrix (INDEX.md). Never the reverse.

## Cycles and triggers

### Regular assessment

The complete risk assessment cycle is performed annually, timed before the management review (CB_PRC_09). Results feed into the management review as input (Clause 9.3.2 f). Additionally, the Risk Committee convenes [frequency, e.g. quarterly] to review the current risk landscape, assess treatment progress, and adjust priorities where necessary.

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
- HB_REG_SOA_01-Statement-of-Applicability — Control applicability (SSOT)
- HB_REG_AM_01-Asset-Register — Asset data, cross-reference tables
- HB_REG_RR_01-Risk-Register — Risk entries
- HB_REG_RT_01-Risk-Treatment-Plan — Treatment plan (SC-ID → SM-ID mapping)
- HB_REG_RF — Risk framework (threat and vulnerability catalogues)
- HB_REG_SM_01-Security-Measures-Catalogue — Security measures (SM-IDs)
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.021 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.01.020 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.019 | 2026-02-20 | CISO | Reorganized into numbered subfolder; file renamed to Process_ prefix |
| 00.01.018 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.017 | 2026-02-18 | Claude (AI) | Deterministic PR-risk: HB_REG_11→HB_REG_RF references, unknown resolve-by deadlines, deterministic net risk formula |
| 00.01.016 | 2026-02-13 | Claude (AI) | Step 4: Treatment column values changed to binary Accept/Treat (→ RTP); specific treatment selection moved to RTP (HB_REG_06) |
| 00.01.015 | 2026-02-13 | Claude (AI) | Steps 2-4: vulnerability assessment documented in appendix of RA record; scenario text in subjunctive per L2_11 template; auto-accept for Net Risk ≤ 3 |
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
