# Scenario Library (LRM-44)

## Purpose

This library provides reusable risk scenarios to keep workshops lean and comparable. For each scope unit, select the material scenarios and add local scenarios only if needed.

## Format

For each scenario:
- SCN-ID
- Risk scenario (one sentence)
- Typical CIA focus
- Typical control references (Annex A and/or internal)
- Notes / triggers

## Scenarios (starter set)

### SCN-001 — Phishing → account takeover
- Scenario: If an attacker obtains valid user credentials through phishing, they can access systems and data with the user’s privileges.
- CIA: C/I
- Typical controls: [Annex A refs], [SM-IDs]
- Notes: Prioritize if user base is large or remote work is common.

### SCN-002 — Ransomware impacts critical data
- Scenario: If ransomware encrypts critical data or systems, operations can be disrupted and data integrity may be compromised.
- CIA: A/I
- Typical controls: [Annex A refs], [SM-IDs]
- Notes: Prioritize where backup/restore maturity is low.

### SCN-003 — Misconfiguration exposes data
- Scenario: If a misconfiguration exposes data or services, unauthorized parties may access confidential information.
- CIA: C
- Typical controls: [Annex A refs], [SM-IDs]
- Notes: Prioritize for cloud and rapidly changing environments.

(Extend this library to your typical 15–25 scenarios.)
