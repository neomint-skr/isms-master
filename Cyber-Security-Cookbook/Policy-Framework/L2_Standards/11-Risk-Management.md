> **Document ID:** CB_POL_L2_11-Risk-Management
> **Version:** 00.01.028
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** Clause 6.1, 8.2, 8.3
> **Last modified:** 2026-02-21
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Risk Management Standard (LRM-44)

## Summary

This standard defines a lean, deterministic and audit-ready risk method for the ISMS: **LRM-44** (Lean Risk Method, 4×4 matrix). It provides binding criteria for risk identification, likelihood and impact assessment, risk acceptance, and treatment decisions. The method is designed to be executable by humans in workshops while remaining consistent, repeatable and traceable.

## Objective and Scope

**Objective:** Ensure consistent, comparable and traceable risk decisions across the ISMS.

**Scope:** Applies to all ISMS scope units (systems, services and business processes) and to event-driven risk reassessments.

## Method Overview (LRM-44)

### Primary object: Risk scenario

A risk entry MUST be documented as a **risk scenario** in one sentence (not as threat/vulnerability pairs). Threats and vulnerabilities MAY be referenced for traceability, but the scenario is the SSOT.

**Example:** “If an attacker obtains a user session token, they can access customer data without authorization.”

### Deterministic scoring: 4×4 matrix

Risk is scored as:

- **Impact (I):** Minor (1), Moderate (2), Major (3), Severe (4)
- **Likelihood (L):** Rare (1), Unlikely (2), Possible (3), Likely (4)
- **Score:** `R = I × L` (1..16)
- Values MUST be written as **label + value** (e.g., `Possible (3)`), not as raw numbers.

The official matrix and mappings are maintained in:

- `ISMS-Handbook/Registers/05-Risk-Library/Matrix_4x4.md`

### Risk bands and acceptance criteria

Risk score is mapped to bands:

- **Low:** 1–3
- **Medium:** 4–6
- **High:** 8–12
- **Critical:** 16

Default decision rules:

- Low: Accept (monitor)
- Medium: Accept or Treat (risk owner decision; treat if quick-win)
- High: Treat / Transfer / Avoid (acceptance requires documented justification)
- Critical: Treat immediately or Avoid; acceptance requires top management approval

### Impact rubric (binding)

Impact MUST be assessed using the binding rubric:

- `ISMS-Handbook/Registers/05-Risk-Library/Rubric_Impact.md`

Rule: Impact is the **worst credible impact** across defined dimensions (e.g., financial, legal, operational, reputation). Use the rubric thresholds.

### Likelihood rubric (binding)

Likelihood MUST be assessed using the binding rubric:

- `ISMS-Handbook/Registers/05-Risk-Library/Rubric_Likelihood.md`

Rule: Likelihood is derived from a small set of yes/no factors with a fixed mapping to the 4 levels. No probability estimates are used.

## Treatment and control selection

Treatment options:

- Avoid
- Mitigate (Treat)
- Transfer
- Accept (Residual risk acceptance)

Controls selection MUST be traceable:

- For each treated risk, selected controls MUST be referenced in the Risk Log.
- Implementation status and evidence MUST be maintained in the SoA (SSOT).

## Mandatory records (documented information)

The following records MUST exist and be maintained:

- Risk scenarios, scoring, decision, owner approval: `ISMS-Handbook/Registers/07-Risk-Log/Register_Risk-Log.md`
- SoA (controls applicability, status, justification, evidence): `ISMS-Handbook/Registers/09-Statement-of-Applicability/Register_Statement-of-Applicability.md`
- Scope unit assessments and workshop minutes: `ISMS-Handbook/Registers/06-Risk-Assessments/Scope-Units/`

## Review cycle

The method, rubrics and acceptance criteria MUST be reviewed per the defined review cycle, and whenever significant changes occur (scope changes, major incidents, new regulatory requirements).
