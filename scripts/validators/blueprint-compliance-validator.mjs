/**
 * Blueprint Compliance Validator
 *
 * Validates that a client ISMS repo correctly implements the isms-master blueprint.
 * 10 phases: file inventory, metadata, structure, content alignment, register schema,
 * cross-references, traceability, data completeness, legacy detection, skeleton completion.
 *
 * Usage: node scripts/validators/blueprint-compliance-validator.mjs <client-path>
 * Exit 0 = passed (warnings allowed). Exit 1 = errors found.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve, relative, sep, posix } from 'path';
import { execSync } from 'child_process';

// ── Constants ──────────────────────────────────────────────────────────

const MASTER_ROOT = resolve(import.meta.dirname, '..', '..');
const CLIENT_ROOT = resolve(process.argv[2] || '../isms-retorio');

if (!existsSync(CLIENT_ROOT)) {
  console.error(`Client path not found: ${CLIENT_ROOT}`);
  process.exit(2);
}

const ANTIPATTERNS = [
  { pattern: /HB_REG_04-BIA-Register/i, label: 'Old register name HB_REG_04-BIA-Register' },
  { pattern: /HB_REG_\d{2}-/i, label: 'Old numeric register ID format HB_REG_NN-' },
  { pattern: /suspended_missing_BIA/i, label: 'Old PR_Status value suspended_missing_BIA' },
  { pattern: /Inherited from \[/i, label: 'Old PR Source format "Inherited from ["' },
  { pattern: /rooms\/buildings\s*→\s*communication links/i, label: 'Old cascade order rooms/buildings → communication links' },
  { pattern: /per asset and per core value/i, label: 'Old PR model "per asset and per core value"' },
  { pattern: /Protection-Requirements\/1-Process\//i, label: 'Old layer directory 1-Process/' },
  { pattern: /Protection-Requirements\/2-Application\//i, label: 'Old layer directory 2-Application/' },
  { pattern: /Protection-Requirements\/3-Physical/i, label: 'Old layer directory 3-Physical/' },
  { pattern: /Protection-Requirements\/4-Virtual/i, label: 'Old layer directory 4-Virtual/' },
  { pattern: /Protection-Requirements\/5-Communication/i, label: 'Old layer directory 5-Communication/' },
  { pattern: /Protection-Requirements\/6-Room\//i, label: 'Old layer directory 6-Room/' },
  { pattern: /Protection-Requirements\/7-Building\//i, label: 'Old layer directory 7-Building/' },
];

const METADATA_FIELDS = [
  'Document ID', 'Version', 'Classification', 'Author',
  'ISO Reference', 'Last modified', 'Approval', 'Review cycle'
];

// ── Exception File ───────────────────────────────────────────────────

const EXCEPTIONS_PATH = join(CLIENT_ROOT, '.blueprint-exceptions.json');
const exceptions = existsSync(EXCEPTIONS_PATH)
  ? JSON.parse(readFileSync(EXCEPTIONS_PATH, 'utf-8')).exceptions || []
  : [];

function isExcepted(relPath, sectionHeading) {
  return exceptions.find(e =>
    toForwardSlash(e.file) === toForwardSlash(relPath) &&
    e.section === sectionHeading
  );
}

// ── Result collection ──────────────────────────────────────────────────

const results = {
  phase1: { name: 'File Inventory', status: 'OK', errors: [], warnings: [], detail: '' },
  phase2: { name: 'Metadata Compliance', status: 'OK', errors: [], warnings: [], detail: '' },
  phase3: { name: 'Document Structure', status: 'OK', errors: [], warnings: [], detail: '' },
  phase4: { name: 'Section Content Alignment', status: 'OK', errors: [], warnings: [], detail: '' },
  phase5: { name: 'Register Schema', status: 'OK', errors: [], warnings: [], detail: '' },
  phase6: { name: 'Cross-Reference Integrity', status: 'OK', errors: [], warnings: [], detail: '' },
  phase7: { name: 'Traceability', status: 'OK', errors: [], warnings: [], detail: '' },
  phase8: { name: 'Data Completeness', status: 'OK', errors: [], warnings: [], detail: '' },
  phase9: { name: 'Legacy Detection', status: 'OK', errors: [], warnings: [], detail: '' },
  phase10: { name: 'Skeleton Completion', status: 'OK', errors: [], warnings: [], detail: '' },
};

// ── Utilities ──────────────────────────────────────────────────────────

function readF(absPath) {
  if (!existsSync(absPath)) return null;
  return readFileSync(absPath, 'utf-8');
}

function toForwardSlash(p) {
  return p.split(sep).join(posix.sep);
}

function normalizeText(text) {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/ ?\n ?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Derive a Document ID from a relative file path using abbreviation conventions */
const PATH_ABBREV = {
  'Cyber-Security-Cookbook': 'CB', 'ISMS-Handbook': 'HB',
  'Templates': 'TPL', 'Processes': 'PRC', 'Policy-Framework': 'POL',
  'Awareness-Training': 'AWR', 'Definitions': 'CLS', 'Registers': 'REG',
  'Management': 'MGT', 'Audit': 'AUD',
  'L1_Policy': 'L1', 'L2_Standards': 'L2', 'L3_Handbooks-and-Concepts': 'L3',
  'L4_Cheat-Sheets': 'L4', 'Internal': 'INT', 'Supplier': 'SUP',
  '16-Exceptions': 'EXC',
  '01-Context': 'CTX', '02-Interested-Parties': 'IP', '03-Asset-Management': 'AM',
  '04-Protection-Requirements': 'PR',
  '09-Statement-of-Applicability': 'SOA', '10-Security-Measures': 'SM',
  '11-Business-Continuity': 'BCM', '12-Supplier-and-Cloud': 'SUP',
  '13-IS-Objectives-and-KPIs': 'OBJ', '14-Competence-Records': 'COMP',
  '15-Nonconformities-and-Corrective-Actions': 'NC',
};

const DIRECTORY_IDS = [];

function deriveDocIdFromPath(relPath) {
  const parts = relPath.replace(/\.md$/, '').split('/');
  if (parts.length < 3) return null;

  // Process files in numbered subfolders use preserved legacy IDs
  if (parts.includes('Processes') && parts.length > 3) return null;

  const segments = [];
  for (let i = 0; i < parts.length - 1; i++) {
    const abbrev = PATH_ABBREV[parts[i]];
    if (abbrev) segments.push(abbrev);
  }
  if (segments.length < 2) return null;

  // Skip clause sort-folders (C04_Context, C05_Leadership, etc.)
  const filename = parts[parts.length - 1];
  return segments.join('_') + '_' + filename;
}

/** Parse markdown into metadata + H2 sections */
function parseMarkdown(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const metadata = {};
  const sections = [];
  let currentSection = null;
  let metadataDone = false;
  let separatorSeen = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Metadata: blockquote lines before ---
    if (!separatorSeen && line.startsWith('>')) {
      const m = line.match(/>\s*\*\*(.+?):\*\*\s*(.*)/);
      if (m) metadata[m[1].trim()] = m[2].trim();
      continue;
    }

    if (!separatorSeen && line.trim() === '---') {
      separatorSeen = true;
      metadataDone = true;
      continue;
    }

    // H2 sections
    const h2Match = line.match(/^## (.+)/);
    if (h2Match) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: h2Match[1].trim(), lines: [], startLine: i + 1 };
      continue;
    }

    // H1 — store but don't create section
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: '__H1__', lines: [line], startLine: i + 1 };
      continue;
    }

    if (currentSection) {
      currentSection.lines.push(line);
    }
  }
  if (currentSection) sections.push(currentSection);

  return { metadata, sections };
}

/** Classify document type from relative path */
function classifyDocument(relPath) {
  const p = toForwardSlash(relPath);
  if (/Policy-Framework\/L1_/.test(p)) return 'L1';
  if (/Policy-Framework\/L2_/.test(p)) return 'L2';
  if (/Policy-Framework\/L3_/.test(p)) return 'L3';
  if (/Policy-Framework\/L4_/.test(p)) return 'L4';
  if (/Processes\//.test(p)) return 'PRC';
  if (/Templates\//.test(p)) return 'TPL';
  if (/Awareness/.test(p)) return 'AWR';
  if (/Definitions\//.test(p)) return 'CLS';
  if (/Registers\/Risk-Framework\//.test(p)) return 'REF';
  if (/Registers\/Protection-Requirements\//.test(p)) return 'REC';
  if (/Registers\/Risk-Assessments\//.test(p)) return 'REC';
  if (/Registers\/Security-Measures\//.test(p)) return 'REC';
  if (/Registers\/Exception-Register\//.test(p)) return 'REG';
  if (/Registers\//.test(p) && /\/\d{2}-/.test(p)) return 'REG';
  if (/Management\//.test(p)) return 'MGT';
  if (/Audit\//.test(p) && !/Records\//.test(p)) return 'AUD';
  if (/References\//.test(p)) return 'REF';
  // Root CB files (Getting-Started, Emergency-Card, FAQ)
  if (/Cyber-Security-Cookbook\/[^/]+\.md$/.test(p)) return 'methodology';
  return 'methodology';
}

/** Get comparison strategy for section × document type */
function getStrategy(sectionHeading, docType) {
  const h = sectionHeading.toLowerCase();

  if (docType === 'REC' || docType === 'REF') return 'skip';

  // Universal sections first
  if (h === 'see also') return 'superset';
  if (h === 'changelog') return 'format-only';

  // AUD and MGT: structure-match for all content sections
  if (docType === 'AUD' || docType === 'MGT') {
    return 'structure-match';
  }

  // Standard sections
  if (h === 'summary') return 'text-match';
  if (h === 'objective and scope') return 'text-match';

  // Subject H2s
  if (docType === 'REG') return 'schema-superset';
  if (docType === 'TPL') return 'text-match';
  return 'text-match';
}

/** Build regex from master text with [Placeholder] tolerance */
function buildPlaceholderRegex(masterText) {
  const normalized = normalizeText(masterText);
  // Split on [...] brackets
  const parts = normalized.split(/(\[[^\]]+\])/g);
  let regexStr = '';
  for (const part of parts) {
    if (part.startsWith('[') && part.endsWith(']')) {
      regexStr += '[\\s\\S]+?';
    } else {
      regexStr += escapeRegex(part);
    }
  }
  return new RegExp('^' + regexStr + '$', 's');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|\\]/g, '\\$&');
}

/** Text match with placeholder tolerance */
function textMatch(masterSection, clientSection) {
  const masterText = normalizeText(masterSection.lines.join('\n'));
  const clientText = normalizeText(clientSection.lines.join('\n'));

  // Skip if master has only TODO
  if (/^<!--\s*TODO\s*-->$/.test(masterText.trim())) {
    return { ok: true, detail: 'Master TODO — skipped' };
  }

  // Empty master = nothing to check
  if (!masterText.trim()) return { ok: true };

  // Check if master has placeholders
  if (/\[[^\]]+\]/.test(masterText)) {
    const regex = buildPlaceholderRegex(masterText);
    if (regex.test(clientText)) return { ok: true };
  } else {
    if (masterText === clientText) return { ok: true };
  }

  // Find first divergence line
  const mLines = masterText.split('\n');
  const cLines = clientText.split('\n');
  for (let i = 0; i < mLines.length; i++) {
    const mLine = mLines[i] || '';
    const cLine = cLines[i] || '';
    const mNorm = mLine.trim();
    const cNorm = cLine.trim();

    // Skip empty lines
    if (!mNorm && !cNorm) continue;

    // If master line has placeholder, try regex match on this line
    if (/\[[^\]]+\]/.test(mNorm)) {
      const lineRegex = buildPlaceholderRegex(mNorm);
      if (lineRegex.test(cNorm)) continue;
    } else if (mNorm === cNorm) {
      continue;
    }

    return {
      ok: false,
      line: clientSection.startLine + i,
      detail: `text differs at line ${clientSection.startLine + i}`,
      masterSnippet: mNorm.substring(0, 120),
      clientSnippet: cNorm.substring(0, 120),
    };
  }

  // Client might have extra lines — that's OK for most cases
  // But if master is longer, that's a mismatch
  if (mLines.length > cLines.length) {
    return {
      ok: false,
      line: clientSection.startLine + cLines.length,
      detail: `client section shorter than master (${cLines.length} vs ${mLines.length} lines)`,
      masterSnippet: mLines[cLines.length]?.trim().substring(0, 120) || '',
      clientSnippet: '(missing)',
    };
  }

  return { ok: true };
}

/** Schema match for register tables */
function schemaMatch(masterSection, clientSection) {
  const mText = masterSection.lines.join('\n');
  const cText = clientSection.lines.join('\n');

  // Extract table blocks
  const mTables = extractTables(mText);
  const cTables = extractTables(cText);

  // Check non-table text via text-match approach
  const mNonTable = extractNonTableText(mText);
  const cNonTable = extractNonTableText(cText);

  if (mNonTable.trim() && cNonTable.trim()) {
    const mNorm = normalizeText(mNonTable);
    const cNorm = normalizeText(cNonTable);
    if (/\[[^\]]+\]/.test(mNorm)) {
      const regex = buildPlaceholderRegex(mNorm);
      if (!regex.test(cNorm)) {
        return {
          ok: false,
          line: clientSection.startLine,
          detail: 'methodology text between tables differs',
          masterSnippet: mNorm.substring(0, 120),
          clientSnippet: cNorm.substring(0, 120),
        };
      }
    } else if (mNorm !== cNorm) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: 'methodology text between tables differs',
        masterSnippet: mNorm.substring(0, 120),
        clientSnippet: cNorm.substring(0, 120),
      };
    }
  }

  // For each master table: check header match
  for (let t = 0; t < mTables.length; t++) {
    if (t >= cTables.length) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `master has ${mTables.length} tables, client has ${cTables.length}`,
      };
    }
    const mHeader = normalizeText(mTables[t][0] || '');
    const cHeader = normalizeText(cTables[t][0] || '');
    if (mHeader !== cHeader) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `table ${t + 1} header mismatch`,
        masterSnippet: mHeader.substring(0, 120),
        clientSnippet: cHeader.substring(0, 120),
      };
    }
  }

  return { ok: true };
}

/** Structure match for AUD/MGT documents — checks structural elements, not prose */
function structureMatch(masterSection, clientSection) {
  const mText = masterSection.lines.join('\n');
  const cText = clientSection.lines.join('\n');

  // 1. Bold-Labels: extract from master, check each exists in client
  const masterLabels = [...mText.matchAll(/\*\*(.+?):\*\*/g)].map(m => m[1]);
  for (const label of masterLabels) {
    if (!cText.includes(`**${label}:**`)) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `missing bold label "**${label}:**"`,
        masterSnippet: `**${label}:**`,
        clientSnippet: '(not found)',
      };
    }
  }

  // 2. Table count: master tables must exist in client
  const mTables = extractTables(mText);
  const cTables = extractTables(cText);
  if (mTables.length > 0 && cTables.length < mTables.length) {
    return {
      ok: false,
      line: clientSection.startLine,
      detail: `expected ${mTables.length} table(s), found ${cTables.length}`,
    };
  }

  // 3. Reference IDs (CB_*, HB_*): master refs must appear in client
  const masterRefs = [...mText.matchAll(/\b(CB_[A-Z0-9_]+|HB_[A-Z0-9_]+)/g)].map(m => m[1]);
  for (const ref of masterRefs) {
    if (ref.includes('[') || ref.includes(']')) continue; // placeholder
    if (!cText.includes(ref)) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `missing reference ID "${ref}"`,
        masterSnippet: ref,
        clientSnippet: '(not found)',
      };
    }
  }

  return { ok: true };
}

/** Schema-superset match for REG tables — master columns must exist, extra client columns OK */
function schemaSupersetMatch(masterSection, clientSection) {
  const mText = masterSection.lines.join('\n');
  const cText = clientSection.lines.join('\n');

  // Check non-table text via text-match approach (methodology text)
  const mNonTable = extractNonTableText(mText);
  const cNonTable = extractNonTableText(cText);

  if (mNonTable.trim() && cNonTable.trim()) {
    const mNorm = normalizeText(mNonTable);
    const cNorm = normalizeText(cNonTable);
    if (/\[[^\]]+\]/.test(mNorm)) {
      const regex = buildPlaceholderRegex(mNorm);
      if (!regex.test(cNorm)) {
        return {
          ok: false,
          line: clientSection.startLine,
          detail: 'methodology text between tables differs',
          masterSnippet: mNorm.substring(0, 120),
          clientSnippet: cNorm.substring(0, 120),
        };
      }
    } else if (mNorm !== cNorm) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: 'methodology text between tables differs',
        masterSnippet: mNorm.substring(0, 120),
        clientSnippet: cNorm.substring(0, 120),
      };
    }
  }

  // Extract tables and check column superset
  const mTables = extractTables(mText);
  const cTables = extractTables(cText);

  for (let t = 0; t < mTables.length; t++) {
    if (t >= cTables.length) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `master has ${mTables.length} tables, client has ${cTables.length}`,
      };
    }

    // Parse header cells
    const mCells = parseHeaderCells(mTables[t][0] || '');
    const cCells = parseHeaderCells(cTables[t][0] || '');
    const cCellsLower = cCells.map(c => c.toLowerCase());

    const missing = mCells.filter(mc =>
      !cCellsLower.some(cc => cc.includes(mc.toLowerCase()))
    );

    if (missing.length > 0) {
      return {
        ok: false,
        line: clientSection.startLine,
        detail: `table ${t + 1} missing column(s): ${missing.join(', ')}`,
        masterSnippet: mTables[t][0]?.substring(0, 120) || '',
        clientSnippet: cTables[t][0]?.substring(0, 120) || '',
      };
    }
  }

  return { ok: true };
}

/** Parse table header row into individual cell values */
function parseHeaderCells(headerRow) {
  return headerRow
    .split('|')
    .map(c => c.trim())
    .filter(c => c.length > 0);
}

/** Superset match for See also */
function supersetMatch(masterSection, clientSection) {
  const mRefs = extractRefs(masterSection.lines.join('\n'));
  const cRefs = extractRefs(clientSection.lines.join('\n'));

  const missing = mRefs.filter(r => {
    // Check if master ref has placeholder
    if (/\[.+\]/.test(r)) return false; // Placeholder ref — skip
    return !cRefs.some(cr => cr.includes(r) || r.includes(cr));
  });

  if (missing.length > 0) {
    return {
      ok: false,
      line: clientSection.startLine,
      detail: `missing references: ${missing.join(', ')}`,
    };
  }
  return { ok: true };
}

function extractRefs(text) {
  const refs = [];
  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
      // Extract document ID pattern
      const idMatch = trimmed.match(/[A-Z]{2}_[A-Z]+_[A-Z0-9_.]+/);
      if (idMatch) refs.push(idMatch[0]);
    }
  }
  return refs;
}

function extractTables(text) {
  const tables = [];
  let currentTable = [];
  for (const line of text.split('\n')) {
    if (line.trim().startsWith('|')) {
      currentTable.push(line.trim());
    } else if (currentTable.length > 0) {
      tables.push(currentTable);
      currentTable = [];
    }
  }
  if (currentTable.length > 0) tables.push(currentTable);
  return tables;
}

function extractNonTableText(text) {
  return text.split('\n')
    .filter(l => !l.trim().startsWith('|'))
    .join('\n');
}

/** Extract all file paths from INDEX.md */
function parseIndex(indexText) {
  const paths = [];
  const lines = indexText.split(/\r?\n/);
  let currentDir = '';

  for (const line of lines) {
    // Directory patterns like **C04_Context/** or **Register_Context.md**
    const dirMatch = line.match(/^\*\*(.+?)\/?\*\*/);
    if (dirMatch) {
      const val = dirMatch[1];
      if (val.endsWith('.md')) {
        // Direct file reference under current section
        // We'll handle these through the section context
      } else {
        currentDir = val;
      }
    }

    // Backtick file references: `filename.md`
    const fileMatches = line.matchAll(/`([^`]+\.md)`/g);
    for (const m of fileMatches) {
      paths.push(m[1]);
    }

    // Bold direct file references: **NN-Name.md**
    const boldFileMatch = line.match(/^\*\*(\d{2}-.+\.md)\*\*/);
    if (boldFileMatch) {
      paths.push(boldFileMatch[1]);
    }
  }
  return paths;
}

/** Recursively collect all .md files under a directory */
function collectMdFiles(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.claude' || entry.name === '.temp' || entry.name === '.git' ||
          entry.name === 'node_modules' || entry.name === 'References') continue;
      results.push(...collectMdFiles(fullPath));
    } else if (entry.name.endsWith('.md') && entry.name !== 'README.md' && entry.name !== 'CHANGELOG.md') {
      results.push(fullPath);
    }
  }
  return results;
}

/** Get relative path of a master content file (from Cyber-Security-Cookbook/ or ISMS-Handbook/) */
function getContentRelPath(masterFile) {
  const rel = toForwardSlash(relative(MASTER_ROOT, masterFile));
  return rel;
}

/** Map master relative path to client absolute path */
function masterToClient(masterRelPath) {
  return join(CLIENT_ROOT, masterRelPath);
}

/** Check if path is a record file */
function isRecord(relPath) {
  const p = toForwardSlash(relPath);
  return /\/(RA-|PRA-|MR-|IA-|EA-|SR-|IS-)/.test(p) ||
         /\/Records\//.test(p) ||
         /\/Evidence\//.test(p);
}

/** Check if path should be excluded from inventory comparison */
function isExcludedPath(relPath) {
  const p = toForwardSlash(relPath);
  return p.startsWith('.claude/') || p.startsWith('.temp/') ||
         p.startsWith('.git/') || p === 'CLAUDE.md' ||
         p === 'INDEX.md' || p === 'CHANGELOG.md' ||
         p === 'LICENSE' || p.startsWith('scripts/') ||
         p.startsWith('References/') || p.startsWith('node_modules/');
}

// ── Phase 1: File Inventory ────────────────────────────────────────────

function phase1_fileInventory() {
  const phase = results.phase1;
  const masterIndex = readF(join(MASTER_ROOT, 'INDEX.md'));
  if (!masterIndex) {
    phase.errors.push('INDEX.md not found in master');
    phase.status = 'ERROR';
    return;
  }

  // Collect all master content files
  const masterCB = collectMdFiles(join(MASTER_ROOT, 'Cyber-Security-Cookbook'));
  const masterHB = collectMdFiles(join(MASTER_ROOT, 'ISMS-Handbook'));
  const masterFiles = [...masterCB, ...masterHB];

  let found = 0;
  let missing = 0;

  for (const mFile of masterFiles) {
    const relPath = toForwardSlash(relative(MASTER_ROOT, mFile));
    if (isExcludedPath(relPath) || isRecord(relPath)) continue;

    const clientPath = masterToClient(relPath);
    if (existsSync(clientPath)) {
      found++;
    } else {
      missing++;
      phase.errors.push(`MISSING: ${relPath}`);
    }
  }

  const total = found + missing;
  phase.detail = `${found}/${total}`;
  if (missing > 0) phase.status = 'ERROR';
}

// ── Phase 2: Metadata Compliance ───────────────────────────────────────

function phase2_metadata() {
  const phase = results.phase2;
  const masterCB = collectMdFiles(join(MASTER_ROOT, 'Cyber-Security-Cookbook'));
  const masterHB = collectMdFiles(join(MASTER_ROOT, 'ISMS-Handbook'));
  const masterFiles = [...masterCB, ...masterHB];
  let checked = 0;

  for (const mFile of masterFiles) {
    const relPath = toForwardSlash(relative(MASTER_ROOT, mFile));
    if (isExcludedPath(relPath) || isRecord(relPath)) continue;

    const clientPath = masterToClient(relPath);
    if (!existsSync(clientPath)) continue;

    // Skip if master file has no proper metadata block (must have Document ID)
    const masterContent = readF(mFile);
    if (masterContent) {
      const masterMeta = parseMarkdown(masterContent).metadata;
      if (!masterMeta['Document ID']) continue;
    }

    const content = readF(clientPath);
    if (!content) continue;

    const { metadata } = parseMarkdown(content);
    if (Object.keys(metadata).length === 0) continue; // No metadata block (e.g. Records)

    checked++;

    // Check all 8 fields present
    for (const field of METADATA_FIELDS) {
      if (!metadata[field] && metadata[field] !== '') {
        phase.errors.push(`${relPath}: missing metadata field "${field}"`);
      }
    }

    // Version format
    if (metadata['Version'] && !/^\d{2}\.\d{2}\.\d{3}$/.test(metadata['Version'])) {
      phase.errors.push(`${relPath}: version format "${metadata['Version']}" — expected 00.00.000`);
    }

    // Classification check
    const cls = metadata['Classification'];
    if (cls) {
      if (relPath.startsWith('ISMS-Handbook/') && cls !== 'Confidential') {
        phase.warnings.push(`${relPath}: HB classification "${cls}" — expected Confidential`);
      }
      if (relPath.startsWith('Cyber-Security-Cookbook/') && cls !== 'Internal') {
        phase.warnings.push(`${relPath}: CB classification "${cls}" — expected Internal`);
      }
    }
  }

  phase.detail = `${checked} checked`;
  if (phase.errors.length > 0) phase.status = 'ERROR';
  else if (phase.warnings.length > 0) phase.status = 'WARNING';
}

// ── Phase 3: Document Structure ────────────────────────────────────────

function phase3_structure() {
  const phase = results.phase3;
  const masterCB = collectMdFiles(join(MASTER_ROOT, 'Cyber-Security-Cookbook'));
  const masterHB = collectMdFiles(join(MASTER_ROOT, 'ISMS-Handbook'));
  const masterFiles = [...masterCB, ...masterHB];
  let checked = 0;
  let exceptedCount = 0;

  for (const mFile of masterFiles) {
    const relPath = toForwardSlash(relative(MASTER_ROOT, mFile));
    if (isExcludedPath(relPath) || isRecord(relPath)) continue;

    const clientPath = masterToClient(relPath);
    if (!existsSync(clientPath)) continue;

    const masterContent = readF(mFile);
    const clientContent = readF(clientPath);
    if (!masterContent || !clientContent) continue;

    const masterParsed = parseMarkdown(masterContent);
    const clientParsed = parseMarkdown(clientContent);

    // Skip files without H2 sections
    if (masterParsed.sections.length <= 1) continue;

    checked++;

    // Extract H2 headings (excluding __H1__)
    const masterH2s = masterParsed.sections
      .filter(s => s.heading !== '__H1__')
      .map(s => s.heading);
    const clientH2s = clientParsed.sections
      .filter(s => s.heading !== '__H1__')
      .map(s => s.heading);

    // Every master H2 must be present in client in same order
    let clientIdx = 0;
    for (const mH2 of masterH2s) {
      const found = clientH2s.indexOf(mH2, clientIdx);
      if (found === -1) {
        // Check exception file before counting as error
        const exc = isExcepted(relPath, mH2);
        if (exc) {
          exceptedCount++;
          phase.warnings.push(`[EXCEPTED] ${relPath}: ## ${mH2} — ${exc.reason} (${exc.type})`);
        } else {
          phase.errors.push(`${relPath}: missing H2 "## ${mH2}"`);
        }
      } else {
        if (found < clientIdx) {
          phase.errors.push(`${relPath}: H2 "## ${mH2}" out of order`);
        }
        clientIdx = found + 1;
      }
    }

    // Client extra H2s that are not in master → warning (unless excepted)
    for (const cH2 of clientH2s) {
      if (!masterH2s.includes(cH2)) {
        const exc = isExcepted(relPath, cH2);
        if (exc) {
          exceptedCount++;
        } else {
          phase.warnings.push(`${relPath}: extra H2 "## ${cH2}" not in master`);
        }
      }
    }
  }

  const detailParts = [`${checked} checked`];
  if (exceptedCount > 0) detailParts.push(`${exceptedCount} excepted`);
  phase.detail = detailParts.join(', ');
  if (phase.errors.length > 0) phase.status = 'ERROR';
  else if (phase.warnings.length > 0) phase.status = 'WARNING';
}

// ── Phase 4: Section Content Alignment ─────────────────────────────────

function phase4_contentAlignment() {
  const phase = results.phase4;
  const masterCB = collectMdFiles(join(MASTER_ROOT, 'Cyber-Security-Cookbook'));
  const masterHB = collectMdFiles(join(MASTER_ROOT, 'ISMS-Handbook'));
  const masterFiles = [...masterCB, ...masterHB];
  let checked = 0;
  let mismatches = 0;
  let exceptedCount = 0;

  for (const mFile of masterFiles) {
    const relPath = toForwardSlash(relative(MASTER_ROOT, mFile));
    if (isExcludedPath(relPath) || isRecord(relPath)) continue;

    const clientPath = masterToClient(relPath);
    if (!existsSync(clientPath)) continue;

    const masterContent = readF(mFile);
    const clientContent = readF(clientPath);
    if (!masterContent || !clientContent) continue;

    const docType = classifyDocument(relPath);
    const masterParsed = parseMarkdown(masterContent);
    const clientParsed = parseMarkdown(clientContent);

    // Build client section lookup
    const clientSectionMap = {};
    for (const s of clientParsed.sections) {
      clientSectionMap[s.heading] = s;
    }

    for (const mSection of masterParsed.sections) {
      if (mSection.heading === '__H1__') continue;

      const strategy = getStrategy(mSection.heading, docType);
      if (strategy === 'skip') continue;

      const cSection = clientSectionMap[mSection.heading];
      if (!cSection) continue; // Missing section already reported in Phase 3

      checked++;
      let result;

      switch (strategy) {
        case 'text-match':
          result = textMatch(mSection, cSection);
          break;
        case 'schema-match':
          result = schemaMatch(mSection, cSection);
          break;
        case 'schema-superset':
          result = schemaSupersetMatch(mSection, cSection);
          break;
        case 'structure-match':
          result = structureMatch(mSection, cSection);
          break;
        case 'superset':
          result = supersetMatch(mSection, cSection);
          break;
        case 'format-only':
          result = checkChangelogFormat(cSection);
          break;
        default:
          continue;
      }

      if (!result.ok) {
        // Check exception file before counting as error
        const exc = isExcepted(relPath, mSection.heading);
        if (exc) {
          exceptedCount++;
          // Check for expired exception
          if (exc.expires && new Date(exc.expires) < new Date()) {
            phase.warnings.push(`[EXPIRED] ${relPath} ## ${mSection.heading} — exception expired ${exc.expires}`);
          } else {
            phase.warnings.push(`[EXCEPTED] ${relPath} ## ${mSection.heading} — ${exc.reason} (${exc.type})`);
          }
        } else {
          mismatches++;
          const loc = result.line ? `:${result.line}` : '';
          const entry = `${relPath}${loc} ## ${mSection.heading} — ${result.detail}`;
          if (result.masterSnippet) {
            phase.errors.push(entry);
            phase.errors.push(`  Master: ${result.masterSnippet}`);
            phase.errors.push(`  Client: ${result.clientSnippet || '(empty)'}`);
          } else {
            phase.errors.push(entry);
          }
        }
      }
    }
  }

  const detailParts = [`${checked} sections`, `${mismatches} mismatches`];
  if (exceptedCount > 0) detailParts.push(`${exceptedCount} excepted`);
  phase.detail = detailParts.join(', ');
  if (mismatches > 0) phase.status = 'WARNING';
}

function checkChangelogFormat(section) {
  const text = section.lines.join('\n');
  // Check for table structure
  if (!text.includes('| Version') && !text.includes('|---')) {
    if (text.trim().length > 0 && !text.includes('<!-- TODO -->')) {
      return { ok: false, line: section.startLine, detail: 'changelog missing table format' };
    }
  }
  return { ok: true };
}

// ── Phase 5: Register Schema ───────────────────────────────────────────

function phase5_registerSchema() {
  const phase = results.phase5;
  let checked = 0;
  let exceptedCount = 0;

  const registers = [
    { name: 'REG_AM', path: 'ISMS-Handbook/Registers/03-Asset-Management/Register_Asset.md' },
    { name: 'REG_BCM', path: 'ISMS-Handbook/Registers/11-Business-Continuity/Register_BCM.md' },
    { name: 'REG_SOA', path: 'ISMS-Handbook/Registers/09-Statement-of-Applicability/Register_Statement-of-Applicability.md' },
  ];

  for (const reg of registers) {
    const masterPath = join(MASTER_ROOT, reg.path);
    const clientPath = join(CLIENT_ROOT, reg.path);
    if (!existsSync(masterPath) || !existsSync(clientPath)) {
      if (!existsSync(clientPath)) {
        phase.errors.push(`${reg.name}: client file missing`);
      }
      continue;
    }

    checked++;
    const masterContent = readF(masterPath);
    const clientContent = readF(clientPath);

    // Parse to find which section each table belongs to
    const masterParsed = parseMarkdown(masterContent);

    const mTables = extractTables(masterContent);
    const cTables = extractTables(clientContent);

    // Schema-superset check: master columns must exist in client (case-insensitive)
    for (let t = 0; t < mTables.length; t++) {
      if (t >= cTables.length) {
        phase.errors.push(`${reg.name}: master has ${mTables.length} tables, client has ${cTables.length}`);
        break;
      }
      const mCells = parseHeaderCells(mTables[t][0] || '');
      const cCells = parseHeaderCells(cTables[t][0] || '');
      const cCellsLower = cCells.map(c => c.toLowerCase());

      const missing = mCells.filter(mc =>
        !cCellsLower.some(cc => cc.includes(mc.toLowerCase()))
      );

      if (missing.length > 0) {
        // Find which H2 section this table belongs to for exception matching
        const sectionName = findTableSection(masterParsed, mTables[t][0]);
        const exc = sectionName ? isExcepted(reg.path, sectionName) : null;

        if (exc) {
          exceptedCount++;
          phase.warnings.push(`[EXCEPTED] ${reg.name}: table ${t + 1} — ${exc.reason} (${exc.type})`);
        } else {
          phase.errors.push(`${reg.name}: table ${t + 1} missing column(s): ${missing.join(', ')}`);
          phase.errors.push(`  Master: ${(mTables[t][0] || '').substring(0, 120)}`);
          phase.errors.push(`  Client: ${(cTables[t][0] || '').substring(0, 120)}`);
        }
      }
    }

    // REG_08 specific: count control rows
    if (reg.name === 'REG_08') {
      const clientLines = clientContent.split(/\r?\n/);
      const controlRows = clientLines.filter(l =>
        /^\|\s*(5|6|7|8)\.\d+/.test(l.trim())
      );
      if (controlRows.length < 93) {
        phase.warnings.push(`${reg.name}: only ${controlRows.length} control rows found (expected 93)`);
      }
    }
  }

  const detailParts = [`${checked} registers`];
  if (exceptedCount > 0) detailParts.push(`${exceptedCount} excepted`);
  phase.detail = detailParts.join(', ');
  if (phase.errors.length > 0) phase.status = 'ERROR';
  else if (phase.warnings.length > 0) phase.status = 'WARNING';
}

/** Find which H2 section a table header belongs to */
function findTableSection(parsed, tableHeader) {
  for (const section of parsed.sections) {
    if (section.heading === '__H1__') continue;
    const sectionText = section.lines.join('\n');
    if (sectionText.includes(tableHeader)) return section.heading;
  }
  return null;
}

// ── Phase 6: Cross-Reference Integrity ─────────────────────────────────

function phase6_crossReferences() {
  const phase = results.phase6;
  let validRefs = 0;
  let brokenRefs = 0;

  // Collect all client document IDs (metadata, table cells, and path-derived)
  const clientFiles = [
    ...collectMdFiles(join(CLIENT_ROOT, 'Cyber-Security-Cookbook')),
    ...collectMdFiles(join(CLIENT_ROOT, 'ISMS-Handbook')),
  ];
  const clientDocIds = new Set();
  for (const f of clientFiles) {
    const content = readF(f);
    if (!content) continue;
    const relPath = toForwardSlash(relative(CLIENT_ROOT, f));

    // 1. Standard blockquote metadata
    const { metadata } = parseMarkdown(content);
    if (metadata['Document ID']) {
      clientDocIds.add(metadata['Document ID']);
    }

    // 2. Document ID in table cells (templates use this format)
    const tableIdMatch = content.match(/\|\s*Document ID\s*\|\s*(.+?)\s*\|/);
    if (tableIdMatch) {
      clientDocIds.add(tableIdMatch[1].trim());
    }

    // 3. Path-derived ID as fallback (covers files without any Document ID)
    const derivedId = deriveDocIdFromPath(relPath);
    if (derivedId) clientDocIds.add(derivedId);
  }

  // 4. Directory-based synthetic IDs (e.g. HB_REG_RF for Risk-Framework/)
  for (const [dir, id] of DIRECTORY_IDS) {
    if (existsSync(join(CLIENT_ROOT, dir))) clientDocIds.add(id);
  }

  // 5. PDF-only templates (no .md counterpart) — derive IDs from .pdf filenames
  const tplDir = join(CLIENT_ROOT, 'Cyber-Security-Cookbook', 'Templates');
  if (existsSync(tplDir)) {
    for (const entry of readdirSync(tplDir)) {
      if (entry.endsWith('.pdf')) {
        const id = 'CB_TPL_' + entry.replace('.pdf', '');
        clientDocIds.add(id);
      }
    }
  }

  // Check See also sections in client docs
  for (const f of clientFiles) {
    const relPath = toForwardSlash(relative(CLIENT_ROOT, f));
    if (isRecord(relPath)) continue;

    const content = readF(f);
    if (!content) continue;
    const { sections } = parseMarkdown(content);

    const seeAlso = sections.find(s => s.heading === 'See also');
    if (!seeAlso) continue;

    const refs = extractRefs(seeAlso.lines.join('\n'));
    for (const ref of refs) {
      // Check if any client doc ID starts with or matches this ref
      const found = [...clientDocIds].some(id =>
        id === ref || id.startsWith(ref + '-') || id.startsWith(ref + '_')
      );
      if (found) {
        validRefs++;
      } else {
        brokenRefs++;
        phase.errors.push(`${relPath}: See also ref "${ref}" not found in client`);
      }
    }
  }

  phase.detail = `${validRefs} valid, ${brokenRefs} broken`;
  if (brokenRefs > 0) phase.status = 'WARNING';
}

// ── Phase 7: Traceability ──────────────────────────────────────────────

function phase7_traceability() {
  const phase = results.phase7;
  let l2Count = 0;
  let l3Count = 0;

  // Check L2 docs have Policy reference
  const l2Dir = join(CLIENT_ROOT, 'Cyber-Security-Cookbook', 'Policy-Framework', 'L2_Standards');
  if (existsSync(l2Dir)) {
    const l2Files = readdirSync(l2Dir).filter(f => f.endsWith('.md'));
    for (const f of l2Files) {
      const content = readF(join(l2Dir, f));
      if (!content) continue;
      l2Count++;
      if (!/\*\*Policy reference:\*\*/i.test(content)) {
        phase.errors.push(`L2 ${f}: missing "Policy reference" field`);
      }
      if (!/\*\*Operationalized by:\*\*/i.test(content)) {
        phase.errors.push(`L2 ${f}: missing "Operationalized by" field`);
      }
    }
  }

  // Check L3 docs have Standard reference
  const l3Dir = join(CLIENT_ROOT, 'Cyber-Security-Cookbook', 'Policy-Framework', 'L3_Handbooks-and-Concepts');
  if (existsSync(l3Dir)) {
    const l3Files = readdirSync(l3Dir).filter(f => f.endsWith('.md'));
    for (const f of l3Files) {
      const content = readF(join(l3Dir, f));
      if (!content) continue;
      l3Count++;
      if (!/\*\*Standard reference:\*\*/i.test(content)) {
        phase.errors.push(`L3 ${f}: missing "Standard reference" field`);
      }
    }
  }

  // Check bidirectional: L2 → L3 and L3 → L2
  if (existsSync(l2Dir)) {
    const l2Files = readdirSync(l2Dir).filter(f => f.endsWith('.md'));
    for (const f of l2Files) {
      const content = readF(join(l2Dir, f));
      if (!content) continue;
      const opMatch = content.match(/\*\*Operationalized by:\*\*\s*(.+)/i);
      if (!opMatch || opMatch[1].trim() === '—') continue;
      const l3Refs = opMatch[1].match(/CB_POL_L3_\d{2}/g) || [];
      for (const l3Ref of l3Refs) {
        // Extract number from ref
        const numMatch = l3Ref.match(/L3_(\d{2})/);
        if (!numMatch) continue;
        const l3File = readdirSync(l3Dir).find(lf => lf.startsWith(numMatch[1] + '-'));
        if (!l3File) {
          phase.warnings.push(`L2 ${f}: references ${l3Ref} but L3 file not found`);
          continue;
        }
        const l3Content = readF(join(l3Dir, l3File));
        if (!l3Content) continue;
        // Extract L2 number from current file
        const l2Num = f.match(/^(\d{2})-/)?.[1];
        if (l2Num && !l3Content.includes(`CB_POL_L2_${l2Num}`)) {
          phase.warnings.push(`L3 ${l3File}: does not back-reference CB_POL_L2_${l2Num}`);
        }
      }
    }
  }

  phase.detail = `${l2Count} L2 + ${l3Count} L3`;
  if (phase.errors.length > 0) phase.status = 'ERROR';
  else if (phase.warnings.length > 0) phase.status = 'WARNING';
}

// ── Phase 8: Data Completeness ─────────────────────────────────────────

function phase8_dataCompleteness() {
  const phase = results.phase8;

  // Asset Register: check categories have entries
  const regPath = join(CLIENT_ROOT, 'ISMS-Handbook', 'Registers', '03-Asset-Register.md');
  if (existsSync(regPath)) {
    const content = readF(regPath);
    const categories = ['Processes', 'Applications', 'Physical IT Systems',
      'Virtual IT Systems', 'Communication Links', 'Rooms', 'Buildings'];
    for (const cat of categories) {
      const catRegex = new RegExp(`## ${cat}([\\s\\S]*?)(?=\\n## |$)`, 'i');
      const catMatch = content.match(catRegex);
      if (catMatch) {
        const dataRows = catMatch[1].split('\n')
          .filter(l => l.trim().startsWith('|') && !l.includes('---') && !l.includes('ID'));
        if (dataRows.length < 1) {
          phase.warnings.push(`REG_03 ${cat}: no data entries`);
        }
      }
    }
  }

  // SoA: check all 93 controls addressed
  const soaPath = join(CLIENT_ROOT, 'ISMS-Handbook', 'Registers', '08-Statement-of-Applicability.md');
  if (existsSync(soaPath)) {
    const content = readF(soaPath);
    const controlRows = content.split(/\r?\n/).filter(l =>
      /^\|\s*(5|6|7|8)\.\d+/.test(l.trim())
    );
    const naCount = controlRows.filter(l => /Not Applicable/i.test(l)).length;
    const appCount = controlRows.length - naCount;
    phase.detail = `${controlRows.length} controls (${appCount} applicable, ${naCount} N/A)`;
  }

  // PR Records: check PRA files exist for PRC entries
  const prDir = join(CLIENT_ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');
  if (existsSync(prDir)) {
    const praFiles = readdirSync(prDir).filter(f => f.startsWith('PRA-') && f.endsWith('.md'));
    if (praFiles.length === 0) {
      phase.warnings.push('No PRA files found in Protection-Requirements/');
    }
  }

  if (!phase.detail) phase.detail = 'checked';
  if (phase.errors.length > 0) phase.status = 'ERROR';
  else if (phase.warnings.length > 0) phase.status = 'WARNING';
}

// ── Phase 9: Legacy Detection ──────────────────────────────────────────

function phase9_legacyDetection() {
  const phase = results.phase9;
  let antipatternCount = 0;

  const clientFiles = [
    ...collectMdFiles(join(CLIENT_ROOT, 'Cyber-Security-Cookbook')),
    ...collectMdFiles(join(CLIENT_ROOT, 'ISMS-Handbook')),
  ];

  for (const f of clientFiles) {
    const relPath = toForwardSlash(relative(CLIENT_ROOT, f));
    const content = readF(f);
    if (!content) continue;

    const lines = content.split(/\r?\n/);

    // Find changelog start to exclude it
    let clStart = lines.length;
    for (let i = 0; i < lines.length; i++) {
      if (/^## Changelog/i.test(lines[i].trim())) { clStart = i; break; }
    }

    for (let i = 0; i < clStart; i++) {
      for (const ap of ANTIPATTERNS) {
        if (ap.pattern.test(lines[i])) {
          antipatternCount++;
          phase.errors.push(`${relPath}:${i + 1} — ${ap.label}`);
        }
      }
    }
  }

  // Check for layer directories
  const prBase = join(CLIENT_ROOT, 'ISMS-Handbook', 'Registers', 'Protection-Requirements');
  const layerDirs = ['1-Process', '2-Application', '3-Physical-IT-System',
    '4-Virtual-IT-System', '5-Communication-Connection', '6-Room', '7-Building'];
  for (const d of layerDirs) {
    if (existsSync(join(prBase, d))) {
      antipatternCount++;
      phase.errors.push(`Legacy layer directory exists: Protection-Requirements/${d}/`);
    }
  }

  phase.detail = `${antipatternCount} antipatterns`;
  if (antipatternCount > 0) phase.status = 'ERROR';
}

// ── Phase 10: Skeleton Completion ──────────────────────────────────────

function phase10_skeletonCompletion() {
  const phase = results.phase10;
  let placeholderCount = 0;
  let todoCount = 0;
  let unapprovedCount = 0;

  const clientFiles = [
    ...collectMdFiles(join(CLIENT_ROOT, 'Cyber-Security-Cookbook')),
    ...collectMdFiles(join(CLIENT_ROOT, 'ISMS-Handbook')),
  ];

  for (const f of clientFiles) {
    const content = readF(f);
    if (!content) continue;

    // Count [Organization] placeholders
    const orgMatches = content.match(/\[Organization\]/gi);
    if (orgMatches) placeholderCount += orgMatches.length;

    // Count other common placeholders
    const otherPlaceholders = content.match(/\[(Role|amount|description|Name|Date|Tool|System)\]/gi);
    if (otherPlaceholders) placeholderCount += otherPlaceholders.length;

    // Count TODO markers
    const todos = content.match(/<!--\s*TODO\s*-->/g);
    if (todos) todoCount += todos.length;

    // Check approval
    const { metadata } = parseMarkdown(content);
    if (metadata['Approval'] === '—' || metadata['Approval'] === '–') {
      unapprovedCount++;
    }
  }

  phase.detail = `${placeholderCount} placeholders, ${todoCount} TODOs, ${unapprovedCount} unapproved`;
  if (placeholderCount > 5) phase.warnings.push(`${placeholderCount} [Organization]/[Role]/... placeholders remaining`);
  if (todoCount > 0) phase.warnings.push(`${todoCount} <!-- TODO --> markers remaining`);

  if (phase.warnings.length > 0) phase.status = 'INFO';
}

// ── Report ─────────────────────────────────────────────────────────────

function formatReport() {
  // Get git info
  let masterCommit = 'unknown';
  let clientCommit = 'unknown';
  try {
    masterCommit = execSync('git rev-parse --short HEAD', { cwd: MASTER_ROOT, encoding: 'utf-8' }).trim();
  } catch {}
  try {
    clientCommit = execSync('git rev-parse --short HEAD', { cwd: CLIENT_ROOT, encoding: 'utf-8' }).trim();
  } catch {}

  console.log('Blueprint Compliance Validator');
  console.log('==============================');
  console.log(`Master: ${MASTER_ROOT} (commit ${masterCommit})`);
  console.log(`Client: ${CLIENT_ROOT} (commit ${clientCommit})`);
  console.log();

  let passed = 0;
  let warnings = 0;
  let errors = 0;
  let infos = 0;

  for (const [key, phase] of Object.entries(results)) {
    const num = key.replace('phase', '');
    const statusIcon = phase.status === 'OK' ? 'OK' :
      phase.status === 'WARNING' ? 'WARNING' :
      phase.status === 'INFO' ? 'INFO' : 'ERROR';
    const detail = phase.detail || '';

    console.log(`Phase ${num.padStart(2)}: ${phase.name.padEnd(32)} ${statusIcon} (${detail})`);

    if (phase.status === 'OK') passed++;
    else if (phase.status === 'WARNING') warnings++;
    else if (phase.status === 'INFO') { infos++; passed++; }
    else errors++;
  }

  console.log();

  // Print details for non-OK phases
  for (const [key, phase] of Object.entries(results)) {
    if (phase.errors.length > 0 || phase.warnings.length > 0) {
      const num = key.replace('phase', '');
      console.log(`--- Phase ${num}: ${phase.name} ---`);
      for (const e of phase.errors) {
        console.log(`  [ERROR] ${e}`);
      }
      for (const w of phase.warnings) {
        console.log(`  [WARN]  ${w}`);
      }
      console.log();
    }
  }

  console.log(`Result: ${passed} passed, ${warnings} warnings, ${errors} errors${infos > 0 ? `, ${infos} info` : ''}.`);

  return errors;
}

// ── Main ───────────────────────────────────────────────────────────────

phase1_fileInventory();
phase2_metadata();
phase3_structure();
phase4_contentAlignment();
phase5_registerSchema();
phase6_crossReferences();
phase7_traceability();
phase8_dataCompleteness();
phase9_legacyDetection();
phase10_skeletonCompletion();

const errorCount = formatReport();
process.exit(errorCount > 0 ? 1 : 0);
