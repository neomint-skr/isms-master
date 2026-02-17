> **Document ID:** CB_PRC_13-Protection-Requirements
> **Version:** 00.01.004
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, A.5.9
> **Last modified:** 2026-02-17
> **Approval:** —
> **Review cycle:** Annual

---

# Protection Requirements Assessment Process

## Summary

Assets without assessed protection requirements cannot be prioritized for risk treatment. This process describes the systematic assessment of confidentiality, integrity, and availability requirements for all registered assets — from primary assessment through inheritance to documentation and handoff. It operationalizes the protection requirements analysis defined in CB_POL_L2_11 and feeds assessed values into the asset register. Without this process, risk analysis lacks its input data and control selection remains unsubstantiated.

## Objective and Scope

**Standard reference:** CB_POL_L2_11

**Objective:** Assets registered in HB_REG_03 require assessed protection requirements before they can enter risk analysis. Without systematic assessment, risk prioritization lacks objective criteria and audit evidence.

This process describes the operational workflow from scope determination through primary assessment and inheritance to documentation, approval, and handoff to risk management (CB_PRC_07). It ensures that the normative criteria from CB_POL_L2_11 (damage scenarios, maximum principle, cumulation and distribution effects) are applied consistently.

Results are documented in the C/I/A columns of the asset register (HB_REG_03) and in individual assessment records (CB_TPL_19). The process is triggered by new or changed assets (from CB_PRC_12) and by periodic review cycles.

**Scope:** All asset categories in HB_REG_03 within the ISMS scope. Coordinated by the IS-Coordinator with asset owners. Roles per HB_CLS_5.3.

## Triggers

The process is triggered by:

- New or changed asset registered through CB_PRC_12 (Asset Management)
- Periodic review (at least annually, aligned with risk management cycle)
- Material change to business processes, IT landscape, or organizational structure
- Findings from risk analysis, audit, or management review requiring reassessment

## Process Steps

### 1. Scope determination

The IS-Coordinator identifies the assets to be assessed from HB_REG_03. The scope includes all newly registered assets, assets flagged for review, and assets affected by material changes. Assets already assessed and unchanged since last review are excluded.

### 2. Primary assessment — business processes

For each business process, the asset owner assesses confidentiality, integrity, and availability individually using the damage scenarios defined in CB_POL_L2_11 (Protection Requirements Analysis). Information types processed by each business process are considered as attributes in the assessment. The assessor reviews the information types documented in the "Processed Information" column of HB_REG_03 and evaluates their aggregated sensitivity profile against the damage scenarios: a process that handles highly sensitive information types (e.g. personal data, trade secrets) achieves at minimum the damage scenario category corresponding to the most sensitive information type. If no information types are documented for a process, the assessment is suspended until delivery through CB_PRC_12 (Step 3). The assessment uses "What if?" analysis: for each core value, the relevant damage scenario category (Normal / High / Very high) is determined based on the most severe plausible impact. The rationale for each rating is documented.

**Availability derivation for business processes:** For process assets, the availability (V) protection requirement is not assessed via damage scenarios but derived from the Business Impact Analysis (BIA). BIA data is sourced from HB_REG_04 (BIA Register). The BIA Tier maps to the availability protection requirement as follows (mapping table defined in CB_POL_L2_11):

| BIA Tier | Classification | Availability PR |
|---|---|---|
| 1 | Critical | Very high |
| 2 | Important | High |
| 3 | Normal | Normal |
| 4 | Low | Normal |

Confidentiality and integrity are still assessed via damage scenarios as described above. The BIA-derived availability value takes precedence over a damage-scenario-based availability assessment for process assets.

For complex business processes with High or Very high protection requirements, decomposition into sub-processes is evaluated to limit the scope of elevated requirements.

**Override documentation (cumulation and distribution):** During any assessment or inheritance step, the assessor may invoke cumulation (aggregated risk raises the PR) or distribution (redundancy lowers the PR) effects as defined in CB_POL_L2_11. When an override is applied, the following must be documented in the asset's PR record: justification for the override, list of affected assets contributing to the cumulation or distribution effect, and the resulting adjusted PR value. The override documentation is reviewed and approved in Step 8.

### 3. Inheritance — applications

The protection requirements of applications are derived from the business processes and information they support. The cross-reference table Processes <> Applications in HB_REG_03 provides the dependency chains. The maximum principle applies: the highest value from any supported process determines the application's protection requirement per core value.

Cumulation effects are evaluated where an application supports multiple processes with Normal protection requirements.

### 4. Inheritance — IT systems

The protection requirements of IT systems (physical and virtual) are derived from the applications they host, using the Applications <> IT Systems cross-reference table in HB_REG_03.

For virtualized infrastructure, the protection requirements of the virtualization host are derived from all hosted virtual machines. Cumulation effects (multiple Normal VMs → aggregated High) and distribution effects (redundant setup → relativized availability requirement) are evaluated and documented.

For cloud-hosted systems (IaaS), the same inheritance logic applies. Where live migration prevents static assignment, protection requirement zones with physical separation are recommended.

### 5. Inheritance — rooms and buildings

The protection requirements of rooms and buildings are derived from the IT systems and media installed within them, using the IT Systems <> Rooms and Rooms <> Buildings cross-reference tables in HB_REG_03. Cumulation effects in server rooms, data centres, and archives are evaluated.

### 6. Inheritance — communication links

Critical communication links are identified based on three criteria:

- External connections (traversing uncontrolled areas, including wireless links)
- Links carrying information with High or Very high protection requirements
- Links connecting production network boundaries

The protection requirements of communication links are derived from the connected systems and the information transmitted. The IT Systems <> Communication Links cross-reference table in HB_REG_03 provides the dependency data.

### 7. Documentation

For each assessed asset or asset group, the IS-Coordinator records:

- C/I/A values in the corresponding columns of HB_REG_03
- An individual assessment record using CB_TPL_19 (Protection Requirements Assessment), filed in the layer-specific subdirectory:
  `Registers/Protection-Requirements/<Layer>/PR-<Asset-ID>.md`

Layer subdirectories:

| Folder | Asset Layer |
|---|---|
| 1-Process | Business processes |
| 2-Application | Applications |
| 3-Physical-IT-System | Physical IT systems |
| 4-Virtual-IT-System | Virtual IT systems |
| 5-Communication-Connection | Communication links |
| 6-Room | Rooms |
| 7-Building | Buildings |

The assessment record includes the rationale per core value, inheritance chains, cumulation/distribution effects (including any override documentation from Steps 2–6), and conclusions.

### 8. Approval

The asset owner reviews and approves the protection requirement values for their assets. The CISO verifies cross-asset consistency (inheritance chains, cumulation effects, security zone implications). Disagreements are escalated to the responsible management level.

### 9. Handoff to risk management

Assets with a protection requirement of High or Very high in at least one core value are flagged for individual risk analysis in CB_PRC_07 (Risk Management). For each flagged asset, the IS-Coordinator:

1. Creates a risk assessment file from CB_TPL_21, filed in the layer-specific subdirectory:
   `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`
   (Layer subdirectories follow the same naming convention as in Step 7.)
2. Communicates the list of flagged assets and their prepared RA files to the CISO for inclusion in the next risk assessment cycle.

## See also

- CB_POL_L2_11-Risk-Management — Normative requirements (damage scenarios, categories, methodology, BIA-to-V mapping)
- CB_PRC_12-Asset-Management — Input: registered assets
- CB_PRC_07-Risk-Management — Output: risk analysis for High/Very high assets
- CB_TPL_19-Protection-Requirements-Assessment — Assessment template
- CB_TPL_21 — Risk assessment record template
- HB_REG_03-Asset-Register — C/I/A columns and cross-reference tables
- HB_REG_04-BIA-Register — Business Impact Analysis data (availability derivation)
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.004 | 2026-02-17 | Claude (AI) | Step 2: operational guidance for information type evaluation, sensitivity profile as minimum category, suspension rule for missing INF data |
| 00.01.003 | 2026-02-17 | Claude (AI) | Information layer removed from result folders, layers renumbered 1-7 |
| 00.01.002 | 2026-02-17 | Claude (AI) | Process-centric model: PRC as primary assessment, INF as attribute, layer 1-Information marked legacy, cross-ref simplified |
| 00.01.001 | 2026-02-11 | Claude (AI) | Added BIA-to-V derivation for process assets, override documentation for cumulation/distribution, layer-specific PR record paths, RA file creation in handoff step |
| 00.01.000 | 2026-02-11 | Claude (AI) | Initial version: 9-step process based on BSI 200-2 Ch. 8.2 |
