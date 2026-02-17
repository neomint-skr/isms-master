# Decisions Needed

**Date:** 2026-02-17
**For:** ISMS Owner / External Reviewer
**Context:** Based on gap analysis in `05_GAPS_AND_BREAKPOINTS.md`

---

## How to Use This Document

Each decision item includes:
- **Priority:** P1 (before certification audit) / P2 (before surveillance audit) / P3 (improvement backlog)
- **Related gap:** Reference to `05_GAPS_AND_BREAKPOINTS.md`
- **Options:** Concrete alternatives with trade-offs
- **Recommendation:** Suggested path (reviewer may disagree)

---

## D1: BIA Process Formalization

**Priority:** P1
**Related gap:** Gap 1 (No dedicated BIA process)

**Decision required:** How should BIA governance be formalized?

| Option | Pros | Cons |
|---|---|---|
| A: Create CB_PRC_15-Business-Impact-Analysis | Clean separation; own trigger/RACI; traceable for auditor | Additional document to maintain; may seem over-engineered for small orgs |
| B: Extend CB_PRC_13 with BIA prerequisite phase | Keeps process count down; BIA and PR are tightly coupled | CB_PRC_13 becomes very long; muddies the L3 concept (BIA is its own discipline) |
| C: Formalize BIA section in CB_POL_L3_08 with trigger/RACI | Minimal change; builds on existing content | L3 handbook shouldn't contain process steps; auditor expects process-level documentation |

**Recommendation:** Option A. BIA is a distinct discipline with its own stakeholders (process owners, not IT). A separate process document aligns with BSI 200-4 and provides a clean trigger chain: CB_PRC_15 → HB_REG_04 → CB_PRC_13.

---

## D2: Technical Vulnerability Management (CB_PRC_04)

**Priority:** P1
**Related gap:** Gap 2 (CB_PRC_04 skeleton) + Gap 7 (skeleton processes)

**Decision required:** What scope should CB_PRC_04 cover?

| Option | Pros | Cons |
|---|---|---|
| A: Full technical vuln mgmt (scanning, patching, advisory triage, escalation to CB_PRC_07) | Closes both the operational gap and the risk trigger gap | Requires defining tooling, scan schedules, patch windows — organization-specific |
| B: Advisory triage + escalation only (leave scanning/patching to IT operations) | Focused on ISMS-relevant decisions; lighter document | Operational vuln mgmt remains undocumented; may not satisfy A.8.8 |

**Recommendation:** Option A. ISO 27002 A.8.8 (Management of technical vulnerabilities) expects a documented process. The escalation path to CB_PRC_07 is essential for closing the trigger chain.

---

## D3: Incident-to-Risk Escalation Mechanism

**Priority:** P1
**Related gap:** Gap 3 (Missing feedback loop incidents → risk)

**Decision required:** Where should the receiving mechanism be documented?

| Option | Pros | Cons |
|---|---|---|
| A: Add "Event-Driven Scope Expansion" sub-step to CB_PRC_07 Step 1 | Keeps the receiving logic with the risk process; one place to look | CB_PRC_07 grows; may need to define different sub-steps for each trigger type |
| B: Add output specification to CB_PRC_01 (what data flows to CISO) | Sending side clearly defined; CB_PRC_07 stays focused | Receiving side still implicit; need to update both documents |
| C: Both A and B | Complete traceability on both sides | Two documents to maintain for one handoff |

**Recommendation:** Option C. Define the output format in CB_PRC_01 ("Incident Escalation Report" template fields) AND the receiving mechanism in CB_PRC_07 Step 1 ("for incidents escalated per CB_PRC_01: affected assets are added to risk scope"). This is a small change in both documents.

---

## D4: Risk Committee Governance

**Priority:** P2
**Related gap:** Gap 4 (Risk Committee without process definition)

**Decision required:** How should Risk Committee governance be documented?

| Option | Pros | Cons |
|---|---|---|
| A: Dedicated section in CB_PRC_07 (agenda, membership, quorum, output) | Integrated with risk process; one document for auditor | CB_PRC_07 grows further |
| B: Meeting governance in HB_MGT_02 with standardized agenda template | Separates governance from process; HB_MGT_02 is designed for this | Two places to look during audit |
| C: Standalone process CB_PRC_16-Risk-Committee | Maximum formalization; clear process ownership | Over-engineering for a quarterly meeting |

**Recommendation:** Option A. The Risk Committee is a governance mechanism within risk management, not a separate process. A section in CB_PRC_07 with a fixed agenda template (risk landscape, treatment progress, priority changes, new triggers) is sufficient.

---

## D5: Protection Requirements → Risk Assessment Linkage

**Priority:** P2
**Related gap:** Gap 5 (PR → RA handoff partial)

**Decision required:** Should CB_PRC_07 explicitly reference CB_PRC_13 output?

| Option | Pros | Cons |
|---|---|---|
| A: Add one sentence to CB_PRC_07 Step 1 | Minimal change; closes the gap | — |
| B: Leave as-is (implicit linkage via HB_REG_03 PR values) | No document change needed | Auditor could question traceability |

**Recommendation:** Option A. One sentence in CB_PRC_07 Step 1: "For regular-cycle scope determination, the CISO receives the list of flagged assets and prepared RA-files from CB_PRC_13 Step 9 as primary input." Zero risk, high traceability gain.

---

## D6: Monitoring-to-Risk Feedback Loop

**Priority:** P2
**Related gap:** Gap 6 (No monitoring → risk feedback loop)

**Decision required:** Where should the feedback mechanism be documented?

| Option | Pros | Cons |
|---|---|---|
| A: Add escalation rule to CB_PRC_11 (Red KPI → evaluate risk reassessment) | Keeps monitoring process self-contained; clear trigger | CB_PRC_07 still doesn't acknowledge the incoming trigger |
| B: Add to both CB_PRC_11 (sending) and CB_PRC_07 Step 1 (receiving) | Complete traceability | Two documents |

**Recommendation:** Option B, same logic as D3. Small additions to both documents.

---

## D7: Populate CB_PRC_08 and CB_PRC_09

**Priority:** P1
**Related gap:** Gap 7 (skeleton processes)

**Decision required:** In what order and to what depth should these be populated?

| Option | Pros | Cons |
|---|---|---|
| A: Full population with all steps, RACI, templates | Certification-ready; complete | Higher effort |
| B: Minimum viable process (ISO clause requirements only) | Faster; meets minimum bar | May need rework for maturity |

**Recommendation:** Option A for CB_PRC_09 (management review — relatively standardized, can follow ISO 9.3 structure closely). Option A for CB_PRC_08 (internal audit — must cover audit programme, competence, independence, reporting per ISO 9.2). These are mandatory documented information per ISO 27001.

---

## D8: Threat Catalogue Consolidation

**Priority:** P3
**Related gap:** Gap 8 (HB_REG_11 not centralized)

**Decision required:** Should a centralized threat catalogue exist?

| Option | Pros | Cons |
|---|---|---|
| A: Create HB_REG_11 as master index referencing per-layer files | Clean reference for CB_PRC_07; single entry point | Maintenance: must stay in sync with layer files |
| B: Rename existing directory structure and clarify in CB_PRC_07 | No new file; leverages existing structure | Less formal; auditor needs explanation |

**Recommendation:** Option A. A one-page master index (ID, threat name, aspect tag, applicable layers, source reference) provides the single entry point that CB_PRC_07 expects. The per-layer files remain the detailed source.

---

## Priority Summary

| Priority | Items | Theme |
|---|---|---|
| P1 (before certification) | D1, D2, D3, D7 | Missing processes, broken trigger chains, skeleton documents |
| P2 (before surveillance) | D4, D5, D6 | Governance formalization, handoff traceability, feedback loops |
| P3 (improvement backlog) | D8 | Reference consolidation |

## Suggested Sequence

1. **D7** — Populate CB_PRC_08 and CB_PRC_09 (unblocks audit/review trigger paths)
2. **D2** — Populate CB_PRC_04 (unblocks vulnerability trigger path)
3. **D1** — Create BIA process (unblocks BIA → PR trigger chain)
4. **D3** — Add incident escalation mechanism (small change, high impact)
5. **D5** — Add PR → RA reference (one sentence)
6. **D4** — Formalize Risk Committee (section in CB_PRC_07)
7. **D6** — Add monitoring feedback loop (small additions)
8. **D8** — Consolidate threat catalogue (when convenient)
