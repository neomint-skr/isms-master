> **Document ID:** HB_REG_VAR_01-Variable-Parameters
> **Version:** 00.01.000
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** ISO 27001:2022 Clause 7.5
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Variable Parameters Register

## Summary

Blueprint ISMS documents use bracketed placeholders for organization-specific values that must be resolved before certification. This register catalogues all 284 variable parameters across 12 domains with descriptions, best-practice guidance, example values, and usage locations. It serves as the central survey questionnaire for client onboarding — every placeholder is traced to its definition and all documents where it appears. Without completing this register, deployed documents contain unresolved placeholders that fail audit evidence requirements.

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
| Domain | Thematic grouping of related variables (12 domains defined) |
| Usage | Document locations where the variable appears, format: `Path/File:Line` |
| Register row field | A per-entry variable in a register table (e.g., risk description) — filled per row, not once globally |

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

36 variables, 406 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[CISO]` | Document owner / responsible role | Role-based, not personal names | Chief Information Security Officer | CB/L2_08:L94, HB/CLS_5.3:L34, CB/PRC_03:L56 (38 files, 307x) |
| `[CEO]` | Top management role | Use the actual title from the org chart | Chief Executive Officer | HB/CLS_5.1:L26, CB/L2_08:L94 (6 files, 12x) |
| `[CTO]` | Technical management role | Use the actual title from the org chart | Chief Technology Officer | HB/CLS_5.3:L34, CB/L2_08:L95 (7 files, 11x) |
| `[IS-Coordinator]` | Operational IS implementation role | One person per site/unit | IS-Koordinator | HB/CLS_5.3:L71, CB/L2_07:L42 (5 files, 11x) |
| `[Role]` | Generic role placeholder in allocation tables | Use role names from org chart | IT Operations Manager | CB/L1_01:L48, HB/MGT_01:L32 (4 files, 13x) |
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
| `[Change owner]` | Change request owner | Requester or assigned owner | Application Owner | CB/PRC_06 (1 file, 1x) |
| `[on-call personnel]` | After-hours availability | Define rotation schedule | On-call IT engineer | CB/L3_08 (1 file, 1x) |
| `[designated BCM coordinator]` | BCM process owner | Named individual with authority | BCM Coordinator | CB/L3_08 (1 file, 1x) |
| `[designated spokesperson]` | External crisis communications | Pre-authorized by management | CEO or Communications Lead | CB/L3_08 (1 file, 1x) |
| `[authorized signatory]` | Contract signing authority | Per corporate governance rules | CEO / Managing Director | CB/L3_08 (1 file, 1x) |
| `[Affected asset owners]` | Owners of impacted assets | Per asset register | Application Owner, Data Owner | CB/PRC_06 (1 file, 1x) |
| `[CAB chair or CISO]` | Change advisory board chair | Defined in change management | CISO | CB/PRC_06 (1 file, 1x) |
| `[designated deputy, e.g. ISC or CTO]` | CISO deputy for incidents | Pre-designated, trained | IS-Coordinator | CB/PRC_09 (1 file, 1x) |
| `[CTO or designated IT lead]` | IT incident lead | Align with IT org chart | CTO | CB/PRC_09 (1 file, 1x) |
| `[DPO or legal counsel]` | Data breach legal advisor | Pre-identified contact | Data Protection Officer | CB/PRC_09 (1 file, 1x) |
| `[HR representative — if personnel involved]` | HR escalation contact | Named HR contact | Head of HR | CB/PRC_09 (1 file, 1x) |
| `[Additional specialists as needed]` | Ad-hoc incident team members | Define criteria for activation | Forensics expert, external counsel | CB/PRC_09 (1 file, 1x) |
| `[Named owner for each corrective action]` | Corrective action assignee | Named individual, not team | IS-Coordinator | CB/PRC_14 (1 file, 1x) |
| `[Name, role]` | Individual identification with role | Use for audit evidence | Dr. Mueller, CISO | HB/AUD_INT (1 file, 1x) |
| `[Names, roles]` | Team member identification | List all team members | Mueller (CISO), Schmidt (ISC) | HB/AUD_INT (1 file, 1x) |
| `[Auditor]` | Internal audit responsible | Must be independent of audited area | External ISB | HB/AUD_INT (1 file, 1x) |
| `[Other parties]` | Additional interested parties | Identify per stakeholder analysis | Insurance providers, shareholders | HB/REG_IP (1 file, 1x) |
| `[Responsible role]` | Role accountable for an objective | Per RACI matrix | CISO | HB/REG_OBJ (1 file, 1x) |

## 3 Governance Frequencies

14 variables, 279 occurrences across the ISMS.

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
| `[month]` | Calendar month reference | Use for scheduling | March (before Q1 MR) | HB/REG_OBJ (1 file, 1x) |

## 4 Time Thresholds

34 variables, 94 occurrences across the ISMS.

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
| `[4h]` | Four-hour shorthand | For incident timelines | 4h | CB/PRC_09 (1 file, 1x) |
| `[72h]` | Seventy-two-hour shorthand | NIS-2 full notification deadline | 72h | CB/PRC_09 (1 file, 1x) |
| `[Immediately — max 1h]` | Immediate response requirement | For critical security incidents | Immediately — max 1h | CB/PRC_09 (1 file, 1x) |
| `[Within 4h]` | Four-hour escalation deadline | For high-severity incidents | Within 4h | CB/PRC_09 (1 file, 1x) |
| `[Within 24h]` | Twenty-four-hour reporting deadline | For significant incidents | Within 24h | CB/PRC_09 (1 file, 1x) |
| `[Within 72h]` | Seventy-two-hour reporting deadline | For standard incidents | Within 72h | CB/PRC_09 (1 file, 1x) |
| `[maximum acceptable data loss]` | RPO per criticality tier | Define per BIA, validate in tests | 1h (Tier 1), 24h (Tier 2) | HB/REG_BCM (1 file, 1x) |
| `[e.g. patch rate >= 95% within 30 days]` | Patch compliance KPI with timeline | Align with vulnerability management SLA | Patch rate >= 95% within 30 days | HB/REG_OBJ (1 file, 1x) |

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

7 variables, 10 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[reporting channel or SLA detail]` | IS reporting channel or SLA specification | Document and test regularly | isms@company.tld / Jira Service Desk | CB/L2_05, CB/PRC_11, HB/CLS_7.4 (3 files, 4x) |
| `[incident reporting channel]` | Dedicated incident intake channel | 24/7 accessible, monitored | incidents@company.tld | CB/L2_13 (1 file, 1x) |
| `[crisis communication channel, e.g. dedicated conference bridge or messaging group]` | Crisis team communication | Pre-configured, tested quarterly | Signal group "Crisis Team" | CB/L3_08 (1 file, 1x) |
| `[crisis communication initiated]` | Crisis comms activation trigger | Define activation criteria | BCM coordinator activates crisis bridge | CB/PRC_09 (1 file, 1x) |
| `[on-call schedule or equivalent arrangement]` | After-hours contact procedure | Documented and maintained | On-call rotation via PagerDuty | CB/PRC_09 (1 file, 1x) |
| `[incident documentation repository]` | Incident record storage location | Centralized, access-controlled | GitLab incident issues | CB/PRC_09 (1 file, 1x) |
| `[awareness briefings, team meetings, or dedicated Lessons Learned sessions]` | Knowledge dissemination channels | Multiple channels for reach | Team meetings + quarterly awareness sessions | CB/PRC_09 (1 file, 1x) |

## 7 Tooling and Technology

17 variables, 18 occurrences across the ISMS.

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
| `[e.g. reduction of mean incident response time]` | KPI improvement goal description | Specific, measurable | Reduce MTTR from 8h to 4h | HB/REG_OBJ (1 file, 1x) |

## 8 Supplier and Cloud

7 variables, 7 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[Cloud infrastructure provider, payment service provider]` | Critical supplier category examples | Identify by data access and criticality | AWS, Stripe | CB/L2_05 (1 file, 1x) |
| `[Office supplier, general service providers]` | Standard supplier category examples | Low-risk, no sensitive data access | Office supplies, cleaning service | CB/L2_05 (1 file, 1x) |
| `[failover locations, network connectivity, and cloud region assignments]` | Cloud DR topology | Document per provider | eu-west-1 (primary), eu-central-1 (failover) | CB/L3_08 (1 file, 1x) |
| `[Provider and services, e.g. AWS, Microsoft 365]` | Cloud service inventory summary | List all IS-relevant services | AWS (IaaS), Microsoft 365 (SaaS) | HB/REG_CTX (1 file, 1x) |
| `[provider]` | Generic provider reference | Specify per context | AWS | HB/REG_CTX (1 file, 1x) |
| `[Cloud providers, service providers]` | Supplier type grouping | Use for stakeholder mapping | AWS, Google, Salesforce | HB/REG_IP (1 file, 1x) |
| `[Provider name]` | Specific provider identification | Match contract name | Amazon Web Services EMEA SARL | HB/REG_SUP (1 file, 1x) |

## 9 BCM / Assets / Processes

16 variables, 18 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[Archiving, reporting]` | Low-criticality process examples | Tier 3/4 classification | Archiving, internal reporting | CB/L2_06, HB/REG_BCM (2 files, 2x) |
| `[asset]` | Generic asset reference | Use asset register ID | SRV-PROD-01 | HB/REG_RR (2 files, 2x) |
| `[Production systems, payment processing, customer systems]` | Tier 1 critical system examples | Per BIA results | Production database, payment gateway | CB/L2_06 (1 file, 1x) |
| `[Test environments, internal documentation]` | Tier 4 low-priority examples | Non-critical systems | Staging environment, internal wiki | CB/L2_06 (1 file, 1x) |
| `[annually \| semi-annually — depending on criticality tier]` | Tiered DR test frequency | Per BIA criticality | Semi-annually for Tier 1 | CB/L3_08 (1 file, 1x) |
| `[Annually for Tier 1 — if feasible]` | Full DR exercise frequency | Resource-dependent | Annually for critical systems | CB/L3_08 (1 file, 1x) |
| `[Web application frontends, load balancers, reverse proxies]` | Network perimeter assets | Per network architecture | Web application firewall, CDN | CB/L3_06 (1 file, 1x) |
| `[Application servers, database clusters]` | Core infrastructure assets | Per IT asset inventory | Kubernetes cluster, PostgreSQL | CB/L3_06 (1 file, 1x) |
| `[SC-\<Asset-ID\>-0001]` | Security control ID format | Sequential per asset | SC-SRV-001-0001 | HB/REG_SM (1 file, 1x) |
| `[Core application, e.g. SaaS platform]` | Primary business application | Central revenue-generating system | SaaS project management platform | HB/REG_CTX (1 file, 1x) |
| `[Production systems, payment processing]` | Tier 1 BCM system examples | Per BIA tier 1 | Payment gateway, production DB | HB/REG_BCM (1 file, 1x) |
| `[Test environments]` | Low-priority BCM systems | Per BIA tier 4 | QA environment | HB/REG_BCM (1 file, 1x) |
| `[Service name]` | Service identification in registers | Match service catalogue | Customer Portal | HB/REG_BCM (1 file, 1x) |
| `[Tier]` | BCM criticality tier designation | Per BIA assessment | 1 (Critical) | HB/REG_BCM (1 file, 1x) |
| `[Q]` | Quarter reference for BCM testing | Calendar quarter | Q2 | HB/REG_BCM (1 file, 1x) |
| `[N]` | Numeric count placeholder | Context-dependent | 12 | HB/REG_BCM (1 file, 1x) |

## 10 Regulatory and Legal

4 variables, 4 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[data protection authority]` | Applicable DPA identification | Per GDPR Article 51 | Bayerisches Landesamt fuer Datenschutzaufsicht | CB/L2_14 (1 file, 1x) |
| `[competent data protection authority, e.g. Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)]` | DPA with example | Verify jurisdiction | BayLDA | CB/PRC_09 (1 file, 1x) |
| `[The organization's AI products shall be classified according to the EU AI Act risk categories. The classification shall be documented and reviewed annually or upon significant changes to the AI system.]` | AI Act classification requirement | Classify per EU AI Act Annex III | High-risk AI system (hiring decisions) | CB/L2_12 (1 file, 1x) |
| `[Data protection authority, BSI, tax authorities]` | Regulatory authority list | Identify all applicable authorities | BayLDA, BSI, Finanzamt | HB/REG_IP (1 file, 1x) |

## 11 Audit

8 variables, 11 occurrences across the ISMS.

| Variable | Description | Best Practice | Example | Usage |
|---|---|---|---|---|
| `[YYYY]` | Audit year reference | Current calendar year | 2026 | HB/AUD_INT, HB/AUD_SUP (3 files, 4x) |
| `[YYYY-MM]` | Audit month reference | Planned audit period | 2026-06 | HB/AUD_INT (1 file, 1x) |
| `[YYYY-Q]` | Audit quarter reference | Quarterly cycle designation | 2026-Q2 | HB/AUD_SUP (1 file, 1x) |
| `[2-3 sentence summary of overall ISMS maturity and key themes.]` | Audit executive summary | Concise, actionable | ISMS shows improving maturity with strong access controls. Key gaps in BCM testing. | HB/AUD_INT (1 file, 1x) |
| `[Areas where the ISMS performs well or has improved since the last audit]` | Audit positive findings | Evidence-based observations | Access management fully implemented, awareness training 95% completion | HB/AUD_INT (1 file, 1x) |
| `[Prioritized strategic recommendations beyond individual findings]` | Audit strategic recommendations | Actionable, prioritized | 1. Automate vulnerability scanning, 2. Establish SOC capability | HB/AUD_INT (1 file, 1x) |
| `[reference to HB_AUD_INT_01-Audit-Programme]` | Audit programme cross-reference | Link to current programme | HB_AUD_INT_01, Audit cycle 2026 | HB/AUD_INT (1 file, 1x) |
| `[date or reference to next audit cycle]` | Next audit scheduling | Align with audit programme | 2026-Q4 per HB_AUD_INT_01 | HB/AUD_INT (1 file, 1x) |

## 12 Register Row Fields

This domain covers per-row fill-in fields in ISMS registers. Unlike global variables (filled once per organization), these are completed for each register entry individually.

117 variables, 689 occurrences across the ISMS.

| Variable | Description | Register | Rows |
|---|---|---|---|
| `[option]` | Decision option (baseline/risk treatment/legal-contractual) | SoA (HB_REG_SOA) | 87 |
| `[gap]` | Competence gap description | Competence (HB_REG_COMP) | 80 |
| `[value]` | Current evidence/state | Competence (HB_REG_COMP) | 80 |
| `[YYYY-MM-DD]` | Date field (generic) | Multiple registers | 27 |
| `[rationale]` | Justification for decision | SoA (HB_REG_SOA) | 12 |
| `[0-3]` | Maturity scale rating | Competence (HB_REG_COMP) | 8 |
| `[Target value]` | Target state or metric | Competence (HB_REG_COMP), IS Objectives (HB_REG_OBJ) | 7 |
| `[count]` | Numeric count field | Competence (HB_REG_COMP) | 7 |
| `[Objective description]` | IS objective text | IS Objectives (HB_REG_OBJ) | 6 |
| `[KPI or metric]` | Measurement indicator | IS Objectives (HB_REG_OBJ) | 6 |
| `[1-4]` | Four-level scale rating | Risk Register (HB_REG_RR), Protection Requirements | 6 |
| `[approval authority or approved list]` | Approval reference | SoA (HB_REG_SOA), Multiple | 5 |
| `[Finding description]` | Audit finding text | NC Register (HB_REG_NC), Audit | 5 |
| `[Topic]` | Meeting or training topic | Meeting Log (HB_MGT_02) | 4 |
| `[Supplier name]` | Supplier identification | Supplier Register (HB_REG_SUP) | 4 |
| `[SM-####]` | Security measure ID | Security Measures (HB_REG_SM) | 4 |
| `[SM-0001]` | First security measure reference | Security Measures (HB_REG_SM) | 4 |
| `[Title]` | Generic title field | Meeting Log (HB_MGT_02) | 4 |
| `[Preventive]` | Control type classification | Security Measures (HB_REG_SM) | 4 |
| `[Description]` | Generic description field | Security Measures (HB_REG_SM) | 4 |
| `[Planned]` | Implementation status | Security Measures (HB_REG_SM) | 4 |
| `[Link]` | Reference link | Security Measures (HB_REG_SM) | 4 |
| `[SC-IDs]` | Security control ID references | Security Measures (HB_REG_SM) | 4 |
| `[Name]` | Generic name field | Security Measures (HB_REG_SM) | 4 |
| `[certifications, training records]` | Evidence documentation | Competence (HB_REG_COMP) | 4 |
| `[SC-0001]` | First security control reference | Security Measures (HB_REG_SM) | 3 |
| `[threat]` | Threat description | Risk Register (HB_REG_RR) | 2 |
| `[vulnerability]` | Vulnerability description | Risk Register (HB_REG_RR) | 2 |
| `[impact on affected protection goals]` | CIA impact assessment | Risk Register (HB_REG_RR) | 2 |
| `[Additional KPIs depending on supplier type and criticality]` | Supplier-specific KPIs | Supplier Register (HB_REG_SUP), IS Objectives | 2 |
| `[= max(scenarios 1-6) — do not select manually]` | Calculated maximum risk | Risk Register (HB_REG_RR) | 2 |
| `[Asset-ID]` | Asset identification code | Asset Register (HB_REG_AST) | 2 |
| `[Asset Name]` | Asset human-readable name | Asset Register (HB_REG_AST) | 2 |
| `[Layer]` | Asset architecture layer | Asset Register (HB_REG_AST) | 2 |
| `[Service description]` | Service detail text | Supplier Register (HB_REG_SUP) | 2 |
| `[Customer segments]` | Customer group classification | Context Register (HB_REG_CTX) | 2 |
| `[Result]` | Assessment or review result | Multiple registers | 2 |
| `[Abbreviation]` | Short form identifier | Multiple registers | 2 |
| `[domain responsible]` | Domain accountability assignment | Supplier Register (HB_REG_SUP) | 2 |
| `[Audit Body]` | External audit organization | Audit Programme (HB_AUD_INT) | 2 |
| `[Audit Type]` | Audit classification | Audit Programme (HB_AUD_INT) | 2 |
| `[NC-001]` | Nonconformity ID | NC Register (HB_REG_NC) | 2 |
| `[Corrective action or implemented measure]` | Corrective action description | NC Register (HB_REG_NC) | 2 |
| `[ISO clause or Annex A reference]` | ISO reference for findings | NC Register (HB_REG_NC) | 2 |
| `[Key management responsibility, e.g. CTO, IT Security Lead]` | Crypto key custodian | Security Measures (HB_REG_SM) | 1 |
| `[< 1 hour — organization-specific]` | Sub-hour response tier | BCM Register (HB_REG_BCM) | 1 |
| `[Conduct risk assessment per risk management process CB_PRC_07]` | Risk assessment reference action | Supplier Register (HB_REG_SUP) | 1 |
| `[at contract renewal]` | Supplier review trigger | Supplier Register (HB_REG_SUP) | 1 |
| `[number, e.g. 5]` | Configurable numeric field | Competence (HB_REG_COMP) | 1 |
| `[Document name]` | Document reference in registers | NC Register (HB_REG_NC) | 1 |
| `[Recommended action]` | Suggested remediation | NC Register (HB_REG_NC) | 1 |
| `[date or reference to next audit cycle]` | Next review scheduling | Audit Programme (HB_AUD_INT) | 1 |
| `[information type IDs from reference table]` | Data classification reference | Asset Register (HB_REG_AST) | 1 |
| `[= Derived C from assessment above — do not fill manually]` | Calculated confidentiality | Protection Requirements | 1 |
| `[= Derived I from assessment above — do not fill manually]` | Calculated integrity | Protection Requirements | 1 |
| `[= Derived A from assessment above — do not fill manually]` | Calculated availability | Protection Requirements | 1 |
| `[What exactly deviates from the requirement]` | Exception deviation description | Exceptions (HB_REG_EXC) | 1 |
| `[Why the deviation is unavoidable]` | Exception justification | Exceptions (HB_REG_EXC) | 1 |
| `[Start date]` | Exception validity start | Exceptions (HB_REG_EXC) | 1 |
| `[End date]` | Exception validity end | Exceptions (HB_REG_EXC) | 1 |
| `[What could happen as a consequence of the deviation]` | Exception risk description | Exceptions (HB_REG_EXC) | 1 |
| `[Measures to reduce the risk during the exception period]` | Exception compensating controls | Exceptions (HB_REG_EXC) | 1 |
| `[e.g. PIT-003]` | Protection requirement assessment ID | Asset Register (HB_REG_AST) | 1 |
| `[e.g. Production Server Cluster]` | Asset name example | Asset Register (HB_REG_AST) | 1 |
| `[e.g. Physical IT Systems]` | Asset layer example | Asset Register (HB_REG_AST) | 1 |
| `[G 0.x]` | BSI threat catalogue reference | Risk Register (HB_REG_RR) | 1 |
| `[Layer-Vxx]` | Layer-specific vulnerability ID | Risk Register (HB_REG_RR) | 1 |
| `[If ... occurs and ... exists, this could lead to ... for ...]` | Risk scenario sentence template | Risk Register (HB_REG_RR) | 1 |
| `[L x I]` | Gross risk calculation (Likelihood x Impact) | Risk Register (HB_REG_RR) | 1 |
| `[SM-####, SM-####]` | Multiple security measure references | Risk Register (HB_REG_RR) | 1 |
| `[Net L x Net I]` | Net risk calculation | Risk Register (HB_REG_RR) | 1 |
| `[ID]` | Generic identifier field | Multiple registers | 1 |
| `[Reason for exclusion]` | SoA exclusion rationale | SoA (HB_REG_SOA) | 1 |
| `[e.g. PIT-V01]` | Vulnerability assessment ID | Risk Register (HB_REG_RR) | 1 |
| `[Vulnerability description]` | Technical vulnerability detail | Risk Register (HB_REG_RR) | 1 |
| `[YYYY-MM-DD if unknown, else —]` | Conditional date field | Risk Register (HB_REG_RR) | 1 |
| `[Evidence or rationale]` | Supporting evidence reference | Multiple registers | 1 |
| `[HB_REG_NC reference]` | NC register cross-reference | Audit Programme (HB_AUD_INT) | 1 |
| `[risk owner]` | Risk accountability assignment | Risk Register (HB_REG_RR) | 1 |
| `[rationale for acceptance]` | Risk acceptance justification | Risk Register (HB_REG_RR) | 1 |
| `[risk description]` | Risk narrative text | Risk Register (HB_REG_RR) | 1 |
| `[A.x.x]` | Annex A control reference | SoA (HB_REG_SOA) | 1 |
| `[00.01.000]` | Version number field | SoA (HB_REG_SOA) | 1 |
| `[Yes — residual risks documented in REG_RR]` | Risk acceptance confirmation | SoA (HB_REG_SOA) | 1 |
| `[A.5.x]` | Annex A section 5 reference | SoA (HB_REG_SOA) | 1 |
| `[A.6.x]` | Annex A section 6 reference | SoA (HB_REG_SOA) | 1 |
| `[A.7.x]` | Annex A section 7 reference | SoA (HB_REG_SOA) | 1 |
| `[A.8.x]` | Annex A section 8 reference | SoA (HB_REG_SOA) | 1 |
| `[Summary]` | Summary text field | SoA (HB_REG_SOA) | 1 |
| `[at least hourly]` | Minimum backup frequency tier 1 | BCM Register (HB_REG_BCM) | 1 |
| `[at least daily]` | Minimum backup frequency tier 2 | BCM Register (HB_REG_BCM) | 1 |
| `[at least weekly]` | Minimum backup frequency tier 3 | BCM Register (HB_REG_BCM) | 1 |
| `[as needed]` | On-demand backup frequency tier 4 | BCM Register (HB_REG_BCM) | 1 |
| `[SUP-001]` | First supplier register entry ID | Supplier Register (HB_REG_SUP) | 1 |
| `[CLD-001]` | First cloud service entry ID | Supplier Register (HB_REG_SUP) | 1 |
| `[YYYY-MM-DD or —]` | Optional date field | Supplier Register (HB_REG_SUP) | 1 |
| `[Summary of findings or —]` | Optional findings summary | Supplier Register (HB_REG_SUP) | 1 |
| `[OBJ-S01]` | Strategic objective ID | IS Objectives (HB_REG_OBJ) | 1 |
| `[Strategic objective]` | Strategic objective description | IS Objectives (HB_REG_OBJ) | 1 |
| `[KPI description]` | KPI detail text | IS Objectives (HB_REG_OBJ) | 1 |
| `[Actual value]` | Current measured value | IS Objectives (HB_REG_OBJ) | 1 |
| `[actions with target dates]` | Planned improvement actions | IS Objectives (HB_REG_OBJ) | 1 |
| `[OFI-001]` | Opportunity for improvement ID | Improvement Roadmap (HB_MGT_01) | 1 |
| `[Improvement measure or implemented change]` | Improvement action description | Improvement Roadmap (HB_MGT_01) | 1 |
| `[OBS-001]` | Observation ID | Audit Programme (HB_AUD_INT) | 1 |
| `[Response or implemented measure]` | Observation response | Audit Programme (HB_AUD_INT) | 1 |
| `[G 0.x — threat title]` | BSI threat with title | Risk Register (HB_REG_RR) | 1 |
| `[V-ID]` | Vulnerability identifier | Risk Register (HB_REG_RR) | 1 |
| `[IMP-001]` | Improvement theme ID | Improvement Roadmap (HB_MGT_01) | 1 |
| `[Theme description]` | Improvement theme text | Improvement Roadmap (HB_MGT_01) | 1 |
| `[participant list]` | Meeting attendee list | Meeting Log (HB_MGT_02) | 1 |
| `[key decisions]` | Meeting decision record | Meeting Log (HB_MGT_02) | 1 |
| `[action references]` | Meeting action item references | Meeting Log (HB_MGT_02) | 1 |
| `[e.g. shareholders, insurers]` | Interested party examples | Interested Parties (HB_REG_IP) | 1 |
| `[Specific requirements]` | Stakeholder requirements detail | Interested Parties (HB_REG_IP) | 1 |
| `[Notes]` | Free-text annotation field | Multiple registers | 1 |

## See also

- CB_POL_L2_08 — Document Control Standard (metadata, review cycle, versioning)
- HB_CLS_7.5 — Documented Information (requirements for documented information)
- INDEX.md — Structural data and file inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.000 | 2026-02-20 | Claude (AI) | Initial creation — 284 variables across 12 domains |
