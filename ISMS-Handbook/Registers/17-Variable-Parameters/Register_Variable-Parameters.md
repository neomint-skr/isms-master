> **Document ID:** HB_REG_VAR_01-Variable-Parameters
> **Version:** 00.01.001
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** ISO 27001:2022 Clause 7.5
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Variable Parameters Register

## Summary

Blueprint ISMS documents use bracketed placeholders for organization-specific values that must be resolved before certification. This register catalogues all 126 variable parameters across 10 domains with descriptions, best-practice guidance, example values, and usage locations. It serves as the central survey questionnaire for client onboarding — every placeholder is traced to its definition and all documents where it appears. Without completing this register, deployed documents contain unresolved placeholders that fail audit evidence requirements.

## Objective and Scope

**Requirements:** HB_CLS_7.5-Documented-Information defines the criteria for documented information.
**Process:** Completed during client onboarding, reviewed annually during management review (CB_PRC_09).

**Objective:** ISMS blueprint documents contain organization-specific placeholders that must be filled before certification. Without a central catalogue these placeholders are scattered across 90+ files, making onboarding error-prone and incomplete.

This register provides a single survey questionnaire that maps every variable to its description, best-practice guidance, example values, and all usage locations. Completing this register once propagates consistent values across the entire ISMS.

The register is referenced by all ISMS documents that contain variable placeholders. It complements the document control standard (CB_POL_L2_08) and supports the blueprint compliance process.

**Scope:** All organization-specific variable parameters used in Cyber-Security-Cookbook and ISMS-Handbook documents. Target audience: CISO (onboarding), client organization (data provider), auditors (completeness evidence).

### Key

| Term | Definition |
|---|---|
| Variable | A bracketed placeholder `[...]` in ISMS documents representing an organization-specific value |
| Canonical form | The standardized placeholder text used consistently across all documents |
| Domain | Thematic grouping of related variables (10 domains defined) |
| Usage | Document locations where the variable appears, format: `Path/File:Line` |

## 1 Organization Identity

16 variables, 41 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[Organization]` | Legal entity name for ISMS scope | Match scope statement and contracts | Muster GmbH | CB/L1_01:L20, CB/L1_01:L26, HB/CLS_4.3:L70 (10 files, 19x) |
| `[ISMS scope description]` | Boundary description of ISMS applicability | Align with Clause 4.3 scope statement | All information processing activities at main office | HB/CLS_4.3:L70, CB/L2_11:L123 (3 files, 8x) |
| `[sector classification and entity size assessment — documented in HB_CLS_4.2 or equivalent]` | NIS-2 classification reference | Document in context register | SME, IT services sector | HB/CLS_4.2 (1 file, 1x) |
| `[Address]` | Organization physical address | Match commercial register entry | Musterstrasse 1, 80333 Muenchen | HB/REG_CTX (1 file, 1x) |
| `[Full company name]` | Complete legal name including form | Match commercial register entry | Muster GmbH | HB/REG_CTX (1 file, 1x) |
| `[Legal form, e.g. GmbH, Ltd.]` | Legal entity type | Use official legal form | GmbH | HB/REG_CTX (1 file, 1x) |
| `[Core business in 1-2 sentences]` | Business purpose summary | Concise, auditor-friendly | Cloud-based SaaS platform for project management | HB/REG_CTX (1 file, 1x) |
| `[Number and locations]` | Sites count and geography | Include all IS-relevant locations | 2 sites: Munich (HQ), Berlin (dev office) | HB/REG_CTX (1 file, 1x) |
| `[Growth plans, market expansion, product strategy relevant to IS]` | Strategic business objectives | Focus on IS-relevant aspects | EU expansion, AI feature development | HB/REG_CTX (1 file, 1x) |
| `[Competitive situation, market dynamics]` | Market environment context | Identify IS-relevant market pressures | Competitive SaaS market, increasing compliance demands | HB/REG_CTX (1 file, 1x) |
| `[Relevant cyber threats, e.g. ransomware, phishing, supply chain attacks]` | Threat landscape overview | Align with BSI/ENISA threat reports | Ransomware, phishing, supply chain attacks | HB/REG_CTX (1 file, 1x) |
| `[Relevant trends, e.g. cloud migration, AI adoption]` | Technology trend context | Focus on IS-impacting trends | Cloud-first strategy, AI/ML adoption | HB/REG_CTX (1 file, 1x) |
| `[Core processes, e.g. software development, customer support, sales]` | Business process inventory | List processes within ISMS scope | Software development, customer support, sales | HB/REG_CTX (1 file, 1x) |
| `[IS-relevant personnel structure, e.g. development team, no dedicated security team]` | Human resources overview | Describe IS capability and gaps | 25 developers, no dedicated security team | HB/REG_CTX (1 file, 1x) |
| `[Exclusions with justification, e.g. "No physical manufacturing — purely digital business model"]` | Scope exclusions with rationale | Justify every exclusion per Clause 4.3 | No physical manufacturing — purely digital business model | HB/CLS_4.3 (1 file, 1x) |
| `[industry-specific regulations]` | Sector-specific regulatory context | Identify all applicable regulations | Digital Services Act, PCI DSS | HB/REG_CTX (1 file, 1x) |

## 2 Roles and Contacts

28 variables, 385 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[CISO]` | Document owner / responsible role | Role-based, not personal names | Chief Information Security Officer | CB/L2_08:L94, HB/CLS_5.3:L34, CB/PRC_03:L56 (38 files, 307x) |
| `[CEO]` | Top management role | Use the actual title from the org chart | Chief Executive Officer | HB/CLS_5.1:L26, CB/L2_08:L94 (6 files, 12x) |
| `[CTO]` | Technical management role | Use the actual title from the org chart | Chief Technology Officer | HB/CLS_5.3:L34, CB/L2_08:L95 (7 files, 11x) |
| `[IS-Coordinator]` | Operational IS implementation role | One person per site/unit | IS-Koordinator | HB/CLS_5.3:L71, CB/L2_07:L42 (5 files, 11x) |
| `[contact channel]` | IS reporting email/channel | Use role mailbox, not personal | isms@company.tld | CB/Emergency:L25, CB/L3_01:L45 (11 files, 20x) |
| `[Communications lead]` | Crisis communications coordinator | Designate before incidents occur | Head of Communications | CB/L3_08 (1 file, 2x) |
| `[IT operations lead]` | IT operations management role | Align with IT org chart | Head of IT Operations | CB/L3_08 (1 file, 2x) |
| `[Data Protection Officer]` | DPO role designation | Mandatory under GDPR if applicable | Datenschutzbeauftragter | CB/L2_14 (1 file, 1x) |
| `[AI ethics representative]` | AI governance role | Assign per AI usage policy | AI Ethics Lead | CB/L2_12 (1 file, 1x) |
| `[Legal representative]` | Legal counsel role | Corporate legal or external counsel | Head of Legal | CB/L2_14 (1 file, 1x) |
| `[Developers and engineers]` | Development team as audience | Match org chart team names | Development Team | CB/L2_12 (1 file, 1x) |
| `[Authority]` | Regulatory authority contact | Identify applicable authorities | BSI, BaFin | HB/REG_IP (1 file, 1x) |
| `[Local emergency number]` | Site-specific emergency contact | Verify and test regularly | 112 / +49 89 12345678 | CB/Emergency (1 file, 1x) |
| `[Phone number — CISO or ISC]` | Direct contact for incident reporting | Maintain current, test quarterly | +49 89 98765432 | CB/PRC_09 (1 file, 1x) |
| `[authorized personnel, e.g. IT administrators]` | Personnel authorized for specific operations | Restrict to minimum necessary | IT administrators | CB/L2_03 (1 file, 1x) |
| `[authorized roles, e.g. DevOps engineers with deploy rights]` | Deployment-authorized roles | Principle of least privilege | DevOps engineers with deploy rights | CB/L3_03 (1 file, 1x) |
| `[lead architect]` | Architecture decision authority | Single accountable person | Lead Software Architect | CB/L3_03 (1 file, 1x) |
| `[Change approver per CB_PRC_05]` | Change approval authority | Per change management process | CAB / CISO | CB/PRC_06 (1 file, 1x) |
| `[on-call personnel]` | After-hours availability | Define rotation schedule | On-call IT engineer | CB/L3_08 (1 file, 1x) |
| `[designated BCM coordinator]` | BCM process owner | Named individual with authority | BCM Coordinator | CB/L3_08 (1 file, 1x) |
| `[designated spokesperson]` | External crisis communications | Pre-authorized by management | CEO or Communications Lead | CB/L3_08 (1 file, 1x) |
| `[authorized signatory]` | Contract signing authority | Per corporate governance rules | CEO / Managing Director | CB/L3_08 (1 file, 1x) |
| `[CAB chair or CISO]` | Change advisory board chair | Defined in change management | CISO | CB/PRC_06 (1 file, 1x) |
| `[designated deputy, e.g. ISC or CTO]` | CISO deputy for incidents | Pre-designated, trained | IS-Coordinator | CB/PRC_09 (1 file, 1x) |
| `[CTO or designated IT lead]` | IT incident lead | Align with IT org chart | CTO | CB/PRC_09 (1 file, 1x) |
| `[DPO or legal counsel]` | Data breach legal advisor | Pre-identified contact | Data Protection Officer | CB/PRC_09 (1 file, 1x) |
| `[HR representative — if personnel involved]` | HR escalation contact | Named HR contact | Head of HR | CB/PRC_09 (1 file, 1x) |
| `[Other parties]` | Additional interested parties | Identify per stakeholder analysis | Insurance providers, shareholders | HB/REG_IP (1 file, 1x) |

## 3 Governance Frequencies

13 variables, 278 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[review cycle, e.g. Annual]` | Document review cadence in metadata | Annual unless risk profile requires shorter | Annual | All ISMS documents metadata line 8 (85 files, 217x) |
| `[frequency, e.g. Annual]` | Process execution frequency in body text | Align with risk appetite and capability | Quarterly | CB/L2_08:L100, HB/CLS_9.2:L47, CB/PRC_11:L36 (9 files, 42x) |
| `[Annually]` | Explicit annual frequency | Use when cadence is fixed at annual | Annually | CB/L2_05, HB/CLS_9.2 (3 files, 6x) |
| `[Number]` | Numeric frequency or count value | Define per context | 4 (quarterly) | CB/PRC_11 (1 file, 2x) |
| `[security cadence, e.g. Monthly]` | Security operations reporting cycle | Align with operational capability | Monthly | CB/PRC_11:L39 (1 file, 2x) |
| `[backup frequency, e.g. Daily]` | Backup execution schedule | Per BIA and data criticality | Daily | CB/TPL_16:L111 (1 file, 2x) |
| `[Semi-annually]` | Explicit semi-annual frequency | Use for higher-risk items | Semi-annually | HB/REG_BCM (1 file, 1x) |
| `[annual \| semi-annual — depending on risk classification]` | Risk-based review frequency | Determine per risk classification | Annual for standard, semi-annual for high-risk | CB/L2_05 (1 file, 1x) |
| `[annual \| semi-annual — depending on risk level]` | Risk-level-based review frequency | Align with risk register ratings | Semi-annual for critical suppliers | CB/L3_07 (1 file, 1x) |
| `[defined intervals — e.g., annually or semi-annually]` | Configurable review interval | Document rationale for chosen interval | Annually | CB/L2_07 (1 file, 1x) |
| `[2 consecutive periods]` | Escalation threshold count | Define per KPI governance | 2 consecutive periods | CB/PRC_11 (1 file, 1x) |
| `[3+ consecutive periods]` | Critical escalation threshold | Higher than standard threshold | 3+ consecutive periods | CB/PRC_11 (1 file, 1x) |
| `[number of periods, e.g. 2 consecutive quarters]` | Configurable escalation window | Align with reporting frequency | 2 consecutive quarters | CB/PRC_11 (1 file, 1x) |

## 4 Time Thresholds

31 variables, 91 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[RTO/MTD tier value]` | Recovery time per criticality tier | Define per BIA, validate in DR tests | 0-4 h (Tier 1) | CB/L2_06:L65, CB/L3_08:L69, HB/REG_BCM:L44 (6 files, 29x) |
| `[remediation deadline]` | Fix deadline per severity | Align with risk appetite | 30/60/90 days | CB/PRC_03:L56, CB/PRC_10:L69 (2 files, 12x) |
| `[notification deadline]` | Incident reporting deadline | Match regulatory requirements (NIS-2) | 24h / 72h / 1 month | CB/PRC_09:L132 (1 file, 6x) |
| `[retention period, e.g. 3 years]` | Document retention period | At least until next recertification | 3 years | CB/L2_08:L150 (1 file, 2x) |
| `[2 business days]` | Short processing deadline | For routine approvals | 2 business days | CB/PRC_06 (1 file, 4x) |
| `[5 business days]` | Standard processing deadline | For standard changes | 5 business days | CB/L2_08, CB/PRC_06, CB/PRC_14 (3 files, 3x) |
| `[1-3 business days]` | Expedited processing window | For urgent changes | 1-3 business days | CB/PRC_06 (1 file, 2x) |
| `[1h]` | One-hour response time | For critical incident initial response | 1 hour | CB/PRC_09 (1 file, 2x) |
| `[timeframe, e.g. 5 business days]` | Configurable processing deadline | Scale to organizational capacity | 5 business days | CB/L2_07 (1 file, 2x) |
| `[audit retention period]` | Audit record retention | Match regulatory minimum + 1 cycle | 3 years | HB/AUD_INT (1 file, 1x) |
| `[audit retention period, e.g. 3 years]` | Audit record retention with example | At least one certification cycle | 3 years | HB/AUD_SUP (1 file, 1x) |
| `[retention period, e.g. 3 years]` | General retention period with example | Align with legal minimums | 3 years | CB/L2_08 (1 file, 1x) |
| `[timeframe, e.g. 4 hours]` | Short response timeframe | For critical incident escalation | 4 hours | CB/L2_13 (1 file, 1x) |
| `[post-employment period]` | NDA validity after termination | Minimum 1 year, align with contracts | 2 years | CB/L2_10 (1 file, 1x) |
| `[24-72 hours — organization-specific]` | NIS-2 early warning window | Match NIS-2 Article 23 requirements | 24 hours | CB/L2_13 (1 file, 1x) |
| `[1-24 hours — organization-specific]` | Internal escalation window | Per incident severity matrix | 4 hours for critical | CB/L2_13 (1 file, 1x) |
| `[5-10 business days]` | Extended processing window | For complex investigations | 10 business days | CB/PRC_09 (1 file, 1x) |
| `[timeframe, e.g. one measurement cycle after implementation]` | Effectiveness verification window | Align with KPI measurement cycle | One quarter after implementation | CB/PRC_11 (1 file, 1x) |
| `[30 days — or as agreed with certification body]` | NC corrective action deadline (audit) | Agree with auditor during audit | 30 days | HB/AUD_INT (1 file, 1x) |
| `[90 days]` | Extended corrective action deadline | For systemic changes | 90 days | CB/PRC_14 (1 file, 1x) |
| `[30-60 days]` | Standard corrective action window | For major nonconformities | 45 days | CB/PRC_14 (1 file, 1x) |
| `[60-90 days]` | Extended corrective action window | For minor nonconformities | 60 days | CB/PRC_14 (1 file, 1x) |
| `[Quarterly for Tier 1, semi-annually for Tier 2]` | Tiered DR test frequency | Per BIA criticality tier | Quarterly for Tier 1 | CB/L3_08 (1 file, 1x) |
| `[every 30 minutes for Tier 1, every 2 hours for Tier 2]` | Crisis status update frequency | Per incident severity | Every 30 minutes for critical | CB/L3_08 (1 file, 1x) |
| `[4 hours]` | Four-hour response threshold | For significant incidents | 4 hours | CB/PRC_06 (1 file, 1x) |
| `[10 business days]` | Extended processing deadline | For complex changes | 10 business days | CB/PRC_06 (1 file, 1x) |
| `[Immediately — max 1h]` | Immediate response requirement | For critical security incidents | Immediately — max 1h | CB/PRC_09 (1 file, 1x) |
| `[Within 4h]` | Four-hour escalation deadline | For high-severity incidents | Within 4h | CB/PRC_09 (1 file, 1x) |
| `[Within 24h]` | Twenty-four-hour reporting deadline | For significant incidents | Within 24h | CB/PRC_09 (1 file, 1x) |
| `[Within 72h]` | Seventy-two-hour reporting deadline | For standard incidents | Within 72h | CB/PRC_09 (1 file, 1x) |
| `[maximum acceptable data loss]` | RPO per criticality tier | Define per BIA, validate in tests | 1h (Tier 1), 24h (Tier 2) | HB/REG_BCM (1 file, 1x) |

## 5 Risk and Financial Thresholds

8 variables, 21 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[financial impact threshold]` | Monetary damage scale per severity | Calibrate to organization size and revenue | 5k / 50k / 250k EUR | CB/L2_11:L204-207 (1 file, 8x) |
| `[threshold, e.g. 10 %]` | Percentage deviation threshold | Define per KPI context | 10 % | CB/PRC_11 (1 file, 4x) |
| `[amount or percentage — calibrated to organization scale]` | Scalable impact measure | Adjust to organization revenue | 5 % of annual revenue | CB/L2_11 (1 file, 3x) |
| `[target value, e.g. >= 95 %]` | High-confidence target KPI | Set achievable but ambitious targets | >= 95 % | CB/PRC_11:L39 (1 file, 2x) |
| `[target value, e.g. <= 4 h for critical incidents]` | Incident response time target | Align with SLA and capability | <= 4 h for critical incidents | CB/PRC_11:L36 (1 file, 1x) |
| `[target value, e.g. >= 90 %]` | Standard target KPI | Set per organizational maturity | >= 90 % | CB/PRC_11:L37 (1 file, 1x) |
| `[target value, e.g. >= 80 %]` | Baseline target KPI | Minimum acceptable performance | >= 80 % | CB/PRC_11:L40 (1 file, 1x) |
| `[target value, e.g. 100 %]` | Full compliance target | For mandatory requirements | 100 % | CB/PRC_11:L38 (1 file, 1x) |

## 6 Communication and Channels

5 variables, 8 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[reporting channel or SLA detail]` | IS reporting channel or SLA specification | Document and test regularly | isms@company.tld / Jira Service Desk | CB/L2_05, CB/PRC_11, HB/CLS_7.4 (3 files, 4x) |
| `[incident reporting channel]` | Dedicated incident intake channel | 24/7 accessible, monitored | incidents@company.tld | CB/L2_13 (1 file, 1x) |
| `[crisis communication channel, e.g. dedicated conference bridge or messaging group]` | Crisis team communication | Pre-configured, tested quarterly | Signal group "Crisis Team" | CB/L3_08 (1 file, 1x) |
| `[on-call schedule or equivalent arrangement]` | After-hours contact procedure | Documented and maintained | On-call rotation via PagerDuty | CB/PRC_09 (1 file, 1x) |
| `[incident documentation repository]` | Incident record storage location | Centralized, access-controlled | GitLab incident issues | CB/PRC_09 (1 file, 1x) |

## 7 Tooling and Technology

16 variables, 17 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[CD tool]` | Continuous deployment tool | Integrate with CI pipeline | ArgoCD, GitLab CD | CB/L3_03 (1 file, 2x) |
| `[SIEM solution, e.g. Google Chronicle, Splunk]` | Security event monitoring platform | Centralized log correlation | Google Chronicle | CB/L2_03 (1 file, 1x) |
| `[DLP solution, e.g. Google Workspace DLP, Microsoft Purview]` | Data loss prevention tool | Cover email, cloud storage, endpoints | Microsoft Purview | CB/L2_02 (1 file, 1x) |
| `[Web filtering solution, e.g. DNS-based filtering, proxy-based filtering]` | Web access control | Layer defense (DNS + proxy) | Cloudflare Gateway | CB/L2_03 (1 file, 1x) |
| `[automatic screen lock after X minutes of inactivity]` | Screen lock timeout | Maximum 5 minutes for endpoints | 5 minutes | CB/L3_01 (1 file, 1x) |
| `[code review tool, e.g. GitLab Merge Requests]` | Code review platform | Mandatory for all production code | GitLab Merge Requests | CB/L3_03 (1 file, 1x) |
| `[version control system, e.g. GitLab]` | Source code management | Single system for all code | GitLab | CB/L3_03 (1 file, 1x) |
| `[CI system, e.g. GitLab CI]` | Continuous integration platform | Automated build and test | GitLab CI | CB/L3_03 (1 file, 1x) |
| `[test framework]` | Automated testing toolchain | Cover unit, integration, security tests | Jest + OWASP ZAP | CB/L3_03 (1 file, 1x) |
| `[DAST tool]` | Dynamic application security testing | Run against staging environment | OWASP ZAP | CB/L3_03 (1 file, 1x) |
| `[central configuration repository, e.g. GitLab, Confluence]` | Configuration documentation location | Version-controlled, access-restricted | GitLab wiki | CB/L3_06 (1 file, 1x) |
| `[change management tool]` | Change request tracking system | Integrated with incident management | GitLab Issues | CB/PRC_06 (1 file, 1x) |
| `[Ticketing system, e.g. GitLab issue with incident label]` | Incident tracking system | Structured workflow with labels | GitLab issue with incident label | CB/PRC_09 (1 file, 1x) |
| `[CERT advisories, e.g. BSI, ENISA]` | Threat intelligence sources | Subscribe to relevant CERTs | BSI CERT-Bund, ENISA | CB/PRC_07 (1 file, 1x) |
| `[Technical tools and systems for ISMS operation]` | ISMS tool stack overview | Document all IS-relevant tools | GitLab, Google Workspace, Cloudflare | HB/CLS_7.1 (1 file, 1x) |
| `[tool stack]` | Monitoring tool inventory | List all operational monitoring tools | Prometheus, Grafana, PagerDuty | CB/PRC_11 (1 file, 1x) |

## 8 Supplier and Cloud

3 variables, 3 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[failover locations, network connectivity, and cloud region assignments]` | Cloud DR topology | Document per provider | eu-west-1 (primary), eu-central-1 (failover) | CB/L3_08 (1 file, 1x) |
| `[Provider and services, e.g. AWS, Microsoft 365]` | Cloud service inventory summary | List all IS-relevant services | AWS (IaaS), Microsoft 365 (SaaS) | HB/REG_CTX (1 file, 1x) |
| `[provider]` | Generic provider reference | Specify per context | AWS | HB/REG_CTX (1 file, 1x) |

## 9 BCM / Assets / Processes

3 variables, 3 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[annually \| semi-annually — depending on criticality tier]` | Tiered DR test frequency | Per BIA criticality | Semi-annually for Tier 1 | CB/L3_08 (1 file, 1x) |
| `[Annually for Tier 1 — if feasible]` | Full DR exercise frequency | Resource-dependent | Annually for critical systems | CB/L3_08 (1 file, 1x) |
| `[Core application, e.g. SaaS platform]` | Primary business application | Central revenue-generating system | SaaS project management platform | HB/REG_CTX (1 file, 1x) |

## 10 Regulatory and Legal

3 variables, 3 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[data protection authority]` | Applicable DPA identification | Per GDPR Article 51 | Bayerisches Landesamt fuer Datenschutzaufsicht | CB/L2_14 (1 file, 1x) |
| `[competent data protection authority, e.g. Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)]` | DPA with example | Verify jurisdiction | BayLDA | CB/PRC_09 (1 file, 1x) |
| `[Data protection authority, BSI, tax authorities]` | Regulatory authority list | Identify all applicable authorities | BayLDA, BSI, Finanzamt | HB/REG_IP (1 file, 1x) |

## See also

- CB_POL_L2_08 — Document Control Standard (metadata, review cycle, versioning)
- HB_CLS_7.5 — Documented Information (requirements for documented information)
- INDEX.md — Structural data and file inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.001 | 2026-02-20 | Claude (AI) | Quality cleanup — removed 158 non-core variables (register row fields, audit-cycle fields, illustrative examples, process descriptions, duplicates); reduced from 284 to 126 variables across 10 domains |
| 00.01.000 | 2026-02-20 | Claude (AI) | Initial creation — 284 variables across 12 domains |
