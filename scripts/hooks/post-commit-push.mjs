#!/usr/bin/env node

/**
 * post-commit-push.mjs — PostToolUse-Hook (nach git commit)
 *
 * Pusht zum Remote. Fehler werden gemeldet, blockieren aber nicht.
 * Cross-platform (Node.js ESM).
 */

import { execSync } from 'node:child_process';

try {
  execSync('git push', {
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe'],
    timeout: 30_000,
  });
} catch {
  // Push fehlgeschlagen (kein Remote, Netzwerk etc.) — kein Blocker
}

process.exit(0);
