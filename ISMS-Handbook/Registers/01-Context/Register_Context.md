> **Document ID:** HB_REG_CTX_01-Context-Register
> **Version:** 00.01.011
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** Clause 4.1
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Context Register

## Summary

Scope definition and risk assessment require current data on industry, legal framework, market environment and internal structure. This register records the organizational profile as well as external and internal issues as the central data basis (SSOT) for the organizational context. The data feeds into the scope definition (HB_CLS_4.3) and risk assessment (HB_CLS_8.2). Without current context data, controls are based on outdated assumptions.

## Objective and Scope

**Requirements:** HB_CLS_4.1-Organization-and-Context defines the criteria.
**Process:** Annual review during management review (CB_PRC_09).

**Objective:** Industry, legal framework, technology landscape and market environment determine which information security requirements apply to the organization. Without a central data basis for these context factors, downstream processes lack the decision basis.

The register records the organizational profile (basic data, organizational units, sites), external issues (market, regulation, threats) and internal issues (structure, processes, IT). It is the single source (SSOT) for organizational baseline data accessed by CLS 4.3 (Scope) and CLS 8.2 (Risk Assessment).

The identification criteria are defined by HB_CLS_4.1 (Organization and Context); annual review takes place during the management review (CB_PRC_09). Changed context factors trigger a reassessment of the risk posture and, if necessary, an adjustment of the ISMS scope.

**Scope:** All IS-relevant context factors of the organization. Target audience: CISO (maintenance), top management (validation), auditors (evidence).

## Organizational Profile

The organizational profile describes the context in which the ISMS operates. It forms the basis for determining external and internal issues (Clause 4.1) and is validated annually during the management review (CB_PRC_09).

| Attribute | Value |
|---|---|
| Company | [Full company name] |
| Legal form | [Legal form, e.g. GmbH, Ltd.] |
| Industry | [Industry/field of activity] |
| Business purpose | [Core business in 1-2 sentences] |
| Sites | [Number and locations] |
| Employees | [Number] |
| Organizational units | [Departments/teams in ISMS scope] |
| Customers | [Customer segments] |
| Key partners | [Key partners/service providers] |
| Strategic business objectives | [Growth plans, market expansion, product strategy relevant to IS] |

## External Issues

- **Market environment:** [Competitive situation, market dynamics]
- **Regulatory requirements:** [Relevant laws/regulations, e.g. GDPR, NIS-2, industry-specific requirements] — detailed legal and contractual obligations are tracked in HB_REG_IP (Interested Parties Register, field "Source")
- **Threat landscape:** [Relevant cyber threats, e.g. ransomware, phishing, supply chain attacks]
- **Technological developments:** [Relevant trends, e.g. cloud migration, AI adoption]

## Internal Issues

- **Organizational structure:** [Structure, e.g. flat hierarchy, [number] departments]
- **Business processes:** [Core processes, e.g. software development, customer support, sales]
- **IT infrastructure:** [Overview, e.g. predominantly cloud-based, SaaS platform on [provider]]
- **Human resources:** [IS-relevant personnel structure, e.g. development team, no dedicated security team]

## Review History

| Date | Occasion | Result | Responsible |
|---|---|---|---|
| [YYYY-MM-DD] | [Initial capture / Annual / Event-driven] | [Result] | [Abbreviation] |

## See also

- HB_CLS_4.1-Organization-and-Context — Requirements definition
- CB_PRC_09-Management-Review — Review process

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.011 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.010 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.009 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 09) |
| 00.01.008 | 2026-02-11 | CISO | Add strategic business objectives attribute; add legal register cross-reference to REG_02 |
| 00.01.007 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.01.006 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.01.005 | 2026-02-09 | [CISO] | Organizational profile: context introduction with Clause 4.1 reference (REC-403) |
| 00.01.004 | 2026-02-09 | [CISO] | Context architecture: CLS/REG perspective differentiation, data redundancy eliminated |
| 00.01.003 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.002 | 2026-02-09 | [CISO] | Objective and Scope: bold-label pattern added |
| 00.01.001 | 2026-02-08 | [CISO] | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.01.000 | 2026-02-08 | [CISO] | Initial version: context data extracted from CLS 4.1 |
