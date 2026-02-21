> **Document ID:** HB_REG_SM_01-Security-Measures-Register
> **Version:** 00.01.005
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5-A.8, Clause 6.1.3
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Security Measures Register

## Summary

Effective risk treatment requires a structured inventory of all security measures with clear ownership, implementation status and evidence references. This register documents all organizational, people, physical and technological controls within the ISMS scope, structured by Annex A categories, and tracks their type, status and effectiveness. It provides the authoritative reference for SM-IDs used in the Risk Log, Risk Log (treatment view) and statement of applicability. Without a maintained security measures register, measure coverage remains unverifiable, gap analysis lacks a factual basis, and auditors cannot trace risk treatment decisions to implemented controls.

## Objective and Scope

**Standard reference:** CB_POL_L2_11-Risk-Management

**Objective:** Risk treatment decisions documented in the Risk Log (treatment view) require traceable implementation through concrete security measures. Without a central register, there is no authoritative source linking treatment intentions to operational controls.

The register assigns each security measure a unique SM-ID, maps it to Annex A controls, and tracks implementation status from planning through verification. It provides the factual basis for gap analysis, effectiveness reviews and audit evidence.

Measure definitions are derived from the Risk Log (treatment view) (HB_REG_RL) and aligned with the statement of applicability (HB_REG_SOA). Effectiveness reviews feed back into the risk management process (CB_PRC_07) and are reported in management reviews (CB_PRC_09).

**Scope:** All security measures within the ISMS scope. Target audience: CISO (measure tracking), risk owners (implementation), auditors (evidence), top management (effectiveness oversight).

### Key

| Term | Definition |
|---|---|
| SM-ID | Unique measure identifier (SM-####) |
| Type | Preventive (reduces likelihood), detective (enables detection), or corrective (reduces impact after occurrence) |
| Status | Planned (identified, not yet started), In implementation (deployment active), Implemented (operational), Verified (effectiveness confirmed through review) |
| Gap | Scenario in the Risk Log with no or insufficient measure coverage — requires treatment planning |
| Baseline | `Yes` = measure is part of the baseline control set for assets with Normal PR; `No` = risk-treatment-specific |
| Mitigates | Risk scenario IDs (SC-xxx) this measure addresses |
| Reduction_L | Likelihood reduction (integer 0–3) applied when this measure is effective |
| Reduction_Impact | Impact reduction (integer 0–3) applied when this measure is effective |

The Reduction fields are used for deterministic net risk calculation as defined in CB_POL_L2_11 (Deterministic Net Risk Reduction). The Baseline flag determines whether a measure is included in the baseline control set for assets with Normal protection requirements. Mitigates links measures to specific risk scenarios in HB_REG_RL.

## Organizational Controls (A.5)

| SM-ID | Title | Annex A ref | Type | Description | Owner | Status | Evidence | Baseline | Mitigates | Reduction_L | Reduction_Impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [SM-0001] | [Title] | [A.5.x] | [Preventive] | [Description] | [Role] | [Planned] | [Link] | [Yes/No] | [SC-IDs] | [0-3] | [0-3] |

## People Controls (A.6)

| SM-ID | Title | Annex A ref | Type | Description | Owner | Status | Evidence | Baseline | Mitigates | Reduction_L | Reduction_Impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [SM-0001] | [Title] | [A.6.x] | [Preventive] | [Description] | [Role] | [Planned] | [Link] | [Yes/No] | [SC-IDs] | [0-3] | [0-3] |

## Physical Controls (A.7)

| SM-ID | Title | Annex A ref | Type | Description | Owner | Status | Evidence | Baseline | Mitigates | Reduction_L | Reduction_Impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [SM-0001] | [Title] | [A.7.x] | [Preventive] | [Description] | [Role] | [Planned] | [Link] | [Yes/No] | [SC-IDs] | [0-3] | [0-3] |

## Technological Controls (A.8)

| SM-ID | Title | Annex A ref | Type | Description | Owner | Status | Evidence | Baseline | Mitigates | Reduction_L | Reduction_Impact |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [SM-0001] | [Title] | [A.8.x] | [Preventive] | [Description] | [Role] | [Planned] | [Link] | [Yes/No] | [SC-IDs] | [0-3] | [0-3] |

## Measure Effectiveness Review

| SM-ID | Review date | Reviewer | Effectiveness rating | Findings | Next review |
|---|---|---|---|---|---|
| [SM-####] | [YYYY-MM-DD] | [Role] | [Effective/Partially effective/Ineffective] | [Summary] | [YYYY-MM-DD] |

## See also

- CB_POL_L2_11-Risk-Management — Normative basis
- CB_PRC_07-Risk-Management — Operational process
- HB_REG_RL_01-Risk-Log — Scenario-based risk entries and treatment view
- HB_REG_SOA_01-Statement-of-Applicability — Control applicability

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.004 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.003 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.002 | 2026-02-18 | Claude (AI) | Add Baseline, Mitigates, Reduction_L, Reduction_Impact fields for deterministic net risk calculation |
| 00.01.001 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 12) |
| 00.01.000 | 2026-02-11 | Claude (AI) | Initial version: security measures register structured by Annex A categories |
