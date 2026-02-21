/**
 * LRM-44 Perfectness Validator
 *
 * Validates that the LRM-44 migration is complete and consistent.
 * 9 checks: core artefacts, notation, INDEX entries, legacy removal,
 * SSOT boundaries, README, and internal link integrity.
 *
 * Usage: node scripts/validators/lrm44-perfectness-validator.mjs
 * Exit 0 = all pass. Exit 1 = findings.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve, relative, posix, sep } from 'path';

const ROOT = resolve(import.meta.dirname, '..', '..');

function toFwd(p) { return p.split(sep).join(posix.sep); }

function readF(absPath) {
  if (!existsSync(absPath)) return null;
  return readFileSync(absPath, 'utf-8');
}

function collectMdFiles(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.claude', '.temp', '.git', 'node_modules', 'References'].includes(entry.name)) continue;
      results.push(...collectMdFiles(full));
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// ── Results ──────────────────────────────────────────────────────────

const checks = [];
function check(id, name, fn) {
  const findings = [];
  fn(findings);
  const status = findings.length === 0 ? 'PASS' : 'FAIL';
  checks.push({ id, name, status, findings });
}

// ── Check 1: Core artefacts exist ────────────────────────────────────

check(1, 'LRM-44 core artefacts exist', (f) => {
  const required = [
    'ISMS-Handbook/Registers/05-Risk-Library/Register_Risk-Library.md',
    'ISMS-Handbook/Registers/05-Risk-Library/Matrix_4x4.md',
    'ISMS-Handbook/Registers/05-Risk-Library/Rubric_Impact.md',
    'ISMS-Handbook/Registers/05-Risk-Library/Rubric_Likelihood.md',
    'ISMS-Handbook/Registers/05-Risk-Library/Library_Scenarios.md',
    'ISMS-Handbook/Registers/05-Risk-Library/Playbooks_Treatment.md',
    'ISMS-Handbook/Registers/07-Risk-Log/Register_Risk-Log.md',
    'ISMS-Handbook/Registers/09-Statement-of-Applicability/Register_Statement-of-Applicability.md',
  ];
  for (const p of required) {
    if (!existsSync(join(ROOT, p))) {
      f.push(`MISSING: ${p}`);
    }
  }
});

// ── Check 2: No Label(Value) notation ────────────────────────────────

check(2, 'No Label(Value) notation in active docs', (f) => {
  const pattern = /(Minor|Moderate|Major|Severe|Rare|Unlikely|Possible|Likely)\(\d/;
  const targetDirs = [
    'ISMS-Handbook/Registers/05-Risk-Library',
    'ISMS-Handbook/Registers/07-Risk-Log',
    'Cyber-Security-Cookbook/Templates',
    'Cyber-Security-Cookbook/Policy-Framework/L2_Standards',
  ];

  for (const dir of targetDirs) {
    const absDir = join(ROOT, dir);
    if (!existsSync(absDir)) continue;
    for (const file of collectMdFiles(absDir)) {
      const content = readF(file);
      if (!content) continue;
      const rel = toFwd(relative(ROOT, file));
      const lines = content.split(/\r?\n/);

      // Find changelog start to exclude it
      let clStart = lines.length;
      for (let i = 0; i < lines.length; i++) {
        if (/^## Changelog/i.test(lines[i].trim())) { clStart = i; break; }
      }

      for (let i = 0; i < clStart; i++) {
        if (pattern.test(lines[i])) {
          f.push(`${rel}:${i + 1} — ${lines[i].trim().substring(0, 100)}`);
        }
      }
    }
  }
});

// ── Check 3: INDEX.md has REG_RL + REG_RLB ──────────────────────────

check(3, 'INDEX.md contains REG_RL and REG_RLB', (f) => {
  const index = readF(join(ROOT, 'INDEX.md'));
  if (!index) { f.push('INDEX.md not found'); return; }

  // Check abbreviation table section
  const abbrStart = index.indexOf('## Abbreviations');
  if (abbrStart === -1) { f.push('## Abbreviations section not found'); return; }
  const abbrSection = index.substring(abbrStart);

  if (!/\|\s*REG_RLB\s*\|/.test(abbrSection)) {
    f.push('REG_RLB not found in abbreviation table');
  }
  if (!/\|\s*REG_RL\s*\|/.test(abbrSection)) {
    f.push('REG_RL not found in abbreviation table');
  }
});

// ── Check 4: INDEX.md does NOT have REG_RR/REG_RT/REG_RF ───────────

check(4, 'INDEX.md free of legacy abbreviations', (f) => {
  const index = readF(join(ROOT, 'INDEX.md'));
  if (!index) { f.push('INDEX.md not found'); return; }

  const abbrStart = index.indexOf('## Abbreviations');
  if (abbrStart === -1) return;
  const abbrSection = index.substring(abbrStart);

  if (/\|\s*REG_RR\s*\|/.test(abbrSection)) {
    f.push('REG_RR still present in abbreviation table');
  }
  if (/\|\s*REG_RT\s*\|/.test(abbrSection)) {
    f.push('REG_RT still present in abbreviation table');
  }
  if (/\|\s*REG_RF\s*\|/.test(abbrSection)) {
    f.push('REG_RF still present in abbreviation table');
  }
});

// ── Check 5: Legacy directories do not exist ────────────────────────

check(5, 'Legacy directories removed', (f) => {
  const legacyDirs = [
    'ISMS-Handbook/Registers/05-Risk-Framework',
    'ISMS-Handbook/Registers/07-Risk-Register',
    'ISMS-Handbook/Registers/08-Risk-Treatment',
  ];
  for (const d of legacyDirs) {
    if (existsSync(join(ROOT, d))) {
      f.push(`Legacy directory exists: ${d}`);
    }
  }
});

// ── Check 6: Layer directories in 06-Risk-Assessments removed ───────

check(6, 'Layer directories removed from 06-Risk-Assessments', (f) => {
  const base = join(ROOT, 'ISMS-Handbook/Registers/06-Risk-Assessments');
  const layerDirs = [
    '1-Process', '2-Application', '3-Physical-IT-System',
    '4-Virtual-IT-System', '5-Communication-Connection', '6-Room', '7-Building',
  ];
  for (const d of layerDirs) {
    if (existsSync(join(base, d))) {
      f.push(`Layer directory exists: 06-Risk-Assessments/${d}`);
    }
  }
});

// ── Check 7: SSOT Boundaries table in Risk Log ─────────────────────

check(7, 'SSOT Boundaries in Risk Log', (f) => {
  const rl = readF(join(ROOT, 'ISMS-Handbook/Registers/07-Risk-Log/Register_Risk-Log.md'));
  if (!rl) { f.push('Risk Log not found'); return; }
  if (!/## SSOT Boundaries/.test(rl)) {
    f.push('## SSOT Boundaries heading not found');
  }
});

// ── Check 8: 06-Risk-Assessments/README.md exists ──────────────────

check(8, '06-Risk-Assessments README exists', (f) => {
  const readme = join(ROOT, 'ISMS-Handbook/Registers/06-Risk-Assessments/README.md');
  if (!existsSync(readme)) {
    f.push('README.md not found in 06-Risk-Assessments');
  }
});

// ── Check 9: Internal Markdown link integrity ───────────────────────

check(9, 'Internal Markdown link integrity', (f) => {
  const allFiles = [
    ...collectMdFiles(join(ROOT, 'Cyber-Security-Cookbook')),
    ...collectMdFiles(join(ROOT, 'ISMS-Handbook')),
  ];

  // Link pattern: [text](relative-path.md) or [text](relative-path.md#anchor)
  const linkPattern = /\[([^\]]*)\]\(([^)]+\.md(?:#[^)]*)?)\)/g;
  let broken = 0;

  for (const file of allFiles) {
    const content = readF(file);
    if (!content) continue;
    const rel = toFwd(relative(ROOT, file));
    const dir = join(ROOT, toFwd(relative(ROOT, file)).split('/').slice(0, -1).join('/'));

    let match;
    while ((match = linkPattern.exec(content)) !== null) {
      const target = match[2].split('#')[0]; // Remove anchor
      if (target.startsWith('http')) continue; // Skip URLs

      // Resolve relative to file's directory
      const absTarget = resolve(join(ROOT, toFwd(relative(ROOT, file)).split('/').slice(0, -1).join('/')), target);
      if (!existsSync(absTarget)) {
        broken++;
        if (broken <= 20) { // Limit output
          f.push(`${rel} -> ${target} (not found)`);
        }
      }
    }
  }

  if (broken > 20) {
    f.push(`... and ${broken - 20} more broken links`);
  }
});

// ── Report ──────────────────────────────────────────────────────────

console.log('LRM-44 Perfectness Validator');
console.log('============================\n');

let failCount = 0;
for (const c of checks) {
  const icon = c.status === 'PASS' ? 'PASS' : 'FAIL';
  console.log(`  [${icon}]  Check ${c.id}: ${c.name}`);
  if (c.findings.length > 0) {
    failCount++;
    for (const finding of c.findings) {
      console.log(`         ${finding}`);
    }
  }
}

console.log(`\nResult: ${checks.length - failCount}/${checks.length} passed.`);

process.exit(failCount > 0 ? 1 : 0);
