> **Document ID:** HB_REG_06-Risk-Register
> **Version:** 00.01.009
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Risk Register

## Summary

The risk register captures all identified information security risks to ensure systematic evaluation, prioritization and treatment. It documents risk ID, asset reference, threat-vulnerability pairs, likelihood and impact evaluations, risk level, treatment option and current status. The register serves as the decision basis for risk acceptance, treatment prioritization and control selection. Without this documentation, risk management remains unsubstantiated, and auditors lack evidence of structured risk identification and evaluation. The register is maintained by the CISO with support from risk owners, updated during risk assessment cycles and reviewed in management reviews.

## Objective and Scope

**Objective:** Risks that are not documented can neither be evaluated nor treated — risk management remains an unsubstantiated claim. Without a risk register, the auditor lacks the central evidence of risk identification and evaluation.

The register documents all identified IS risks with asset reference, threat, vulnerability, evaluation (likelihood x impact) and treatment status. It provides the decision basis for the prioritization of controls.

Risk evaluation follows the criteria in CB_POL_L2_11 (Risk Management) and the workflow in CB_PRC_07 (Risk Management). Risks above the acceptance threshold are addressed in the risk treatment plan (HB_REG_07) and tracked through the management review (CB_PRC_09).

**Scope:** All IS risks within the ISMS scope. Target audience: Risk owners (evaluation), CISO (analysis), top management (acceptance decision), auditors (evidence).

### Key

| Term | Definition |
|---|---|
| Treatment option | Avoid (eliminate the activity), Reduce (reduce likelihood/impact through controls), Transfer (shift risk to third party), Accept (conscious decision to retain risk), Exception (approved time-limited policy deviation — see CB_PRC_14 and HB_REG_EXC_01 for the full exception lifecycle). Defined in CB_POL_L2_11 |
| Status | Identified (risk documented, evaluation complete), Under treatment (treatment plan active), Accepted (formal acceptance decision documented), Closed (risk no longer applicable or successfully mitigated below threshold) |

## Risk Matrix

The risk matrix is defined in CB_POL_L2_11 (Risk Management Standard). The following summary is provided for reference:

|  | Low (1) | Moderate (2) | High (3) | Critical (4) |
|---|---|---|---|---|
| **Frequent (4)** | 4 Medium | 8 High | 12 Critical | 16 Critical |
| **Likely (3)** | 3 Low | 6 Medium | 9 High | 12 Critical |
| **Possible (2)** | 2 Low | 4 Medium | 6 Medium | 8 High |
| **Rare (1)** | 1 Low | 2 Low | 3 Low | 4 Medium |

Risk level = Likelihood × Impact. Acceptance thresholds are defined in CB_POL_L2_11.

## Risk Entries

| Risk ID | Asset ref | Threat | Vulnerability | L (1-4) | I (1-4) | Risk level | Treatment option | Risk owner | Status |
|---|---|---|---|---|---|---|---|---|---|
| [R-001] | [Asset ID] | [Threat description] | [Vulnerability description] | [1-4] | [1-4] | [Low/Medium/High/Critical] | [Avoid/Reduce/Transfer/Accept] | [Risk owner] | [Identified/Under treatment/Accepted/Closed] |

## Risk Acceptance

| Risk ID | Decision | Rationale | Approver | Acceptance date | Reassessment date |
|---|---|---|---|---|---|
| [R-001] | [Accept/Accept with conditions] | [Rationale for acceptance] | [CEO/CTO/Risk owner] | [YYYY-MM-DD] | [YYYY-MM-DD] |

Acceptance criteria are defined in CB_POL_L2_11. Critical risks (risk level 12-16) are never acceptable and must be treated. Acceptance of high risks requires CEO approval. Medium risks may be accepted by CTO or risk owner with CISO review.

## See also

- CB_POL_L2_11-Risk-Management — Risk criteria, matrix, acceptance thresholds
- CB_PRC_07-Risk-Management — Operational risk management process
- HB_REG_07-Risk-Treatment-Plan — Treatment plan for risks above acceptance threshold
- HB_REG_03-Asset-Register — Asset inventory as basis for risk identification
- HB_REG_EXC_01-Exception-Index — Exception register for approved policy deviations


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-11 | Claude (AI) | Added Exception as treatment option type; cross-reference to HB_REG_EXC_01 (merge from retorio) |
| 00.01.008 | 2026-02-11 | skr | Renamed risk treatment option "Mitigate" to "Reduce" for ISO/BSI alignment |
| 00.01.007 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.006 | 2026-02-10 | [CISO] | Key table; compact column headers (L, I); removed inline bold definitions |
| 00.01.005 | 2026-02-10 | [CISO] | Populated Summary, Risk Matrix, Risk Entries, Risk Acceptance, Responsibilities, See also |
| 00.01.004 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.01.003 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.01.001 | 2026-02-07 | [CISO] | See also section added |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
