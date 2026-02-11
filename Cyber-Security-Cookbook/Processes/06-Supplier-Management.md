> **Document ID:** CB_PRC_06-Supplier-Management
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.19-5.23
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Supplier Management Process

## Summary

New or changing supplier relationships require a structured workflow to ensure that information security requirements are addressed before, during, and after engagement. This process describes the core steps for supplier assessment, contract design, and ongoing monitoring. It implements the requirements of CB_POL_L2_05-Suppliers-and-Cloud and feeds results into the Supplier Register. Without this process, third-party risks remain uncontrolled and documented information obligations for A.5.19 through A.5.22 cannot be demonstrated to auditors.

## Objective and Scope

**Objective:** Suppliers and cloud providers process information outside the organization's direct control. Without a defined process for assessment, contract design, and monitoring, third-party risk remains unmanaged.

This process defines the workflow from supplier assessment through contractual security requirements to ongoing monitoring. It ensures that IS requirements are consistently addressed in supplier relationships.

The process operationalizes the requirements from CB_POL_L2_05-Suppliers-and-Cloud. Assessment results are documented in HB_REG_04 (Supplier Register) and reviewed regularly.

**Scope:** All external service providers and cloud providers that process information within the ISMS scope. Triggers: new supplier relationship, contract amendment, or annual review.

## Assessment

Assessment results are documented in HB_REG_04-Supplier-Register.

### Trigger

A supplier assessment is initiated when a new supplier relationship is proposed, an existing contract is up for renewal, or a material change in the supplier's service scope occurs (addresses A.5.19).

### Steps

| Step | Activity | Responsible | Input | Output |
|---|---|---|---|---|
| 1 | Identify supplier and classify tier (Critical / Important / Standard) per CB_POL_L2_05 tier model | Requesting business unit | Business requirement, data classification | Proposed tier |
| 2 | Send security questionnaire to the supplier | CISO | Tier-specific questionnaire template | Completed questionnaire |
| 3 | Review responses and evaluate certifications, TOMs, and data protection compliance | CISO | Questionnaire, supplier documentation | Assessment report |
| 4 | Conduct risk assessment per CB_PRC_07 and determine residual risk | CISO | Assessment report, risk criteria | Risk rating, residual risk |
| 5 | Obtain residual risk acceptance from [risk owner / top management] | CISO | Residual risk documentation | Signed risk acceptance |
| 6 | Record assessment results in HB_REG_04-Supplier-Register | CISO | Assessment report, risk acceptance | Updated register entry |

For cloud service providers, additional evaluation criteria from CB_POL_L3_07 (Evaluate cloud services) apply (addresses A.5.23).

### Assessment intervals

| Tier | Reassessment interval |
|---|---|
| Critical | [Annually / semi-annually — depending on risk classification] |
| Important | Annually |
| Standard | At contract renewal |

## Contracts

Supplier agreements must include information security requirements proportional to the supplier tier and the nature of shared data (addresses A.5.20).

### Steps

| Step | Activity | Responsible | Input | Output |
|---|---|---|---|---|
| 1 | Determine required contract clauses based on supplier tier and assessment results | CISO | Assessment report, tier classification | Clause checklist |
| 2 | Draft or review contract language against minimum clauses defined in CB_POL_L3_07 | CISO, [Legal / Procurement] | Clause checklist, contract template | Draft contract |
| 3 | Ensure a data processing agreement (DPA) is in place where personal data is processed | [Data Protection Officer / CISO] | Processing activities record | Signed DPA |
| 4 | Verify that SLA terms cover availability, response times, and incident reporting deadlines | CISO, Requesting business unit | Service requirements | SLA appendix |
| 5 | Obtain contract approval from [authorized signatory] | [Legal / Procurement] | Finalized contract | Signed agreement |
| 6 | Store signed agreement and link to the supplier entry in HB_REG_04 | CISO | Signed agreement | Updated register entry |

### SLA minimum content

Each supplier agreement shall address at a minimum:

- Confidentiality and non-disclosure obligations
- Classification alignment between organization and supplier
- Access control restrictions and approval procedures
- Incident reporting obligations and response timelines
- Audit rights and evidence obligations
- Sub-contracting conditions and IS requirement propagation (addresses A.5.21)
- Data return and secure deletion upon contract termination
- Indemnification for non-compliance with IS requirements

For critical suppliers, additional clauses for contingency plans, communication procedures, and training obligations apply as defined in CB_POL_L3_07.

[REF:DG24-LK, Ch. 4]

## Monitoring

Supplier compliance with agreed IS requirements must be monitored, reviewed, and assessed on a regular basis. Deficiencies are escalated to risk management (addresses A.5.22).

### Review cycle

| Tier | Review frequency | Review type |
|---|---|---|
| Critical | [Quarterly / semi-annually] | Service report review, KPI evaluation, audit or independent report |
| Important | Annually | Service report review, KPI evaluation |
| Standard | At contract renewal | Spot check or self-declaration |

### Steps

| Step | Activity | Responsible | Input | Output |
|---|---|---|---|---|
| 1 | Collect supplier service reports and incident records | CISO | SLA reports, incident logs | Monitoring data set |
| 2 | Evaluate KPIs against agreed targets | CISO | Monitoring data set, SLA thresholds | Performance summary |
| 3 | Track supplier-side changes (policy updates, sub-contractor changes, location changes) | CISO | Supplier notifications, market intelligence | Change log |
| 4 | Conduct or review audit reports (internal audit or independent auditor) | CISO | Audit rights clause, audit programme HB_AUD_SUP_01 | Audit findings |
| 5 | Consolidate results and update HB_REG_04-Supplier-Register | CISO | Performance summary, audit findings, change log | Updated register entry |
| 6 | Escalate non-compliance or material deviations | CISO | Updated register entry | Escalation record, action plan |

### KPIs

- SLA availability and response time compliance
- Number and severity of reported IS incidents
- Timeliness of agreed security control implementation
- Results of security assessments and audits
- [Additional KPIs depending on supplier type and criticality]

### Escalation

Non-compliance is documented in writing and an action plan with deadlines is agreed with the supplier. Persistent non-compliance triggers activation of contractual indemnification provisions and evaluation of supplier replacement. Material findings are reported to [risk management / top management].

[REF:DG24-LK, Ch. 4]

## See also

- CB_POL_L2_05-Supplier-and-Cloud — Normative requirements for supplier relationships
- CB_POL_L3_07-Supplier-Management — Assessment, contract design, and monitoring guidance
- HB_REG_04-Supplier-Register — Supplier inventory and assessment results
- HB_AUD_SUP_01 — Supplier review programme
- HB_CLS_5.3-Roles-and-Responsibilities


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-11 | CISO | Populated Assessment, Contracts, Monitoring, Summary sections |
| 00.01.005 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
