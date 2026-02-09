# Style Guide (Agent Reference)

**SSOT status:** Primary source. Not derived.

Style requirements per document type. Apply when writing or rewriting ISMS documents.
Verbal overrides ("simpler", "more formal") shift style along the table values.

## Style per document type

| Type | Audience | Address | Voice | Terminology | Sentence length |
|---|---|---|---|---|---|
| CB Root, AWR | All employees | Informal (du) | Active, direct | Minimal, explained | Max 15 words |
| L1 | All + management | Formal (Sie) | Active, motivating | Moderate, defined at first use | Max 20 words |
| L2 | Domain owners | Impersonal | Passive permitted | High, ISO-aligned | Max 25 words |
| L3 | Admins, devs | Imperative (H2), impersonal (body) | Mixed | Moderately high | Max 20 words |
| PRC | Process participants | Impersonal | Mixed | High | Max 25 words |
| CLS, REG | Auditors, ISO | Impersonal | Passive preferred | Very high, ISO verbatim | Max 25 words |

## Summary (4-element pattern)

Every `## Summary` consists of 3-5 sentences containing four elements. No reference IDs in the summary — those belong in the metadata block + See also.

| # | Element | Function |
|---|---|---|
| 1 | Context | Why is the topic relevant? (Motivation to read) |
| 2 | Orientation | What does the reader find here? (Page content) |
| 3 | ISMS contribution | What does this topic contribute to the ISMS? (Value proposition) |
| 4 | Consequence | What happens if neglected? (Risk/audit relevance) |

### Guiding questions per document type

| Type | Context | Orientation | ISMS contribution | Consequence |
|---|---|---|---|---|
| CLS | Why ISMS-relevant? | Which structures/criteria? | Which ISMS function? | Audit risk? |
| L1 | Why does the org need this? | Which principles? | What does the guideline anchor? | What is missing without strategic basis? |
| L2 | Which risk is addressed? | Which requirements? | Which controls covered? | What happens on non-compliance? |
| L3 | Which task is described? | Which steps/tools? | Which policies operationalized? | What goes wrong without guidance? |
| PRC | When is the process triggered? | Which core steps? | Which CLS requirement implemented? | What happens without the process? |
| REG | Why is this data maintained? | Which information captured? | Which decisions supported? | What is missing without documentation? |
| AWR | Why relevant in daily work? | What do I learn here? | How does knowledge protect the org? | What happens without awareness? |
| CB Root | What is this page for? | What do I find here? | How does this help me? | (optional) |

## Objective and scope (guiding questions)

Each section consists of `**Objective:**` (3x2 pattern: 3 paragraphs of 2 sentences) + `**Scope:**` (1-2 sentences). Objective is more informative than Summary — Summary is written last as a distillation.

**3x2 pattern (all types):** Paragraph 1 = WHY (problem/need context), paragraph 2 = FOR WHAT (outcome/value proposition), paragraph 3 = WHERE (embedding in the document system, explanatory not enumerative).

| Type | WHY focus | FOR WHAT focus | WHERE focus | Scope question |
|---|---|---|---|---|
| CLS | Threat/problem context | ISMS value contribution | CLS-PRC-REG embedding | Which ISMS area, which audience? |
| L1 | Strategic IS necessity | Principles + governance framework | Policy hierarchy (L1>L2>L3) | Who in the organization? |
| L2 | Regulatory/operational gap | Normative requirements + controls | L1 upstream + L3/PRC downstream | Who + what is in scope? |
| L3 | Practical implementation gap | Concrete guidance/checklists | L2 upstream + tools/systems | Which roles + systems? |
| PRC | Operational trigger/need | Process output | CLS requirement + register result | When triggered + who participates? |
| REG | Information gap/evidence need | Data structure + decision basis | Input processes + usage | Data scope + who maintains/uses? |
| AWR | Knowledge gap/behavioral risk | Target knowledge/behavior | Policy reference + training program | Which employee group? |
| Root | Orientation need | Entry point/navigation/quick info | Cookbook placement | Audience + usage context? |

## German language rules

| Rule | Convention |
|---|---|
| Gendering | Neutral (Beschaeftigte, Fachverantwortliche). No Binnen-I/asterisk/colon. |
| Anglicisms | ISO terms (control, asset) always permitted. Everyday anglicisms (login, phishing) only in CB Root/AWR. |
| Subjunctive | Only L2/CLS (shall-formulations). Otherwise indicative. |
| H2 style | CB Root/AWR: question ("Was tun?"). L3: imperative ("Schluessel verwalten"). Rest: noun phrase. |
| Passive | CB Root/AWR: avoid. L1/L3/PRC: sparingly. L2/CLS/REG: permitted to preferred. |
