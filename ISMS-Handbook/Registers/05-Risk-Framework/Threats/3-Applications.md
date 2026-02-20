# Applications — Threat Catalogue

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **applications** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) | Domain | Aspects |
|---|---|:---:|---|---|---|
| G 0.1 | Fire | No | Physical threat; primarily controlled at rooms/buildings level (fire protection), not at the application. | | |
| G 0.2 | Adverse climatic conditions | No | Physical environmental condition; controlled via rooms/buildings/technology, not via the application. | | |
| G 0.3 | Water | No | Physical threat; measures at rooms/buildings or physical IT level, not at the application. | | |
| G 0.4 | Contamination, dust, corrosion | No | Physical impact; controlled via rooms/buildings/physical IT, not at the application. | | |
| G 0.5 | Natural disasters | No | Site/building topic; controlled via buildings/site/BCM, not via the application. | | |
| G 0.6 | Disasters in the vicinity | No | Surrounding/site risk; controlled primarily via buildings/site/BCM. | | |
| G 0.7 | Major events in the vicinity | No | Surrounding/site risk; controlled primarily via buildings/site/BCM. | | |
| G 0.8 | Failure or disruption of power supply | No | Infrastructure/site risk; controlled primarily via buildings/physical IT/BCM, not at the application. | | |
| G 0.9 | Failure or disruption of communication networks | No | Primarily controlled at communication links/IT systems level (network resilience, provider, redundancy); application is not the primary control level. | | |
| G 0.10 | Failure or disruption of supply networks | No | Infrastructure/building topic (e.g. cooling/water); not directly controllable at the application. | | |
| G 0.11 | Failure or disruption of service providers | No | Primarily process/provider management (SLA, contingency concepts) and architecture decisions; not an application control in the narrower sense. | | |
| G 0.12 | Electromagnetic interference | No | Physical effect; controlled via rooms/shielding/physical IT. | | |
| G 0.13 | Interception of compromising emanations | No | Physical emanation/shielding context; primarily rooms/physical IT. | | |
| G 0.14 | Espionage | **Yes** | | HUMAN, CYBER | C, PRIV |
| G 0.15 | Eavesdropping | **Yes** | | COMM | C |
| G 0.16 | Theft of devices, media or documents | No | Physical threat; controlled via rooms/buildings/physical IT. | | |
| G 0.17 | Loss of devices, media or documents | No | Physical loss; controlled via physical IT/rooms and organizational handling processes. | | |
| G 0.18 | Inadequate planning or lack of adaptation | **Yes** | | ORG | C, I, V |
| G 0.19 | Disclosure of sensitive information | **Yes** | | ORG, CYBER | C, PRIV |
| G 0.20 | Information or products from unreliable sources | **Yes** | | SUP | PROV, I |
| G 0.21 | Manipulation of hardware or software | **Yes** | | SUP, CYBER | I |
| G 0.22 | Manipulation of information | **Yes** | | CYBER, HUMAN | I |
| G 0.23 | Unauthorized access to IT systems | **Yes** | | CYBER | C, I, V |
| G 0.24 | Destruction of devices or media | No | Physical destruction; controlled via physical IT/rooms/buildings. | | |
| G 0.25 | Failure of devices or systems | No | Primarily IT systems/architecture/operations (redundancy, maintenance); application is not the primary control level. | | |
| G 0.26 | Malfunction of devices or systems | No | Primarily IT systems/operations/quality assurance; application is not the primary control level. | | |
| G 0.27 | Resource shortage | **Yes** | | ORG | V |
| G 0.28 | Software vulnerabilities or defects | **Yes** | | CYBER | C, I, V |
| G 0.29 | Violation of laws or regulations | **Yes** | | ORG | COMPL |
| G 0.30 | Unauthorized use or administration of devices and systems | **Yes** | | CYBER | C, I, V, AUD |
| G 0.31 | Incorrect use or administration of devices and systems | **Yes** | | HUMAN, ORG | C, I, V |
| G 0.32 | Misuse of privileges | **Yes** | | HUMAN, CYBER | C, I, V, AUD |
| G 0.33 | Staff absence | No | Personnel availability/deputy arrangements is primarily a process/BCM topic, not directly controllable at the application. | | |
| G 0.34 | Terrorist attack | No | Physical security; controlled via buildings/rooms. | | |
| G 0.35 | Coercion, extortion or corruption | No | Primarily human/organizational threat; controlled via processes, role models and controls, not via the application as primary level. | | |
| G 0.36 | Identity theft | **Yes** | | HUMAN, CYBER | C, I, AUD |
| G 0.37 | Repudiation of actions | **Yes** | | CYBER | AUD |
| G 0.38 | Misuse of personal data | **Yes** | | HUMAN, CYBER | PRIV, C |
| G 0.39 | Malware | **Yes** | | CYBER | C, I, V |
| G 0.40 | Denial of service | **Yes** | | COMM, CYBER | V |
| G 0.41 | Sabotage | **Yes** | | HUMAN, CYBER | V, I |
| G 0.42 | Social engineering | No | Primarily human/process-related (awareness, control mechanisms); application is not the primary control level. | | |
| G 0.43 | Message injection | **Yes** | | COMM, CYBER | AUTH, I, C |
| G 0.44 | Unauthorized entry to premises | No | Access control/physical security at rooms/buildings level. | | |
| G 0.45 | Data loss | **Yes** | | CYBER | V |
| G 0.46 | Loss of integrity of sensitive information | **Yes** | | CYBER | I |
| G 0.47 | Harmful side effects of IT-based attacks | **Yes** | | CYBER | C, I, V |
