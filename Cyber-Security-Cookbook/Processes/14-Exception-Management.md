> **Document ID:** CB_PRC_14-Exception-Management
> **Version:** 00.01.002
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Exception Management Process

## Summary

Policy deviations that are not formally approved create uncontrolled risk exposure. This process defines the workflow for requesting, evaluating, approving or rejecting, and reviewing exceptions to IS policies, standards, or controls. It ensures that every deviation is documented, risk-assessed, time-bounded, and linked to compensating controls. Without a structured exception process, policy deviations remain invisible and cannot be tracked or remediated.

## Objective and Scope

**Objective:** Operational reality sometimes requires temporary deviations from IS requirements. Without a formal process, such deviations remain undocumented, unassessed, and uncontrolled — creating blind spots in the risk landscape.

This process defines the lifecycle of exceptions from request through approval or rejection to periodic review and expiry. It links each approved exception to the risk register and enforces remediation deadlines for rejected requests.

The process operationalizes the exception management requirements from CB_POL_L2_11-Risk-Management (Exception Management section). Exception records are tracked in HB_REG_EXC_01 (Exception Index) and approved exceptions are reflected in HB_REG_06 (Risk Register).

**Scope:** All planned deviations from IS policies, standards, or Annex A controls within the ISMS scope. Triggers: a requestor identifies that compliance with a specific requirement is not feasible within the current constraints.

## Triggers

The process is triggered when:

- An employee or asset owner identifies that a policy, standard, or control requirement cannot be met
- An audit finding reveals an existing undocumented deviation
- A project or business change introduces a temporary need to deviate from a requirement

## Process steps

### 1. Request

The requestor prepares an exception request using the exception request template (CB_TPL_20-Exception-Request). The request must identify the affected policy, standard, or control, describe the deviation, justify why it is unavoidable, specify the requested duration, assess resulting risks, and propose compensating controls.

The requestor submits the completed request to the Chief Information Security Officer.

### 2. Registration

The Chief Information Security Officer assigns an exception ID (EXC-NNN) and records the request in the exception register (HB_REG_EXC_01-Exception-Index) with status "Pending." Every request is registered regardless of the subsequent decision.

### 3. Risk assessment

The Chief Information Security Officer evaluates the risk impact of the requested deviation:

- Identifies the protection requirement of the affected asset (Normal, High, Very high)
- Assesses the likelihood and impact of the deviation materializing as a security event
- Evaluates the adequacy of the proposed compensating controls
- Determines the approval authority based on the impact level

### 4. Decision

**Approved:** The approver grants the exception with conditions and an expiry date. The Chief Information Security Officer:

- Updates the exception register status to "Approved"
- Records the conditions, expiry date, and approver in the exception record
- Creates a corresponding entry in the risk register (HB_REG_06) with risk type "Exception"
- Notifies the requestor of the approval and conditions

**Rejected:** The Chief Information Security Officer:

- Updates the exception register status to "Rejected"
- Sets a remediation deadline based on the protection requirement of the affected asset (Very high: 30 days, High: 60 days, Normal: 90 days)
- Notifies the requestor with the requirement to restore compliance within the deadline

**Approval authority:**

| Impact level | Approver |
|---|---|
| Low / Medium | Chief Information Security Officer |
| High | CEO and CTO (joint approval) |

### 5. Review

Before an approved exception expires, the Chief Information Security Officer reviews whether the deviation is still necessary:

- **No longer needed:** The exception expires and the register status is updated to "Expired"
- **Still needed:** The requestor submits a new exception request. If approved, the original entry is marked "Renewed" with a reference to the new exception ID

Expired exceptions without renewal trigger verification that compliance has been restored.

## See also

- CB_POL_L2_11-Risk-Management — Exception management requirements (normative)
- CB_TPL_20-Exception-Request — Exception request template
- HB_REG_EXC_01-Exception-Index — Exception register
- HB_REG_06-Risk-Register — Risk entries for approved exceptions
- CB_PRC_07-Risk-Management — Risk assessment and treatment process
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.002 | 2026-02-11 | CISO | RACI section removed; roles centralized in HB_CLS_5.3 |
| 00.01.001 | 2026-02-11 | Claude | Renumber Exception Management PRC_13→PRC_14, TPL_19→TPL_20 |
| 00.01.000 | 2026-02-11 | CISO | Initial version |
