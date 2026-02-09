# Formatregeln fuer Markdown-Extrakte

**SSOT-Status:** Primaere Quelle. Nicht abgeleitet.

Diese Datei wird vom markdown-converter Agent in Phase 5 gelesen.

## Header-Format

```markdown
# [Dokumenttitel] Extrakt

> Quelle: [Exakte Quellenangabe mit Ausgabe/Datum].
> Vollstaendiger Lean-Extrakt fuer Agent-Verarbeitung.
> Original: [Sprache]. Extrakt: [Sprache]. Bei Zweifeln gilt das Original.
> PDFs bleiben als Originale erhalten (Audit-Nachweis).
```

## Formatregeln

| Element | Format | Wann verwenden |
|---|---|---|
| Strukturierte Anforderungslisten (a, b, c) | Tabelle `\| # \| Anforderung \|` | Immer wenn Quelle nummerierte/geletterte Punkte hat |
| Narrative Abschnitte | Fliesstext | Einleitungen, Kontextbeschreibungen, Erlaeuterungen |
| Informative Hinweise | `> NOTE: [Text]` | Nicht-normative Anmerkungen, Querverweise, Beispiele |
| Dokumentationspflichten | `**[Marker]:** [Text]` | Stellen wo das Dokument dokumentierte Nachweise fordert |
| Unterpunkte | Inline-Nummerierung `1) ... 2) ...` | Wenn Anforderungen verschachtelte Unterpunkte haben |
| Abkuerzungen | Legende-Tabelle am Dateiende | Alle im Extrakt verwendeten Abkuerzungen |

## Vollstaendigkeitsregeln

- Jeder "shall/must/muss"-Satz → eigene Zeile oder Tabellenzeile
- Jede NOTE/Anmerkung → als `> NOTE:` erfasst
- Jeder Querverweis → mit Clause/Section-Nummer
- Jeder Annex/Anhang → vollstaendig (nicht zusammenfassen!)
- Nummerierte Unterpunkte (z.B. c) 1), c) 2)) → explizit ausschreiben

## Bekannte Fallstricke

Diese Fehler sind bei der ersten ISO-27001-Extraktion aufgetreten. Vermeide sie:

| Fehler | Vermeidung |
|---|---|
| NOTEs uebersehen | Explizit nach "NOTE", "Anmerkung", "Hinweis" im Rohtext suchen |
| Annexe/Anhaenge weglassen oder zusammenfassen | Annexe sind oft normativ — immer vollstaendig extrahieren |
| Unterpunkte verschlucken | Bei verschachtelten Listen (a → 1, 2) jeden Unterpunkt einzeln |
| Einleitende Clauses vergessen | Scope, Normative Verweise, Begriffe — gehoeren zum Extrakt |
| DokI-Pflichten uebersehen | Nach "documented information", "dokumentierte Information", "retain", "aufbewahren" suchen |
| Erst schreiben, dann lesen | IMMER zuerst das gesamte Dokument lesen (Phase 3) |
