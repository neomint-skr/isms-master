# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo-Zweck

Zentraler ISMS-Blueprint fuer alle Kunden. Policies, Richtlinien und Massnahmen werden hier entwickelt und gepflegt. Verbesserungen wirken kundenuebergreifend.

## Globale Config

Globale Regeln und User-Profil werden von `claude-code-master` (`gitlab.com/neomint-skr/claude-code-master`) nach `~/.claude/` deployed und gelten automatisch. Aenderungen dort, nicht hier.

## Konventionen

### MCP-Server

`.mcp.json` im Repo-Root definiert die aktiven MCP-Server.

Aktive Server: sequential-thinking, basic-memory, context7.

**Datenhoheit:** Wenn ein MCP-Server Zugriff auf Daten bietet, werden diese ausschliesslich ueber seine MCP-Tools zugegriffen — nie per Read, Edit, Write oder Grep direkt. Bei Server-Ausfall: Server reparieren, nicht Daten direkt lesen. Permission-Blocks in `settings.json` erzwingen dies fuer bekannte MCP-Datenpfade.

| MCP-Server | Verwaltetes Verzeichnis | Gesperrt fuer |
|---|---|---|
| basic-memory | `.memory/` | Read, Edit, Write |

**Nutzungspflicht:** Bestimmte MCP-Server muessen in definierten Kontexten aktiv genutzt werden.

| MCP-Server | Pflichtkontext | Fallback bei Ausfall |
|---|---|---|
| sequential-thinking | Plan Mode (jede Planungsaktivitaet) | Server ueber `/mcp` neu starten |
| context7 | Library-/Framework-Recherche | WebSearch/WebFetch |

### Drei-Tier-Struktur

| Tier | Pfad | Zweck |
|---|---|---|
| CB — Cookbook | `CB_Cyber-Security-Cookbook/` | Mitarbeiter-Wiki (Einstieg, Notfallkarte, FAQ, Policy-Framework L1-L3, Prozesse, Awareness, Templates) |
| HB — Handbook | `HB_ISMS-Handbuch/` | Vertrauliche Managementdokumentation (Clauses, Register) |
| REF — Referenzen | `REF_Referenzen/` | Normenextrakte, Referenzmaterial (MD-Extrakte + PDF-Originale) |

### Policy-Hierarchie

| Ebene | Charakter | Fragestellung | Beispiel |
|---|---|---|---|
| L1 | Leitlinie | WARUM? Strategische Grundsaetze | "Wir schuetzen unsere Informationen" |
| L2 | Richtlinie | WAS? Anforderungen und Regeln | "Zugriff wird nach Least Privilege vergeben" |
| L3 | Handbuch | WIE? Konkrete Anleitung, Checklisten, Tools | "So richte ich MFA ein: Schritt 1..." |

L2 und L3 sind strikt getrennt: L2 definiert Anforderungen, L3 operationalisiert sie. PRC (Prozesse) definieren den Ablauf (RACI, Trigger, Schritte) — komplementaer zu L3.

### Drei-Schicht-Modell

CLS (HB) definiert WAS (Kriterien, Skalen), PRC (CB) definiert WIE (Ablauf, RACI, Trigger), REG (HB) haelt Ergebnisse (Records).

### ID-Schema

Pfadbasiert: Jeder Ordner traegt sein eigenes Praefix. Dokument-ID = Ordner-Praefixe verkettet + Dateiname (ohne .md).

| Regel | Beschreibung |
|---|---|
| Ordner | `PRAEFIX_Sprechender-Name/` (Underscore trennt Praefix) |
| Dateien | `NN-Sprechender-Name.md` (Nummer + Hyphen + Name) |
| Dokument-ID | Ordner-Praefixe + `_` + Dateiname (z.B. `CB_POL_L1_01-Leitlinie`) |
| Separator | `_` zwischen Ebenen, `-` innerhalb Namen |
| Clauses | Dot-Notation statt Nummer (z.B. `HB_CLS_7.4-Communication`) |
| Clause-Ordner | C4..C10 sind Sortier-Ordner, kein ID-Segment |

### Dokumentformat

Alle ISMS-Inhaltsdokumente sind Markdown (.md) mit Metadaten-Block (Blockquote), `---` Trenner, dann Inhalt.

Metadaten-Block (8 Pflichtfelder, feste Reihenfolge): Dokumenten-ID (pfadbasiert), Version (`00.00.000`), Klassifizierung (Vertraulich/Intern/Oeffentlich), Autor, ISO-Referenz, Zuletzt geaendert (YYYY-MM-DD), Freigabe (`—` bis Freigabe), Review-Zyklus.

### Dokumentaufbau

Jedes Inhaltsdokument (mit Metadaten-Block) folgt diesem Aufbau:

| Position | Element | Regel |
|---|---|---|
| Nach Trenner | `# [Dokumentenname]` | Typ + Thema in natuerlicher Sprache (siehe H1-Konvention) |
| 1. H2 | `## Zusammenfassung` | 3-5 Saetze: Kontext, Orientierung, ISMS-Beitrag, Konsequenz (Details in `refs/sprachniveau.md`) |
| 2. H2 | `## Ziel und Geltungsbereich` | Bold-Labels: Ziel + Geltungsbereich (Details unten) |
| Mitte | Fachkapitel | Dokumenttyp-spezifisch (Clause-Nummern, Prozessschritte, Register-Daten) |
| Vor Siehe auch | Zuordnungsmatrix (falls vorhanden) | Nur in POL-Dokumenten. Mapping zur uebergeordneten Ebene (z.B. L1→L2) |
| Vor Siehe auch | `## Verantwortlichkeiten` (nur REG) | Register-Pflegeinformation |
| Vorletztes H2 | `## Siehe auch` | Querverweise auf verwandte Dokumente |
| Letztes H2 | `## Changelog` | Tabelle: Version, Datum, Autor, Aenderung — neueste Version zuerst |

Ausgenommen: REF-Extrakte (kein Metadaten-Block) und TPL-Vorlagen (Ausfuell-Dokumente).

### Ziel und Geltungsbereich (Aufbau)

Jede `## Ziel und Geltungsbereich`-Sektion folgt diesem Aufbau:

1. Traceability-Felder (nur L2/L3/REG, siehe Traceability-Abschnitt)
2. `**Ziel:**` — 3x2-Muster: 3 Absaetze a 2 Saetze (WARUM → WOZU → WO)
3. `**Geltungsbereich:**` — 1-2 Saetze: WER (Rollen/Zielgruppe) + WAS (Scope-Grenzen)

**Beziehung zur Zusammenfassung:** Ziel ist die primaere, informativere Definition. Zusammenfassung ist Destillat (4-Element-Muster) und wird zuletzt geschrieben.

**3x2-Muster:** WARUM (Problem-/Bedarfskontext) → WOZU (Ergebnis/Wertbeitrag) → WO (Einbettung ins Dokumentensystem). Typ-spezifische Leitfragen: `refs/sprachniveau.md`.

### H1-Konvention

Dokumentenname = Typ + Thema in natuerlicher Sprache. Kein technisches Praefix (Policy:, Prozess: etc.), keine Clause-Nummern im H1. Typ-spezifische Muster und Beispiele: `refs/isms-conventions.md`.

### Versionierung

Format: `Major.Minor.Update` — gepaddet auf `00.00.000`.

| Segment | Format | Verantwortlich | Voraussetzung | Reset |
|---|---|---|---|---|
| Major | 2-stellig | Freigabeberechtigter laut RACI | Formelle Freigabe | Minor + Update → 00.000 |
| Minor | 2-stellig | Nur auf expliziten User-Auftrag | User beauftragt Draft-Meilenstein | Update → 000 |
| Update | 3-stellig | Agent automatisch | Jede inhaltliche Aenderung | — |

Beispiel: `00.01.000` → `00.01.001` → `00.01.002` → (Minor) → `00.02.000` → (Freigabe) → `01.00.000`

**Agenten-Regel:** Bei jeder inhaltlichen Aenderung an einem ISMS-Dokument:
1. Update-Counter um 1 erhoehen
2. `Zuletzt geaendert` auf aktuelles Datum setzen
3. Changelog-Zeile ergaenzen (Version, Datum, Autor, Aenderungsbeschreibung)
4. Kein Minor/Major-Bump ohne expliziten User-Auftrag

### Traceability

Jede Ebene referenziert ihre Vorgaenger-Ebene im Abschnitt `## Ziel und Geltungsbereich`:

| Ebene | Pflichtfeld | Format | Beispiel |
|---|---|---|---|
| L2 | Leitlinien-Bezug | Grundsatz-IDs | `**Leitlinien-Bezug:** G1, G3` |
| L2 | Operationalisiert durch | L3-Kurzform-IDs | `**Operationalisiert durch:** CB_POL_L3_04, CB_POL_L3_05` |
| L3 | Richtlinien-Bezug | L2-Kurzform-IDs | `**Richtlinien-Bezug:** CB_POL_L2_01, CB_POL_L2_02` |

Grundsaetze G1-G6 sind in der Leitlinie (CB_POL_L1_01) definiert. L2-Dokumente ohne L3-Operationalisierung lassen "Operationalisiert durch" weg.

### Referenz-Zitation

Externe Quellen in `REF_Referenzen/LIB_Library/` als PDF-Original + MD-Extrakt.

**Dateinamen:** `Autor_Jahr_Kurztitel.ext` / `Autor_Jahr_Kurztitel-Extract.md`. `oJ` = ohne Jahresangabe.

**BIBLIOGRAPHY.md** in `LIB_Library/` ist SSOT fuer Citation Keys.

**Citation Keys:** `[REF:key]` (Dokument), `[REF:key, Cl. X]` (ISO/BSI), `[REF:key, Kap. X]` (Templates/ISACA). Agenten-Regeln und Beispiele: `refs/isms-conventions.md`.

### Annex A Controls und SoA

93 Controls aus ISO 27001:2022 Annex A. SoA (Statement of Applicability) ist SSOT fuer Control-Anwendbarkeit. Controls erscheinen NICHT als Headings, sondern als `(adressiert A.x.x)` Referenz im Fliesstext.

### Abhaengigkeitsregeln

- **Vertikal:** Leitlinie → Policies → Handbuecher/Konzepte → Prozesse. Aenderungen top-down propagieren.
- **Horizontal:** SoA (SSOT) → Coverage Matrix (INDEX.md) → Dokumente. Nie umgekehrt.
- **Control-Coverage:** Jedes der 93 Annex A Controls muss in mindestens einem Dokument adressiert sein.
- **Terminologie:** Konsistente Begriffe ueber alle Dateien.

### Speicherstrategie

Vier Schichten, keine Duplikation:

| Schicht | Speicherort | Zweck | Git |
|---|---|---|---|
| Session | Auto-Memory (`MEMORY.md`) | Laufende Session: woran arbeite ich gerade | Nein |
| Projekt-Memory | `.memory/*.md` (MCP) | Entscheidungen, Learnings, Fortschritt | Ja |
| Agent-Wissen | `.claude/agents/refs/` | SSOT-Derivate, Konventionen | Ja |
| ISMS-Inhalt | `CB_*/`, `HB_*/`, `REF_*/` | Zertifizierungsartefakte | Ja |

**Routing:** Session = fluechtig (wird ueberschrieben). Persistentes Wissen → `.memory/`. Agenten-Regelwerk → `refs/`. ISMS-Dokumente → Fachordner. Wenn Session-Inhalt persistent werden soll → nach `.memory/` verschieben.

### Skeleton-Befuellung

Beim Befuellen von Skeleton-Dokumenten mit Draft-Text: Norm-/Best-Practice-Inhalte direkt als Text, unternehmensspezifische Werte als `[Beschreibung]` in eckigen Klammern. Detailregeln und Beispiele in `.claude/agents/refs/skeleton-befuellung.md`.

### Aenderungen

- Neue Dateien: INDEX.md aktualisieren
- Control-Zuordnung geaendert: SoA zuerst, dann Coverage-Matrix in INDEX.md
- Strukturaenderung: CLAUDE.md + INDEX.md pruefen
- Konventions-Aenderung: Agent-Instruktionen in `.claude/agents/` pruefen und anpassen

### Rollen

| Rolle | Kuerzel | Verantwortung |
|---|---|---|
| Externer ISB | skr | Konzeption, Dokumentation, Beratung |
| ISMS-Koordinator/in | [Kuerzel] | Operative Umsetzung |
| CEO | [Kuerzel] | Strategische Freigabe |
| CTO | [Kuerzel] | Technische Freigabe |

### Navigation

Strukturdaten (Dateien, Headings, Control-Mapping) stehen in `INDEX.md`. Lies INDEX.md zuerst.

### Agenten

Verfuegbare Agenten (`.claude/agents/`):

| Name | Typ | Zweck |
|---|---|---|
| `consistency-checker` | Agent (haiku) | 10 Pruefungen: Metadaten-ID, INDEX, Coverage, Pfade, SoA, Aufbau, Version, Citation Keys, Ref-Derivat, Repo-Hygiene |
| `mece-checker` | Agent (sonnet) | 6 Pruefungen: Control-Verteilung, L2/L3-Trennung, Traceability, Grundsaetze, CLS→PRC→REG, verwaiste REG |
| `document-writer` | Agent (sonnet) | Neue Dokumente erstellen oder bestehende an Konventionen anpassen |
| `markdown-converter` | Agent (sonnet) | PDF → verifizierter Lean-Markdown-Extrakt (7-Phasen-Workflow) |
| `bibliothekar` | Agent (haiku) | Durchsucht Referenz-Bibliothek, liefert Briefing mit Quellenangaben |
| `researcher` | Agent (sonnet) | Fachfragen-Synthese durch Triangulation von Bibliotheks-Informationen |
| `library-analyst` | Team-Agent (sonnet) | Library-Quellen zerlegen, Elemente routen, Draft-Text schreiben |
| `library-verifier` | Team-Agent (sonnet) | Side-Effect-Pruefung: Traceability, SoA, Hierarchie, Stil, Querverweise |
| `library-lean-checker` | Team-Agent (sonnet) | Lean-Pruefung: Minimalitaet, Notwendigkeit, Eleganz, Redundanz |
| `library-certification-checker` | Team-Agent (sonnet) | ISO-Zertifizierungspruefung: DokI-Pflichten, Audit-Trail, Coverage |
| `library-standards-check` | Team-Agent (haiku) | ISO/BSI-Gegencheck + Lueckenanalyse |

**Workflows:**
- **Fachfrage** → Zwei-Schritt: `bibliothekar` (Quellensuche) → `researcher` (Synthese + Empfehlung). Bibliothekar auch standalone nutzbar.
- **Konsistenz-Check** → `consistency-checker` Subagent.
- **Dokument-Aenderung** → Hauptkontext (direkte Kontrolle).
- **Library-Mining** → Agent Team: Analyst(en) → Verifier + Lean-Checker + Certification-Checker + Standards-Check (parallel). Ergebnis: Empfehlungsbericht in `.temp/`.

**Agent-Referenzen (refs/):** Refs koennen Derivate (mit SSOT-Verweis, Aenderungsrichtung SSOT → Ref) oder primaere Originale (SIND die SSOT) sein. Derivat: `refs/isms-conventions.md` (SSOT: Dokumentenlenkung + CLAUDE.md). Originale: `refs/sprachniveau.md`, `refs/skeleton-befuellung.md`, `refs/library-routing-logic.md`, `refs/markdown-converter-rules.md`. Consistency-Checker prueft Derivat-Alignment.

### Sprache

Dokumentinhalt: Deutsch. Dateinamen: Gemischt — Cookbook deutsch (Ausnahme: PRC-Dateien englisch, ISO-aligned), ISMS-Handbuch englisch (ISO-aligned), REF deutsch. Steuerungsdokumente: Englisch/Deutsch gemischt.

**Sprachniveau:** Stil pro Dokumenttyp definiert in `.claude/agents/refs/sprachniveau.md`. Agenten lesen bei Dokument-Erstellung/-Bearbeitung.
