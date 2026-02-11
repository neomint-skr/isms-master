# Physical IT Systems — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **physical IT systems** asset class, grouped by control domain.
> Vulnerability IDs: PIT-V01–PIT-V60. Domain and aspect tags enable cross-referencing with the threat catalogue.

## PIT-01 Inventory, Ownership and Lifecycle

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V01 | No designated system owner (operations/security/approval authority) assigned | ORG | C, I, V, COMPL |
| PIT-V02 | System not recorded in asset inventory (location, purpose, serial number, criticality unclear) | ORG | C, I, V, COMPL |
| PIT-V03 | Protection requirements/BIA inheritance for this system not traceably documented | ORG | C, I, V |
| PIT-V04 | Lifecycle/deprovisioning not regulated (legacy devices remain in operation, "ghost systems") | ORG | C, I, V, COMPL |
| PIT-V05 | No maintenance/spare-parts strategy (MTTR unrealistic, spare parts unavailable) | ORG | V |

## PIT-02 Environmental: Fire, Water, Climate and Dust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V06 | No fire detection or unsuitable detectors in the immediate system environment | ENV | SAFETY, V |
| PIT-V07 | No/unsuitable local fire suppression (e.g. no appropriate extinguishing agents near the system) | ENV | SAFETY, V |
| PIT-V08 | No leakage/water detection in the relevant area (under raised floor/near piping) | ENV | V |
| PIT-V09 | Climate control/temperature management at the installation site inadequate (hotspots, no monitoring) | ENV | V |
| PIT-V10 | Dust/particle protection insufficient (filters/enclosure/IP rating not appropriate) | ENV | V |

## PIT-03 Power and Electrical Protection

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V11 | No redundant power supply (single PSU / no separate power circuits) | INFRA | V |
| PIT-V12 | No UPS/bridging solution for the system or no tested bridging time | INFRA | V |
| PIT-V13 | Surge/lightning protection/grounding not verifiable or insufficient | INFRA | V |
| PIT-V14 | Power paths/PDUs not monitored (load, failures, thresholds; no alerting) | INFRA | V |
| PIT-V15 | No controlled restart strategy after power outage (boot sequence/dependencies undefined) | INFRA, ORG | V |

## PIT-04 Electromagnetic Interference and Emission

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V16 | Inadequate EMC design (susceptibility to interference, missing shielding/spacing/cable routing) | ENV | V |
| PIT-V17 | Missing/unsuitable cable shielding/filtering (e.g. unshielded cables in sensitive areas) | ENV | C |
| PIT-V18 | No measures against compromising emanation (e.g. no TEMPEST-aligned requirements, no zoning) | ENV | C |
| PIT-V19 | No monitoring/incident procedure for EM interference (fault patterns remain undetected) | ORG, ENV | V |
| PIT-V20 | Insufficient separation of interfering and interference-susceptible components (e.g. high-power PSUs, radio sources) | ENV | V |

## PIT-05 Physical Access, Tamper and Theft

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V21 | System physically freely accessible (no rack/cabinet/lockdown, no secured ports) | PHYSSEC | C, I, V |
| PIT-V22 | No tamper-evident measures (seals, chassis contacts, alarm on opening) | PHYSSEC | I, AUD |
| PIT-V23 | Storage media removable without protection (no encryption/no safe-handling procedure) | PHYSSEC | C, PRIV, V |
| PIT-V24 | No clear rules/technology for secure storage/transport (theft/loss facilitated) | PHYSSEC, ORG | C, PRIV, V |
| PIT-V25 | No secure disposal/RMA procedure (data remnants possible during repair/disposal) | PHYSSEC, ORG | C, PRIV, COMPL |

## PIT-06 Hardware, Firmware and Boot Integrity

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V26 | No secure boot chain (Secure Boot/Measured Boot/TPM not used or disabled) | CYBER, SUP | I |
| PIT-V27 | Firmware/BIOS configuration unprotected (no BIOS password, no configuration lock) | CYBER | I |
| PIT-V28 | Firmware updates without integrity verification/signature or without controlled process | SUP, CYBER | I, PROV |
| PIT-V29 | No inventory/monitoring of firmware versions (vulnerable firmware remains undetected) | ORG, CYBER | I, V |
| PIT-V30 | No control of hardware provenance/authenticity (component from unreliable source possible) | SUP | PROV, I |

## PIT-07 System Hardening and Configuration

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V31 | Default configuration/insecure defaults (unnecessary services/ports active) | CYBER | C, I, V |
| PIT-V32 | No baseline (CIS/hardening standard) or baseline not enforced | ORG, CYBER | C, I, V, COMPL |
| PIT-V33 | Configuration drift not controlled (deviations from baseline persist) | ORG, CYBER | I, V |
| PIT-V34 | Local storage media not adequately protected (missing full-disk encryption, incorrect implementation) | CYBER | C, PRIV |
| PIT-V35 | Secrets/credentials stored unprotected on the system (config files, scripts, plaintext) | CYBER | C, PRIV |

## PIT-08 Identity, Access and Administration

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V36 | No MFA/step-up for privileged access (console, remote management) | CYBER | C, I, V, AUD |
| PIT-V37 | Shared/shareable admin accounts or missing unique admin identities | ORG | AUD |
| PIT-V38 | Over-privileged admin rights (least privilege not implemented, roles too broad) | CYBER, ORG | C, I, V, AUD |
| PIT-V39 | Inadequate credential lifecycle management (rotation/revocation; "stale keys") | CYBER | C, I, AUD |
| PIT-V40 | No safeguards against mis-administration (change approval, four-eyes principle, rollback) | ORG, HUMAN | I, V, AUD |

## PIT-09 Network Interfaces and Message Trust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V41 | Management interfaces excessively exposed (admin ports open, no network segmentation) | COMM, CYBER | C, I, AUD |
| PIT-V42 | Insecure management protocols/transport (e.g. plaintext, weak TLS configuration) | COMM | C, AUTH |
| PIT-V43 | No authenticity/integrity assurance for routing/control-plane/management messages (depending on device type) | COMM, CYBER | AUTH, I |
| PIT-V44 | No protection against network-based resource exhaustion/DoS at system level (rate limits/CoPP/queues missing) | COMM, CYBER | V |
| PIT-V45 | No egress control/allowlisting (exfiltration/C2 facilitated) | COMM, CYBER | C, I |

## PIT-10 Logging, Monitoring and Auditability

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V46 | Security-relevant events not sufficiently logged (auth, privileges, config, ports) | ORG, CYBER | AUD |
| PIT-V47 | Logs not centralised or not tamper-protected (tamper-evident/WORM missing) | ORG | AUD |
| PIT-V48 | Monitoring/alerting missing (health, power, temperature, security events; no alerting) | ORG | V, AUD |
| PIT-V49 | Time synchronisation not ensured (forensics/traceability compromised) | ORG | AUD |
| PIT-V50 | Log retention/evidence preservation not defined or not compliantly implemented | ORG | AUD, COMPL |

## PIT-11 Availability, Resilience, Backup and Recovery

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V51 | No redundancy concept (single point of failure: device/component/PSU/controller) | ORG | V |
| PIT-V52 | No backup/restore strategy for system-critical data/configs (e.g. appliance config, local data) | ORG | V |
| PIT-V53 | No regular restore/recovery tests (recoverability not demonstrated) | ORG | V |
| PIT-V54 | No safeguards against accidental deletion/overwriting (versioning/retention/config backups missing) | ORG | V, I |
| PIT-V55 | No isolation/containment mechanisms (side effects of attacks/operational errors escalate) | CYBER | V, I |

## PIT-12 Malware Protection and Exploit Resistance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| PIT-V56 | No effective malware/EDR protection (or not centrally managed) | CYBER | C, I, V |
| PIT-V57 | No integrity monitoring of critical system areas (file/config integrity monitoring) | CYBER | I, AUD |
| PIT-V58 | Missing hardening against privilege escalation (unnecessary SUID/kernel features, insecure drivers) | CYBER | C, I, V |
| PIT-V59 | Missing exploit mitigations (e.g. ASLR/DEP/SELinux/AppArmor depending on system class) | CYBER | C, I, V |
| PIT-V60 | No response capability on compromise (quarantine/isolation/golden image/rebuild not planned) | ORG | V, I |
