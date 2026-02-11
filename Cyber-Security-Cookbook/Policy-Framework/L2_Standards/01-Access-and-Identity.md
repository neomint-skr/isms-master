> **Document ID:** CB_POL_L2_01-Access-and-Identity
> **Version:** 00.01.010
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.15-5.18, A.8.2-8.3, A.8.5, A.8.18
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Access and Identity Standard

## Summary

Uncontrolled access is among the most common causes of security incidents. This policy defines the requirements for identity management, authentication, and access rights provisioning based on the principle of least privilege. It ensures that access rights are granted traceably, reviewed regularly, and revoked when necessary. Without binding access rules, unauthorized access and privilege escalation can remain undetected.

## Objective and Scope

**Policy reference:** P1, P2
**Operationalized by:** CB_POL_L3_01-User-Handbook, CB_POL_L3_02-Admin-Handbook, CB_POL_L3_04-Cryptography

**Objective:** Uncontrolled access is one of the most common causes of security incidents. Without binding rules for identity management and access rights provisioning, the foundation for the principle of least privilege is missing.

This policy defines the normative requirements for access control, identity management, and authentication (addresses A.5.15-5.18, A.8.2-8.5). It establishes criteria for granting, reviewing, and revoking access rights.

The standard implements the principles P1 (Protection) and P2 (Compliance) of the IS policy. Operational implementation is provided through CB_POL_L3_01 (User Handbook), CB_POL_L3_02 (Admin Handbook), and CB_POL_L3_04 (Cryptography); the access control process through CB_PRC_02 (Access Control).

**Scope:** All employees and external personnel with access rights. Covers physical and logical access to all IT systems and information within the ISMS scope.

## Access Control

Access to information and information processing facilities is governed by the principle of least privilege (addresses A.5.15). Access rights are granted exclusively on the basis of documented business requirements.

**Requirements:**

| # | Requirement |
|---|---|
| 1 | Asset owners determine classification and IS requirements for access control |
| 2 | Access rules must be consistent with the information classification |
| 3 | Physical and logical access restrictions are adapted to the security requirements of the respective perimeter |
| 4 | In distributed environments, all connection types must be considered, including network and cloud services |
| 5 | Dynamic access decisions (location, device, risk level) are factored in where elevated protection requirements apply |

The operational access provisioning process is described in CB_PRC_02 (Access Control) [REF:DG24-IAM, Kap. 3.1].

## Identities and Accounts

Identities must be managed so that every person or system entity is uniquely identifiable and accountable for their actions (addresses A.5.16).

**Individual accountability:** Each identity must be uniquely assigned to a single person. Shared use of accounts is prohibited unless a business necessity exists and specific approval from the asset owner has been obtained.

**Non-human entities:** Identities for services, systems, or automations require separate approval and annual recertification. Passwords for such accounts must be rotated automatically or managed through [password manager, e.g., Bitwarden/1Password].

**Deactivation:** Identities must be deactivated immediately when no longer required — in particular upon termination, role change, or deletion of the associated entity. Recurring reviews are part of the offboarding process.

**Re-verification on identity changes:** When identity-related information changes (e.g. legal name, nationality, or organisational affiliation), the identity must be re-verified before the change is reflected in identity management systems (addresses A.5.16). Re-verification may include inspection of updated identity documents or equivalent authoritative sources [REF:DG24-IAM, Kap. 2.1].

**Uniqueness:** Within a system, each identity may be assigned to only one entity, to avoid duplicates.

**Logging:** All events related to creation, modification, and deletion of identities must be logged.

## Authentication

Multi-factor authentication (MFA) is mandatory for access to highly sensitive information and systems (addresses A.8.5).

**Critical systems:** All systems processing confidential or business-critical data must require MFA. Identification is performed through asset management in coordination with asset owners.

**Authentication strength:** The authentication method must correspond to the sensitivity level of the information. For highly sensitive data, strong methods such as digital certificates, smart cards, tokens, or biometric procedures are to be used.

**Remote access:** All access from outside the corporate network requires MFA.

**Session management:** Inactive sessions must be terminated automatically after [timeout period, e.g., 15/30 min.]. Upon successful login, the user must be shown details of previous login attempts.

**Brute-force protection:** Authentication systems must implement controls against brute-force attacks (addresses A.8.5). Measures include account lockout after [number, e.g. 5] consecutive failed attempts, rate limiting, progressive delays, and CAPTCHA mechanisms. Lockout events must be logged and reviewed as part of security monitoring [REF:DG24-IAM, Kap. 2.3].

**Passwords:** Passwords must be created, stored, and managed securely (addresses A.5.17). Complexity and minimum length requirements must be defined. Commonly used and easily guessable passwords are prohibited. Passwords must be changed immediately upon suspicion of compromise; routine password changes without concrete cause are not required. Reuse of previous passwords must be prevented. Passwords may only be stored in the approved password vault. Concrete values (minimum length, history, complexity rules) are defined in CB_POL_L3_01-User-Handbook.

**Temporary passwords:** Temporary passwords or PINs issued during initial provisioning or password reset must be unique per user, non-guessable, and must expire after first use (addresses A.5.17). The identity of the requesting user must be verified through a defined procedure before new, replacement, or temporary authentication information is provided [REF:DG24-IAM, Kap. 2.2].

**Password hashing:** Passwords stored in applications and authentication systems must be protected using recognised adaptive hashing algorithms such as bcrypt, scrypt, or Argon2 (addresses A.8.5). Plaintext storage or use of non-salted hash functions is prohibited. Implementation details are defined in CB_POL_L3_04-Cryptography [REF:DG24-IAM, Kap. 2.2].

## Privileged Access Rights

Privileged access rights must be granted and monitored in a controlled manner to prevent unauthorized access and misuse (addresses A.8.2).

**Approval:** Privileged rights require approval by the responsible asset owner. The approval procedure must be documented.

**Least privilege:** Privileged rights are to be granted according to the principle of least privilege — only for defined tasks and for a limited duration.

**Separate identities:** Persons with privileged access receive separate identities for administrative activities. Privileged accounts must not be used for routine activities such as email or web browsing.

**Prohibition of generic administrator IDs:** The use of generic administrator user IDs such as "root", "admin", or "administrator" is prohibited for interactive sessions (addresses A.8.2). Each privileged user must operate under an individually assigned administrative identity. Where shared system accounts are technically unavoidable, access must be controlled through a privileged access management solution with individual accountability [REF:DG24-IAM, Kap. 3.3].

**Enhanced authentication:** Privileged access requires MFA or re-authentication before executing critical tasks.

**Logging:** All activities with privileged rights must be logged and monitored for anomalies.

**Recertification:** Privileged rights are to be reviewed [annually | semi-annually — depending on risk classification], particularly after role changes or terminations.

## Source Code Access

Access to source code repositories must be restricted on a need-to-know basis and granted through role-based permissions (addresses A.8.4). Only personnel with a documented business requirement may receive access to code repositories.

**Requirements:**

| # | Requirement |
|---|---|
| 1 | Source code access is granted exclusively based on role-based authorisation and documented approval |
| 2 | Branch protection rules must enforce mandatory code review before merging into protected branches |
| 3 | All read and write access to source code repositories must be logged and auditable |
| 4 | Source code must not be stored on personal devices or transferred to unapproved repositories |

Concrete implementation of repository access controls and code review workflows is defined in CB_POL_L3_02-Admin-Handbook [REF:DG24-IAM, Kap. 3.4].

## Access Rights Lifecycle

Access rights are subject to a defined lifecycle from request through to revocation (addresses A.5.18). Each phase requires documented controls.

**Lifecycle phases:**

| Phase | Requirement |
|---|---|
| Request | Formal request with justification of business necessity |
| Approval | Authorization by the responsible asset owner prior to provisioning |
| Provisioning | Rights are activated only after completion of the authorization procedure |
| Review | Regular recertification of all access rights at [annual &#124; semi-annual — depending on risk classification] intervals |
| Modification | Rights are adjusted immediately upon role change, promotion, or transfer |
| Revocation | Rights are revoked immediately upon termination or when no longer required; including cloud and third-party access |

Segregation of duties must be ensured: approval and technical implementation of access rights must not reside with the same person. All changes to access rights must be documented and logged centrally [REF:DG24-IAM, Kap. 3.2].

## See also

- CB_POL_L2_02-Information-Protection — Classification determines access levels
- CB_POL_L2_10-Human-Resources — Access rights at onboarding and offboarding
- CB_POL_L3_01-User-Handbook — Acceptable use, access rules for end users
- CB_POL_L3_02-Admin-Handbook — Access control implementation, privileged access
- CB_POL_L3_04-Cryptography — Authentication procedures
- CB_PRC_02-Access-Control — Provisioning, recertification, revocation
- HB_CLS_5.3-Roles-and-Responsibilities — RACI for access rights

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.010 | 2026-02-11 | CISO | Added: temporary passwords, brute-force protection, password hashing, generic admin ID prohibition, identity re-verification (gap closure batch-06) |
| 00.01.009 | 2026-02-11 | CISO | Source code access section added (A.8.4) |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Access control (A.5.15), access rights lifecycle (A.5.18) populated (Batch-D) |
| 00.01.005 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.004 | 2026-02-09 | CISO | Password requirements added, L2-WHAT without concrete values (REC-302) |
| 00.01.003 | 2026-02-09 | CISO | Identities, authentication/MFA, privileged access rights populated (REC-301, 303, 304) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
