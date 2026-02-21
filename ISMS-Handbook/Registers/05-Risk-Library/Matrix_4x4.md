# Risk Matrix (LRM-44, 4×4)

## Definition

Risk score is computed as:

- Impact (I): Minor (1), Moderate (2), Major (3), Severe (4)
- Likelihood (L): Rare (1), Unlikely (2), Possible (3), Likely (4)
- Score: R = I × L (1..16)

Values MUST be written as label+value (e.g., `Possible (3)`), not as raw numbers.

## Matrix

| Impact \ Likelihood | Rare (1) | Unlikely (2) | Possible (3) | Likely (4) |
|---|---:|---:|---:|---:|
| Severe (4) | 4 | 8 | 12 | 16 |
| Major (3) | 3 | 6 | 9 | 12 |
| Moderate (2) | 2 | 4 | 6 | 8 |
| Minor (1) | 1 | 2 | 3 | 4 |

## Risk bands (default)

- Low: 1–3
- Medium: 4–6
- High: 8–12
- Critical: 16
