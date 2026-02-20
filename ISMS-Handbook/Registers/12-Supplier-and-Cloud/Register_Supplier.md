> **Document ID:** HB_REG_SUP_01-Supplier-Register
> **Version:** 00.01.010
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** A.5.19-5.23
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Supplier Register

## Summary

Third-party suppliers and cloud services process organizational data and introduce dependencies that affect information security. The Supplier Register maintains a structured inventory of all IS-relevant suppliers, cloud services, and their security assessment status. It enables evidence-based supplier governance, third-party risk management, and fulfillment of contractual security requirements. Without centralized supplier documentation, there is no overview of dependencies, assessment gaps remain undetected, and audit findings are inevitable.

## Objective and Scope

**Objective:** Suppliers and cloud services process organizational data and influence the IS risk posture — without central documentation, there is no overview of dependencies and contractual security agreements. Missing supplier assessment is a frequent audit finding.

The register records all IS-relevant suppliers and cloud services with contract status, security requirements and assessment results. It provides the basis for supplier governance and the evaluation of third-party risks.

Supplier assessment is governed through CB_PRC_06 (Supplier Management) and aligned with the requirements from CB_POL_L2_05 (Suppliers and Cloud). Results feed into the risk assessment (CB_PRC_07) and the management review (CB_PRC_09).

**Scope:** All suppliers and cloud services with access to organizational data or IS-relevant service delivery. Target audience: IS-Coordinator (maintenance), domain departments (reporting), CISO (assessment), auditors (evidence).

## Suppliers

| ID | Name | Service description | Category | Tier | Personal data | Data classification | Contract status | Agreement date | Renewal date | Responsible |
|---|---|---|---|---|---|---|---|---|---|---|
| [SUP-001] | [Supplier name] | [Service description] | [R&D/Operations/G&A/...] | [1-Critical/2-Important/3-Standard] | [Yes/No] | [Confidential/Internal/Public] | [Active/Pending/Terminated] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Domain responsible] |

**Tier classification:** Per CB_POL_L2_05, suppliers are categorized into three tiers: 1-Critical (processing personal data, financial data, or business-critical information), 2-Important (limited personal data processing or business support functions), 3-Standard (no sensitive data processing).

## Cloud Services

| ID | Provider | Service name | Service model | Data location | Encryption | MFA | Tier | Contract status | Responsible |
|---|---|---|---|---|---|---|---|---|---|
| [CLD-001] | [Provider name] | [Service name] | [IaaS/PaaS/SaaS] | [Data location, e.g. EU/DE] | [Yes/No] | [Yes/No] | [1-Critical/2-Important/3-Standard] | [Active/Pending/Terminated] |  [Domain responsible] |

**Service model:** IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service).

**Cloud requirements:** Per CB_POL_L2_05, cloud services must implement encryption at rest and in transit, provide multi-factor authentication (MFA), and comply with data residency requirements as defined by organizational and regulatory obligations.

## Assessment Status

| Supplier/Service ID | Supplier | Certification | Valid until | Assessment date | Method | Result | Findings | Next assessment | Assessor |
|---|---|---|---|---|---|---|---|---|---|
| [SUP-001/CLD-001] | [Supplier/service name] | [ISO 27001/SOC 2/None/...] | [YYYY-MM-DD or —] | [YYYY-MM-DD] | [Questionnaire/Certification review/Audit/Self-declaration] | [Passed/Conditional/Failed] | [Summary of findings or —] | [YYYY-MM-DD] | [Assessor name/role] |

**Assessment method:** Questionnaire (standardized security questionnaire), Certification review (evaluation of existing certifications such as ISO 27001, SOC 2), Audit (on-site or remote audit), Self-declaration (supplier-provided security statement).

**Assessment criteria:** Supplier assessments are conducted in accordance with CB_POL_L2_05 requirements, addressing control A.5.19 (Information security in supplier relationships).

## See also

- CB_POL_L2_05-Supplier-and-Cloud — Requirements for supplier assessment, agreements, monitoring
- CB_POL_L3_07-Supplier-Management — Operational supplier management handbook
- CB_PRC_06-Supplier-Management — Supplier management process
- HB_REG_RR_01-Risk-Register — Supplier-related risk entries


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.010 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.009 | 2026-02-20 | Claude (AI) | Backport: +Supplier/Certification/Valid until in Assessment Status, +Category in Suppliers table |
| 00.01.008 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.007 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 04) |
| 00.01.006 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.005 | 2026-02-10 | [CISO] | Populated register tables with structure and guidance |
| 00.01.004 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.01.003 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.01.001 | 2026-02-07 | [CISO] | See also section added |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
