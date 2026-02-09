#!/usr/bin/env node

/**
 * ensure-prerequisites.mjs
 *
 * Cross-Platform Bootstrap fuer Projekte mit basic-memory MCP.
 * Prueft und installiert uv/uvx (Python-Paketmanager fuer basic-memory MCP).
 * Legt .memory/ an falls nicht vorhanden.
 * Konfiguriert basic-memory Projekt (Pfad + default_project_mode).
 * Bereinigt MCP-Config ausserhalb .mcp.json (SSOT-Enforcement).
 *
 * Projektname wird dynamisch aus dem Repo-Verzeichnisnamen abgeleitet.
 *
 * Wird vom SessionStart-Hook aufgerufen.
 * Exit-Code immer 0 (Hook blockiert nicht, gibt nur Warnings aus).
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath() statt URL.pathname — liefert auf Windows korrekte Pfade (ohne fuehrenden Slash)
// Deployed unter scripts/hooks/ensure-prerequisites.mjs → ../../../ = Repo-Root
const REPO_ROOT = join(fileURLToPath(import.meta.url), '..', '..', '..');
const MEMORY_DIR = join(REPO_ROOT, '.memory');
const PROJECT_NAME = basename(REPO_ROOT);

// --- Hilfsfunktionen ---

function commandExists(cmd) {
  try {
    const which = process.platform === 'win32' ? 'where' : 'which';
    execSync(`${which} ${cmd}`, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function info(msg) {
  console.log(`[prerequisites] ${msg}`);
}

function warn(msg) {
  console.warn(`[prerequisites] WARN: ${msg}`);
}

// --- Hauptlogik ---

function ensureUv() {
  // 1. Pruefe ob uvx bereits im PATH
  if (commandExists('uvx')) {
    info('uvx gefunden.');
    return true;
  }

  // 2. Pruefe typische Installationspfade (uv installiert, aber nicht im PATH)
  const homeDir = process.env.HOME || process.env.USERPROFILE || '';
  const commonPaths = [
    join(homeDir, '.local', 'bin', 'uvx'),
    join(homeDir, '.cargo', 'bin', 'uvx'),
  ];

  for (const p of commonPaths) {
    if (existsSync(p)) {
      warn(`uvx gefunden unter ${p}, aber nicht im PATH. Bitte PATH erweitern.`);
      return false;
    }
  }

  // 3. Auto-Installation
  info('uvx nicht gefunden. Installiere uv...');

  try {
    if (process.platform === 'win32') {
      execSync(
        'powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"',
        { stdio: 'inherit', timeout: 60_000 }
      );
    } else {
      // macOS + Linux
      execSync(
        'curl -LsSf https://astral.sh/uv/install.sh | sh',
        { stdio: 'inherit', timeout: 60_000 }
      );
    }
    info('uv Installation abgeschlossen.');

    // Nochmal pruefen (neuer PATH nach Installation)
    if (commandExists('uvx')) {
      info('uvx jetzt verfuegbar.');
      return true;
    }

    // Typischer Fall: Installer hat PATH-Hinweis ausgegeben
    warn('uv installiert, aber uvx noch nicht im PATH. Bitte Terminal neu starten oder PATH erweitern.');
    return false;
  } catch (err) {
    warn(`uv Installation fehlgeschlagen: ${err.message}`);
    warn('Bitte manuell installieren: https://docs.astral.sh/uv/getting-started/installation/');
    return false;
  }
}

function ensureMemoryDir() {
  if (existsSync(MEMORY_DIR)) {
    info('.memory/ vorhanden.');
    return;
  }

  try {
    mkdirSync(MEMORY_DIR, { recursive: true });
    info('.memory/ angelegt.');
  } catch (err) {
    warn(`.memory/ konnte nicht angelegt werden: ${err.message}`);
  }
}

function ensureBasicMemoryConfig() {
  // basic-memory Config: ~/.basic-memory/config.json
  // Stellt sicher, dass das Projekt auf MEMORY_DIR zeigt und default_project_mode aktiv ist.
  const homeDir = process.env.HOME || process.env.USERPROFILE || '';
  const configDir = join(homeDir, '.basic-memory');
  const configPath = join(configDir, 'config.json');

  // Ohne uvx kann basic-memory nicht laufen — Config-Fix ueberspringen
  if (!commandExists('uvx')) {
    return;
  }

  let config;
  if (existsSync(configPath)) {
    try {
      config = JSON.parse(readFileSync(configPath, 'utf-8'));
    } catch {
      warn('basic-memory config.json nicht lesbar, ueberspringe.');
      return;
    }
  } else {
    // Erstmalige Einrichtung: Config-Verzeichnis + minimale Config anlegen
    try {
      mkdirSync(configDir, { recursive: true });
    } catch {
      warn('~/.basic-memory/ konnte nicht angelegt werden.');
      return;
    }
    config = {};
  }

  let changed = false;

  // Projekt-Pfad pruefen/setzen (dynamischer Projektname aus Verzeichnis)
  if (!config.projects) config.projects = {};
  if (config.projects[PROJECT_NAME] !== MEMORY_DIR) {
    config.projects[PROJECT_NAME] = MEMORY_DIR;
    changed = true;
  }

  // default_project_mode muss true sein, damit MCP ohne expliziten project-Parameter funktioniert
  if (config.default_project_mode !== true) {
    config.default_project_mode = true;
    changed = true;
  }

  if (changed) {
    try {
      writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n', 'utf-8');
      info(`basic-memory config.json aktualisiert (Projekt: ${PROJECT_NAME}).`);
    } catch (err) {
      warn(`basic-memory config.json konnte nicht geschrieben werden: ${err.message}`);
    }
  } else {
    info('basic-memory config.json ok.');
  }
}

function validateMcpSsot() {
  const homeDir = process.env.HOME || process.env.USERPROFILE || '';
  const claudeDir = join(homeDir, '.claude');
  const actions = [];

  // Hilfsfunktion: mcpServers Key aus JSON-Datei entfernen
  function removeMcpServersKey(filePath, label) {
    try {
      const data = JSON.parse(readFileSync(filePath, 'utf-8'));
      if (!data.mcpServers) return;
      delete data.mcpServers;
      writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
      actions.push(`[mcp-ssot] BEREINIGT: mcpServers aus ${label} entfernt.`);
    } catch (err) {
      actions.push(`[mcp-ssot] WARN: konnte mcpServers nicht aus ${label} entfernen: ${err.message}`);
    }
  }

  // 1. ~/.claude/settings.json — mcpServers Key?
  const globalSettings = join(claudeDir, 'settings.json');
  if (existsSync(globalSettings)) {
    removeMcpServersKey(globalSettings, '~/.claude/settings.json');
  }

  // 2. ~/.claude/.mcp.json — Datei existiert?
  const userMcp = join(claudeDir, '.mcp.json');
  if (existsSync(userMcp)) {
    try {
      unlinkSync(userMcp);
      actions.push('[mcp-ssot] BEREINIGT: ~/.claude/.mcp.json geloescht.');
    } catch (err) {
      actions.push(`[mcp-ssot] WARN: konnte ~/.claude/.mcp.json nicht loeschen: ${err.message}`);
    }
  }

  // 3. ~/.claude/projects/*/settings.json — mcpServers Key?
  const projectsDir = join(claudeDir, 'projects');
  try {
    if (existsSync(projectsDir)) {
      for (const entry of readdirSync(projectsDir)) {
        const settingsPath = join(projectsDir, entry, 'settings.json');
        if (existsSync(settingsPath)) {
          removeMcpServersKey(settingsPath, `~/.claude/projects/${entry}/settings.json`);
        }
      }
    }
  } catch { /* projects-Verzeichnis nicht lesbar — uebersprungen */ }

  if (actions.length === 0) {
    console.log('[mcp-ssot] ok — keine Server ausserhalb .mcp.json.');
  } else {
    for (const a of actions) {
      console.log(a);
    }
  }
}

// --- Ausfuehrung ---

try {
  ensureUv();
  ensureMemoryDir();
  ensureBasicMemoryConfig();
  validateMcpSsot();
} catch (err) {
  warn(`Unerwarteter Fehler: ${err.message}`);
}

// Hook blockiert nie — immer Exit 0
process.exit(0);
