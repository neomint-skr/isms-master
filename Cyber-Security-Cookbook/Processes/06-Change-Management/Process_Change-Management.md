> **Document ID:** CB_PRC_05-Change-Management
> **Version:** 00.01.009
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.8.32
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Change Management Process

## Summary

Uncontrolled changes to IT systems are a leading cause of outages and security incidents. This process defines the workflow from change request through impact analysis and approval to controlled implementation and rollback. It implements the change management requirements from CB_POL_L2_04 and produces auditable records of every change. Without a structured change process, unauthorized modifications remain undetected and rollback capability is absent.

## Objective and Scope

**Objective:** Uncontrolled changes to IT systems and applications are a common cause of outages and security vulnerabilities. Without a defined process, impact analysis, approval, and rollback capability are absent.

This process defines the workflow from change request through impact analysis and approval to implementation and rollback. It ensures that changes are traceable, approved, and reversible.

The process operationalizes the requirements from CB_POL_L2_04-Secure-Development (change management section). Changes are documented and, where necessary, escalated to the risk assessment (CB_PRC_07).

**Scope:** All changes to production IT systems and applications within the ISMS scope. Triggers: change request from a business unit, IT operations, or a security requirement.

## Request

Every change is initiated through a formal change request (addresses A.8.32). The requestor submits the request via [change management tool, e.g. GitLab issue / Jira ticket / dedicated form] and provides all mandatory fields.

### Change categories

| Category | Scope | Approval path | Example |
|---|---|---|---|
| Standard | Pre-approved, low-risk, repeatable changes | No CAB review required | Routine patching, user account provisioning |
| Normal | Non-routine changes with potential impact | CAB review and approval | New application deployment, firewall rule change |
| Emergency | Urgent change to restore service or close a critical vulnerability | Abbreviated approval; retroactive CAB review within [1-3 business days] | Zero-day patch, incident containment measure |

### Mandatory fields

| # | Field | Description |
|---|---|---|
| 1 | Change title | Short description of the proposed change |
| 2 | Requestor | Name and role of the person proposing the change |
| 3 | Category | Standard, Normal, or Emergency |
| 4 | Justification | Business or security reason for the change |
| 5 | Affected systems | Systems, applications, or infrastructure components impacted |
| 6 | Proposed schedule | Target date and maintenance window |
| 7 | Rollback plan | High-level rollback approach (detailed plan follows in implementation) |

The change owner reviews the submitted request for completeness and correctness. Incomplete requests are returned to the requestor for revision before further processing.

## Impact analysis

The change owner develops a detailed assessment of the proposed change before it proceeds to approval. The impact analysis covers risks, dependencies, and resource requirements.

### Risk assessment

Each change is evaluated against the three information security objectives:

| Dimension | Guiding question |
|---|---|
| Confidentiality | Could the change expose sensitive data or weaken access controls? |
| Integrity | Could the change corrupt data, configurations, or audit trails? |
| Availability | Could the change cause downtime or degrade service performance? |

A risk rating (low, medium, high, critical) is assigned based on the combined assessment. Changes rated high or critical require explicit risk acceptance by the responsible asset owner before approval.

### Dependency analysis

The change owner identifies all upstream and downstream dependencies, including:

- Shared infrastructure components and integration points
- Other planned changes within the same maintenance window
- Contractual or regulatory constraints (e.g. SLA windows, data processing agreements)

Conflicting changes are flagged and rescheduled or consolidated.

### Implementation plan

The change owner prepares a detailed implementation plan covering:

| # | Element | Description |
|---|---|---|
| 1 | Timeline | Step-by-step schedule with estimated duration per step |
| 2 | Resources | Personnel, tools, and access permissions required |
| 3 | Test procedures | Validation steps in the test environment before production deployment |
| 4 | Rollback plan | Concrete rollback steps, triggers for rollback, and maximum tolerable rollback time |
| 5 | Communication plan | Stakeholders to be notified before, during, and after the change |

The completed impact analysis is attached to the change record and submitted to the CAB for approval.

## Approval

### Change Advisory Board

The Change Advisory Board (CAB) reviews and decides on Normal and Emergency changes. The CAB consists of:

| Role | Responsibility |
|---|---|
| [CAB chair, e.g. CTO / IT Manager] | Chairs CAB meetings, has casting vote |
| CISO | Assesses information security implications |
| [Affected asset owners] | Confirm business impact and risk acceptance |
| [Technical lead / DevOps representative] | Evaluates technical feasibility and dependencies |

The CAB meets [weekly / bi-weekly — depending on change volume] or is convened ad hoc for Emergency changes.

### Approval paths by category

| Category | Approval authority | Timeline |
|---|---|---|
| Standard | Change owner (pre-approved list) | No CAB review; logged for audit trail |
| Normal | CAB majority decision | Reviewed in next scheduled CAB meeting |
| Emergency | [CAB chair or CISO] grants immediate approval | Retroactive CAB review within [1-3 business days] |

### Decision outcomes

The CAB may approve, reject, or defer a change request. Rejected requests are returned with documented reasoning. Deferred requests are placed on the agenda for the next CAB meeting. Approved changes receive a unique change ID and proceed to implementation.

## Implementation and rollback

### Implementation

The implementation team executes the approved change according to the implementation plan. The following steps apply:

1. **Pre-implementation verification** — Confirm that the test environment validation was successful and all prerequisites (access, resources, backups) are in place.
2. **Stakeholder notification** — Notify affected stakeholders and, where applicable, end users before the maintenance window begins.
3. **Execution** — Carry out the change steps as documented. Deviations from the plan are recorded in the change record.
4. **Monitoring** — Monitor the affected systems during and immediately after implementation to detect anomalies or performance degradation.
5. **Verification** — Validate that the change produces the expected result and that no unintended side effects are observed.

### Rollback

If the change causes unacceptable issues, the rollback plan is activated. Rollback triggers include:

- Critical service degradation or outage
- Security control failure (e.g. access control bypass, data exposure)
- Verification tests fail against defined acceptance criteria

The rollback is executed within the maximum tolerable rollback time defined in the implementation plan. After rollback completion, the change coordinator confirms service restoration.

### Post-implementation review

Every Normal and Emergency change undergoes a post-implementation review within [5 business days] after completion:

| # | Review element | Description |
|---|---|---|
| 1 | Outcome assessment | Was the change objective achieved? |
| 2 | Incident review | Did incidents occur during or after the change? |
| 3 | Process adherence | Was the documented process followed? |
| 4 | Lessons learned | What should be improved for future changes? |

Results are documented in the change record. Recurring issues are escalated to the risk assessment process (CB_PRC_07). All change records, including approvals, test results, implementation logs, and review outcomes, are retained in [change management tool] for audit purposes.

## See also

- HB_CLS_5.3-Roles-and-Responsibilities


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.008 | 2026-02-20 | CISO | Reorganized into numbered subfolder; file renamed to Process_ prefix |
| 00.01.007 | 2026-02-11 | CISO | Populated all TODO sections: Request, Impact analysis, Approval, Implementation and rollback, Summary |
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: bold-label pattern, orphan text removed |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
