#!/usr/bin/env node
/*
 * Guards against the document links on the site silently rotting.
 *
 * Two checks:
 *   1. Every /pdfs/*.pdf referenced in the source exists on disk. A typo'd or
 *      renamed filename becomes a build failure instead of a 404 nobody sees.
 *   2. No report is linked from a third-party document host. Those links broke
 *      in 2026 when the team's Google Drive hit its file-sharing limit and
 *      "anyone with the link" quietly stopped applying to the public - logged-in
 *      members still saw working links, so it went unnoticed for months.
 *
 * Reports that cannot be self-hosted yet are listed in PENDING_MIGRATION below.
 * That list may shrink, never grow: adding a new external document link fails
 * the build.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PDF_DIR = path.join(ROOT, 'public', 'pdfs');

// Hosts we refuse to link documents from. They require sign-in, rate-limit
// hotlinking, or expire - all of which fail silently for logged-out visitors.
const BLOCKED_HOSTS = [
  'drive.google.com',
  'docs.google.com',
  'dropbox.com',
  'onedrive.live.com',
  '1drv.ms',
  'wetransfer.com',
  'mega.nz',
];

// Interactive Google surfaces that are not documents and are fine to link out to.
// A sign-up form has no self-hosted equivalent; a report does.
const ALLOWED_PATTERNS = [
  /docs\.google\.com\/forms\//,
];

// Google Drive IDs still awaiting a copy of the PDF from the team.
// Remove an entry as soon as its report is self-hosted under public/pdfs/.
const PENDING_MIGRATION = [
  '1S-WHy9eZPrzOjpIwyzloyIxBCHes_5Z6', // Ethanol-LOX Engine with Thrust Vector Control (April 2025)
  '119KyO_dsHsNTk1UnAL251T2Rk1VyRscx', // Roll Control and Estimation - Finn Breuer (Dec 2025)
];

function sourceFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(jsx?|tsx?|html|css|scss)$/.test(entry.name) ? [full] : [];
  });
}

const errors = [];

sourceFiles(SRC).forEach((file) => {
  const rel = path.relative(ROOT, file);

  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const where = `${rel}:${i + 1}`;

    // 1. Referenced PDFs must exist.
    (line.match(/\/pdfs\/[^"'\s)]+\.pdf/g) || []).forEach((ref) => {
      const name = ref.replace('/pdfs/', '');
      if (!fs.existsSync(path.join(PDF_DIR, name))) {
        errors.push(`${where}: references ${ref} but public/pdfs/${name} does not exist`);
      }
    });

    // 2. No new third-party document links.
    BLOCKED_HOSTS.forEach((host) => {
      if (!line.includes(host)) return;
      if (ALLOWED_PATTERNS.some((re) => re.test(line))) return;
      if (PENDING_MIGRATION.some((id) => line.includes(id))) return;
      errors.push(
        `${where}: links a document from ${host}. Self-host it under public/pdfs/ instead `
        + '(see scripts/check-document-links.js).',
      );
    });
  });
});

if (errors.length) {
  console.error(`\nDocument link check failed (${errors.length} problem(s)):\n`);
  errors.forEach((e) => console.error(`  - ${e}`));
  console.error('');
  process.exit(1);
}

// After a build, confirm the PDFs actually made it into the published output.
// public/ is copied verbatim by react-scripts, but a misconfigured build or a
// stray .gitignore would drop them, and the site would ship 404s.
const BUILD_DIR = path.join(ROOT, 'build');
if (fs.existsSync(BUILD_DIR)) {
  const bundles = sourceFiles(path.join(BUILD_DIR, 'static'));
  const referenced = new Set();
  bundles.forEach((file) => {
    (fs.readFileSync(file, 'utf8').match(/\/pdfs\/[^"'\s)]+\.pdf/g) || [])
      .forEach((ref) => referenced.add(ref.replace('/pdfs/', '')));
  });
  referenced.forEach((name) => {
    if (!fs.existsSync(path.join(BUILD_DIR, 'pdfs', name))) {
      errors.push(`build output references /pdfs/${name} but build/pdfs/${name} is missing`);
    }
  });
  if (errors.length) {
    console.error(`\nDocument link check failed in built output:\n`);
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log(`Built output check passed: ${referenced.size} PDF reference(s) resolve in build/pdfs/.`);
}

const pdfCount = fs.readdirSync(PDF_DIR).filter((f) => f.endsWith('.pdf')).length;
console.log(
  `Document link check passed: ${pdfCount} self-hosted PDFs, `
  + `${PENDING_MIGRATION.length} report(s) still pending migration.`,
);
