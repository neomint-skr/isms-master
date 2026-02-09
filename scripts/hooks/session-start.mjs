#!/usr/bin/env node

/**
 * session-start.mjs — SessionStart-Hook
 *
 * Gibt Session-Kontext aus: offene Tasks + letzte Commits.
 * Cross-platform (Node.js ESM).
 */

import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = join(fileURLToPath(import.meta.url), '..', '..', '..');
const TASKS_DIR = join(REPO_ROOT, '.claude', 'tasks');

// --- Offene Tasks ---

let tasks = 'keine';
try {
  if (existsSync(TASKS_DIR)) {
    const files = readdirSync(TASKS_DIR)
      .filter(f => f.endsWith('.md'))  // nur .md, keine Unterordner (archive/)
      .map(f => basename(f, '.md'));
    if (files.length > 0) {
      tasks = files.join(',');
    }
  }
} catch {
  // Verzeichnis nicht lesbar — ok
}

// --- Letzte 5 Commits ---

let commits = 'keine';
try {
  commits = execSync('git log --oneline -5', {
    cwd: REPO_ROOT,
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
} catch {
  // Kein Git-Repo oder keine Commits — ok
}

console.log(`Session: Tasks: [${tasks}] | Commits: ${commits}`);
process.exit(0);
