# Process Chain Overview

**Date:** 2026-02-17
**Prepared for:** External Reviewer Briefing Package
**Source documents:** CB_PRC_12, CB_PRC_13, CB_PRC_07, CB_POL_L2_07, CB_POL_L2_11, CB_POL_L3_08, CB_PRC_01, CB_PRC_04, CB_PRC_08, CB_PRC_09, CB_PRC_14, CB_PRC_11

---

## End-to-End Flow Diagram

```
Phase 1: Asset Registration (CB_PRC_12)
    │  Trigger: new/changed/decommissioned asset; audit deviation
    │  Output: HB_REG_03 (asset record, ID, relationships, owner)
    ▼
Phase 2: Business Impact Analysis (CB_POL_L3_08)
    │  Trigger: annually or after significant IT/org change
    │  Output: HB_REG_04 (BIA tier, RTO, RPO, MTPD per process)
    ▼
Phase 3: Protection Requirements (CB_PRC_13)
    │  Input: HB_REG_03 (asset list), HB_REG_04 (BIA tiers for availability)
    │  Output: HB_REG_03 C/I/A columns updated; PR-<Asset-ID>.md records;
    │           RA-<Asset-ID>.md files prepared for High/Very high assets
    ▼
Phase 4: Vulnerability Assessment (CB_PRC_07 Step 2)
    │  Input: HB_REG_03 vulnerability catalogues (per asset layer)
    │  Output: vulnerability status per asset (present/not present/unknown/n/a)
    ▼
Phase 5: Scenario Generation (CB_PRC_07 Step 3)
    │  Input: HB_REG_11 (threat catalogue) + vulnerabilities with
    │         status "present" or "unknown"
    │  Output: SC-<Asset-ID>-#### identifiers in HB_REG_05
    ▼
Phase 6: Risk Analysis (CB_PRC_07 Steps 4–5)
    │  Output: L × I gross risk scores + net risk scores in HB_REG_05
    │           (with SM-ID references from HB_REG_07)
    ▼
Phase 7: Risk Treatment (CB_PRC_07 Treatment + CB_PRC_14)
    │  Output: HB_REG_06 (Risk Treatment Plan, SC-ID → SM-ID)
    │           HB_REG_07 (Security Measures Catalogue — new/updated SM-IDs)
    │           HB_REG_08 (Statement of Applicability — updated)
    │           HB_REG_EXC_01 (Exception Index — if exception approved)
    ▼
Phase 8: Approval & Residual Risk Acceptance
    │  Actors: Risk Owner (formal acceptance), CEO/CTO (plan approval)
    │  Output: HB_REG_05 acceptance records; HB_REG_06 signed treatment plan
    ▼
Phase 9: Monitoring & Review (CB_PRC_11 + CB_PRC_09)
    │  Quarterly: KPI collection, Risk Committee review
    │  Annually:  Management Review (CB_PRC_09) → feeds back into Phase 1/4
    │
    ├─── Feedback loop → Phase 1 (new/changed assets identified)
    └─── Feedback loop → Phase 4 (risk reassessment triggered)
```

**Ad-hoc loops (bypass the annual schedule):**

```
Incident (CB_PRC_01, severity ≥ High) ──────────────► Phase 4
Vulnerability advisory (CB_PRC_04)    ──────────────► Phase 4
Audit finding (CB_PRC_08)             ──────────────► Phase 4
Exception approval (CB_PRC_14)        ──► HB_REG_05 (risk type "Exception")
```

---

## Detailed Phase Descriptions

### Phase 1: Asset Registration

**Document:** CB_PRC_12-Asset-Management (v00.01.009)
**Trigger:** Introduction, change, or decommissioning of business processes, applications, IT systems, communication links, rooms, or buildings; deviations identified during reviews or audits.
**Input:** None (initiation event); CB_POL_L2_07 (asset types and grouping criteria).
**Steps:**
1. Identification — assign asset type; evaluate whether asset fits an existing group (five general grouping criteria from CB_POL_L2_07); group or record as individual object.
2. ID assignment — unique, stable asset ID allocated; does not change over lifecycle.
3. Registration — mandatory attributes recorded in HB_REG_03.
4. Relationship mapping — cross-reference tables in HB_REG_03 updated; denormalized relationship columns updated.
5. Responsibility assignment — asset owner designated and recorded.
6. Approval — registration reviewed and approved by responsible function.
7. Protection requirements trigger — IS-Coordinator triggers CB_PRC_13 for the new or changed asset.
8. Maintenance and update — changes recorded event-driven; decommissioned assets marked "retired" (not deleted); material changes re-trigger CB_PRC_13.

**Output:** HB_REG_03 (new/updated asset record including owner, relationships, asset ID).
**Roles:**
- ISC: Coordinates identification, registration, relationship mapping, triggers CB_PRC_13.
- Asset Owner: Provides information, is designated in the register.
- Responsible function (CISO): Approves registration (Step 6).

**Handoff to next phase:** CB_PRC_12 Step 7 explicitly states that after registration and approval the IS-Coordinator triggers CB_PRC_13.

---

### Phase 2: Business Impact Analysis

**Document:** CB_POL_L3_08-Business-Continuity (v00.01.001)
**Trigger:** Annually, or after significant changes to IT landscape, applications, or organizational structure; after an actual BCM event.
**Input:** HB_REG_03 (Asset Register — primary input for system identification).
**Steps:**
1. Identify critical processes and systems — compile inventory from HB_REG_03; document business function, supporting IT, dependencies, and key contacts; validate with process owners.
2. Assess disruption impact — evaluate four dimensions (financial, operational, legal/regulatory, reputational); determine Maximum Tolerable Period of Disruption (MTPD); derive RTO and RPO.
3. Assign recovery tiers — classify into Tier 1 (RTO 0-4 h, Critical), Tier 2 (5-24 h, Important), Tier 3 (25-96 h, Normal), Tier 4 (>97 h, Low); record in HB_REG_04.

**Output:** HB_REG_04 (BIA Register — tier, RTO, RPO, MTPD, last assessment date per process).
**Roles:**
- CISO: Responsible for BCM implementation; decides on continuity plan activation.
- IT Administrators / System Owners: Execute recovery procedures.
- Process Owners: Validate process inventory and impact dimensions.

**Handoff to next phase:** HB_REG_04 BIA tiers are consumed by CB_PRC_13 Step 2 (availability protection requirement derived from BIA tier for process assets). The handoff is implicit — CB_PRC_13 reads HB_REG_04 when assessing process assets; no explicit trigger from CB_POL_L3_08 to CB_PRC_13.

---

### Phase 3: Protection Requirements Assessment

**Document:** CB_PRC_13-Protection-Requirements (v00.01.001)
**Trigger:** New or changed asset registered through CB_PRC_12 (primary trigger); periodic review (at least annually); material change to business processes, IT landscape, or organizational structure; findings from risk analysis, audit, or management review.
**Input:** HB_REG_03 (asset inventory, cross-reference tables); HB_REG_04 (BIA tiers for availability derivation of process assets); CB_POL_L2_11 (damage scenarios, scales, maximum principle, cumulation/distribution rules).
**Steps:**
1. Scope determination — ISC identifies assets to be assessed from HB_REG_03; excludes unchanged assets.
2. Primary assessment (information and business processes) — asset owner assesses C/I/A per damage scenario (CB_POL_L2_11); for process assets, availability (A) derived from BIA tier in HB_REG_04 (Tier 1 → Very high, Tier 2 → High, Tier 3/4 → Normal); override documentation for cumulation/distribution effects.
3. Inheritance — applications — maximum principle applied across all supported processes (via cross-reference tables in HB_REG_03).
4. Inheritance — IT systems — derived from applications; cumulation and distribution effects evaluated.
5. Inheritance — rooms and buildings — derived from installed IT systems and stored media.
6. Inheritance — communication links — derived from connected systems; three critical-link criteria evaluated.
7. Documentation — C/I/A values recorded in HB_REG_03; individual PR record (CB_TPL_19) filed in `Registers/Protection-Requirements/<Layer>/PR-<Asset-ID>.md`.
8. Approval — asset owner approves values; CISO verifies cross-asset consistency.
9. Handoff to risk management — assets with High or Very high in at least one C/I/A value flagged; ISC creates RA file from CB_TPL_21 in `Registers/Risk-Assessments/<Layer>/RA-<Asset-ID>.md`; communicates list of flagged assets to CISO.

**Output:** HB_REG_03 C/I/A columns updated; PR-<Asset-ID>.md records per layer; RA-<Asset-ID>.md files prepared (skeleton) for High/Very high assets.
**Roles:**
- ISC: Scope determination, documentation, creates RA files, communicates to CISO.
- Asset Owner: Primary assessment (Step 2), approval (Step 8).
- CISO: Cross-asset consistency verification, escalation of disagreements.

**Handoff to next phase:** CB_PRC_13 Step 9 explicitly states the ISC communicates the list of flagged assets and their prepared RA files to the CISO for inclusion in the next risk assessment cycle.

---

### Phase 4: Vulnerability Assessment

**Document:** CB_PRC_07-Risk-Management Step 2 (v00.01.014)
**Trigger:** Annual risk assessment cycle (before management review); event-driven via CB_PRC_01 (incident ≥ High), CB_PRC_04 (vulnerability advisory), CB_PRC_08 (audit finding), infrastructure/process change, new regulatory requirements, project design phase, new supplier contracts.
**Input:** HB_REG_03 vulnerability catalogues (per asset layer — separate catalogue per layer); scope of in-scope assets from Phase 3 (High/Very high PR) plus event-driven expansions.
**Steps (CB_PRC_07 Step 1 — Scope determination):**
1. CISO identifies in-scope assets from HB_REG_03 (PR = High or Very high, flagged by CB_PRC_13).
2. Additional event-driven input sources checked: CB_PRC_01, CB_PRC_08, CB_PRC_04, IT changes.

**Steps (CB_PRC_07 Step 2 — Vulnerability assessment):**
3. For each in-scope asset: work through vulnerability catalogue of the asset's layer in HB_REG_03.
4. Each vulnerability entry receives status: present / not present / unknown / n/a.
5. Evidence statement or comment documented for each assessment.
6. Vulnerabilities with status "unknown" treated as "present" for scenario generation.

**Output:** Vulnerability status assigned per vulnerability entry per in-scope asset (recorded in HB_REG_03 / RA files).
**Roles:**
- CISO: Scope determination, vulnerability assessment (with ISC).
- ISC: Operational vulnerability assessment execution.

**Handoff to next phase:** Vulnerability status entries with "present" or "unknown" directly feed Step 3 (scenario generation). Handoff is internal within CB_PRC_07.

---

### Phase 5: Scenario Generation

**Document:** CB_PRC_07-Risk-Management Step 3 (v00.01.014)
**Trigger:** Completion of Step 2 (vulnerability assessment) for each asset.
**Input:** HB_REG_11 (Threat Catalogue — threats per asset class with relevance flags and domain/aspect tags); vulnerability entries with status "present" or "unknown" from Step 2.
**Steps:**
1. For each threat in HB_REG_11 flagged as relevant for the asset's layer (asset class): check if at least one vulnerability with status "present" or "unknown" shares a compatible aspect tag (C, I, A).
2. If both conditions are met, a risk scenario is generated.
3. Scenario receives unique ID: `SC-<Asset-ID>-####` (four-digit sequential per asset).
4. Scenario description captures: threat, exploited vulnerability, potential impact on affected core value(s).
5. Scenario text formulated in subjunctive: "If [threat] occurs and [vulnerability] exists, this could lead to [impact] for [asset]."

**Output:** SC-IDs with scenario descriptions entered in HB_REG_05 (Risk Register).
**Roles:**
- CISO: Scenario generation with risk owner.

**Handoff to next phase:** SC-IDs with scenario descriptions feed directly into Step 4 (risk analysis). Internal handoff within CB_PRC_07.

---

### Phase 6: Risk Analysis

**Document:** CB_PRC_07-Risk-Management Steps 4–5 (v00.01.014)
**Trigger:** Completion of scenario generation (Step 3).
**Input:** SC-IDs from Phase 5; CB_POL_L2_11 likelihood scale (1-4) and impact derivation table (PR category → impact baseline); HB_REG_07 (Security Measures Catalogue — existing SM-IDs for net risk).
**Steps (Step 4 — Risk analysis):**
1. CISO and risk owner assess likelihood (L): rated 1-4 per CB_POL_L2_11; rationale documented as free-text.
2. Impact (I) derived from asset's protection requirement: Normal → 1, High → 3, Very high → 4; assessor may adjust upward but not below baseline.
3. Gross risk = L × I (without existing controls).
4. Existing security measures (SM-IDs from HB_REG_07) identified per scenario; mitigating effect on L and/or I assessed.
5. Net risk = Net L × Net I (with existing controls).

**Steps (Step 5 — Risk evaluation and prioritization):**
6. Net risk scores compared against acceptance criteria (CB_POL_L2_11): Critical (12-16), High (8-9), Medium (4-6), Low (1-3).
7. Prioritized list presented to risk owner and top management.
8. Critical risks: immediate treatment. High risks: treatment within 30 days.

**Output:** L × I gross and net risk scores per scenario in HB_REG_05 (Risk Register).
**Roles:**
- CISO: Leads risk analysis; determines impact, documents rationale.
- Risk Owner: Joint assessment of likelihood and impact.
- Top Management: Receives prioritized list.

**Handoff to next phase:** Risk scores and prioritization feed directly into risk treatment. Internal handoff within CB_PRC_07.

---

### Phase 7: Risk Treatment

**Document:** CB_PRC_07-Risk-Management (Treatment section) + CB_PRC_14-Exception-Management (v00.01.002)
**Trigger:** Completion of risk evaluation (Step 5); unacceptable risks require treatment selection.
**Input:** HB_REG_05 (risk entries); HB_REG_07 (Security Measures Catalogue — existing SM-IDs); Annex A of ISO 27001 (93 controls for reconciliation).
**Steps (CB_PRC_07 — Risk Treatment):**
1. Risk owner selects treatment option: Avoid / Reduce / Transfer / Accept.
2. For "Reduce": CISO checks HB_REG_07 for existing SM-ID addressing the scenario. If found: reference SM-ID. If not: create new SM-ID in HB_REG_07.
3. Risk-to-measure mapping documented in HB_REG_06 (SC-ID → SM-ID linkage).
4. Annex A reconciliation — new/changed control assignments updated in HB_REG_08 (SoA).
5. Risk Treatment Plan entry created in HB_REG_06: SC-ID, treatment option, SM-IDs, responsible, deadline, expected residual risk.

**Steps (CB_PRC_14 — Exception Management, if applicable):**
6. If a policy/control deviation is required: requestor prepares exception request (CB_TPL_20) and submits to CISO.
7. CISO assigns EXC-ID and registers in HB_REG_EXC_01 (status: Pending).
8. CISO performs risk assessment of deviation; determines approval authority.
9. Decision: Approved (conditions + expiry date set; entry in HB_REG_05 as risk type "Exception") or Rejected (remediation deadline set).
10. Pre-expiry review: still needed → new request; no longer needed → status "Expired."

**Output:** HB_REG_06 (Risk Treatment Plan); HB_REG_07 (updated/new SM-IDs); HB_REG_08 (SoA updated); HB_REG_EXC_01 (exception records, if applicable); HB_REG_05 (exception entries as risk type "Exception").
**Roles:**
- Risk Owner: Treatment option selection; formal responsibility for treatment.
- CISO: Control identification, Annex A reconciliation, SoA update, exception risk assessment.
- CEO/CTO: Approval for exceptions with High impact level.

**Handoff to next phase:** Completed treatment plan submitted to top management for approval.

---

### Phase 8: Approval and Residual Risk Acceptance

**Document:** CB_PRC_07-Risk-Management (Approval and residual risk acceptance section)
**Trigger:** Completed Risk Treatment Plan (HB_REG_06) ready for submission.
**Input:** HB_REG_06 (Risk Treatment Plan); HB_REG_05 (risk entries with proposed acceptance).
**Steps:**
1. CISO submits risk treatment plan to top management (CEO/CTO) for approval (ISO Cl. 6.1.3 f).
2. Risk owners formally and in writing accept remaining residual risks.
3. Both approvals documented in HB_REG_05 (rationale, date, approving person, reassessment date).

**Output:** HB_REG_05 acceptance records (approved treatment plan, residual risk acceptances with signatures).
**Roles:**
- CISO: Prepares and submits treatment plan.
- Risk Owner: Formal written residual risk acceptance.
- CEO/CTO: Approval of risk treatment plan.

**Handoff to next phase:** Approved plan and accepted residuals feed into ongoing monitoring (Phase 9 KPI-05: risk treatment plan progress).

---

### Phase 9: Monitoring and Review

**Document:** CB_PRC_11-Performance-Monitoring (v00.01.007) + CB_PRC_09-Management-Review (v00.01.008)
**Trigger:**
- Monthly: CISO collects operational KPI data.
- Quarterly: Quarterly performance report; Risk Committee review of risk landscape and treatment progress.
- Annually: Full management review (CB_PRC_09); full risk assessment cycle restart.
**Input:** KPI data from HB_REG_09 (IS Objectives), HB_REG_05 (risk register), HB_REG_08 (risk treatment progress), HB_REG_12 (audit findings), incident tickets, training records.

**Steps (CB_PRC_11 — Performance Monitoring):**
1. KPI definition from HB_CLS_6.2 / HB_REG_09 (SMART criteria, six determinations per Cl. 9.1 a-f).
2. Data collection by responsible persons per KPI catalogue (KPI-01 through KPI-06).
3. Analysis: target-actual comparison; trend analysis over ≥4 periods; root-cause investigation for significant deviations; control effectiveness assessment.
4. Reporting: monthly operational summary (CISO, ISC); quarterly report (CISO, ISC, CTO); management review input (top management).
5. Escalation: Green (no action) → Amber (CISO root-cause + corrective action) → Red (top management escalation, 5-day corrective action plan). Persistent Red KPIs → mandatory agenda item at management review.

**Steps (CB_PRC_09 — Management Review, annually):**
6. Scheduling and preparation: compile seven inputs per ISO Cl. 9.3.2 (including risk management results, KPI results, audit findings, nonconformity status).
7. Conduct review with top management; traceable decisions on ISMS governance.
8. Outputs per ISO Cl. 9.3.3 → action tracking in HB_REG_09 (IS Objectives Register).

**Output:** Performance reports (monthly/quarterly); management review minutes (HB_MGT_02); updated IS objectives (HB_REG_09); corrective actions tracked in HB_MGT_01 (improvement roadmap).
**Roles:**
- CISO: KPI analysis, reporting, escalation decisions, management review input preparation.
- ISC: Operational KPI data collection.
- CTO: Receives quarterly report; management review participant.
- CEO/CTO: Management review decisions.

**Feedback loops:**
- Findings from performance monitoring or management review trigger reassessment of assets (loop → Phase 1) or ad-hoc risk assessment (loop → Phase 4).
- Risk Committee quarterly review adjusts treatment priorities (loop → Phase 7).

---

## Event-Driven Triggers

| Event | Source Process | Target Phase | Mechanism |
|---|---|---|---|
| Severe security incident (severity ≥ High) | CB_PRC_01-Incident-Management | Phase 4 (Vulnerability Assessment / Risk Identification) | Explicitly listed in CB_PRC_07 Step 1 as event-driven trigger; CISO expands scope of risk assessment |
| New vulnerability advisory or scan result | CB_PRC_04-Vulnerability-Management | Phase 4 | Explicitly listed in CB_PRC_07 Step 1 as event-driven trigger |
| Internal audit finding requiring action | CB_PRC_08-Internal-Audit | Phase 4 | Explicitly listed in CB_PRC_07 Step 1 as event-driven trigger; audit findings also recorded as nonconformities in HB_REG_12 via CB_PRC_10 |
| Material change to IT infrastructure or business processes | CB_PRC_12 (asset change event) | Phase 1 → Phase 3 → Phase 4 | CB_PRC_12 Step 8 re-triggers CB_PRC_13; CB_PRC_07 Step 1 lists infrastructure changes as event-driven trigger |
| New or changed regulatory requirements | External (legal/compliance monitoring) | Phase 4 | Explicitly listed in CB_PRC_07 event-driven triggers |
| Changes to ISMS scope | CISO / management decision | Phase 4 | Explicitly listed in CB_PRC_07 event-driven triggers |
| Design phase of new project or significant project change | Project management (A.5.8) | Phase 4 | Explicitly listed in CB_PRC_07 event-driven triggers |
| Planned contract with supplier processing ISMS-relevant information | Supplier onboarding (A.5.19) | Phase 4 | Explicitly listed in CB_PRC_07 event-driven triggers |
| KPI Red — persistent underperformance | CB_PRC_11-Performance-Monitoring | Phase 9 → escalation to management review | CB_PRC_11 escalation path: persistent Red → mandatory management review agenda item |
| Policy/control deviation identified | Employee, audit, or project | Phase 7 (Exception Management, CB_PRC_14) | CB_PRC_14 trigger: employee or audit finding reveals deviation; creates EXC-ID in HB_REG_EXC_01 and risk entry in HB_REG_05 |

---

## Handoff Matrix

| From | To | Handoff Mechanism | Data Object | Explicit in Source? |
|---|---|---|---|---|
| CB_PRC_12 Step 7 | CB_PRC_13 Step 1 | IS-Coordinator triggers protection requirements assessment for the new or changed asset | HB_REG_03 (registered asset) | Yes — CB_PRC_12 Step 7 states this verbatim |
| CB_PRC_12 Step 8 (material change) | CB_PRC_13 Step 1 | Material changes re-trigger CB_PRC_13 | HB_REG_03 (changed asset) | Yes — CB_PRC_12 Step 8 states this explicitly |
| CB_POL_L3_08 BIA | CB_PRC_13 Step 2 | HB_REG_04 BIA tiers consumed when assessing process assets | HB_REG_04 (BIA tier per process) | Partial — CB_PRC_13 Step 2 references HB_REG_04; CB_POL_L3_08 does not explicitly trigger CB_PRC_13 |
| CB_PRC_13 Step 9 | CB_PRC_07 Step 1 | IS-Coordinator communicates list of flagged assets and prepared RA files to CISO | RA-<Asset-ID>.md files; list of flagged assets | Yes — CB_PRC_13 Step 9 states "communicates the list of flagged assets and their prepared RA files to the CISO for inclusion in the next risk assessment cycle" |
| CB_PRC_07 Step 2 | CB_PRC_07 Step 3 | Internal step sequence; vulnerability statuses directly feed scenario generation | Vulnerability status per asset (present/unknown) | Yes — internal workflow within CB_PRC_07 |
| CB_PRC_07 Step 3 | CB_PRC_07 Step 4 | Internal step sequence; SC-IDs feed risk analysis | SC-<Asset-ID>-#### scenario records | Yes — internal workflow within CB_PRC_07 |
| CB_PRC_07 Step 5 | CB_PRC_07 Treatment | Internal step sequence; prioritized risk list feeds treatment selection | Prioritized net risk scores in HB_REG_05 | Yes — internal workflow within CB_PRC_07 |
| CB_PRC_07 Treatment | CEO/CTO approval | CISO submits risk treatment plan to top management | HB_REG_06 (Risk Treatment Plan) | Yes — CB_PRC_07 states "submitted to top management for approval" |
| CB_PRC_07 Approval | CB_PRC_11 monitoring | Accepted risks tracked in HB_REG_05; KPI-05 monitors treatment progress | HB_REG_05 (acceptance records), HB_REG_06 (treatment status) | Partial — CB_PRC_11 references HB_REG_08/05 as data sources; no explicit handoff trigger documented |
| CB_PRC_11 | CB_PRC_09 | Performance report compiled as management review input before each review | Performance report, KPI results | Yes — CB_PRC_11 states "management review input: before each management review (CB_PRC_09)" |
| CB_PRC_09 (management review output) | CB_PRC_07 / CB_PRC_12 | Management decisions on ISMS governance trigger action items in HB_REG_09; can initiate new risk assessment or asset review | HB_REG_09 (IS Objectives), HB_MGT_01 (improvement roadmap) | Partial — CB_PRC_09 references action tracking; explicit loop back to Phase 1/4 not documented in CB_PRC_09 itself |
| CB_PRC_01 (incident ≥ High) | CB_PRC_07 Step 1 | CISO uses incident as event-driven trigger to expand risk assessment scope | Incident severity classification | Yes — CB_PRC_07 Step 1 explicitly lists "severe security incidents (classification >= High in CB_PRC_01)" |
| CB_PRC_04 (vulnerability advisory) | CB_PRC_07 Step 1 | Vulnerability advisory triggers ad-hoc risk assessment | Vulnerability advisory | Yes — CB_PRC_07 Step 1 explicitly lists "vulnerability advisories (CB_PRC_04)" |
| CB_PRC_08 (audit finding) | CB_PRC_07 Step 1 | Audit finding triggers risk assessment (and nonconformity in HB_REG_12) | Audit finding | Yes — CB_PRC_07 Step 1 explicitly lists "findings from internal or external audits requiring action" |
| CB_PRC_14 (approved exception) | HB_REG_05 | CISO creates risk entry in risk register for approved exception | EXC-ID → risk type "Exception" in HB_REG_05 | Yes — CB_PRC_14 Step 4 states this explicitly |

---

## Cycle Timing

| Cycle | Frequency | Trigger Document | Key Output |
|---|---|---|---|
| Full risk assessment (Phases 1-8) | Annually — timed before management review | CB_PRC_07 | HB_REG_05, HB_REG_06, HB_REG_08 updated |
| Risk Committee review | Quarterly | CB_PRC_07 | Assessment of risk landscape; treatment priorities adjusted |
| Protection requirements review | Annually (aligned with risk cycle); event-driven on change | CB_PRC_13 | HB_REG_03 C/I/A columns, PR records |
| Business Impact Analysis | Annually; after significant IT/org change; after BCM event | CB_POL_L3_08 | HB_REG_04 updated |
| Management review | Annually (at minimum) | CB_PRC_09 | HB_REG_09 (IS Objectives), HB_MGT_02 (meeting log) |
| KPI operational summary | Monthly | CB_PRC_11 | Performance report → CISO, ISC |
| KPI quarterly report | Quarterly | CB_PRC_11 | Performance report → CISO, ISC, CTO |
| Internal audit cycle | All ISMS aspects within 2-year cycle | CB_PRC_08 | HB_REG_12 (nonconformities), audit reports |
| Exception review (per exception) | Before exception expiry date | CB_PRC_14 | Renewed / Expired status in HB_REG_EXC_01 |

---

## Role Assignments

Roles derived from process documents and CB_POL_L2_11. RACI notation: R = Responsible, A = Accountable, C = Consulted, I = Informed. Where the source documents do not explicitly state a RACI, the role assignment is marked with an asterisk (*) as inferred.

| Phase | CISO | ISC | Asset Owner | Risk Owner | CEO/CTO |
|---|---|---|---|---|---|
| 1 — Asset Registration | A (approves Step 6) | R (coordinates, triggers CB_PRC_13) | A/I (designated in register, provides info) | — | — |
| 2 — BIA | R/A (BCM responsible) | I | R (process owner validates) | — | I* |
| 3 — Protection Requirements | A (cross-asset consistency, approval) | R (scope, documentation, RA files) | R (primary assessment Step 2, approval Step 8) | — | — |
| 4 — Vulnerability Assessment (Scope determination) | R/A (identifies scope, assesses vulnerabilities) | R (operational execution) | I | — | — |
| 5 — Scenario Generation | R/A | R (support) | — | C | — |
| 6 — Risk Analysis | R (leads assessment, determines impact) | C | — | R (joint L/I assessment) | I (receives prioritized list) |
| 7 — Risk Treatment | R (control identification, Annex A, SoA, exception risk assessment) | C | — | A (treatment option selection) | A (exception approval for High impact) |
| 8 — Approval & Acceptance | A (submits plan) | — | — | R (written residual risk acceptance) | A (approves treatment plan) |
| 9 — Monitoring (CB_PRC_11) | R/A (analysis, reporting, escalation) | R (data collection) | — | I | A/I (receives reports, management review decisions) |
| 9 — Management Review (CB_PRC_09) | R (preparation, inputs) | C | — | C* | A (decisions) |
