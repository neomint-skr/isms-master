# Briefing Package — ISMS Process Chain Review

## Purpose
This package enables an external reviewer to evaluate the risk management process chain of an ISO 27001:2022 ISMS without direct repository access. It contains structural documentation, process chain analysis, data model descriptions, source excerpts, and a gap analysis.

## Commit Reference
Based on commit `26baa9b8e6a3f43292a278ace4ca87e6238cdb48` (branch: main).

## Contents

| File | Description |
|---|---|
| `00_README.md` | This file — purpose, navigation, context |
| `01_REPO_MAP.md` | Repository structure (4-level folder tree), naming conventions, three-tier layering model |
| `02_PROCESS_CHAIN_OVERVIEW.md` | End-to-end process chain: Asset → BIA → Protection Requirements → Vulnerability Assessment → Scenario Generation → Risk Analysis → Treatment → Approval → Monitoring |
| `03_MANDATORY_DOC_EXCERPTS.md` | Key excerpts from 15+ source documents (processes, standards, handbooks) — max ~200 lines each |
| `04_DATA_MODEL_AND_KEYS.md` | Register data model, foreign key relationships, ID patterns (Asset-ID, SC-ID, SM-ID), worked examples |
| `05_GAPS_AND_BREAKPOINTS.md` | Evidence-based gap analysis: missing processes, incomplete handoffs, undocumented triggers |
| `06_DECISIONS_NEEDED.md` | Prioritized decision list for the reviewer / ISMS owner |
| `_exports/` | Full copies of key source files (processes, standards, registers, templates) |

## How to Use This Package
1. Start with this README for orientation
2. Read `01_REPO_MAP.md` to understand the repository structure and conventions
3. Read `02_PROCESS_CHAIN_OVERVIEW.md` for the end-to-end workflow
4. Use `04_DATA_MODEL_AND_KEYS.md` to understand how registers connect
5. Consult `03_MANDATORY_DOC_EXCERPTS.md` for source evidence (or browse `_exports/` for full files)
6. Review `05_GAPS_AND_BREAKPOINTS.md` for identified issues
7. Use `06_DECISIONS_NEEDED.md` as a decision checklist

## Scope
The analysis covers the **risk management process chain** — from asset registration through risk treatment and approval. It does NOT cover:
- Awareness & training processes
- Physical security details
- HR security lifecycle
- Supplier management (except where it intersects risk triggers)

## ISMS Framework Context
- **Standard:** ISO/IEC 27001:2022
- **Methodology:** BSI 200-2 (German Federal Office for Information Security) adapted approach
- **Policy hierarchy:** L1 (Policy) → L2 (Standards) → L3 (Handbooks) → L4 (Cheat Sheets)
- **Three-layer model:** CLS (defines WHAT) → PRC (defines HOW) → REG (records results)
- **Controls:** 93 Annex A controls mapped via Statement of Applicability (SoA)

## Conventions Used in This Package
- **Document IDs** follow the pattern: `Tier_Folder_NN-Name` (e.g., `CB_PRC_07-Risk-Management`)
- **Register references** use the pattern: `HB_REG_NN` (e.g., `HB_REG_05` = Risk Register)
- **Cross-references** point to documents by their full ID
- Source excerpts in `03_MANDATORY_DOC_EXCERPTS.md` preserve original heading structure
