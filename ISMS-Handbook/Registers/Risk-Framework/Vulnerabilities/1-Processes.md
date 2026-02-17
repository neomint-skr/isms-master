# Processes — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **processes** asset class, grouped by control domain.
> Vulnerability IDs: PRC-V01–PRC-V50. Domain and aspect tags enable cross-referencing with the threat catalogue.

## PRC-01 Scope and Ownership

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V01 | Process not clearly delineated (start/end, inputs/outputs, interfaces unclear) | ORG | I, V, COMPL |
| PRC-V02 | No designated process owner with decision-making, budget and change authority | ORG | I, V, COMPL |
| PRC-V03 | Criticality/protection requirements of the process not traceably derived (including dependencies) | ORG | V, COMPL |
| PRC-V04 | Process dependencies (up-/downstream) not documented | ORG | V |
| PRC-V05 | Process controls not explicitly defined (which checkpoints exist, what do they verify) | ORG | I, AUD, COMPL |

## PRC-02 Process Design and Documentation

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V06 | Process not documented or documentation is outdated/inconsistent | ORG | I, V, COMPL |
| PRC-V07 | No binding work instructions/checklists for critical process steps | ORG | I, V |
| PRC-V08 | No clear definition of quality criteria for process outputs (target/actual, acceptance criteria) | ORG | I |
| PRC-V09 | No defined error handling/escalation logic (when to stop, whom to inform, how to proceed) | ORG | V, I |
| PRC-V10 | Process contains uncontrolled manual steps (media breaks) without compensating controls | ORG | I, AUD, PRIV |

## PRC-03 Roles, Access and Segregation

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V11 | Role model missing or unclear (who is authorised to do what within the process) | ORG | I, COMPL |
| PRC-V12 | No segregation of duties (SoD) for critical steps (creation/review/approval possible by one person) | ORG | I, AUD, COMPL |
| PRC-V13 | No four-eyes/dual-control requirement for high-risk transactions/changes | ORG | I, AUD |
| PRC-V14 | No access/role recertification (too many or incorrect authorisations in the process context) | ORG | C, I, PRIV, COMPL |
| PRC-V15 | Emergency/deputy roles not defined (who may take over in exceptional cases) | ORG | V, AUD |

## PRC-04 Input Validation and Provenance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V16 | No requirements for validation/plausibility checks on inputs (manual/external/internal) | ORG | I, PROV |
| PRC-V17 | Origin/source of inputs not documented (no provenance within the process) | ORG | PROV, I, AUD |
| PRC-V18 | No rules for handling unverified information (unreviewed and verified content mixed) | ORG | PROV, I |
| PRC-V19 | No formalised supplier/source qualification for process-critical inputs (data, documents, evidence) | SUP, ORG | PROV, I |
| PRC-V20 | No checkpoints against deliberate manipulation of inputs/outputs (e.g. reconciliation, sampling) | ORG | I, AUD |

## PRC-05 Integrity of Process Execution

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V21 | Process steps not protected against unauthorised shortcuts/bypasses (workarounds possible) | ORG | I, AUD |
| PRC-V22 | No defined approval logic for process changes (changes happen without formal review) | ORG | I, V, COMPL |
| PRC-V23 | No regular effectiveness testing of process controls (controls exist but are never tested) | ORG | I, AUD, COMPL |
| PRC-V24 | No measures against silent failure (errors remain undetected due to missing checkpoints/feedback loops) | ORG | I, V |
| PRC-V25 | Critical process decisions rely on individual knowledge (not reproducible/standardised) | HUMAN, ORG | I, V |

## PRC-06 Supplier and Service Dependency

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V26 | Critical service providers/services not identified or not classified as critical | SUP, ORG | V |
| PRC-V27 | No defined SLA/OLA requirements from a process perspective (availability, response times, escalation) | SUP, ORG | V |
| PRC-V28 | No exit/transition concept for critical service providers (lock-in, no alternatives) | SUP | V |
| PRC-V29 | No monitoring/review of service provider performance (monitoring, service reviews, KPI) | SUP, ORG | V |
| PRC-V30 | No contingency agreements/BCM alignment with service providers (BCP, communication channels) | SUP, ORG | V |

## PRC-07 Resource and Capacity

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V31 | No capacity/resource planning (peak loads, deputisation, skill coverage) | ORG | V |
| PRC-V32 | Key-person dependency (single point of knowledge) without documented handover | HUMAN, ORG | V |
| PRC-V33 | No defined minimum staffing/service hours for critical process activities | ORG | V |
| PRC-V34 | No defined prioritisation under resource scarcity (triage rules missing) | ORG | V |
| PRC-V35 | Missing training/qualification records for process-critical roles | HUMAN | I, V, COMPL |

## PRC-08 Monitoring, Auditability and Non-Repudiation

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V36 | No traceable documentation/evidence for critical process decisions (decision basis missing) | ORG | AUD, COMPL |
| PRC-V37 | No requirements for logging/audit trail of process-critical activities (who did what when) | ORG | AUD |
| PRC-V38 | Evidence is not tamper-protected or not stored in an audit-proof manner | ORG | AUD, I |
| PRC-V39 | No defined retention for process evidence (too short/too long/unclear — compliance risk) | ORG | COMPL, AUD |
| PRC-V40 | No regular review/control loop (e.g. internal controls, sampling, audit plan) | ORG | AUD, COMPL |

## PRC-09 Privacy and Compliance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V41 | Privacy requirements not translated into process steps (purpose limitation, data minimisation, access) | ORG | PRIV, COMPL |
| PRC-V42 | No rules for disclosure of personal data to third parties (approval, contract, minimisation) | ORG, SUP | PRIV, COMPL |
| PRC-V43 | Data subject rights (access/erasure etc.) not operationally implemented in the process (or not testable) | ORG | PRIV, COMPL |
| PRC-V44 | No defined handling of regulatory/legal changes (compliance change management missing) | ORG | COMPL |
| PRC-V45 | Unclear responsibility for compliance approvals (who grants legally binding approval) | ORG | COMPL, AUD |

## PRC-10 Social Engineering, Coercion and Insider Risk

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PRC-V46 | No verification rules for extraordinary requests (e.g. callback rule, four-eyes for "urgent" requests) | HUMAN, ORG | C, I, PRIV |
| PRC-V47 | No anti-fraud/anti-manipulation controls for value-/data-critical steps (e.g. independent second confirmation) | ORG | I, AUD |
| PRC-V48 | No secure escalation channels for suspected coercion/corruption (whistleblowing/protection mechanisms) | ORG, HUMAN | I, AUD, COMPL |
| PRC-V49 | No defined controls against insider sabotage (e.g. additional approvals for high-risk changes) | ORG | I, V, AUD |
| PRC-V50 | No awareness/training elements specific to the process context (typical social engineering patterns within the process) | HUMAN | C, I, PRIV |
