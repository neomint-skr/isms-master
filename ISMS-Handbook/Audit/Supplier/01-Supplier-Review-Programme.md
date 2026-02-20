> **Document ID:** HB_AUD_SUP_01-Supplier-Review-Programme
> **Version:** 00.00.003
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.19, A.5.22
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Supplier Review Programme

## Summary

Supplier reviews verify that IS-relevant suppliers maintain the security posture agreed upon in contractual terms. This programme defines the multi-year review schedule for critical and important suppliers per ISO 27001 Annex A controls A.5.19 and A.5.22. Reviews assess certification validity, SLA fulfilment and adherence to contractual IS requirements. Without systematic supplier reviews, security degradation at third parties goes undetected — a risk compounding with each unreviewed supplier cycle.

## Objective and Scope

**Objective:** Supplier security postures change over time — certifications expire, service levels shift, and contractual commitments may not be maintained. Without periodic verification, the organization relies on outdated assurance that no longer reflects actual security conditions.

This review programme ensures that all critical and important suppliers are reviewed at least once per year, focusing on ISO certification validity, contractual IS requirement adherence, and SLA performance. Findings are tracked in HB_REG_NC and feed into the risk reassessment.

The programme operationalizes the monitoring requirements from CB_POL_L2_05 (Supplier and Cloud) and is executed through CB_PRC_06 (Supplier Management). Supplier data is maintained in HB_REG_SUP.

**Scope:** All Tier 1 (Critical) and Tier 2 (Important) suppliers from HB_REG_SUP. Target audience: IS-Coordinator (execution), CISO (review), auditors (evidence).

## In-Scope Suppliers

Derived from HB_REG_SUP. Tier 1 and Tier 2 suppliers are reviewed annually; Tier 3 every two years.

| Supplier | Tier | Service | Review frequency |
|---|---|---|---|
| [Supplier name] | [Tier] | [Service description] | [Annual/Biennial] |

## Review Schedule

| Year | Supplier | Review type | Planned date | Status |
|---|---|---|---|---|
| [YYYY] | [Supplier name] | [Initial baseline/Certificate + SLA/Full review] | [Q] | [Planned/Completed] |

## Review Criteria

Each supplier review assesses the following areas:

| # | Criterion | Evidence |
|---|---|---|
| 1 | ISO 27001 certification validity | Current certificate or SOC 2 report |
| 2 | Contractual IS requirements adherence | DPA, security addendum review |
| 3 | SLA fulfilment | SLA reports, uptime data |
| 4 | Incident history | Reported incidents during review period |
| 5 | Subprocessor changes | Updated subprocessor list |
| 6 | Data processing location compliance | Confirmation of agreed processing locations |

## Review Results

| Supplier | Last review | Result | Next review | Notes |
|---|---|---|---|---|
| [Supplier name] | [YYYY-MM] | [Satisfactory/Needs improvement/Unsatisfactory] | [YYYY-Q] | [Notes] |

Individual review records are stored in Audit/Supplier/Records/.

## See also

- HB_AUD_INT_01-Internal-Audit-Programme — Internal audit programme
- HB_REG_SUP_01-Supplier-Register — Supplier inventory
- CB_POL_L2_05-Supplier-and-Cloud — Supplier security requirements
- CB_PRC_06-Supplier-Management — Supplier management process
- CB_POL_L3_07-Supplier-Management — Supplier management handbook
- CB_TPL_18-Supplier-Review — Review template

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.00.003 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.00.002 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.00.001 | 2026-02-11 | CISO | Initial skeleton: review programme structure, criteria, schedule template |
