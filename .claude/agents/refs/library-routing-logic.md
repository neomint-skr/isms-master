# Library-Routing-Logik (Agent-Referenz)

**SSOT-Status:** Primaere Quelle. Nicht abgeleitet.

Geteiltes Wissen fuer library-analyst und library-verifier. Definiert Routing-Entscheidungen, Qualitaetskriterien und Empfehlungsformat.

## Organisationskontext

[Kundenname], [Rechtsform/Groesse], ISMS im Aufbau nach ISO 27001:2022. Ziel: Zertifizierungsreife.

**Implikationen:**
- Angemessenheit vor Maximalitaet — Enterprise-Konzepte (SOC, SIEM-Team) runterskalieren oder skippen
- Pragmatische Schritte — lieber solide Grundlage als perfektes Gesamtwerk
- ISO-Konformitaet ist Pflicht, darueber hinaus nach Risikolage

## Routing-Entscheidungsbaum

Jedes Element aus einer Library-Quelle wird einzeln klassifiziert. Ein Quelldokument erzeugt typischerweise Empfehlungen fuer mehrere Zieldokumente.

### Schritt 1: Policy-Ebene bestimmen

| Signal im Quelltext | Ziel-Ebene | Erklaerung |
|---|---|---|
| Strategische Grundsaetze, Vision, Management-Commitment | L1 | Gehoert in Leitlinie (nur wenn G1-G6 ergaenzt) |
| Anforderungen ("muss", "soll"), normative Regeln | L2 | WAS — Richtlinie |
| Schritt-fuer-Schritt-Anleitung, Checklisten, Tool-Referenzen | L3 | WIE — Handbuch |
| Workflow mit Trigger/RACI/Schritte/Eskalation | PRC | Prozess-Ablauf |
| Begriffsdefinitionen, Skalen, Metriken, Bewertungskriterien | CLS | Clause-Definition |
| Aufzeichnungsvorlage, Tabellen-Schemata, Register-Felder | REG | Register-Struktur |
| Mitarbeiter-orientierte Erklaerungen, Verhaltensregeln | AWR | Awareness |

### Schritt 2: Zieldokument bestimmen

1. **Annex-A-Controls pruefen:** Referenziert das Element spezifische Controls (A.x.x)? → Coverage-Matrix in INDEX.md bestimmt das primaere Zieldokument.
2. **Thematische Zuordnung:** Kein Control-Bezug? → Thematisch zum passenden Dokument zuordnen (siehe INDEX.md Files-Abschnitt fuer Themen pro Datei).
3. **Skeleton pruefen:** Ist der Ziel-Abschnitt noch `<!-- TODO -->`? → Hoehere Prioritaet (Lueckenfuellung).

### Schritt 3: Ziel-Abschnitt bestimmen

- Bestehende H2/H3-Headings im Zieldokument lesen
- Element unter passenden Heading einordnen
- Falls kein passender Heading existiert: `NEW-SECTION` empfehlen mit Heading-Vorschlag

## Qualitaetskriterien

Jedes Element wird mit 0-5 Sternen bewertet. Die Bewertung bestimmt ADOPT/ADAPT/SKIP.

| Kriterium | ADOPT (3-5) | ADAPT (2-3) | SKIP (0-1) |
|---|---|---|---|
| **Spezifitaet** | Konkret, messbar, umsetzbar | Gute Idee, zu generisch fuer direkte Uebernahme | Boilerplate, auf jede Organisation anwendbar |
| **Lueckenfuellung** | Ziel-Abschnitt ist `<!-- TODO -->` | Ziel hat Content, Element bringt Mehrwert | Bereits ausreichend abgedeckt |
| **ISO-Alignment** | Direkt auf Annex-A-Control oder Clause | Indirekt ISO-relevant | Kein erkennbarer ISO-Bezug |
| **KMU-Fit** | Direkt passend fuer KMU | Enterprise-Konzept, aber skalierbar | Nur mit Enterprise-Ressourcen umsetzbar |
| **Ebenen-Korrektheit** | Passt natuerlich in Ziel-Ebene | Umformulierung von WIE→WAS oder umgekehrt noetig | Fundamental falsche Ebene, nicht sinnvoll adaptierbar |
| **Neuheit** | ISMS deckt diesen Aspekt gar nicht ab | Teilweise abgedeckt, aber Tiefe/Breite fehlt | Vollstaendig abgedeckt |

**Gesamtbewertung:** Durchschnitt der 6 Kriterien, gerundet.

**Schwelle:**
- ADOPT (3-5): Direkt uebernehmbar mit Anpassung an Sprachniveau
- ADAPT (2-3): Kernidee wertvoll, braucht deutliche Umformulierung
- SKIP (0-1): Nicht empfohlen — Begruendung im Skip-Protokoll dokumentieren

## Empfehlungsformat

Jede Empfehlung folgt diesem Template:

```markdown
### REC-NNN — [Kurztitel]

| Feld | Wert |
|---|---|
| Quelle | [REF:key, Kap. X.Y] |
| Quell-Ebene | [Was die Quelle es nennt: Richtlinie/Verfahren/etc.] |
| Zieldokument | [ISMS-Dokument-ID, z.B. CB_POL_L2_01-Zugriff-und-Identitaet] |
| Ziel-Abschnitt | [H2/H3-Heading im Zieldokument] |
| Ziel-Ebene | [L2/L3/PRC/CLS/REG/AWR] |
| Aktion | ADOPT / ADAPT / NEW-SECTION |
| Bewertung | [N Sterne, z.B. 4/5] |
| Controls | [A.x.x, A.y.y oder — falls kein Control-Bezug] |

**Inhalt:** [2-4 Saetze: Was wird uebernommen, wie passt es ins Zieldokument, warum ist es wertvoll]

**Entwurfstext:**

> [Ausformulierter Text im Sprachniveau des Zieldokuments.
> Direkt einfuegbar nach Review. Beachte refs/sprachniveau.md
> fuer Anrede, Stimme, Fachsprache, Satzlaenge.]

**Verifikation:** [Wird vom Verifier ausgefuellt]
**Hinweise:** [Side Effects, z.B. SoA-Update noetig, Traceability-Anpassung, Querverweise]
**Standards-Stuetzung:** [Wird vom Standards-Check ausgefuellt]
```

**Nummerierung:** REC-001 aufwaerts, pro Durchlauf fortlaufend.

## Skip-Protokoll

Fuer jedes SKIP-Element kurz dokumentieren:

```markdown
| # | Quelle | Quell-Abschnitt | Begruendung |
|---|---|---|---|
| S-001 | [REF:key, Kap. X] | [Heading] | [z.B. "Boilerplate", "Enterprise-only", "Bereits in L2_03 abgedeckt"] |
```
