> **Document ID:** CB_POL_L3_03-Developer-Handbook
> **Version:** 00.01.009
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.8.25-8.29, A.8.31-8.33
> **Last modified:** 2026-02-18
> **Approval:** —
> **Review cycle:** Annual

---

# Developer Handbook

## Summary

Insecure code is one of the most frequent root causes of security incidents in software-driven organizations. This handbook provides step-by-step instructions for secure coding, security testing, lifecycle management, and deployment. It operationalizes the requirements of CB_POL_L2_04 (Secure Development) and ensures that security is embedded into every development activity. Without these instructions, developers lack actionable guidance and security defects reach production undetected.

## Objective and Scope

**Standard reference:** CB_POL_L2_04, CB_POL_L2_12
**Condensed by:** —

**Objective:** Security vulnerabilities in software frequently arise from a lack of guidance during the development process. Without practical requirements for secure coding, security testing, and deployment, vulnerabilities only become visible in production.

This handbook translates the requirements from CB_POL_L2_04 (Secure Development) into concrete instructions for developers. It covers secure coding rules, security testing procedures, SDLC requirements, and change/deployment management.

The instructions reference the deployed development tools and CI/CD pipelines. The change process is defined in CB_PRC_05 (Change Management).

**Scope:** Developers, QA personnel, and DevOps engineers. Covers all in-house developments and organization-specific software customizations.

## Develop securely

Apply the following secure coding practices to every code change (addresses A.8.28).

### Prevent common vulnerabilities

Follow the OWASP Top 10 as the minimum baseline for web application security. Address at least:

| Risk | Mitigation |
|---|---|
| Injection (SQL, NoSQL, OS) | Use parameterized queries and prepared statements. Never concatenate user input into queries. |
| Broken authentication | Enforce multi-factor authentication. Use framework-provided session management. |
| Sensitive data exposure | Encrypt data in transit (TLS 1.2+) and at rest. Never log sensitive data. |
| XML external entities (XXE) | Disable external entity processing in XML parsers. |
| Broken access control | Enforce access checks server-side. Deny by default. |
| Security misconfiguration | Remove default credentials and unnecessary features before deployment. |
| Cross-site scripting (XSS) | Encode all output rendered in browsers. Use context-aware encoding. |
| Insecure deserialization | Validate and restrict deserialized data types. |
| Using components with known vulnerabilities | Track all dependencies and update promptly (see external components below). |
| Insufficient logging and monitoring | Log security-relevant events and review logs regularly. |

### Validate input and encode output

Validate all external input on the server side. Reject unexpected data types, lengths, and ranges. Encode output before rendering in any context (HTML, JSON, URL). Never trust client-side validation alone.

### Keep secrets out of code

Never store passwords, API keys, tokens, or certificates in source code or configuration files committed to version control (addresses A.8.28). Store secrets in [secret management tool, e.g. 1Password / HashiCorp Vault / GCP Secret Manager]. Rotate secrets [annually | upon compromise — depending on classification].

### Apply the principle of least privilege

Request only the minimum permissions required for each component, service account, and API integration. Review permissions before deployment to confirm no excessive rights are granted.

### Review code before merge

Every code change requires peer review before merge into the main branch. Reviewers verify adherence to secure coding standards, correct input validation, and absence of hardcoded secrets. Use [code review tool, e.g. GitLab Merge Requests] for all reviews (addresses A.8.25).

### Apply secure coding techniques

Use pair programming or mob programming for security-critical components. Apply test-driven development (TDD) where feasible. Document code thoroughly. Fix identified coding errors promptly [REF:DG24-ET, Kap. 4.3].

### Configure development tools

Configure IDEs and linters to enforce secure coding rules (e.g. static analysis plugins, formatting standards). Verify that all developers have access to the required tools and documentation before starting implementation [REF:DG24-ET, Kap. 4.3].

### Manage external components

Maintain an inventory of all external libraries and frameworks including their versions and licenses. Evaluate each component for security history, license compatibility, and maintenance status before integration. Update dependencies promptly when security patches are available. Use [dependency scanning tool, e.g. Dependabot / Snyk / Renovate] to automate vulnerability detection (addresses A.8.28).

### Protect test data

Do not use production data containing sensitive or personally identifiable information in test environments (addresses A.8.33). Where operational data is essential for testing, anonymize or pseudonymize it before transfer. Obtain explicit approval from the asset owner before copying any operational data into test environments. Log all data transfers for audit purposes [REF:DG24-ET, Kap. 5.3].

## Perform security testing

Integrate security tests into the development workflow at every stage (addresses A.8.29).

### Run static analysis (SAST)

Execute static application security testing on every merge request. SAST scans source code for vulnerabilities without executing the application. Configure [SAST tool, e.g. Semgrep / SonarQube / GitLab SAST] in the CI pipeline. Fix all findings rated high or critical before merge. Document accepted risk exceptions with justification and CISO approval (see CB_PRC_14-Exception-Management).

### Run dynamic analysis (DAST)

Conduct dynamic application security testing against running application instances. DAST identifies vulnerabilities from an external perspective (black-box). Schedule DAST scans [weekly | per release — depending on release cadence] against the staging environment. Use [DAST tool, e.g. OWASP ZAP / Burp Suite].

### Run dependency scanning (SCA)

Use software composition analysis to detect known vulnerabilities in third-party libraries and open-source components. Configure [SCA tool, e.g. Snyk / Dependabot / Trivy] to run on every pipeline execution. Block deployments when critical vulnerabilities are detected in dependencies.

### Conduct penetration tests

Commission penetration tests [annually | after major architectural changes] by [internal security team | external penetration testing provider]. Penetration tests simulate real-world attacks against the application and infrastructure. Document all findings and track remediation. Verify remediation through re-testing [REF:DG24-ET, Kap. 5.1].

### Responsibilities

| Role | Responsibility |
|---|---|
| Developer | Run SAST and SCA during development. Fix findings before merge request. |
| QA personnel | Run DAST scans. Validate fixes in staging. |
| CISO | Define test requirements. Review penetration test reports. |
| [DevOps / Platform team] | Maintain CI pipeline integrations for automated security tests. |

### Document test results

Record all security test results including test plans, identified vulnerabilities, and remediation actions. Retain results for [audit retention period, e.g. 3 years]. Report critical findings to the CISO immediately.

## Follow the development lifecycle

Integrate security into every phase of the software development lifecycle (addresses A.8.25).

### Requirements phase

Define security requirements together with the CISO during the specification phase. Identify applicable regulatory and contractual obligations. Conduct a threat model for new features or architectural changes (addresses A.8.27). Document the results as input for the design phase [REF:DG24-ET, Kap. 4.2].

### Design phase

Apply security-by-design principles: defense in depth, security by default, and least privilege (addresses A.8.27). Define security controls for each architecture layer (enterprise, data, application, technology). Conduct a security-focused design review before implementation begins. Document architecture decisions including deviations or exceptions.

### Implementation phase

Follow the secure coding rules defined in the "Develop securely" section. Use separate development environments (addresses A.8.31). Commit code to [version control system, e.g. GitLab] with mandatory peer review before merge into the main branch.

### Testing phase

Execute all security tests defined in the "Perform security testing" section. Conduct tests in an environment that mirrors the production configuration (addresses A.8.31). Do not promote code to production without successful completion of all mandatory test gates.

### Deployment phase

Deploy through the automated CI/CD pipeline only. Verify that all security gates have passed before production deployment. Separate development, test, and production environments strictly (addresses A.8.31). Restrict production deployment permissions to [authorized roles, e.g. DevOps engineers with deploy rights].

### Security gates

| Gate | Phase | Gate keeper | Pass criteria |
|---|---|---|---|
| G1 — Threat model | Requirements | CISO | Threat model completed. Security requirements documented. |
| G2 — Design review | Design | CISO + [lead architect] | Architecture review passed. No unmitigated critical risks. |
| G3 — Code review | Implementation | Peer reviewer | Code review approved. No hardcoded secrets. |
| G4 — Security tests | Testing | QA / CISO | SAST, DAST, and SCA passed. No critical or high findings open. |
| G5 — Deployment approval | Deployment | [Change approver per CB_PRC_05] | All preceding gates passed. Rollback procedure documented. |

## Manage changes and deployments

Follow the change management process for all modifications to production systems (addresses A.8.32).

### Use the CI/CD pipeline

Deploy all changes through the automated CI/CD pipeline. Manual deployments to production are not permitted. The pipeline enforces the security gates defined in the lifecycle section. Configure the pipeline to block deployment when any gate fails.

| Pipeline stage | Purpose | Tool |
|---|---|---|
| Build | Compile and package application | [CI system, e.g. GitLab CI] |
| SAST + SCA | Static code analysis and dependency scan | [SAST/SCA tool] |
| Unit tests | Functional correctness | [test framework] |
| Deploy to staging | Staging deployment for integration tests | [CD tool] |
| DAST | Dynamic security testing against staging | [DAST tool] |
| Approval gate | Manual approval for production deployment | [CI system approval mechanism] |
| Deploy to production | Automated production deployment | [CD tool] |

### Prepare rollback procedures

Document a rollback procedure before every production deployment (addresses A.8.32). The procedure must cover:

- Rollback trigger criteria (e.g. error rate exceeds threshold, critical functionality broken).
- Rollback steps (revert to previous version, restore database state if applicable).
- Responsible person for rollback execution.
- Communication plan for affected stakeholders.

### Follow the deployment checklist

Before every production deployment, verify:

| # | Check | Responsible |
|---|---|---|
| 1 | All security gates (G1-G5) passed | Developer |
| 2 | Change request submitted and approved per CB_PRC_05 | [Change owner] |
| 3 | Rollback procedure documented and tested | DevOps engineer |
| 4 | Staging tests passed without critical findings | QA personnel |
| 5 | Release notes prepared | Developer |
| 6 | Monitoring and alerting configured for the new release | [DevOps / Platform team] |

### Handle emergency changes

Emergency changes may bypass the regular approval process but must be documented and approved retroactively within [24h | next business day]. Apply the emergency change procedure defined in CB_PRC_05 (Change Management). Log the justification for the emergency in the change record.

### Separate environments

Maintain strictly separated development, test, and production environments (addresses A.8.31). Do not access production data from development or test environments. Restrict production access to authorized personnel. Do not install development tools or debugging utilities on production systems [REF:DG24-ET, Kap. 5.2].

## See also

- CB_POL_L2_04-Secure-Development — Normative requirements (upstream standard)
- CB_PRC_05-Change-Management — Change request and approval process
- CB_POL_L2_03-System-and-Network — Environment separation, monitoring
- CB_POL_L2_05-Supplier-and-Cloud — Outsourced development requirements

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-18 | CISO | Added CB_POL_L2_12 to Standard reference (traceability fix — L2_12 lists L3_03 in Operationalized by) |
| 00.01.008 | 2026-02-11 | Claude (AI) | SAST risk exception reference to CB_PRC_14 (merge from retorio) |
| 00.01.007 | 2026-02-11 | CISO | Populated all subject chapters: secure coding, security testing, SDLC, change/deployment management |
| 00.01.006 | 2026-02-10 | CISO | Added L4 traceability field (Condensed by) |
| 00.01.005 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.004 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.003 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.002 | 2026-02-08 | CISO | Subject chapter headings reformulated as calls to action |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
