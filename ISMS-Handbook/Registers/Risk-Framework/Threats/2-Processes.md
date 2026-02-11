# Processes — Threat Catalogue

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **processes** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) |
|---|---|:---:|---|
| G 0.1 | Fire | No | Primarily physical threat; effective measures at rooms/buildings level (fire protection). Process can only react, not directly control the threat. |
| G 0.2 | Adverse climatic conditions | No | Physical environmental condition; controlled via rooms/buildings/technology, not via the process asset. |
| G 0.3 | Water | No | Physical threat; measures (leak protection, construction/technical provisions) at rooms/buildings level. |
| G 0.4 | Contamination, dust, corrosion | No | Physical impact; primarily addressed at rooms/buildings or physical IT level. |
| G 0.5 | Natural disasters | No | Site/building topic; process cannot directly control the threat (primarily building/BCM/site concepts). |
| G 0.6 | Disasters in the vicinity | No | Surrounding/site risk; controlled primarily via buildings/site/BCM, not via process asset. |
| G 0.7 | Major events in the vicinity | No | Surrounding/site risk; controlled primarily via buildings/site/BCM. |
| G 0.8 | Failure or disruption of power supply | No | Primarily infrastructure/technical (buildings/physical IT). Process can derive requirements but cannot control the supply itself. |
| G 0.9 | Failure or disruption of communication networks | No | Primarily controlled at communication links/IT level (resilience/provider/technology), not at the process asset. |
| G 0.10 | Failure or disruption of supply networks | No | Infrastructure/building topic (e.g. cooling/water); not directly controllable at process level. |
| G 0.11 | Failure or disruption of service providers | **Yes** | |
| G 0.12 | Electromagnetic interference | No | Physical effect; measures via rooms/shielding/physical IT, not via process design. |
| G 0.13 | Interception of compromising emanations | No | Physical emanation/shielding context; primarily rooms/physical IT. |
| G 0.14 | Espionage | No | Primarily information protection (information layer) and technical/organizational measures at information/IT levels; process is not the primary control level. |
| G 0.15 | Eavesdropping | No | Primarily communication links/applications (transport/end-to-end protection); process sets requirements but does not control directly. |
| G 0.16 | Theft of devices, media or documents | No | Physical security (rooms/buildings/physical IT); process is not the primary control level. |
| G 0.17 | Loss of devices, media or documents | No | Physical handling/protection (physical IT/rooms) and information protection; process not primary. |
| G 0.18 | Inadequate planning or lack of adaptation | **Yes** | |
| G 0.19 | Disclosure of sensitive information | No | Primarily information protection (information layer) and implementation in applications/IT; process is not the primary control level. |
| G 0.20 | Information or products from unreliable sources | **Yes** | |
| G 0.21 | Manipulation of hardware or software | No | Primarily supply chain/change/hardening topic at applications/IT systems, not process asset. |
| G 0.22 | Manipulation of information | **Yes** | |
| G 0.23 | Unauthorized access to IT systems | No | Primarily technical defense at applications/IT systems (AuthN/AuthZ, hardening, monitoring). |
| G 0.24 | Destruction of devices or media | No | Physical security/protection (physical IT, rooms, buildings). |
| G 0.25 | Failure of devices or systems | No | Primarily IT operations/architecture (redundancy, maintenance) at IT levels. |
| G 0.26 | Malfunction of devices or systems | No | Primarily IT operations/quality assurance at IT levels. |
| G 0.27 | Resource shortage | **Yes** | |
| G 0.28 | Software vulnerabilities or defects | No | Primarily secure SDLC/patch/vulnerability management at application/IT system level. |
| G 0.29 | Violation of laws or regulations | **Yes** | |
| G 0.30 | Unauthorized use or administration of devices and systems | No | Primarily IAM/IT controls at applications/IT systems; process is not the primary control level. |
| G 0.31 | Incorrect use or administration of devices and systems | **Yes** | |
| G 0.32 | Misuse of privileges | **Yes** | |
| G 0.33 | Staff absence | **Yes** | |
| G 0.34 | Terrorist attack | No | Physical security; measures at buildings/rooms level. |
| G 0.35 | Coercion, extortion or corruption | **Yes** | |
| G 0.36 | Identity theft | **Yes** | |
| G 0.37 | Repudiation of actions | **Yes** | |
| G 0.38 | Misuse of personal data | **Yes** | |
| G 0.39 | Malware | No | Primarily technical defense (endpoint/server, application security, detection/response) at IT levels. |
| G 0.40 | Denial of service | No | Primarily resilience/protection mechanisms at applications/communication links/IT systems. |
| G 0.41 | Sabotage | **Yes** | |
| G 0.42 | Social engineering | **Yes** | |
| G 0.43 | Message injection | No | Primarily technical authenticity/integrity assurance at communication/application level; process is not the primary control level. |
| G 0.44 | Unauthorized entry to premises | No | Access control/physical security at rooms/buildings level. |
| G 0.45 | Data loss | No | Primarily information/IT topic (backups, recovery, data management) at information/IT levels; process not primary. |
| G 0.46 | Loss of integrity of sensitive information | **Yes** | |
| G 0.47 | Harmful side effects of IT-based attacks | No | Primarily technical/operational defense and resilience at applications/IT systems/links. |
