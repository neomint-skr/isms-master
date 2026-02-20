> **Document ID:** CB_PRC_01-Incident-Management
> **Version:** 00.01.011
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.24-5.28
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** Annual

---

# Incident Management Process

## Summary

Information security incidents can disrupt business operations and compromise sensitive data if not handled through a structured workflow. This process defines the end-to-end lifecycle from incident reporting and classification through escalation, response, and post-incident review. It implements the operational controls required by ISO 27001 Annex A (A.5.24 through A.5.28) and ensures that every incident is documented, assessed, contained, and used as input for continuous improvement. Without this process, escalation paths remain undefined, regulatory notification deadlines (including GDPR 72-hour obligations) are at risk of being missed, and lessons learned are not systematically captured.

## Objective and Scope

**Objective:** Information security incidents require a rapid, coordinated response. Without a defined process, escalation paths, decision-making authority, and traceability are absent — individual incidents can escalate uncontrollably.

This process defines the workflow from incident reporting through classification and escalation to post-incident review (lessons learned). It ensures that every incident is documented, assessed, and treated appropriately.

The process operationalizes the requirements from CB_POL_L2_13-Incident-and-Threat. Relevant incidents are recorded as nonconformities in HB_REG_NC and tracked via CB_PRC_10.

**Scope:** All IS incidents and suspected incidents within the ISMS scope. Triggers: incident report by employees, automated alerts, or external notifications.

## Classification

IS events are assessed and classified according to the following scheme (addresses A.5.25):

| Classification | Action | Description |
|---|---|---|
| Informative events | No action required | Automatically closed, retained for a period per the retention policy. Creates an audit trail for subsequent investigations. |
| Warning events | Action may be needed soon or immediately | Subject to additional review. Where action is required, the Chief Information Security Officer or an ISMS team member decides on the appropriate course of action. |
| Exception events | Action must be taken | An impact analysis is performed and an incident is raised, then handled through the incident management procedure with diagnosis, investigation, and escalation. Note: "exception events" in this context refers to security events requiring action — not to policy exceptions, which are managed through CB_PRC_14-Exception-Management. |

**Criteria for incident classification (exception events):**
- Deliberate human interaction for malicious purposes
- Highly classified information affected
- Unusual circumstances
- Clear violation of IS policies
- Evident risk of the situation worsening
- Actual or potential impact on the organization is significant
- Indications that a control is not functioning effectively

**Prioritisation of exception events (addresses A.5.25):**

Exception events are assigned a priority based on impact assessment. The following factors are evaluated: affected infrastructure and assets, estimated duration of disruption, number of impacted business areas, root cause category (technical failure, human error, malicious action), and data sensitivity level.

| Priority | Impact | Response guidance |
|---|---|---|
| High | Multiple business areas or critical systems affected; confidential or personal data compromised; significant financial or reputational exposure | Immediate IRM team activation; containment within [1h]; parallel regulatory assessment |
| Medium | Single business area or non-critical system affected; no confirmed data exfiltration; limited operational impact | CISO-led assessment within [4h]; targeted containment measures |
| Low | Localised inconvenience; single user or device; minor policy deviation without data exposure | ISC resolution within [72h]; documented in regular reporting cycle |

## Reporting

All employees, contractors, and external parties are obligated to report observed or suspected IS events without delay (addresses A.6.8). The reporting obligation covers confirmed incidents, suspected incidents, and identified vulnerabilities.

**Reporting channels:**

The organization provides the following channels for incident reports (addresses A.5.24):

| Channel | Use case | Target |
|---|---|---|
| [Primary reporting channel, e.g. Slack #security-incidents] | Default channel for all IS event reports | CISO / ISC |
| [Ticketing system, e.g. GitLab issue with incident label] | Structured technical reports from IT/DevOps | CISO |
| [Email address, e.g. security@company.tld] | Reports from external parties or where other channels are unavailable | CISO |
| [Phone number — CISO or ISC] | Urgent reports requiring immediate verbal escalation | CISO / ISC |

Reports should include: date/time of observation, description of the event, affected systems or data, and the reporter's contact information. When in doubt whether an observation qualifies as an incident, it must be reported regardless.

**Automated detection:**

The organization supplements manual reports with automated detection through [monitoring and alerting tools, e.g. SIEM, IDS/IPS, Google Cloud Security Command Center, MDM, endpoint protection]. Automated alerts are routed to [alert recipient, e.g. CISO / on-call rotation] for triage.

**PII qualification (GDPR Art. 33):**

For every reported incident, the CISO or delegate assesses whether personal data of living persons is affected. The assessment determines:

1. Whether the incident involves personal data (directly or indirectly identifiable individuals)
2. Whether a breach of confidentiality, integrity, or availability of personal data has occurred
3. Whether the breach is likely to result in a risk to the rights and freedoms of natural persons

If criteria 1 and 2 are met, the incident is classified as a personal data breach and the escalation procedure for supervisory authority notification applies. The PII qualification is documented using the breach notification form (CB_TPL_09-Datenschutzvorfall-Meldung) [REF:DGoJ-DS].

**Risk assessment for data subjects (GDPR Art. 33/34):**

For every confirmed personal data breach, the CISO or delegate evaluates whether the breach is likely to result in a **high risk** to the rights and freedoms of natural persons. The assessment considers: type and sensitivity of data, volume of affected records, likelihood and severity of consequences (identity theft, financial loss, discrimination), and whether protective measures (e.g. encryption) were in place. The risk assessment is recorded in the breach notification form (CB_TPL_09).

## Escalation

Incidents classified as exception events are assigned a severity level based on impact analysis (addresses A.5.24).

**Severity matrix:**

| Severity | Description | Examples | Response time | Escalation path |
|---|---|---|---|---|
| Critical | Significant actual or potential disruption of business operations; large-scale data breach; multiple systems compromised | Active malware spreading across network; unauthorized access to large volumes of confidential data; core services unavailable due to attack | [Immediately — max 1h] | CISO notifies CEO/CTO within [1h]; IRM team activation; [crisis communication initiated] |
| High | Serious impact on individual business areas; confirmed compromise of single critical system | Single critical system compromised; confirmed exfiltration of limited confidential data; loss of unencrypted device with sensitive data | [Within 4h] | CISO coordinates response; CTO informed; IRM team on standby |
| Medium | Localized disruption affecting limited business areas; no confirmed data exfiltration | Single non-critical system unavailable; network degradation; loss of encrypted portable device | [Within 24h] | CISO assesses and assigns to ISC or responsible system owner |
| Low | Localized inconvenience affecting a single user; minor policy violation | Minor IS policy violation; single-device virus alert; password shared for low-sensitivity system | [Within 72h] | ISC resolves; CISO informed via regular reporting |

**Deputy rule:** If the CISO is unavailable, [designated deputy, e.g. ISC or CTO] assumes escalation authority. The deputy designation is documented in HB_CLS_5.3-Roles-and-Responsibilities. The deputy must be trained in incident classification, regulatory notification procedures, and IRM team activation. Availability of the CISO and deputy is ensured through [on-call schedule or equivalent arrangement].

**GDPR supervisory authority notification (Art. 33):**

If the PII qualification (see Reporting) confirms a personal data breach likely to result in a risk to rights and freedoms, the CISO notifies the competent supervisory authority within **72 hours** of becoming aware of the breach. The notification contains at minimum:

1. Nature of the personal data breach (categories and approximate number of data subjects and records)
2. Name and contact details of the DPO or other contact point
3. Likely consequences of the breach
4. Measures taken or proposed to address the breach and mitigate its effects

If not all information is available within 72 hours, a phased notification is submitted. The supervisory authority in Germany is [competent data protection authority, e.g. Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)].

**Data subject notification (GDPR Art. 34):**

If the personal data breach is likely to result in a **high risk** to rights and freedoms, affected data subjects are notified without undue delay (GDPR Art. 34). The notification is in clear, plain language and includes: nature of the breach, likely consequences, measures taken, DPO contact details, and recommended protective actions (e.g. password reset, credit monitoring, vigilance against phishing).

If direct notification is disproportionately burdensome, a public communication or equivalent measure is used. The data subject notification content is prepared using the breach notification form (CB_TPL_09) [REF:DGoJ-DS].

**Additional notification obligations:**

Depending on the nature of services provided, additional reporting obligations may apply. The CISO verifies applicable notification requirements and ensures compliance with sector-specific deadlines.

**NIS2 Directive (if applicable):** For organisations subject to NIS2, the following notification deadlines to the competent national authority (BSI) apply:

| Deadline | Obligation |
|---|---|
| 24 hours | Early warning: initial notification of a significant incident, including whether malicious or cross-border impact is suspected |
| 72 hours | Full notification: incident assessment with severity, impact, indicators of compromise, and initial countermeasures |
| 1 month | Final report: root cause analysis, mitigation measures applied, and cross-border impact (if any) |

Applicability of NIS2 is determined based on [sector classification and entity size assessment — documented in HB_CLS_4.2 or equivalent]. Where NIS2 obligations overlap with GDPR notification, both timelines run independently.

## Response

Upon activation, the incident response follows a structured four-phase approach (addresses A.5.26).

**IRM team composition:**

The Incident Response Management (IRM) team is convened by the CISO based on incident severity and type. The team draws from the following roles:

| Role | Responsibility |
|---|---|
| CISO (IRM lead) | Overall coordination, decision authority, external communication |
| ISC | Operational execution, technical containment measures |
| [CTO or designated IT lead] | Technical infrastructure decisions, system isolation/recovery |
| [DPO or legal counsel] | GDPR assessment, supervisory authority liaison, legal implications |
| [Communications lead] | Internal/external stakeholder communication |
| [HR representative — if personnel involved] | Disciplinary considerations, employee support |
| [Additional specialists as needed] | Forensics, cloud security, business process expertise |

Team composition varies based on incident type. For critical incidents, the CISO activates the full IRM team. For lower-severity incidents, the CISO and ISC may handle the response directly.

**Phase 1 — Containment:**

Immediate actions to limit the spread and impact of the incident:

- Isolate affected systems, network segments, or accounts
- Disable compromised credentials or access tokens
- Activate backup communication channels if primary channels are compromised
- Preserve volatile evidence before containment changes system state (coordinate with evidence collection)
- Document all containment actions with timestamps

**Phase 2 — Eradication:**

Remove the root cause and all artifacts of the incident:

- Identify and eliminate malware, unauthorized access points, or exploited vulnerabilities
- Apply patches or configuration changes to address the exploited weakness
- Verify eradication through scanning and monitoring
- Document technical findings for root cause analysis

**Phase 3 — Recovery:**

Restore affected systems and services to normal operation:

- Restore systems from verified clean backups or rebuild as necessary
- Re-enable services in a controlled, phased manner
- Implement enhanced monitoring for the recovery period to detect recurrence
- Verify system integrity before returning to production
- Confirm with business process owners that operations are restored

**Phase 4 — Communication:**

Throughout the response, communication is managed as follows:

- Internal stakeholders are informed through [internal communication channel, e.g. Slack, email] based on need-to-know
- External communication (customers, partners, regulators) is coordinated exclusively through the CISO and [communications lead]
- All communications are documented as part of the incident record
- Regulatory notifications follow the escalation timelines defined above

## Lessons Learned

After every exception event is resolved, a post-incident review is conducted to extract improvement opportunities (addresses A.5.27).

**Review process:**

1. **Scheduling:** The CISO schedules a lessons-learned session within [5-10 business days] after incident closure. All IRM team members who participated in the response attend.
2. **Root cause analysis:** A formal root cause analysis is performed to identify contributing factors — technical vulnerabilities, process deficiencies, or human errors. The analysis method ([5-Whys | fishbone diagram — depending on incident complexity]) is documented.
3. **Review agenda:** The session covers: incident timeline reconstruction, effectiveness of detection and reporting, adequacy of classification and escalation, appropriateness of response actions, communication effectiveness, and regulatory compliance (notification deadlines met).
4. **Improvement actions:** Identified improvements are formulated as corrective or preventive actions, assigned to responsible owners with deadlines, and tracked in HB_REG_NC_01-Nonconformity-Register via CB_PRC_10-Nonconformity-Management.

**Documentation:**

- A post-incident report is created for every exception event, capturing: incident summary, timeline, root cause, actions taken, lessons learned, and improvement actions
- Reports are stored in [incident documentation repository]
- Aggregated findings are included in the management review input (HB_MGT_02-Management-Review) to drive continual ISMS improvement

**Knowledge transfer:**

- Lessons learned are shared with relevant teams through [awareness briefings, team meetings, or dedicated Lessons Learned sessions]
- Recurring patterns or systemic weaknesses identified across multiple incidents are escalated to the risk management process (CB_PRC_03-Risk-Management)
- IRM team training is updated to incorporate findings from reviewed incidents

## Results documentation

Relevant incidents are recorded as nonconformities in HB_REG_NC_01-Nonconformity-Register and tracked via CB_PRC_10-Nonconformity-Management.

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
- CB_POL_L2_07-Organization
- CB_POL_L2_13-Incident-Threat
- CB_PRC_10-Nonconformity-Management
- HB_REG_NC_01-Nonconformity-Register
- HB_MGT_02-Management-Review
- CB_AWR_01-Awareness-Fundamentals


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.011 | 2026-02-20 | Claude (AI) | Registers reorganized into numbered lifecycle folders; path and ID updated |
| 00.01.010 | 2026-02-18 | CISO | Driver reference: L2_07 → L2_13 (incidents split to dedicated standard; traceability fix) |
| 00.01.009 | 2026-02-11 | Claude (AI) | Clarification: exception events (incident classification) vs. policy exceptions (CB_PRC_14) (merge from retorio) |
| 00.01.008 | 2026-02-11 | CISO | Added: NIS2 notification obligations, GDPR risk assessment for data subjects, breach notification form references (TPL_09), IRM deputy training requirements, incident prioritisation (H/M/L) (gap closure batch-08/13) |
| 00.01.007 | 2026-02-11 | CISO | Populated TODO sections: Reporting (channels, PII qualification), Escalation (severity matrix, GDPR Art. 33/34), Response (IRM team, 4-phase approach), Lessons Learned (review process, root cause analysis), Summary |
| 00.01.006 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.005 | 2026-02-09 | CISO | Classification (3-tier, A.5.25) and evidence collection (4 principles, A.5.28) populated (REC-418, 420) |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
