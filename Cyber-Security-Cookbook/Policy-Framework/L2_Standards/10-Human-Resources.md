> **Document ID:** CB_POL_L2_10-Human-Resources
> **Version:** 00.01.013
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.11, A.6.1-6.8
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** Annual

---

# Human Resources Standard

## Summary

Employees are both the strongest line of defense and the most common cause of security incidents. This policy defines the requirements for screening, employment terms, awareness, disciplinary procedures, and remote working across the entire employment lifecycle. It ensures that IS obligations are bindingly governed before, during, and after employment. Without systematic HR security requirements, the human factor remains the greatest uncontrolled security risk.

## Objective and Scope

**Policy reference:** P4
**Operationalized by:** CB_POL_L3_01-User-Handbook

**Objective:** Employees are both the strongest line of defense and the most common cause of security incidents. Without binding requirements for screening, awareness, and responsibilities across the entire employment lifecycle, the human factor remains the greatest uncontrolled risk.

This policy defines the normative requirements for screening, employment terms, awareness, disciplinary procedures, offboarding, and remote working (addresses A.6.1-6.8). It establishes criteria for IS obligations before, during, and after employment.

The standard implements principle P4 (Awareness) of the IS policy. Operational implementation is provided through CB_POL_L3_01 (User Handbook) and the awareness programme (CB_AWR_01, CB_AWR_02).

**Scope:** HR managers, line managers, and all employees including external personnel. Covers the entire employment lifecycle from hiring to termination.

## Screening

Prior to employment and on an ongoing basis (depending on the sensitivity of the position), background verification checks on all candidates are conducted in consideration of applicable laws, regulations, and ethical principles. The process is proportionate to business requirements, classification of the information, and perceived risks (addresses A.6.1).

**Verification steps:**

| # | Step | Description |
|---|---|---|
| 1 | References | Verify that appropriate business and personal references are available |
| 2 | CV | Verify completeness and accuracy; confirm employment dates, positions, and duties |
| 3 | Qualifications | Verify authenticity of academic and professional qualifications by contacting educational institutions or verification services |
| 4 | Identity | Verify identity through examination of national ID card, passport, or other suitable document |
| 5 | Financial/criminal | For positions of particular trust: financial status and criminal history within the legally permissible scope (e.g., credit check, police certificate) |

For hiring into IS roles, additionally ensure: competence (skills, knowledge, experience) and trustworthiness (handling of sensitive information).

## Employment Terms

Employment contracts and agreements with contractors must include clauses on information security (addresses A.6.2). Prior to commencement of employment, it must be ensured that information security responsibilities are understood.

**Minimum content of contractual IS clauses:**

| # | Requirement |
|---|---|
| 1 | Obligation to sign a confidentiality or non-disclosure agreement before access to confidential information |
| 2 | Legal duties and rights, in particular copyright and data protection regulations |
| 3 | Responsibilities for classification and management of information and associated assets |
| 4 | Measures for non-compliance with security requirements in accordance with the disciplinary process |
| 5 | Reference to the IS policy (CB_POL_L1_01) and all topic-specific L2 standards |
| 6 | Continuing obligations after termination of the relationship, in particular confidentiality for [post-employment period] |

Duties and responsibilities in the area of information security must be clearly communicated before contract conclusion [REF:DG25-SC, Kap. 2.2]. Contractual terms must be reviewed regularly and updated when laws, regulations, or IS policies change.

**NDA lifecycle:** Confidentiality and non-disclosure agreements must follow a structured lifecycle (addresses A.6.6):

1. **Identify** — Determine which roles, projects, or third-party relationships require an NDA.
2. **Select** — Choose the appropriate NDA type (mutual, unilateral, project-specific).
3. **Tailor** — Adapt scope, duration, and permitted disclosures to the specific context.
4. **Sign** — Obtain signatures from all parties before access to confidential information is granted.
5. **Store** — File signed originals in [HR system / contract management system] with retention metadata.
6. **Review** — Re-evaluate NDAs at contract renewal, role change, or when IS policies change.
7. **Terminate** — Upon end of relationship, confirm continuing obligations and document acknowledgement.

The NDA template is maintained in CB_TPL_10 [REF:DG25-SC, Kap. 2.4].

## Awareness

All employees and relevant external parties must receive appropriate IS awareness, education, and training (addresses A.6.3). The programme must be aligned with the IS policy and topic-specific standards.

**Programme requirements:**

| # | Requirement |
|---|---|
| 1 | Initial training for new employees and upon transfer to positions with changed IS requirements |
| 2 | Regular refresher training at [annual &#124; semi-annual — depending on risk level] intervals to keep knowledge current |
| 3 | Effectiveness assessment at the end of each training measure to gauge knowledge transfer |
| 4 | Documentation of attendance as audit evidence |

**Mandatory awareness content:**

- Top management commitment to information security
- Applicable regulations and obligations and their observance
- Personal accountability for one's own actions and omissions
- Fundamental IS procedures and basic controls (passwords, phishing recognition, reporting obligations)
- Points of contact for IS questions and incident reporting

Various formats must be used: e-learning modules, in-person seminars, campaigns, and information materials [REF:DG25-SC, Kap. 3.1]. Lessons learned from security incidents must be integrated into the programme [REF:DG24-AV, Kap. 3.6]. The operational implementation of the awareness programme is described in CB_AWR_01 and CB_AWR_02.

**Training plan for technical teams:** For personnel in technical IS roles (e.g. administrators, developers, security engineers), role-specific training content must be defined that goes beyond general awareness (Cl. 7.2). Training plans must address the specific competence requirements from HB_CLS_7.2, cover relevant technologies and threat landscapes, and be reviewed annually for currency [REF:DG25-SC, Kap. 3.1-VII].

## Disciplinary

Violations of IS policies are addressed through a formalized and communicated disciplinary process. The process applies to unintentional, first-time, repeated, fraudulent, or threatening violations (addresses A.6.4).

**Levels:**

| Level | Measure | Description |
|---|---|---|
| 1 | Verbal warning | For minor violations: confidential conversation between employee and line manager |
| 2 | Formal measures | Written warning, formal caution with specific instructions for behavior change, final warning prior to possible termination |
| 3 | Disciplinary hearing | Summons to a hearing before severe measures; employee has the right to be accompanied by a person of trust; hearing is recorded |
| 4 | Termination | Ordinary termination (for continued misconduct despite prior measures) or extraordinary termination (for serious violations) |

**Special cases:** Harassment/discrimination (immediate investigation), violations of security regulations (immediate measures including possible suspension). All steps must be documented.

## Offboarding

Upon termination or change of employment, IS-related responsibilities must be handed over in an orderly manner and access rights revoked (addresses A.6.5).

**Mandatory offboarding steps:**

| # | Requirement |
|---|---|
| 1 | Identify all IS responsibilities and obligations of the departing person |
| 2 | Transfer open responsibilities to a named successor |
| 3 | Return all organizational assets, devices, and storage media; document the return |
| 4 | Deactivate or change access credentials, MFA tokens, and system permissions |
| 5 | Remove the person from all systems, distribution lists, and databases |
| 6 | Notify affected internal and external contacts of the changes |

**Return of organizational assets:** Upon termination or change of employment, all organizational assets must be returned (addresses A.5.11). This includes physical devices (laptops, tokens, access cards), storage media, documents, and any copies of confidential information. The return must be documented and confirmed by the line manager. Access credentials and digital accounts must be revoked upon asset return [REF:DG25-MA, Ch. 5.2].

Continuing obligations — in particular confidentiality and non-disclosure — must be contractually governed and reiterated to the departing person [REF:DG25-SC, Kap. 2.3]. The procedure applies equally to external personnel and service providers. Operational implementation is described in CB_POL_L3_01.

## Remote Working

Special security requirements apply for remote working to protect information outside business premises (addresses A.6.7).

**Physical security:** The physical security of the remote workplace must be assessed. Location, local environment, and legal requirements must be considered.

**Secure communication:** VPN, encrypted email, and secure data transfer protocols must be used for accessing corporate resources.

**Access control:** Strong authentication and automatic screen lock must be activated. The requirements from CB_POL_L2_01 (MFA, passwords) apply in full.

**Network usage:** Secure networks must be used. Public WiFi must be avoided for work-related tasks.

**Security software:** Firewalls and malware protection must be installed and current on all mobile devices.

**Equipment:** Equipment suitable for remote working must be provided. Permissible work and device usage must be clearly defined.

**Third-party access:** Rules for access by family members and visitors to devices and information must be established.

**Access revocation:** Upon termination of remote working, access rights must be revoked and devices recovered. Operational implementation is described in CB_POL_L3_01.

## Reporting Obligation

Employees are obligated to report detected or suspected IS events and data protection breaches (addresses A.6.8; see CB_POL_L2_14 for A.5.34).

**IS events:** Every employee must report security incidents, suspected incidents, and vulnerabilities immediately through the defined reporting channel. The reporting process is described in CB_PRC_01 (Incident Management).

**Data protection breaches:** In the event of loss or unauthorized access to personal data, additional reporting obligations to authorities and affected data subjects apply in accordance with GDPR. Responsibility for reporting to the supervisory authority rests with [Data Protection Officer / top management].

**Protection of reporters:** Employees who report security incidents in good faith must not suffer negative consequences.

## See also

- CB_POL_L2_01-Access-and-Identity — Access rights at onboarding and offboarding
- CB_POL_L2_09-Physical-Security — Workplace rules
- CB_POL_L3_01-User-Handbook — End-user obligations, incident reporting
- CB_PRC_01-Incident-Management — Reporting obligation
- CB_AWR_01-Awareness-Fundamentals — Training content
- CB_AWR_02-Onboarding-Checklist — Onboarding checklist

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.013 | 2026-02-20 | Claude (AI) | Removed A.5.34 from ISO Reference; updated A.5.34 content tag to cross-ref (primary: L2_14) |
| 00.01.012 | 2026-02-17 | Claude (AI) | Terminology: "information assets" → "organizational assets" / "associated assets" (ISO-aligned) |
| 00.01.011 | 2026-02-11 | CISO | Added NDA lifecycle (A.6.6), tech-team training plan (Cl. 7.2), asset return at offboarding (A.5.11) |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Employment terms (A.6.2), awareness (A.6.3), offboarding (A.6.5) populated (Batch-D) |
| 00.01.005 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.004 | 2026-02-09 | CISO | Remote working (A.6.7) and reporting obligation (A.6.8, A.5.34) populated (REC-416, 417) |
| 00.01.003 | 2026-02-09 | CISO | Screening (A.6.1) and disciplinary process (A.6.4) populated (REC-413, 415) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version (split from L2_07) |
