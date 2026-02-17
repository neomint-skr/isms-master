# Mandatory Document Excerpts

## How to Read This File

- Each section contains excerpts from one source document
- Excerpts preserve original heading structure (indented one level)
- `[...]` marks where text was omitted for brevity
- Full source files are available in `_exports/`

> **Note on CB_POL_L2_07:** The requested file `07-Asset-Management.md` does not exist.
> The L2 Standard at position 07 is `07-Organisation.md` (CB_POL_L2_07-Organisation), which covers
> asset types and grouping as one section within its broader organizational scope. The asset-specific
> normative requirements are embedded in CB_POL_L2_11-Risk-Management (Asset Input section) and
> operationalized by CB_PRC_12 and CB_PRC_13. Section 9 below is therefore omitted; the relevant
> normative text appears within Section 8 (CB_POL_L2_11).

---

## CB_PRC_07: Risk Management Process

**File:** `Cyber-Security-Cookbook/Processes/07-Risk-Management.md`
**Version:** 00.01.014
**Classification:** Internal

### Summary

Risks must not only be identified but systematically assessed and treated. This process describes the operational workflow from risk identification through analysis and evaluation to treatment, SoA maintenance, and residual risk acceptance. It ensures that the normatively defined criteria are applied consistently and that results are documented traceably. Without a defined process, gaps arise between identified risks and implemented controls.

### Objective and Scope

**Objective:** Risks must not only be identified but systematically assessed and treated. Without a defined process, gaps emerge between recognized risks and implemented controls — risk decisions remain ad hoc and untraceable.

This process describes the operational workflow from asset-based risk identification through analysis, evaluation, and prioritization to treatment, control selection, SoA maintenance, and residual risk acceptance (Clauses 6.1.2, 6.1.3, 8.2, 8.3). It ensures that the normatively defined criteria from CB_POL_L2_11-Risk-Management are applied consistently.

Results are documented in HB_REG_05 (Risk Register) and HB_REG_06 (Risk Treatment Plan). The process is triggered annually before the management review (CB_PRC_09) and on an event-driven basis.

**Scope:** All IS risks within the ISMS scope. Coordinated by the Chief Information Security Officer with risk owners. Triggered annually (before management review) or event-driven.

### Risk assessment

The risk assessment follows a catalogue-driven, six-step workflow (Clause 8.2). Vulnerability catalogues (HB_REG_03, per asset layer) and the threat catalogue (HB_REG_11) provide the systematic input. Additional event-driven sources (incidents, audits, vulnerability advisories) remain valid triggers for ad-hoc risk identification outside the catalogue workflow.

#### Step 1 — Scope determination

The Chief Information Security Officer identifies the assets requiring individual risk analysis from HB_REG_03. The scope comprises all assets whose protection requirement (PR) is rated **High** or **Very high** in at least one core value (C, I, or A), as flagged by CB_PRC_13 (Protection Requirements). Assets already assessed and unchanged since the last cycle are excluded unless an event-driven trigger applies.

Additional input sources that may expand the scope:

- Security incidents (CB_PRC_01-Incident-Management)
- Audit findings (CB_PRC_08-Internal-Audit)
- Vulnerability advisories (CB_PRC_04-Vulnerability-Management)
- Changes to business processes or the IT landscape

#### Step 2 — Vulnerability assessment

For each in-scope asset, the CISO or IS-Coordinator works through the vulnerability catalogue of the asset's layer in HB_REG_03. Each vulnerability entry receives a status:

| Status | Meaning |
|---|---|
| present | Vulnerability exists in the current environment |
| not present | Vulnerability does not apply or has been fully mitigated |
| unknown | Assessment not yet possible; further investigation required |
| n/a | Vulnerability is structurally irrelevant for this asset |

For each assessment, a brief evidence statement or comment is documented. Vulnerabilities with status "unknown" are treated as "present" for the purpose of scenario generation until resolved.

#### Step 3 — Scenario generation

Risk scenarios are generated systematically from the combination of relevant threats (HB_REG_11) and vulnerabilities with status **present** or **unknown**. A threat–vulnerability pair forms a valid scenario only when the aspect tags are compatible (C, I, A, or combinations).

Each scenario receives a unique identifier: `SC-<Asset-ID>-####`. The scenario description captures the threat, the exploited vulnerability, and the potential impact on the affected core value(s).

#### Step 4 — Risk analysis

For each scenario, the Chief Information Security Officer assesses likelihood and impact together with the risk owner:

- **Likelihood (L):** Rated on the 1–4 scale defined in CB_POL_L2_11-Risk-Management.
- **Impact (I):** Derived from the asset's protection requirement using the mapping table in CB_POL_L2_11 (PR category → impact level).
- **Risk Score:** L × I, plotted on the risk matrix (CB_POL_L2_11).

The assessment distinguishes:

- **Gross risk:** Risk score without considering implemented controls.
- **Net risk:** Existing security measures (referenced by SM-ID from HB_REG_07) are identified per scenario. Their mitigating effect on likelihood and/or impact is assessed, yielding the net risk score.

#### Step 5 — Risk evaluation and prioritization

The net risk scores are compared against the acceptance criteria defined in CB_POL_L2_11. Risks are prioritized in descending order of risk score. Risks rated **Critical** receive immediate treatment priority.

#### Step 6 — Documentation

For each in-scope asset, the assessment results are documented:

- An individual risk assessment record is created using CB_TPL_21, filed in `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`.
- Aggregated results (scenario list, risk scores, treatment status) are entered in the risk register (HB_REG_05).

### Risk treatment

#### Select treatment options

The risk owner selects a treatment option for each unacceptable risk from the four options defined in CB_POL_L2_11-Risk-Management (Avoid, Reduce, Transfer, Accept).

#### Determine controls and reconcile with Annex A

For treatment option **Reduce**, the Chief Information Security Officer identifies appropriate security measures:

1. **Existing measure lookup:** Check HB_REG_07 (Security Measures Catalogue) for a measure that addresses the scenario's threat–vulnerability combination. If a suitable measure exists, reference it by SM-ID.
2. **New measure creation:** If no suitable measure exists in HB_REG_07, a new measure is defined and added to the catalogue with a new SM-ID.
3. **Risk-to-measure mapping:** The assignment of risk scenarios to security measures is documented in HB_REG_06 (Risk Treatment Plan), linking SC-IDs to SM-IDs.
4. **Annex A reconciliation:** Controls are reconciled with Annex A (ISO 27001) to ensure that no relevant controls have been overlooked (Clause 6.1.3 b, c). New or changed control assignments are updated in the SoA (HB_REG_08).

#### Create risk treatment plan

For each risk requiring treatment, an entry is created in the risk treatment plan (HB_REG_06) containing: risk ID (SC-ID), selected treatment option, assigned security measures (SM-IDs), responsible person, deadline, and expected risk level after implementation.

#### Approval and residual risk acceptance

The risk treatment plan is submitted to top management (CEO/CTO) for approval (Clause 6.1.3 f). Risk owners formally and in writing accept the remaining residual risks. Both approvals are documented in the risk register.

### SoA maintenance

The Statement of Applicability (HB_REG_08-Statement-of-Applicability) is updated as a result of risk treatment (Clause 6.1.3 d). With every risk treatment, the Chief Information Security Officer checks whether new controls need to be added or existing justifications adjusted.

The SoA is the SSOT for control applicability. Direction of change: risk treatment → SoA (HB_REG_08) → coverage matrix (INDEX.md). Never the reverse.

### Cycles and triggers

#### Regular assessment

The complete risk assessment cycle is performed annually, timed before the management review (CB_PRC_09). Results feed into the management review as input (Clause 9.3.2 f). Additionally, the Risk Committee convenes quarterly to review the current risk landscape, assess treatment progress, and adjust priorities where necessary.

#### Event-driven triggers

An unscheduled risk assessment is triggered by:

- Material changes to IT infrastructure or business processes
- Severe security incidents (classification >= "High" in CB_PRC_01)
- Findings from internal or external audits requiring action
- New or changed regulatory requirements
- Changes to the ISMS scope
- Design phase of new projects or significant project changes (addresses A.5.8)
- Planned contracts with suppliers or service providers that process ISMS-relevant information (addresses A.5.19)

---

## CB_PRC_12: Asset Management Process

**File:** `Cyber-Security-Cookbook/Processes/12-Asset-Management.md`
**Version:** 00.01.009
**Classification:** Internal

### Summary

What is not known as an asset cannot be protected. This process governs the systematic identification, maintenance, and relationship documentation of all ISMS-relevant assets across their entire lifecycle. A complete asset inventory is a prerequisite for protection requirements analysis and risk assessment. Without up-to-date asset documentation, critical systems and information remain unrecognized and unprotected.

### Objective and Scope

**Objective:** What is not known as an asset cannot be protected. Without a systematic process for identification, maintenance, and decommissioning, critical systems and information remain unrecognized and unprotected.

This process governs the lifecycle of all ISMS-relevant assets — from identification and ID assignment through registration and relationship mapping to decommissioning (addresses A.5.9). It ensures that the asset inventory is complete and current at all times.

The process operationalizes the requirements from CB_POL_L2_07-Organization (assets section). Results are documented in HB_REG_03 (Asset Register) and form the basis for the protection requirements assessment (CB_PRC_13).

**Scope:** All asset types per CB_POL_L2_07 (assets section) and all lifecycle events. Coordinated by the IS-Coordinator with asset owners.

### Triggers

The process is triggered by:

- Introduction, change, or decommissioning of business processes
- Introduction, change, or decommissioning of applications
- Introduction, change, or decommissioning of IT systems (physical or virtual)
- Introduction, change, or decommissioning of communication links
- Introduction, change, or decommissioning of rooms or buildings
- Deviations identified during reviews or audits

### Process steps

#### 1. Identification

The asset is identified and assigned to an asset type.

**Grouping evaluation.** When a new asset is identified, evaluate whether it fits an existing group based on the five general grouping criteria defined in the organisation standard (CB_POL_L2_07). If yes: increment the group count and add the asset to the Includes column. If no: record as individual object (Count = 1, Includes = —).

#### 2. ID assignment

The asset receives a unique, stable asset ID. The ID does not change over the lifecycle.

#### 3. Registration

The asset is recorded with the defined mandatory attributes in the appropriate asset register (HB_REG_03).

#### 4. Relationship mapping

Relevant relationships to other assets are documented through the cross-reference tables in HB_REG_03. Additionally, the denormalized relationship columns in the asset table are updated.

#### 5. Responsibility assignment

A responsible asset owner is designated and recorded in the register.

#### 6. Approval

The registration is reviewed and approved by the responsible function.

#### 7. Protection requirements trigger

After registration and approval, the IS-Coordinator triggers the protection requirements assessment process (CB_PRC_13) for the new or changed asset. This ensures that C/I/A values are assessed before the asset enters the risk management cycle.

#### 8. Maintenance and update

Changes are recorded on an event-driven basis. Decommissioned assets are marked as "retired" and remain in the register. Material changes to an existing asset trigger a reassessment of protection requirements (CB_PRC_13).

---

## CB_PRC_13: Protection Requirements Assessment Process

**File:** `Cyber-Security-Cookbook/Processes/13-Protection-Requirements.md`
**Version:** 00.01.001
**Classification:** Internal

### Summary

Assets without assessed protection requirements cannot be prioritized for risk treatment. This process describes the systematic assessment of confidentiality, integrity, and availability requirements for all registered assets — from primary assessment through inheritance to documentation and handoff. It operationalizes the protection requirements analysis defined in CB_POL_L2_11 and feeds assessed values into the asset register. Without this process, risk analysis lacks its input data and control selection remains unsubstantiated.

### Objective and Scope

**Standard reference:** CB_POL_L2_11

**Objective:** Assets registered in HB_REG_03 require assessed protection requirements before they can enter risk analysis. Without systematic assessment, risk prioritization lacks objective criteria and audit evidence.

This process describes the operational workflow from scope determination through primary assessment and inheritance to documentation, approval, and handoff to risk management (CB_PRC_07). It ensures that the normative criteria from CB_POL_L2_11 (damage scenarios, maximum principle, cumulation and distribution effects) are applied consistently.

Results are documented in the C/I/A columns of the asset register (HB_REG_03) and in individual assessment records (CB_TPL_19). The process is triggered by new or changed assets (from CB_PRC_12) and by periodic review cycles.

**Scope:** All asset categories in HB_REG_03 within the ISMS scope. Coordinated by the IS-Coordinator with asset owners.

### Triggers

The process is triggered by:

- New or changed asset registered through CB_PRC_12 (Asset Management)
- Periodic review (at least annually, aligned with risk management cycle)
- Material change to business processes, IT landscape, or organizational structure
- Findings from risk analysis, audit, or management review requiring reassessment

### Process Steps

#### 1. Scope determination

The IS-Coordinator identifies the assets to be assessed from HB_REG_03. The scope includes all newly registered assets, assets flagged for review, and assets affected by material changes.

#### 2. Primary assessment — information and business processes

For each information asset and business process, the asset owner assesses confidentiality, integrity, and availability individually using the damage scenarios defined in CB_POL_L2_11. The assessment uses "What if?" analysis: for each core value, the relevant damage scenario category (Normal / High / Very high) is determined based on the most severe plausible impact. The rationale for each rating is documented.

**Availability derivation for business processes:** For process assets, the availability (V) protection requirement is not assessed via damage scenarios but derived from the Business Impact Analysis (BIA). BIA data is sourced from HB_REG_04 (BIA Register). The BIA Tier maps to the availability protection requirement as follows:

| BIA Tier | Classification | Availability PR |
|---|---|---|
| 1 | Critical | Very high |
| 2 | Important | High |
| 3 | Normal | Normal |
| 4 | Low | Normal |

Confidentiality and integrity are still assessed via damage scenarios. The BIA-derived availability value takes precedence over a damage-scenario-based availability assessment for process assets.

**Override documentation (cumulation and distribution):** When an override is applied, the following must be documented: justification for the override, list of affected assets contributing to the cumulation or distribution effect, and the resulting adjusted PR value.

#### 3. Inheritance — applications

The protection requirements of applications are derived from the business processes and information they support. The maximum principle applies: the highest value from any supported process determines the application's protection requirement per core value.

#### 4. Inheritance — IT systems

The protection requirements of IT systems are derived from the applications they host, using the Applications <> IT Systems cross-reference table in HB_REG_03. For virtualized infrastructure, cumulation effects (multiple Normal VMs → aggregated High) and distribution effects (redundant setup → relativized availability requirement) are evaluated and documented.

#### 5. Inheritance — rooms and buildings

The protection requirements of rooms and buildings are derived from the IT systems and media installed within them. Cumulation effects in server rooms, data centres, and archives are evaluated.

#### 6. Inheritance — communication links

Critical communication links are identified based on three criteria:

- External connections (traversing uncontrolled areas, including wireless links)
- Links carrying information with High or Very high protection requirements
- Links connecting production network boundaries

#### 7. Documentation

For each assessed asset or asset group, the IS-Coordinator records:

- C/I/A values in the corresponding columns of HB_REG_03
- An individual assessment record using CB_TPL_19, filed in: `Registers/Protection-Requirements/<Layer>/PR-<Asset-ID>.md`

Layer subdirectories:

| Folder | Asset Layer |
|---|---|
| 1-Information | Information assets |
| 2-Process | Business processes |
| 3-Application | Applications |
| 4-Physical-IT-System | Physical IT systems |
| 5-Virtual-IT-System | Virtual IT systems |
| 6-Communication-Connection | Communication links |
| 7-Room | Rooms |
| 8-Building | Buildings |

#### 8. Approval

The asset owner reviews and approves the protection requirement values for their assets. The CISO verifies cross-asset consistency (inheritance chains, cumulation effects, security zone implications).

#### 9. Handoff to risk management

Assets with a protection requirement of High or Very high in at least one core value are flagged for individual risk analysis in CB_PRC_07 (Risk Management). For each flagged asset, the IS-Coordinator:

1. Creates a risk assessment file from CB_TPL_21, filed in: `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`
2. Communicates the list of flagged assets and their prepared RA files to the CISO for inclusion in the next risk assessment cycle.

---

## CB_PRC_01: Incident Management Process

**File:** `Cyber-Security-Cookbook/Processes/01-Incident-Management.md`
**Version:** 00.01.009
**Classification:** Internal

### Summary

Information security incidents can disrupt business operations and compromise sensitive data if not handled through a structured workflow. This process defines the end-to-end lifecycle from incident reporting and classification through escalation, response, and post-incident review. It implements the operational controls required by ISO 27001 Annex A (A.5.24 through A.5.28) and ensures that every incident is documented, assessed, contained, and used as input for continuous improvement. Without this process, escalation paths remain undefined, regulatory notification deadlines (including GDPR 72-hour obligations) are at risk of being missed, and lessons learned are not systematically captured.

### Objective and Scope

**Objective:** Information security incidents require a rapid, coordinated response. Without a defined process, escalation paths, decision-making authority, and traceability are absent — individual incidents can escalate uncontrollably.

This process defines the workflow from incident reporting through classification and escalation to post-incident review (lessons learned). Relevant incidents are recorded as nonconformities in HB_REG_12 and tracked via CB_PRC_10.

**Scope:** All IS incidents and suspected incidents within the ISMS scope. Triggers: incident report by employees, automated alerts, or external notifications.

### Classification

IS events are assessed and classified according to the following scheme (addresses A.5.25):

| Classification | Action | Description |
|---|---|---|
| Informative events | No action required | Automatically closed, retained for a period per the retention policy. |
| Warning events | Action may be needed soon or immediately | Subject to additional review. |
| Exception events | Action must be taken | An impact analysis is performed and an incident is raised, then handled through the incident management procedure. |

**Criteria for incident classification (exception events):**
- Deliberate human interaction for malicious purposes
- Highly classified information affected
- Unusual circumstances
- Clear violation of IS policies
- Evident risk of the situation worsening
- Actual or potential impact on the organization is significant
- Indications that a control is not functioning effectively

**Prioritisation of exception events (addresses A.5.25):**

| Priority | Impact | Response guidance |
|---|---|---|
| High | Multiple business areas or critical systems affected; confidential or personal data compromised; significant financial or reputational exposure | Immediate IRM team activation; containment within [1h]; parallel regulatory assessment |
| Medium | Single business area or non-critical system affected; no confirmed data exfiltration | CISO-led assessment within [4h]; targeted containment measures |
| Low | Localised inconvenience; single user or device; minor policy deviation without data exposure | ISC resolution within [72h]; documented in regular reporting cycle |

### Escalation

**Severity matrix:**

| Severity | Description | Response time | Escalation path |
|---|---|---|---|
| Critical | Significant actual or potential disruption; large-scale data breach; multiple systems compromised | [Immediately — max 1h] | CISO notifies CEO/CTO within [1h]; IRM team activation |
| High | Serious impact on individual business areas; confirmed compromise of single critical system | [Within 4h] | CISO coordinates response; CTO informed |
| Medium | Localized disruption; no confirmed data exfiltration | [Within 24h] | CISO assesses and assigns to ISC or responsible system owner |
| Low | Localized inconvenience; minor policy violation | [Within 72h] | ISC resolves; CISO informed via regular reporting |

**GDPR supervisory authority notification (Art. 33):** If PII qualification confirms a personal data breach likely to result in a risk to rights and freedoms, the CISO notifies the competent supervisory authority within **72 hours** of becoming aware of the breach.

**NIS2 Directive (if applicable):**

| Deadline | Obligation |
|---|---|
| 24 hours | Early warning: initial notification of a significant incident |
| 72 hours | Full notification: incident assessment with severity, impact, indicators of compromise |
| 1 month | Final report: root cause analysis, mitigation measures applied |

### Response

**Phase 1 — Containment:** Isolate affected systems, disable compromised credentials, preserve volatile evidence, document all containment actions with timestamps.

**Phase 2 — Eradication:** Remove root cause and all artifacts; apply patches or configuration changes; verify eradication through scanning.

**Phase 3 — Recovery:** Restore systems from verified clean backups; implement enhanced monitoring; verify system integrity before returning to production.

**Phase 4 — Communication:** Internal stakeholders informed on need-to-know basis; external communication coordinated exclusively through CISO and communications lead.

### Lessons Learned

After every exception event is resolved, a post-incident review is conducted (addresses A.5.27):

1. CISO schedules a lessons-learned session within [5-10 business days] after incident closure
2. Formal root cause analysis performed (5-Whys or fishbone diagram)
3. Improvement actions assigned to responsible owners with deadlines
4. Tracked in HB_REG_12-Nonconformity-Register via CB_PRC_10-Nonconformity-Management
5. Recurring patterns or systemic weaknesses escalated to the risk management process (CB_PRC_07)

### Risk linkage

Severe security incidents (classification >= "High") trigger an event-driven risk assessment in CB_PRC_07.

---

## CB_PRC_04: Vulnerability Management Process

**File:** `Cyber-Security-Cookbook/Processes/04-Vulnerability-Management.md`
**Version:** 00.01.006
**Classification:** Internal

> **Note:** This document is a skeleton. Sections Identification, Assessment, and Patching contain
> `<!-- TODO -->` placeholders and have not yet been populated with substantive content.
> Only the Objective and Scope section is available.

### Objective and Scope

**Objective:** New vulnerabilities in software and systems are published daily. Without a defined process for identification, assessment, and remediation, known vulnerabilities remain systematically untreated.

This process defines the workflow from vulnerability identification through risk assessment to patching and verification. It ensures that critical vulnerabilities are prioritized and remediated promptly.

The process operationalizes the requirements from CB_POL_L2_03-System-and-Network. Identified vulnerabilities are assessed and, where necessary, recorded as risks in HB_REG_05.

**Scope:** All IT systems, applications, and network components within the ISMS scope. Triggers: vulnerability advisory, scan result, or threat intelligence information.

[Identification, Assessment, and Patching sections: TODO — not yet populated]

---

## CB_PRC_09: Management Review Process

**File:** `Cyber-Security-Cookbook/Processes/09-Management-Review.md`
**Version:** 00.01.008
**Classification:** Internal

> **Note:** This document is a skeleton. Sections Scheduling and frequency, Preparation and inputs,
> Conduct, and Outputs and actions contain `<!-- TODO -->` placeholders and have not yet been
> populated with substantive content. Only the Objective and Scope section is available.

### Objective and Scope

**Objective:** The management review is top management's central steering instrument for the ISMS. Without a defined process, the structured consolidation of all inputs and the traceable derivation of improvement actions are absent.

This process defines the workflow from scheduling and preparation (seven inputs per Clause 9.3.2) through the conduct of the review to outputs and action tracking. It ensures that top management makes informed decisions on ISMS governance.

The process operationalizes the requirements from HB_CLS_9.3 (Management Review). Documentation is produced using CB_TPL_01 (Management Review Template), and actions feed into HB_REG_09 (IS Objectives Register).

**Scope:** Overall ISMS review (at least annually). Triggers: annual scheduled date or extraordinary events.

**Risk linkage:** Risk management results (CB_PRC_07) feed into the management review as Clause 9.3.2 f input. The annual risk assessment cycle is timed before the management review.

[Scheduling, Preparation, Conduct, and Outputs sections: TODO — not yet populated]

---

## CB_PRC_14: Exception Management Process

**File:** `Cyber-Security-Cookbook/Processes/14-Exception-Management.md`
**Version:** 00.01.002
**Classification:** Internal

### Summary

Policy deviations that are not formally approved create uncontrolled risk exposure. This process defines the workflow for requesting, evaluating, approving or rejecting, and reviewing exceptions to IS policies, standards, or controls. It ensures that every deviation is documented, risk-assessed, time-bounded, and linked to compensating controls. Without a structured exception process, policy deviations remain invisible and cannot be tracked or remediated.

### Objective and Scope

**Objective:** Operational reality sometimes requires temporary deviations from IS requirements. Without a formal process, such deviations remain undocumented, unassessed, and uncontrolled — creating blind spots in the risk landscape.

This process defines the lifecycle of exceptions from request through approval or rejection to periodic review and expiry. It links each approved exception to the risk register and enforces remediation deadlines for rejected requests.

The process operationalizes the exception management requirements from CB_POL_L2_11-Risk-Management. Exception records are tracked in HB_REG_EXC_01 (Exception Index) and approved exceptions are reflected in HB_REG_05 (Risk Register).

**Scope:** All planned deviations from IS policies, standards, or Annex A controls within the ISMS scope.

### Triggers

- An employee or asset owner identifies that a policy, standard, or control requirement cannot be met
- An audit finding reveals an existing undocumented deviation
- A project or business change introduces a temporary need to deviate from a requirement

### Process steps

#### 1. Request

The requestor prepares an exception request using CB_TPL_20-Exception-Request. The request must identify the affected policy, standard, or control, describe the deviation, justify why it is unavoidable, specify the requested duration, assess resulting risks, and propose compensating controls.

#### 2. Registration

The Chief Information Security Officer assigns an exception ID (EXC-NNN) and records the request in HB_REG_EXC_01-Exception-Index with status "Pending."

#### 3. Risk assessment

The Chief Information Security Officer evaluates the risk impact of the requested deviation:

- Identifies the protection requirement of the affected asset (Normal, High, Very high)
- Assesses the likelihood and impact of the deviation materializing as a security event
- Evaluates the adequacy of the proposed compensating controls
- Determines the approval authority based on the impact level

#### 4. Decision

**Approval authority:**

| Impact level | Approver |
|---|---|
| Low / Medium | Chief Information Security Officer |
| High | CEO and CTO (joint approval) |

**Approved:** Exception register updated to "Approved"; conditions and expiry date recorded; corresponding entry created in HB_REG_05 with risk type "Exception."

**Rejected:** Remediation deadline set based on protection requirement of affected asset:
- Very high: 30 days
- High: 60 days
- Normal: 90 days

#### 5. Review

Before an approved exception expires, the Chief Information Security Officer reviews whether the deviation is still necessary. Continuation requires a new exception request. Expired exceptions without renewal trigger verification that compliance has been restored.

---

## CB_POL_L2_11: Risk Management Standard

**File:** `Cyber-Security-Cookbook/Policy-Framework/L2_Standards/11-Risk-Management.md`
**Version:** 00.01.016
**Classification:** Internal

### Summary

Without clear criteria for likelihood, impact, and risk acceptance, risk assessments are not comparable. This policy establishes assessment scales, risk matrix, protection requirement categories, acceptance criteria, and treatment options as binding requirements. It forms the normative foundation for consistent risk decisions across the entire ISMS. Without uniform criteria, controls are based on subjective estimates — a serious audit finding.

### Objective and Scope

**Policy reference:** P3
**Operationalized by:** —

**Objective:** Without uniform criteria for likelihood, impact, and risk acceptance, risk assessments are not comparable. Subjective estimates lead to inconsistent controls — a serious audit finding.

This policy establishes assessment scales, 4x4 risk matrix, protection requirement categories, acceptance criteria, and four treatment options as binding requirements (addresses Clause 6.1.2 a, 6.1.3 a).

**Scope:** All IS risks within the ISMS scope (HB_CLS_4.3). Target audience: risk owners, asset owners, Chief Information Security Officer, top management.

### Risk Management Framework

Risk management follows an asset-based end-to-end approach. Each phase builds on the results of the preceding phase.

**Phase 1 — Asset registration:** Assets are identified, classified by category and registered in the asset register (HB_REG_03). The asset management process (CB_PRC_12) governs the lifecycle.

**Phase 2 — Protection requirements analysis:** For each information asset, the protection requirements for C, I, and A are assessed individually. The overall protection requirement is determined by the highest individual value (maximum principle). Protection requirements are inherited along dependency chains.

**Phase 3 — Risk identification and analysis:** For assets with a protection requirement of High or Very high, an individual risk analysis is performed. Risks are identified as threat-vulnerability pairs and assessed using the likelihood × impact matrix. The assessment distinguishes gross risk and net risk.

**Phase 4 — Risk evaluation:** The resulting risk level is compared against the acceptance criteria defined in this standard. Risks exceeding the acceptance threshold require treatment.

**Phase 5 — Risk treatment:** For each risk requiring treatment, one of the four treatment options is selected. Where reduction is chosen, controls are identified and reconciled against the 93 Annex A controls. The SoA (HB_REG_08) is updated accordingly.

**Phase 6 — Approval and acceptance:** The risk treatment plan is approved by top management. Residual risks are formally accepted and documented in the risk register.

#### Phase–Document Matrix

| Phase | Normative basis | Process | Register |
|---|---|---|---|
| 1 — Asset registration | CB_POL_L2_07 (Asset types, grouping) | CB_PRC_12 (Asset lifecycle) | HB_REG_03 (Asset register) |
| 2 — Protection requirements | This standard | CB_PRC_13 (Protection requirements) | HB_REG_03 (C/I/A columns), HB_REG_04 (BIA register) |
| 3 — Risk identification and analysis | This standard | CB_PRC_07 (Risk assessment) | HB_REG_05 (Risk register) |
| 4 — Risk evaluation | This standard | CB_PRC_07 (Risk evaluation) | HB_REG_05 (Risk register) |
| 5 — Risk treatment | This standard | CB_PRC_07 (Risk treatment) | HB_REG_06 (Treatment plan), HB_REG_07 (SM register), HB_REG_08 (SoA) |
| 6 — Approval | This standard | CB_PRC_07 (Approval) | HB_REG_05 (Acceptance records) |

### Protection Requirements Analysis

#### Protection Requirement Categories

| Category | Description |
|---|---|
| Normal | The impact is limited and manageable. Standard controls are sufficient. |
| High | The impact can be considerable. Controls beyond the standard level are required. |
| Very high | The impact can reach existentially threatening or catastrophic proportions. Specific controls and individual risk analysis are mandatory. |

#### Damage Scenarios (mandatory minimum — Normal)

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Violations with minor consequences. Contractual breaches with at most low penalties. |
| Impairment of informational self-determination | Limited disadvantage to data subjects. |
| Impairment of personal safety | Impairment appears unlikely. |
| Impairment of task fulfilment | Impairment is tolerable. Maximum tolerable downtime: [24-72 hours]. |
| Negative internal or external reputation | Minor or only internal reputational impact. |
| Financial impact | Financial damage remains tolerable. |

#### Damage Scenarios (High)

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Violations with significant consequences. Substantial penalties. |
| Impairment of informational self-determination | Significant disadvantage to data subjects. |
| Impairment of personal safety | Impairment cannot be ruled out. |
| Impairment of task fulfilment | Not tolerable for affected individuals. Maximum tolerable downtime: [1-24 hours]. |
| Negative internal or external reputation | Broad reputational or trust damage. |
| Financial impact | Considerable financial losses, but not existentially threatening. |

#### Damage Scenarios (Very high)

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Fundamental violation. Contractual breaches with ruinous liability. |
| Impairment of informational self-determination | May endanger life, limb, or personal freedom of data subjects. |
| Impairment of personal safety | Severe impairment possible. Danger to life and limb. |
| Impairment of task fulfilment | Not tolerable for any affected party. Maximum tolerable downtime: [< 1 hour]. |
| Negative internal or external reputation | Nationwide reputational damage, potentially existence-threatening. |
| Financial impact | Financially existentially threatening. |

#### Assessment Methodology (key rules)

- **Maximum principle:** The highest individual damage value determines the protection requirement per core value.
- **Inheritance:** Business processes → Applications → IT systems → Rooms/Buildings → Communication links.
- **Cumulation effect:** Multiple Normal-rated assets concentrated on one system may aggregate to High.
- **Distribution effect:** Redundant infrastructure may relativize the availability protection requirement.
- **BIA-to-availability derivation:** For process assets, availability PR is derived deterministically from the BIA tier (HB_REG_04).

| BIA Tier | Derived availability category |
|---|---|
| 1 (Critical) | Very high |
| 2 (Important) | High |
| 3 (Normal) | Normal |
| 4 (Low) | Normal |

### Risk Analysis

#### Likelihood Scale

| Level | Label | Description |
|---|---|---|
| 1 | Rare | Less than once in 3 years |
| 2 | Possible | Once in 1-3 years |
| 3 | Likely | Once per year |
| 4 | Frequent | Multiple times per year |

#### Impact Scale

| Level | Label | Description |
|---|---|---|
| 1 | Low | Short-term impairment, damage below 5,000 EUR, no external impact |
| 2 | Moderate | Temporary disruption, damage 5,000-50,000 EUR, limited reputational loss |
| 3 | High | Outage of critical process >24h, damage 50,000-250,000 EUR, significant reputational damage or regulatory reporting obligation |
| 4 | Critical | Existentially threatening impact, damage >250,000 EUR, lasting loss of trust or substantial penalties |

#### Risk Matrix

|  | Low (1) | Moderate (2) | High (3) | Critical (4) |
|---|---|---|---|---|
| **Frequent (4)** | 4 Medium | 8 High | 12 Critical | 16 Critical |
| **Likely (3)** | 3 Low | 6 Medium | 9 High | 12 Critical |
| **Possible (2)** | 2 Low | 4 Medium | 6 Medium | 8 High |
| **Rare (1)** | 1 Low | 2 Low | 3 Low | 4 Medium |

#### Risk Levels

| Risk level | Value range | Action required |
|---|---|---|
| Critical | 12-16 | Immediate treatment required, escalation to executive management |
| High | 8-9 | Treatment within 30 days, risk owner decides |
| Medium | 4-6 | ALARP principle: reduce risk as far as reasonably practicable |
| Low | 1-3 | Acceptance possible, regular monitoring |

#### Impact Derivation from Protection Requirements

| Protection requirement category | Impact baseline |
|---|---|
| Normal | 1 (Low) |
| High | 3 (High) |
| Very high | 4 (Critical) |

`Impact(scenario) = max(Baseline_C, Baseline_I, Baseline_A)` across the core values affected by the scenario. The assessor may adjust the impact upward based on scenario-specific factors, but not below the derived baseline.

#### Gross and Net Risk

**Gross risk:** `Gross risk = Likelihood × Impact` (without existing controls).
**Net risk:** `Net risk = Net likelihood × Net impact` (after existing security measures, referenced by SM-ID from HB_REG_07).

### Risk Identification Methodology

Risk identification follows a catalog-based approach:

| Catalog | Location | Content |
|---|---|---|
| Threat catalogue | Risk-Framework/Threats/ | Threats per asset class with relevance flags and domain/aspect tags |
| Vulnerability catalogue | Risk-Framework/Vulnerabilities/ | Vulnerabilities per asset class with domain/aspect tags |
| Threat-relevance matrix | Risk-Framework/Threats/ (per file) | Which threats apply to which asset classes |

#### Scenario Generation Rules

A risk scenario is generated when all of the following conditions are met:

1. The threat is flagged as relevant for the asset's layer
2. The vulnerability status is `present` or `unknown`
3. At least one aspect tag is shared between the threat and the vulnerability (C, I, V, or other defined aspects)

Each scenario: `SC-<Asset-ID>-####`. Template: "If [threat] occurs and [vulnerability] exists, this could lead to [impact on affected protection goals] for [asset]."

### Risk Treatment

| Option | Description |
|---|---|
| Avoid | The risk-causing activity or technology is discontinued or not introduced. |
| Reduce | Controls reduce likelihood and/or impact. |
| Transfer | The risk or its financial consequences are transferred to third parties. |
| Accept | The residual risk is consciously and documentedly accepted. |

### Risk Acceptance and Exceptions

| Risk level | Acceptance rule |
|---|---|
| Critical (12-16) | Never acceptable. Immediate treatment required. |
| High (8-9) | Acceptance only in justified exceptional cases, with written approval from CEO/CTO. |
| Medium (4-6) | Acceptance by risk owner possible, with documentation of rationale and deadline for reassessment. |
| Low (1-3) | Acceptance by risk owner. Documentation in the risk register is sufficient. |

**Exception vs. risk acceptance:** An exception is a proactive, time-limited, bounded approval with compensating controls and a defined expiry date. Risk acceptance is a reactive, potentially permanent decision to retain a residual risk.

**Approval authority for exceptions:**

| Impact level | Approver |
|---|---|
| Low / Medium | Chief Information Security Officer |
| High | CEO and CTO (joint approval required) |

**Remediation deadlines on rejection:**

| Protection requirement | Remediation deadline |
|---|---|
| Very high | 30 days |
| High | 60 days |
| Normal | 90 days |

---

## CB_POL_L3_08: Business Continuity Handbook

**File:** `Cyber-Security-Cookbook/Policy-Framework/L3_Handbooks-and-Concepts/08-Business-Continuity.md`
**Version:** 00.01.001
**Classification:** Internal

### Summary

Business disruptions from cyberattacks, infrastructure failures, or natural events threaten the continuity of critical services. This handbook provides step-by-step guidance for conducting business impact analyses, developing IT continuity plans, testing recovery capabilities, and coordinating restoration of operations. It operationalizes the BCM requirements into actionable procedures that ensure defined RTO and RPO targets are met. Without concrete methodology and tested plans, recovery efforts remain uncoordinated and recovery objectives unachievable.

### Objective and Scope

**Standard reference:** CB_POL_L2_06-Business-Continuity
**Condensed by:** —

**Objective:** Organizations face the risk of prolonged outages when business continuity measures lack practical implementation guidance. Without a structured methodology for impact analysis, plan development, and recovery coordination, normative requirements remain theoretical and unenforceable.

This handbook translates the BCM requirements from CB_POL_L2_06 into concrete procedures for BIA execution, continuity plan creation, test management, and recovery coordination (addresses A.5.29-5.30).

The handbook connects upstream to CB_POL_L2_06 (requirements and tier model) and laterally to CB_POL_L3_05 (backup strategy) and CB_PRC_03 (operational backup process). Test results and BIA assessments feed into HB_REG_04 (BIA Register).

**Scope:** IT administrators, system owners, and the CISO responsible for BCM implementation. Covers all business-critical IT services and systems within the ISMS scope.

### Conduct Business Impact Analysis

#### Identify critical processes and systems

Compile an inventory of all business processes and their supporting IT services. Use HB_REG_03 (Asset Register) as the primary input for system identification. Collaborate with process owners to validate completeness. Ensure that dependencies between processes are mapped, including upstream and downstream relationships.

#### Assess disruption impact

| Dimension | Assessment question |
|---|---|
| Financial | What is the revenue or cost impact per hour of downtime? |
| Operational | Which downstream processes are blocked? |
| Legal/regulatory | Are compliance obligations or contractual SLAs affected? |
| Reputational | Is customer trust or public perception at risk? |

Determine the Maximum Tolerable Period of Disruption (MTPD) for each process. Derive RTO and RPO values from the MTPD. The RTO must be shorter than the MTPD.

#### Assign recovery tiers

| Tier | RTO/RPO | Criticality | Recovery priority |
|---|---|---|---|
| Tier 1 | 0-4 h | Critical | Immediate — automated failover where possible |
| Tier 2 | 5-24 h | Important | High — manual recovery within one business day |
| Tier 3 | 25-96 h | Normal | Medium — recovery within four business days |
| Tier 4 | > 97 h | Low | Standard — recovery on best-effort basis |

Record all BIA results in HB_REG_04 (BIA Register). Include the assigned tier, RTO, RPO, MTPD, and the date of the last assessment.

**Risk linkage:** BIA Tier assignments feed directly into the Protection Requirements Assessment (CB_PRC_13, Step 2) as the deterministic source for the availability (A) protection requirement of process assets.

### Develop Continuity Plans

#### Recovery strategies

| Strategy | Applicable tiers | Description |
|---|---|---|
| Active-active | Tier 1 | Redundant systems in parallel operation with automatic failover |
| Active-passive | Tier 1-2 | Standby system activated on failure |
| Warm standby | Tier 2 | Pre-configured system requiring data synchronization before activation |
| Cold standby | Tier 3-4 | Hardware or cloud resources provisioned on demand |
| Manual rebuild | Tier 4 | Full system rebuild from backups and documentation |

#### Emergency procedures

The transition from incident to business continuity event occurs when the estimated resolution time exceeds the RTO of an affected Tier-1 or Tier-2 service (addresses A.5.29). Emergency procedures integrate with CB_PRC_01 (Incident Management).

### Test and Maintain Plans

| Test type | Frequency |
|---|---|
| Tabletop exercise | [Semi-annually] |
| Component test | [Quarterly for Tier 1, semi-annually for Tier 2] |
| Integrated test | [Annually] |
| Full simulation | [Annually for Tier 1 — if feasible] |

[...]
