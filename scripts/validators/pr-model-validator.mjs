/**
 * PR Model Validator
 *
 * Validates that the ISMS follows the process-centric protection requirements model.
 * 10 rules checked. Exit 0 = all passed. Exit 1 = violations found.
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
// No PR record files in layer folders. All PR records in Protection-Requirements/ have Asset type = PRC.
function rule1() {
  const prBase = join(ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');

  // Check PR records directly in Protection-Requirements/ have Asset type = PRC
  if (existsSync(prBase)) {
    const files = readdirSync(prBase).filter(f => f.endsWith('.md') && f !== 'README.md' && f !== '.gitkeep');
    for (const file of files) {
      const content = readFileSync(join(prBase, file), 'utf-8');
      const lines = content.split(/\r?\n/);
      for (let i = 0; i < lines.length; i++) {
        if (/Asset type/i.test(lines[i]) && !/PRC/i.test(lines[i])) {
          addViolation(1, `ISMS-Handbook/Registers/Protection-Requirements/${file}`, i + 1,
            'PR record has non-PRC asset type');
        }
      }
    }
  }
}

// Rule 2: Exactly 2 manual input points
// CB_TPL_19: Only per-scenario category (6xC + 6xI) and RTO/RPO/MTD as fillable fields.
// All Derived fields contain "derived" or "do not select/fill manually".
function rule2() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) { addViolation(2, tplPath, 0, 'Template file not found'); return; }

  let derivedFieldCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check that derived fields contain the marker
    if (/Derived [CIA]|Derived BIA Tier/i.test(line)) {
      if (!/derived|do not (select|fill) manually/i.test(line)) {
        addViolation(2, tplPath, i + 1,
          `Derived field missing "derived" or "do not select/fill manually" marker: ${line.trim()}`);
      } else {
        derivedFieldCount++;
      }
    }
  }

  if (derivedFieldCount < 7) {
    addViolation(2, tplPath, 0,
      `Expected at least 7 derived fields (C, I, BIA Tier, A + 3 Summary), found ${derivedFieldCount}`);
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

// Rule 6: Override documentation in HB_REG_03 PR Source
// PR Source for sub-assets must use the 3-value enum, not "Inherited from"
function rule6() {
  const regPath = 'ISMS-Handbook/Registers/03-Asset-Register.md';
  const lines = readLines(regPath);
  if (!lines) return;

  const clStart = changelogStart(lines);
  for (let i = 0; i < clStart; i++) {
    if (/Inherited from/i.test(lines[i]) && /PR Source/i.test(lines[i])) {
      addViolation(6, regPath, i + 1,
        `PR Source uses deprecated "Inherited from" format: ${lines[i].trim().substring(0, 100)}`);
    }
  }
}

// Rule 7: No layer PR folders
// Folders 1-Process through 7-Building do not exist under Protection-Requirements/
function rule7() {
  const prBase = join(ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');
  const forbiddenFolders = ['1-Process', '2-Application', '3-Physical-IT-System', '4-Virtual-IT-System',
    '5-Communication-Connection', '6-Room', '7-Building'];

  for (const folder of forbiddenFolders) {
    const folderPath = join(prBase, folder);
    if (existsSync(folderPath)) {
      addViolation(7, `ISMS-Handbook/Registers/Protection-Requirements/${folder}/`, 0,
        `Subfolder still exists — PR records belong directly in Protection-Requirements/`);
    }
  }
}

// Rule 8: PR Source format validation
// PR Source field definition in HB_REG_03 must not contain "Inherited from"
function rule8() {
  const regPath = 'ISMS-Handbook/Registers/03-Asset-Register.md';
  const lines = readLines(regPath);
  if (!lines) return;

  const clStart = changelogStart(lines);
  for (let i = 0; i < clStart; i++) {
    if (/Inherited from \[/i.test(lines[i])) {
      addViolation(8, regPath, i + 1,
        `Deprecated "Inherited from [...]" pattern found: ${lines[i].trim().substring(0, 100)}`);
    }
  }
}

// Rule 9: CB_TPL_19 must not contain Override, Inheritance, Suspension, Conclusions, or Approval headings
function rule9() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) return;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (/^##\s+Override/i.test(trimmed)) {
      addViolation(9, tplPath, i + 1,
        `Override heading found in template — override documentation belongs in HB_REG_03 PR Source`);
    }
    if (/^##\s+Inheritance/i.test(trimmed)) {
      addViolation(9, tplPath, i + 1,
        `Inheritance heading found in template — inheritance is documented in HB_REG_03`);
    }
    if (/^##\s+Suspension/i.test(trimmed)) {
      addViolation(9, tplPath, i + 1,
        `Suspension heading found in template — suspension status belongs in REG_03 PR_Status`);
    }
    if (/^##\s+Conclusions/i.test(trimmed)) {
      addViolation(9, tplPath, i + 1,
        `Conclusions heading found in template — conclusions belong at standards/process level`);
    }
    if (/^##\s+Approval/i.test(trimmed)) {
      addViolation(9, tplPath, i + 1,
        `Approval heading found in template — approval is a process step (PRC_13 Step 8)`);
    }
  }
}

// Rule 10: Protection Requirement Summary with C/I/A lines
function rule10() {
  const tplPath = 'Cyber-Security-Cookbook/Templates/19-Protection-Requirements-Assessment.md';
  const lines = readLines(tplPath);
  if (!lines) { addViolation(10, tplPath, 0, 'Template file not found'); return; }

  let summaryIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^###\s+Protection Requirement Summary/i.test(lines[i].trim())) {
      summaryIdx = i;
      break;
    }
  }

  if (summaryIdx === -1) {
    addViolation(10, tplPath, 0, 'Missing ### Protection Requirement Summary heading');
    return;
  }

  // Check for C/I/A rows after the heading
  const sectionLines = lines.slice(summaryIdx, summaryIdx + 15).join('\n');
  const coreValues = ['Confidentiality', 'Integrity', 'Availability'];
  for (const cv of coreValues) {
    if (!new RegExp(cv, 'i').test(sectionLines)) {
      addViolation(10, tplPath, summaryIdx + 1,
        `Protection Requirement Summary missing ${cv} row`);
    }
  }
}

// Run all rules
console.log('PR Model Validator — 10 Rules\n');

rule1();
rule2();
rule3();
rule4();
rule5();
rule6();
rule7();
rule8();
rule9();
rule10();

if (violations.length === 0) {
  console.log('All 10 rules passed.');
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
