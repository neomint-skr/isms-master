# Risk Assessment — [Asset-ID] [Asset Name]

## Asset Context

| Field | Value |
|---|---|
| Asset-ID | [e.g. PIT-003] |
| Asset name | [e.g. Production Server Cluster] |
| Layer | [e.g. Physical IT Systems] |
| PR record | [Link: Registers/Protection-Requirements/\<Layer\>/PR-\<Asset-ID\>.md] |
| Asset owner | [Role] |
| Assessment date | [YYYY-MM-DD] |
| Assessor | [Name/Role] |

## Imported Context

Protection requirements (from asset register HB_REG_03):

| Core value | Category |
|---|---|
| Confidentiality (C) | [Normal/High/Very high] |
| Integrity (I) | [Normal/High/Very high] |
| Availability (A) | [Normal/High/Very high] |

Relevant threats: Per threat catalogue for [Layer] (Risk-Framework/Threats/).
Vulnerability catalogue: Per vulnerability catalogue for [Layer] (Risk-Framework/Vulnerabilities/).

## Vulnerability Assessment

| Vulnerability-ID | Vulnerability | Status | Evidence/Comment |
|---|---|---|---|
| [e.g. PIT-V01] | [Vulnerability description] | [present/not present/unknown/n/a] | [Evidence or rationale] |

## Scenario List

| SC-ID | Threat (G 0.x) | Vulnerability-ID | Scenario text | Affected aspects |
|---|---|---|---|---|
| [SC-\<Asset-ID\>-0001] | [G 0.x] | [Layer-Vxx] | [If ... occurs and ... exists, this could lead to ... for ...] | [C, I, A] |

## Risk Assessment

| SC-ID | L (1-4) | I (1-4) | Gross risk | Existing SM | Net L | Net I | Net risk | Treatment | Planned SM |
|---|---|---|---|---|---|---|---|---|---|
| [SC-\<Asset-ID\>-0001] | [1-4] | [1-4] | [L×I] | [SM-####, SM-####] | [1-4] | [1-4] | [L×I] | [Avoid/Reduce/Transfer/Accept] | [SM-####] |

## Exceptions

| Excluded item | Type (Threat/Vulnerability) | Rationale |
|---|---|---|
| [ID] | [Threat/Vulnerability] | [Reason for exclusion] |
