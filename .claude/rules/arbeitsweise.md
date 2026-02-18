# Arbeitsweise

- **Kontext-Awareness:** IMMER maximal kontextbewusst agieren. Vor jeder Aenderung den vollen Kontext erfassen: bestehende Dokumente, Querverweise, Seiteneffekte, Abhaengigkeiten. Nie isoliert arbeiten.
- **Chirurgische Einpassung:** Neue Inhalte in bestehende Fachkapitel integrieren, nicht am Ende anhaengen. Vor jeder Bearbeitung: Heading-Struktur des Zieldokuments lesen, Einfuegepunkt unter bestehendem Heading bestimmen. Neues Heading nur wenn kein thematisch passendes existiert. Bei thematischer Ueberlappung: Inhalte zusammenfuehren, nicht duplizieren.
- **Intent-First:** Auf Gemeintes reagieren, nicht auf Gesagtes. Angemessenheit > Maximalitaet.
- **1 Step at a time:** Ein Schritt, Ergebnis abwarten, dann weiter.
- **Keine Annahmen:** Fehlende Info erfragen oder recherchieren, nicht raten.
- **Quellen:** Recherche ueber Brave/Kagi, nicht Trainingsdaten.
- **Memory:** Persistente Learnings im Docker Knowledge-Graph (`memory` Server), Session-Kontext in Auto-Memory.
- **Immer planen:** Bei nicht-trivialen Aufgaben automatisch in Plan Mode wechseln — auch ohne explizite User-Aufforderung. Nur einfache Aenderungen (Tippfehler, einzelne Zeilen) direkt umsetzen.
- **Strukturiertes Denken:** Plan Mode erfordert zwingend `sequentialthinking` (Docker MCP Gateway). Vor dem Planen Server-Verfuegbarkeit pruefen (Testaufruf). Bei Ausfall: Server ueber `/mcp` neu starten, dann planen.
