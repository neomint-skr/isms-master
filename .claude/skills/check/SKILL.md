---
name: check
description: Konsistenz-Check des ISMS-Repos (10 Pruefungen)
---

Starte den `consistency-checker` Agent als Subagent (haiku). Er fuehrt 10 Pruefungen durch: Metadaten-ID, INDEX.md, Coverage-Matrix, Pfad-Referenzen, SoA-Konsistenz, Dokumentaufbau, Versionsformat, Citation Keys, Ref-Derivat, Repo-Hygiene.

Verwende das Task-Tool mit `subagent_type: "consistency-checker"` und gib als Prompt:

"Fuehre das vollstaendige Pruefprotokoll (10 Pruefungen) durch und berichte die Ergebnistabelle."

Zeige dem User das Ergebnis als kompakte Tabelle.
