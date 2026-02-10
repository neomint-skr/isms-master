#!/usr/bin/env node

/**
 * post-commit-push.mjs — PostToolUse-Hook (nach git commit)
 *
 * Pusht zum Remote. Fehler werden gemeldet, blockieren aber nicht.
 * Cross-platform (Node.js ESM).
 */

import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

// cwd auf Repo-Root setzen (Hook-Runner kann anderes cwd haben)
const repoRoot = resolve(import.meta.dirname, '..', '..');

try {
  execSync('git push', {
    encoding: 'utf-8',
    cwd: repoRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: 30_000,
  });
} catch (err) {
  // Push fehlgeschlagen — kein Blocker, aber sichtbar machen
  const msg = err.stderr || err.stdout || err.message || 'unknown error';
  console.error(`[post-commit-push] push failed: ${msg.trim()}`);
}

process.exit(0);
