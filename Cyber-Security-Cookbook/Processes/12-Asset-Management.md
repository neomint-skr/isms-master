> **Document ID:** CB_PRC_12-Asset-Management
> **Version:** 00.01.008
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.9
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Asset Management Process

## Summary

What is not known as an asset cannot be protected. This process governs the systematic identification, maintenance, and relationship documentation of all ISMS-relevant assets across their entire lifecycle. A complete asset inventory is a prerequisite for protection requirements analysis and risk assessment. Without up-to-date asset documentation, critical systems and information remain unrecognized and unprotected.

## Objective and Scope

**Objective:** What is not known as an asset cannot be protected. Without a systematic process for identification, maintenance, and decommissioning, critical systems and information remain unrecognized and unprotected.

This process governs the lifecycle of all ISMS-relevant assets — from identification and ID assignment through registration and relationship mapping to decommissioning (addresses A.5.9). It ensures that the asset inventory is complete and current at all times.

The process operationalizes the requirements from CB_POL_L2_07-Organization (assets section). Results are documented in HB_REG_03 (Asset Register) and form the basis for the protection requirements analysis (CB_PRC_07).

**Scope:** All asset types per CB_POL_L2_07 (assets section) and all lifecycle events. Coordinated by the IS-Coordinator with asset owners.

## Triggers

The process is triggered by:

- Introduction, change, or decommissioning of business processes
- Introduction, change, or decommissioning of applications
- Introduction, change, or decommissioning of IT systems (physical or virtual)
- Introduction, change, or decommissioning of communication links
- Introduction, change, or decommissioning of rooms or buildings
- Deviations identified during reviews or audits

## Process steps

### 1. Identification

The asset is identified and assigned to an asset type.

**Grouping evaluation.** When a new asset is identified, evaluate whether it fits an existing group based on the five general grouping criteria defined in the organisation standard (CB_POL_L2_07). If yes: increment the group count and add the asset to the Includes column. If no: record as individual object (Count = 1, Includes = —). During each periodic inventory review, evaluate whether individual objects have become groupable.

### 2. ID assignment

The asset receives a unique, stable asset ID. The ID does not change over the lifecycle.

### 3. Registration

The asset is recorded with the defined mandatory attributes in the appropriate asset register (HB_REG_03).

### 4. Relationship mapping

Relevant relationships to other assets are documented through the cross-reference tables in HB_REG_03. Additionally, the denormalized relationship columns in the asset table are updated.

### 5. Responsibility assignment

A responsible asset owner is designated and recorded in the register.

### 6. Approval

The registration is reviewed and approved by the responsible function.

### 7. Maintenance and update

Changes are recorded on an event-driven basis. Decommissioned assets are marked as "retired" and remain in the register.

## See also

- HB_CLS_5.3-Roles-and-Responsibilities


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.008 | 2026-02-11 | SKR | Grouping evaluation sub-step added to identification phase |
| 00.01.007 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.006 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.005 | 2026-02-09 | CISO | Objective and scope: bold-label pattern (Objective + Scope) |
| 00.01.004 | 2026-02-08 | CISO | Summary: 4-element pattern (context, orientation, ISMS contribution, consequence) |
| 00.01.003 | 2026-02-08 | CISO | Moved HB->CB, classification Confidential->Internal |
| 00.01.002 | 2026-02-07 | CISO | Roles section removed, centralized in CLS_5.3 |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version |
