# Buildings — Vulnerability Catalogue

> Asset-specific vulnerabilities for the **buildings** asset class, grouped by control domain.
> Vulnerability IDs: BLD-V01–BLD-V45. Domain and aspect tags enable cross-referencing with the threat catalogue.

## BLD-01 Building Classification and Governance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V01 | Building classification/security level not defined (e.g. standard vs. elevated protection object) and not documented | ORG | C, I, V, SAFETY, COMPL |
| BLD-V02 | No designated building responsible (security, operations, changes, emergency coordination) | ORG | C, I, V, SAFETY |
| BLD-V03 | Critical areas/rooms and their protection requirements not anchored in the building protection concept | ORG | C, I, V |
| BLD-V04 | Building security and operations concept outdated or missing (access, supply, detection, response) | ORG | C, I, V, SAFETY, COMPL |
| BLD-V05 | Interfaces to external parties (landlord, security, fire brigade, facility management, provider) not clearly regulated | ORG, SUP | V, SAFETY, AUD |

## BLD-02 Location and External Environment

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V06 | Site/environmental risks not assessed or not translated into protective measures (flooding, storm, earthquake, industrial surroundings) | ENV, ORG | V, SAFETY |
| BLD-V07 | Flood/high-water protection insufficient (no barriers, missing backflow preventers, critical infrastructure in basement) | ENV | V, SAFETY |
| BLD-V08 | Storm/snow/extreme weather protection insufficient (building envelope, roof, emergency access routes) | ENV | V, SAFETY |
| BLD-V09 | Single-site dependency without fallback strategy/geo-redundancy for critical functions | ORG | V |
| BLD-V10 | Measures for large-scale events in the surroundings (access restriction, evacuation, alternative delivery) missing | ENV, ORG | V, SAFETY |

## BLD-03 Fire Protection and Compartmentation

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V11 | Fire detection system missing/inadequate or without connection to monitoring centre/regular testing | ENV | V, SAFETY |
| BLD-V12 | No automatic suppression system for critical building sections (where required), or insufficient suppression zones | ENV | V, SAFETY |
| BLD-V13 | Fire compartments/fire doors/penetration seals insufficient or not maintained | ENV | V, SAFETY |
| BLD-V14 | Smoke extraction/ventilation insufficient or not maintainable | ENV | SAFETY, V |
| BLD-V15 | Fire protection policy/alarm and evacuation procedures missing or not exercised | ORG, ENV | SAFETY, V |

## BLD-04 Water, Climate, Dust and Building Envelope

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V16 | Leakage/water detection in the building insufficient (technical rooms, cable routes, raised floors) | ENV | V |
| BLD-V17 | Piping routed above critical areas without protection (no drip trays/shielding/rules) | ENV | V |
| BLD-V18 | HVAC supply not sufficiently redundant or not monitored (failure leads to critical temperatures) | INFRA, ENV | V |
| BLD-V19 | Building envelope insufficient (moisture ingress, draughts/temperature instability, dust) | ENV | V |
| BLD-V20 | Cleaning/dust management for sensitive areas not regulated (ingress via construction sites/deliveries) | ENV, ORG | V |

## BLD-05 Power and Utilities Resilience

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V21 | No redundant power feed or no separate supply for critical building sections | INFRA | V |
| BLD-V22 | UPS/generator capacity insufficient or not regularly tested (start, load, runtime) | INFRA | V |
| BLD-V23 | Critical electrical distributions not protected/monitored (single points of failure, fire load, missing monitoring) | INFRA | V, SAFETY |
| BLD-V24 | Cooling/HVAC supply not secured (refrigerant, water, emergency operation, switchover) | INFRA | V |
| BLD-V25 | Emergency operation/black-start procedures missing (sequence, responsibilities, communication paths) | ORG, INFRA | V |

## BLD-06 Physical Security Perimeter and Access

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V26 | Perimeter protection insufficient (fence, gates, lighting, sight lines) | PHYSSEC | C, V, SAFETY |
| BLD-V27 | Access control insufficient or not zoned (all areas equal; no secured core zones) | PHYSSEC | C, I, V, SAFETY |
| BLD-V28 | Key/badge management insufficient (issuance/revocation/loss not controlled, no recertification) | ORG, PHYSSEC | C, V, AUD |
| BLD-V29 | Visitor/contractor processes insufficient (registration, escort, time limitation missing) | ORG, PHYSSEC | C, I, V |
| BLD-V30 | Intrusion detection/alarm forwarding/response chain insufficient (detection present but no effective response) | PHYSSEC, ORG | V, SAFETY |

## BLD-07 Surveillance, Insider and Information Exposure

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V31 | Visual shielding against external line-of-sight missing (window fronts, placement of whiteboards/workstations) | PHYSSEC | C, PRIV |
| BLD-V32 | Acoustic shielding missing in sensitive areas (conversations/calls susceptible to eavesdropping) | PHYSSEC | C |
| BLD-V33 | Espionage/insider-access protection not translated into security concept (e.g. zones, escort, clean desk in sensitive areas) | ORG, PHYSSEC | C, PRIV |
| BLD-V34 | Secure storage/disposal of documents/media not ensured in the building (collection containers, secure disposal chain) | PHYSSEC, ORG | C, PRIV |
| BLD-V35 | Construction/renovation works carried out without security controls (access, materials, temporary openings) | SUP, ORG | C, I, V, SAFETY |

## BLD-08 Tamper, Sabotage and Attack Preparedness

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V36 | Tamper protection for critical building systems missing (distribution boards, HVAC, access control, BMS) | PHYSSEC, INFRA | I, V, SAFETY |
| BLD-V37 | No defined response to sabotage (building systems/supply/access) including escalation paths | ORG | V, SAFETY |
| BLD-V38 | Attack protection not assessed/designed (risk-adequate measures, cooperation with authorities) | PHYSSEC | SAFETY, V |
| BLD-V39 | Emergency communication within the building not robust (telephone/mobile failure; no alternatives) | ORG, INFRA | V, SAFETY |
| BLD-V40 | Evacuation/shelter concepts missing or not exercised (people safety, continuity) | ORG | SAFETY, V |

## BLD-09 Electromagnetic and Technical Exposure

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| BLD-V41 | EMC/equipotential bonding/cable routing building-side insufficient (susceptibility to interference, malfunctions) | ENV | V |
| BLD-V42 | No zoning/shielding against compromising emanations in sensitive areas | ENV | C |
| BLD-V43 | Uncontrolled radio/transmitting sources in the building (policies/detection missing) | ORG, ENV | C, I |
| BLD-V44 | Building management system (BMS)/building automation not secured (accessible/manipulable) | CYBER, INFRA | I, V |
| BLD-V45 | Technical interfaces to service providers/remote maintenance not controlled (access, approvals, logging) | SUP, CYBER | I, V, AUD |
