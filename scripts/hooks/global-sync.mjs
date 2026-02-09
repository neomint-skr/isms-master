#!/usr/bin/env node

/**
 * global-sync.mjs — SessionStart-Hook
 *
 * Prueft bei jedem Sessionstart ob sich claude-code-master auf GitLab
 * geaendert hat. Falls ja: clone + sync.mjs ausfuehren.
 *
 * Exit-Code immer 0 — Fehler werden geloggt, blockieren aber nicht.
 */

import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir, tmpdir } from 'node:os';
import { execSync } from 'node:child_process';

const REMOTE = 'https://gitlab.com/neomint-skr/claude-code-master.git';
const HASH_FILE = join(homedir(), '.claude', '.sync-hash');
const TEMP_DIR = join(tmpdir(), 'claude-code-master-sync');

try {
  // 1. Letzten gesyncten Hash lesen
  let oldHash = '';
  if (existsSync(HASH_FILE)) {
    oldHash = readFileSync(HASH_FILE, 'utf-8').trim();
  }

  // 2. Aktuellen Remote-Hash holen
  const lsRemote = execSync(`git ls-remote ${REMOTE} refs/heads/main`, {
    encoding: 'utf-8',
    timeout: 15_000,
  });
  const newHash = lsRemote.split('\t')[0].trim();

  if (!newHash) {
    console.log('Warnung: Konnte Remote-Hash nicht lesen.');
    process.exit(0);
  }

  // 3. Vergleich
  if (oldHash === newHash) {
    console.log('Globale Config aktuell.');
    process.exit(0);
  }

  // 4. Clone in temp
  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true, force: true });
  }
  execSync(`git clone --depth 1 "${REMOTE}" "${TEMP_DIR}"`, {
    encoding: 'utf-8',
    timeout: 20_000,
    stdio: 'pipe',
  });

  // 5. sync.mjs ausfuehren (global/ → ~/.claude/)
  execSync(`node "${join(TEMP_DIR, 'scripts', 'sync.mjs')}"`, {
    encoding: 'utf-8',
    timeout: 10_000,
    stdio: 'pipe',
  });

  // 6. Neuen Hash speichern
  mkdirSync(join(homedir(), '.claude'), { recursive: true });
  writeFileSync(HASH_FILE, newHash + '\n', 'utf-8');

  // 7. Aufraeumen
  rmSync(TEMP_DIR, { recursive: true, force: true });

  // 8. Meldung
  const shortHash = newHash.substring(0, 8);
  console.log(`Globale Config aktualisiert (${shortHash}).`);

} catch (err) {
  // Aufraeumen bei Fehler
  try {
    if (existsSync(TEMP_DIR)) {
      rmSync(TEMP_DIR, { recursive: true, force: true });
    }
  } catch { /* ignore cleanup errors */ }

  console.log(`Warnung: Global-Sync fehlgeschlagen: ${err.message}`);
}

process.exit(0);
