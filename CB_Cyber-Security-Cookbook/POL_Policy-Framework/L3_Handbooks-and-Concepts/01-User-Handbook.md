> **Document ID:** CB_POL_L3_01-User-Handbook
> **Version:** 00.01.007
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.10, A.5.12-5.13, A.6.7-6.8, A.7.7
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# User Handbook

## Summary

Policies only take effect when employees can translate requirements into daily practice. This handbook provides hands-on guidance for IT usage, remote working, information classification, clear desk practices, and incident reporting. It operationalizes the policies CB_POL_L2_02-Information-Protection, CB_POL_L2_07-Organization, CB_POL_L2_09-Physical-Security, and CB_POL_L2_10-Personnel-Security, supporting compliance with key Annex A controls. Without accessible instructions, security rules remain abstract and are not followed in day-to-day operations.

## Objective and Scope

**Standard reference:** CB_POL_L2_02, CB_POL_L2_07, CB_POL_L2_09, CB_POL_L2_10

**Objective:** Policies are only effective when employees know how to apply the requirements in their daily work. Without practical instructions, rules on IT usage, classification, and workplace conduct remain abstract and are not followed.

This handbook translates the requirements from CB_POL_L2_02 (Information Protection), CB_POL_L2_07 (Organization), CB_POL_L2_09 (Physical Security), and CB_POL_L2_10 (Personnel Security) into concrete guidance for the working day. It covers IT usage, remote working, information classification, clear desk practices, and incident reporting.

The handbook forms part of the awareness programme and is used during onboarding (CB_AWR_02) and in regular training sessions (CB_AWR_01). The relevant tools and systems are referenced in each chapter.

**Scope:** All employees and external personnel with access to IT systems or information. Covers daily work at office and remote workplaces.

## Use IT systems responsibly

All IT systems, devices, and applications shall be used exclusively for business purposes (addresses A.5.10). Internal information shall only be shared with authorized persons and not disclosed to external parties.

**Device usage:**

- Protect business devices with a strong password or biometric authentication.
- Keep operating systems and applications up to date — do not defer updates.
- Do not install software without approval from [IT service desk / IT department].
- Use removable media (USB drives, external hard disks) only when encrypted.

**Internet and email:**

- Use the internet during working hours primarily for work-related tasks.
- Only visit trusted and secure websites — do not download software from unknown sources.
- Do not enter confidential information on insecure websites.
- Use only organization-provided services for business communication.
- Include signature lines in messages and add confidentiality notices where appropriate.
- Do not open suspicious emails or links — report them through [incident reporting channel].

**Cloud services:**

- Use only approved cloud services for business data.
- Do not store confidential or strictly confidential information in unapproved cloud services.
- Contact [IT service desk / line manager] with questions about approved services.

**Social media:**

- Only use business social media accounts when authorized to do so.
- Do not share internal or confidential information on social networks.
- Do not publish inflammatory, offensive, or discriminatory content.

[REF:DG25-MA, Ch. 2, 4]

## Work remotely

Working outside business premises requires additional safeguards for devices, data, and communications (addresses A.6.7).

**Network connection:**

- Always use an encrypted VPN connection to access organizational resources.
- Do not use public Wi-Fi for business activities — use a personal hotspot instead.
- Set up [VPN solution, e.g. WireGuard/OpenVPN] according to the installation guide.

**Device protection:**

- Never leave work devices unattended — including briefly in public areas.
- Activate the screen lock as soon as you leave the workplace.
- Do not store sensitive data on local drives — use only approved cloud storage or organizational servers.
- Apply software updates and patches promptly, including when working from home.

**Confidentiality:**

- Avoid confidential conversations in public or ensure that unauthorized persons cannot overhear.
- When sharing your screen during video calls, share only the relevant window — do not leave notifications or sensitive content visible.
- Use a privacy screen when working in public areas.

**Incidents on the move:**

- Report loss or theft of devices immediately to [IT service desk / security contact point].
- Use devices with location tracking and remote wipe capabilities enabled.

[REF:DG25-MA, Ch. 9]

## Classify information

The requirements for information classification are defined in CB_POL_L2_02-Information-Protection (classification section). The classification scheme, levels, and labelling rules are specified there.

The handling matrix below shows the practical application per classification level (addresses A.5.12, A.5.13).

**Labelling:**

| Level | Labelling |
|---|---|
| Public (0) | No labelling required |
| Internal (1) | No labelling required — unlabelled information is treated as internal |
| Confidential (2) | Clear labelling: file name, email subject, document header, physical label |
| Strictly confidential (3) | Clear labelling at all points — plus access annotations |

**Handling by level:**

| Action | Internal | Confidential | Strictly confidential |
|---|---|---|---|
| Store | Approved systems | Approved systems, encrypted | Encrypted, access-restricted |
| Send | Business email | Encrypted, authorized recipients only | Encrypted, only after owner approval |
| Print | Collect immediately | Collect immediately, pull printing | Exceptional cases only, collect immediately |
| Dispose | Waste bin / delete | Shredder / secure deletion | Shredder / secure deletion, documented |
| Share externally | By agreement | Only with NDA / contract | Only with individual approval |

Review the classification of information regularly and update when circumstances change.

[REF:DG25-MA, Ch. 3]

## Keep the workplace tidy

A tidy workplace protects sensitive information from unauthorized access, loss, and damage (addresses A.7.7).

**Clear desk:**

- Lock away sensitive documents in lockable cabinets at the end of each working day.
- Clean whiteboards and flipcharts immediately after meetings.
- Use the shredder for paper containing sensitive information — including notes.
- Do not leave removable media (USB drives, external hard disks) lying around.

**Clear screen:**

- Activate the screen lock as soon as you leave the workplace — even for brief absences.
- Configure [automatic screen lock after X minutes of inactivity].
- When sharing your screen during video calls, share only the relevant window.
- Set pop-up notifications so that no sensitive content is displayed.

**Printing:**

- Collect printouts immediately from the printer — do not leave documents unattended in the printer area.
- Use pull printing (authenticated printing) where available.
- Dispose of misprints containing sensitive information in the shredder.

**Position devices securely:**

- Position screens so that content is not visible from windows or walkways.
- Route cables neatly to avoid trip hazards.
- Keep ventilation openings on devices clear.

[REF:DG24-PS, Ch. 3.2] [REF:DG25-MA, Ch. 9]

## Report security incidents

Early reporting of security events enables a rapid response and limits potential damage (addresses A.6.8).

**What to report:**

Report any unusual or risky observation — even when in doubt. Examples:

- Suspicious emails, links, or attachments (phishing)
- Unknown persons in secure areas
- Loss or theft of devices or data carriers
- Unauthorized access attempts to systems or data
- Unusual system behavior (crashes, unknown programs)
- Violations of security policies

**How to report:**

| Channel | Usage |
|---|---|
| [Primary reporting channel, e.g. ticketing system / email address] | Standard reporting |
| [Phone / chat channel for urgent cases] | Urgent situations requiring immediate action |
| Line manager | Supplementary, when direct reporting channels are unavailable |

**Include in the report:**

- Name, department, and contact details
- Description of the event and time of occurrence
- Urgency and estimated impact (if apparent)

**Important rules of conduct:**

- Do not attempt to fix the problem yourself — inappropriate measures can increase the damage.
- Maintain confidentiality about the details of the incident.
- Cooperate with instructions from the security team.
- Participate in post-incident reviews to learn from incidents.

**Protection of reporters:**

The organization protects persons who report security events in good faith. No disadvantages or retaliatory measures shall result. The protected reporting procedure is defined in [whistleblower policy / whistleblower protection].

[REF:DG24-AV, Ch. 3] [REF:DG25-MA, Ch. 10]

## See also

- CB_POL_L2_02-Information-Protection — Classification, labelling, information transfer
- CB_POL_L2_07-Organization — Roles, responsibilities, organizational structure
- CB_POL_L2_09-Physical-Security — Clear desk, device protection, visitor management
- CB_POL_L2_10-Personnel-Security — Awareness, training, disciplinary measures
- CB_POL_L2_12-AI-Usage — Rules for the use of AI tools
- CB_PRC_01-Incident-Management — Incident response process (RACI, escalation)
- CB_AWR_01-Training-Plan — Awareness training and mandatory training
- CB_AWR_02-Onboarding — Security induction for new employees

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.007 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.006 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.005 | 2026-02-09 | CISO | Subject sections populated, summary and see-also added (Batch-E) |
| 00.01.004 | 2026-02-09 | CISO | Information classification: cross-reference to L2_02 instead of redundancy (REC-421) |
| 00.01.003 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.002 | 2026-02-08 | CISO | Subject chapter headings reformulated as calls to action |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
