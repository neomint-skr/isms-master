---
title: English Reformulation — Final Status
type: note
permalink: decisions/english-reformulation-final-status
tags:
- reformulation
- english
- migration
- status
---

# English Reformulation — Final Status

## Overview
Complete English reformulation of the ISMS blueprint from flying-spoon (German, customer-specific) to isms-master (English, generic). Executed 2026-02-09.

## Scope
- Source: `C:\Users\skr\Documents\Code\Github\flying-spoon` (GitHub, German customer ISMS)
- Target: `C:\Users\skr\Documents\Code\GitLab\isms-master` (GitLab, English generic blueprint)
- Method: Reformulation (not translation), ISO 27001:2022 terminology, anonymized

## Deliverables

| Phase | Commit | Files | Description |
|---|---|---|---|
| 0 | (temp) | 1 | Terminology glossary (DE→EN, ISO-aligned) |
| 1 | c808873 | 23 | CLAUDE.md, 11 agents, 5 refs, 3 skills |
| 2 | dcb0a6d | 32 | HB_ISMS-Handbook (23 CLS + 9 REG) |
| 3 | 09f8cb0 | 39 | CB_Cyber-Security-Cookbook (full structure) |
| 4 | 25662d5 | 37 | REF_References/LIB_Library (German originals) |
| 5 | 3e83001 | 1 | INDEX.md |
| 6+7 | f766c7e | 27 | QA fixes (P1-P6 alignment, metadata casing) |
| cleanup | fe8aa4b | 1 | .gitignore English comments |

## Observations
- [decision] Principles renamed from G1-G6 to P1-P6 for international clarity
- [decision] LIB files kept in German (reference originals, not ISMS content)
- [decision] Agent filenames kept English except bibliothekar→librarian rename
- [decision] Ref filenames: sprachniveau→style-guide, skeleton-befuellung→skeleton-filling
- [quality] Lead Auditor review: no critical findings from reformulation itself
- [quality] QA check: anonymization PASS, German remainder PASS, completeness PASS
- [quality] Skeleton files remain unfilled (expected — 27 of 112 files are skeletons)
- [process] Opus agents get killed after ~5min; splitting tasks (CB into 3a+3b) works around this
- [process] Edit tool requires Read first; bulk edits best delegated to subagent

## Relations
- relates_to [[flying-spoon]] as source repository
- relates_to [[ISO 27001:2022]] as terminology standard
- relates_to [[CLAUDE.md]] as methodology steering document
