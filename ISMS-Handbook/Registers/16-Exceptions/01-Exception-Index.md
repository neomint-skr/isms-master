> **Document ID:** HB_REG_EXC_01-Exception-Index
> **Version:** 00.01.002
> **Classification:** Confidential
> **Author:** CISO
> **ISO Reference:** Clause 6.1
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** Annual

---

# Exception Index

## Summary

Policy exceptions that are not centrally tracked create hidden risk exposure and audit gaps. This register provides a single index of all exception requests — approved, rejected, expired, and renewed — across the ISMS. It enables the Chief Information Security Officer to monitor active deviations, enforce expiry reviews, and provide audit evidence of exception governance. Without a central exception register, the organization cannot demonstrate that policy deviations are controlled.

## Objective and Scope

**Objective:** Exceptions to IS requirements must be tracked centrally to maintain visibility and control. Without a register, deviations accumulate unmonitored and cannot be presented as audit evidence.

This register indexes all exception requests processed through CB_PRC_14 (Exception Management). It records the request metadata, decision status, and expiry information. Approved exceptions are additionally reflected in the risk register (HB_REG_05) as risk type "Exception."

The register is maintained by the Chief Information Security Officer and reviewed before each management review cycle.

**Scope:** All exception requests within the ISMS scope. Target audience: CISO (maintenance), risk owners (awareness), auditors (evidence).

### Key

| Term | Definition |
|---|---|
| Status | Pending (request submitted, decision outstanding), Approved (exception granted with conditions), Rejected (request denied, remediation required), Expired (approval period ended without renewal), Renewed (replaced by a new exception) |

## Exception Index

| EXC-ID | Date | Requestor | Policy / Control ref | Status | Expiry | Approver |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

> Individual exception records are stored in `Records/` as `EXC-NNN-Description.md`. Evidence files, no formal ISMS IDs.

## See also

- CB_PRC_14-Exception-Management — Exception approval workflow
- CB_TPL_20-Exception-Request — Exception request template
- CB_POL_L2_11-Risk-Management — Exception management requirements (normative)
- HB_REG_05-Risk-Register — Risk entries for approved exceptions

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.002 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.001 | 2026-02-11 | Claude | Renumber Exception Management PRC_13→PRC_14, TPL_19→TPL_20 |
| 00.01.000 | 2026-02-11 | CISO | Initial version |
