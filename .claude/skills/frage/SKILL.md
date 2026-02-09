---
name: frage
description: "ISMS-Fachfrage beantworten (Zwei-Schritt: Bibliothekar → Researcher)"
---

Beantworte eine ISMS-Fachfrage im Zwei-Schritt-Verfahren:

**Schritt 1 — Bibliothekar:** Verwende das Task-Tool mit `subagent_type: "bibliothekar"` und gib als Prompt die Fachfrage des Users. Er durchsucht die Referenz-Bibliothek und liefert ein strukturiertes Briefing.

**Schritt 2 — Researcher:** Verwende das Task-Tool mit `subagent_type: "researcher"` und gib als Prompt die urspruengliche Fachfrage UND das Bibliotheks-Briefing aus Schritt 1. Er synthetisiert eine kontextgerechte Empfehlung.

Zeige dem User das Recherche-Ergebnis des Researchers.

Die Fachfrage des Users steht im Argument nach `/frage`. Beispiel: `/frage Wie gestalten wir das Risikomanagement?`
