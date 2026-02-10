#!/usr/bin/env node

/**
 * post-commit-push.mjs — PostToolUse-Hook (nach jedem Bash-Aufruf)
 *
 * Matcher ist "Bash" (PostToolUse matcht nur Tool-Namen).
 * Skript prueft selbst ob der Befehl ein git commit war.
 * Pusht zum Remote. Fehler werden gemeldet, blockieren aber nicht.
 * Cross-platform (Node.js ESM).
 */

import { execSync } from 'node:child_process';
import { readFileSync, appendFileSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..', '..');
const logFile = join(repoRoot, '.temp', 'hook-push.log');
const ts = new Date().toISOString();

// .temp sicherstellen
try { mkdirSync(join(repoRoot, '.temp'), { recursive: true }); } catch {}

// Diagnose: Hook wurde getriggert
appendFileSync(logFile, `${ts} TRIGGERED\n`);

// stdin lesen — Claude Code uebergibt JSON mit tool_input.command
let command = '';
try {
  const raw = readFileSync(0, 'utf-8');
  appendFileSync(logFile, `${ts} STDIN: ${raw.slice(0, 500)}\n`);
  const input = JSON.parse(raw);
  command = input?.tool_input?.command || '';
} catch (err) {
  appendFileSync(logFile, `${ts} STDIN-ERR: ${err.message}\n`);
  process.exit(0);
}

appendFileSync(logFile, `${ts} CMD: ${command.slice(0, 200)}\n`);

// Nur bei git commit pushen
if (!command.startsWith('git commit')) {
  appendFileSync(logFile, `${ts} SKIP (not git commit)\n`);
  process.exit(0);
}

try {
  execSync('git push', {
    encoding: 'utf-8',
    cwd: repoRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: 30_000,
  });
  appendFileSync(logFile, `${ts} PUSH-OK\n`);
} catch (err) {
  const msg = err.stderr || err.stdout || err.message || 'unknown error';
  appendFileSync(logFile, `${ts} PUSH-FAIL: ${msg.trim()}\n`);
  console.error(`[post-commit-push] push failed: ${msg.trim()}`);
}

process.exit(0);
