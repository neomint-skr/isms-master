> **Document ID:** CB_POL_L2_11-Risk-Management
> **Version:** 00.01.010
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
**Operationalized by:** —

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

**Phase 5 — Risk treatment:** For each risk requiring treatment, one of the four treatment options is selected. Where mitigation is chosen, controls are identified and reconciled against the 93 Annex A controls. The Statement of Applicability (HB_REG_02) is updated accordingly.

**Phase 6 — Approval and acceptance:** The risk treatment plan is approved by top management. Residual risks are formally accepted and documented in the risk register with rationale, approver and reassessment date.

### Phase–Document Matrix

| Phase | Normative basis | Process | Register |
|---|---|---|---|
| 1 — Asset registration | CB_POL_L2_07 (Asset types, grouping) | CB_PRC_12 (Asset lifecycle) | HB_REG_03 (Asset register) |
| 2 — Protection requirements | This standard (Protection Requirements Analysis) | CB_PRC_07 (Risk management) | HB_REG_03 (C/I/A columns) |
| 3 — Risk identification and analysis | This standard (Risk Criteria, Risk Matrix) | CB_PRC_07 (Risk assessment) | HB_REG_06 (Risk register) |
| 4 — Risk evaluation | This standard (Risk Appetite and Acceptance Criteria) | CB_PRC_07 (Risk evaluation) | HB_REG_06 (Risk register) |
| 5 — Risk treatment | This standard (Treatment Options) | CB_PRC_07 (Risk treatment) | HB_REG_07 (Treatment plan), HB_REG_02 (SoA) |
| 6 — Approval | This standard (Risk Appetite and Acceptance Criteria) | CB_PRC_07 (Approval) | HB_REG_06 (Acceptance records) |

## Risk Criteria

The following criteria ensure that IS risks are assessed consistently and comparably (Clause 6.1.2 a).

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

## Risk Matrix

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

## Protection Requirements Analysis

The protection requirements analysis assesses assets across the three core values: confidentiality (C), integrity (I), and availability (A). It is a prerequisite for risk identification and is conducted on the basis of the assets captured in the asset register (HB_REG_03).

### Protection Requirement Categories

The categories are aligned with BSI Standard 200-2:

| Category | Description |
|---|---|
| Normal | The impact is limited and manageable. Standard controls are sufficient. |
| High | The impact can be considerable. Controls beyond the standard level are required. |
| Very high | The impact can reach existentially threatening or catastrophic proportions. Specific controls and individual risk analysis are mandatory. |

The protection requirements analysis is performed per asset and per core value (C/I/A) individually. The overall protection requirement of an asset is determined by the highest individual value (maximum principle). Assets with a protection requirement of "High" or "Very high" in at least one core value require an individual risk analysis. Results are documented in the C/I/A columns of the asset register (HB_REG_03).

### Protection Requirement Inheritance

Protection requirements can be inherited along dependency chains: an IT system inherits the protection requirement of the information processed on it. Inheritance relationships are traced through the cross-reference registers in the asset register. Where cumulation effects arise (many items of information with normal protection requirements on one system), the aggregated protection requirement may be higher.

## Risk Appetite and Acceptance Criteria

[Organization] pursues a conservative risk appetite in the area of information security.

| Risk level | Acceptance rule |
|---|---|
| Critical (12-16) | Never acceptable. Immediate treatment required. |
| High (8-9) | Acceptance only in justified exceptional cases, with written approval from executive management (CEO/CTO). |
| Medium (4-6) | Acceptance by risk owner possible, with documentation of rationale and deadline for reassessment. |
| Low (1-3) | Acceptance by risk owner. Documentation in the risk register is sufficient. |

Every risk acceptance is documented in the risk register (HB_REG_06) with rationale, date, and approving person. Accepted risks are reassessed in the next regular risk assessment cycle.

## Treatment Options

For each identified risk, at least one of the following treatment options is selected (Clause 6.1.3 a).

| Option | Description | Example |
|---|---|---|
| Avoid | The risk-causing activity or technology is discontinued or not introduced. | Refrain from using an insecure cloud service |
| Mitigate | Controls reduce likelihood and/or impact. | Implement MFA, activate encryption |
| Transfer | The risk or its financial consequences are transferred to third parties. | Cyber insurance, outsourcing with SLA |
| Accept | The residual risk is consciously and documentedly accepted. | Low risks with formal acceptance |

The selection of the treatment option is made by the risk owner in coordination with the Chief Information Security Officer. For "Mitigate," appropriate controls are determined and reconciled with Annex A of ISO 27001 (Clause 6.1.3 b, c). The selected controls are documented in the risk treatment plan (HB_REG_07) and their effectiveness verified within the risk management process (CB_PRC_07).

## See also

- CB_POL_L1_01-Policy — Principle P3 (Risk orientation)
- CB_POL_L2_07-Organisation — Asset management as foundation for risk assessment
- CB_PRC_07-Risk-Management — Operational risk management process
- HB_REG_06-Risk-Register — Documented risk entries
- HB_REG_07-Risk-Treatment-Plan — Treatment plan
- HB_REG_02-Statement-of-Applicability — Control applicability
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
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
