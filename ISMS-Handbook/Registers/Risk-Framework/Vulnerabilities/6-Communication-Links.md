# Communication Links — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **communication links** asset class, grouped by control domain.
> Vulnerability IDs: CON-V01–CON-V45. Domain and aspect tags enable cross-referencing with the threat catalogue.

## CON-01 Inventory and Ownership

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V01 | No designated owner for the link (operations, security, change, escalation responsibilities unassigned) | ORG | V, C, I, AUD, COMPL |
| CON-V02 | Link not recorded in the inventory (purpose, endpoints, provider, contracts, criticality unclear) | ORG | V, COMPL |
| CON-V03 | Endpoints, path/topology and dependencies not documented (including shared-fate relationships) | ORG | V |
| CON-V04 | Protection requirements/BIA derivation for data and process traffic traversing the link not referenced | ORG | V, C, I, PRIV |
| CON-V05 | No defined scope of the link (which networks/services/ports are included) | ORG | C, I, V |

## CON-02 Architecture, Segmentation and Trust Boundaries

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V06 | Missing or inadequate segmentation (trust zone too broad; lateral movement across the link too easy) | COMM, CYBER | C, I, V |
| CON-V07 | No clear trust-boundary definition (internal/external/partner; implicit trust assumed) | ORG, COMM | C, I, V |
| CON-V08 | Management/control plane and data plane not separated (admin access shares the same paths) | COMM | C, I, AUD |
| CON-V09 | Missing egress control/allowlisting (unrestricted outbound destinations possible) | COMM, CYBER | C, I |
| CON-V10 | Insufficient filter/policy definition at transition points (overly broad ACLs, overly broad service permits) | COMM, CYBER | C, I, V |

## CON-03 Confidentiality and Transport Encryption

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V11 | No transport encryption for links requiring protection (plaintext transmission possible) | COMM | C, PRIV |
| CON-V12 | Weak or inconsistent TLS/IPsec configuration (protocols/ciphers/validation not robust) | COMM | C, AUTH |
| CON-V13 | Encryption terminates too early (segments in plaintext; plaintext hops between encrypted legs) | COMM | C, PRIV |
| CON-V14 | Insufficient key/certificate management (rotation/revocation/expiry monitoring missing) | ORG, COMM | C, AUTH, AUD |
| CON-V15 | Insufficient protection against eavesdropping on shared networks (e.g. missing end-to-end encryption) | COMM | C, PRIV |

## CON-04 Peer Authentication and Connection Authorization

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V16 | No mutual endpoint authentication (no mTLS/IPsec mutual auth, weak peer checks) | COMM, CYBER | AUTH, C |
| CON-V17 | Shared secrets/PSKs broadly distributed or reused (no unique key per link) | ORG, COMM | AUTH, C, AUD |
| CON-V18 | Insufficient authorization at link level (no clear policies defining who/what may connect) | COMM, CYBER | C, I, V |
| CON-V19 | Missing or weak hardening of VPN/tunnel endpoints (e.g. allowed peers too broad, permitted networks too wide) | COMM, CYBER | C, I, V |
| CON-V20 | Missing or insufficient revocation/blocking of compromised peers (stale peers remain permitted) | ORG | AUTH, C, I |

## CON-05 Integrity, Authenticity and Anti-Replay

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V21 | No integrity/authenticity assurance for messages/flows where required (missing signatures/MAC, missing origin checks) | COMM, CYBER | AUTH, I, C |
| CON-V22 | Replay protection missing (no nonces/sequence numbers/idempotency mechanisms for critical interactions) | COMM | AUTH, I |
| CON-V23 | Insufficient protection against spoofing/impersonation on the network (e.g. missing source validation, missing L2/L3 safeguards) | COMM, CYBER | AUTH, C, I |
| CON-V24 | Routing/path integrity not secured (risk of hijacking/misrouting without controls) | COMM, SUP | PROV, I, V |
| CON-V25 | DNS/name resolution for link contexts not secured (manipulation/redirection possible) | COMM, CYBER | AUTH, I, C |

## CON-06 Availability, Capacity and DoS Resilience

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V26 | No redundancy concept for the link (single link, single provider, no path diversity) | COMM, SUP | V |
| CON-V27 | Common-cause failures not considered (e.g. both "redundant" lines share the same duct route) | COMM | V |
| CON-V28 | No capacity planning or utilisation monitoring (resource exhaustion/overload goes undetected) | ORG, COMM | V |
| CON-V29 | Missing DDoS protection mechanisms (scrubbing, rate limits, upstream filters, blackholing options absent) | COMM, CYBER | V |
| CON-V30 | No QoS/prioritisation rules for critical traffic (important flows starve under load) | COMM | V |

## CON-07 Change, Configuration and Drift

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V31 | Changes to link/network configuration performed without formal approval/review | ORG | I, V, AUD |
| CON-V32 | Configuration not versioned or managed as code (no reproducibility/rollback assurance) | ORG | I, V, AUD |
| CON-V33 | No regular review of rules/policies (firewall/ACL/VPN peers grow unchecked) | ORG | C, I, V |
| CON-V34 | No secure backup/rollback mechanism for configurations (recovery takes too long) | ORG | V |
| CON-V35 | Configuration drift not detected (actual ≠ target state persists; guardrails missing) | ORG | I, V, COMPL |

## CON-08 Monitoring, Detection and Auditability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V36 | No end-to-end monitoring of the link (latency, loss, jitter, availability) with alerting | ORG, COMM | V |
| CON-V37 | No security-relevant telemetry (tunnel up/down, auth failures, policy drops, anomalies) | ORG, CYBER | AUD, V |
| CON-V38 | Logs/telemetry not tamper-protected or not centrally analysed (evidentiary integrity lacking) | ORG | AUD |
| CON-V39 | Time synchronisation requirements missing (correct correlation/forensics not possible) | ORG | AUD |
| CON-V40 | No defined log retention/compliance requirements for link evidence | ORG | AUD, COMPL |

## CON-09 Supplier and Third-Party Network Trust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| CON-V41 | No clear SLA/OLA from a process/BIA perspective (RTO/MTTR/escalation not assured) | SUP, ORG | V |
| CON-V42 | Missing requirements for provider security capabilities (DDoS, peering controls, incident notification) | SUP | V, COMPL |
| CON-V43 | No exit/fallback concept for provider failure (no alternative carrier, no rapid switchover) | SUP | V |
| CON-V44 | Missing assessment of trustworthiness/provenance in the network context (e.g. transit/peering risks disregarded) | SUP | PROV, I |
| CON-V45 | Unclear responsibility demarcation (provider vs. internal) during outage/security incident — slow response | ORG, SUP | V, AUD |
