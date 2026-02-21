> **Document ID:** CB_PRC_07-Risk-Management
> **Version:** 00.01.023
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Risk Management Process (LRM-44)

## Summary

This process defines the operational workflow for identifying, assessing, deciding and treating information security risks using **LRM-44** (Lean Risk Method, 4×4 matrix). It ensures that results are documented in a human-readable way while remaining deterministic, traceable and audit-ready.

## Objective and Scope

**Objective:** Maintain an up-to-date and traceable risk picture and ensure that unacceptable risks are treated through planned controls and actions.

**Scope:** Applies to all scope units in the ISMS scope (systems, services, business processes).

## Roles and Responsibilities

- **Risk owner:** Accountable for the risk decision and residual risk acceptance.
- **ISMS manager / CISO:** Maintains criteria, supports assessments, ensures SoA consistency.
- **Control owner:** Accountable for implementing and evidencing controls (via SoA).
- **Top management:** Approves residual risk acceptance for Critical risks (and as defined in the standard).

## Inputs (mandatory)

- Scope unit definition (system/service/process context)
- Protection requirements context (where applicable)
- Risk Library (matrix, rubrics, scenario library, playbooks)

References:
- `ISMS-Handbook/Registers/05-Risk-Library/`
- `ISMS-Handbook/Registers/04-Protection-Requirements/`
- `ISMS-Handbook/Registers/03-Asset-Management/Register_Asset.md`

## Outputs (mandatory records)

- **Risk Log (SSOT):** `ISMS-Handbook/Registers/07-Risk-Log/Register_Risk-Log.md`
- **Scope unit assessment record(s):** `ISMS-Handbook/Registers/06-Risk-Assessments/Scope-Units/`
- **SoA updates:** `ISMS-Handbook/Registers/09-Statement-of-Applicability/Register_Statement-of-Applicability.md`

Note: The “Risk Treatment Plan” is implemented as a **filter view** of the Risk Log (all entries where `Decision` is Treat/Avoid/Transfer).

## Triggers

Risk assessment MUST be performed:
- periodically (per review cycle),
- on major changes (new systems/services, major configuration changes, supplier changes),
- after significant incidents,
- when the threat landscape changes materially (e.g., active exploitation).

## Procedure (LRM-44)

### Step 1 — Prepare the scope unit

1. Define the scope unit and its boundaries (system/service/process).
2. Collect relevant context (interfaces, users, external exposure, critical dependencies).
3. Confirm which protection requirements context applies.

Record in the scope unit assessment file.

### Step 2 — Identify applicable risk scenarios

1. Start with the Scenario Library (`05-Risk-Library/Library_Scenarios.md`).
2. Select up to the relevant scenarios for this scope unit.
3. Add local scenarios only if they are material and not covered by the library.

Each risk MUST be captured as a one-sentence scenario.

### Step 3 — Assess impact and likelihood (deterministic)

1. Assess **Impact** using `Rubric_Impact.md`.
2. Assess **Likelihood** using `Rubric_Likelihood.md`.
3. Compute `Score = I × L` and map to band (Low/Medium/High/Critical).
4. Document brief rationale notes (one line for impact, one line for likelihood).

### Step 4 — Decide (accept / treat / transfer / avoid)

1. Apply acceptance criteria from the Risk Management Standard.
2. Assign a Risk Owner.
3. Capture the decision and required approval level.

### Step 5 — Plan treatment (if required)

For risks with Decision = Treat/Transfer/Avoid:
1. Select controls (Annex A references and/or internal measures IDs).
2. Define up to 1–3 actions (tickets/changes) with due dates.
3. Define a target residual band/score.

### Step 6 — Maintain the SoA (controls SSOT)

For each selected control:
1. Update SoA applicability, justification and status.
2. Link evidence (policy, configuration, logs, test records, tickets).

### Step 7 — Re-assess and accept residual risk

After implementation:
1. Re-assess using the same rubrics.
2. Document residual risk score/band.
3. Obtain formal residual risk acceptance as required.

## Templates

- Scope unit assessment template: `Cyber-Security-Cookbook/Templates/21-Risk-Assessment.md`
- Risk Log template: `Cyber-Security-Cookbook/Templates/22-Risk-Log.md`
- Workshop minutes template: `Cyber-Security-Cookbook/Templates/24-Risk-Workshop-Minutes.md`
