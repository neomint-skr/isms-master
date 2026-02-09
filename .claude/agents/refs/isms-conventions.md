# ISMS-Konventionen (Agent-Referenz)

**Derivat-Status:** Diese Datei ist ein Agent-optimierter Extrakt. Nicht eigenstaendig aendern.

| SSOT | Abgeleitete Inhalte |
|---|---|
| Dokumentenlenkung (L2) | ID-Schema, Metadaten-Format, Dokumentaufbau, H1-Konvention, Versionierung, Klassifizierung |
| `CLAUDE.md` | Traceability-Felder, Drei-Schicht-Modell, Referenz-Zitation, Annex-A-Markierung, Fachkapitel-Integration |

**Ableitungsregeln:** Nur strukturelle/technische Regeln extrahieren. Governance (RACI, Review-Workflow, Aufbewahrung) weglassen. Format: Kompakt/tabellarisch statt Prosa.

## ID-Schema

Dokument-ID = Ordner-Praefixe verkettet mit `_` + Dateiname ohne `.md`.

| Regel | Beschreibung |
|---|---|
| Ordner | `PRAEFIX_Sprechender-Name/` (Underscore trennt Praefix) |
| Dateien | `NN-Sprechender-Name.md` (Nummer + Hyphen + Name) |
| Separator | `_` zwischen Ebenen, `-` innerhalb Namen |
| Clauses | Dot-Notation (z.B. `HB_CLS_7.4-Communication`) |
| Clause-Ordner | C4..C10 sind Sortier-Ordner, kein ID-Segment |

Beispiel: `CB_Cyber-Security-Cookbook/POL_Policy-Framework/L2_Policies/01-Zugriff-und-Identitaet.md` → `CB_POL_L2_01-Zugriff-und-Identitaet`

## Metadaten-Block (8 Pflichtfelder, feste Reihenfolge)

```markdown
> **Dokumenten-ID:** [Pfadbasiert]
> **Version:** 00.01.000
> **Klassifizierung:** [Vertraulich|Intern|Oeffentlich]
> **Autor:** skr
> **ISO-Referenz:** [Clause oder Annex-A-Controls]
> **Zuletzt geaendert:** [YYYY-MM-DD]
> **Freigabe:** —
> **Review-Zyklus:** jaehrlich

---
```

Ausgenommen: REF-Extrakte (kein Metadaten-Block), TPL-Vorlagen (eigene Struktur).

## Standard-Dokumentaufbau

| Position | Element | Regel |
|---|---|---|
| Nach Trenner | `# [Dokumentenname]` | Typ + Thema in natuerlicher Sprache |
| 1. H2 | `## Zusammenfassung` | 3-5 Saetze: Kontext, Orientierung, ISMS-Beitrag, Konsequenz (Details: `refs/sprachniveau.md`) |
| 2. H2 | `## Ziel und Geltungsbereich` | Bold-Labels: **Ziel:** + **Geltungsbereich:** (siehe Format unten) |
| Mitte | Fachkapitel | Dokumenttyp-spezifisch |
| Vor Siehe auch | Zuordnungsmatrix (falls vorhanden) | Nur in POL-Dokumenten |
| Vor Siehe auch | `## Verantwortlichkeiten` (nur REG) | Register-Pflegeinformation |
| Vorletztes H2 | `## Siehe auch` | Querverweise |
| Letztes H2 | `## Changelog` | Tabelle: Version, Datum, Autor, Aenderung (neueste zuerst) |

Verbotene Synonyme fuer `## Ziel und Geltungsbereich`: Zweck, Geltungsbereich, Scope, Purpose, Anwendungsbereich, Zielsetzung.
Verbotenes Synonym fuer `## Siehe auch`: Verbundene Dokumente.

**Format "## Ziel und Geltungsbereich":**

1. Traceability-Felder vorangestellt (nur L2/L3)
2. `**Ziel:**` — 3x2-Muster: 3 Absaetze a 2 Saetze (WARUM → WOZU → WO). Informativer als Zusammenfassung.
3. `**Geltungsbereich:**` — 1-2 Saetze: WER (Rollen/Zielgruppe) + WAS (Scope-Grenzen)

| Typ | Ziel-Inhalt | Geltungsbereich-Inhalt |
|---|---|---|
| CLS | Zuordnungs-Zweck (Clause → Dokumente) | ISMS-Bereich + Zielgruppe |
| L2 | Normative Anforderungen/Kriterien | Rollen + Scope-Grenzen |
| L3 | Konkrete Aufgaben/Taetigkeiten | Rollen + Systeme |
| PRC | Prozessergebnis + Zieldokumente | Trigger + beteiligte Rollen |
| REG | Datenstruktur + SSOT-Status | Datenumfang + Pflege/Nutzung |

## Fachkapitel-Integration

Neue Inhalte in bestehende Fachkapitel integrieren, nicht am Ende anhaengen. Vor Einfuegung: Heading-Inventar (alle H2/H3) lesen, passenden Heading bestimmen. Neuer Heading nur wenn kein thematisch passender existiert. `<!-- TODO -->`-Marker signalisieren Einfuegepunkte. Bei thematischer Ueberlappung: zusammenfuehren, nicht duplizieren.

## H1-Konvention

Kein technisches Praefix (Policy:, Prozess: etc.), keine Clause-Nummern im H1.

| Dokumenttyp | H1-Muster | Beispiel |
|---|---|---|
| CLS | Nur Thema | `# Risiken und Chancen` |
| PRC | Prozess fuer [Thema] | `# Prozess fuer Vorfallmanagement` |
| REG | Typ steckt im Wort | `# Risikoregister` |
| L1 | Leitlinie fuer [Thema] | `# Leitlinie fuer Informationssicherheit` |
| L2 | Richtlinie zu [Thema] | `# Richtlinie zu Zugriff und Identitaet` |
| L3 | [Thema]-Handbuch/-Konzept | `# Benutzerhandbuch` |
| AWR | Frei deskriptiv | `# Awareness-Grundlagen` |
| CB Root | Frei deskriptiv | `# Einstieg`, `# Notfallkarte` |

## Versionierung

Format: `Major.Minor.Update` gepaddet auf `00.00.000`.

| Segment | Wer | Trigger |
|---|---|---|
| Update (3-stellig) | Agent automatisch | Jede inhaltliche Aenderung |
| Minor (2-stellig) | Nur auf User-Auftrag | Draft-Meilenstein |
| Major (2-stellig) | Freigabeberechtigter | Formelle Freigabe |

Bei Aenderung: Update +1, `Zuletzt geaendert` aktualisieren, Changelog-Zeile ergaenzen. Neue Dokumente: `00.01.000`.

## Klassifizierung

| Tier | Standard |
|---|---|
| CB (Cookbook) | Intern |
| HB (Handbook) | Vertraulich |

## Policy-Hierarchie

| Ebene | Charakter | Fragestellung |
|---|---|---|
| L1 | Leitlinie | WARUM? Strategische Grundsaetze (G1-G6) |
| L2 | Richtlinie | WAS? Anforderungen und Regeln |
| L3 | Handbuch | WIE? Konkrete Anleitung, Checklisten |

L2 und L3 strikt getrennt. PRC (Prozesse) definieren Ablauf (RACI, Trigger, Schritte) — komplementaer zu L3.

## Traceability

| Ebene | Pflichtfeld | Format |
|---|---|---|
| L2 | `Leitlinien-Bezug` | Grundsatz-IDs (G1-G6) |
| L2 | `Operationalisiert durch` | L3-Kurzform-IDs (oder `—`) |
| L3 | `Richtlinien-Bezug` | L2-Kurzform-IDs |

Grundsaetze G1-G6 in der Leitlinie (CB_POL_L1_01). Zuordnungsmatrix L1→L2 steht dort.

## Drei-Schicht-Modell

CLS (HB) definiert WAS → PRC (CB) definiert WIE → REG (HB) haelt Ergebnisse.

## Referenz-Zitation

BIBLIOGRAPHY.md in `REF_Referenzen/LIB_Library/` ist SSOT fuer Citation Keys.

| Ebene | Format | Beispiel |
|---|---|---|
| Dokument | `[REF:key]` | `[REF:ISO22-27001]` |
| Abschnitt | `[REF:key, Cl. X]` / `[REF:key, Kap. X]` | `[REF:ISO22-27001, Cl. 6.1]` |

`## Siehe auch`: Interne Kurzform-IDs zuerst, dann `[REF:key]` Eintraege.

## Annex A Controls

93 Controls (A.5.1 bis A.8.34). SoA ist SSOT. Controls erscheinen als `(adressiert A.x.x)` im Fliesstext, NICHT als Headings.

## Drei-Tier-Struktur

| Tier | Pfad | Zweck |
|---|---|---|
| CB | `CB_Cyber-Security-Cookbook/` | Mitarbeiter-Wiki |
| HB | `HB_ISMS-Handbuch/` | Vertrauliche Managementdokumentation |
| REF | `REF_Referenzen/` | Normenextrakte, Referenzmaterial |
