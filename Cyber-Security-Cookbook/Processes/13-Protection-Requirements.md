> **Document ID:** CB_PRC_13-Protection-Requirements
> **Version:** 00.01.000
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, A.5.9
> **Last modified:** 2026-02-11
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

### 2. Primary assessment — information and business processes

For each information asset and business process, the asset owner assesses confidentiality, integrity, and availability individually using the damage scenarios defined in CB_POL_L2_11 (Protection Requirements Analysis). The assessment uses "What if?" analysis: for each core value, the relevant damage scenario category (Normal / High / Very high) is determined based on the most severe plausible impact. The rationale for each rating is documented.

For complex business processes with High or Very high protection requirements, decomposition into sub-processes is evaluated to limit the scope of elevated requirements.

### 3. Inheritance — applications

The protection requirements of applications are derived from the business processes and information they support. The cross-reference tables in HB_REG_03 (Information <> Processes, Processes <> Applications) provide the dependency chains. The maximum principle applies: the highest value from any supported process determines the application's protection requirement per core value.

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
- An individual assessment record using CB_TPL_19 (Protection Requirements Assessment), filed in ISMS-Handbook/Management/Records/Protection-Requirements/

The assessment record includes the rationale per core value, inheritance chains, cumulation/distribution effects, and conclusions.

### 8. Approval

The asset owner reviews and approves the protection requirement values for their assets. The CISO verifies cross-asset consistency (inheritance chains, cumulation effects, security zone implications). Disagreements are escalated to the responsible management level.

### 9. Handoff to risk management

Assets with a protection requirement of High or Very high in at least one core value are flagged for individual risk analysis in CB_PRC_07 (Risk Management). The IS-Coordinator communicates the list of flagged assets to the CISO for inclusion in the next risk assessment cycle.

## See also

- CB_POL_L2_11-Risk-Management — Normative requirements (damage scenarios, categories, methodology)
- CB_PRC_12-Asset-Management — Input: registered assets
- CB_PRC_07-Risk-Management — Output: risk analysis for High/Very high assets
- CB_TPL_19-Protection-Requirements-Assessment — Assessment template
- HB_REG_03-Asset-Register — C/I/A columns and cross-reference tables
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.000 | 2026-02-11 | Claude (AI) | Initial version: 9-step process based on BSI 200-2 Ch. 8.2 |
