#!/usr/bin/env node

/**
 * pre-commit-check.mjs — PreToolUse-Hook (vor jedem Bash-Aufruf)
 *
 * Matcher ist "Bash" (PreToolUse matcht nur Tool-Namen).
 * Skript prueft selbst ob der Befehl ein git commit ist.
 * Warnt bei unerwarteten Dateitypen in der Staging-Area.
 * Erlaubt: .md, .json, .sh, .mjs, .yml, .yaml, .txt, .pdf, .ts, .js, .py,
 *          .gitignore, .gitkeep, .gitattributes
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

// Nur bei git commit pruefen
if (!command.startsWith('git commit')) {
  process.exit(0);
}

const repoRoot = resolve(import.meta.dirname, '..', '..');

const ALLOWED = /\.(md|json|sh|mjs|yml|yaml|txt|pdf|ts|js|py)$/;
const DOTFILES = /\.(gitignore|gitkeep|gitattributes)$/;

let staged = '';
try {
  staged = execSync('git diff --cached --name-only', {
    encoding: 'utf-8',
    cwd: repoRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
} catch {
  // Kein Git-Repo oder kein Index — durchlassen
  process.exit(0);
}

if (!staged) {
  process.exit(0);
}

const unexpected = staged
  .split('\n')
  .filter(f => !ALLOWED.test(f) && !DOTFILES.test(f));

if (unexpected.length > 0) {
  console.log(`Unerwartete Dateien im Commit: ${unexpected.join(', ')}`);
  process.exit(1);
}

process.exit(0);
