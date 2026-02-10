> **Document ID:** CB_POL_L2_05-Supplier-and-Cloud
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.19-5.23, A.8.30
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# Supplier and Cloud Standard

## Summary

External service providers and cloud vendors process information outside the organization's direct control. This policy governs supplier assessment, contractual security requirements, ongoing monitoring, and cloud-specific controls. It ensures that third-party risks are transparently assessed, contractually addressed, and continuously monitored. Without systematic supplier management, risks in the supply chain remain opaque and unmanaged.

## Objective and Scope

**Policy reference:** P1, P2, P3
**Operationalized by:** CB_POL_L3_07-Supplier-Management

**Objective:** External service providers and cloud vendors process information outside the organization's direct control. Without binding requirements for assessment, contractual terms, and monitoring of third parties, supplier risk remains opaque and unmanaged.

This policy defines the normative requirements for supplier assessment, contractual security requirements, ongoing monitoring, and cloud-specific controls (addresses A.5.19-5.23, A.8.30). It establishes criteria for managing third-party risks.

The standard implements the principles P1 (Protection), P2 (Compliance), and P3 (Risk orientation) of the IS policy. Operational implementation is provided through CB_POL_L3_07 (Supplier Management); the management process through CB_PRC_06 (Supplier Management).

**Scope:** Chief Information Security Officer, procurement, and business units with supplier contact. Covers all external service providers and cloud vendors processing information within the ISMS scope.

## Assessment

Suppliers must be assessed prior to engagement and regularly throughout the business relationship to manage IS risks in supplier relationships (addresses A.5.19).

### Supplier Tiers

Suppliers are classified based on the classification of shared data and the criticality of processes:

| Tier | Description | Examples |
|---|---|---|
| Tier 1 — Critical | Process personal data, financial data, or business-critical information | [Cloud infrastructure provider, payment service provider] |
| Tier 2 — Important | Process limited personal data, support business operations | [CRM provider, email provider] |
| Tier 3 — Standard | No processing of sensitive data | [Office supplier, general service providers] |

### Assessment Criteria

Appropriate IS controls must be identified for each tier:

- Request relevant IS policies and certifications from suppliers
- Use security questionnaires to determine the current security posture
- Integrate supplier assessment into risk management
- Document assessment results and update upon contract renewal

[REF:DG24-LK, Kap. 4.1]

## Agreements

IS requirements in supplier agreements must be implemented to maintain an agreed level of information security in supplier relationships (addresses A.5.20).

### Requirements for Supplier Agreements

The following items must be addressed in supplier agreements:

| # | Item | Description |
|---|---|---|
| 1 | Information description | Clearly describe the information to be provided and access methods |
| 2 | Classification | Classify information according to the organization's classification scheme |
| 3 | Legal requirements | Comply with legal, regulatory, and contractual requirements (data protection, intellectual property) |
| 4 | Controls | Implement agreed controls (access, performance review, monitoring, audit) |
| 5 | Usage rules | Rules for acceptable use of information and associated resources |
| 6 | IT infrastructure | IS requirements for the supplier's IT infrastructure |
| 7 | Incident management | Requirements and procedures for IS incident management |
| 8 | Subcontracting | Provisions for passing IS requirements through to subcontractors |

[REF:DG24-LK, Kap. 4.2]

## Monitoring

Compliance with agreed IS requirements by suppliers must be regularly monitored, reviewed, and assessed. Deficiencies must be escalated to risk management (addresses A.5.22).

**Performance monitoring:** Verify compliance with agreements by monitoring service levels. Review supplier service reports regularly and conduct progress meetings.

**Change management:** Track changes made by suppliers — in particular service expansions, new systems, policy changes, and location changes.

**Audits:** Conduct audits of suppliers and sub-suppliers, review reports from independent auditors, and follow up on identified issues.

**Incident management:** Exchange information about IS incidents and respond to identified events. Identify and remediate information security vulnerabilities.

**Regular reassessment:** Reassess suppliers regularly to ensure maintenance of an adequate IS level. Schedule reviews at regular intervals in the ISMS task management [REF:DG24-LK, Kap. 4.3].

## Supply Chain Management

IS risks in the ICT supply chain must be managed systematically. Involved parties must meet relevant IS requirements (addresses A.5.21).

**Security requirements in procurement:** IS requirements for procurement of IT products and services must be defined and factored into procurement decisions.

**Propagation in the supply chain:** Providers of IT services must pass security requirements through to subcontractors when parts of the service are subcontracted.

**Software component transparency:** Suppliers of IT products must provide information about software components used (e.g., Software Bill of Materials — SBOM).

**Critical components:** Procedures for identifying and documenting components critical to maintaining functionality must be established.

**Monitoring and validation:** A monitoring process for validating the conformity of delivered IT products and services with security requirements must be implemented.

**Lifecycle management:** Procedures for managing the lifecycle and availability of IT components and the associated security risks must be established [REF:DG24-LK, Kap. 3.1].

## Cloud

IS requirements must be defined and enforced for the procurement and operation of cloud services to protect sensitive information and ensure operational resilience (addresses A.5.23).

### Ground Rules for Cloud Services

| # | Rule | Requirement |
|---|---|---|
| 1 | Data encryption | All data to and from cloud services must be encrypted |
| 2 | Access control | Restrict access to authorized personnel, implement multi-factor authentication |
| 3 | Regular audits | Audit cloud providers routinely (compliance, security standards) |
| 4 | Data residency | Ensure compliance with data residency and data protection regulations |
| 5 | Incident response | Clear procedures for security incidents involving cloud services |

### Requirements for Cloud Agreements

Cloud service agreements must cover the following aspects:

- **Confidentiality, integrity, availability:** Verify data processing requirements through a requirements catalogue
- **Risk assessment:** Identify risks, obtain acceptance of residual risks from responsible management
- **Data protection and service availability:** Standards for architecture, access control, malware protection, and storage at approved locations
- **Incident support:** Information and support for IS incidents in the cloud environment
- **Subcontracting:** Enforce IS requirements even when further subcontracting to additional providers
- **Backup and return:** Govern backup of data and configurations; return upon contract termination
- **Exit:** Adequate support and availability when terminating the cloud service
- **Data security:** Encryption at rest and in transit; GDPR-compliant processing agreements

[REF:DG24-LK, Kap. 2.1]

## See also

- CB_POL_L2_04-Secure-Development — Outsourced development
- CB_POL_L2_06-Business-Continuity — Supplier dependencies in contingency planning
- CB_POL_L3_07-Supplier-Management — Assessment, agreements, monitoring
- CB_PRC_06-Supplier-Management — Operational supplier process
- HB_REG_04-Supplier-Register — Supplier inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.004 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.003 | 2026-02-09 | CISO | Assessment (A.5.19), agreements (A.5.20), monitoring (A.5.22), supply chain management (A.5.21), cloud (A.5.23) populated (REC-510, 511, 512, 508, 506) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
