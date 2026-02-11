# Template: Protection Requirements Assessment

> ISO Reference: Clause 6.1, A.5.9. Copy per asset (group), fill in, and file as evidence in ISMS-Handbook/Registers/Protection-Requirements/.

## Metadata

| Field | Value |
|---|---|
| Document ID | CB_TPL_19-Protection-Requirements-Assessment |
| Asset ID (REG_03) | |
| Asset name | |
| Asset type | [INF — Information / PRC — Process / APP — Application / PIT — Physical IT System / VIT — Virtual IT System / CON — Communication Connection / ROM — Room / BLD — Building] |
| Asset owner | |
| Assessor | |
| Assessment date | |

## Protection Requirement Assessment

### Confidentiality

| Field | Value |
|---|---|
| Category | [Normal / High / Very high] |
| Damage scenario(s) | |
| Rationale | |

### Integrity

| Field | Value |
|---|---|
| Category | [Normal / High / Very high] |
| Damage scenario(s) | |
| Rationale | |

### Availability

| Field | Value |
|---|---|
| Category | [Normal / High / Very high] |
| Damage scenario(s) | |
| Rationale | |

### Overall Protection Requirement

| Field | Value |
|---|---|
| Overall category | [Normal / High / Very high] (= maximum of C, I, A) |

## BIA Derivation (Process Assets Only)

| Field | Value |
|---|---|
| BIA Tier | [1 (Critical) / 2 (Important) / 3 (Normal) / 4 (Low)] |
| Derived availability (A) | [Very high / High / Normal / Normal] |
| Source | HB_REG_04-BIA-Register |

## Override Documentation

*Complete only if cumulation or distribution effect applies.*

| Field | Value |
|---|---|
| Override type | [Cumulation / Distribution] |
| Affected core value | [C / I / A] |
| Original value | [Normal / High / Very high] |
| Adjusted value | [Normal / High / Very high] |
| Affected parent assets | [Asset-IDs] |
| Rationale | [Justification for override] |

## Inheritance and Effects

| Field | Value |
|---|---|
| Inheritance source(s) | [Asset IDs from which protection requirements are inherited, or "Primary assessment" if directly assessed] |
| Maximum principle chain | [Describe the highest-value path if inherited] |
| Cumulation effect | [Yes / No — if yes, describe aggregation rationale] |
| Distribution effect | [Yes / No — if yes, describe redundancy measure and resulting relativization] |

## Conclusions

| Field | Value |
|---|---|
| Security zone | [Zone assignment if applicable, or n/a] |
| Special measures | [Measures triggered by High/Very high, or n/a] |
| Risk analysis required | [Yes / No — Yes if any core value is High or Very high] |

## Approval

| Field | Value |
|---|---|
| Asset owner approval | [Name, date] |
| CISO consistency check | [Name, date] |

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.00.001 | 2026-02-11 | Claude | Add BIA Derivation block, Override Documentation block; update asset type prefixes (PRC, PIT, VIT, CON, ROM, BLD) |
