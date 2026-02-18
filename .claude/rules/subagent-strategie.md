# Subagent-Strategie

Hauptkontext = schlank. Alles was viel liest aber wenig aendert → Subagent.

**Taxonomie:** Agent = eigene Arbeitseinheit mit Kontext. Skill (fork) = User-Shortcut fuer Agent. Skill (inline) = Wissen injizieren. Hook = automatische Event-Reaktion. Komposition passiert NUR im Hauptkontext.

**Kontextfenster-Schutz bei Agent-Einsatz:**

| Regel | Beschreibung |
|---|---|
| Output-Vertrag | Jeder Agent-Prompt MUSS enden mit: "Schreibe Ergebnis nach [Pfad]. Gib NUR 5-Zeilen-Summary zurueck." |
| Write-faehige Agenten | Nur `general-purpose` hat Write-Tool. Spezialisierte Agenten liefern Text als Return. Fuer File-Output immer `general-purpose` mit Fach-Prompt verwenden. |
| Schlanker Orchestrator | Hauptkontext liest NIE grosse Dateien oder Quellen. Agenten lesen ihre Inputs selbst. Orchestrator prueft nur Datei-Existenz (Glob) und Summary. |
| File-Handoff | Phase N schreibt Datei → Orchestrator prueft Existenz → Phase N+1 liest Datei selbst. Kein Datendurchfluss durch Hauptkontext. |
| /compact zwischen Phasen | Nach jeder abgeschlossenen Phase `/compact` ausfuehren um Kontext zu komprimieren. |
| Max 3 parallele Agenten | Mehr erzeugt zu viele gleichzeitige Return-Texte im Hauptkontext. |
