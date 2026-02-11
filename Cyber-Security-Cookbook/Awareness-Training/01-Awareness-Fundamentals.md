> **Document ID:** CB_AWR_01-Awareness-Fundamentals
> **Version:** 00.01.006
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** A.5.17, A.6.3, A.6.8
> **Last modified:** 2026-02-11
> **Approval:** —
> **Review cycle:** Annual

---

# Awareness Fundamentals

## Summary

Phishing, weak passwords, and unreported incidents cause most security breaches. This guide teaches you to spot threats, protect your accounts, and report incidents. Your security awareness directly protects the organization's information assets. Without this knowledge, everyday mistakes quickly become serious security incidents.

## Objective and Scope

**Objective:** Technical controls are only effective when employees can recognise the most common threats and respond appropriately. Without a fundamental security awareness, phishing, weak passwords, and delayed incident reporting become the greatest risk factor.

This document conveys the essential IS fundamentals — top risks, phishing recognition, password hygiene, and correct incident reporting. It forms the content foundation for the awareness programme of [Organization].

The contents support the requirements from CB_POL_L2_10 (Human Resources, awareness section). They are delivered through regular training sessions and communicated to new employees via CB_AWR_02 (Onboarding).

**Scope:** All employees and external personnel. Foundational training at onboarding, annual refresher.

## Awareness Programme

The awareness programme of the organization shall cover the following aspects (addresses A.6.3):

1. **Top management commitment to IS:** Communicating the importance of effective IS management by top management
2. **Compliance:** Familiarity with applicable regulations and obligations in the area of IS and their observance
3. **Personal accountability:** Responsibility for one's own actions and omissions and general responsibility for safeguarding information
4. **Fundamental procedures:** Basic IS controls (password hygiene, phishing recognition, clear desk, incident reporting)
5. **Points of contact:** Resources for additional information and guidance on IS matters

Awareness activities are delivered through physical or virtual channels: campaigns, newsletters, briefings, e-learning modules, emails.

## Top Risks

The organization faces daily risks that may compromise confidentiality, availability, or integrity of information. The most common security events (addresses A.6.3, A.6.8):

| Event type | Description |
|---|---|
| **Phishing attacks** | Attempt to obtain sensitive information such as passwords or financial data through forged emails, websites, or messages |
| **Ransomware attacks** | Malware is installed that encrypts data or locks systems. Attackers demand ransom for release |
| **Data leaks** | Confidential information is inadvertently disclosed or stolen due to errors or vulnerabilities |
| **Insider threats** | Individuals within the organization with access to sensitive information misuse or disclose information — intentionally or unintentionally |
| **DDoS attacks** | Servers or networks are overwhelmed with a flood of internet traffic, causing them to become unavailable |
| **Digital or physical access violations** | Use of access by unauthorized persons — digital (e.g., shared passwords) or physical (e.g., unauthorized open door) |

**Reporting obligation:** Report suspicious activities immediately through the defined reporting channels without opening attachments or clicking links.

## Phishing

Phishing is the most common attack method targeting employees (addresses A.6.3). Attackers send forged emails, messages, or links to steal your credentials.

### How to spot phishing

Watch for these warning signs:

- **Wrong sender address** — Display name looks correct, but the email domain is off.
- **Urgency or threats** — "Act now or your account will be locked."
- **Suspicious links** — Hover before clicking. The URL does not match the sender.
- **Unexpected attachments** — You did not request any file.
- **Generic greeting** — "Dear Customer" instead of your name.
- **Poor language** — Typos and odd phrasing in an official-looking message.

### What to do

- Never click links or open attachments in suspicious messages.
- Never enter credentials on unfamiliar websites.
- Report the message via [reporting channel, e.g. phishing button in email client].
- Already clicked or entered data? Contact [IT support / IS-Coordinator] immediately.
- Forward the original message as attachment, then delete it.

## Password Hygiene

Strong passwords and multi-factor authentication protect your accounts (addresses A.5.17). Follow these rules to keep credentials safe.

### Password rules

- Use at least [12 | 16 characters — depending on risk classification].
- Combine upper case, lower case, numbers, and special characters.
- Never reuse passwords across different accounts.
- Use a [password manager, e.g. Bitwarden / 1Password] to generate and store passwords.
- Change your password immediately if a breach is suspected.

### Multi-factor authentication (MFA)

- Enable MFA on all accounts that support it.
- Use an authenticator app or hardware token. Avoid SMS-based MFA where possible.
- Keep backup codes in a secure location.

### What is not allowed

- Writing passwords on sticky notes or in unencrypted files.
- Sharing passwords with colleagues — not even with IT support.
- Using personal passwords for work accounts or vice versa.
- Disabling or bypassing MFA without CISO approval.

## Incident Reporting

Every employee must report security incidents without delay (addresses A.6.8). Fast reporting limits damage and helps the organization respond effectively.

### What to report

- Suspicious emails, messages, or phone calls.
- Lost or stolen devices (laptop, phone, badge).
- Unauthorized access to systems or rooms.
- Accidental disclosure of confidential information.
- Unusual system behaviour (unexpected pop-ups, locked accounts).
- Any situation that feels wrong — when in doubt, report it.

### How to report

- Use [primary reporting channel, e.g. email to security@company.com / ITSM ticket].
- For urgent incidents, call [emergency contact number / IS-Coordinator phone].
- Provide: what happened, when, which systems or data are affected.
- Do not try to fix the issue yourself — report first, then follow instructions.

### Time requirements

- Report immediately upon discovery, no later than [timeframe, e.g. 4 hours].
- Do not wait until you are certain — early reports are more valuable than late ones.

### No-blame principle

- Reporting an incident never leads to disciplinary action.
- Concealing or delaying a report is a policy violation.
- The organization values honest reporting over blame assignment.

## See also

- CB_AWR_02-Onboarding-Checklist — IS onboarding steps for new employees
- CB_Emergency-Card — Quick-reference card for security emergencies
- CB_PRC_01-Incident-Management — Full incident management process
- CB_POL_L2_10-Human-Resources — HR security requirements (awareness section)

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.006 | 2026-02-11 | CISO | Added see-also cross-references |
| 00.01.005 | 2026-02-11 | CISO | Populated summary, phishing, password hygiene, and incident reporting sections |
| 00.01.004 | 2026-02-09 | CISO | Aligned role terminology |
| 00.01.003 | 2026-02-09 | CISO | Awareness programme (A.6.3) and top risks/event types (A.6.8) populated (REC-414, 423) |
| 00.01.002 | 2026-02-09 | CISO | Objective and scope: 3x2 pattern (WHY/WHAT FOR/WHERE) |
| 00.01.001 | 2026-02-07 | CISO | See-also section added |
| 00.01.000 | 2026-02-06 | CISO | Initial version |
