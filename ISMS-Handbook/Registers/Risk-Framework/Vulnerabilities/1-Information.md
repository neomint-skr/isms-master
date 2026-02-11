# Information — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **information** asset class, grouped by control domain.
> Vulnerability IDs: INF-V01–INF-V43. Domain and aspect tags enable cross-referencing with the threat catalogue.

## INF-01 Inventory and Governance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V01 | No up-to-date inventory/register of the information estate (unclear where the information resides) | ORG | C, I, V, PRIV |
| INF-V02 | Information object not clearly delineated (scope/object boundaries unclear) | ORG | C, I, V, PRIV |
| INF-V03 | No designated owner/steward with decision-making and approval authority | ORG | C, I, V, PRIV |
| INF-V04 | Protection requirements/classification not defined or not traceably derived | ORG | C, I, V, PRIV |
| INF-V05 | Dependencies not documented (which processes/applications/systems create/modify/consume the information) | ORG | I, V |
| INF-V41 | No consistent labelling of information according to classification (e.g. metadata/markings missing) | ORG | C, PRIV |

## INF-02 Confidentiality and Disclosure Control

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V06 | No binding handling rules per classification level (sharing/storing/printing) | ORG | C, PRIV |
| INF-V07 | Need-to-know/access principle not defined (who may read/write in principle) | ORG | C, PRIV |
| INF-V08 | Rules for external disclosure missing (approval path, recipient scope, conditions) | ORG | C, PRIV |
| INF-V09 | Rules for link-sharing/public access missing (public links, expiry dates, protection mechanisms) | ORG | C, PRIV |
| INF-V10 | No defined review/recertification cycle for access and disclosure rules | ORG | C, PRIV |
| INF-V42 | No requirements for controlled exports/downloads/offline copies (e.g. who may export, where, under which conditions) | ORG | C, PRIV |

## INF-03 Storage, Copies and Third Parties

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V11 | Permitted storage locations/system of record not defined | ORG | I, V |
| INF-V12 | Uncontrolled copies/distribution (information spreads to multiple repositories without central governance) | ORG | C, I, V, PRIV |
| INF-V13 | No Single Source of Truth principle (multiple competing truths/versions in circulation) | ORG | I |
| INF-V14 | Requirements for protection at rest not defined (e.g. protection level dependent on classification) | ORG | C, PRIV |
| INF-V15 | Requirements for storage/processing at third parties not defined (cloud/service providers, minimum requirements) | SUP, ORG | C, V, PRIV |

## INF-04 Integrity and Change Control

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V16 | No defined status for "draft vs. approved version" (authoritative version unclear) | ORG | I |
| INF-V17 | No requirements for change control (who may modify, when approval/four-eyes principle applies) | ORG | I, AUD |
| INF-V18 | No requirements for integrity evidence on critical information (e.g. hash/signature/checks) | CYBER, ORG | I, AUD |
| INF-V19 | No requirements for separation of duties in creation/review/approval (SoD) | ORG | I, AUD |
| INF-V20 | No requirements for validation/plausibility checks on import/transfer (schema/rule/quality checks) | ORG | I, PROV |

## INF-05 Availability and Recoverability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V21 | Backup/recovery requirements not defined (RPO/RTO or recovery objective) | ORG | V |
| INF-V22 | No evidence of regular recovery tests (restore tests missing/not required) | ORG | V |
| INF-V23 | No protection concept against accidental deletion/overwriting (retention lock/soft-delete requirement missing) | ORG | V, I |
| INF-V24 | No requirements for immutable copies of critical information (ransomware resilience) | ORG | V, I |
| INF-V25 | Dependency on a single access path (no alternative access scenario defined) | ORG | V |

## INF-06 Provenance and Trust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V26 | Origin/source not documented (no provenance metadata: supplier, timestamp, origin) | ORG, SUP | PROV, I |
| INF-V27 | No requirements for verification of external sources (authenticity/reliability unverified) | ORG, SUP | PROV, I |
| INF-V28 | No defined status for "unverified/validated" (mixing of unreviewed and verified content possible) | ORG | PROV, I |
| INF-V29 | No requirements for approval/qualification of external data inflows (third-party systems, interfaces, manual imports) | ORG, SUP | PROV, I |
| INF-V30 | No requirements for data lineage (transformations/processing steps not traceable) | ORG | PROV, I, AUD |

## INF-07 Auditability and Accountability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V31 | No requirements for logging access/changes (audit trail) for this information | ORG | AUD |
| INF-V32 | No requirements for tamper protection of evidence (tamper-evident logs/secure storage) | ORG | AUD |
| INF-V33 | No requirements for unambiguous attribution (unique identity/signature for critical actions missing) | ORG | AUD |
| INF-V34 | Requirements for retention of evidence/logs not defined (audit data retention) | ORG | AUD |
| INF-V35 | No requirements for forensically sound archiving of authoritative versions (e.g. WORM/eDiscovery for approved releases) | ORG | AUD, I |

## INF-08 Privacy and Lifecycle

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| INF-V36 | Purpose/legal basis for personal data not documented (purpose limitation unclear) | ORG | PRIV |
| INF-V37 | No requirements for data minimisation (scope too broad/too many attributes) | ORG | PRIV |
| INF-V38 | Requirements for deletion/erasure (including data subject rights) missing or not operationally specified | ORG | PRIV |
| INF-V39 | Retention periods/retention schedule missing or not linked to classification | ORG | PRIV, V |
| INF-V40 | Requirements for secure deletion/disposal missing (including backups/archives) | ORG | PRIV, C |
| INF-V43 | No requirements for pseudonymisation/anonymisation for non-productive use (e.g. test/analytics) of personal data | ORG | PRIV, C |
