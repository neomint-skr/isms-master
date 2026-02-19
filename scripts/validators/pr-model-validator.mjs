/**
 * PR Model Validator
 *
 * Validates that the ISMS follows the process-centric protection requirements model.
 * 7 rules checked. Exit 0 = all passed. Exit 1 = violations found.
 *
 * Usage: node scripts/validators/pr-model-validator.mjs
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..', '..');
const violations = [];

function addViolation(rule, file, line, message) {
  violations.push({ rule, file: file.replace(ROOT + '/', '').replace(ROOT + '\\', ''), line, message });
}

function readFile(relPath) {
  const absPath = join(ROOT, relPath);
  if (!existsSync(absPath)) return null;
  return readFileSync(absPath, 'utf-8');
}

function readLines(relPath) {
  const content = readFile(relPath);
  if (!content) return null;
  return content.split(/\r?\n/);
}

function changelogStart(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (/^## Changelog/i.test(lines[i].trim())) return i;
  }
  return lines.length;
}

// Rule 1: PR is exclusively a process property
// No PR record files in folders 2-7. All PR records in 1-Process/ have Asset type = PRC.
function rule1() {
  const prBase = join(ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');
  const layerFolders = ['2-Application', '3-Physical-IT-System', '4-Virtual-IT-System',
    '5-Communication-Connection', '6-Room', '7-Building'];

  for (const folder of layerFolders) {
    const folderPath = join(prBase, folder);
    if (existsSync(folderPath)) {
      try {
        const files = readdirSync(folderPath).filter(f => f !== '.gitkeep');
        if (files.length > 0) {
          addViolation(1, `ISMS-Handbook/Registers/Protection-Requirements/${folder}/`, 0,
            `Layer folder contains PR records: ${files.join(', ')}`);
        }
      } catch { /* folder doesn't exist */ }
    }
  }

  // Check PR records in 1-Process/ have Asset type = PRC
  const processFolder = join(prBase, '1-Process');
  if (existsSync(processFolder)) {
    const files = readdirSync(processFolder).filter(f => f.endsWith('.md') && f !== '.gitkeep');
    for (const file of files) {
      const content = readFileSync(join(processFolder, file), 'utf-8');
      const lines = content.split(/\r?\n/);
      for (let i = 0; i < lines.length; i++) {
        if (/Asset type/i.test(lines[i]) && !/PRC/i.test(lines[i])) {
          addViolation(1, `ISMS-Handbook/Registers/Protection-Requirements/1-Process/${file}`, i + 1,
            'PR record has non-PRC asset type');
        }
      }
    }
  }
}

// Rule 2: Exactly 2 manual input points
// CB_TPL_19: Only per-scenario category (6xC + 6xI) and RTO/RPO/MTD as fillable fields.
// All Overall/Derived fields contain "derived" or "do not select manually".
function rule2() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) { addViolation(2, tplPath, 0, 'Template file not found'); return; }

  let derivedFieldCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check that derived fields contain the marker
    if (/Derived [CIA]|Derived BIA Tier|Overall category/i.test(line)) {
      if (!/derived|do not select manually/i.test(line)) {
        addViolation(2, tplPath, i + 1,
          `Derived/overall field missing "derived" or "do not select manually" marker: ${line.trim()}`);
      } else {
        derivedFieldCount++;
      }
    }
  }

  if (derivedFieldCount < 4) {
    addViolation(2, tplPath, 0,
      `Expected at least 4 derived fields (C, I, A, Overall), found ${derivedFieldCount}`);
  }
}

// Rule 3: No separate BIA register as PR input
// No document references HB_REG_04 in PR context.
// BCM Register contains no "Derived V" or PR classification fields.
function rule3() {
  const bcmPath = 'ISMS-Handbook/Registers/04-BCM-Register.md';
  const bcmLines = readLines(bcmPath);
  if (bcmLines) {
    const clStart = changelogStart(bcmLines);
    for (let i = 0; i < clStart; i++) {
      if (/Derived V/i.test(bcmLines[i])) {
        addViolation(3, bcmPath, i + 1, '"Derived V" found in BCM Register (outside changelog)');
      }
    }
  }

  // Check no document references HB_REG_04 in PR context (exclude changelog)
  const docsToCheck = [
    'Cyber-Security-Cookbook/Policy-Framework/L2_Standards/11-Risk-Management.md',
    'Cyber-Security-Cookbook/Processes/13-Protection-Requirements.md',
    'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md',
  ];

  for (const doc of docsToCheck) {
    const lines = readLines(doc);
    if (!lines) continue;
    const clStart = changelogStart(lines);
    for (let i = 0; i < clStart; i++) {
      if (/HB_REG_04/i.test(lines[i]) && /BIA/i.test(lines[i]) && /protection|PR|availab/i.test(lines[i])) {
        addViolation(3, doc, i + 1,
          `HB_REG_04 referenced in PR context: ${lines[i].trim().substring(0, 100)}`);
      }
    }
  }
}

// Rule 4: No manual category selection
// CB_TPL_19 contains no standalone [Normal / High / Very high] as overall category selection.
function rule4() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) { addViolation(4, tplPath, 0, 'Template file not found'); return; }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match lines that have a standalone category selection (not per-scenario)
    // Per-scenario lines have a # column and a scenario name
    if (/Category\s*\|\s*\[Normal\s*\/\s*High\s*\/\s*Very high\]/i.test(line)) {
      // This is a standalone category selection (old format)
      addViolation(4, tplPath, i + 1,
        `Standalone manual category selection found: ${line.trim()}`);
    }
    // Check for overall category without "derived" marker
    if (/Overall category/i.test(line) && /Normal.*High.*Very high/i.test(line) && !/derived|do not select/i.test(line)) {
      addViolation(4, tplPath, i + 1,
        `Overall category without derived marker: ${line.trim()}`);
    }
  }
}

// Rule 5: Every asset has a process anchor
// In HB_REG_03: PR Source field exists in asset tables
function rule5() {
  const regPath = 'ISMS-Handbook/Registers/03-Asset-Register.md';
  const lines = readLines(regPath);
  if (!lines) { addViolation(5, regPath, 0, 'Asset register not found'); return; }

  // Check that PR Source appears in the mandatory fields
  const hasPRSource = lines.some(l => /PR Source/i.test(l));
  if (!hasPRSource) {
    addViolation(5, regPath, 0, 'PR Source field not found in asset register');
  }

  // Check that asset tables include PR Source column
  const tableHeaders = ['## Processes', '## Applications', '## Physical IT Systems',
    '## Virtual IT Systems', '## Communication Links', '## Rooms', '## Buildings'];

  for (const header of tableHeaders) {
    let inSection = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === header) { inSection = true; continue; }
      if (inSection && lines[i].startsWith('## ')) break;
      if (inSection && lines[i].startsWith('|') && lines[i].includes('ID')) {
        if (!/PR Source/i.test(lines[i])) {
          addViolation(5, regPath, i + 1,
            `Asset table "${header}" missing PR Source column`);
        }
        inSection = false;
      }
    }
  }
}

// Rule 6: Override only Distribution/Cumulation
// Override sections have Type = Cumulation or Distribution + non-empty rationale
function rule6() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) return;

  for (let i = 0; i < lines.length; i++) {
    if (/Override type/i.test(lines[i])) {
      if (!/Cumulation|Distribution/i.test(lines[i])) {
        addViolation(6, tplPath, i + 1,
          'Override type must be Cumulation or Distribution');
      }
    }
  }
}

// Rule 7: No layer PR folders
// Folders 2-Application through 7-Building do not exist under Protection-Requirements/
function rule7() {
  const prBase = join(ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');
  const layerFolders = ['2-Application', '3-Physical-IT-System', '4-Virtual-IT-System',
    '5-Communication-Connection', '6-Room', '7-Building'];

  for (const folder of layerFolders) {
    const folderPath = join(prBase, folder);
    if (existsSync(folderPath)) {
      addViolation(7, `ISMS-Handbook/Registers/Protection-Requirements/${folder}/`, 0,
        `Layer folder still exists`);
    }
  }
}

// Run all rules
console.log('PR Model Validator — 7 Rules\n');

rule1();
rule2();
rule3();
rule4();
rule5();
rule6();
rule7();

if (violations.length === 0) {
  console.log('All 7 rules passed.');
  process.exit(0);
} else {
  console.log(`${violations.length} violation(s) found:\n`);
  for (const v of violations) {
    const loc = v.line > 0 ? `:${v.line}` : '';
    console.log(`  [Rule ${v.rule}] ${v.file}${loc}`);
    console.log(`    ${v.message}\n`);
  }
  process.exit(1);
}
