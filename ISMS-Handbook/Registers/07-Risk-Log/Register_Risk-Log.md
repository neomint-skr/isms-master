> **Document ID:** HB_REG_RL_01-Risk-Log
> **Version:** 00.01.001
> **Classification:** Confidential
> **Author:** [CISO]
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Risk Log

## Summary

The Risk Log is the single source of truth (SSOT) for information security risks. It documents risk scenarios, deterministic scoring (LRM-44, 4×4), decisions (accept/treat/transfer/avoid), approvals, and treatment planning. The Risk Log replaces separate “Risk Register” and “Risk Treatment Plan” documents by providing one consistent dataset with a treatment view (filter).

## Objective and Scope

**Objective:** Provide a readable, auditable and current risk overview and ensure traceability from risk scenario to treatment and approval.

**Scope:** All risks within ISMS scope.

## Data model (binding)

- One row per **material risk scenario**.
- Risk scenario MUST be one sentence.
- Impact and Likelihood MUST use label+value (e.g., `Major (3)`).
- Score MUST be computed as `Impact × Likelihood` (1..16) and mapped to band.

Binding criteria:
- `CB_POL_L2_11-Risk-Management`
- `ISMS-Handbook/Registers/05-Risk-Library/`

## Treatment view (RTP)

The “Risk Treatment Plan” is implemented as a **view** of the Risk Log:

- RTP view = all entries where `Decision` is Treat / Transfer / Avoid.

## Required fields (minimum)

| Column | Purpose |
|---|---|
| RISK-ID | Unique risk identifier |
| Scope Unit | System/Service/Process reference |
| Risk scenario | One-sentence scenario |
| CIA focus | C / I / A |
| Impact | Minor(1) / Moderate(2) / Major(3) / Severe(4) |
| Likelihood | Rare(1) / Unlikely(2) / Possible(3) / Likely(4) |
| Score | I×L (1..16) |
| Band | Low / Medium / High / Critical |
| Decision | Accept / Treat / Transfer / Avoid |
| Risk owner | Accountable person/role |
| Controls selected | References only (Annex A and/or internal SM-IDs) |
| Actions | Max 1–3 tickets/changes (if treated) |
| Target residual | Target band/score |
| Due date | For actions |
| Approval | Name/role + date |
| Last review | Date |

## Template

Use:
- `Cyber-Security-Cookbook/Templates/22-Risk-Log.md`

## Interfaces

- Controls applicability/status/evidence: `HB_REG_SOA_01-Statement-of-Applicability` (SSOT)
- Optional implementation backlog: `HB_REG_SM_01-Security-Measures-Register`
