> **Document ID:** CB_PRC_01-Incident-Management
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.24-5.28
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# Incident Management Process

## Summary

<!-- TODO -->

## Objective and Scope

**Objective:** Information security incidents require a rapid, coordinated response. Without a defined process, escalation paths, decision-making authority, and traceability are absent — individual incidents can escalate uncontrollably.

This process defines the workflow from incident reporting through classification and escalation to post-incident review (lessons learned). It ensures that every incident is documented, assessed, and treated appropriately.

The process operationalizes the requirements from CB_POL_L2_07-Organization (incident section). Relevant incidents are recorded as nonconformities in HB_REG_05 and tracked via CB_PRC_10.

**Scope:** All IS incidents and suspected incidents within the ISMS scope. Triggers: incident report by employees, automated alerts, or external notifications.

## Classification

IS events are assessed and classified according to the following scheme (addresses A.5.25):

| Classification | Action | Description |
|---|---|---|
| Informative events | No action required | Automatically closed, retained for a period per the retention policy. Creates an audit trail for subsequent investigations. |
| Warning events | Action may be needed soon or immediately | Subject to additional review. Where action is required, the Chief Information Security Officer or an ISMS team member decides on the appropriate course of action. |
| Exception events | Action must be taken | An impact analysis is performed and an incident is raised, then handled through the incident management procedure with diagnosis, investigation, and escalation. |

**Criteria for incident classification (exception events):**
- Deliberate human interaction for malicious purposes
- Highly classified information affected
- Unusual circumstances
- Clear violation of IS policies
- Evident risk of the situation worsening
- Actual or potential impact on the organization is significant
- Indications that a control is not functioning effectively

## Reporting

<!-- TODO -->

## Escalation

<!-- TODO -->

## Response

<!-- TODO -->

## Lessons Learned

<!-- TODO -->

## Results documentation

Relevant incidents are recorded as nonconformities in HB_REG_05-Nonconformity-Register and tracked via CB_PRC_10-Nonconformity-Management.

## Evidence collection

The organization establishes procedures for the identification, collection, acquisition, and preservation of evidence related to IS events (addresses A.5.28).

**Principles:**

1. **Establish procedures:** Define internal procedures for handling evidence in disciplinary and legal proceedings
2. **Consider jurisdictions:** Account for the requirements of different jurisdictions to maximize the chances of admissibility
3. **Evidence management instructions:** Provide instructions for identification, collection, acquisition, and preservation of evidence in accordance with storage media, devices, and status (powered on/off)
4. **Admissibility of evidence:** Collect evidence in a manner that is admissible before competent national courts or disciplinary bodies; demonstrate completeness and non-tampering

**Technical controls:**
- Immediately hash digital evidence (digital fingerprint)
- Hash all copies and compare with the original
- Review system logs, network traffic, and system configurations
- Document and remediate anomalies

## See also

- HB_CLS_5.3-Roles-and-Responsibilities


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Classification (3-tier, A.5.25) and evidence collection (4 principles, A.5.28) populated (REC-418, 420) |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
