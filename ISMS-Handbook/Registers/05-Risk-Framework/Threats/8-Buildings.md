# Buildings — Threat Catalogue

> BSI elementary threats (G 0.1–G 0.47) assessed for relevance to the **buildings** asset class.
> Methodology: [REF:BSI17, Ch. 8]. Only threats with direct control relevance at this asset layer are marked as relevant.

| ID | Threat | Relevant | Justification (if not relevant) | Domain | Aspects |
|---|---|:---:|---|---|---|
| G 0.1 | Fire | **Yes** | | ENV | SAFETY, V |
| G 0.2 | Adverse climatic conditions | **Yes** | | ENV | V |
| G 0.3 | Water | **Yes** | | ENV | V |
| G 0.4 | Contamination, dust, corrosion | **Yes** | | ENV | V |
| G 0.5 | Natural disasters | **Yes** | | ENV | SAFETY, V |
| G 0.6 | Disasters in the vicinity | **Yes** | | ENV | SAFETY, V |
| G 0.7 | Major events in the vicinity | **Yes** | | ENV | SAFETY, V |
| G 0.8 | Failure or disruption of power supply | **Yes** | | INFRA | V |
| G 0.9 | Failure or disruption of communication networks | No | Primarily communication links/provider/network architecture; building can support cable routing/redundancy but does not control the communication link as primary asset. | | |
| G 0.10 | Failure or disruption of supply networks | **Yes** | | INFRA | V |
| G 0.11 | Failure or disruption of service providers | No | Primarily process/provider management (SLA, contingency concepts, replacement); building is not the primary control level. | | |
| G 0.12 | Electromagnetic interference | **Yes** | | ENV | V |
| G 0.13 | Interception of compromising emanations | **Yes** | | ENV | C |
| G 0.14 | Espionage | **Yes** | | HUMAN, CYBER | C, PRIV |
| G 0.15 | Eavesdropping | **Yes** | | COMM | C |
| G 0.16 | Theft of devices, media or documents | **Yes** | | PHYSSEC | C, V, PRIV |
| G 0.17 | Loss of devices, media or documents | No | Loss is primarily controlled through handling/operational processes and device/media management; building is not the primary level. | | |
| G 0.18 | Inadequate planning or lack of adaptation | **Yes** | | ORG | C, I, V |
| G 0.19 | Disclosure of sensitive information | **Yes** | | ORG, CYBER | C, PRIV |
| G 0.20 | Information or products from unreliable sources | No | Supply chain/procurement/process topic; building is not the primary control level. | | |
| G 0.21 | Manipulation of hardware or software | **Yes** | | SUP, CYBER | I |
| G 0.22 | Manipulation of information | **Yes** | | CYBER, HUMAN | I |
| G 0.23 | Unauthorized access to IT systems | No | Cyber intrusion is primarily controlled at application/IT system/IAM level; building addresses physical access, not system access. | | |
| G 0.24 | Destruction of devices or media | **Yes** | | PHYSSEC | V, SAFETY |
| G 0.25 | Failure of devices or systems | No | Primarily IT system/operations/architecture topic; building-related causes are already covered via environmental/supply threats (G 0.1–0.4, G 0.8, G 0.10). | | |
| G 0.26 | Malfunction of devices or systems | No | Primarily IT system/operations/quality topic; building-related causes are covered via environmental/supply threats. | | |
| G 0.27 | Resource shortage | No | Resource shortage (IT/personnel/budget) is primarily organizational; building is not the control level. | | |
| G 0.28 | Software vulnerabilities or defects | No | Primarily application/IT system (secure SDLC, patch/vulnerability management); building is not the control level. | | |
| G 0.29 | Violation of laws or regulations | No | Primarily governance/compliance/processes; building can implement requirements but is not the primary control level. | | |
| G 0.30 | Unauthorized use or administration of devices and systems | No | Primarily IAM/IT system/application controls; building is not the control level. | | |
| G 0.31 | Incorrect use or administration of devices and systems | No | Primarily operational/administration processes; building is not the control level. | | |
| G 0.32 | Misuse of privileges | No | Primarily IAM/processes/applications; building is not the control level. | | |
| G 0.33 | Staff absence | No | Primarily process/BCM topic; building is not the control level. | | |
| G 0.34 | Terrorist attack | **Yes** | | PHYSSEC | SAFETY, V |
| G 0.35 | Coercion, extortion or corruption | No | Primarily human/organizational threat; controlled via processes, roles, controls, not building as primary level. | | |
| G 0.36 | Identity theft | No | Primarily IAM/processes/applications; building can control access but not identities as primary asset. | | |
| G 0.37 | Repudiation of actions | No | Primarily traceability/logging at process/application/system level; building is not the primary level. | | |
| G 0.38 | Misuse of personal data | No | Primarily information/process/application; building is not the primary control level. | | |
| G 0.39 | Malware | No | Primarily application/IT system; building is not the control level. | | |
| G 0.40 | Denial of service | No | Primarily applications/communication links/IT systems; building is not the primary control level. | | |
| G 0.41 | Sabotage | **Yes** | | HUMAN, CYBER | V, I |
| G 0.42 | Social engineering | No | Primarily human/process-related; building is not the control level. | | |
| G 0.43 | Message injection | No | Primarily communication/application level; building is not the control level. | | |
| G 0.44 | Unauthorized entry to premises | **Yes** | | PHYSSEC | C, V, SAFETY |
| G 0.45 | Data loss | No | Primarily information/IT systems; building is not the primary level. | | |
| G 0.46 | Loss of integrity of sensitive information | No | Primarily information/application/IT system; building is not the primary level. | | |
| G 0.47 | Harmful side effects of IT-based attacks | No | Primarily application/IT system/communication; building is not the control level. | | |
