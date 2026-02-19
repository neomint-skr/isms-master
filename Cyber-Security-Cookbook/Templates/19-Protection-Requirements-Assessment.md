# Template: Protection Requirements Assessment

> ISO Reference: Clause 6.1, A.5.9. Copy per business process, fill in, and file as SSOT evidence in ISMS-Handbook/Registers/Protection-Requirements/.

## Metadata

| Field | Value |
|---|---|
| Document ID | CB_TPL_19-Protection-Requirements-Assessment |
| Process ID (REG_03) | |
| Process name | |
| Asset type | PRC — Process |
| Processed information | [Information type IDs from reference table] |
| Process owner | |
| Assessor | |
| Assessment date | |

## Suspension Documentation

*Complete only if the assessment is suspended due to missing prerequisites.*

| Field | Value |
|---|---|
| Suspension reason | [missing_INF / —] |
| Missing register reference | [e.g. HB_REG_03 (information types) / —] |
| Suspend date | [YYYY-MM-DD / —] |
| Expected resolution | [YYYY-MM-DD or description / —] |

> **Manual inputs:** Per-scenario damage categories (Confidentiality §1–6, Integrity §1–6) and BIA parameters (RTO, RPO, MTD). **Computed results (do not fill manually):** Derived C, Derived I, Derived BIA Tier, Derived A, Overall category.

## Protection Requirement Assessment

### Confidentiality

| # | Damage scenario | Category | Rationale |
|---|---|---|---|
| 1 | Violation of laws, regulations, or contracts | [Normal / High / Very high] | [rationale] |
| 2 | Impairment of informational self-determination | [Normal / High / Very high] | [rationale] |
| 3 | Impairment of personal safety | [Normal / High / Very high] | [rationale] |
| 4 | Impairment of task fulfilment | [Normal / High / Very high] | [rationale] |
| 5 | Negative reputation effects | [Normal / High / Very high] | [rationale] |
| 6 | Financial impact | [Normal / High / Very high] | [rationale] |

| Derived C | [= max(scenarios 1–6) — do not select manually] |
|---|---|

### Integrity

| # | Damage scenario | Category | Rationale |
|---|---|---|---|
| 1 | Violation of laws, regulations, or contracts | [Normal / High / Very high] | [rationale] |
| 2 | Impairment of informational self-determination | [Normal / High / Very high] | [rationale] |
| 3 | Impairment of personal safety | [Normal / High / Very high] | [rationale] |
| 4 | Impairment of task fulfilment | [Normal / High / Very high] | [rationale] |
| 5 | Negative reputation effects | [Normal / High / Very high] | [rationale] |
| 6 | Financial impact | [Normal / High / Very high] | [rationale] |

| Derived I | [= max(scenarios 1–6) — do not select manually] |
|---|---|

### Availability

Availability is derived from BIA parameters, not from damage scenarios.

| Field | Value |
|---|---|
| RTO (hours) | [maximum acceptable downtime] |
| RPO (hours) | [maximum acceptable data loss] |
| MTD (hours) | [maximum tolerable downtime] |

Tier derivation (strictest condition wins):

| Tier | RTO | RPO | Criticality | Derived A |
|---|---|---|---|---|
| 1 | 0–4 h | 0–4 h | Critical | Very high |
| 2 | 5–24 h | 5–24 h | Important | High |
| 3 | 25–96 h | 25–96 h | Normal | Normal |
| 4 | > 97 h | > 97 h | Low | Normal |

| Derived BIA Tier | [1/2/3/4 — derived from strictest RTO/RPO, do not select manually] |
|---|---|
| Derived A | [Very high / High / Normal — derived from tier, do not select manually] |

### Overall Protection Requirement

| Field | Value |
|---|---|
| Overall category | [= max(Derived C, Derived I, Derived A) — do not select manually] |

## Conclusions

| Field | Value |
|---|---|
| Security zone | [Zone assignment if applicable, or n/a] |
| Special measures | [Measures triggered by High/Very high, or n/a] |
| Risk analysis required | [Yes / No — Yes if any core value is High or Very high] |

## Approval

| Field | Value |
|---|---|
| Process owner approval | [Name, date] |
| CISO consistency check | [Name, date] |

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.00.005 | 2026-02-19 | Claude (AI) | Remove Override Documentation and Inheritance sections (A2/A6), add manual input/computed results note, remove 1-Process/ from filing path |
| 00.00.004 | 2026-02-19 | Claude (AI) | Process-centric SSOT redesign: 6-scenario grid for C/I, BIA params for A, derived categories only, remove BIA derivation section |
| 00.00.003 | 2026-02-18 | Claude (AI) | Add Suspension Documentation section for missing INF/BIA prerequisites |
| 00.00.002 | 2026-02-17 | Claude (AI) | Process-centric: INF removed from asset type list, PRC first, added "Processed information" field |
| 00.00.001 | 2026-02-11 | Claude | Add BIA Derivation block, Override Documentation block; update asset type prefixes (PRC, PIT, VIT, CON, ROM, BLD) |
