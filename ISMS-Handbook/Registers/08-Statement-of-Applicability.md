> **Document ID:** HB_REG_08-Statement-of-Applicability
> **Version:** 00.04.014
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** Clause 6.1.3 d
> **Last modified:** 2026-02-19
> **Approval:** —
> **Review cycle:** Annual

---

# Statement of Applicability (SoA)

## Summary

The Statement of Applicability (SoA) is the mandatory ISO 27001 register that records the applicability decision, justification and implementation status for each of the 93 Annex A controls. This document provides a single-table overview of which controls [Organization] applies, which are excluded and why, and what the current implementation status is. As the SSOT for control selection the SoA ensures traceability between risk treatment decisions and implemented controls, enabling auditors and management to verify completeness of the ISMS. Without a current and accurate SoA, the certification audit cannot confirm that the control selection is risk-based and justified, potentially resulting in a major nonconformity.

## Objective and Scope

**Objective:** Certification to ISO 27001 requires a documented, justified decision on the application of each of the 93 Annex A controls. Without a SoA, the auditor lacks the central evidence of control selection and implementation status.

The SoA documents the applicability decision, justification and current implementation status for each control. It serves as the SSOT for control applicability and as the governance basis for ISMS implementation.

Control selection takes place during risk treatment (CB_PRC_07, HB_CLS_8.3) and is derived in the coverage matrix (INDEX.md) for navigation. The management review (CB_PRC_09) reviews the SoA status annually.

**Scope:** All 93 Annex A controls. Target audience: CISO (maintenance), top management (approval), auditors (evidence).

### Key

| Column | Content |
|---|---|
| # | Control number |
| Control | Short designation |
| Appl | Applicable: Yes / No / — (open) |
| Justification | Why applicable or not applicable |
| Status | Implemented / Partial / Planned / — (open) |
| Doc | Primary document (short-form IDs as in INDEX.md) |
| Evidence | Evidence reference |
| Basis | Applicability basis: `baseline` = part of the baseline control set for Normal PR / `risk treatment` = derived from individual risk analysis / `legal-contractual` = required by legal or contractual obligations |

## Organizational Controls (A.5)

| # | Control | Appl | Basis | Justification | Status | Doc | Evidence |
|---|---|---|---|---|---|---|---|
| 5.1 | Policies for information security | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L1_01 | Policy framework |
| 5.2 | Information security roles and responsibilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | HB_CLS_5.3 | Roles definition |
| 5.3 | Segregation of duties | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_07 | Segregation of duties matrix |
| 5.4 | Management responsibilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | HB_CLS_5.1 | Role definition |
| 5.5 | Contact with authorities | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_07 | Interested parties register |
| 5.6 | Contact with special interest groups | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_07 | Interested parties register |
| 5.7 | Threat intelligence | Yes | [baseline/risk treatment/legal-contractual] | Required for proactive threat awareness; three-tier model established | Partial | CB_POL_L2_03 | L2_03, L2_13 threat intelligence sections; PRC_04 |
| 5.8 | Information security in project management | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_04 | Project security register |
| 5.9 | Inventory of information and other associated assets | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | HB_REG_03, CB_PRC_12 | Asset register |
| 5.10 | Acceptable use of information and other associated assets | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_07 | Asset handling procedures |
| 5.11 | Return of assets | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_07 | Role definition |
| 5.12 | Classification of information | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_02 | Classification scheme |
| 5.13 | Labelling of information | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_02 | Labelling procedures |
| 5.14 | Information transfer | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_02 | Information transfer policies |
| 5.15 | Access control | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | Access control policy |
| 5.16 | Identity management | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | User registration process |
| 5.17 | Authentication information | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | Authentication allocation process |
| 5.18 | Access rights | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | User access provisioning process |
| 5.19 | Information security in supplier relationships | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_05 | Supplier security policy |
| 5.20 | Addressing information security within supplier agreements | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_05 | Supplier agreement requirements |
| 5.21 | Managing information security in the ICT supply chain | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_05 | Supplier agreement requirements |
| 5.22 | Monitoring, review and change management of supplier services | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_05 | Supplier monitoring schedule |
| 5.23 | Information security for use of cloud services | No | — | Not proportionate at current org maturity level | — | CB_POL_L2_05 | — |
| 5.24 | Information security incident management planning and preparation | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_13 | Role definition |
| 5.25 | Assessment and decision on information security events | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_13 | Incident response procedures |
| 5.26 | Response to information security incidents | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_13 | Incident response procedures |
| 5.27 | Learning from information security incidents | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_13 | Incident response procedures |
| 5.28 | Collection of evidence | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_13 | Evidence collection procedures |
| 5.29 | Information security during disruption | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_06 | CB_POL_L3_08, HB_REG_04-BCM-Register |
| 5.30 | ICT readiness for business continuity | No | — | Not proportionate at current org maturity level | — | CB_POL_L2_06 | CB_POL_L3_08, HB_REG_04-BCM-Register |
| 5.31 | Identification of applicable legislation and contractual requirements | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | Legal requirements register |
| 5.32 | Intellectual property rights | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | IP protection procedures |
| 5.33 | Protection of records | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | Record retention schedule |
| 5.34 | Privacy and protection of PII | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | Data protection policy |
| 5.35 | Independent review of information security | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of ineffective security controls | Implemented | HB_CLS_9.2 | External audit schedule |
| 5.36 | Compliance with policies, rules and standards for information security | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | Role definition |
| 5.37 | Documented operating procedures | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_14 | Operating procedures |

## People Controls (A.6)

| # | Control | Appl | Basis | Justification | Status | Doc | Evidence |
|---|---|---|---|---|---|---|---|
| 6.1 | Screening | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_10 | Employee onboarding process |
| 6.2 | Terms and conditions of employment | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_10 | Terms and conditions |
| 6.3 | Information security awareness, education and training | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_10 | Awareness program |
| 6.4 | Disciplinary process | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of deliberate rule breach | Implemented | CB_POL_L2_10 | Disciplinary process |
| 6.5 | Responsibilities after termination or change of employment | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_10 | Employee offboarding process |
| 6.6 | Confidentiality or non-disclosure agreements | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_10 | NDA requirements |
| 6.7 | Remote working | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_10 | Teleworking policy |
| 6.8 | Information security event reporting | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_10 | Security event log |

## Physical Controls (A.7)

| # | Control | Appl | Basis | Justification | Status | Doc | Evidence |
|---|---|---|---|---|---|---|---|
| 7.1 | Physical security perimeters | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Security perimeter plan |
| 7.2 | Physical entry | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Access log, key log |
| 7.3 | Securing offices, rooms and facilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Facility protection plan |
| 7.4 | Physical security monitoring | Yes | [baseline/risk treatment/legal-contractual] | Electronic locks track entry; open-floor office layout | Implemented | CB_POL_L2_09 | Access log |
| 7.5 | Protecting against physical and environmental threats | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure operation conditions | Implemented | CB_POL_L2_09 | Environmental risk assessment |
| 7.6 | Working in secure areas | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Secure area procedures |
| 7.7 | Clear desk and clear screen | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Clear desk policy |
| 7.8 | Equipment siting and protection | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of physical security breach | Implemented | CB_POL_L2_09 | Equipment siting records |
| 7.9 | Security of assets off premises | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_09 | Off-premises asset log |
| 7.10 | Storage media | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_09 | Removable media procedures |
| 7.11 | Supporting utilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure operation conditions | Implemented | CB_POL_L2_09 | Utility maintenance records |
| 7.12 | Cabling security | Yes | [baseline/risk treatment/legal-contractual] | Cables managed centrally by building provider | Partial | CB_POL_L2_09 | Building provider agreement |
| 7.13 | Equipment maintenance | No | — | No dedicated IT admin at current company stage | — | CB_POL_L2_09 | — |
| 7.14 | Secure disposal or re-use of equipment | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access | Implemented | CB_POL_L2_09 | Disposal and destruction log |

## Technological Controls (A.8)

| # | Control | Appl | Basis | Justification | Status | Doc | Evidence |
|---|---|---|---|---|---|---|---|
| 8.1 | User endpoint devices | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Mobile device policy |
| 8.2 | Privileged access rights | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | Privilege management matrix |
| 8.3 | Information access restriction | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | Access control policy |
| 8.4 | Access to source code | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | — |
| 8.5 | Secure authentication | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of unauthorized access to assets | Implemented | CB_POL_L2_01 | Secure log-on procedures |
| 8.6 | Capacity management | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_03 | Capacity plan |
| 8.7 | Protection against malware | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Incident response procedures |
| 8.8 | Management of technical vulnerabilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Vulnerability scan reports |
| 8.9 | Configuration management | Yes | [baseline/risk treatment/legal-contractual] | Required for endpoint and infrastructure hardening; baselines defined | Partial | CB_POL_L2_03 | — |
| 8.10 | Information deletion | No | — | Not proportionate at current org maturity level | — | CB_POL_L2_02 | — |
| 8.11 | Data masking | Yes | [baseline/risk treatment/legal-contractual] | Required for non-production data protection; implemented in monitoring tools | Partial | CB_POL_L2_02 | — |
| 8.12 | Data leakage prevention | No | — | Not proportionate at current org maturity level | — | CB_POL_L2_02, CB_POL_L2_03 | — |
| 8.13 | Information backup | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_06 | Backup policy |
| 8.14 | Redundancy of information processing facilities | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_06 | Redundancy architecture plan |
| 8.15 | Logging | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_03 | Event log review schedule |
| 8.16 | Monitoring activities | No | — | Not proportionate at current org maturity level | — | CB_POL_L2_03 | — |
| 8.17 | Clock synchronization | Yes | [baseline/risk treatment/legal-contractual] | Reduces impact of an information security incident | Implemented | CB_POL_L2_03 | NTP configuration records |
| 8.18 | Use of privileged utility programs | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_03 | Utility program inventory |
| 8.19 | Installation of software on operational systems | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_03 | Software installation procedures |
| 8.20 | Networks security | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Network architecture diagram |
| 8.21 | Security of network services | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Network service agreements |
| 8.22 | Segregation of networks | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_03 | Network segmentation plan |
| 8.23 | Web filtering | Yes | [baseline/risk treatment/legal-contractual] | Required for endpoint protection; policy defined | Partial | CB_POL_L2_03 | — |
| 8.24 | Use of cryptography | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of an effective cyberattack | Implemented | CB_POL_L2_02 | Cryptographic controls policy |
| 8.25 | Secure development life cycle | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Secure development policy |
| 8.26 | Application security requirements | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Security requirements specification |
| 8.27 | Secure system architecture and engineering principles | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | System engineering principles |
| 8.28 | Secure coding | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Secure coding standards |
| 8.29 | Security testing in development and acceptance | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Security test reports |
| 8.30 | Outsourced development | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Outsourced development agreements |
| 8.31 | Separation of development, test and production environments | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Environment separation plan |
| 8.32 | Change management | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Change management procedures |
| 8.33 | Test information | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of insecure applications | Implemented | CB_POL_L2_04 | Test data management procedures |
| 8.34 | Protection of information systems during audit testing | Yes | [baseline/risk treatment/legal-contractual] | Reduces likelihood of ineffective security controls | Implemented | CB_POL_L2_04 | Internal audit schedule |

## See also


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.04.014 | 2026-02-19 | Claude (AI) | Controls 5.29/5.30: HB_REG_04 reference updated to BCM-Register |
| 00.04.013 | 2026-02-18 | Claude (AI) | Add Basis column for applicability classification (baseline/risk treatment/legal-contractual) |
| 00.04.012 | 2026-02-11 | Claude (AI) | Register renumbered for information-flow order (formerly no. 02) |
| 00.04.011 | 2026-02-11 | Claude (AI) | Reroute controls: A.5.24-5.28 to L2_13, A.5.31-5.37 to L2_14, A.5.7 evidence updated (merge from retorio) |
| 00.04.010 | 2026-02-11 | Claude (AI) | Populate SoA from client instance — 87 Yes, 6 No controls with justifications and status |
| 00.04.009 | 2026-02-10 | Claude (AI) | Remove Responsibilities section; roles consolidated in CLS 5.3 |
| 00.04.008 | 2026-02-10 | [CISO] | Renamed Column Legend to Key (register key convention) |
| 00.04.007 | 2026-02-10 | [CISO] | A.5.29-30: added L3_08 and REG_04 as secondary documents |
| 00.04.006 | 2026-02-09 | [CISO] | Aligned role terminology |
| 00.04.005 | 2026-02-09 | [CISO] | Objective and Scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.04.004 | 2026-02-09 | [CISO] | Objective and Scope: bold-label pattern (Objective + Scope) |
| 00.04.003 | 2026-02-08 | [CISO] | A.8.18 Doc L2_01->L2_03, A.8.12 secondary L2_03 added (MECE finding) |
| 00.04.002 | 2026-02-08 | [CISO] | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.04.001 | 2026-02-07 | [CISO] | See also section added |
| 00.04.000 | 2026-02-07 | [CISO] | Responsibilities section added (governance normalization) |
| 00.03.000 | 2026-02-07 | [CISO] | A.5.9 Doc reference extended: CB_PRC_12 added |
| 00.02.000 | 2026-02-06 | [CISO] | Doc references: short-form IDs instead of folder paths |
| 00.01.000 | 2026-02-06 | [CISO] | Initial version |
