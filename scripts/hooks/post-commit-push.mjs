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
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// stdin lesen — Claude Code uebergibt JSON mit tool_input.command
let command = '';
try {
  const input = JSON.parse(readFileSync(0, 'utf-8'));
  command = input?.tool_input?.command || '';
} catch {
  process.exit(0);
}

// Nur bei git commit pushen (command kann mit cd anfangen)
if (!command.includes('git commit')) {
  process.exit(0);
}

const repoRoot = resolve(import.meta.dirname, '..', '..');

try {
  execSync('git push', {
    encoding: 'utf-8',
    cwd: repoRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: 30_000,
  });
} catch (err) {
  const msg = err.stderr || err.stdout || err.message || 'unknown error';
  console.error(`[post-commit-push] push failed: ${msg.trim()}`);
}

process.exit(0);
