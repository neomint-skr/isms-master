# Konventionen

## Steuerungsdokumente

Repo-Steuerungsdokumente (CLAUDE.md, CHANGELOG etc.) werden in **lean Markdown** erfasst:
- Flache Pfade statt visueller Baumstrukturen (keine Baumzeichen)
- Kompakte Tabellen statt Prosa fuer strukturierte Daten
- Abkuerzungen mit Legende statt ausgeschriebener Wiederholungen
- Keine dekorativen Elemente die nur fuer menschliches Lesen nuetzlich sind

## Temp-Dateien

Temporaere Dateien (Einmal-Skripte, Zwischenergebnisse, Testdaten) gehoeren in `.temp/`. Nie im Repo-Root ablegen. `.temp/` ist in `.gitignore` und wird nicht committed.

## Hooks

Alle Hooks muessen **cross-platform** sein (macOS, Windows, Linux). Node.js (`.mjs`) ist die einzige erlaubte Runtime fuer neue Hooks — kein Bash, kein PowerShell.

Regeln:
- Sprache: Node.js ESM (`.mjs`), keine Shell-Skripte
- Pfade: `node scripts/hooks/<name>.mjs` in `.claude/settings.json`
- Plattform-Weichen via `process.platform` wo noetig
- Keine Shell-Syntax — stattdessen `child_process.execSync` + `try/catch`
- Exit-Code-Semantik: `process.exit(0)` = ok, `process.exit(1)` = blockieren

## Commits

Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`

Nach jeder abgeschlossenen Task: Commit + Push. Nicht mehrere Tasks in einem Commit sammeln.

## MCP-Server

Docker Desktop MCP Gateway ist SSOT fuer alle MCP-Server.
Keine lokalen MCP-Server (.mcp.json, stdio, npx, uvx).
Keine MCP-Server auf User-Ebene (~/.claude/).

Ausnahmen von dieser Regel NUR auf explizite User-Genehmigung.
Ohne Genehmigung: Jede Abweichung blockieren.

## Regelwerk-Pflege

Jedes Repo pflegt sein Regelwerk eigenstaendig.
Bei uebergreifenden Aenderungen: Konsistenz mit Schwester-Repos pruefen.
