# Skeleton-Befuellung (Agent-Referenz)

**SSOT-Status:** Primaere Quelle. Nicht abgeleitet.

Regeln fuer das Befuellen von Skeleton-Dokumenten mit Draft-Text. Ziel: Konsistente Trennung zwischen fertigem Text und unternehmensspezifischen Variablen.

## Grundprinzip

Text der aus ISO-Normen, BSI-Standards oder allgemeinen Best Practices ableitbar ist, wird direkt als fertiger Text geschrieben. Werte die nur das Unternehmen kennt, werden als Variable in eckigen Klammern mit Beschreibung markiert.

## Kategorien

| Kategorie | Format | Beispiel |
|---|---|---|
| Norm-/Best-Practice-Text | Direkt als Text | "Zugriff wird nach dem Least-Privilege-Prinzip vergeben." |
| Unternehmensspezifisch | `[Beschreibung]` | `[Standorte und Rechtsform der Organisation]` |
| Entscheidung noetig | `[Option A \| Option B — Kriterium]` | `[jaehrlich \| halbjaehrlich — abhaengig von Risikolage]` |
| Werkzeug/Tool | `[Tool-Kategorie, z.B. Produkt]` | `[Passwort-Manager, z.B. Bitwarden/1Password]` |
| Schwellwert/Frist | `[Wert — Kontext]` | `[24-72h — fuer kritische Schwachstellen]` |
| Bekannte Rollen | Direkt als Text | "ISB (skr)" |
| Unbekannte Rollen | `[Rolle — Kontext]` | `[IT-Dienstleister/interner Admin]` |
| Prozessdetails (intern) | `[Beschreibung]` | `[Genehmigungsworkflow fuer Zugriffsantraege]` |

## Regeln

| # | Regel |
|---|---|
| 1 | Annex-A-Controls immer direkt als `(adressiert A.x.x)` im Fliesstext — nie als Variable |
| 2 | Citation Keys immer direkt einfuegen: `[REF:key]` oder `[REF:key, Cl. X]` |
| 3 | Interne Querverweise (Siehe auch, Richtlinien-Bezug) direkt als Kurzform-IDs |
| 4 | Metadaten-Block vollstaendig ausfuellen — keine Variablen in Metadaten |
| 5 | Variablen-Beschreibung kurz aber eindeutig: Was muss rein, nicht wie |
| 6 | Sprachniveau des Zieldokumenttyps einhalten (siehe `refs/sprachniveau.md`) |
| 7 | L2-Texte: WAS (Anforderung), nie WIE (Umsetzung) — WIE gehoert in L3/PRC |
| 8 | Bestehende Inhalte erhalten: Unter bestehendem Heading ergaenzen, nicht am Ende anhaengen. `<!-- TODO -->`-Marker durch Text ersetzen. |
| 8a | Bei thematischer Ueberlappung (Skeleton + neue Quelle zum gleichen Thema): Inhalte zusammenfuehren. Kein zweites Heading zum selben Thema anlegen. |
| 9 | TRIM/CAVEAT-Hinweise aus Checker-Feedback beachten (stehen in Task-Description) |
| 10 | Eine Variable pro Sachverhalt — nicht mehrere Variablen in einem Satz verschachteln |
| 11 | **Ziel:** ist primaere Definition (1-2 Saetze), **Geltungsbereich:** definiert Raum/Zielgruppe (1-2 Saetze). Zusammenfassung ist Destillat, wird zuletzt geschrieben. Ziel muss informativer sein als Zusammenfassung. |

## Beispiel: L2-Absatz mit Variablen

```markdown
### Zugriffskontrolle

Der Zugriff auf Informationen und informationsverarbeitende Einrichtungen
wird nach dem Least-Privilege-Prinzip gesteuert (adressiert A.5.15).
Zugriffsrechte werden ausschliesslich auf Basis dokumentierter
Geschaeftsanforderungen vergeben.

Privilegierte Zugriffsrechte werden restriktiv behandelt und auf
[Personenkreis mit privilegiertem Zugriff, z.B. IT-Admins, DevOps]
beschraenkt (adressiert A.8.2). Die Vergabe erfolgt ueber
[Genehmigungsworkflow fuer privilegierte Rechte].
Privilegierte Konten werden [jaehrlich | halbjaehrlich — abhaengig von
Risikoklassifizierung] ueberprueft.
```

## Beispiel: PRC-Absatz mit Variablen

```markdown
### Schritt 3: Bewertung

Der ISB bewertet die gemeldete Schwachstelle anhand des CVSS-Score
und der Relevanz fuer die eigene Infrastruktur.

| Kritikalitaet | CVSS | Patch-Frist |
|---|---|---|
| Kritisch | 9.0-10.0 | [24-72h — abhaengig von Exploitability] |
| Hoch | 7.0-8.9 | [7 Tage] |
| Mittel | 4.0-6.9 | [30 Tage] |
| Niedrig | 0.1-3.9 | [90 Tage / naechstes Wartungsfenster] |
```
