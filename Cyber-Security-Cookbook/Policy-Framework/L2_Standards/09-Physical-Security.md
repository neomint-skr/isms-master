> **Document ID:** CB_POL_L2_09-Physical-Security
> **Version:** 00.01.009
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.7.1-7.14
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Physical Security Standard

## Summary

Physical access to premises housing IT infrastructure or confidential information enables theft, manipulation, or destruction. This policy defines the requirements for physical entry controls, workplace environment, infrastructure protection, and physical monitoring. It ensures that security zones are defined, entry rights are granted traceably, and clear desk rules are enforced. Without binding physical security controls, the on-site attack surface remains uncontrolled.

## Objective and Scope

**Policy reference:** P1, P3
**Operationalized by:** CB_POL_L3_01-User-Handbook

**Objective:** Physical access to premises housing IT infrastructure or confidential information enables theft, manipulation, or destruction. Without binding entry rules and infrastructure protection requirements, the physical attack surface remains uncontrolled.

This policy defines the normative requirements for physical entry controls, workplace environment, infrastructure protection, and physical monitoring (addresses A.7.1-7.14). It establishes criteria for security zones, clear desk rules, and protection of technical rooms.

The standard implements the principles P1 (Protection) and P3 (Risk orientation) of the IS policy. Operational implementation for workplace behavior is provided through CB_POL_L3_01 (User Handbook).

**Scope:** Facility management, IT operations, and all employees with access to security zones. Covers all locations, buildings, and rooms within the ISMS scope.

## Entry

Areas containing sensitive information must be protected by physical security perimeters (addresses A.7.1).

**Security perimeters:** Areas with sensitive information must be identified and protected by defined boundaries. A plan with area boundaries and classifications must be developed. Physical perimeters must be aligned with the ISMS scope (HB_CLS_4.3).

**Structural protection:** Doors to security areas must be equipped with appropriate control mechanisms. Windows, ventilation openings, and other potential access points must be secured.

**Alarm systems:** Alarm systems at boundary doors to security areas must be installed, regularly tested, and designed for fail-safe operation. All alarm tests and corrective actions taken must be documented. Alarm system configurations and incident responses must be recorded for audit purposes [REF:DG24-PS, Kap. 2.1].

**Access controls:** Personnel must be trained to lock doors and windows when areas are unattended.

**Regular inspections:** The physical condition of perimeters must be inspected regularly and required maintenance carried out.

Access to areas containing sensitive information must be controlled and documented (addresses A.7.2).

**Personnel access:** Access must be restricted to authorized personnel. Access rights must be managed (granting, review, revocation) and documented. Visible badges must be worn. Physical or electronic access logs must be maintained.

**Authentication:** Access cards, biometric data, or two-factor authentication must be employed.

**Visitor access:** Visitors must be authenticated, registered (date, time, purpose), and supervised at all times unless an explicit exception is granted. Security requirements and expected behaviour must be communicated upon arrival. A staffed or otherwise monitored reception area must control physical access to the building. Personal belongings (storage media, cameras, recording devices) must be subject to checks upon entry and exit [REF:DG24-PS, Kap. 2.2].

**Delivery areas:** Access to delivery and loading areas must be restricted to authorized personnel. Deliveries must be checked for hazardous materials, registered upon arrival, and inspected for tampering.

**Key management:** Documented key management with logbook and annual review must be established.

**Secure areas:** Information about the existence of or activities within security areas must be disclosed only to personnel with a verified need-to-know (addresses A.7.6). Work activities in security areas must be supervised. Photographic, video, audio, or other recording devices must not be brought into security areas without explicit authorization. User endpoint devices must be checked upon entry for compliance with device control requirements. Security areas must be locked when unoccupied; storage units and cabinets within those areas must be secured [REF:DG24-PS, Kap. 3.1].

## Workplace

Sensitive information and endpoint devices must be secured when not in use (addresses A.7.7).

**Securing sensitive information:** Paper documents and removable media containing confidential information must be stored securely when not needed. Safes, cabinets, or other secure storage must be used.

**Screen lock:** Endpoint devices must be locked or logged off when leaving the workplace. Automatic timeout or logoff must be configured.

**Printing:** Printed output must be collected immediately. Printers with authentication features should be used.

**Secure disposal:** Documents and storage media no longer required must be securely disposed of by shredding or electronic erasure (addresses A.7.14). The disposal method must be selected based on information sensitivity: overwriting for reusable media, physical destruction for damaged or highly sensitive media. Only approved tools and methods must be used. Disposal of complete equipment must comply with applicable environmental regulations. All disposal activities must be documented.

**Removal of identification markings:** Before disposal, resale, or donation, all labels and markings indicating the organization, ownership, classification, system, or network affiliation must be removed from equipment (addresses A.7.14). Remaining markings must be rendered illegible [REF:DG24-PS, Kap. 4.6].

**Whiteboards and displays:** Sensitive information must be removed from whiteboards and displays when no longer needed.

**End-of-day check:** Before leaving the premises, ensure that all sensitive information and assets are secured.

## Infrastructure

Offices, rooms, and technical facilities must be protected against unauthorized access, damage, and environmental influences through appropriate physical security controls (addresses A.7.3).

**Requirements for rooms and facilities:**

| # | Requirement | Control |
|---|---|---|
| 1 | Critical facilities (server rooms, technical rooms) must be located in areas not accessible to the public | A.7.3 |
| 2 | Buildings containing critical facilities must not indicate their purpose; signage must be restrictive | A.7.3 |
| 3 | Confidential information and activities must not be visible or audible from outside | A.7.3 |
| 4 | Directories with location information for sensitive facilities must be restricted to authorized personnel | A.7.3 |

**Protection against physical and environmental threats:**

Controls against natural disasters, fire, flooding, electrical surge, and other environmental influences must be implemented based on a risk assessment (addresses A.7.5). The risk assessment must be conducted initially and on a recurring basis. Expert advice must be obtained where internal expertise is lacking. Fire detection systems enabling early warning must be installed. Automatic fire suppression systems must be provided where justified by the risk assessment. Fire detection and suppression equipment must be tested and maintained at defined intervals. An alert chain covering detection, notification, and evacuation must be documented and exercised regularly [REF:DG24-PS, Kap. 2.5].

**Supporting utilities:** IT infrastructure must be protected against failure of power supply and other supporting utilities (addresses A.7.11). Uninterruptible power supplies and climate control in technical rooms must be installed and regularly maintained. Emergency lighting and communication systems must be provided to facilitate response during utility failures. Emergency shut-off switches and valves must be installed near emergency exits or equipment rooms to allow rapid disconnection of power, water, gas, or other utilities. Emergency contact details for utility providers must be kept current and accessible to responsible personnel [REF:DG24-PS, Kap. 5.1].

**Equipment siting:** Equipment must be placed stably, protected against moisture and overheating, and provided with adequate space for maintenance (addresses A.7.8). Cable routes must be organized and secured [REF:DG24-PS, Kap. 2.3].

**Lightning protection:** Lightning protection measures including lightning conductors and surge protection devices must be installed on buildings housing equipment (addresses A.7.8, A.7.11). Lightning protection filters must be fitted to incoming power and communication lines. The local risk of lightning occurrence must be considered in the risk assessment [REF:DG24-PS, Kap. 4.1].

**Cabling security:** Power and communication cables must be physically separated to minimize the risk of interference (addresses A.7.12). For sensitive or critical systems, armoured conduits, locked rooms or enclosures, and electromagnetic shielding must be applied. Regular technical and physical inspections must detect unauthorized devices attached to the cabling infrastructure. Access to patch panels and cable rooms must be controlled by mechanical locks or PINs [REF:DG24-PS, Kap. 4.4].

**Equipment maintenance:** Only trained and authorized personnel must perform maintenance on physical equipment (addresses A.7.13). A register of authorized maintenance personnel and their qualifications must be maintained. External maintenance personnel must sign a confidentiality agreement before performing maintenance tasks. A documented maintenance plan covering tasks, frequencies, and responsibilities must be established [REF:DG24-PS, Kap. 4.5].

## Monitoring

The premises of the organization must be continuously monitored against unauthorized physical entry (addresses A.7.4).

**Requirements:**

| # | Requirement |
|---|---|
| 1 | Critical areas within and outside the premises must be identified and covered by appropriate monitoring means |
| 2 | Surveillance cameras must be installed at strategic positions (entrances, sensitive areas, perimeter) |
| 3 | Intrusion detection systems (contact detectors, motion sensors, glass break sensors) must be deployed based on the risk assessment |
| 4 | Surveillance material must be recorded and retained in accordance with applicable laws |
| 5 | Routine maintenance and scheduled functional tests of all monitoring systems must be conducted |
| 6 | Clear escalation procedures for security incidents detected by monitoring systems must be established |

When implementing monitoring controls, data protection requirements must be observed; coordination with [Data Protection Officer / HR department] regarding monitored areas and retention periods is required [REF:DG24-PS, Kap. 2.4].

## See also

- CB_POL_L2_01-Access-and-Identity — Physical entry control as part of access management
- CB_POL_L2_10-Human-Resources — Clear desk, workplace rules
- CB_POL_L3_01-User-Handbook — Clear desk, visitor rules

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.009 | 2026-02-11 | CISO | Physical security depth: secure areas (A.7.6), lightning (A.7.8/11), cabling (A.7.12), emergency preparedness (A.7.11), maintenance (A.7.13), disposal markings (A.7.14), alarm documentation, fire protection, disposal methodology, visitor details |
| 00.01.008 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.007 | 2026-02-09 | CISO | Aligned policy hierarchy terminology |
| 00.01.006 | 2026-02-09 | CISO | Infrastructure (A.7.3/5/8/11), monitoring (A.7.4) populated (Batch-D) |
| 00.01.005 | 2026-02-09 | CISO | Summary: 4-element pattern |
| 00.01.004 | 2026-02-09 | CISO | Physical access (A.7.2): personnel, visitors, delivery area, keys (REC-315) |
| 00.01.003 | 2026-02-09 | CISO | Entry (perimeter, A.7.1) and workplace (clear desk/screen, A.7.7) populated (REC-314, 316) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-07 | CISO | Initial version (split from L2_07) |
