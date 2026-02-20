# Rooms — Vulnerability Catalogue

> Asset-specific vulnerabilities for rooms, zones and physical areas. Each entry pairs with one or more threats from the room-related threat catalogue.

## ROM-01 Room Classification and Governance

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V01 | Room type/security zone not defined (e.g. "office", "technical room", "archive", "server room") and not documented | ORG | C, I, V, SAFETY, COMPL |
| ROM-V02 | No designated room responsible (access, operations, changes, security measures) | ORG | C, I, V, SAFETY |
| ROM-V03 | Contained/assigned assets (IT, media, documents) not systematically mapped to the room | ORG | C, I, V |
| ROM-V04 | Room-specific protection concept missing or outdated (access, environmental, detection, response) | ORG | C, I, V, SAFETY, COMPL |

## ROM-02 Access Control and Zoning

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V05 | Access barriers are insufficient (weak locks, shared keys, uncontrolled key copies) | PHYSSEC | C, I, V |
| ROM-V06 | Access control is not traceable (no badge system / no logging / no evaluation) | PHYSSEC, ORG | AUD |
| ROM-V07 | Visitor/contractor access is unregulated (no escort, no registration, no time limitation) | PHYSSEC, ORG | C, I, V |
| ROM-V08 | No zoning within the room (critical areas/cabinets/racks not separately secured) | PHYSSEC | C, I, V |

## ROM-03 Intrusion Detection and Response

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V09 | No intrusion/opening detection (door/window contacts, alarm forwarding, defined response chain missing) | PHYSSEC | V, SAFETY |
| ROM-V10 | No monitoring/detection of unauthorised activities in the room (e.g. no suitable video/motion detection or no effective evaluation) | PHYSSEC, ORG | C, I, V, AUD |
| ROM-V11 | No monitoring of critical room states (door open, cabinet/rack open, access outside hours) or no alerting | PHYSSEC, ORG | V, AUD |
| ROM-V12 | Response processes not effectively established (who responds when and how; no on-call/escalation path) | ORG | V, SAFETY |

## ROM-04 Fire Protection

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V13 | Fire detection is insufficient (no/unsuitable smoke/heat detectors, no alarm forwarding) | ENV | V, SAFETY |
| ROM-V14 | No automatic or suitable fire suppression (e.g. missing suppression system for critical rooms) | ENV | V, SAFETY |
| ROM-V15 | Manual extinguishing equipment is unsuitable or not maintained (wrong type, no inspection intervals, not available) | ENV | V, SAFETY |
| ROM-V16 | Fire compartment/sealing insufficient (penetrations not sealed, doors/walls not rated, smoke/fire spread facilitated) | ENV | V, SAFETY |
| ROM-V17 | Fire load is unnecessarily high (storage of combustible materials/packaging in the room) | ENV | V, SAFETY |

## ROM-05 Water, Climate and Dust

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V18 | No water/leakage detection in relevant areas (e.g. under raised floor, near pipe routes) | ENV | V |
| ROM-V19 | Water/condensation risks not addressed structurally/technically (pipes above critical assets, missing drip trays/shielding) | ENV | V |
| ROM-V20 | Climate/temperature monitoring missing or not alarmed (hotspots, overtemperature remains undetected) | ENV | V |
| ROM-V21 | Humidity/conditioning control is insufficient (ESD/corrosion/condensation risks) | ENV | V |
| ROM-V22 | Dust/particle management insufficient (no suitable filters/airlocks/cleaning rules for sensitive rooms) | ENV | V |

## ROM-06 Electromagnetic and Acoustic Exposure

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V23 | EMC/equipotential bonding/cable routing insufficient (susceptibility to interference/malfunctions facilitated) | ENV | V |
| ROM-V24 | No measures against compromising emanation/shielding requirements (missing zoning, missing shielding in sensitive rooms) | ENV | C |
| ROM-V25 | Uncontrolled radio/transmitting sources in the room (e.g. private hotspots, unauthorised radio equipment) without regulation/detection | ORG, ENV | C, I |
| ROM-V26 | Conversations/meetings in sensitive rooms are not acoustically protected (soundproofing/distance/rules missing — eavesdropping facilitated) | PHYSSEC | C |
| ROM-V27 | Visual shielding missing (windows/glass surfaces/arrangement allow line of sight to documents/displays/whiteboards) | PHYSSEC | C, PRIV |

## ROM-07 Secure Storage and Information Exposure

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V28 | No lockable storage for sensitive documents/media in the room (cabinets/safes missing or unsuitable) | PHYSSEC | C, PRIV, V |
| ROM-V29 | Output/print/scan areas are unprotected (output trays freely accessible, pull printing missing — disclosure/theft) | PHYSSEC, ORG | C, PRIV |
| ROM-V30 | Temporary information remnants are not controlled (whiteboards, flipcharts, sticky notes, drafts remain openly visible) | PHYSSEC, ORG | C, PRIV |
| ROM-V31 | Secure disposal not possible in the room (no shredder/security container; interim storage insecure) | PHYSSEC, ORG | C, PRIV |
| ROM-V32 | No defined rules/mechanisms for handling abandoned media/documents (lost-and-found without process — manipulation/disclosure possible) | ORG | C, I, PRIV, AUD |

## ROM-08 Tamper, Maintenance and Sabotage Control

| ID | Vulnerability | Domain | Aspects |
|---|---|---|---|
| ROM-V33 | Contractor/maintenance access without control (no escort, no time windows, no activity approvals) | SUP, PHYSSEC | I, V, AUD |
| ROM-V34 | No tamper-evident indicators on racks/cabinets/cabling (undetected changes possible) | PHYSSEC | I, AUD |
| ROM-V35 | Physical changes (patching/re-cabling/relocating) not traceably documented (no change log, no approvals) | ORG | I, AUD |
| ROM-V36 | Connection/introduction points for unauthorised devices not controlled (open network ports, open consoles, freely accessible patch panels) | PHYSSEC, CYBER | C, I, V |
| ROM-V37 | Equipment not secured against removal/destruction (racks not locked/anchored; protection against vandalism missing) | PHYSSEC | V, SAFETY |
