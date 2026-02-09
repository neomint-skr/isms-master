---
name: mece
description: MECE-Pruefung der ISMS-Architektur (6 Pruefungen)
---

Starte den `mece-checker` Agent als Subagent (sonnet). Er fuehrt 6 Pruefungen durch: Control-Verteilung, L2/L3-Trennung, Traceability, Grundsatz-Abdeckung, CLS-PRC-REG Kette, verwaiste Register.

Verwende das Task-Tool mit `subagent_type: "mece-checker"` und gib als Prompt:

"Fuehre das vollstaendige MECE-Pruefprotokoll (6 Pruefungen) durch und berichte die Ergebnistabelle."

Zeige dem User das Ergebnis als kompakte Tabelle.
