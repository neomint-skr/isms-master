# Information — Threat Catalogue

> Supplementary catalogue. Information types are modelled as an attribute of business processes (see 1-Processes). This catalogue is retained for ISO A.5.9 conformity and for threats specific to information handling (classification, labelling, transfer).

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **information** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) | Domain | Aspects |
|---|---|:---:|---|---|---|
| G 0.1 | Fire | No | Physical threat; controlled at rooms/buildings level (fire protection), not at the information asset. | | |
| G 0.2 | Adverse climatic conditions | No | Physical environmental condition; controlled via rooms/buildings (climate, construction, technology). | | |
| G 0.3 | Water | No | Physical threat; controlled via rooms/buildings (leak protection), not at the information asset. | | |
| G 0.4 | Contamination, dust, corrosion | No | Physical impact; measures at rooms/buildings or physical IT level, not at the information asset. | | |
| G 0.5 | Natural disasters | No | Site/building risk; controlled via buildings/site/BCM strategy, not at information level. | | |
| G 0.6 | Disasters in the vicinity | No | Surrounding/site risk; controlled via buildings/site/BCM, not at information level. | | |
| G 0.7 | Major events in the vicinity | No | Surrounding/site risk; controlled via buildings/site/BCM, not at information level. | | |
| G 0.8 | Failure or disruption of power supply | No | Infrastructure/site risk; controlled via buildings/physical IT/BCM, not at information level. | | |
| G 0.9 | Failure or disruption of communication networks | No | Primarily controlled at communication links/IT level; information level not directly affected. | | |
| G 0.10 | Failure or disruption of supply networks | No | Building/site risk (e.g. cooling, water); not directly controllable at information level. | | |
| G 0.11 | Failure or disruption of service providers | No | Supplier/operations risk; controlled via processes (provider/SLA/BCM management). | | |
| G 0.12 | Electromagnetic interference | No | Physical effect; controlled via rooms/shielding/physical IT, not at information level. | | |
| G 0.13 | Interception of compromising emanations | No | Physical emanation/shielding context; primarily rooms/physical IT. | | |
| G 0.14 | Espionage | **Yes** | | HUMAN, CYBER | C, PRIV |
| G 0.15 | Eavesdropping | No | Primarily controlled at communication links/applications level (transport security). | | |
| G 0.16 | Theft of devices, media or documents | No | Physical theft; primarily rooms/buildings/physical IT (access control/protection). | | |
| G 0.17 | Loss of devices, media or documents | No | Physical loss; primarily processes (handling) and physical IT/rooms. | | |
| G 0.18 | Inadequate planning or lack of adaptation | No | Management/architecture risk; primarily processes/applications/IT planning. | | |
| G 0.19 | Disclosure of sensitive information | **Yes** | | ORG, CYBER | C, PRIV |
| G 0.20 | Information or products from unreliable sources | **Yes** | | SUP | PROV, I |
| G 0.21 | Manipulation of hardware or software | No | Primarily controlled at applications/IT systems level (supply chain, hardening, changes). | | |
| G 0.22 | Manipulation of information | **Yes** | | CYBER, HUMAN | I |
| G 0.23 | Unauthorized access to IT systems | No | Primarily IT systems/applications (access control, hardening, monitoring). | | |
| G 0.24 | Destruction of devices or media | No | Physical destruction; primarily physical IT/rooms/buildings. | | |
| G 0.25 | Failure of devices or systems | No | Primarily IT systems (redundancy, operations, maintenance). | | |
| G 0.26 | Malfunction of devices or systems | No | Primarily IT systems (quality, operations, monitoring). | | |
| G 0.27 | Resource shortage | No | Primarily operations/IT/processes (capacity management), not information level. | | |
| G 0.28 | Software vulnerabilities or defects | No | Primarily applications/IT systems (patch/vulnerability management, secure SDLC). | | |
| G 0.29 | Violation of laws or regulations | No | Primarily governance/processes/compliance; information is the object, control is organizational. | | |
| G 0.30 | Unauthorized use or administration of devices and systems | No | Primarily IT systems/identities (permissions, admin controls). | | |
| G 0.31 | Incorrect use or administration of devices and systems | No | Primarily processes/IT operations (operating procedures, four-eyes principle). | | |
| G 0.32 | Misuse of privileges | No | Primarily identity/permission management and applications/IT systems. | | |
| G 0.33 | Staff absence | No | Primarily processes/BCM (deputy arrangements, capacity, skills). | | |
| G 0.34 | Terrorist attack | No | Physical security; primarily buildings/rooms (protection concepts). | | |
| G 0.35 | Coercion, extortion or corruption | No | Primarily organizational/personnel/process measures; not information level. | | |
| G 0.36 | Identity theft | No | Primarily identities/processes/applications (AuthN/AuthZ, IAM). | | |
| G 0.37 | Repudiation of actions | **Yes** | | CYBER | AUD |
| G 0.38 | Misuse of personal data | **Yes** | | HUMAN, CYBER | PRIV, C |
| G 0.39 | Malware | No | Primarily applications/IT systems (protection software, hardening, detection/response). | | |
| G 0.40 | Denial of service | No | Primarily applications/communication links/IT (resilience, protection mechanisms). | | |
| G 0.41 | Sabotage | No | Primarily processes/IT/physical security (controls, monitoring, access). | | |
| G 0.42 | Social engineering | No | Primarily processes/organization (awareness, control mechanisms), not information level. | | |
| G 0.43 | Message injection | No | Primarily communication links/applications (authenticity/integrity in transport). | | |
| G 0.44 | Unauthorized entry to premises | No | Primarily rooms/buildings (access control). | | |
| G 0.45 | Data loss | **Yes** | | CYBER | V |
| G 0.46 | Loss of integrity of sensitive information | **Yes** | | CYBER | I |
| G 0.47 | Harmful side effects of IT-based attacks | No | Primarily applications/IT systems/links (side effects in operations/attack scenarios). | | |
