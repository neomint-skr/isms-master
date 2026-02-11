# Communication Links — Threat Catalogue

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **communication links** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) |
|---|---|:---:|---|
| G 0.1 | Fire | No | Physical threat; effective measures primarily at rooms/buildings or physical IT level (cable routing/fire protection), not at the connection as asset. |
| G 0.2 | Adverse climatic conditions | No | Physical environmental condition; controlled via rooms/buildings/physical IT, not via the communication link as logical asset. |
| G 0.3 | Water | No | Physical threat; measures at rooms/buildings level (leak protection) or physical IT, not at the connection itself. |
| G 0.4 | Contamination, dust, corrosion | No | Physical impact; primarily rooms/buildings/physical IT (cables, ports, technical rooms). |
| G 0.5 | Natural disasters | No | Site/building topic; primarily controlled via buildings/site strategy/BCM, not at connection level as primary level. |
| G 0.6 | Disasters in the vicinity | No | Surrounding/site risk; controlled primarily via site/BCM, not connection as primary level. |
| G 0.7 | Major events in the vicinity | No | Surrounding/site risk; controlled primarily via site/BCM. |
| G 0.8 | Failure or disruption of power supply | No | Power supply is a building/physical IT topic; the connection as asset cannot directly control this. |
| G 0.9 | Failure or disruption of communication networks | **Yes** | |
| G 0.10 | Failure or disruption of supply networks | No | Infrastructure/building topic (e.g. cooling); not directly controllable at the connection. |
| G 0.11 | Failure or disruption of service providers | No | Primarily process/provider management; at connection level this is sufficiently covered by G 0.9 (network failure/disruption). |
| G 0.12 | Electromagnetic interference | No | Primarily physical context (shielding/media selection) at rooms/physical IT level; connection as logical asset not primary. |
| G 0.13 | Interception of compromising emanations | No | Physical emanation/shielding context; primarily rooms/physical IT level, not connection as primary level. |
| G 0.14 | Espionage | **Yes** | |
| G 0.15 | Eavesdropping | **Yes** | |
| G 0.16 | Theft of devices, media or documents | No | Physical theft affects devices/media; controlled via rooms/buildings/physical IT. |
| G 0.17 | Loss of devices, media or documents | No | Physical loss affects devices/media; not connection as primary level. |
| G 0.18 | Inadequate planning or lack of adaptation | **Yes** | |
| G 0.19 | Disclosure of sensitive information | **Yes** | |
| G 0.20 | Information or products from unreliable sources | **Yes** | |
| G 0.21 | Manipulation of hardware or software | No | Affects components (router, firewall, VPN gateway, firmware); primarily physical/virtual IT systems, not the connection as asset. |
| G 0.22 | Manipulation of information | **Yes** | |
| G 0.23 | Unauthorized access to IT systems | **Yes** | |
| G 0.24 | Destruction of devices or media | No | Physical destruction affects devices/media; controlled via physical IT/rooms/buildings. |
| G 0.25 | Failure of devices or systems | No | Affects devices/systems; connection failures are addressed as primary topic via G 0.9. |
| G 0.26 | Malfunction of devices or systems | No | Affects devices/systems; connection topics are primarily addressed via G 0.9. |
| G 0.27 | Resource shortage | **Yes** | |
| G 0.28 | Software vulnerabilities or defects | **Yes** | |
| G 0.29 | Violation of laws or regulations | No | Primarily governance/compliance topic; connection is an implementation object, not the primary control level. |
| G 0.30 | Unauthorized use or administration of devices and systems | No | Affects administration of systems/network components; primarily physical/virtual IT systems and IAM. |
| G 0.31 | Incorrect use or administration of devices and systems | No | Affects system operations/administration; primarily physical/virtual IT systems and operational processes. |
| G 0.32 | Misuse of privileges | No | Primarily IAM/applications/IT systems; connection implements requirements but is not the primary control level. |
| G 0.33 | Staff absence | No | Primarily process/BCM topic (deputy arrangements/operations), not connection as asset. |
| G 0.34 | Terrorist attack | No | Physical security; primarily buildings/rooms/site. |
| G 0.35 | Coercion, extortion or corruption | No | Primarily human/organizational threat; controlled via processes/roles/controls. |
| G 0.36 | Identity theft | **Yes** | |
| G 0.37 | Repudiation of actions | **Yes** | |
| G 0.38 | Misuse of personal data | No | Primarily information/application/process level (purpose limitation, access, processing); transport aspects covered by G 0.15/G 0.19. |
| G 0.39 | Malware | No | Primarily applications/IT systems; network/connection aspects are typically addressed via security components (physical/virtual IT), not via the connection as asset. |
| G 0.40 | Denial of service | **Yes** | |
| G 0.41 | Sabotage | **Yes** | |
| G 0.42 | Social engineering | No | Primarily human/process-related (awareness, controls), not connection as asset. |
| G 0.43 | Message injection | **Yes** | |
| G 0.44 | Unauthorized entry to premises | No | Access control/physical protection is at rooms/buildings level. |
| G 0.45 | Data loss | No | Data loss is primarily an information/application/IT topic (backups, replication, recovery); connection concerns transport, not data storage. |
| G 0.46 | Loss of integrity of sensitive information | **Yes** | |
| G 0.47 | Harmful side effects of IT-based attacks | **Yes** | |
