> **Document ID:** HB_REG_RT_01-Risk-Treatment-Plan
> **Version:** 00.01.012
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** Clause 6.1.3 e
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Risk Treatment Plan

## Summary

The risk treatment plan operationalizes risk management for all risks above the acceptance threshold. It assigns each risk a concrete treatment option, control measures, responsible person, target completion date and expected residual risk level. The plan fulfills the documented information obligation of Clause 6.1.3 e and provides the governance mechanism for conscious residual risk acceptance by top management. Without this documentation, risk treatment remains untracked, residual risks are not formally accepted, and auditors lack evidence of systematic risk governance. The plan is maintained by the CISO, approved by top management and reviewed during management reviews.

## Objective and Scope

**Objective:** Identified risks without a concrete treatment plan remain untreated — risk acceptance without a treatment decision is not conscious governance. Without a documented treatment plan, there is no evidence that residual risks have been consciously accepted (Clause 6.1.3 e).

The risk treatment plan assigns each risk requiring treatment a control, a responsible person, a timeframe and the expected residual risk value. It makes risk governance operationally actionable and traceable.

Treatment decisions are derived from the risk register (HB_REG_RR) and developed in the risk management process (CB_PRC_07). Top management approves the plan and formally accepts residual risks; implementation progress is tracked in the management review (CB_PRC_09).

**Scope:** All risks above the acceptance threshold (CB_POL_L2_11). Target audience: Risk owners (implementation), CISO (tracking), top management (approval), auditors (evidence).

### Key

| Term | Definition |
|---|---|
| Treatment option | Avoid (eliminate the activity that creates the risk), Reduce (implement controls to reduce likelihood or impact), Transfer (shift risk to third party through insurance or contract), Accept (conscious decision to retain risk). Defined in CB_POL_L2_11 |
| SM-ID | Reference to security measure(s) in HB_REG_SM_01-Security-Measures-Register |
| Gap | No gap (adequate measures assigned), Partial gap (measures exist but insufficient coverage), Full gap (no measure assigned — requires immediate treatment planning) |
| Status | Planned (treatment decision made, implementation pending), In progress (control implementation active), Implemented (control operational, effectiveness not yet verified), Verified (control effective, residual risk confirmed) |
| Expected residual risk | Anticipated risk level after full implementation of planned controls. Must be below acceptance threshold (CB_POL_L2_11) or formally accepted by top management |

## Treatment Plan

| SC-ID | Risk description | Treatment option | SM-ID(s) | Annex A ref | Responsible | Target date | Expected residual risk | Gap | Status |
|---|---|---|---|---|---|---|---|---|---|
| [SC-0001] | [Risk description] | [Avoid/Reduce/Transfer/Accept] | [SM-####] | [A.x.x] | [Responsible person/role] | [YYYY-MM-DD] | [Low/Medium/High] | [No gap/Partial gap/Full gap] | [Planned/In progress/Implemented/Verified] |

## Approval

| Version | Approved by | Date | Scope | Residual risks accepted |
|---|---|---|---|---|
| [00.01.000] | [CEO/CTO] | [YYYY-MM-DD] | [All risks / specific risk IDs] | [Yes — residual risks documented in REG_RR] |

The risk treatment plan requires formal approval by top management (Clause 6.1.3 e). This approval confirms that the planned treatments are adequate, resources are allocated, and residual risks are consciously accepted. Approved residual risks are documented in HB_REG_RR (Risk Acceptance).

## See also

- CB_POL_L2_11-Risk-Management — Risk criteria and treatment options
- CB_PRC_07-Risk-Management — Operational risk management process
- HB_REG_RR_01-Risk-Register — Scenario-based risk entries and acceptance decisions
- HB_REG_SM_01-Security-Measures-Register — Security measures referenced by SM-ID
- HB_CLS_5.3-Roles-and-Responsibilities — RACI for risk management


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.012 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.011 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.010 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 07) |
| 00.01.009 | 2026-02-11 | Claude (AI) | SC-ID replaces Risk ID, SM-ID(s) replaces free-text controls, added Gap column and gap definitions in Key section |
| 00.01.008 | 2026-02-11 | skr | Renamed risk treatment option "Mitigate" to "Reduce" for ISO/BSI alignment |
| 00.01.007 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.006 | 2026-02-10 | [CISO] | Key table; removed inline bold definitions |
| 00.01.005 | 2026-02-10 | [CISO] | Populated Summary, Treatment Plan, Approval, Responsibilities, See also |
| 00.01.004 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.01.003 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.01.001 | 2026-02-07 | [CISO] | See also section added |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
