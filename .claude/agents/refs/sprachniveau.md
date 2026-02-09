# Sprachniveau (Agent-Referenz)

**SSOT-Status:** Primaere Quelle. Nicht abgeleitet.

Stil-Vorgaben pro Dokumenttyp. Beim Schreiben oder Umschreiben von ISMS-Dokumenten anwenden.
Verbal-Overrides ("einfacher", "formaler") verschieben den Stil entlang der Tabellenwerte.

## Stil pro Dokumenttyp

| Typ | Zielgruppe | Anrede | Stimme | Fachsprache | Satzlaenge |
|---|---|---|---|---|---|
| CB Root, AWR | Alle MA | Du | Aktiv, direkt | Minimal, erklaert | Max 15 W |
| L1 | Alle + GL | Sie | Aktiv, motivierend | Moderat, bei 1. Nutzung definiert | Max 20 W |
| L2 | Fachverantw. | Unpersoenlich | Passiv erlaubt | Hoch, ISO-nah | Max 25 W |
| L3 | Admins, Devs | Imperativ (H2), unpersoenl. (Fliesstext) | Gemischt | Moderat-hoch | Max 20 W |
| PRC | Prozessbeteiligte | Unpersoenlich | Gemischt | Hoch | Max 25 W |
| CLS, REG | Auditoren, ISB | Unpersoenlich | Passiv bevorzugt | Sehr hoch, ISO-woertlich | Max 25 W |

## Zusammenfassung (4-Element-Muster)

Jede `## Zusammenfassung` besteht aus 3-5 Saetzen mit vier Elementen. Keine Referenz-IDs in der Zusammenfassung — die stehen in Metablock + Siehe-auch.

| # | Element | Funktion |
|---|---|---|
| 1 | Kontext | Warum ist das Thema relevant? (Motivation zum Lesen) |
| 2 | Orientierung | Was findet der Leser hier? (Seiteninhalt) |
| 3 | ISMS-Beitrag | Was traegt dieses Thema zum ISMS bei? (Wertbeitrag) |
| 4 | Konsequenz | Was passiert bei Vernachlaessigung? (Risiko/Audit-Relevanz) |

### Leitfragen pro Dokumenttyp

| Typ | Kontext | Orientierung | ISMS-Beitrag | Konsequenz |
|---|---|---|---|---|
| CLS | Warum ISMS-relevant? | Welche Strukturen/Kriterien? | Welche ISMS-Funktion? | Audit-Risiko? |
| L1 | Warum braucht die Org das? | Welche Grundsaetze? | Was verankert die Leitlinie? | Was fehlt ohne strategische Basis? |
| L2 | Welches Risiko wird adressiert? | Welche Anforderungen? | Welche Controls abgedeckt? | Was droht bei Nichtbeachtung? |
| L3 | Welche Aufgabe wird beschrieben? | Welche Schritte/Tools? | Welche Richtlinien operationalisiert? | Was geht schief ohne Anleitung? |
| PRC | Wann wird der Prozess ausgeloest? | Welche Kernschritte? | Welche CLS-Anforderung umgesetzt? | Was passiert ohne Prozess? |
| REG | Warum werden diese Daten gefuehrt? | Welche Informationen erfasst? | Welche Entscheidungen gestuetzt? | Was fehlt ohne Dokumentation? |
| AWR | Warum ist das wichtig im Alltag? | Was lerne ich hier? | Wie schuetzt Wissen die Org? | Was passiert bei fehlendem Bewusstsein? |
| CB-Root | Wofuer ist die Seite da? | Was finde ich hier? | Wie hilft mir das? | (optional) |

## Ziel und Geltungsbereich (Leitfragen)

Jede Sektion besteht aus `**Ziel:**` (3x2-Muster: 3 Absaetze a 2 Saetze) + `**Geltungsbereich:**` (1-2 Saetze). Ziel ist informativer als Zusammenfassung — Zusammenfassung wird zuletzt als Destillat geschrieben.

**3x2-Muster (alle Typen):** Absatz 1 = WARUM (Problem-/Bedarfskontext), Absatz 2 = WOZU (Ergebnis/Wertbeitrag), Absatz 3 = WO (Einbettung ins Dokumentensystem, erklaerend statt auflistend).

| Typ | WARUM-Fokus | WOZU-Fokus | WO-Fokus | Geltungsbereich-Frage |
|---|---|---|---|---|
| CLS | Bedrohungs-/Problemkontext | ISMS-Wertbeitrag | CLS↔PRC↔REG Einbettung | Welcher ISMS-Bereich, welche Zielgruppe? |
| L1 | Strategische IS-Notwendigkeit | Grundsaetze + Steuerungsrahmen | Policy-Hierarchie (L1→L2→L3) | Wer in der Organisation? |
| L2 | Regulatorische/betriebliche Luecke | Normative Anforderungen + Controls | L1↑ + L3/PRC↓ Operationalisierung | Wer + was ist Scope? |
| L3 | Praktische Umsetzungsluecke | Konkrete Anleitungen/Checklisten | L2↑ + Tools/Systeme | Welche Rollen + Systeme? |
| PRC | Operativer Ausloeser/Bedarf | Prozessergebnis/Output | CLS-Anforderung + Register-Ergebnis | Wann ausgeloest + wer beteiligt? |
| REG | Informationsluecke/Nachweisbedarf | Datenstruktur + Entscheidungsgrundlage | Eingabe-Prozesse + Nutzung | Datenumfang + wer pflegt/nutzt? |
| AWR | Wissensluecke/Verhaltensrisiko | Ziel-Wissen/Verhalten | Policy-Bezug + Schulungsprogramm | Welche Mitarbeitergruppe? |
| Root | Orientierungsbedarf | Einstieg/Navigation/Sofortinfo | Cookbook-Einordnung | Zielgruppe + Nutzungskontext? |

## Deutsche Grundregeln

| Regel | Festlegung |
|---|---|
| Gendering | Neutral (Beschaeftigte, Fachverantwortliche). Kein Binnen-I/Sternchen/Doppelpunkt. |
| Anglizismen | ISO-Termini (Control, Asset) immer erlaubt. Alltags-Anglizismen (Login, Phishing) nur CB Root/AWR. |
| Konjunktiv | Nur L2/CLS (Soll-Formulierungen). Sonst Indikativ. |
| H2-Stil | CB Root/AWR: Frage ("Was tun?"). L3: Imperativ ("Schluessel verwalten"). Rest: Substantiv. |
| Passiv | CB Root/AWR: vermeiden. L1/L3/PRC: sparsam. L2/CLS/REG: erlaubt bis bevorzugt. |
