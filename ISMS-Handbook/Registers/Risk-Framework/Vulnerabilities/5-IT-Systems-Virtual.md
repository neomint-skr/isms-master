# Virtual IT Systems — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **virtual IT systems** asset class, grouped by control domain.
> Vulnerability IDs: VIT-V01–VIT-V45. Domain and aspect tags enable cross-referencing with the threat catalogue.

## VIT-01 Inventory and Governance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V01 | No designated owner (technical/business) for the virtual instance (operations, security, approvals) | ORG | C, I, V, COMPL |
| VIT-V02 | Instance not recorded in the asset inventory (existence, purpose, responsible parties and lifecycle unclear) | ORG | C, I, V, COMPL |
| VIT-V03 | Criticality/protection requirements (derived from information/process) not referenced or not traceably mapped to the instance | ORG | C, I, V, COMPL |
| VIT-V04 | Instance dependencies not documented (to/from applications, data, connections, identities) | ORG | I, V |
| VIT-V05 | No controlled lifecycle (provisioning/changes/deprovisioning) for instances; shadow-IT instances possible | ORG | C, I, V, AUD |

## VIT-02 Provenance, Images and IaC

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V06 | Base images/container images sourced from untrusted origins (no approved repositories/registries) | SUP | PROV, I |
| VIT-V07 | No signature/integrity verification for images/artefacts (no verified provenance/checksums) | SUP | PROV, I |
| VIT-V08 | No mandatory vulnerability scanning of images before use (no scan/gating in the pipeline process) | SUP, CYBER | C, I, V |
| VIT-V09 | No traceable artefact chain from build to deploy (missing provenance/attestations) | SUP | PROV, I, AUD |
| VIT-V10 | Infrastructure-as-Code/automation used without review/policies (insecure modules, missing guardrails) | ORG, SUP | I, PROV, COMPL |

## VIT-03 Configuration and Hardening

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V11 | No hardened baseline standard (secure defaults missing; unnecessary services/ports active) | CYBER | C, I, V |
| VIT-V12 | Configuration drift not controlled (deviations from baseline not detected/corrected) | ORG, CYBER | I, V |
| VIT-V13 | Volume/disk encryption not enforced or incorrectly implemented | CYBER, ORG | C, PRIV |
| VIT-V14 | Secrets/credentials stored in user-data/bootstrapping/config files (exposable) | CYBER | C, PRIV |
| VIT-V15 | No defined least-functionality principle (debug/admin tools in production systems, unnecessary packages) | CYBER | C, I |

## VIT-04 Identity, Access and Administration

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V16 | No MFA/step-up for privileged access (console, SSH/RDP, control plane) | CYBER | C, I, V, AUD |
| VIT-V17 | Shared/shareable admin accounts or missing unique admin identities | ORG | AUD |
| VIT-V18 | Over-privileged roles/policies (least privilege not implemented; overly broad permissions on instance/cloud resources) | CYBER, ORG | C, I, V, AUD |
| VIT-V19 | No structured key/credential lifecycle management (rotation/revocation/stale keys) | CYBER | C, I, AUD |
| VIT-V20 | Access to instance metadata/workload identity not secured (credential theft via metadata service possible) | CYBER | C, I, AUD |

## VIT-05 Network Exposure and Communication Security

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V21 | Security groups/firewall rules overly permissive (e.g. 0.0.0.0/0 for admin ports or services) | COMM, CYBER | C, I, V |
| VIT-V22 | No segmentation/isolation (instance in wrong network zone; lateral movement too easy) | COMM, CYBER | C, I, V |
| VIT-V23 | Management interfaces exposed via production networks (no separate admin networks/bastion/private access) | COMM | C, I, AUD |
| VIT-V24 | No egress control/allowlisting (instance can communicate outbound without restriction; C2/exfiltration facilitated) | COMM, CYBER | C, I |
| VIT-V25 | Weak or missing transport security for relevant system-level protocols (e.g. insecure remote management, missing mTLS requirements where system-relevant) | COMM | C, AUTH, I |

## VIT-06 Patch and Vulnerability Management

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V26 | No patch management for OS/runtime (updates ad-hoc or not applied at all) | ORG, CYBER | C, I, V |
| VIT-V27 | Unsupported/EOL operating system or EOL runtime (no security updates available) | CYBER | C, I, V, COMPL |
| VIT-V28 | No regular vulnerability detection/scanning at instance level (packages, kernel, configuration) | CYBER | C, I, V |
| VIT-V29 | Missing prioritisation/SLAs for remediation (critical findings remain open) | ORG | C, I, V |
| VIT-V30 | Missing hardening against known baseline deviations (CIS findings not treated as mandatory) | ORG, CYBER | C, I, V, COMPL |

## VIT-07 Workload Protection, Integrity and Malware

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V31 | No effective malware/EDR protection at workload level (or not centrally managed) | CYBER | C, I, V |
| VIT-V32 | No integrity monitoring of critical system areas (e.g. file integrity monitoring for system/config files) | CYBER | I, AUD |
| VIT-V33 | Privileged execution without restriction (e.g. root/administrator by default; missing hardening against privilege escalation) | CYBER | C, I, V |
| VIT-V34 | No isolation/containment mechanisms for compromised workloads (blast radius not limited) | CYBER | V, I |
| VIT-V35 | Insecure default configuration of remote access (e.g. SSH/RDP without adequate hardening/protection measures) | CYBER, COMM | C, I, AUD |

## VIT-08 Logging, Monitoring and Auditability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V36 | Security-relevant events not sufficiently logged (auth, privilege changes, config changes, network events) | ORG, CYBER | AUD |
| VIT-V37 | Logs not centralised or not tamper-protected (tamper-evident/write-once storage missing) | ORG | AUD |
| VIT-V38 | Monitoring/alerting for availability and security indicators missing or not linked to responsible parties | ORG | V, AUD |
| VIT-V39 | Time synchronisation not ensured (forensics/non-repudiation impaired) | ORG | AUD |
| VIT-V40 | Log retention not defined or not compliantly implemented (too short/too long; no evidence) | ORG | AUD, COMPL |

## VIT-09 Availability, Resilience and Recovery

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| VIT-V41 | No backup/snapshot requirements defined or technically implemented (including configuration/state) | ORG | V |
| VIT-V42 | No regular restore tests (recoverability not demonstrated) | ORG | V |
| VIT-V43 | Single point of failure: instance/workload not redundant (no HA/failover strategy) | ORG | V |
| VIT-V44 | No resource limits/quotas (CPU/RAM/storage) or no safeguards against resource exhaustion | ORG, CYBER | V |
| VIT-V45 | Missing safeguards against accidental deletion/overwriting (versioning/retention/soft-delete for relevant system artefacts) | ORG | V, I |
