> **Document ID:** CB_TPL_16-Configuration-Standard
> **Version:** 00.00.002
> **Classification:** Internal
> **Author:** CISO
> **ISO Reference:** ISO 27001:2022 A.8.9
> **Last modified:** 2026-02-20
> **Approval:** —
> **Review cycle:** [review cycle, e.g. Annual]

---

# Template: Configuration Standard

> Complete one configuration standard per device type or platform.
> Intended audience: IT administrators responsible for device build and management.

## Document information

| Field | Value |
|---|---|
| Device type | {e.g. Corporate laptop, server, mobile device} |
| Operating system | {e.g. Windows 11, macOS, Ubuntu} |
| Current supported version | {Version number} |
| Date | {YYYY-MM-DD} |
| Author | {Name — Role} |

## Introduction

{Describe the device that is the subject of this standard. State the intended audience and explain how configuration standards enable efficient IT support, change control, and maintenance.}

## Build requirements

### Typical device specification

{Define minimum and recommended hardware specifications — CPU, RAM, storage, display.}

### BIOS / UEFI

**Configuration requirements:**

- {Set BIOS/UEFI password}
- {Enable TPM}
- {Enable Secure Boot}
- {Set default boot order to local hard drive}
- {Enable Quick Boot}

**Update policy:** BIOS firmware must be updated before the device becomes operational. Updates should be performed locally with the device connected to a power source. Reasons for updating: hardware upgrades, security improvements, stability fixes.

### Build and version

| Field | Value |
|---|---|
| Current supported OS version | {Version} |
| Licensing | {OEM / Volume / Subscription} |
| Activation required before deployment | {Yes / No} |

**Testing future versions:** When a new version is released, collect information about affected features and known issues. Test on a designated test device. Deploy only after successful testing and change management approval.

### Language and accessibility

| Setting | Value |
|---|---|
| Default language | {e.g. English (United Kingdom)} |
| Accessibility | {Assess per user request — test compatibility with required applications} |

### Connectivity

| Type | Requirements |
|---|---|
| Wired | {Define requirements} |
| Wireless | {Define requirements — minimum WPA2 or 802.1X; guest network isolated from corporate network} |
| Bluetooth | {Permitted for corporate peripherals only; non-corporate device connections prohibited} |
| VPN | {Define requirements per corporate policy} |

### Equipment

{List supplementary equipment provided with the device — monitor, mouse, keyboard, docking station.}

### Remote working

{Define remote working considerations — connectivity requirements, physical security, approved locations.}

## Applications

Only authorized applications may be installed on corporate devices.

### IT applications

| Application | Purpose | Installed on |
|---|---|---|
| {Application name} | {Purpose} | {All devices / Specific roles} |
| {Application name} | {Purpose} | {All devices / Specific roles} |

### Device management software

{Define MDM/UEM solution used for deployment, configuration, and management of devices.}

### Remote assistance

{Define remote support software in use.}

### Vendor software

{Define vendor-specific software required for hardware functionality — power management, update managers.}

### Backup software

| Field | Value |
|---|---|
| Backup solution | {Software name} |
| Backup frequency | {[backup frequency, e.g. Daily] / Continuous} |
| Scope | {All company data / Specific folders} |

### Business applications

| Category | Applications | Installed on |
|---|---|---|
| Office suite | {e.g. Google Workspace, Microsoft 365} | {All devices} |
| Drawing / design | {Application name} | {Specific roles} |
| Project management | {Application name} | {Specific roles} |
| File storage | {Application name} | {All devices} |
| Web browser (default) | {e.g. Google Chrome} | {All devices} |
| Video editing | {Application name} | {Specific roles} |

## Security

### Authentication

| Method | Requirements |
|---|---|
| Password | Must meet complexity requirements per password policy |
| Password manager | {Tool name} — installed on applicable devices |
| MFA | Enabled for all applications and devices where technically feasible. Factors: {e.g. authenticator app, hardware token, SMS OTP} |

### Encryption

| Field | Value |
|---|---|
| Encryption tool | {e.g. BitLocker, FileVault} |
| Management | {e.g. via MDM solution} |
| Pre-boot PIN | {Yes / No} |

### Host-based firewall

{Define firewall solution and rule management. Default rules based on network profile (private/public). Additional rules require change management approval and regular review.}

### Antivirus

| Field | Value |
|---|---|
| AV solution | {Software name} |
| Next-gen features | {Machine learning, behavioral analytics — enabled where possible} |
| Database updates | {Automatic / Managed via MDM} |
| Policy reference | {Link to anti-malware policy} |

### Patch management

**Operating system updates:** All devices must have the latest approved updates. Deploy via {MDM solution}. Test before deployment. Consider storage and downtime.

**Application updates:** Patch where possible, dependent on vendor and compatibility. Test before deployment. Deploy via {MDM solution} where feasible; manual patching otherwise.

### Access rights and permissions

**User accounts:**

- Default administrator account: disabled and renamed
- Local administrator account: created with complex password per password policy, consistent across all devices
- Local user and guest accounts: disabled

**Access rights — users must not:**

- Change security settings (AV, firewall)
- Add or remove applications
- Change network settings or device time/date
- Add or remove drivers
- Delete system files or folders
- Use auto-run features
- Delete or modify device event logs

### Device management

{Define remote management solution for remote lock, wipe, locate, application deployment, configuration, and compliance. All devices must be asset-tagged and entered into the CMDB.}

### Event log management

| Setting | Value |
|---|---|
| Event logs | Always enabled |
| Log changes | Approved administrators only |
| Central forwarding | {SIEM/log management solution} |
| Minimum log size | {e.g. 30 MB per event type} |
| NTP source | {e.g. time.google.com} |

## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.00.002 | 2026-02-20 | Claude (AI) | Replace hardcoded parameter values with placeholders |
| 00.00.001 | 2026-02-10 | CISO | Initial template created from migration source |
