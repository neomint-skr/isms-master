# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo-Zweck

Zentraler ISMS-Blueprint fuer alle Kunden. Policies, Richtlinien und Massnahmen werden hier entwickelt und gepflegt. Verbesserungen wirken kundenuebergreifend.

## Globale Config

Globale Regeln und User-Profil werden von `claude-code-master` (`gitlab.com/neomint-skr/claude-code-master`) nach `~/.claude/` deployed und gelten automatisch. Aenderungen dort, nicht hier.

## Konventionen

### MCP-Server

`.mcp.json` im Repo-Root definiert die aktiven MCP-Server.

Aktive Server: sequential-thinking, basic-memory, context7.

**Datenhoheit:** Wenn ein MCP-Server Zugriff auf Daten bietet, werden diese ausschliesslich ueber seine MCP-Tools zugegriffen — nie per Read, Edit, Write oder Grep direkt. Bei Server-Ausfall: Server reparieren, nicht Daten direkt lesen. Permission-Blocks in `settings.json` erzwingen dies fuer bekannte MCP-Datenpfade.

| MCP-Server | Verwaltetes Verzeichnis | Gesperrt fuer |
|---|---|---|
| basic-memory | `.memory/` | Read, Edit, Write |

**Nutzungspflicht:** Bestimmte MCP-Server muessen in definierten Kontexten aktiv genutzt werden.

| MCP-Server | Pflichtkontext | Fallback bei Ausfall |
|---|---|---|
| sequential-thinking | Plan Mode (jede Planungsaktivitaet) | Server ueber `/mcp` neu starten |
| context7 | Library-/Framework-Recherche | WebSearch/WebFetch |

### Sprache

Dokumentinhalt: Deutsch. Steuerungsdokumente: Englisch/Deutsch gemischt.
