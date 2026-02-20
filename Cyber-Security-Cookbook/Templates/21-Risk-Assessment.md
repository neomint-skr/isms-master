# Risk Assessment — [Asset-ID] [Asset Name]

## Asset Context

| Field | Value |
|---|---|
| Asset-ID | [e.g. PIT-003] |
| Asset name | [e.g. Production Server Cluster] |
| Layer | [e.g. Physical IT Systems] |
| PR record | [Link: Registers/04-Protection-Requirements/\<Layer\>/PR-\<Asset-ID\>.md] |
| Asset owner | [Role] |
| Assessment date | [YYYY-MM-DD] |
| Assessor | [Name/Role] |

## Imported Context

Protection requirements (from asset register HB_REG_AM):

| Core value | Category |
|---|---|
| Confidentiality (C) | [Normal/High/Very high] |
| Integrity (I) | [Normal/High/Very high] |
| Availability (A) | [Normal/High/Very high] |

Relevant threats: Per threat catalogue for [Layer] (Risk-Framework/Threats/).
Vulnerability catalogue: Per vulnerability catalogue for [Layer] (Risk-Framework/Vulnerabilities/).

## Risk Scenarios

Each scenario combines a threat–vulnerability pair with a risk assessment. The Risk Scenario column captures the conditional risk in subjunctive form per CB_POL_L2_11 Scenario Text Template.

**Net risk rule:** Net L and Net I are computed deterministically per CB_POL_L2_11 (Deterministic Net Risk Reduction): `Net_L = max(1, Gross_L − max(Reduction_L))`, `Net_I = max(1, Gross_I − max(Reduction_Impact))`. Reduction values are sourced from HB_REG_SM.

**Treatment rule:** When Net Risk is **Low (1-3)**, Treatment is automatically set to **Accept** (risk acceptance by risk owner per CB_POL_L2_11). When Net Risk is **Medium or higher (>= 4)**, the scenario is forwarded to the risk treatment plan (HB_REG_RT) for treatment selection by the risk owner.

| SC-ID | Threat (G 0.x) | Vulnerability-ID | Risk Scenario | L | I | Gross | SM-IDs | Net L | Net I | Net Risk | Treatment |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [SC-\<Asset-ID\>-0001] | [G 0.x] | [Layer-Vxx] | [If ... occurs and ... exists, this could lead to ... for ...] | [1-4] | [1-4] | [L x I] | [SM-####, SM-####] | [1-4] | [1-4] | [Net L x Net I] | [Accept/Treat (→ RTP)] |

## Risk Summary

| Metric | Value |
|---|---|
| Total scenarios | [count] |
| Critical (12-16) | [count] |
| High (8-9) | [count] |
| Medium (4-6) | [count] |
| Low (1-3) | [count] |
| Auto-accepted (Low) | [count] |
| Requiring treatment | [count] |

## Exceptions

| Excluded item | Type (Threat/Vulnerability) | Rationale |
|---|---|---|
| [ID] | [Threat/Vulnerability] | [Reason for exclusion] |

## Appendix: Vulnerability Assessment

Complete vulnerability status for audit trail. Each entry from the asset's vulnerability catalogue is assessed with evidence or rationale.

| Vulnerability-ID | Vulnerability | Status | Resolve-by | Evidence/Comment |
|---|---|---|---|---|
| [e.g. PIT-V01] | [Vulnerability description] | [present/not present/unknown/n/a] | [YYYY-MM-DD if unknown, else —] | [Evidence or rationale] |
