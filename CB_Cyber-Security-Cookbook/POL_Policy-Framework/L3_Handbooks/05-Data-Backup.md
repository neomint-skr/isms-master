> **Document ID:** CB_POL_L3_05-Data-Backup
> **Version:** 00.01.004
> **Classification:** Internal
> **Author:** skr
> **ISO Reference:** A.5.29-5.30, A.8.10, A.8.13
> **Last modified:** 2026-02-09
> **Approval:** —
> **Review cycle:** Annual

---

# Data Backup Handbook

## Summary

<!-- TODO -->

## Objective and Scope

**Policy reference:** CB_POL_L2_02-Information-Protection, CB_POL_L2_06-Business-Continuity

**Objective:** Data loss jeopardizes business continuity and compliance with retention obligations. Without practical guidance for backup strategies, recovery procedures, and secure data deletion, RPO/RTO requirements cannot be met reliably.

This handbook translates the requirements from CB_POL_L2_02 (Information Protection) and CB_POL_L2_06 (Business Continuity) into concrete data backup instructions. It defines backup strategies, recovery procedures, and rules for secure data deletion.

The requirements apply to all business-critical IT systems and datasets. The operational workflow is defined in CB_PRC_03 (Backup and Recovery).

**Scope:** IT administrators responsible for backup and recovery systems. Covers all backup and deletion procedures for data within the ISMS scope.

## Define the backup strategy

This section describes how to define the backup strategy for business-critical data and systems (addresses A.8.13):

### Develop the backup plan

Detailed backup plans shall be created that define the frequency, scope, and methodology of backups based on the RPOs and RTOs specified in CB_POL_L2_06. The backup plans document the schedule for full backups, incremental backups, and differential backups, as applicable.

### Backup storage and security

Secure storage locations for backup copies shall be established — on-site or off-site — with appropriate physical and environmental safeguards. Encryption mechanisms protect backup data during storage and transfer.

### Cloud backups

When cloud services are used, ensure that backup copies of organizational data are created within the cloud environment or through approved cloud backup solutions. Verify compliance with backup requirements and data protection standards for cloud-based backup services.

### Retention periods and deletion

Retention periods for backup data shall be defined based on statutory requirements, legal obligations, and business needs. Procedures for the secure deletion of backup data after the expiry of retention periods ensure compliance with data protection legislation [REF:DG24-BK, Ch. 4.1].

## Perform recovery

<!-- TODO -->

## Delete data securely

<!-- TODO -->

## See also


## Changelog

| Version | Date | Author | Change |
|---|---|---|---|
| 00.01.004 | 2026-02-09 | skr | Backup strategy populated: backup plan, storage, cloud, retention (REC-505) |
| 00.01.003 | 2026-02-09 | skr | Objective and scope: 3x2 pattern (WHY/FOR WHAT/WHERE) |
| 00.01.002 | 2026-02-08 | skr | Subject chapter headings reformulated as calls to action |
| 00.01.001 | 2026-02-07 | skr | See-also section added |
| 00.01.000 | 2026-02-06 | skr | Initial version |
