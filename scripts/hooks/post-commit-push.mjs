#!/usr/bin/env node

/**
 * post-commit-push.mjs — PostToolUse-Hook (nach git commit)
 *
 * Pusht zum Remote. Fehler werden gemeldet, blockieren aber nicht.
 * Cross-platform (Node.js ESM).
 */

import { execSync } from 'node:child_process';
import { resolve, join } from 'node:path';
import { appendFileSync } from 'node:fs';

// cwd auf Repo-Root setzen (Hook-Runner kann anderes cwd haben)
const repoRoot = resolve(import.meta.dirname, '..', '..');
const logFile = join(repoRoot, '.temp', 'hook-push.log');

const ts = new Date().toISOString();

try {
  const out = execSync('git push', {
    encoding: 'utf-8',
    cwd: repoRoot,
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: 30_000,
  });
  appendFileSync(logFile, `${ts} OK: ${(out || '').trim()}\n`);
} catch (err) {
  const msg = err.stderr || err.stdout || err.message || 'unknown error';
  appendFileSync(logFile, `${ts} FAIL: ${msg.trim()}\n`);
  console.error(`[post-commit-push] push failed: ${msg.trim()}`);
}

process.exit(0);
