> **Document ID:** CB_POL_L2_04-Secure-Development
> **Version:** 00.01.012
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.8, A.8.4, A.8.25-8.34
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Secure Development Standard

## Summary

Software is a growing attack vector — vulnerabilities in internally developed or acquired code jeopardize overall information security. This policy defines the requirements for the secure development lifecycle, secure coding, testing procedures, and outsourced development. It ensures that security is embedded in every project phase from requirements analysis through to production deployment. Without binding development requirements, security defects become visible only after go-live and are costly to remediate.

## Objective and Scope

**Policy reference:** P1, P3
**Operationalized by:** CB_POL_L3_03-Developer-Handbook

**Objective:** Software is a growing attack vector — vulnerabilities in internally developed or acquired code jeopardize confidentiality, integrity, and availability. Without binding security requirements in the development process, risks become visible only after production deployment.

This policy defines the normative requirements for the secure development lifecycle, secure coding, testing procedures, and change management (addresses A.5.8, A.8.4, A.8.25-8.34). It establishes criteria for security reviews in every project phase.

The standard implements the principles P1 (Protection) and P3 (Risk orientation) of the IS policy. Operational implementation is provided through CB_POL_L3_03 (Developer Handbook); the change process through CB_PRC_05 (Change Management).

**Scope:** Developers, project managers, and external development partners. Covers all in-house developments and acquired software with organization-specific customizations.

## SDLC

Security must be integrated into all phases of the software development lifecycle (addresses A.8.25).

**Separation of environments:** Development, test, and production environments must be separated. Access controls and segregation of duties must be implemented to restrict access to production environments.

**Security requirements:** Security requirements must be defined during the specification and design phase. Security checkpoints must be established throughout projects.

**Testing:** Comprehensive system and security tests, including regression tests, code scans, and penetration tests, must be conducted.

**Code management:** Secure repositories with access control, encryption, and version control must be used. Code review processes must be enforced.

**Training:** Developers must be trained in application security, secure coding practices, and emerging threats.

**Vulnerability management:** Developers must be equipped with tools and resources for vulnerability management.

## Secure Coding

Secure coding principles must be followed during software development (addresses A.8.28).

**Standards:** Organization-wide standards for secure coding must be defined and communicated to all development teams.

**Training:** Developers must be trained in secure coding principles, best practices, and language-specific techniques.

**Code review:** Code must be tested throughout the development process, including static code analysis.

**Least privilege:** The principle of least privilege must be applied before software is deployed.

**Logging:** Errors and suspected attacks must be logged. Logs must be reviewed regularly.

**Source code protection:** Source code must be protected against unauthorized access and manipulation through version control and access control mechanisms.

**External components:** External libraries must be updated regularly and reviewed for security issues.

**License management and SCA compliance:** Software composition analysis (SCA) must be integrated into the CI/CD pipeline to identify known vulnerabilities and license violations in third-party dependencies (addresses A.8.28). An approved license whitelist must be maintained; dependencies with non-compliant licenses must be flagged and replaced or approved through the exception management process (CB_PRC_14-Exception-Management). SCA scan results must be reviewed before each release. Components with critical or high-severity vulnerabilities must be remediated or mitigated before production deployment.

## Secure Architecture

Secure system architecture and engineering principles must be established, documented, maintained, and applied throughout the development lifecycle (addresses A.8.27).

**Architecture principles:** Security engineering principles must be defined based on industry standards and organizational requirements. Principles must cover all architecture layers including enterprise, data, application, and technology.

**Threat modeling:** Threat modeling must be conducted as a formal exercise to identify potential attack patterns and security weaknesses. Results must inform the design of security controls.

**Security by design:** Defense in depth, security by default, and least privilege must be applied as explicit architecture principles. Security controls must be integrated at every layer of the information system.

**Architecture review:** Security-focused design reviews must be conducted to identify and remediate architectural weaknesses. Architecture decisions, including deviations or exceptions, must be documented and formally approved by relevant stakeholders.

**Review cycle:** Security engineering principles must be reviewed [annually | upon significant change — depending on threat landscape] and updated to reflect new threats, technological advances, and organizational changes.

**Multi-tenancy:** Multi-tenant architectures must enforce logical separation between tenants at the data, compute, and network layers (addresses A.5.8). Each tenant's data must be isolated through dedicated schemas, encryption keys, or equivalent mechanisms. Access controls must prevent cross-tenant data access under all circumstances, including failure scenarios. Tenant-specific audit logs must be maintained. Isolation effectiveness must be validated through dedicated security tests before onboarding new tenants.

## Testing

Security testing must be conducted throughout the entire development cycle (addresses A.8.29).

**Integration:** Security tests must be integrated into the overall test process for all software systems, upgrades, and new versions.

**Scope:** Tests cover security functions, secure coding practices, and configurations of operating systems, firewalls, and other security components.

**Test types during development:** Static, dynamic, and composition analysis tests must be conducted.

**Acceptance testing:** Penetration tests, security reviews, and risk assessments must be conducted towards the end of the development cycle.

**Test environment:** Tests must be conducted in an environment that mirrors the production environment.

**Documentation:** All security tests, including test plans, results, and remediation actions, must be documented.

## Test Data

Test information must be appropriately selected, protected, and managed (addresses A.8.33).

**Selection:** Test data must be selected based on its relevance to testing objectives. Operational data must not be copied into test environments without a documented necessity assessment and explicit approval from the asset owner.

**Anonymization:** Sensitive information — including personally identifiable information — must not be used in test environments. Where operational data is essential for testing, it must be anonymized or pseudonymized before transfer.

**Access control:** Access to test environments and test data must be restricted to authorized personnel. All transfers of operational information into test environments must be logged for audit purposes.

**Compliance monitoring:** Regular audits must be conducted to verify compliance with test data management procedures. Deviations or breaches must be investigated, documented, and remediated promptly.

## Application Security Requirements

Information security requirements for applications must be identified, specified, and approved during development or acquisition (addresses A.8.26).

**Risk assessment and requirements identification:** The risk owner identifies threats and vulnerabilities of the application and collaborates early with the Chief Information Security Officer to define specific security requirements based on the risk assessment.

**Specification:** Security requirements must be documented based on identified risks and organizational policies. Requirements must cover authentication, data confidentiality, integrity, access control, and legal and regulatory requirements.

**Approval:** Documented security requirements must be presented to relevant stakeholders. Approval of security requirements must be obtained before development or acquisition of new applications.

**Security by design:** Approved security requirements must be integrated from the outset into the development or procurement process. Security controls are embedded into design, architecture, and functionality.

**Review and validation:** Applications must be reviewed to confirm that security requirements have been properly implemented. Vulnerability analysis and penetration tests serve to identify and remediate security gaps [REF:DG24-LK, Kap. 2.2].

## Change Management

Changes to information processing facilities and information systems are subject to a documented change management procedure (addresses A.8.32).

**Requirements:**

| # | Requirement |
|---|---|
| 1 | Changes to production systems require a formal request with description, justification, and risk assessment |
| 2 | Critical changes must be approved by the responsible asset owner or steering committee before implementation |
| 3 | Changes must be validated in a separate test environment before production deployment |
| 4 | Rollback procedures must be defined and documented before implementing critical changes |
| 5 | All changes — including emergency changes — must be logged and retained in an auditable manner |
| 6 | Emergency changes may abbreviate the regular approval procedure but must be documented and approved retroactively |

The operational change management process is described in CB_PRC_05 (Change Management) [REF:DG24-ET, Kap. 3].

## Projects and External Parties

Information security must be incorporated into all phases of project management (addresses A.5.8).

**Project identification:** Projects with relevance to information security must be identified — particularly when sensitive data is processed or business-critical processes are affected.

**Responsibility:** Clear personal responsibilities for information security must be assigned within projects.

**Risk analysis:** A comprehensive risk analysis must be conducted with the information security team to identify potential security risks.

**Security requirements:** Clear security requirements must be defined and incorporated into project objectives, specifications, and requirements.

**Security controls:** Appropriate security controls must be implemented according to identified risks.

**Reviews:** Regular security reviews and tests must be conducted during the project.

**Documentation:** All security aspects must be documented.

## Outsourced Development

Outsourced system development must meet requirements for information security, monitoring, and review of IS controls (addresses A.8.30).

### Preparation

**Requirements identification:** Clear requirements and expectations for the outsourced development project must be defined, including security and data protection.

**Supplier selection:** Suppliers must be selected based on their capability to meet security requirements (experience, expertise, adherence to security standards).

**Contractual agreements:** Contracts must include clauses on secure design, coding practices, testing procedures, intellectual property rights, and compliance with applicable regulations.

**Security protocols:** Security protocols for the development environment must be defined and security tools for the development process established.

### Monitoring and Review

**Communication:** Regular exchange with the external supplier to ensure adherence to project objectives and security requirements.

**Milestone review:** Evaluation reports must be reviewed at key milestones.

**Audits:** The contractual right to audit the supplier's development processes and controls must be exercised regularly.

**Validation:** Development deliverables must be thoroughly reviewed — free from security vulnerabilities and malicious code.

**Documentation:** All communications, reviews, audit results, and test results must be retained for conformity evidence [REF:DG24-LK, Kap. 3.2].

## See also

- CB_POL_L2_03-System-and-Network — Deployment environments, monitoring
- CB_POL_L2_05-Supplier-and-Cloud — Outsourced development
- CB_POL_L3_03-Developer-Handbook — Secure coding, testing
- CB_PRC_05-Change-Management — Change process

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.012 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.011 | 2026-02-11 | Claude (AI) | License exception reference to CB_PRC_14 (merge from retorio) |
| 00.01.010 | 2026-02-11 | CISO | Dev/Ops extensions: multi-tenancy (A.5.8), license management and SCA compliance (A.8.28) |
| 00.01.009 | 2026-02-11 | CISO | Added A.8.27 Secure Architecture and A.8.33 Test Data sections |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Change management (A.8.32) populated (Batch-D) |
| 00.01.005 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.004 | 2026-02-09 | CISO | Application security requirements (A.8.26) and outsourced development (A.8.30) populated (REC-507, REC-509) |
| 00.01.003 | 2026-02-09 | CISO | SDLC, secure coding, testing, projects and external parties populated (REC-310, 311, 312, 313) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
