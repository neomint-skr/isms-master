> **Document ID:** CB_POL_L2_03-System-and-Network
> **Version:** 00.01.008
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.8.1, A.8.6-8.9, A.8.14-8.23
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# System and Network Security Standard

## Summary

IT systems and networks form the technical foundation of all business processes and are a preferred attack target. This policy defines the requirements for hardening, vulnerability management, network segmentation, logging, and capacity planning. It ensures that technical vulnerabilities are systematically detected, assessed, and remediated. Without binding security requirements for systems and networks, attack surfaces remain uncontrolled and incidents difficult to trace.

## Objective and Scope

**Policy reference:** P1, P3
**Operationalized by:** CB_POL_L3_02-Admin-Handbook, CB_POL_L3_06-Network-Security

**Objective:** IT systems and networks form the technical foundation of all business processes. Without binding security requirements for configuration, hardening, and monitoring, technical vulnerabilities remain systematically undetected and untreated.

This policy defines the normative requirements for endpoints, systems, networks, vulnerability management, and logging (addresses A.8.1, A.8.6-8.23). It establishes criteria for secure configuration, network segmentation, and logging.

The standard implements the principles P1 (Protection) and P3 (Risk orientation) of the IS policy. Operational implementation is provided through CB_POL_L3_02 (Admin Handbook) and CB_POL_L3_06 (Network Security); vulnerability management through CB_PRC_04 (Vulnerability Management).

**Scope:** IT administrators and system operators. Covers all IT systems, endpoints, and network components within the ISMS scope.

## Endpoints and Systems

Systems must be protected against malware through appropriate software (addresses A.8.7).

**Tool selection:** Malware protection solutions must be selected according to industry standards, reliability, and compatibility. Solutions should include signature-based and behavior-based analysis.

**Deployment:** Malware protection must be installed on all endpoints, servers, and relevant systems and managed centrally.

**Preventive controls:** Controls to prevent unauthorized software must be implemented, including automatic blocking of known malware and access restrictions on malicious websites.

**Updates:** Software and signatures must be updated regularly. Automatic updates are to be preferred.

**Response:** Upon malware detection, affected systems must be isolated and incidents documented in accordance with CB_PRC_01.

Hardware, software, services, and networks must be configured with hardened security settings (addresses A.8.9).

**Security baselines:** Standard templates for secure configurations must be developed based on established industry practices. Templates must be reviewed and updated regularly.

**Documentation:** A central repository for configuration documentation must be maintained, including templates and change records.

**Implementation:** Configurations must be applied to newly provisioned systems or after upgrades according to approved templates. All changes require approval through the change management procedure.

**Monitoring:** Configuration compliance must be reviewed regularly. Deviations must be investigated and corrected.

**Automation:** Configuration management processes should be automated where possible.

## Vulnerabilities

Technical vulnerabilities must be systematically identified, assessed, and remediated (addresses A.8.8).

**Identification:** Vulnerabilities must be identified through regular scans, monitoring of vendor advisories, and security bulletins. A current inventory of all systems, software, and components must be maintained.

**Reporting:** Vulnerability reports must be documented and assessed. A point of contact for external reports must be provided.

**Assessment:** Vulnerabilities must be prioritized by severity, impact, and potential risk.

**Remediation:** Patches and updates must be tested in a controlled environment after prioritization and deployed promptly. Where patches are not immediately available, compensating controls such as network segmentation or access restrictions must be employed.

**Verification:** Effectiveness of remediation measures must be verified through validation testing and system monitoring.

## Network

Networks must be designed and operated with security considerations (addresses A.8.20, A.8.21, A.8.22).

**Security controls:** Firewalls, intrusion detection/prevention systems, and access control lists must be configured to restrict unauthorized access. Authentication mechanisms must be implemented to verify the identity of connected systems.

**Segmentation:** Networks must be segmented into logical zones based on security requirements and access controls. Critical subnets and sensitive systems must be isolated.

**Network services:** Security requirements for each network service must be determined and documented. Permitted access methods, authentication policies, and network management rules must be defined.

**Documentation:** Current network diagrams, inventory of network devices, and configuration files must be maintained and updated regularly.

**Monitoring:** Network traffic and system activities must be monitored.

## Logging

Logs must be created, protected, and analyzed to detect security events and enable forensic analysis (addresses A.8.15).

**Logging requirements:** Events such as successful/rejected access attempts, system configuration changes, privileged activities, and file access must be logged. Log entries must contain at minimum user ID, system activity, date, time, device identity, and network address.

**Protection:** Access to log data must be restricted to authorized personnel. Logs must be protected against manipulation, e.g., through cryptographic hashing or append-only files.

**Analysis:** Logs must be analyzed regularly for unusual activities. Qualified personnel must use appropriate tools and techniques.

**Retention:** Logs must be retained in accordance with legal and organizational requirements.

**Centralization:** A centralized logging solution must be implemented to collect and analyze logs from across the entire infrastructure.

## Capacity

IT capacity management must ensure that sufficient resources are available for current and future requirements while maintaining security controls (addresses A.8.6).

**Requirements assessment:** Regular assessments of capacity requirements must be conducted for information processing facilities, personnel, and other relevant resources. The criticality of systems and processes must be determined and resource allocation prioritized accordingly.

**Monitoring:** Instruments for continuous monitoring of resource utilization must be implemented. Resource utilization metrics must be reviewed regularly to detect capacity-related issues or trends early.

**Stress testing:** Regular stress tests must be conducted to verify system capacity and performance under peak load conditions. Results must be analyzed to identify bottlenecks or improvement needs.

**Escalation:** Controls for identifying capacity bottlenecks (monitoring rules, alerts) must be employed. Escalation procedures must be established to address detected anomalies promptly [REF:DG24-BK, Kap. 2.1].

## Redundancy

Redundancies must be provided for critical information processing facilities to maintain continuous operations and fulfill availability requirements (addresses A.8.14).

**Availability requirements:** Availability requirements for critical business services and information systems must be identified based on SLAs, Business Impact Analysis (BIA), and regulatory requirements.

**Redundancy planning:** System architecture must be designed with redundancy measures suitable to meet the identified availability requirements. The required degree of redundancy must be determined considering criticality, impact, and budget constraints.

**Redundancy mechanisms:** Appropriate mechanisms must be selected based on the infrastructure, in particular:

- Duplication of information processing facilities (spare components, mirrored systems)
- Redundant network connections and geographically separated storage locations
- Redundant power supplies
- Contracts with multiple suppliers for critical services

**Activation:** Activation of redundant components must be approved by the process owner. Redundant components must maintain the same security level as the primary components.

**Testing:** Regular tests of redundant systems and failover mechanisms must be conducted to verify functionality and emergency readiness [REF:DG24-BK, Kap. 2.2].

## See also

- CB_POL_L2_01-Access-and-Identity — Network access controls
- CB_POL_L2_04-Secure-Development — Change management, deployment
- CB_POL_L3_02-Admin-Handbook — Hardening, vulnerability management, logging
- CB_POL_L3_06-Network-Security — Architecture, segmentation
- CB_PRC_04-Vulnerability-Management — Vulnerability process
- CB_PRC_05-Change-Management — Changes to systems and networks

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.005 | 2026-02-09 | CISO | Capacity (A.8.6) and redundancy (A.8.14) populated (REC-502, REC-503) |
| 00.01.004 | 2026-02-09 | CISO | Configuration management (A.8.9) and network security (A.8.20-22) populated (REC-307, 309) |
| 00.01.003 | 2026-02-09 | CISO | Endpoints/malware, vulnerabilities, logging populated (REC-305, 306, 308) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
