> **Document ID:** CB_POL_L2_11-Risk-Management
> **Version:** 00.01.015
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Risk Management Standard

## Summary

Without clear criteria for likelihood, impact, and risk acceptance, risk assessments are not comparable. This policy establishes assessment scales, risk matrix, protection requirement categories, acceptance criteria, and treatment options as binding requirements. It forms the normative foundation for consistent risk decisions across the entire ISMS. Without uniform criteria, controls are based on subjective estimates — a serious audit finding.

## Objective and Scope

**Policy reference:** P3
**Operationalized by:** CB_PRC_13, CB_PRC_07

**Objective:** Without uniform criteria for likelihood, impact, and risk acceptance, risk assessments are not comparable. Subjective estimates lead to inconsistent controls — a serious audit finding.

This policy establishes assessment scales, 4x4 risk matrix, protection requirement categories, acceptance criteria, and four treatment options as binding requirements (addresses Clause 6.1.2 a, 6.1.3 a). It creates the normative foundation for consistent and traceable risk decisions.

The standard implements principle P3 (Risk orientation) of the IS policy. The operational risk management process is defined in CB_PRC_07 (Risk Management); results are documented in HB_REG_06 (Risk Register) and HB_REG_07 (Risk Treatment Plan).

**Scope:** All IS risks within the ISMS scope (HB_CLS_4.3). Target audience: risk owners, asset owners, Chief Information Security Officer, top management.

## Risk Management Framework

Risk management follows an asset-based end-to-end approach. Each phase builds on the results of the preceding phase.

**Phase 1 — Asset registration:** Assets are identified, classified by category and registered in the asset register (HB_REG_03). The asset management process (CB_PRC_12) governs the lifecycle from identification through disposal.

**Phase 2 — Protection requirements analysis:** For each information asset, the protection requirements for confidentiality, integrity and availability are assessed individually. The overall protection requirement is determined by the highest individual value (maximum principle). Protection requirements are inherited along dependency chains documented in the asset register cross-references. Results are recorded in the C/I/A columns of the asset register.

**Phase 3 — Risk identification and analysis:** For assets with a protection requirement of High or Very high, an individual risk analysis is performed. Risks are identified as threat-vulnerability pairs and assessed using the likelihood × impact matrix. The assessment distinguishes gross risk (without existing controls) and net risk (with existing controls).

**Phase 4 — Risk evaluation:** The resulting risk level is compared against the acceptance criteria defined in this standard. Risks exceeding the acceptance threshold require treatment.

**Phase 5 — Risk treatment:** For each risk requiring treatment, one of the four treatment options is selected. Where reduction is chosen, controls are identified and reconciled against the 93 Annex A controls. The Statement of Applicability (HB_REG_02) is updated accordingly.

**Phase 6 — Approval and acceptance:** The risk treatment plan is approved by top management. Residual risks are formally accepted and documented in the risk register with rationale, approver and reassessment date.

### Phase–Document Matrix

| Phase | Normative basis | Process | Register |
|---|---|---|---|
| 1 — Asset registration | CB_POL_L2_07 (Asset types, grouping) | CB_PRC_12 (Asset lifecycle) | HB_REG_03 (Asset register) |
| 2 — Protection requirements | This standard (Protection Requirements Analysis) | CB_PRC_13 (Protection requirements) | HB_REG_03 (C/I/A columns), HB_REG_10 (BIA register) |
| 3 — Risk identification and analysis | This standard (Risk Identification Methodology, Risk Analysis) | CB_PRC_07 (Risk assessment) | HB_REG_06 (Risk register) |
| 4 — Risk evaluation | This standard (Risk Acceptance and Exceptions) | CB_PRC_07 (Risk evaluation) | HB_REG_06 (Risk register) |
| 5 — Risk treatment | This standard (Risk Treatment, Security Measures Register) | CB_PRC_07 (Risk treatment) | HB_REG_07 (Treatment plan), HB_REG_12 (SM register), HB_REG_02 (SoA) |
| 6 — Approval | This standard (Risk Acceptance and Exceptions) | CB_PRC_07 (Approval) | HB_REG_06 (Acceptance records) |

## Asset Input

Risk management requires a complete and current asset inventory as its foundation. Assets must be identified, categorised by type and registered in the asset register (HB_REG_03) before any protection requirements analysis or risk assessment can commence.

The normative basis for asset types, grouping, and classification is defined in CB_POL_L2_07 (Asset Management). The operational lifecycle — from identification through disposal — is governed by CB_PRC_12 (Asset Management Process).

Asset register entries must include cross-references documenting dependency chains (business processes → applications → IT systems → rooms/buildings → communication links). These cross-references are essential for protection requirements inheritance in Phase 2.

Without a complete asset inventory, neither protection requirements analysis nor risk identification can produce reliable results.

## Protection Requirements Analysis

The protection requirements analysis assesses assets across the three core values: confidentiality (C), integrity (I), and availability (A). It is a prerequisite for risk identification and is conducted on the basis of the assets captured in the asset register (HB_REG_03). The operational assessment process is defined in CB_PRC_13 (Protection Requirements Assessment).

### Protection Requirement Categories

The three-level scale (Normal / High / Very high) aligned with BSI Standard 200-2 [REF:BSI17, Ch. 8.2.1] is binding for all protection requirements assessments. No additional or alternative scales are permitted.

| Category | Description |
|---|---|
| Normal | The impact is limited and manageable. Standard controls are sufficient. |
| High | The impact can be considerable. Controls beyond the standard level are required. |
| Very high | The impact can reach existentially threatening or catastrophic proportions. Specific controls and individual risk analysis are mandatory. |

The protection requirements analysis is performed per asset and per core value (C/I/A) individually. The overall protection requirement of an asset is determined by the highest individual value (maximum principle). Assets with a protection requirement of "High" or "Very high" in at least one core value require an individual risk analysis. Results are documented in the C/I/A columns of the asset register (HB_REG_03).

### Damage Scenarios

Damage scenarios serve as the basis for assigning protection requirement categories [REF:BSI17, Ch. 8.2.1]. The type and number of scenarios may be adapted to organizational priorities. The following six scenarios are mandatory as a minimum.

#### Normal

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Violations with minor consequences. Contractual breaches with at most low penalties. |
| Impairment of informational self-determination | Personal data processing may cause limited disadvantage to data subjects in their social standing or economic situation. |
| Impairment of personal safety | Impairment appears unlikely. |
| Impairment of task fulfilment | Impairment is tolerable. Maximum tolerable downtime: [24-72 hours — organization-specific]. |
| Negative internal or external reputation | Minor or only internal reputational impact. |
| Financial impact | Financial damage remains tolerable. Threshold: [amount or percentage — calibrated to organization scale]. |

#### High

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Violations with significant consequences. Contractual breaches with substantial penalties. |
| Impairment of informational self-determination | Personal data processing may cause significant disadvantage to data subjects in their social standing or economic situation. |
| Impairment of personal safety | Impairment cannot be ruled out. |
| Impairment of task fulfilment | Impairment is not tolerable for affected individuals. Maximum tolerable downtime: [1-24 hours — organization-specific]. |
| Negative internal or external reputation | Broad reputational or trust damage. |
| Financial impact | Considerable financial losses, but not existentially threatening. Threshold: [amount or percentage — calibrated to organization scale]. |

#### Very high

| Scenario | Description |
|---|---|
| Violation of laws, regulations, or contracts | Fundamental violation. Contractual breaches with ruinous liability. |
| Impairment of informational self-determination | Personal data processing may endanger life, limb, or personal freedom of data subjects. |
| Impairment of personal safety | Severe impairment is possible. Danger to life and limb. |
| Impairment of task fulfilment | Impairment is not tolerable for any affected party. Maximum tolerable downtime: [< 1 hour — organization-specific]. |
| Negative internal or external reputation | Nationwide reputational damage, potentially existence-threatening. |
| Financial impact | Financial damage is existentially threatening. Threshold: [amount or percentage — calibrated to organization scale]. |

The thresholds (downtime windows, financial amounts) are calibrated to the scale of [Organization] and are reviewed annually as part of the management review. Additional scenarios (e.g. impairment of third-party services, impact on external infrastructure) may be added.

### Assessment Methodology

The methodology follows BSI Standard 200-2 [REF:BSI17, Ch. 8.2.2] and applies to all asset categories in the asset register (HB_REG_03).

**Primary assessment.** Protection requirements are assessed directly for information and business processes using the damage scenarios defined above. The assessment determines the original protection requirement values for C, I, and A.

**Inheritance.** Protection requirements are inherited along the dependency chains documented in the cross-reference tables of the asset register: business processes → applications → IT systems → rooms/buildings → communication links. The direction of inheritance follows the data flow and processing dependencies.

**Maximum principle.** The highest individual damage value across all relevant scenarios determines the protection requirement for each core value. The overall protection requirement of an asset equals the highest value among C, I, and A.

**Cumulation effect.** Where multiple assets with Normal protection requirements are concentrated on a single system or in a single room, the aggregated impact may exceed the Normal category. The cumulated protection requirement is assessed as a whole.

**Distribution effect.** Where redundant infrastructure (e.g. hot standby, clustered systems) already mitigates availability risks, the inherited protection requirement may be relativized. Distribution effects occur primarily for availability, but may also apply to confidentiality where only non-critical subsets are processed. Distribution effects are documented with rationale.

**BIA-to-availability derivation.** For process assets, the availability (A) protection requirement is deterministically derived from the BIA tier assigned in the BIA register (HB_REG_10). This ensures consistency between business impact assessment and protection requirements.

| BIA Tier | Derived availability category |
|---|---|
| 1 (Critical) | Very high |
| 2 (Important) | High |
| 3 (Normal) | Normal |
| 4 (Low) | Normal |

Confidentiality and integrity remain subject to primary assessment via damage scenarios.

**Override documentation.** When the cumulation or distribution effect leads to a protection requirement that deviates from the maximum principle, an override is documented in the protection requirements record (PR record). Each override must include: override type (cumulation or distribution), affected parent assets, rationale, and resulting adjusted value. Overrides are auditable, versioned, and subject to review during reassessment cycles.

**Iterative character.** The protection requirements analysis is an iterative process. After risk analyses or significant changes, results are reviewed and adjusted as needed.

### Assessment Scope

The protection requirements analysis covers all asset categories in the asset register [REF:BSI17, Ch. 8.2.3-8.2.8]:

| Asset category | Primary or inherited | Key considerations |
|---|---|---|
| Information and business processes | Primary (direct damage scenario assessment) | "What if?" analysis with process owners. Complex processes may be decomposed into sub-processes. |
| Applications | Inherited from business processes | Includes central services (DNS, e-mail, databases). |
| IT systems (physical and virtual) | Inherited from applications | Includes virtualization hosts. Cumulation and distribution effects to be evaluated per host. |
| ICS and IoT devices | Inherited from processes/applications | Protection requirement categories may require adapted downtime thresholds. |
| Rooms and buildings | Inherited from installed IT systems and stored media | Cumulation effects in server rooms, data centres, and archives. |
| Communication links | Inherited from connected systems | Critical links: external connections, links carrying high/very high information, production network boundaries. |

### Conclusions

The results of the protection requirements analysis determine the further course of the security concept [REF:BSI17, Ch. 8.2.9].

**Security zones.** Where areas of different protection requirements coexist, security zones (physical, technical, personnel) are established to contain the propagation of higher protection requirements through the maximum principle.

**Link to risk analysis.** Assets with a protection requirement of High or Very high in at least one core value require an individual risk analysis as defined in Phase 3 of this standard. Standard controls (IT-Grundschutz baseline) are generally sufficient for assets with Normal protection requirements.

## Risk Analysis

The risk analysis builds on the results of the protection requirements analysis. Assets assessed with a protection requirement of High or Very high in at least one core value (C, I, A) require an individual risk analysis as defined in Phase 3 of this standard (addresses Clause 6.1.2 a).

Risks are identified as threat-vulnerability pairs affecting the assessed assets. Each risk is evaluated using a likelihood × impact assessment. The product determines the risk level via the risk matrix. The assessment distinguishes between gross risk (inherent risk without considering existing controls) and net risk (residual risk after considering existing controls in place).

The following sections define the binding scales for likelihood and impact, the risk matrix, and the resulting risk levels.

### Likelihood

| Level | Label | Description |
|---|---|---|
| 1 | Rare | Less than once in 3 years; theoretically possible, no known incidents |
| 2 | Possible | Once in 1-3 years; incidents known in the industry |
| 3 | Likely | Once per year; already occurred internally or regularly in the industry |
| 4 | Frequent | Multiple times per year; repeated occurrence expected |

### Impact

Assessment is based on the highest damage across the dimensions: business process, financial damage, reputational damage, and compliance violation.

| Level | Label | Description |
|---|---|---|
| 1 | Low | Short-term impairment, damage below 5,000 EUR, no external impact |
| 2 | Moderate | Temporary disruption of a business process, damage 5,000-50,000 EUR, limited reputational loss |
| 3 | High | Outage of a critical process >24h, damage 50,000-250,000 EUR, significant reputational damage or regulatory reporting obligation |
| 4 | Critical | Existentially threatening impact, damage >250,000 EUR, lasting loss of trust or substantial penalties |

The EUR thresholds are calibrated to the scale of [Organization] and are reviewed annually as part of the management review.

### Risk Matrix

The risk level results from multiplication of likelihood and impact.

|  | Low (1) | Moderate (2) | High (3) | Critical (4) |
|---|---|---|---|---|
| **Frequent (4)** | 4 Medium | 8 High | 12 Critical | 16 Critical |
| **Likely (3)** | 3 Low | 6 Medium | 9 High | 12 Critical |
| **Possible (2)** | 2 Low | 4 Medium | 6 Medium | 8 High |
| **Rare (1)** | 1 Low | 2 Low | 3 Low | 4 Medium |

### Risk Levels

| Risk level | Value range | Colour | Action required |
|---|---|---|---|
| Critical | 12-16 | Red | Immediate treatment required, escalation to executive management |
| High | 8-9 | Red | Treatment within 30 days, risk owner decides |
| Medium | 4-6 | Yellow | ALARP principle: reduce risk as far as reasonably practicable |
| Low | 1-3 | Green | Acceptance possible, regular monitoring |

Yellow risks (Medium) are subject to the ALARP principle (As Low As Reasonably Practicable): they are treated provided the cost of risk reduction is proportionate to the risk level.

### Impact Derivation from Protection Requirements

The impact baseline for a risk scenario is derived from the protection requirement of the affected asset. This ensures consistency between the protection requirements analysis and the risk scoring.

| Protection requirement category | Impact baseline |
|---|---|
| Normal | 1 (Low) |
| High | 3 (High) |
| Very high | 4 (Critical) |

The scenario-specific impact is determined as: `Impact(scenario) = max(Baseline_C, Baseline_I, Baseline_A)` across the core values affected by the scenario (as indicated by the aspect tags of the threat-vulnerability pair). The assessor may adjust the impact upward based on scenario-specific factors, but not below the derived baseline.

### Gross and Net Risk

**Gross risk** is the inherent risk level without considering any existing controls: `Gross risk = Likelihood × Impact`.

**Net risk** accounts for existing security measures (SM-IDs from HB_REG_12) that reduce likelihood and/or impact: `Net risk = Net likelihood × Net impact`. Existing measures are referenced by their SM-ID; their effectiveness determines the reduction applied.

The risk register (HB_REG_06) documents both gross and net risk for each scenario.

## Risk Identification Methodology

Risk identification follows a catalog-based approach. Instead of ad-hoc threat brainstorming, structured catalogs provide the systematic basis for identifying risks per asset (addresses Clause 6.1.2 a).

### Catalog Types

Three catalog types form the foundation of risk identification:

| Catalog | Location | Content |
|---|---|---|
| Threat catalogue | Risk-Framework/Threats/ | Threats per asset class with relevance flags and domain/aspect tags |
| Vulnerability catalogue | Risk-Framework/Vulnerabilities/ | Vulnerabilities per asset class with domain/aspect tags |
| Threat-relevance matrix | Risk-Framework/Threats/ (per file) | Which threats apply to which asset classes |

The catalogs are maintained as part of the risk framework in the ISMS handbook (HB_REG_RF).

### Vulnerability Assessment

For each asset undergoing risk assessment, the vulnerability catalogue of the corresponding asset class is evaluated. Each vulnerability receives one of the following status values:

| Status | Meaning | Generates scenario |
|---|---|---|
| present | The vulnerability exists for this asset | Yes |
| not present | The vulnerability does not exist for this asset | No |
| unknown | The vulnerability status has not yet been determined | Yes |
| not applicable | The vulnerability does not apply to this specific asset | No |

The status `unknown` generates scenarios to prevent false negatives — unassessed vulnerabilities are treated as potential weaknesses until clarified. Evidence or rationale for each status determination is documented.

### Scenario Generation Rules

A risk scenario is generated when all of the following conditions are met:

1. The threat is flagged as relevant for the asset's layer (asset class)
2. The vulnerability status is `present` or `unknown`
3. At least one aspect tag is shared between the threat and the vulnerability (C, I, V, or other defined aspects)

Domain tags (ORG, TECH, ENV, HUMAN, SUP) serve as plausibility aids for prioritization but do not prevent scenario generation.

### Scenario Identification

Each scenario receives a unique identifier: `SC-<Asset-ID>-####` (sequential within the asset's risk assessment). Example: `SC-PIT-003-0001`.

### Scenario Text Template

Each scenario is formulated in the subjunctive to express a conditional risk:

> "If [threat] occurs and [vulnerability] exists, this could lead to [impact on affected protection goals] for [asset]."

Example: "If unauthorized physical access (G 0.16) occurs and server room access control is inadequate (ROM-V05), this could lead to a loss of confidentiality and availability for server room ROM-001."

## Risk Treatment

For each identified risk, at least one of the following treatment options is selected (Clause 6.1.3 a).

| Option | Description | Example |
|---|---|---|
| Avoid | The risk-causing activity or technology is discontinued or not introduced. | Refrain from using an insecure cloud service |
| Reduce | Controls reduce likelihood and/or impact. | Implement MFA, activate encryption |
| Transfer | The risk or its financial consequences are transferred to third parties. | Cyber insurance, outsourcing with SLA |
| Accept | The residual risk is consciously and documentedly accepted. | Low risks with formal acceptance |

The selection of the treatment option is made by the risk owner in coordination with the Chief Information Security Officer. For "Reduce," appropriate security measures are identified from the security measures register (HB_REG_12) or newly created there. The assignment of risks to measures is documented in the risk treatment plan (HB_REG_07). Selected controls are reconciled with Annex A of ISO 27001 (Clause 6.1.3 b, c) and their effectiveness verified within the risk management process (CB_PRC_07).

## Security Measures Register

Security measures are the organization's operational controls that address identified risks. The security measures register (HB_REG_12) is the single source of truth for all security measures implemented or planned within the ISMS.

### Uniqueness Principle

Each security measure is recorded exactly once in the register. Risk assessments and the risk treatment plan reference measures exclusively by their SM-ID. This prevents duplication and ensures consistent status tracking across the ISMS.

### SM-ID Schema

Security measures are identified by: `SM-####` (sequential, zero-padded). Example: `SM-0012`.

### Structure

The register is structured by ISO 27001 Annex A control categories:

| Section | Category | Annex A range |
|---|---|---|
| Organizational controls | A.5 | A.5.1 – A.5.37 |
| People controls | A.6 | A.6.1 – A.6.8 |
| Physical controls | A.7 | A.7.1 – A.7.14 |
| Technological controls | A.8 | A.8.1 – A.8.34 |

### Mandatory Fields

Each security measure entry must document:

| Field | Description |
|---|---|
| SM-ID | Unique identifier (SM-####) |
| Title | Descriptive name of the measure |
| Type | Preventive, detective, or corrective |
| Annex A reference | Applicable Annex A control(s) |
| Description | Implementation details |
| Owner | Responsible role |
| Status | Planned, in implementation, implemented, or verified |
| Evidence | Links to evidence artifacts |

### Gap Logic

When a risk scenario has no matching security measure in the register, or when an existing measure only partially addresses the scenario, this constitutes a gap. Gaps are flagged in the risk treatment plan (HB_REG_07) and must be addressed through one of the treatment options. Unaddressed gaps represent residual risks that require formal acceptance.

### Relationship to Risk Treatment Plan

The risk treatment plan (HB_REG_07) documents the assignment of risks to security measures and the approval of treatment decisions. The security measures register (HB_REG_12) is the SSOT for measure details. The treatment plan references SM-IDs; it does not duplicate measure descriptions.

## Risk Acceptance and Exceptions

[Organization] pursues a conservative risk appetite in the area of information security.

| Risk level | Acceptance rule |
|---|---|
| Critical (12-16) | Never acceptable. Immediate treatment required. |
| High (8-9) | Acceptance only in justified exceptional cases, with written approval from executive management (CEO/CTO). |
| Medium (4-6) | Acceptance by risk owner possible, with documentation of rationale and deadline for reassessment. |
| Low (1-3) | Acceptance by risk owner. Documentation in the risk register is sufficient. |

Every risk acceptance is documented in the risk register (HB_REG_06) with rationale, date, and approving person. Accepted risks are reassessed in the next regular risk assessment cycle.

### Exception Management

An exception is a planned, time-limited deviation from a policy, standard, or control requirement. Unlike risk acceptance — which is a reactive, potentially permanent decision to retain a residual risk — an exception is a proactive, bounded approval with compensating controls and a defined expiry date.

**Mandatory fields:** Every exception request must document the affected policy or control, the nature of the deviation, a justification, the requested duration, resulting risks, and proposed compensating controls. The exception request template (CB_TPL_20-Exception-Request) defines the required fields.

**Approval authority:**

| Impact level | Approver |
|---|---|
| Low / Medium | Chief Information Security Officer |
| High | CEO and CTO (joint approval required) |

The impact level is determined by the protection requirement of the affected asset (Normal = Low, High = Medium, Very high = High).

**Remediation deadlines on rejection:** Where an exception request is rejected, the requestor must restore compliance within a deadline based on the protection requirement of the affected asset:

| Protection requirement | Remediation deadline |
|---|---|
| Very high | 30 days |
| High | 60 days |
| Normal | 90 days |

**Risk linkage:** Approved exceptions are recorded as risk type "Exception" in the risk register (HB_REG_06) and reassessed within the regular risk review cycle. The full exception lifecycle — including pending, rejected, expired, and renewed entries — is tracked in the exception register (HB_REG_EXC_01-Exception-Index).

**Review:** Before an exception expires, the Chief Information Security Officer reviews whether the deviation is still necessary. Continuation requires a new exception request. Expired exceptions without renewal are closed.

The operational exception management workflow is defined in CB_PRC_14-Exception-Management.

## See also

- CB_POL_L1_01-Policy — Principle P3 (Risk orientation)
- CB_POL_L2_07-Organisation — Asset management as foundation for risk assessment
- CB_PRC_07-Risk-Management — Operational risk management process
- CB_PRC_13-Protection-Requirements — Protection requirements assessment process
- HB_REG_03-Asset-Register — Asset inventory with C/I/A values
- HB_REG_06-Risk-Register — Scenario-based risk entries
- HB_REG_07-Risk-Treatment-Plan — Risk-to-measure assignment and approval
- HB_REG_10-BIA-Register — BIA tiers for availability derivation
- HB_REG_12-Security-Measures-Register — SSOT for security measures
- HB_REG_02-Statement-of-Applicability — Control applicability
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix
- CB_PRC_14-Exception-Management — Exception approval workflow
- HB_REG_EXC_01-Exception-Index — Exception register
- CB_TPL_20-Exception-Request — Exception request template

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.015 | 2026-02-11 | Claude (AI) | Major extension: catalog-based risk identification methodology, vulnerability assessment, scenario generation rules, impact derivation from PR, gross/net risk, BIA-to-V derivation, override rules, security measures register (REG_12) |
| 00.01.014 | 2026-02-11 | Claude (AI) | Added Exception Management section with approval authority, remediation deadlines, risk linkage (merge from retorio) |
| 00.01.013 | 2026-02-11 | skr | Renamed risk treatment option "Mitigate" to "Reduce" for ISO/BSI alignment |
| 00.01.012 | 2026-02-11 | Claude (AI) | Restructure sections to match process flow (asset input → protection requirements → risk analysis → risk treatment → exceptions) |
| 00.01.011 | 2026-02-11 | Claude (AI) | Expand Protection Requirements Analysis: damage scenarios (BSI 200-2), assessment methodology, scope, conclusions; Phase-Document Matrix: Phase 2 → CB_PRC_13 |
| 00.01.010 | 2026-02-11 | Claude (AI) | Add Risk Management Framework section with end-to-end phase model and document matrix |
| 00.01.009 | 2026-02-10 | Claude (AI) | Remove Risk Management Roles section; roles consolidated in CLS 5.3 |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Risk levels: colour coding and ALARP principle added (REC-411) |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.004 | 2026-02-09 | CISO | Objective and scope: bold label pattern (Objective + Scope) |
| 00.01.003 | 2026-02-08 | CISO | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.01.002 | 2026-02-08 | CISO | Traceability: operationalized-by field added |
| 00.01.001 | 2026-02-08 | CISO | References: HB_PRC->CB_PRC (PRC relocation) |
| 00.01.000 | 2026-02-08 | CISO | Initial version: risk criteria, matrix, protection requirements, acceptance, treatment, roles |
