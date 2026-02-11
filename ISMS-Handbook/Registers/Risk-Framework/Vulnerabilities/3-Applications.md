# Applications — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **applications** asset class, grouped by control domain.
> Vulnerability IDs: APP-V01–APP-V65. Domain and aspect tags enable cross-referencing with the threat catalogue.

## APP-01 Ownership, Governance and Compliance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V01 | No designated application owner (business/technical) with accountability for security decisions | ORG | C, I, V, PRIV, COMPL |
| APP-V02 | Security and privacy requirements from protection needs/BIA not translated into binding application requirements | ORG | C, I, V, PRIV, COMPL |
| APP-V03 | No defined change/release governance model (approvals, roles, traceability) for production changes | ORG | I, AUD, COMPL |
| APP-V04 | No periodic recertification of critical functions/exposures (admin functions, interfaces, data flows) | ORG | C, I, PRIV, COMPL |
| APP-V05 | No clear data processing documentation (purpose, categories, recipients, storage locations) for the application | ORG | PRIV, COMPL |
| APP-V06 | No defined minimum requirements for operational and security evidence (e.g. audit logs, retention, evidence artefacts) | ORG | AUD, COMPL |

## APP-02 Security by Design and Architecture

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V07 | No threat modelling / no documented trust boundaries for the application | ORG | C, I, V, AUTH, PRIV |
| APP-V08 | No clear delineation of security zones/components (missing isolation of critical parts) | ORG | C, I, V |
| APP-V09 | Tenant/data isolation in multi-tenancy not demonstrable (cross-tenant access possible) | CYBER, ORG | C, PRIV, I |
| APP-V10 | Error/exception handling designed such that internal information is disclosed (debug info/stack traces) | CYBER | C |
| APP-V11 | Security-critical business rules not implemented as controls (bypass/workaround possible) | ORG, CYBER | I, AUD |
| APP-V12 | No defined secure-defaults strategy (default state is too permissive) | CYBER, ORG | C, I, V |

## APP-03 Identity, Authentication and Session

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V13 | No multi-factor authentication for privileged accounts or critical functions | CYBER | C, I, V, AUD |
| APP-V14 | Weak authentication policies (passwords/keys, brute-force protection, lockout/rate limits missing) | CYBER | C, I, V |
| APP-V15 | Insecure account recovery processes (reset/recovery susceptible to takeover) | CYBER, HUMAN | C, I, AUD |
| APP-V16 | Insufficient session/token management (long lifetimes, no rotation/revocation, insecure storage) | CYBER | C, I, AUD |
| APP-V17 | Missing or faulty validation of external identity provider/SSO flows (e.g. OAuth/OIDC misconfiguration) | CYBER | C, I, AUD |
| APP-V18 | Shared/shareable user accounts or missing unique user identities within the application | ORG | AUD |

## APP-04 Authorization, Privilege and Administration

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V19 | Authorization checks not implemented centrally/consistently (inconsistent checks per endpoint/use case) | CYBER | C, I, PRIV |
| APP-V20 | IDOR/object-level access controls missing (access to other users' data via IDs/parameters possible) | CYBER | C, PRIV, I |
| APP-V21 | Role/permission model too coarse or undocumented (least privilege not enforceable) | ORG, CYBER | C, I, PRIV |
| APP-V22 | Privileged functions insufficiently shielded (admin UI/API exposed or poorly secured) | CYBER | C, I, V, AUD |
| APP-V23 | Service/technical accounts hold excessive permissions (overly broad data/system rights) | CYBER | C, I, V |
| APP-V24 | No effective separation of duties (SoD) for critical changes/transactions within the application | ORG | I, AUD, COMPL |

## APP-05 Data Protection and Privacy

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V25 | Classification-dependent data handling missing (sensitive data treated the same as non-sensitive data) | ORG | C, PRIV, COMPL |
| APP-V26 | Insufficient protection of data at rest (no/too weak encryption, incorrect modes, missing separation) | CYBER | C, PRIV |
| APP-V27 | Insufficient key management (keys in code/config, no rotation, no access separation) | CYBER, ORG | C, I, PRIV |
| APP-V28 | Insufficient secrets management (credentials/API keys in repos, logs or environment variables without protection) | CYBER | C |
| APP-V29 | Processing of personal data not minimised (too many attributes, overly broad visibility in UI/API) | ORG | PRIV, COMPL |
| APP-V30 | Retention/deletion/DSAR not implemented or not demonstrable (data retained indefinitely) | ORG | PRIV, COMPL, V |
| APP-V31 | Sensitive data written to logs/telemetry/error messages (PII/secrets) | CYBER | C, PRIV |

## APP-06 Input Validation, Injection and File Handling

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V32 | Input validation missing or inconsistent (schema/type/allowlist validation absent) | CYBER | I |
| APP-V33 | Insufficient injection protection (SQL/NoSQL/LDAP/command/template injection possible) | CYBER | C, I, V |
| APP-V34 | Insufficient XSS/content injection protection (output encoding/Content-Security-Policy missing) | CYBER | C, I |
| APP-V35 | SSRF protection missing (server can reach internal targets because egress/allowlisting absent) | CYBER | C, I, V |
| APP-V36 | Insecure deserialisation/parser usage (RCE/state manipulation possible) | CYBER | C, I, V |
| APP-V37 | File/upload functions insecure (no type checking, no AV scan, no quarantine process) | CYBER | C, I, V |
| APP-V38 | Path/file access not secured (path traversal, uncontrolled downloads/reads) | CYBER | C, PRIV |

## APP-07 Transport, API and Message Trust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V39 | TLS not consistently enforced (HTTP possible, missing redirects/HSTS) | COMM, CYBER | C |
| APP-V40 | Weak TLS configuration (insecure protocols/ciphers, missing certificate validation/pinning where required) | COMM | C, AUTH |
| APP-V41 | Service-to-service authentication missing (e.g. no mTLS/token binding between services) | COMM, CYBER | AUTH, C |
| APP-V42 | Message/payload authenticity/integrity not secured (no signatures/MAC, no origin check) | COMM, CYBER | AUTH, I, C |
| APP-V43 | Replay protection missing (no nonces/timestamps/idempotency keys on critical calls) | COMM | AUTH, I |
| APP-V44 | Webhooks/callbacks accept requests without reliable origin verification (shared secrets/signatures missing) | COMM | AUTH, PROV, I |
| APP-V45 | API gateway/edge policies missing (e.g. AuthZ at the edge, schema validation, throttling at API level) | COMM, CYBER | C, I, V |

## APP-08 Supply Chain and Deployment Integrity

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V46 | Components/dependencies outdated or without vulnerability management (no regular assessment/updates) | SUP, CYBER | C, I, V |
| APP-V47 | No component/dependency inventory (SBOM/dependency inventory missing) | SUP, ORG | PROV, COMPL |
| APP-V48 | Provenance/integrity of dependencies not secured (untrusted registries, no signatures/checksums) | SUP | PROV, I |
| APP-V49 | CI/CD pipeline not secured against tampering (secrets, build runners, permissions, artefact access) | SUP, CYBER | I, PROV |
| APP-V50 | Deployment artefacts not signed or integrity checks between build and deploy missing | SUP | I, PROV |
| APP-V51 | Direct changes in production possible (no controlled deployment process, no four-eyes principle) | ORG | I, AUD |
| APP-V52 | Configuration/feature flag changes not controlled or not traceable | ORG | I, AUD |

## APP-09 Logging, Monitoring and Auditability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V53 | Security-relevant events not sufficiently logged (AuthN/AuthZ, admin actions, data exports) | ORG, CYBER | AUD |
| APP-V54 | Logs not tamper-protected/centralised (tamper-evident storage, access control, secure retention missing) | ORG | AUD |
| APP-V55 | No unambiguous attribution of critical actions (missing correlation user-to-action, missing request IDs) | ORG | AUD |
| APP-V56 | Log retention and retention obligations not defined or not implemented | ORG | AUD, COMPL |
| APP-V57 | Monitoring/alerting for security and availability indicators missing (detection/response not effective) | ORG, CYBER | V, AUD |
| APP-V58 | Time/synchronisation requirements missing (inconsistent timestamps, forensics impeded) | ORG | AUD |

## APP-10 Availability, Resilience and Recovery

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| APP-V59 | Capacity and load protection missing (no rate limits/quotas/backpressure, no protection against resource exhaustion) | CYBER, ORG | V |
| APP-V60 | DoS-resilient architecture missing (no caches, no circuit breakers, no bulkheads, no graceful degradation) | ORG | V |
| APP-V61 | Dependencies not resilient (no timeout/retry concept, no fallbacks, cascade effects possible) | ORG | V |
| APP-V62 | Backup/restore for application-relevant data/configs not defined or not tested | ORG | V |
| APP-V63 | Recovery time and recovery point objectives (RTO/RPO) not derived from BIA or not implemented | ORG | V, COMPL |
| APP-V64 | No protection against accidental deletion/overwriting of application-relevant data (retention/soft-delete/versioning missing) | ORG | V, I |
| APP-V65 | Missing isolation/containment mechanisms during attacks (side effects escalate, no containment) | CYBER | V, I |
