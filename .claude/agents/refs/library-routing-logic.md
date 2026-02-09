# Library Routing Logic (Agent Reference)

**SSOT status:** Primary source. Not derived.

Shared knowledge for library-analyst and library-verifier. Defines routing decisions, quality criteria and recommendation format.

## Organizational context

[Organization name], [legal form/size], ISMS under construction per ISO 27001:2022. Goal: certification readiness.

**Implications:**
- Appropriateness over maximalism — enterprise concepts (SOC, SIEM team) scale down or skip
- Pragmatic steps — solid foundation over a perfect complete work
- ISO conformity is mandatory, beyond that risk-driven

## Routing decision tree

Each element from a library source is classified individually. A single source document typically generates recommendations for multiple target documents.

### Step 1: Determine policy level

| Signal in source text | Target level | Explanation |
|---|---|---|
| Strategic principles, vision, management commitment | L1 | Belongs in the policy (only if extending P1-P6) |
| Requirements ("must", "shall"), normative rules | L2 | WHAT — standard |
| Step-by-step instructions, checklists, tool references | L3 | HOW — handbook/concept |
| Workflow with trigger/RACI/steps/escalation | PRC | Process workflow |
| Term definitions, scales, metrics, assessment criteria | CLS | Clause definition |
| Record template, table schemas, register fields | REG | Register structure |
| Employee-oriented explanations, behavioral rules | AWR | Awareness |

### Step 2: Determine target document

1. **Check Annex A controls:** Does the element reference specific controls (A.x.x)? The coverage matrix in INDEX.md determines the primary target document.
2. **Thematic assignment:** No control reference? Assign thematically to the matching document (see INDEX.md files section for topics per file).
3. **Check skeleton status:** Is the target section still `<!-- TODO -->`? Higher priority (gap filling).

### Step 3: Determine target section

- Read existing H2/H3 headings in the target document
- Place element under matching heading
- If no matching heading exists: recommend `NEW-SECTION` with heading proposal

## Quality criteria

Each element is rated 0-5 stars. The rating determines ADOPT/ADAPT/SKIP.

| Criterion | ADOPT (3-5) | ADAPT (2-3) | SKIP (0-1) |
|---|---|---|---|
| **Specificity** | Concrete, measurable, actionable | Good idea, too generic for direct adoption | Boilerplate, applicable to any organization |
| **Gap filling** | Target section is `<!-- TODO -->` | Target has content, element adds value | Already sufficiently covered |
| **ISO alignment** | Directly maps to Annex A control or clause | Indirectly ISO-relevant | No discernible ISO reference |
| **SME fit** | Directly suitable for SME | Enterprise concept, but scalable | Only feasible with enterprise resources |
| **Level correctness** | Naturally fits the target level | Needs reformulation from HOW to WHAT or vice versa | Fundamentally wrong level, not sensibly adaptable |
| **Novelty** | ISMS does not cover this aspect at all | Partially covered, but depth/breadth missing | Fully covered |

**Overall rating:** Average of 6 criteria, rounded.

**Threshold:**
- ADOPT (3-5): directly adoptable with style adaptation
- ADAPT (2-3): core idea valuable, needs significant reformulation
- SKIP (0-1): not recommended — document rationale in skip log

## Recommendation format

Each recommendation follows this template:

```markdown
### REC-NNN — [Short title]

| Field | Value |
|---|---|
| Source | [REF:key, Ch. X.Y] |
| Source level | [What the source calls it: policy/procedure/etc.] |
| Target document | [ISMS document ID, e.g. CB_POL_L2_01-Access-and-Identity] |
| Target section | [H2/H3 heading in target document] |
| Target level | [L2/L3/PRC/CLS/REG/AWR] |
| Action | ADOPT / ADAPT / NEW-SECTION |
| Rating | [N stars, e.g. 4/5] |
| Controls | [A.x.x, A.y.y or — if no control reference] |

**Content:** [2-4 sentences: what is adopted, how it fits the target document, why it is valuable]

**Draft text:**

> [Fully formulated text at the style level of the target document.
> Directly insertable after review. Observe refs/style-guide.md
> for address form, voice, terminology, sentence length.]

**Verification:** [Filled by verifier]
**Notes:** [Side effects, e.g. SoA update needed, traceability adjustment, cross-references]
**Standards support:** [Filled by standards check]
```

**Numbering:** REC-001 upward, sequential per run.

## Skip log

For each SKIP element, briefly document:

```markdown
| # | Source | Source section | Rationale |
|---|---|---|---|
| S-001 | [REF:key, Ch. X] | [Heading] | [e.g. "Boilerplate", "Enterprise-only", "Already covered in L2_03"] |
```
