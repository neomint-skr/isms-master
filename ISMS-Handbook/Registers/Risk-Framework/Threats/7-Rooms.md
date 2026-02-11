# Rooms — Threat Catalogue

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **rooms** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) |
|---|---|:---:|---|
| G 0.1 | Fire | **Yes** | |
| G 0.2 | Adverse climatic conditions | **Yes** | |
| G 0.3 | Water | **Yes** | |
| G 0.4 | Contamination, dust, corrosion | **Yes** | |
| G 0.5 | Natural disasters | No | Primarily site/building level (structural design, site selection, BCM/georedundancy); a room cannot directly control this threat effectively. |
| G 0.6 | Disasters in the vicinity | No | Surrounding/site risk; controlled primarily via site/building/BCM measures, not via the individual room. |
| G 0.7 | Major events in the vicinity | No | Surrounding/site risk; controlled primarily via site/building/BCM planning. |
| G 0.8 | Failure or disruption of power supply | No | Primarily building/infrastructure/supply topic (power feed, UPS/generator, electrical distribution); not at the room as primary level. |
| G 0.9 | Failure or disruption of communication networks | No | Primarily communication links/network architecture/provider; room is not the primary control level for network availability. |
| G 0.10 | Failure or disruption of supply networks | No | Primarily building/infrastructure topic (e.g. cooling, water, heating); not at the room as primary level. |
| G 0.11 | Failure or disruption of service providers | No | Primarily process/provider management (SLA, contingency concepts); room is not the primary control level. |
| G 0.12 | Electromagnetic interference | **Yes** | |
| G 0.13 | Interception of compromising emanations | **Yes** | |
| G 0.14 | Espionage | **Yes** | |
| G 0.15 | Eavesdropping | **Yes** | |
| G 0.16 | Theft of devices, media or documents | **Yes** | |
| G 0.17 | Loss of devices, media or documents | No | Loss is primarily controlled through handling/operational processes and device/media management, not through the room as primary level. |
| G 0.18 | Inadequate planning or lack of adaptation | **Yes** | |
| G 0.19 | Disclosure of sensitive information | **Yes** | |
| G 0.20 | Information or products from unreliable sources | No | Supply chain/procurement/process topic; room is not the primary control level. |
| G 0.21 | Manipulation of hardware or software | **Yes** | |
| G 0.22 | Manipulation of information | **Yes** | |
| G 0.23 | Unauthorized access to IT systems | No | Cyber intrusion is primarily controlled at application/IT system/IAM level; room addresses physical accessibility, not system access. |
| G 0.24 | Destruction of devices or media | **Yes** | |
| G 0.25 | Failure of devices or systems | No | Primarily IT system/operations/architecture topic; room-related causes are already addressed via environmental threats (G 0.1–0.4, G 0.12). |
| G 0.26 | Malfunction of devices or systems | No | Primarily IT system/operations/quality topic; room-related causes are covered via environmental threats. |
| G 0.27 | Resource shortage | No | Resource shortage (IT/personnel/budget) is primarily controlled organizationally/technically; room is not the primary level. |
| G 0.28 | Software vulnerabilities or defects | No | Primarily application/IT system (secure SDLC, patch/vulnerability management); room is not the control level. |
| G 0.29 | Violation of laws or regulations | No | Primarily governance/compliance/processes; room is not the primary control level. |
| G 0.30 | Unauthorized use or administration of devices and systems | No | Primarily IAM/IT system/application controls; room is not the primary control level. |
| G 0.31 | Incorrect use or administration of devices and systems | No | Primarily operational/administration processes and IT system controls; room is not the primary control level. |
| G 0.32 | Misuse of privileges | No | Primarily IAM/processes/applications; room is not the primary control level. |
| G 0.33 | Staff absence | No | Primarily process/BCM topic (deputy arrangements, capacity); room is not the control level. |
| G 0.34 | Terrorist attack | **Yes** | |
| G 0.35 | Coercion, extortion or corruption | No | Primarily human/organizational threat; controlled via processes, roles, controls, not via the room as primary level. |
| G 0.36 | Identity theft | No | Primarily IAM/processes/applications; room can support (access control) but is not the primary control level for identities. |
| G 0.37 | Repudiation of actions | No | Primarily controlled through logging/traceability at process/application/system level; room is not the primary level. |
| G 0.38 | Misuse of personal data | No | Primarily information/process/application (access, purpose limitation, processing); room is not the primary control level. |
| G 0.39 | Malware | No | Primarily application/IT system (protection, hardening, detection/response); room is not the control level. |
| G 0.40 | Denial of service | No | Primarily applications/communication links/IT systems (resilience, protection mechanisms); room is not the primary level. |
| G 0.41 | Sabotage | **Yes** | |
| G 0.42 | Social engineering | No | Primarily human/process-related (awareness, control mechanisms); room is not the primary control level. |
| G 0.43 | Message injection | No | Primarily communication/application level (authenticity/integrity); room is not the control level. |
| G 0.44 | Unauthorized entry to premises | **Yes** | |
| G 0.45 | Data loss | No | Primarily information/IT systems (backups, replication, recovery); room is not the primary level. |
| G 0.46 | Loss of integrity of sensitive information | No | Primarily information/application/IT system (integrity mechanisms, versioning, access controls); room is not the primary level. |
| G 0.47 | Harmful side effects of IT-based attacks | No | Primarily application/IT system/communication (resilience, hardening, response); room is not the control level. |
