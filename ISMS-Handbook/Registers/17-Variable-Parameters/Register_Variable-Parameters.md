> **Document ID:** HB_REG_VAR_01-Variable-Parameters
> **Version:** 00.01.004
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** ISO 27001:2022 Clause 7.5
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Organization Parameters Register

## Summary

Blueprint ISMS documents use bracketed placeholders for organization-specific values that must be resolved before certification. This register catalogues 128 unique organization parameters across 10 domains, each identified by a canonical Meta Key providing structured dot-notation taxonomy for programmatic access and cross-referencing. It serves as the single source of truth for all parameter values and as the central questionnaire for client onboarding — every parameter is traced to its owner, source, and all consuming documents. Without completing this register, deployed documents contain unresolved placeholders that fail audit evidence requirements.

## Objective and Scope

**Requirements:** HB_CLS_7.5-Documented-Information defines the criteria for documented information.
**Process:** Completed during client onboarding, reviewed annually during management review (CB_PRC_09).

**Objective:** ISMS blueprint documents contain organization-specific parameters that must be filled before certification. Without a central catalogue these parameters are scattered across 90+ files, making onboarding error-prone and incomplete.

This register provides a single questionnaire that maps every organization parameter to its Meta Key, description, guidance, example value, owner, source, and all consuming document locations. In client deployments, the Value column is the single source of truth — documents derive their values exclusively from this register. Completing this register once propagates consistent values across the entire ISMS.

The register is referenced by all ISMS documents that contain organization parameters. It complements the document control standard (CB_POL_L2_08) which defines Meta Key conventions and supports the blueprint compliance process.

**Scope:** All organization-specific parameters used in Cyber-Security-Cookbook and ISMS-Handbook documents. Target audience: CISO (onboarding), client organization (data provider), auditors (completeness evidence).

### Key

| Term | Definition |
|---|---|
| Parameter | A bracketed placeholder `[...]` in ISMS documents representing an organization-specific value |
| Meta Key | Canonical dot-notation identifier (e.g. `ORG.LegalName`) providing structured taxonomy across all parameters |
| Canonical form | The standardized placeholder text used consistently across all documents |
| Domain | Thematic grouping of related parameters (10 domains defined) |
| Value | The organization-specific resolved value (`—` = unresolved in blueprint) |
| Owner | Role responsible for accuracy and currency of the parameter value |
| Source | Origin of the parameter value (e.g. commercial register, BIA, management decision) |
| Consumers | Document locations where the parameter appears, format: `Path/File:Line` |

## 1 Organization Identity

16 parameters, 41 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| ORG.Name | Legal entity name for ISMS scope | Match scope statement and contracts | Muster GmbH | — | CEO | Commercial register | CB/L1_01:L20, CB/L1_01:L26, HB/CLS_4.3:L70 (10 files, 19x) |
| ORG.ScopeDescription | Boundary description of ISMS applicability | Align with Clause 4.3 scope statement | All information processing activities at main office | — | CEO | Management | HB/CLS_4.3:L70, CB/L2_11:L123 (3 files, 8x) |
| ORG.SectorClassification | NIS-2 classification reference | Document in context register | SME, IT services sector | — | CEO | Management | HB/CLS_4.2 (1 file, 1x) |
| ORG.Address | Organization physical address | Match commercial register entry | Musterstrasse 1, 80333 Muenchen | — | CEO | Commercial register | HB/REG_CTX (1 file, 1x) |
| ORG.FullName | Complete legal name including form | Match commercial register entry | Muster GmbH | — | CEO | Commercial register | HB/REG_CTX (1 file, 1x) |
| ORG.LegalForm | Legal entity type | Use official legal form | GmbH | — | CEO | Commercial register | HB/REG_CTX (1 file, 1x) |
| ORG.CoreBusiness | Business purpose summary | Concise, auditor-friendly | Cloud-based SaaS platform for project management | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.SiteLocations | Sites count and geography | Include all IS-relevant locations | 2 sites: Munich (HQ), Berlin (dev office) | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.GrowthPlans | Strategic business objectives | Focus on IS-relevant aspects | EU expansion, AI feature development | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.MarketDynamics | Market environment context | Identify IS-relevant market pressures | Competitive SaaS market, increasing compliance demands | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.ThreatLandscape | Threat landscape overview | Align with BSI/ENISA threat reports | Ransomware, phishing, supply chain attacks | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.TechTrends | Technology trend context | Focus on IS-impacting trends | Cloud-first strategy, AI/ML adoption | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.CoreProcesses | Business process inventory | List processes within ISMS scope | Software development, customer support, sales | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.PersonnelStructure | Human resources overview | Describe IS capability and gaps | 25 developers, no dedicated security team | — | CEO | Management | HB/REG_CTX (1 file, 1x) |
| ORG.ScopeExclusions | Scope exclusions with rationale | Justify every exclusion per Clause 4.3 | No physical manufacturing — purely digital business model | — | CEO | Management | HB/CLS_4.3 (1 file, 1x) |
| ORG.IndustryRegulations | Sector-specific regulatory context | Identify all applicable regulations | Digital Services Act, PCI DSS | — | CEO | Management | HB/REG_CTX (1 file, 1x) |

## 2 Roles and Contacts

28 parameters, 385 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| ROLE.CISO | Document owner / responsible role | Role-based, not personal names | Chief Information Security Officer | — | CEO | Org chart | CB/L2_08:L94, HB/CLS_5.3:L34, CB/PRC_03:L56 (38 files, 307x) |
| ROLE.CEO | Top management role | Use the actual title from the org chart | Chief Executive Officer | — | CEO | Org chart | HB/CLS_5.1:L26, CB/L2_08:L94 (6 files, 12x) |
| ROLE.CTO | Technical management role | Use the actual title from the org chart | Chief Technology Officer | — | CEO | Org chart | HB/CLS_5.3:L34, CB/L2_08:L95 (7 files, 11x) |
| ROLE.ISCoordinator | Operational IS implementation role | One person per site/unit | IS-Koordinator | — | CEO | Org chart | HB/CLS_5.3:L71, CB/L2_07:L42 (5 files, 11x) |
| ROLE.ContactChannel | IS reporting email/channel | Use role mailbox, not personal | isms@company.tld | — | CEO | Management | CB/Emergency:L25, CB/L3_01:L45 (11 files, 20x) |
| ROLE.CommunicationsLead | Crisis communications coordinator | Designate before incidents occur | Head of Communications | — | CEO | Org chart | CB/L3_08 (1 file, 2x) |
| ROLE.ITOperationsLead | IT operations management role | Align with IT org chart | Head of IT Operations | — | CEO | Org chart | CB/L3_08 (1 file, 2x) |
| ROLE.DPO | DPO role designation | Mandatory under GDPR if applicable | Datenschutzbeauftragter | — | CEO | Org chart | CB/L2_14 (1 file, 1x) |
| ROLE.AIEthicsRep | AI governance role | Assign per AI usage policy | AI Ethics Lead | — | CEO | Management | CB/L2_12 (1 file, 1x) |
| ROLE.LegalRep | Legal counsel role | Corporate legal or external counsel | Head of Legal | — | CEO | Org chart | CB/L2_14 (1 file, 1x) |
| ROLE.DevEngineers | Development team as audience | Match org chart team names | Development Team | — | CEO | Org chart | CB/L2_12 (1 file, 1x) |
| ROLE.RegulatoryAuthority | Regulatory authority contact | Identify applicable authorities | BSI, BaFin | — | CEO | Management | HB/REG_IP (1 file, 1x) |
| ROLE.EmergencyNumber | Site-specific emergency contact | Verify and test regularly | 112 / +49 89 12345678 | — | CEO | Management | CB/Emergency (1 file, 1x) |
| ROLE.IncidentPhone | Direct contact for incident reporting | Maintain current, test quarterly | +49 89 98765432 | — | CEO | Management | CB/PRC_09 (1 file, 1x) |
| ROLE.AuthorizedPersonnel | Personnel authorized for specific operations | Restrict to minimum necessary | IT administrators | — | CEO | Management | CB/L2_03 (1 file, 1x) |
| ROLE.AuthorizedDeployRoles | Deployment-authorized roles | Principle of least privilege | DevOps engineers with deploy rights | — | CEO | Management | CB/L3_03 (1 file, 1x) |
| ROLE.LeadArchitect | Architecture decision authority | Single accountable person | Lead Software Architect | — | CEO | Org chart | CB/L3_03 (1 file, 1x) |
| ROLE.ChangeApprover | Change approval authority | Per change management process | CAB / CISO | — | CEO | Management | CB/PRC_06 (1 file, 1x) |
| ROLE.OnCallPersonnel | After-hours availability | Define rotation schedule | On-call IT engineer | — | CEO | Management | CB/L3_08 (1 file, 1x) |
| ROLE.BCMCoordinator | BCM process owner | Named individual with authority | BCM Coordinator | — | CEO | Management | CB/L3_08 (1 file, 1x) |
| ROLE.CrisisSpokesperson | External crisis communications | Pre-authorized by management | CEO or Communications Lead | — | CEO | Management | CB/L3_08 (1 file, 1x) |
| ROLE.AuthorizedSignatory | Contract signing authority | Per corporate governance rules | CEO / Managing Director | — | CEO | Management | CB/L3_08 (1 file, 1x) |
| ROLE.CABChair | Change advisory board chair | Defined in change management | CISO | — | CEO | Management | CB/PRC_06 (1 file, 1x) |
| ROLE.CISODeputy | CISO deputy for incidents | Pre-designated, trained | IS-Coordinator | — | CEO | Management | CB/PRC_09 (1 file, 1x) |
| ROLE.ITIncidentLead | IT incident lead | Align with IT org chart | CTO | — | CEO | Org chart | CB/PRC_09 (1 file, 1x) |
| ROLE.DataBreachCounsel | Data breach legal advisor | Pre-identified contact | Data Protection Officer | — | CEO | Management | CB/PRC_09 (1 file, 1x) |
| ROLE.HRContact | HR escalation contact | Named HR contact | Head of HR | — | CEO | Org chart | CB/PRC_09 (1 file, 1x) |
| ROLE.OtherParties | Additional interested parties | Identify per stakeholder analysis | Insurance providers, shareholders | — | CEO | Management | HB/REG_IP (1 file, 1x) |

## 3 Governance Frequencies

13 parameters, 278 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| GOV.ReviewCycle | Document review cadence in metadata | Annual unless risk profile requires shorter | Annual | — | CISO | Management decision | All ISMS documents metadata line 8 (85 files, 217x) |
| GOV.ProcessFrequency | Process execution frequency in body text | Align with risk appetite and capability | Quarterly | — | CISO | Management decision | CB/L2_08:L100, HB/CLS_9.2:L47, CB/PRC_11:L36 (9 files, 42x) |
| GOV.Annual | Explicit annual frequency | Use when cadence is fixed at annual | Annually | — | CISO | Management decision | CB/L2_05, HB/CLS_9.2 (3 files, 6x) |
| GOV.FrequencyCount | Numeric frequency or count value | Define per context | 4 (quarterly) | — | CISO | Management decision | CB/PRC_11 (1 file, 2x) |
| GOV.SecurityCadence | Security operations reporting cycle | Align with operational capability | Monthly | — | CISO | Management decision | CB/PRC_11:L39 (1 file, 2x) |
| GOV.BackupFrequency | Backup execution schedule | Per BIA and data criticality | Daily | — | CISO | Management decision | CB/TPL_16:L111 (1 file, 2x) |
| GOV.SemiAnnual | Explicit semi-annual frequency | Use for higher-risk items | Semi-annually | — | CISO | Management decision | HB/REG_BCM (1 file, 1x) |
| GOV.RiskBasedReviewCycle | Risk-based review frequency | Determine per risk classification | Annual for standard, semi-annual for high-risk | — | CISO | Management decision | CB/L2_05 (1 file, 1x) |
| GOV.RiskLevelReviewCycle | Risk-level-based review frequency | Align with risk register ratings | Semi-annual for critical suppliers | — | CISO | Management decision | CB/L3_07 (1 file, 1x) |
| GOV.ConfigurableInterval | Configurable review interval | Document rationale for chosen interval | Annually | — | CISO | Management decision | CB/L2_07 (1 file, 1x) |
| GOV.EscalationThreshold | Escalation threshold count | Define per KPI governance | 2 consecutive periods | — | CISO | Management decision | CB/PRC_11 (1 file, 1x) |
| GOV.CriticalEscalationThreshold | Critical escalation threshold | Higher than standard threshold | 3+ consecutive periods | — | CISO | Management decision | CB/PRC_11 (1 file, 1x) |
| GOV.EscalationWindow | Configurable escalation window | Align with reporting frequency | 2 consecutive quarters | — | CISO | Management decision | CB/PRC_11 (1 file, 1x) |

## 4 Time Thresholds

31 parameters, 91 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| TIME.RtoMtdTier | Recovery time per criticality tier | Define per BIA, validate in DR tests | 0-4 h (Tier 1) | — | CISO | BIA | CB/L2_06:L65, CB/L3_08:L69, HB/REG_BCM:L44 (6 files, 29x) |
| TIME.RemediationDeadline | Fix deadline per severity | Align with risk appetite | 30/60/90 days | — | CISO | Risk assessment | CB/PRC_03:L56, CB/PRC_10:L69 (2 files, 12x) |
| TIME.NotificationDeadline | Incident reporting deadline | Match regulatory requirements (NIS-2) | 24h / 72h / 1 month | — | CISO | Regulatory | CB/PRC_09:L132 (1 file, 6x) |
| TIME.RetentionPeriod | Document and record retention period | At least until next recertification | 3 years | — | CISO | Regulatory | CB/L2_08:L150 (1 file, 2x), CB/L2_08 (1 file, 1x) |
| TIME.ShortDeadline | Short processing deadline | For routine approvals | 2 business days | — | CISO | Risk assessment | CB/PRC_06 (1 file, 4x) |
| TIME.StandardDeadline | Standard processing deadline | For standard changes | 5 business days | — | CISO | Risk assessment | CB/L2_08, CB/PRC_06, CB/PRC_14 (3 files, 3x) |
| TIME.ExpeditedDeadline | Expedited processing window | For urgent changes | 1-3 business days | — | CISO | Risk assessment | CB/PRC_06 (1 file, 2x) |
| TIME.CriticalResponse1h | One-hour response time | For critical incident initial response | 1 hour | — | CISO | Risk assessment | CB/PRC_09 (1 file, 2x) |
| TIME.ConfigurableDeadline | Configurable processing deadline | Scale to organizational capacity | 5 business days | — | CISO | Risk assessment | CB/L2_07 (1 file, 2x) |
| TIME.AuditRetention | Audit record retention | Match regulatory minimum + 1 cycle | 3 years | — | CISO | Regulatory | HB/AUD_INT (1 file, 1x) |
| TIME.AuditRetentionExample | Audit record retention with example | At least one certification cycle | 3 years | — | CISO | Regulatory | HB/AUD_SUP (1 file, 1x) |
| TIME.ShortResponseTimeframe | Short response timeframe | For critical incident escalation | 4 hours | — | CISO | Risk assessment | CB/L2_13 (1 file, 1x) |
| TIME.PostEmploymentPeriod | NDA validity after termination | Minimum 1 year, align with contracts | 2 years | — | CISO | Regulatory | CB/L2_10 (1 file, 1x) |
| TIME.NIS2EarlyWarning | NIS-2 early warning window | Match NIS-2 Article 23 requirements | 24 hours | — | CISO | Regulatory | CB/L2_13 (1 file, 1x) |
| TIME.InternalEscalation | Internal escalation window | Per incident severity matrix | 4 hours for critical | — | CISO | Risk assessment | CB/L2_13 (1 file, 1x) |
| TIME.ExtendedDeadline | Extended processing window | For complex investigations | 10 business days | — | CISO | Risk assessment | CB/PRC_09 (1 file, 1x) |
| TIME.EffectivenessVerification | Effectiveness verification window | Align with KPI measurement cycle | One quarter after implementation | — | CISO | Risk assessment | CB/PRC_11 (1 file, 1x) |
| TIME.AuditNCDeadline | NC corrective action deadline (audit) | Agree with auditor during audit | 30 days | — | CISO | Risk assessment | HB/AUD_INT (1 file, 1x) |
| TIME.ExtendedCorrectiveAction | Extended corrective action deadline | For systemic changes | 90 days | — | CISO | Risk assessment | CB/PRC_14 (1 file, 1x) |
| TIME.MajorNCWindow | Standard corrective action window | For major nonconformities | 45 days | — | CISO | Risk assessment | CB/PRC_14 (1 file, 1x) |
| TIME.MinorNCWindow | Extended corrective action window | For minor nonconformities | 60 days | — | CISO | Risk assessment | CB/PRC_14 (1 file, 1x) |
| TIME.TieredDRTestFrequency | Tiered DR test frequency | Per BIA criticality tier | Quarterly for Tier 1 | — | CISO | BIA | CB/L3_08 (1 file, 1x) |
| TIME.CrisisUpdateFrequency | Crisis status update frequency | Per incident severity | Every 30 minutes for critical | — | CISO | Risk assessment | CB/L3_08 (1 file, 1x) |
| TIME.SignificantResponse4h | Four-hour response threshold | For significant incidents | 4 hours | — | CISO | Risk assessment | CB/PRC_06 (1 file, 1x) |
| TIME.ExtendedProcessing | Extended processing deadline | For complex changes | 10 business days | — | CISO | Risk assessment | CB/PRC_06 (1 file, 1x) |
| TIME.ImmediateResponse | Immediate response requirement | For critical security incidents | Immediately — max 1h | — | CISO | Risk assessment | CB/PRC_09 (1 file, 1x) |
| TIME.Escalation4h | Four-hour escalation deadline | For high-severity incidents | Within 4h | — | CISO | Risk assessment | CB/PRC_09 (1 file, 1x) |
| TIME.Reporting24h | Twenty-four-hour reporting deadline | For significant incidents | Within 24h | — | CISO | Regulatory | CB/PRC_09 (1 file, 1x) |
| TIME.Reporting72h | Seventy-two-hour reporting deadline | For standard incidents | Within 72h | — | CISO | Regulatory | CB/PRC_09 (1 file, 1x) |
| TIME.RPO | RPO per criticality tier | Define per BIA, validate in tests | 1h (Tier 1), 24h (Tier 2) | — | CISO | BIA | HB/REG_BCM (1 file, 1x) |
| TIME.SessionTimeout | Inactivity timeout for application sessions | Align with risk classification and data sensitivity | 15 min. | — | CISO | Risk assessment | CB/L2_01:L73 (1 file, 1x) |

## 5 Risk and Financial Thresholds

8 parameters, 21 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| RISK.FinancialImpactThreshold | Monetary damage scale per severity | Calibrate to organization size and revenue | 5k / 50k / 250k EUR | — | CISO | Risk assessment | CB/L2_11:L204-207 (1 file, 8x) |
| RISK.DeviationThreshold | Percentage deviation threshold | Define per KPI context | 10 % | — | CISO | KPI framework | CB/PRC_11 (1 file, 4x) |
| RISK.ScalableImpactMeasure | Scalable impact measure | Adjust to organization revenue | 5 % of annual revenue | — | CISO | Risk assessment | CB/L2_11 (1 file, 3x) |
| RISK.TargetHigh | High-confidence target KPI | Set achievable but ambitious targets | >= 95 % | — | CISO | KPI framework | CB/PRC_11:L39 (1 file, 2x) |
| RISK.TargetResponseTime | Incident response time target | Align with SLA and capability | <= 4 h for critical incidents | — | CISO | KPI framework | CB/PRC_11:L36 (1 file, 1x) |
| RISK.TargetStandard | Standard target KPI | Set per organizational maturity | >= 90 % | — | CISO | KPI framework | CB/PRC_11:L37 (1 file, 1x) |
| RISK.TargetBaseline | Baseline target KPI | Minimum acceptable performance | >= 80 % | — | CISO | KPI framework | CB/PRC_11:L40 (1 file, 1x) |
| RISK.TargetFull | Full compliance target | For mandatory requirements | 100 % | — | CISO | KPI framework | CB/PRC_11:L38 (1 file, 1x) |

## 6 Communication and Channels

5 parameters, 8 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| COM.ReportingChannel | IS reporting channel or SLA specification | Document and test regularly | isms@company.tld / Jira Service Desk | — | CISO | IT operations | CB/L2_05, CB/PRC_11, HB/CLS_7.4 (3 files, 4x) |
| COM.IncidentChannel | Dedicated incident intake channel | 24/7 accessible, monitored | incidents@company.tld | — | CISO | IT operations | CB/L2_13 (1 file, 1x) |
| COM.CrisisChannel | Crisis team communication | Pre-configured, tested quarterly | Signal group "Crisis Team" | — | CISO | IT operations | CB/L3_08 (1 file, 1x) |
| COM.OnCallSchedule | After-hours contact procedure | Documented and maintained | On-call rotation via PagerDuty | — | CISO | IT operations | CB/PRC_09 (1 file, 1x) |
| COM.IncidentRepository | Incident record storage location | Centralized, access-controlled | GitLab incident issues | — | CISO | IT operations | CB/PRC_09 (1 file, 1x) |

## 7 Tooling and Technology

18 parameters, 17 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| TOOL.CDTool | Continuous deployment tool | Integrate with CI pipeline | ArgoCD, GitLab CD | — | CTO | IT architecture | CB/L3_03 (1 file, 2x) |
| TOOL.SIEM | Security event monitoring platform | Centralized log correlation | Google Chronicle | — | CTO | IT architecture | CB/L2_03 (1 file, 1x) |
| TOOL.DLP | Data loss prevention tool | Cover email, cloud storage, endpoints | Microsoft Purview | — | CTO | IT architecture | CB/L2_02 (1 file, 1x) |
| TOOL.WebFilter | Web access control | Layer defense (DNS + proxy) | Cloudflare Gateway | — | CTO | IT architecture | CB/L2_03 (1 file, 1x) |
| TOOL.ScreenLockTimeout | Screen lock timeout | Maximum 5 minutes for endpoints | 5 minutes | — | CTO | IT architecture | CB/L3_01 (1 file, 1x) |
| TOOL.CodeReview | Code review platform | Mandatory for all production code | GitLab Merge Requests | — | CTO | IT architecture | CB/L3_03 (1 file, 1x) |
| TOOL.VCS | Source code management | Single system for all code | GitLab | — | CTO | IT architecture | CB/L3_03 (1 file, 1x) |
| TOOL.CI | Continuous integration platform | Automated build and test | GitLab CI | — | CTO | IT architecture | CB/L3_03 (1 file, 1x) |
| TOOL.TestFramework | Automated testing toolchain | Cover unit, integration, security tests | Jest + OWASP ZAP | — | CTO | IT architecture | CB/L3_03 (1 file, 1x) |
| TOOL.DAST | Dynamic application security testing | Run against staging environment | OWASP ZAP | — | CTO | IT architecture | CB/L3_03 (1 file, 1x) |
| TOOL.ConfigRepository | Configuration documentation location | Version-controlled, access-restricted | GitLab wiki | — | CTO | IT architecture | CB/L3_06 (1 file, 1x) |
| TOOL.ChangeManagement | Change request tracking system | Integrated with incident management | GitLab Issues | — | CTO | IT architecture | CB/PRC_06 (1 file, 1x) |
| TOOL.IncidentTicketing | Incident tracking system | Structured workflow with labels | GitLab issue with incident label | — | CTO | IT architecture | CB/PRC_09 (1 file, 1x) |
| TOOL.ThreatIntelSources | Threat intelligence sources | Subscribe to relevant CERTs | BSI CERT-Bund, ENISA | — | CTO | IT architecture | CB/PRC_07 (1 file, 1x) |
| TOOL.ISMSToolStack | ISMS tool stack overview | Document all IS-relevant tools | GitLab, Google Workspace, Cloudflare | — | CTO | IT architecture | HB/CLS_7.1 (1 file, 1x) |
| TOOL.MonitoringStack | Monitoring tool inventory | List all operational monitoring tools | Prometheus, Grafana, PagerDuty | — | CTO | IT architecture | CB/PRC_11 (1 file, 1x) |
| TOOL.PasswordManager | Enterprise password management solution | Centralized credential vault for all accounts | Bitwarden/1Password | — | CTO | IT architecture | CB/L2_01:L53, CB/AWR_01:L87 (2 files, 2x) |
| TOOL.LockoutThreshold | Failed authentication attempts before account lockout | Balance security with usability; align with NIST guidelines | 5 attempts | — | CTO | IT architecture | CB/L2_01:L75 (1 file, 1x) |

## 8 Supplier and Cloud

3 parameters, 3 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| SUP.CloudDRTopology | Cloud DR topology | Document per provider | eu-west-1 (primary), eu-central-1 (failover) | — | CTO | Supplier register | CB/L3_08 (1 file, 1x) |
| SUP.CloudServiceInventory | Cloud service inventory summary | List all IS-relevant services | AWS (IaaS), Microsoft 365 (SaaS) | — | CTO | Supplier register | HB/REG_CTX (1 file, 1x) |
| SUP.Provider | Generic provider reference | Specify per context | AWS | — | CTO | Supplier register | HB/REG_CTX (1 file, 1x) |

## 9 BCM / Assets / Processes

3 parameters, 3 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| BCM.TieredDRTestCycle | Tiered DR test frequency | Per BIA criticality | Semi-annually for Tier 1 | — | CISO | BIA | CB/L3_08 (1 file, 1x) |
| BCM.FullDRExerciseCycle | Full DR exercise frequency | Resource-dependent | Annually for critical systems | — | CISO | BIA | CB/L3_08 (1 file, 1x) |
| BCM.CoreApplication | Primary business application | Central revenue-generating system | SaaS project management platform | — | CISO | BIA | HB/REG_CTX (1 file, 1x) |

## 10 Regulatory and Legal

3 parameters, 3 occurrences across the ISMS.

| Meta Key | Description | Guidance | Example | Value | Owner | Source | Consumers |
|---|---|---|---|---|---|---|---|
| LEGAL.DPA | Applicable DPA identification | Per GDPR Article 51 | Bayerisches Landesamt fuer Datenschutzaufsicht | — | CISO | Legal counsel | CB/L2_14 (1 file, 1x) |
| LEGAL.DPADetailed | DPA with example | Verify jurisdiction | BayLDA | — | CISO | Legal counsel | CB/PRC_09 (1 file, 1x) |
| LEGAL.RegulatoryAuthorities | Regulatory authority list | Identify all applicable authorities | BayLDA, BSI, Finanzamt | — | CISO | Legal counsel | HB/REG_IP (1 file, 1x) |

## Alias Map

Legacy placeholder-to-Meta Key mapping for backward compatibility and migration verification.

| # | Legacy Placeholder | Meta Key | Domain |
|---|---|---|---|
| 1 | `[Organization]` | ORG.Name | ORG |
| 2 | `[ISMS scope description]` | ORG.ScopeDescription | ORG |
| 3 | `[sector classification and entity size assessment — documented in HB_CLS_4.2 or equivalent]` | ORG.SectorClassification | ORG |
| 4 | `[Address]` | ORG.Address | ORG |
| 5 | `[Full company name]` | ORG.FullName | ORG |
| 6 | `[Legal form, e.g. GmbH, Ltd.]` | ORG.LegalForm | ORG |
| 7 | `[Core business in 1-2 sentences]` | ORG.CoreBusiness | ORG |
| 8 | `[Number and locations]` | ORG.SiteLocations | ORG |
| 9 | `[Growth plans, market expansion, product strategy relevant to IS]` | ORG.GrowthPlans | ORG |
| 10 | `[Competitive situation, market dynamics]` | ORG.MarketDynamics | ORG |
| 11 | `[Relevant cyber threats, e.g. ransomware, phishing, supply chain attacks]` | ORG.ThreatLandscape | ORG |
| 12 | `[Relevant trends, e.g. cloud migration, AI adoption]` | ORG.TechTrends | ORG |
| 13 | `[Core processes, e.g. software development, customer support, sales]` | ORG.CoreProcesses | ORG |
| 14 | `[IS-relevant personnel structure, e.g. development team, no dedicated security team]` | ORG.PersonnelStructure | ORG |
| 15 | `[Exclusions with justification, e.g. "No physical manufacturing — purely digital business model"]` | ORG.ScopeExclusions | ORG |
| 16 | `[industry-specific regulations]` | ORG.IndustryRegulations | ORG |
| 17 | `[CISO]` | ROLE.CISO | ROLE |
| 18 | `[CEO]` | ROLE.CEO | ROLE |
| 19 | `[CTO]` | ROLE.CTO | ROLE |
| 20 | `[IS-Coordinator]` | ROLE.ISCoordinator | ROLE |
| 21 | `[contact channel]` | ROLE.ContactChannel | ROLE |
| 22 | `[Communications lead]` | ROLE.CommunicationsLead | ROLE |
| 23 | `[IT operations lead]` | ROLE.ITOperationsLead | ROLE |
| 24 | `[Data Protection Officer]` | ROLE.DPO | ROLE |
| 25 | `[AI ethics representative]` | ROLE.AIEthicsRep | ROLE |
| 26 | `[Legal representative]` | ROLE.LegalRep | ROLE |
| 27 | `[Developers and engineers]` | ROLE.DevEngineers | ROLE |
| 28 | `[Authority]` | ROLE.RegulatoryAuthority | ROLE |
| 29 | `[Local emergency number]` | ROLE.EmergencyNumber | ROLE |
| 30 | `[Phone number — CISO or ISC]` | ROLE.IncidentPhone | ROLE |
| 31 | `[authorized personnel, e.g. IT administrators]` | ROLE.AuthorizedPersonnel | ROLE |
| 32 | `[authorized roles, e.g. DevOps engineers with deploy rights]` | ROLE.AuthorizedDeployRoles | ROLE |
| 33 | `[lead architect]` | ROLE.LeadArchitect | ROLE |
| 34 | `[Change approver per CB_PRC_05]` | ROLE.ChangeApprover | ROLE |
| 35 | `[on-call personnel]` | ROLE.OnCallPersonnel | ROLE |
| 36 | `[designated BCM coordinator]` | ROLE.BCMCoordinator | ROLE |
| 37 | `[designated spokesperson]` | ROLE.CrisisSpokesperson | ROLE |
| 38 | `[authorized signatory]` | ROLE.AuthorizedSignatory | ROLE |
| 39 | `[CAB chair or CISO]` | ROLE.CABChair | ROLE |
| 40 | `[designated deputy, e.g. ISC or CTO]` | ROLE.CISODeputy | ROLE |
| 41 | `[CTO or designated IT lead]` | ROLE.ITIncidentLead | ROLE |
| 42 | `[DPO or legal counsel]` | ROLE.DataBreachCounsel | ROLE |
| 43 | `[HR representative — if personnel involved]` | ROLE.HRContact | ROLE |
| 44 | `[Other parties]` | ROLE.OtherParties | ROLE |
| 45 | `[review cycle, e.g. Annual]` | GOV.ReviewCycle | GOV |
| 46 | `[frequency, e.g. Annual]` | GOV.ProcessFrequency | GOV |
| 47 | `[Annually]` | GOV.Annual | GOV |
| 48 | `[Number]` | GOV.FrequencyCount | GOV |
| 49 | `[security cadence, e.g. Monthly]` | GOV.SecurityCadence | GOV |
| 50 | `[backup frequency, e.g. Daily]` | GOV.BackupFrequency | GOV |
| 51 | `[Semi-annually]` | GOV.SemiAnnual | GOV |
| 52 | `[annual \| semi-annual — depending on risk classification]` | GOV.RiskBasedReviewCycle | GOV |
| 53 | `[annual \| semi-annual — depending on risk level]` | GOV.RiskLevelReviewCycle | GOV |
| 54 | `[defined intervals — e.g., annually or semi-annually]` | GOV.ConfigurableInterval | GOV |
| 55 | `[2 consecutive periods]` | GOV.EscalationThreshold | GOV |
| 56 | `[3+ consecutive periods]` | GOV.CriticalEscalationThreshold | GOV |
| 57 | `[number of periods, e.g. 2 consecutive quarters]` | GOV.EscalationWindow | GOV |
| 58 | `[RTO/MTD tier value]` | TIME.RtoMtdTier | TIME |
| 59 | `[remediation deadline]` | TIME.RemediationDeadline | TIME |
| 60 | `[notification deadline]` | TIME.NotificationDeadline | TIME |
| 61 | `[retention period, e.g. 3 years]` | TIME.RetentionPeriod | TIME |
| 62 | `[2 business days]` | TIME.ShortDeadline | TIME |
| 63 | `[5 business days]` | TIME.StandardDeadline | TIME |
| 64 | `[1-3 business days]` | TIME.ExpeditedDeadline | TIME |
| 65 | `[1h]` | TIME.CriticalResponse1h | TIME |
| 66 | `[timeframe, e.g. 5 business days]` | TIME.ConfigurableDeadline | TIME |
| 67 | `[audit retention period]` | TIME.AuditRetention | TIME |
| 68 | `[audit retention period, e.g. 3 years]` | TIME.AuditRetentionExample | TIME |
| 69 | `[retention period, e.g. 3 years]` | TIME.RetentionPeriod | TIME |
| 70 | `[timeframe, e.g. 4 hours]` | TIME.ShortResponseTimeframe | TIME |
| 71 | `[post-employment period]` | TIME.PostEmploymentPeriod | TIME |
| 72 | `[24-72 hours — organization-specific]` | TIME.NIS2EarlyWarning | TIME |
| 73 | `[1-24 hours — organization-specific]` | TIME.InternalEscalation | TIME |
| 74 | `[5-10 business days]` | TIME.ExtendedDeadline | TIME |
| 75 | `[timeframe, e.g. one measurement cycle after implementation]` | TIME.EffectivenessVerification | TIME |
| 76 | `[30 days — or as agreed with certification body]` | TIME.AuditNCDeadline | TIME |
| 77 | `[90 days]` | TIME.ExtendedCorrectiveAction | TIME |
| 78 | `[30-60 days]` | TIME.MajorNCWindow | TIME |
| 79 | `[60-90 days]` | TIME.MinorNCWindow | TIME |
| 80 | `[Quarterly for Tier 1, semi-annually for Tier 2]` | TIME.TieredDRTestFrequency | TIME |
| 81 | `[every 30 minutes for Tier 1, every 2 hours for Tier 2]` | TIME.CrisisUpdateFrequency | TIME |
| 82 | `[4 hours]` | TIME.SignificantResponse4h | TIME |
| 83 | `[10 business days]` | TIME.ExtendedProcessing | TIME |
| 84 | `[Immediately — max 1h]` | TIME.ImmediateResponse | TIME |
| 85 | `[Within 4h]` | TIME.Escalation4h | TIME |
| 86 | `[Within 24h]` | TIME.Reporting24h | TIME |
| 87 | `[Within 72h]` | TIME.Reporting72h | TIME |
| 88 | `[maximum acceptable data loss]` | TIME.RPO | TIME |
| 89 | `[financial impact threshold]` | RISK.FinancialImpactThreshold | RISK |
| 90 | `[threshold, e.g. 10 %]` | RISK.DeviationThreshold | RISK |
| 91 | `[amount or percentage — calibrated to organization scale]` | RISK.ScalableImpactMeasure | RISK |
| 92 | `[target value, e.g. >= 95 %]` | RISK.TargetHigh | RISK |
| 93 | `[target value, e.g. <= 4 h for critical incidents]` | RISK.TargetResponseTime | RISK |
| 94 | `[target value, e.g. >= 90 %]` | RISK.TargetStandard | RISK |
| 95 | `[target value, e.g. >= 80 %]` | RISK.TargetBaseline | RISK |
| 96 | `[target value, e.g. 100 %]` | RISK.TargetFull | RISK |
| 97 | `[reporting channel or SLA detail]` | COM.ReportingChannel | COM |
| 98 | `[incident reporting channel]` | COM.IncidentChannel | COM |
| 99 | `[crisis communication channel, e.g. dedicated conference bridge or messaging group]` | COM.CrisisChannel | COM |
| 100 | `[on-call schedule or equivalent arrangement]` | COM.OnCallSchedule | COM |
| 101 | `[incident documentation repository]` | COM.IncidentRepository | COM |
| 102 | `[CD tool]` | TOOL.CDTool | TOOL |
| 103 | `[SIEM solution, e.g. Google Chronicle, Splunk]` | TOOL.SIEM | TOOL |
| 104 | `[DLP solution, e.g. Google Workspace DLP, Microsoft Purview]` | TOOL.DLP | TOOL |
| 105 | `[Web filtering solution, e.g. DNS-based filtering, proxy-based filtering]` | TOOL.WebFilter | TOOL |
| 106 | `[automatic screen lock after X minutes of inactivity]` | TOOL.ScreenLockTimeout | TOOL |
| 107 | `[code review tool, e.g. GitLab Merge Requests]` | TOOL.CodeReview | TOOL |
| 108 | `[version control system, e.g. GitLab]` | TOOL.VCS | TOOL |
| 109 | `[CI system, e.g. GitLab CI]` | TOOL.CI | TOOL |
| 110 | `[test framework]` | TOOL.TestFramework | TOOL |
| 111 | `[DAST tool]` | TOOL.DAST | TOOL |
| 112 | `[central configuration repository, e.g. GitLab, Confluence]` | TOOL.ConfigRepository | TOOL |
| 113 | `[change management tool]` | TOOL.ChangeManagement | TOOL |
| 114 | `[Ticketing system, e.g. GitLab issue with incident label]` | TOOL.IncidentTicketing | TOOL |
| 115 | `[CERT advisories, e.g. BSI, ENISA]` | TOOL.ThreatIntelSources | TOOL |
| 116 | `[Technical tools and systems for ISMS operation]` | TOOL.ISMSToolStack | TOOL |
| 117 | `[tool stack]` | TOOL.MonitoringStack | TOOL |
| 118 | `[failover locations, network connectivity, and cloud region assignments]` | SUP.CloudDRTopology | SUP |
| 119 | `[Provider and services, e.g. AWS, Microsoft 365]` | SUP.CloudServiceInventory | SUP |
| 120 | `[provider]` | SUP.Provider | SUP |
| 121 | `[annually \| semi-annually — depending on criticality tier]` | BCM.TieredDRTestCycle | BCM |
| 122 | `[Annually for Tier 1 — if feasible]` | BCM.FullDRExerciseCycle | BCM |
| 123 | `[Core application, e.g. SaaS platform]` | BCM.CoreApplication | BCM |
| 124 | `[data protection authority]` | LEGAL.DPA | LEGAL |
| 125 | `[competent data protection authority, e.g. Bayerisches Landesamt fuer Datenschutzaufsicht (BayLDA)]` | LEGAL.DPADetailed | LEGAL |
| 126 | `[Data protection authority, BSI, tax authorities]` | LEGAL.RegulatoryAuthorities | LEGAL |
| 127 | `[session timeout, e.g. 15 min.]` | TIME.SessionTimeout | TIME |
| 128 | `[password manager, e.g. Bitwarden/1Password]` | TOOL.PasswordManager | TOOL |
| 129 | `[lockout threshold, e.g. 5 attempts]` | TOOL.LockoutThreshold | TOOL |

## Quality Rules

| # | Rule |
|---|---|
| 1 | **SSOT principle:** HB_REG_VAR_01 is the single source of truth for all organization parameters. No document may define parameter values independently. |
| 2 | **Canonical form:** Every placeholder in ISMS documents must match a Legacy Placeholder in the Alias Map. Deviations are flagged by the consistency checker. |
| 3 | **New parameters:** Adding a new placeholder to any ISMS document requires a corresponding entry in this register first (Meta Key, Owner, Source). |
| 4 | **Change record:** Every change to a parameter value must be documented in the Changelog with version increment. |
| 5 | **Management review:** Parameter completeness and currency are reviewed during the annual management review (CB_PRC_09). |
| 6 | **Deployment gate:** In client deployments, no document may be published while its referenced parameters still show Value = `—`. |
| 7 | **Ownership:** Every parameter must have a designated Owner. Owner changes require Changelog entry. |

## See also

- CB_POL_L2_08 — Document Control Standard (organization parameters SSOT rules, Meta Key concept)
- HB_CLS_7.5 — Documented Information (requirements for documented information)
- INDEX.md — Structural data and file inventory

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.004 | 2026-02-21 | Claude (AI) | Add 3 new parameters (TIME.SessionTimeout, TOOL.PasswordManager, TOOL.LockoutThreshold); extend Alias Map to 129 entries |
| 00.01.003 | 2026-02-21 | Claude (AI) | Rename to Organization Parameters Register; add Meta Key taxonomy (10 domains), Owner, Source columns; add Alias Map and Quality Rules sections; consolidate duplicate retention period entry |
| 00.01.002 | 2026-02-20 | Claude (AI) | Add Value column to all 10 domain tables (126 rows, default `—`); establish register as SSOT for variable values; add Value definition to Key table |
| 00.01.001 | 2026-02-20 | Claude (AI) | Quality cleanup — removed 158 non-core variables (register row fields, audit-cycle fields, illustrative examples, process descriptions, duplicates); reduced from 284 to 126 variables across 10 domains |
| 00.01.000 | 2026-02-20 | Claude (AI) | Initial creation — 284 variables across 12 domains |
