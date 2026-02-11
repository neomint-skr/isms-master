> **Document ID:** CB_POL_L2_03-System-and-Network
> **Version:** 00.01.010
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.8.1, A.8.6-8.10, A.8.13-8.17, A.8.19-8.23
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# System and Network Security Standard

## Summary

IT systems and networks form the technical foundation of all business processes and are a preferred attack target. This standard defines the requirements for hardening, vulnerability management, network segmentation, logging, monitoring, data protection, web filtering, and cryptography. It ensures that technical vulnerabilities are systematically detected, assessed, and remediated. Without binding security requirements for systems and networks, attack surfaces remain uncontrolled and incidents difficult to trace.

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

The use of privileged utility programs capable of overriding system or application controls must be restricted and monitored (addresses A.8.18). Access to such utilities must be limited to authorized personnel with a documented business need. All usage must be logged, including user identity and actions performed. Privileged utilities must be separated from standard application software. Unnecessary utilities must be removed or disabled. Access must be granted only for the duration of approved changes or maintenance activities.

Software installation on operational systems must be controlled and authorized (addresses A.8.19). Only [authorized personnel, e.g. IT administrators] with documented approval may perform installations or updates on production systems. A formal approval process must be established. Software must be tested in a controlled environment prior to deployment. A list of approved software must be maintained. Rollback procedures must be documented for all installations. All installation activities must be logged with date, software details, and responsible administrator. End-of-life status of deployed software must be monitored.

**Bring-your-own-device (BYOD):** Personal devices used for organizational purposes must be subject to a documented risk assessment before access is granted (addresses A.8.1). Minimum security requirements must be defined, including device encryption, current operating system version, malware protection, and screen lock. Corporate data must be logically separated from personal data through containerization or equivalent measures. Remote wipe capability for organizational data must be ensured. BYOD devices must comply with the same access control policies as organization-owned endpoints. Acceptable use conditions and owner responsibilities must be documented and acknowledged by the device owner.

## Vulnerabilities

Technical vulnerabilities must be systematically identified, assessed, and remediated (addresses A.8.8).

**Identification:** Vulnerabilities must be identified through regular scans, monitoring of vendor advisories, and security bulletins. A current inventory of all systems, software, and components must be maintained.

**Reporting:** Vulnerability reports must be documented and assessed. A point of contact for external reports must be provided.

**Assessment:** Vulnerabilities must be prioritized by severity, impact, and potential risk.

**Remediation:** Patches and updates must be tested in a controlled environment after prioritization and deployed promptly. Where patches are not immediately available, compensating controls such as network segmentation or access restrictions must be employed.

**Verification:** Effectiveness of remediation measures must be verified through validation testing and system monitoring.

**Penetration testing:** Penetration tests must be conducted at least annually and after major architectural or infrastructure changes (addresses A.8.8). Scope must cover externally reachable systems, critical internal applications, and network boundaries. Tests must be performed by qualified personnel independent of the development and operations teams. Findings must be classified by severity, and remediation must be tracked through CB_PRC_10 (Corrective Actions). Re-testing must confirm closure of critical and high-severity findings before sign-off.

## Network

Networks must be designed and operated with security considerations (addresses A.8.20, A.8.21, A.8.22).

**Security controls:** Firewalls, intrusion detection/prevention systems, and access control lists must be configured to restrict unauthorized access. Authentication mechanisms must be implemented to verify the identity of connected systems.

**Segmentation:** Networks must be segmented into logical zones based on security requirements and access controls. Critical subnets and sensitive systems must be isolated.

**Network services:** Security requirements for each network service must be determined and documented. Permitted access methods, authentication policies, and network management rules must be defined.

**Documentation:** Current network diagrams, inventory of network devices, and configuration files must be maintained and updated regularly.

**WLAN segmentation:** Wireless networks must be separated into distinct segments for internal use and guest access (addresses A.8.22). Internal WLAN must require enterprise-grade authentication (e.g. WPA3-Enterprise, 802.1X). Guest WLAN must be isolated from internal networks and restricted to internet access only. Authentication methods, bandwidth limits, and session timeouts must be defined per segment. Unauthorized access points must be detected and disabled.

**Monitoring:** Network traffic and system activities must be monitored.

## Logging

Logs must be created, protected, and analyzed to detect security events and enable forensic analysis (addresses A.8.15).

**Logging requirements:** Events such as successful/rejected access attempts, system configuration changes, privileged activities, and file access must be logged. Log entries must contain at minimum user ID, system activity, date, time, device identity, and network address.

**Protection:** Access to log data must be restricted to authorized personnel. Logs must be protected against manipulation, e.g., through cryptographic hashing or append-only files.

**Analysis:** Logs must be analyzed regularly for unusual activities. Qualified personnel must use appropriate tools and techniques.

**Retention:** Logs must be retained in accordance with legal and organizational requirements.

**Centralization:** A centralized logging solution must be implemented to collect and analyze logs from across the entire infrastructure.

**Cloud-specific logging:** In cloud environments, audit logs provided by the platform must be activated and forwarded to the centralized logging solution (addresses A.8.15). Minimum log sources include identity and access management events, resource configuration changes, network flow logs, and administrative API calls. Retention periods must be defined per log category, with a minimum of [90 days online / 1 year archive]. Log export and alerting must be configured to prevent gaps during platform outages.

**Clock synchronization:** Clocks of all information processing systems must be synchronized to approved reference time sources (addresses A.8.17). [Approved time sources, e.g. Google NTP, Cloudflare NTP] must be designated as authoritative references. NTP or PTP must be configured on all systems. Synchronization status must be monitored automatically. Deviations must be investigated and corrected promptly. Consistent time stamps are a prerequisite for log correlation, forensic analysis, and incident investigation.

## Monitoring

Networks, systems, and applications must be monitored to detect anomalous behavior and potential information security incidents (addresses A.8.16). A baseline of normal behavior must be established using historical data for network traffic, system utilization, and user activity. Monitoring systems must be configured to capture and analyze inbound and outbound network traffic, system logs, and user activities. Automated alerts must be generated based on predefined thresholds. Escalation procedures for alerts requiring immediate attention must be defined. Anomaly detection must cover unusual traffic patterns, connections to suspicious addresses, unauthorized access attempts, and configuration changes. [SIEM solution, e.g. Google Chronicle, Splunk] should be employed for centralized event correlation and analysis. Alert thresholds and detection rules must be refined regularly to minimize false positives without compromising detection capability.

**Alarm management:** Security alerts must be triaged according to a documented severity classification (addresses A.8.16). Escalation rules must define response times, responsible roles, and notification channels per severity level. Recurring false positives must be analyzed, and detection rules adjusted to reduce alert fatigue without lowering detection coverage. Alert handling must be documented to enable trend analysis and continuous improvement of detection capability. Unresolved critical alerts must be escalated to the CISO within the defined timeframe.

## Data Masking

Sensitive data must be masked in non-production environments and wherever full data exposure is not required (addresses A.8.11). Data owners must identify and classify sensitive data elements in systems, databases, and applications. Appropriate masking techniques must be selected, including anonymization, pseudonymization, or tokenization, based on data classification and regulatory requirements. Masking must be applied before data is transferred to development, testing, or analytics environments. Effectiveness of masking must be validated to ensure that original data cannot be reconstructed or re-identified from masked data. Masking procedures must comply with applicable data protection regulations [REF:DG24-SN, Kap. 6.1].

## Data Leakage Prevention

Measures must be implemented to detect and prevent the unauthorized disclosure or extraction of sensitive information (addresses A.8.12). Channels with data exfiltration risk must be identified, including email, file transfer, cloud storage, and removable media. [DLP solution, e.g. Google Workspace DLP, Microsoft Purview] must be deployed to monitor data flows and enforce transfer policies. DLP rules must be configured to quarantine or block transmissions that match defined sensitive data patterns. User capabilities for copying, transferring, or uploading classified information to unauthorized destinations must be restricted. Alerts on policy violations must be investigated promptly. DLP policies must be reviewed and updated regularly to reflect changes in data classification or threat landscape.

## Web Filtering

Access to websites with potentially malicious or inappropriate content must be controlled (addresses A.8.23). Categories of websites to be blocked must be identified, including known malicious sites, command-and-control servers, and sites hosting illegal content. [Web filtering solution, e.g. DNS-based filtering, proxy-based filtering] must be configured to enforce access restrictions. Filter rules and block lists must be updated regularly to reflect current threat intelligence. Exceptions must be documented and approved through a formal request process. Web filtering effectiveness must be reviewed periodically.

## Cryptography

Cryptographic controls must be applied to protect the confidentiality, integrity, and authenticity of information (addresses A.8.24). Approved cryptographic algorithms and minimum key lengths must be defined in accordance with current industry standards and regulatory requirements. Encryption must be applied to sensitive data at rest and in transit. A key management process must be established covering the full lifecycle: generation, distribution, storage, rotation, revocation, and destruction of cryptographic keys. [Key management responsibility, e.g. CTO, IT Security Lead] must be designated. Cryptographic implementations must be audited regularly for compliance with the defined standards. Algorithms approaching end-of-life or identified as weakened must be replaced in a timely manner.

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
| 00.01.010 | 2026-02-11 | CISO | Dev/Ops extensions: penetration testing (A.8.8), cloud logging (A.8.15), WLAN segmentation (A.8.22), alarm management (A.8.16), BYOD (A.8.1) |
| 00.01.009 | 2026-02-11 | CISO | Added 8 missing controls: A.8.11, A.8.12, A.8.16, A.8.17, A.8.18, A.8.19, A.8.23, A.8.24 |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.005 | 2026-02-09 | CISO | Capacity (A.8.6) and redundancy (A.8.14) populated (REC-502, REC-503) |
| 00.01.004 | 2026-02-09 | CISO | Configuration management (A.8.9) and network security (A.8.20-22) populated (REC-307, 309) |
| 00.01.003 | 2026-02-09 | CISO | Endpoints/malware, vulnerabilities, logging populated (REC-305, 306, 308) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
