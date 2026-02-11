> **Document ID:** CB_POL_L3_07-Supplier-Management
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.19-5.23
> **Last modified:** 2026-02-10
> **Approval:** —
> **Review cycle:** Annual

---

# Supplier Management Handbook

## Summary

Suppliers and cloud providers frequently process sensitive organizational information, directly affecting the security posture. This handbook provides concrete steps for supplier assessment, contract design, supply chain analysis, performance reviews, and cloud evaluation. It operationalizes CB_POL_L2_05-Suppliers-and-Cloud and supports compliance with controls A.5.19 through A.5.23. Without structured assessment and monitoring procedures, third-party risks remain uncontrolled and jeopardize certification.

## Objective and Scope

**Standard reference:** CB_POL_L2_05-Suppliers-and-Cloud
**Condensed by:** —

**Objective:** Collaboration with suppliers and cloud providers requires practical tools for assessment, contract design, and monitoring. Without concrete instructions, the normative requirements of the policy are difficult to implement in day-to-day operations.

This handbook translates the requirements from CB_POL_L2_05 (Suppliers and Cloud) into concrete guidance for supplier assessment, contract clauses, supply chain risks, performance reviews, and cloud evaluation. It provides checklists and assessment templates.

The instructions are applied within the supplier management process (CB_PRC_06). Results are documented in HB_REG_10 (Supplier Register).

**Scope:** Chief Information Security Officer, procurement, and business units managing supplier relationships. Covers assessment, contract design, and ongoing monitoring of all third parties.

## Perform supplier assessments

Before establishing a supplier relationship and at regular intervals thereafter, a structured information security assessment shall be conducted (addresses A.5.19).

**Define supplier tiers:**

| Tier | Criterion | Example |
|---|---|---|
| Critical | Processes personal or strictly confidential data, business-critical processes | Cloud infrastructure, payroll provider |
| Important | Limited access to internal data, supporting processes | Customer service provider, facility management |
| Standard | No access to sensitive information | Office supplies supplier |

**Assessment criteria:**

- Review the supplier's information security policies and certifications (ISO 27001, SOC 2).
- Send a security questionnaire to the supplier and evaluate responses.
- Assess technical and organizational measures (TOMs).
- Verify data protection compliance (GDPR, data processing agreement).
- [Conduct risk assessment per risk management process CB_PRC_07].

**Document assessment results:**

- Record results in HB_REG_10 (Supplier Register).
- Obtain acceptance of identified residual risks from [risk owner / top management].
- Define assessment intervals: critical suppliers [annually / semi-annually], important [annually], standard [at contract renewal].

[REF:DG24-LK, Ch. 4]

## Include security requirements in contracts

Supplier agreements shall contain information security requirements to maintain a defined level of protection (addresses A.5.20).

**Minimum clauses:**

| Clause | Content |
|---|---|
| Confidentiality / NDA | Confidentiality obligation for all shared information |
| Classification | Alignment with the organization's classification scheme |
| Access control | Restriction to authorized personnel, approval procedures |
| Data protection | Data processing agreement (DPA) per GDPR |
| Incident reporting | Obligation to report security incidents without undue delay |
| Audit rights | Organization's right to audit security controls |
| Sub-contracting | Obligation to pass on IS requirements to sub-contractors |
| Return / deletion | Return of all data and configurations upon contract termination |
| Indemnification | Provisions for non-compliance with IS requirements |

**Additional points for critical suppliers:**

- Define requirements for IT infrastructure and encryption.
- Agree on contingency plans for supplier failure.
- Designate communication procedures and a contact person for IS matters.
- Define training and awareness obligations for the supplier.

All agreements are documented in [contract management system / Supplier Register HB_REG_10].

[REF:DG24-LK, Ch. 4]

## Identify supply chain risks

The organization shall identify and manage risks in the ICT supply chain to prevent security incidents caused by third-party components (addresses A.5.21).

**Dependency analysis:**

- Identify critical components and services essential for business operations.
- Examine the supply chain depth: which sub-contractors are involved?
- Verify the origin and authenticity of delivered ICT products and components.
- Request software bills of materials (SBOM) from suppliers to understand the software components in use.

**Risk mitigation:**

- Pass security requirements contractually through the entire supply chain.
- Request information on security features and required configuration from suppliers.
- Implement validation procedures for delivered ICT products and services.
- Ensure traceability of critical components throughout the supply chain.

**Substitution and contingency:**

- Identify alternative suppliers for critical products and services.
- Diversify the supplier base to reduce single-source dependencies.
- Maintain and test contingency plans for the failure of critical suppliers.

[REF:DG24-LK, Ch. 3]

## Review supplier performance

Supplier services shall be monitored and evaluated regularly to ensure compliance with agreed IS requirements (addresses A.5.22).

**Monitoring activities:**

| Activity | Description |
|---|---|
| Review service reports | Evaluate supplier performance reports, hold progress meetings |
| Track changes | Monitor new applications, policy updates, site relocations, sub-supplier changes |
| Evaluate incidents | Review supplier IS incident reports and follow up on corrective actions |
| Conduct audits | Exercise contractual audit rights, incorporate reports from independent auditors |

**Define KPIs:**

- SLA availability and response time compliance.
- Number and severity of reported IS incidents.
- Timely implementation of agreed security controls.
- Results of security assessments and audits.
- [Additional KPIs depending on supplier type and criticality].

**Escalation:**

- Escalate deficiencies to [risk management / Chief Information Security Officer].
- Document material deviations in writing and agree on an action plan.
- In case of persistent failure: activate contractual indemnification provisions or evaluate supplier replacement.

Record the results of performance reviews in HB_REG_10 (Supplier Register).

[REF:DG24-LK, Ch. 4]

## Evaluate cloud services

The procurement and use of cloud services requires a systematic security assessment to protect sensitive information and ensure operational resilience (addresses A.5.23).

**Assessment criteria:**

| Criterion | Review points |
|---|---|
| Data encryption | Encryption at rest and in transit, key management |
| Access control | Multi-factor authentication, role-based access |
| Data location | Where data is stored, compliance with GDPR and national regulations |
| Certifications | ISO 27001, SOC 2, C5, or comparable evidence |
| Incident management | Procedures and reporting timelines for IS incidents in the cloud environment |
| Sub-contracting | Passing IS requirements to sub-service providers |
| Data backup | Backup procedures, recovery times, configuration backup |
| Exit strategy | Return of all data, configurations, and source code upon contract termination |

**Assessment procedure:**

1. Send a requirements catalogue (questionnaire) to the cloud provider.
2. Review cloud service agreements for coverage of all requirements.
3. Conduct a risk assessment and identify residual risks.
4. Conclude SLA agreements on availability and support.
5. Conclude a data processing agreement (DPA) for personal data.
6. Document results in HB_REG_10 (Supplier Register).

**Ongoing monitoring:**

- Require cloud providers to notify material changes to service delivery in advance.
- Maintain regular information exchange on IS topics with cloud providers.
- Secure audit rights contractually and exercise them regularly, or rely on independent audit reports.

[REF:DG24-LK, Ch. 2]

## See also

- CB_POL_L2_05-Suppliers-and-Cloud — Policy for supplier relationships and cloud security
- CB_PRC_06-Supplier-Management — Process for supplier assessment and monitoring
- HB_REG_10-Supplier-Register — Documentation of all supplier relationships and assessments
- HB_CLS_8.1-Asset-Management — Asset register with supplier references
- CB_POL_L2_01-Access-and-Identity — Access rules for supplier personnel

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-10 | CISO | Added L4 traceability field (Condensed by) |
| 00.01.005 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.004 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.003 | 2026-02-09 | CISO | Subject sections populated, summary and see-also added (Batch-E) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
