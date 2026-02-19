# INDEX

> Structural data of the [Organization] ISMS. 128 Markdown files, 93 Annex A controls.
> For working instructions see CLAUDE.md.
> ID schema: folder abbreviations (see table below) + filename. Separator: `_` between levels, `-` within names.

## Files and Headings

### HB -- ISMS-Handbook / Definitions

**C04_Context/** -- Organizational context
`4.1-Organization-and-Context.md`, `4.2-Interested-Parties.md`, `4.3-Scope.md`, `4.4-ISMS.md`

**C05_Leadership/** -- Leadership
`5.1-Leadership-and-Commitment.md`, `5.2-Policy.md`, `5.3-Roles-and-Responsibilities.md`

**C06_Planning/** -- Planning
`6.1-Risks-and-Opportunities.md` (incl. 6.1.2, 6.1.3, SoA), `6.2-IS-Objectives.md`, `6.3-Planning-of-Changes.md`

**C07_Support/** -- Support
`7.1-Resources.md`, `7.2-Competence.md`, `7.3-Awareness.md`, `7.4-Communication.md`, `7.5-Documented-Information.md`

**C08_Operation/** -- Operation
`8.1-Operational-Planning.md`, `8.2-Risk-Assessment.md`, `8.3-Risk-Treatment.md`

**C09_Performance/** -- Performance evaluation
`9.1-Monitoring-and-Measurement.md`, `9.2-Internal-Audit.md`, `9.3-Management-Review.md`

**C10_Improvement/** -- Improvement
`10.1-Continual-Improvement.md`, `10.2-Nonconformity.md`

### HB -- ISMS-Handbook / Registers

**01-Context-Register.md** -- Organizational profile, external/internal issues
**02-Interested-Parties-Register.md** -- Stakeholders + IS requirements
**03-Asset-Register.md** -- 8 asset inventories, 6 cross-reference tables, data model
**04-BCM-Register.md** -- BCM continuity plan tracking
**05-Risk-Register.md** -- 4x4 matrix, scenario-based risk entries, acceptance
**06-Risk-Treatment-Plan.md** -- Controls per risk, owners, deadlines, gap tracking
**07-Security-Measures-Register.md** -- Security measures per risk, linked to controls and assets
**08-Statement-of-Applicability.md** -- 93 controls, SSOT for applicability
**09-IS-Objectives-Register.md** -- IS objectives with KPIs and monitoring results
**10-Supplier-Register.md** -- Supplier + cloud services tables
**11-Competence-Records.md** -- SOLL/IST competence matrix per ISMS role (20 dimensions)
**12-Nonconformity-Register.md** -- NC tracking with effectiveness review

**Exception-Register/01-Exception-Index.md** -- Approved policy exceptions with expiry and review tracking

**Risk-Framework/Threats/** -- Threat catalogues per asset class
`1-Processes.md`, `2-Information.md`, `3-Applications.md`, `4-IT-Systems-Physical.md`, `5-IT-Systems-Virtual.md`, `6-Communication-Links.md`, `7-Rooms.md`, `8-Buildings.md`

**Risk-Framework/Vulnerabilities/** -- Vulnerability catalogues per asset class
`1-Processes.md`, `2-Information.md`, `3-Applications.md`, `4-IT-Systems-Physical.md`, `5-IT-Systems-Virtual.md`, `6-Communication-Links.md`, `7-Rooms.md`, `8-Buildings.md`

**Protection-Requirements/** -- Process protection requirement assessments (SSOT)

**Risk-Assessments/** -- Per-asset risk assessments (7 layer folders)
`1-Process/`

**Security-Measures/** -- Security measure evidence and implementation records

### HB -- ISMS-Handbook / Management

**01-Improvement-Roadmap.md** -- Strategic improvement plan (themes, priorities, timeline, status)
**02-Meeting-Log.md** -- Governance meeting log (MR, risk reviews, decisions, action references)
**03-Open-Items.md** -- CISO-client open items (questions, clarifications, blockers)

> Minutes: MR-YYYY-QN.md (management review), IS-YYYY-MM.md (steering). Evidence files, no formal ISMS IDs.


### HB -- ISMS-Handbook / Audit

**Internal/01-Internal-Audit-Programme.md** -- Living audit programme (multi-year schedule, scope rotation, evidence overview)

> Internal Records: IA-YYYY-MM-Scope.md (internal), EA-YYYY-MM-Type.md (external). Evidence files, no formal ISMS IDs.

**Supplier/01-Supplier-Review-Programme.md** -- Supplier review programme (multi-year schedule, review criteria)

> Supplier Records: SR-YYYY-Supplier.md. Evidence files, no formal ISMS IDs.

### CB -- Cyber-Security-Cookbook / Root

**Getting-Started.md** -- Introduction to the topic, structure and navigation of the Cookbook
H2: Why this Cookbook?, How is it structured?, What do you need to do?, Key contact points

**Emergency-Card.md** -- Immediate help for security incidents
H2: Security incident -- what to do?, Who to contact?, Common incidents, What NOT to do

**FAQ.md** -- Frequently asked questions about information security in daily work

### CB -- Cyber-Security-Cookbook / Policy-Framework / L1_Policy

**01-Policy.md** -- Management commitment, objectives, scope, principles, responsibilities, approval

### CB -- Cyber-Security-Cookbook / Policy-Framework / L2_Standards

**01-Access-and-Identity.md** -- Access control, identities, authentication, access rights lifecycle
**02-Information-Protection.md** -- Classification, transfer, cryptography, data protection lifecycle
**03-System-and-Network.md** -- Endpoints/systems, vulnerabilities, network, logging, capacity
**04-Secure-Development.md** -- SDLC, secure coding, testing, change management, projects/external
**05-Supplier-and-Cloud.md** -- Assessment, agreements, monitoring, cloud
**06-Business-Continuity.md** -- ICT readiness, backup/recovery
**07-Organisation.md** -- Assets, governance
**08-Document-Control.md** -- Creation, identification, approval, distribution, version control, retention
**09-Physical-Security.md** -- Entry controls, workplace, infrastructure, monitoring
**10-Human-Resources.md** -- Screening, employment terms, awareness, disciplinary, termination, remote, reporting
**11-Risk-Management.md** -- Risk criteria, risk matrix, protection requirement categories, treatment options, roles, acceptance criteria
**12-AI-Usage.md** -- AI governance, principles, roles, risk management, GenAI acceptable use (BEYOND-ISO)
**13-Incident-and-Threat.md** -- Incident requirements, threat intelligence, notification obligations
**14-Compliance-and-Operations.md** -- Legal/regulatory/contractual compliance, documented operating procedures

### CB -- Cyber-Security-Cookbook / Policy-Framework / L4_Cheat-Sheets

(empty — to be populated)

### CB -- Cyber-Security-Cookbook / Policy-Framework / L3_Handbooks-and-Concepts

**01-User-Handbook.md** -- Acceptable use, remote working, classification, clear desk, incident reporting
**02-Admin-Handbook.md** -- Access control, hardening, vulnerability management, logging, backup
**03-Developer-Handbook.md** -- Secure coding, security testing, SDLC, change/deployment
**04-Cryptography.md** -- Standards, authentication, key management
**05-Data-Backup.md** -- Backup strategy, recovery, deletion
**06-Network-Security.md** -- Architecture, segmentation, services
**07-Supplier-Management.md** -- Assessment, agreements, supply chain, monitoring, cloud
**08-Business-Continuity.md** -- BIA methodology, continuity plans, test/maintenance, recovery coordination

### CB -- Cyber-Security-Cookbook / Processes

**01-Incident-Management.md** -- Classification, reporting, escalation, response, lessons learned, evidence collection
**02-Access-Control.md** -- Provisioning, privileges, revocation, recertification
**03-Backup-and-Recovery.md** -- Strategy (types/cycles), recovery (RTO/RPO), tests
**04-Vulnerability-Management.md** -- Identification, evaluation, patching
**05-Change-Management.md** -- Request, impact, approval, implementation/rollback
**06-Supplier-Management.md** -- Assessment, agreements, monitoring
**07-Risk-Management.md** -- Risk assessment, risk treatment, SoA maintenance, cycles/triggers
**08-Internal-Audit.md** -- Audit programme, planning, execution, report, follow-up
**09-Management-Review.md** -- Scheduling, inputs (9.3.2), execution, outputs (9.3.3)
**10-Nonconformity-Management.md** -- Detection, analysis, corrective action, effectiveness review
**11-Performance-Monitoring.md** -- KPI definition, data collection, evaluation, escalation
**12-Asset-Management.md** -- Identification, ID assignment, registration, relationships, maintenance
**13-Protection-Requirements.md** -- Protection requirements assessment (primary, inheritance, documentation, handoff)
**14-Exception-Management.md** -- Exception request, approval, time-limited deviation tracking

### CB -- Cyber-Security-Cookbook / Awareness-Training

**01-Awareness-Fundamentals.md** -- Top risks, phishing, password hygiene, incident reporting
**02-Onboarding-Checklist.md** -- Onboarding table

### CB -- Cyber-Security-Cookbook / Templates

**01-Management-Review.md** -- Management review template (inputs 9.3.2, outputs 9.3.3, actions)
**02-Document-Metadata.md** -- Metadata block template (8 fields, field descriptions, rules)
**15-MDM-Enrolment.md** -- MDM enrolment template (device registration, compliance check)
**16-MDM-Policy-Template.md** -- MDM policy configuration template (security baselines, enforcement)
**17-Internal-Audit-Report.md** -- MD template for CISO-led internal audits
**18-Supplier-Review.md** -- Supplier review template (certification, SLA, assessment)
**19-Protection-Requirements-Assessment.md** -- Process protection requirements assessment (SSOT)
**20-Exception-Request.md** -- Exception request form (justification, risk, compensating controls, expiry)
**21-Risk-Assessment.md** -- Risk assessment worksheet per asset (threat/vulnerability pairing, risk scoring)

### REF -- References / Library / Standards

**Standards/ISO_2022_27001-Extract.md** ``[ISO22-27001]`` -- Lean extract ISO/IEC 27001:2022 (Clauses 0-10, Annex A, 93 controls)
**Standards/ISO_2022_27002-Extract.md** ``[ISO22-27002]`` -- Lean extract ISO/IEC 27002:2022 (93 controls, 8-column tables)
**Standards/ISACA_2022_Implementierungsleitfaden-Extract.md** ``[ISACA22]`` -- Lean extract ISACA implementation guide (14 building blocks, mapping, BCS)
**Standards/BSI_2017_200-2-Extract.md** ``[BSI17]`` -- Lean extract BSI Standard 200-2 IT-Grundschutz methodology (12 chapters, 3 approaches)

> PDFs (originals) with matching base name in folder. Bibliography with citation keys: `BIBLIOGRAPHY.md`.

### REF -- References / Library / Policy Templates

**Policy Templates/DataGuard_2025_ISMS-Handbuch-Extract.md** ``[DG25-HB]`` -- ISMS handbook template (structure, scope, context, risk approach)
**Policy Templates/DataGuard_2025_Leitlinie-IS-Extract.md** ``[DG25-LL]`` -- IS guideline template (objectives, principles, roles)
**Policy Templates/DataGuard_2025_Mitarbeiterhandbuch-IS-Extract.md** ``[DG25-MA]`` -- Employee IS handbook (security rules, usage, behaviour)
**Policy Templates/DataGuard_2025_Schulung-Compliance-Extract.md** ``[DG25-SC]`` -- Personnel security, training and compliance (HR security, awareness)
**Policy Templates/DataGuard_2024_Lieferanten-Lieferkette-Extract.md** ``[DG24-LK]`` -- Suppliers and supply chains (assessment, agreements, monitoring)
**Policy Templates/DataGuard_2024_Entwicklung-Testen-Extract.md** ``[DG24-ET]`` -- Projects, development and testing (secure SDLC, change, test)
**Policy Templates/DataGuard_2024_Awareness-Vorfaelle-Extract.md** ``[DG24-AV]`` -- Security awareness and incident management (awareness, incident)
**Policy Templates/DataGuard_2024_Identitaet-Zugriff-Extract.md** ``[DG24-IAM]`` -- Identity and access control (IAM, MFA, privileged access)
**Policy Templates/DataGuard_2024_Physische-Sicherheit-Extract.md** ``[DG24-PS]`` -- Physical security (entry controls, perimeter, environment)
**Policy Templates/DataGuard_2024_System-Netzwerk-Extract.md** ``[DG24-SN]`` -- System and network configuration (hardening, network, monitoring)
**Policy Templates/DataGuard_2024_Geschaeftskontinuitaet-Extract.md** ``[DG24-BK]`` -- Business continuity (BIA, BCP, DRP, crisis management)
**Policy Templates/DataGuard_oJ_GenKI-Nutzung-Extract.md** ``[DGoJ-KI1]`` -- Acceptable use of GenAI (AI policy, risk assessment, prohibitions)
**Policy Templates/DataGuard_oJ_KI-Richtlinien-Extract.md** ``[DGoJ-KI2]`` -- AI policies (governance, model lifecycle, ethics)
**Policy Templates/DataGuard_oJ_Datenschutzverletzungen-Extract.md** ``[DGoJ-DS]`` -- Data breaches (reporting obligations, documentation, controls)

> PDFs (originals) with matching base name in folder. Bibliography with citation keys: `BIBLIOGRAPHY.md`.

## Coverage Matrix (93 Controls)

> Derived from HB_REG_08-Statement-of-Applicability (SSOT). Document assignment only, no applicability/status. Short-form IDs without descriptive part.

### A.5 Organizational Controls (37)

| # | Doc | Secondary |
|---|---|---|
| 5.1 | CB_POL_L1_01 | HB_CLS_5.2 |
| 5.2 | HB_CLS_5.3 | CB_POL_L2_07 |
| 5.3 | CB_POL_L2_07 | |
| 5.4 | HB_CLS_5.1 | CB_POL_L2_07 |
| 5.5 | CB_POL_L2_07 | |
| 5.6 | CB_POL_L2_07 | |
| 5.7 | CB_POL_L2_03 | CB_POL_L2_13, CB_PRC_04 |
| 5.8 | CB_POL_L2_04 | |
| 5.9 | HB_REG_03 | CB_PRC_12, CB_POL_L2_07 |
| 5.10 | CB_POL_L2_07 | CB_POL_L3_01 |
| 5.11 | CB_POL_L2_07 | |
| 5.12 | CB_POL_L2_02 | CB_POL_L3_01 |
| 5.13 | CB_POL_L2_02 | CB_POL_L3_01 |
| 5.14 | CB_POL_L2_02 | |
| 5.15 | CB_POL_L2_01 | CB_POL_L3_02, CB_PRC_02 |
| 5.16 | CB_POL_L2_01 | CB_PRC_02 |
| 5.17 | CB_POL_L2_01 | CB_POL_L3_04 |
| 5.18 | CB_POL_L2_01 | CB_PRC_02 |
| 5.19 | CB_POL_L2_05 | CB_PRC_06 |
| 5.20 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.21 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.22 | CB_POL_L2_05 | CB_PRC_06 |
| 5.23 | CB_POL_L2_05 | CB_POL_L3_07 |
| 5.24 | CB_POL_L2_13 | CB_PRC_01, CB_Emergency-Card |
| 5.25 | CB_POL_L2_13 | CB_PRC_01 |
| 5.26 | CB_POL_L2_13 | CB_PRC_01 |
| 5.27 | CB_POL_L2_13 | CB_PRC_01 |
| 5.28 | CB_POL_L2_13 | CB_PRC_01 |
| 5.29 | CB_POL_L2_06 | CB_POL_L3_05, CB_POL_L3_08, HB_REG_04 |
| 5.30 | CB_POL_L2_06 | CB_POL_L3_05, CB_POL_L3_08, HB_REG_04 |
| 5.31 | CB_POL_L2_14 | |
| 5.32 | CB_POL_L2_14 | |
| 5.33 | CB_POL_L2_14 | |
| 5.34 | CB_POL_L2_14 | |
| 5.35 | HB_CLS_9.2 | CB_POL_L2_14 |
| 5.36 | CB_POL_L2_14 | HB_CLS_9.1 |
| 5.37 | CB_POL_L2_14 | CB_POL_L2_08 |

### A.6 People Controls (8)

| # | Doc | Secondary |
|---|---|---|
| 6.1 | CB_POL_L2_10 | |
| 6.2 | CB_POL_L2_10 | CB_AWR_02 |
| 6.3 | CB_POL_L2_10 | CB_AWR_01 |
| 6.4 | CB_POL_L2_10 | |
| 6.5 | CB_POL_L2_10 | CB_POL_L2_01 |
| 6.6 | CB_POL_L2_10 | CB_AWR_02 |
| 6.7 | CB_POL_L2_10 | CB_POL_L3_01 |
| 6.8 | CB_POL_L2_10 | CB_POL_L3_01, CB_PRC_01, CB_Emergency-Card |

### A.7 Physical Controls (14)

| # | Doc | Secondary |
|---|---|---|
| 7.1 | CB_POL_L2_09 | |
| 7.2 | CB_POL_L2_09 | |
| 7.3 | CB_POL_L2_09 | |
| 7.4 | CB_POL_L2_09 | |
| 7.5 | CB_POL_L2_09 | |
| 7.6 | CB_POL_L2_09 | |
| 7.7 | CB_POL_L2_09 | CB_POL_L3_01 |
| 7.8 | CB_POL_L2_09 | |
| 7.9 | CB_POL_L2_09 | |
| 7.10 | CB_POL_L2_09 | |
| 7.11 | CB_POL_L2_09 | |
| 7.12 | CB_POL_L2_09 | |
| 7.13 | CB_POL_L2_09 | |
| 7.14 | CB_POL_L2_09 | |

### A.8 Technological Controls (34)

| # | Doc | Secondary |
|---|---|---|
| 8.1 | CB_POL_L2_03 | |
| 8.2 | CB_POL_L2_01 | CB_POL_L3_02 |
| 8.3 | CB_POL_L2_01 | |
| 8.4 | CB_POL_L2_04 | |
| 8.5 | CB_POL_L2_01 | CB_POL_L3_04 |
| 8.6 | CB_POL_L2_03 | |
| 8.7 | CB_POL_L2_03 | |
| 8.8 | CB_POL_L2_03 | CB_POL_L3_02, CB_PRC_04 |
| 8.9 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.10 | CB_POL_L2_02 | CB_POL_L3_05 |
| 8.11 | CB_POL_L2_02 | |
| 8.12 | CB_POL_L2_02 | CB_POL_L2_03 |
| 8.13 | CB_POL_L2_06 | CB_POL_L3_02, CB_PRC_03 |
| 8.14 | CB_POL_L2_06 | CB_PRC_03 |
| 8.15 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.16 | CB_POL_L2_03 | CB_POL_L3_02 |
| 8.17 | CB_POL_L2_03 | |
| 8.18 | CB_POL_L2_03 | |
| 8.19 | CB_POL_L2_03 | |
| 8.20 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.21 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.22 | CB_POL_L2_03 | CB_POL_L3_06 |
| 8.23 | CB_POL_L2_03 | |
| 8.24 | CB_POL_L2_02 | CB_POL_L3_04 |
| 8.25 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.26 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.27 | CB_POL_L2_04 | |
| 8.28 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.29 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.30 | CB_POL_L2_04 | CB_POL_L2_05 |
| 8.31 | CB_POL_L2_04 | CB_POL_L3_03 |
| 8.32 | CB_POL_L2_04 | CB_POL_L3_03, CB_PRC_05 |
| 8.33 | CB_POL_L2_04 | |
| 8.34 | CB_POL_L2_04 | HB_CLS_9.2 |

## Abbreviations

| Abbr | Meaning | Path |
|---|---|---|
| CB | Cookbook | Cyber-Security-Cookbook/ |
| HB | Handbook | ISMS-Handbook/ |
| POL | Policy framework | Policy-Framework/ |
| L1 | Level 1 (Policy) | L1_Policy/ |
| L2 | Level 2 (Standards) | L2_Standards/ |
| L3 | Level 3 (Handbooks and Concepts) | L3_Handbooks-and-Concepts/ |
| L4 | Level 4 (Cheat Sheets) | L4_Cheat-Sheets/ |
| AUD | Audit | Audit/ |
| AUD_INT | Internal audit | Audit/Internal/ |
| AUD_SUP | Supplier review | Audit/Supplier/ |
| AWR | Awareness | Awareness-Training/ |
| TPL | Template | Templates/ |
| REF | References | References/ |
| LIB | Library (norm extracts) | Library/ |
| CLS | Clause (definitions) | Definitions/ |
| C04..C10 | Clause sorting | C04_Context/ .. C10_Improvement/ |
| MGT | Management | Management/ |
| REG | Register | Registers/ |
| REG_EXC | Exception register | Registers/Exception-Register/ |
| REG_RF | Risk framework | Registers/Risk-Framework/ |
| SM | Security Measures | Registers/Security-Measures/ |
| PRC | Process | Processes/ |
| HB_CLS_C05 | (folder) | Definitions/C05_Leadership/ (3 files) |
| HB_CLS_C09 | (folder) | Definitions/C09_Performance/ (3 files) |
