> **Document ID:** CB_POL_L3_06-Network-Security
> **Version:** 00.01.008
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.8.20-8.22
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Network Security Handbook

## Summary

Secure network operation requires documented architecture, enforced segmentation, and hardened services. This handbook provides step-by-step instructions for planning the network architecture, defining segmentation zones, and securing network services. It operationalizes the network requirements of CB_POL_L2_03 and ensures auditability of controls A.8.20, A.8.21, and A.8.22. Without these instructions, network configurations remain inconsistent and lateral movement within the network goes undetected.

## Objective and Scope

**Standard reference:** CB_POL_L2_03-System-and-Network
**Condensed by:** —

**Objective:** Networks connect all IT systems and thus form the backbone of the organization — but they are also the primary attack vector for lateral movement. Without practical requirements for network architecture, segmentation, and service hardening, networks remain insecurely configured.

This handbook translates the requirements from CB_POL_L2_03 (System and Network Security) into concrete network security instructions. It defines architecture requirements, segmentation rules, and controls for network service protection.

The requirements apply to all network components within the ISMS scope. Implementation is carried out by IT administrators (CB_POL_L3_02-Admin-Handbook) and verified through vulnerability management (CB_PRC_04).

**Scope:** Network administrators and IT security officers. Covers all network segments, firewalls, VPN gateways, and network services.

## Plan the network architecture

Design all networks following the principle of defence in depth (addresses A.8.20). Apply these architecture principles:

1. Define trust zones before deploying any network device. Each zone must have a documented security level and permitted traffic flows.
2. Place all internet-facing services in a dedicated DMZ. Do not route inbound traffic directly to internal zones.
3. Enforce a default-deny policy on all firewalls and routers. Permit only explicitly documented traffic.
4. Separate management traffic from production traffic. Use a dedicated management network or out-of-band access for administrative tasks.
5. Treat wireless connections as untrusted until they pass a network gateway that enforces the same controls as wired connections [REF:DG24-SN, Kap. 3.4].

Maintain the following documentation artefacts:

| Artefact | Content | Review cycle |
|---|---|---|
| Network diagram | All zones, subnets, firewalls, routers, VPN gateways | [quarterly \| semi-annually — depending on change frequency] |
| Device inventory | Hostname, IP, function, firmware version, owner | Continuous (updated on every change) |
| Firewall rule set | Source, destination, port, protocol, business justification | [quarterly \| semi-annually] |

Store all artefacts in [central configuration repository, e.g. GitLab, Confluence]. Review the complete architecture at least [annually \| after major infrastructure changes].

## Segment the network

Divide all networks into logical zones based on data classification and business function (addresses A.8.22). Use the following minimum zone model:

| Zone | Purpose | Examples |
|---|---|---|
| DMZ | Internet-facing services | [Web application frontends, load balancers, reverse proxies] |
| Internal production | Business applications and databases | [Application servers, database clusters] |
| Management | Administrative access and monitoring | Jump hosts, monitoring agents, configuration management |
| Guest / BYOD | Untrusted devices without access to internal resources | Visitor Wi-Fi, personal devices |
| Development / Staging | Non-production workloads | CI/CD runners, test environments |

Apply these segmentation rules:

1. Place firewall or filtering controls between every zone boundary. Allow only traffic that is documented in the firewall rule set.
2. Isolate the guest network completely from all internal zones. Provide internet access only through a separate gateway [REF:DG24-SN, Kap. 3.4].
3. Restrict lateral movement between production subnets. Segment critical systems (databases, key management) into dedicated subnets with additional access controls.
4. Use VLANs or software-defined networking to enforce zone boundaries. Do not rely on physical separation alone.
5. Apply the principle of least privilege to all inter-zone traffic. Remove unused firewall rules during each review cycle.
6. Monitor traffic crossing zone boundaries. Log all denied connection attempts and forward them to the centralized logging solution.

## Secure network services

Evaluate every network service for security requirements before deployment (addresses A.8.21). Apply these controls to each service:

**Hardening:**

1. Disable all unnecessary protocols, ports, and features on every network device and service.
2. Apply vendor-recommended hardening guides or industry benchmarks (e.g. CIS Benchmarks) for firewalls, routers, switches, and VPN gateways.
3. Replace default credentials before connecting any device to the network.
4. Keep firmware and software of network devices up to date. Coordinate patching through CB_PRC_04 (Vulnerability Management).

**Encryption:**

1. Encrypt all traffic crossing untrusted networks. Use TLS 1.2 or higher for application-layer communication and IPsec or WireGuard for site-to-site and remote-access VPN.
2. Disable deprecated protocols (SSL, TLS 1.0, TLS 1.1).
3. Align cipher suite selection with the cryptography handbook (CB_POL_L3_04).

**Authentication:**

1. Require authentication for every administrative and management connection. Use multi-factor authentication for all remote administrative access.
2. Implement 802.1X or equivalent network access control for wired and wireless connections where feasible.
3. Define and enforce permitted access methods (VPN, SSH) in the firewall rule set. Block all other remote management protocols.

**Service level and monitoring:**

1. Document the security requirements and service level for each network service in a service catalogue or equivalent record.
2. Review service provider agreements for network services against documented security requirements [annually \| on contract renewal].
3. Monitor the availability and performance of critical network services. Feed alerts into the incident management process (CB_PRC_01).

## See also

- CB_POL_L2_03-System-and-Network — parent standard (L2)
- CB_POL_L3_02-Admin-Handbook — operational hardening and access procedures
- CB_POL_L3_04-Cryptography — cipher suites, key management
- CB_PRC_01-Incident-Response — escalation for network security events
- CB_PRC_04-Vulnerability-Management — patching and remediation workflow

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.008 | 2026-02-20 | Claude (AI) | Normalize review cycle metadata to placeholder |
| 00.01.007 | 2026-02-11 | CISO | Filled TODO sections: architecture, segmentation, services, summary, see also |
| 00.01.006 | 2026-02-10 | CISO | Added L4 traceability field (Condensed by) |
| 00.01.005 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.004 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.003 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.002 | 2026-02-08 | CISO | Subject chapter headings reformulated as calls to action |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
