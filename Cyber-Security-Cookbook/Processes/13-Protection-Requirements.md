> **Document ID:** CB_PRC_13-Protection-Requirements
> **Version:** 00.01.008
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, A.5.9
> **Last modified:** 2026-02-19
> **Approval:** —
> **Review cycle:** Annual

---

# Protection Requirements Assessment Process

## Summary

Business processes without assessed protection requirements cannot be prioritized for risk treatment. This process describes the systematic assessment of confidentiality, integrity, and availability requirements for business processes — from primary assessment through inheritance to documentation and handoff. It operationalizes the protection requirements analysis defined in CB_POL_L2_11 and feeds assessed values into the asset register. Without this process, risk analysis lacks its input data and control selection remains unsubstantiated.

## Objective and Scope

**Objective:** Business processes registered in HB_REG_03 require assessed protection requirements before they can enter risk analysis. Without systematic assessment, risk prioritization lacks objective criteria and audit evidence.

This process describes the operational workflow from scope determination through primary assessment and inheritance to documentation, approval, and handoff to risk management (CB_PRC_07). It ensures that the normative criteria from CB_POL_L2_11 (damage scenarios, maximum principle, cumulation and distribution effects) are applied consistently.

Results are documented in process PR records (CB_TPL_19, SSOT) and in the C/I/A columns of the asset register (HB_REG_03). Sub-asset protection requirements are derived exclusively through inheritance. The process is triggered by new or changed business processes (from CB_PRC_12) and by periodic review cycles.

**Scope:** All business processes in HB_REG_03 within the ISMS scope. Sub-asset PR is derived exclusively through inheritance. Coordinated by the IS-Coordinator with process owners. Roles per HB_CLS_5.3.

## Triggers

The process is triggered by:

- New or changed asset registered through CB_PRC_12 (Asset Management)
- Periodic review (at least annually, aligned with risk management cycle)
- Material change to business processes, IT landscape, or organizational structure
- Findings from risk analysis, audit, or management review requiring reassessment

## Process Steps

### 1. Scope determination

The IS-Coordinator identifies the business processes to be assessed from HB_REG_03. The scope includes all newly registered business processes, processes flagged for review, and processes affected by material changes. Processes already assessed and unchanged since last review are excluded.

### 2. Primary assessment — business processes

For each business process, the process owner assesses confidentiality and integrity using the 6 mandatory damage scenarios defined in CB_POL_L2_11 (Protection Requirements Analysis). Information types processed by each business process are considered as attributes in the assessment. The assessor reviews the information types documented in the "Processed Information" column of HB_REG_03 and evaluates their aggregated sensitivity profile against the damage scenarios: a process that handles highly sensitive information types (e.g. personal data, trade secrets) achieves at minimum the damage scenario category corresponding to the most sensitive information type. If no information types are documented for a process, the assessment is suspended until delivery through CB_PRC_12.

**Confidentiality and integrity.** For each core value, the assessor rates each of the 6 damage scenarios individually (Normal / High / Very high). The derived C or I category equals the maximum rating across all 6 scenarios — no manual overall category selection is permitted. The assessment template (CB_TPL_19) enforces this structure.

**Availability.** Availability is not assessed via damage scenarios but derived from BIA parameters documented directly in the PR record (CB_TPL_19). The process owner enters RTO, RPO, and MTD values. The BIA tier and the derived A category are determined automatically through the tier matrix defined in CB_TPL_19 (strictest condition across RTO/RPO wins).

For complex business processes with High or Very high protection requirements, decomposition into sub-processes is evaluated to limit the scope of elevated requirements.

**Override documentation (cumulation and distribution).** During any assessment or inheritance step, the assessor may invoke cumulation (aggregated risk raises the PR) or distribution (redundancy lowers the PR) effects as defined in CB_POL_L2_11. When an override is applied, the assessor sets the PR Source column in HB_REG_03 to one of two values: `Verteilungseffekt` (distribution) or `Kumulationseffekt` (cumulation). A manual PR Source value (Verteilungseffekt or Kumulationseffekt) is never auto-overwritten by inheritance recalculation — only explicit assessor action may change a manual override. The override documentation is reviewed and approved in Step 8.

### 3. Inheritance — applications

Sub-assets do not receive individual PR records. Their protection requirements are documented exclusively in the C/I/A columns of HB_REG_03 (inherited, maximum principle).

The protection requirements of applications are derived from the business processes they support. The cross-reference table Processes <> Applications in HB_REG_03 provides the dependency chains. The maximum principle applies: the highest value from any supported process determines the application's protection requirement per core value.

Cumulation effects are evaluated where an application supports multiple processes with Normal protection requirements.

### 4. Inheritance — IT systems

The protection requirements of IT systems (physical and virtual) are derived from the applications they host, using the Applications <> IT Systems cross-reference table in HB_REG_03.

For virtualized infrastructure, the protection requirements of the virtualization host are derived from all hosted virtual machines. Cumulation effects (multiple Normal VMs → aggregated High) and distribution effects (redundant setup → relativized availability requirement) are evaluated and documented.

For cloud-hosted systems (IaaS), the same inheritance logic applies. Where live migration prevents static assignment, protection requirement zones with physical separation are recommended.

### 5. Inheritance — communication links

Critical communication links are identified based on three criteria:

- External connections (traversing uncontrolled areas, including wireless links)
- Links carrying information with High or Very high protection requirements
- Links connecting production network boundaries

The protection requirements of communication links are derived from the connected systems and the information transmitted. The IT Systems <> Communication Links cross-reference table in HB_REG_03 provides the dependency data.

### 6. Inheritance — rooms and buildings

The protection requirements of rooms and buildings are derived from the IT systems installed within them and from the communication links routed through them, using the IT Systems <> Rooms, Communication Links <> Rooms, and Rooms <> Buildings cross-reference tables in HB_REG_03. The maximum principle applies across both IT systems and communication links. Cumulation effects in server rooms, data centres, and archives are evaluated.

### 7. Documentation

For each assessed business process, the IS-Coordinator records:

- A process PR record using CB_TPL_19 (SSOT), filed in:
  `Registers/Protection-Requirements/PRA-YYYY-MM-<Process-ID>.md`
- C/I/A values in the corresponding columns of HB_REG_03 for the process
- Derived C/I/A values in HB_REG_03 for all sub-assets inheriting from the process (maximum principle)

The PR record includes the per-scenario ratings for C and I, BIA parameters for A, derived categories, and conclusions. Override documentation is maintained in the PR Source column of HB_REG_03.

### 8. Approval

The asset owner reviews and approves the protection requirement values for their assets. The CISO verifies cross-asset consistency (inheritance chains, cumulation effects, security zone implications). Disagreements are escalated to the responsible management level.

### 9. Handoff to risk management

Assets with a protection requirement of High or Very high in at least one core value are flagged for individual risk analysis in CB_PRC_07 (Risk Management). For each flagged asset, the IS-Coordinator:

1. Creates a risk assessment file from CB_TPL_21, filed in the layer-specific subdirectory:
   `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`
   (Layer subdirectories follow the same naming convention as in Step 7.)
2. Communicates the list of flagged assets and their prepared RA files to the CISO for inclusion in the next risk assessment cycle.

## See also

- CB_POL_L2_11-Risk-Management — Normative requirements (damage scenarios, categories, methodology, BIA-to-A derivation)
- CB_PRC_12-Asset-Management — Input: registered business processes
- CB_PRC_07-Risk-Management — Output: risk analysis for High/Very high assets
- CB_TPL_19-Protection-Requirements-Assessment — Process PR record template (SSOT)
- CB_TPL_21 — Risk assessment record template
- HB_REG_03-Asset-Register — C/I/A columns and cross-reference tables
- HB_CLS_5.3-Roles-and-Responsibilities — RACI matrix

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.008 | 2026-02-19 | Claude (AI) | Override→REG_03 PR Source, priority rule for manual overrides, swap Steps 5↔6 (CON before ROM), rooms inherit from IT+CON, remove 1-Process/ from path |
| 00.01.007 | 2026-02-19 | Claude (AI) | Process-only scope: 6-scenario grid for C/I, BIA params inline for A, remove per-asset records and layer folders, remove HB_REG_04 dependency |
| 00.01.006 | 2026-02-18 | CISO | Removed Standard reference field (L3-only convention; L2_11 link remains in body text) |
| 00.01.005 | 2026-02-18 | Claude (AI) | BIA-suspend rule and BIA tier reference for availability derivation |
| 00.01.004 | 2026-02-17 | Claude (AI) | Step 2: operational guidance for information type evaluation, sensitivity profile as minimum category, suspension rule for missing INF data |
| 00.01.003 | 2026-02-17 | Claude (AI) | Information layer removed from result folders, layers renumbered 1-7 |
| 00.01.002 | 2026-02-17 | Claude (AI) | Process-centric model: PRC as primary assessment, INF as attribute, layer 1-Information marked legacy, cross-ref simplified |
| 00.01.001 | 2026-02-11 | Claude (AI) | Added BIA-to-V derivation for process assets, override documentation for cumulation/distribution, layer-specific PR record paths, RA file creation in handoff step |
| 00.01.000 | 2026-02-11 | Claude (AI) | Initial version: 9-step process based on BSI 200-2 Ch. 8.2 |
