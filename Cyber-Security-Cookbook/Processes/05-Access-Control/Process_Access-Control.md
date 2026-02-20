> **Document ID:** CB_PRC_02-Access-Control
> **Version:** 00.01.010
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.15-5.18
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Access Control Process

## Summary

Uncontrolled access rights are among the most frequent root causes of security incidents. This process defines the end-to-end lifecycle for logical access — from request and approval through privileged-access handling to revocation and periodic recertification. It implements the access-control requirements of CB_POL_L2_01 and ensures that least-privilege assignments remain current. Without this process, orphaned accounts and excessive permissions go undetected and create audit findings.

## Objective and Scope

**Objective:** Access rights must be provisioned, reviewed, and revoked systematically. Without a defined process, excessive permissions and orphaned accounts accumulate — one of the most common causes of security incidents.

This process defines the workflow from access request through approval and privileged access to recertification and revocation. It ensures that the principle of least privilege is enforced consistently.

The process operationalizes the requirements from CB_POL_L2_01-Access-and-Identity. Access decisions are documented in [IAM tool / ticketing system] and verified through regular recertification cycles.

**Scope:** All logical access rights to IT systems and information within the ISMS scope. Triggers: onboarding, role change, offboarding, or scheduled recertification.

## Provisioning

This section defines the workflow for granting logical access rights to IT systems and information (addresses A.5.18).

### Trigger

A provisioning request is initiated when one of the following events occurs:

- New employee onboarding
- Role change or internal transfer
- Project assignment requiring additional system access
- Source-code repository access required for development tasks (addresses A.8.4)

### Request

The requesting party submits an access request via [ticket system / access-request form]. The request must contain:

| Field | Content |
|---|---|
| Requester | Name and role of the requesting person |
| Subject | Person or service account for which access is requested |
| Target system(s) | System, application, or repository |
| Access level | Read, write, admin, or specific role |
| Business justification | Why the access is needed |
| Duration | Permanent or time-limited (with expiry date) |

Service accounts require a named owner responsible for the account throughout its lifecycle (addresses A.5.16).

### Approval

The responsible asset owner authorizes the request before technical provisioning begins. Approval and technical implementation must not reside with the same person to ensure segregation of duties (addresses A.5.3).

| Access type | Approver | SLA |
|---|---|---|
| Standard access | Asset owner | [2 business days] |
| Privileged access | Asset owner + CISO | [2 business days] |
| Source-code access | [Engineering lead / CTO] | [2 business days] |
| Emergency access | See break-glass procedure below | Immediate |

Approval is documented in the ticket system and retained for audit purposes.

### Technical implementation

After approval, the [IT administrator / ISC] provisions the access rights according to the principle of least privilege (addresses A.5.15). Access is restricted to the minimum permissions necessary for the stated business purpose (addresses A.8.3).

The provisioning is logged centrally. The requester and the subject receive confirmation once access has been granted.

## Privileged access

Privileged access rights grant elevated control over systems and data. They are managed with additional restrictions to reduce the risk of misuse (addresses A.8.2).

### Scope of privileged access

Privileged accounts include, but are not limited to:

- Administrative accounts for infrastructure components (cloud consoles, servers, network devices)
- Database administrator accounts
- Accounts with the ability to modify security configurations or audit logs
- Service accounts with elevated permissions

### Requirements

The following rules apply to all privileged access rights:

| Requirement | Detail |
|---|---|
| Separate identities | Administrative activities require a dedicated account, distinct from the user's standard identity |
| No routine use | Privileged accounts must not be used for everyday tasks such as email or web browsing |
| No generic IDs | Named accounts only — generic identifiers such as "root", "admin", or "administrator" are prohibited for interactive use |
| MFA / re-authentication | MFA or re-authentication is required before executing critical administrative tasks (addresses A.5.17) |
| Least privilege | Privileges are scoped to the minimum necessary for the specific administrative task |
| Time-limited grants | Where technically feasible, privileged access is granted for a defined duration and revoked automatically upon expiry |

### Break-glass procedure

In emergencies where the standard approval path is unavailable, a break-glass procedure allows temporary privileged access:

1. The requesting party documents the emergency and the access needed.
2. Access is granted by [on-call administrator / ISC] and logged immediately.
3. The CISO is notified within [4 hours].
4. A post-incident review validates the access and closes the break-glass record within [2 business days].

### Logging and monitoring

All activities performed with privileged rights are logged and retained according to the organization's log-retention policy. Logs are monitored for anomalies, and alerts are generated for unusual patterns such as off-hours access or bulk data operations.

### Review cycle

Privileged access rights are reviewed [quarterly | semi-annually — depending on risk classification]. The review verifies that each privileged account is still required, correctly scoped, and assigned to an active employee. Results are documented and retained for audit purposes.

## Revocation

Access rights are revoked promptly when they are no longer required. Delayed revocation creates orphaned accounts that pose a significant security risk (addresses A.5.18).

### Trigger events

| Trigger | Deadline | Responsible |
|---|---|---|
| Employment termination | Immediately on last working day | [HR / ISC] |
| Role change or internal transfer | Before the new role becomes effective | Line manager + asset owner |
| End of project assignment | On project closure date | Project lead |
| Prolonged absence (>90 days) | Account suspended on day 1 of absence | [HR / ISC] |
| Security incident or policy violation | Immediately upon detection | CISO |

### Revocation checklist

The following items are verified for each revocation event:

- [ ] All application and system accounts deactivated
- [ ] Cloud and third-party service access removed
- [ ] Source-code repository access removed (addresses A.8.4)
- [ ] VPN and remote-access credentials revoked
- [ ] Physical access tokens, keys, or cards returned (coordinate with CB_POL_L2_06)
- [ ] Shared-account passwords rotated if the departing user had knowledge of them
- [ ] Mobile-device management profile removed (if applicable)
- [ ] Revocation documented in the central access register

### Handover

Before revocation, the line manager ensures that business-critical data and responsibilities are handed over. No access rights are revoked before the handover is confirmed, unless a security incident requires immediate action.

## Recertification

Regular recertification ensures that granted access rights remain appropriate and aligned with current business needs (addresses A.5.18).

### Cycle

| Scope | Frequency | Responsible |
|---|---|---|
| Privileged access rights | [Quarterly | semi-annually — depending on risk classification] | CISO + asset owners |
| Standard access rights | [Annually] | Asset owners |
| Service accounts | [Annually] | Named account owner |
| Source-code repository access | [Annually] | [Engineering lead / CTO] (addresses A.8.4) |

### Procedure

1. The CISO initiates the recertification campaign and distributes access-rights listings to the responsible asset owners.
2. Each asset owner reviews the listed accounts and confirms or rejects continued access.
3. Rejected access rights are revoked within [5 business days] following the revocation procedure above.
4. The CISO consolidates results and documents the campaign outcome.
5. Unresolved items are escalated to [senior management / CEO] if not closed within [10 business days].

### Documentation

Recertification results — including confirmations, rejections, and any corrective actions taken — are retained as evidence for internal and external audits.

## See also

- HB_CLS_5.3-Roles-and-Responsibilities


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.010 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.009 | 2026-02-20 | CISO | Reorganized into numbered subfolder; file renamed to Process_ prefix |
| 00.01.008 | 2026-02-18 | CISO | Added tool-based documentation phrase for access decisions (CLS>PRC>REG chain fix) |
| 00.01.007 | 2026-02-11 | CISO | Skeleton filling: provisioning, privileged access, revocation, recertification, summary |
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: bold-label pattern, orphan text removed |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
