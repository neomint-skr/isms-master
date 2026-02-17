# Gaps and Breakpoints

**Date:** 2026-02-17
**Basis:** Commit `26baa9b8`, complete review of CB_PRC_07/12/13, CB_POL_L2_07/11, CB_POL_L3_08, CB_PRC_01/04/08/09/11/14, all registers HB_REG_03–08/11/12/EXC_01

---

## Reading Guide

Each gap is classified by:
- **Severity:** Critical (certification risk) / High (audit finding likely) / Medium (improvement opportunity)
- **Evidence:** Specific document references and line-level observations
- **Impact:** What breaks if left unaddressed
- **Recommendation:** Suggested remediation

---

## Gap 1: No Dedicated BIA Process

**Severity:** High
**Evidence:** The BIA methodology is described in CB_POL_L3_08-Business-Continuity (L3 Handbook) under the heading "Conduct Business Impact Analysis." However, no dedicated process document (CB_PRC_xx) exists for BIA. The BIA section in CB_POL_L3_08 describes WHAT to do but lacks:
- Formal trigger definition (when does a BIA cycle start?)
- RACI matrix (who is responsible, accountable, consulted, informed?)
- Step-by-step workflow with numbered steps
- Explicit handoff to CB_PRC_13 (Protection Requirements)

**Impact:** The handoff from BIA (HB_REG_04) to CB_PRC_13 Step 2 is implicit — CB_PRC_13 reads HB_REG_04 but nothing formally triggers BIA execution before the protection requirements cycle. In an audit, this could be flagged as a gap in the "process approach" required by ISO 27001 Clause 4.4.

**Recommendation:** Either (a) create a dedicated CB_PRC_15-Business-Impact-Analysis process document, or (b) extend CB_PRC_13 to include BIA as an explicit prerequisite phase with trigger and RACI. Option (a) is cleaner for traceability.

---

## Gap 2: No Standalone Vulnerability Assessment Process

**Severity:** Medium
**Evidence:** Vulnerability catalogues exist per asset layer in the Risk-Framework (under `ISMS-Handbook/Registers/Risk-Framework/Vulnerabilities/`). The vulnerability assessment itself is described as Step 2 within CB_PRC_07-Risk-Management. However:
- CB_PRC_04-Vulnerability-Management exists but is a skeleton (TODO sections, no substantive steps)
- The relationship between CB_PRC_04 (technical vulnerability management — patching, scanning) and CB_PRC_07 Step 2 (catalogue-driven vulnerability assessment for risk analysis) is undefined
- CB_PRC_07 Step 1 lists "vulnerability advisories (CB_PRC_04)" as an event trigger, but CB_PRC_04 does not define how advisories are escalated to CB_PRC_07

**Impact:** Two different vulnerability concepts are conflated: (1) technical vulnerability management (CVE tracking, patching — operational) and (2) catalogue-based vulnerability assessment (risk methodology — strategic). Without a populated CB_PRC_04, the event-driven trigger path from vulnerability advisories to risk reassessment has no defined mechanism.

**Recommendation:** Populate CB_PRC_04 with the technical vulnerability management workflow (scanning, patching, advisory triage) and add an explicit escalation step to CB_PRC_07 for vulnerabilities that require risk reassessment.

---

## Gap 3: Missing Feedback Loop from Incidents to Risk Reassessment

**Severity:** High
**Evidence:** CB_PRC_01-Incident-Management includes escalation paths and references to risk management. CB_PRC_07 Step 1 explicitly lists "severe security incidents (classification >= High in CB_PRC_01)" as an event-driven trigger. However:
- CB_PRC_07 does not define a formal "receive incident escalation" step
- The mechanism for HOW the CISO incorporates an incident into the risk scope is undocumented
- There is no defined data object that flows from CB_PRC_01 to CB_PRC_07 (e.g., which incident attributes are needed for risk scoping?)

**Impact:** The trigger is mentioned but the receiving end is not operationalized. In practice, the CISO must ad-hoc decide what to do when an incident is escalated. An auditor could ask: "Show me how incident X led to risk reassessment Y" and find no traceable path.

**Recommendation:** Add a formal "Event-Driven Scope Expansion" sub-step to CB_PRC_07 Step 1 that defines: (a) which incident attributes are received (severity, affected assets, root cause), (b) how these map to in-scope assets for reassessment, (c) documentation requirements for the trigger-to-scope linkage.

---

## Gap 4: Risk Committee Without Process Definition

**Severity:** Medium
**Evidence:** CB_PRC_07 references quarterly Risk Committee reviews: "Risk Committee convenes to review landscape, assess treatment progress, adjust priorities." However:
- No process document defines the Risk Committee meeting cadence, agenda structure, quorum, or output format
- No register captures Risk Committee decisions
- The membership and authority of the Risk Committee are not defined (is it the same as management review? a subset?)

**Impact:** Quarterly risk reviews happen informally. Without documented governance, an auditor may question whether "regular review of risk" (ISO 27001 Clause 6.1.2) is systematically performed between annual full assessments.

**Recommendation:** Define the Risk Committee either (a) as a section within CB_PRC_07 with agenda template, membership, quorum, and output format, or (b) as meeting governance within HB_MGT_02 (Meeting Log) with a standardized agenda template. Option (a) is preferable for process traceability.

---

## Gap 5: Protection Requirements → Risk Assessment Handoff (Partial)

**Severity:** Medium
**Evidence:** CB_PRC_13 Step 9 states: "IS-Coordinator creates risk assessment file from CB_TPL_21 [...] communicates flagged assets and prepared RA files to CISO for next risk cycle." CB_PRC_07 Step 1 defines scope determination by identifying assets with High/Very high PR. However:
- CB_PRC_07 Step 1 does NOT explicitly reference the RA files prepared by CB_PRC_13 Step 9
- CB_PRC_07 Step 1 independently identifies assets from HB_REG_03 by PR value, potentially creating duplicate scope determination
- The prepared RA-files (skeleton templates) are not mentioned in CB_PRC_07 at all

**Impact:** Two parallel paths exist: CB_PRC_13 prepares RA files and communicates them, but CB_PRC_07 independently scopes from HB_REG_03. This is not a contradiction, but the lack of explicit linkage means the prepared RA files could be ignored or duplicated.

**Recommendation:** Add an explicit reference in CB_PRC_07 Step 1: "CISO receives list of flagged assets and prepared RA-files from CB_PRC_13 Step 9 as primary input for regular-cycle scope determination."

---

## Gap 6: No Monitoring Feedback Loop to Risk Register

**Severity:** Medium
**Evidence:** CB_PRC_11-Performance-Monitoring defines KPIs including KPI-05 (risk treatment plan progress). The escalation model (Green → Amber → Red) triggers corrective actions. However:
- There is no defined mechanism for a Red KPI to trigger a risk reassessment in CB_PRC_07
- CB_PRC_11 escalates to management review (CB_PRC_09) for persistent Red KPIs, but the path from management review back to risk reassessment is implicit
- The feedback loop "monitoring → risk register update" is not formalized

**Impact:** KPI monitoring exists but its output does not feed back into the risk management cycle in a traceable way. An auditor could ask: "How do KPI trends inform your risk assessment?" and find no documented mechanism.

**Recommendation:** Add an explicit feedback step to CB_PRC_11: "Red KPIs affecting risk-relevant controls → CISO evaluates whether event-driven risk reassessment (CB_PRC_07) is required; decision documented in quarterly performance report."

---

## Gap 7: CB_PRC_08 (Internal Audit) and CB_PRC_09 (Management Review) Are Skeletons

**Severity:** High
**Evidence:** Both CB_PRC_08-Internal-Audit and CB_PRC_09-Management-Review contain TODO placeholders in their process step sections. While their Objective and Scope sections are populated and their role in the risk chain is referenced by CB_PRC_07, the actual process workflows are incomplete.

**Impact:** These are ISO 27001 mandatory processes (Clause 9.2 and 9.3). Their skeleton status means:
- The trigger path "audit finding → risk reassessment" (CB_PRC_07 Step 1) has no defined mechanism on the sending side
- Management review inputs and outputs are not formalized
- An auditor will expect documented process steps for both

**Recommendation:** Priority population of CB_PRC_08 and CB_PRC_09 with full process steps, RACI, triggers, and handoffs. These are certification-critical.

---

## Gap 8: Threat Catalogue (HB_REG_11) Not Found as Standalone Register

**Severity:** Medium
**Evidence:** CB_PRC_07 references HB_REG_11 (Threat Catalogue) with threat-IDs and aspect tags. The Risk-Framework directory contains `Threats/` subdirectories with per-layer threat catalogues. However, no standalone `11-Threat-Catalogue.md` file was found in `ISMS-Handbook/Registers/` by the export agent. The threat data exists distributed across `Risk-Framework/Threats/<Layer>/` files.

**Impact:** The ID HB_REG_11 is referenced in multiple process documents but may not exist as a centralized register. This creates confusion: is the threat catalogue the collection of per-layer files, or should there be a master catalogue?

**Recommendation:** Either (a) create a centralized HB_REG_11 that indexes all per-layer threat catalogues, or (b) clarify in CB_PRC_07 that "HB_REG_11" refers to the Risk-Framework/Threats/ directory collectively. Option (a) is preferable for auditability.

---

## Summary Table

| # | Gap | Severity | ISO Reference | Process Impact |
|---|---|---|---|---|
| 1 | No dedicated BIA process | High | Cl. 4.4, 8.1 | BIA → PR handoff untraceable |
| 2 | CB_PRC_04 skeleton | Medium | A.8.8 | Vuln advisory → risk trigger undefined |
| 3 | Incident → Risk handoff incomplete | High | Cl. 6.1.2, A.5.25 | Incident escalation not operationalized in CB_PRC_07 |
| 4 | Risk Committee undocumented | Medium | Cl. 6.1.2 | Quarterly reviews not traceable |
| 5 | PR → RA handoff partial | Medium | Cl. 8.2 | Prepared RA files not referenced in CB_PRC_07 |
| 6 | No monitoring → risk feedback loop | Medium | Cl. 9.1, 10.1 | KPI trends don't feed risk cycle |
| 7 | CB_PRC_08 + CB_PRC_09 skeletons | High | Cl. 9.2, 9.3 | Mandatory processes incomplete |
| 8 | HB_REG_11 not centralized | Medium | Cl. 6.1.2 | Threat catalogue reference ambiguous |

**Overall assessment:** The process chain architecture is sound and well-designed. The risk methodology (catalogue-driven approach per BSI 200-3) is comprehensive. The main gaps are in operationalization: skeleton processes, implicit handoffs, and missing feedback loops. Three gaps are High severity (certification risk), five are Medium (improvement opportunities). No Critical gaps were identified — the fundamental ISMS structure is intact.
