const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');

const REPLACEMENTS = [
  {
    pattern: /<x-card variant="1">/g,
    replacement: '<div class="card card-1">\n  <p class="card-header">Example</p>\n  <div class="card-body">',
  },
  {
    pattern: /<x-card variant="2">/g,
    replacement: '<div class="card card-2">\n  <p class="card-header">Key point</p>\n  <div class="card-body">',
  },
  {
    pattern: /<\/x-card>/g,
    replacement: '  </div>\n</div>',
  },
];

function collectHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = collectHtmlFiles(CONTENT_DIR);
let totalFiles = 0;
let totalReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let fileReplacements = 0;

  for (const { pattern, replacement } of REPLACEMENTS) {
    const matches = content.match(pattern);
    if (matches) {
      fileReplacements += matches.length;
      content = content.replace(pattern, replacement);
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(file, content, 'utf8');
    const rel = path.relative(__dirname, file);
    console.log(`${rel}: ${fileReplacements} replacement(s)`);
    totalFiles++;
    totalReplacements += fileReplacements;
  }
}

console.log(`\nDone. ${totalFiles} file(s) changed, ${totalReplacements} total replacement(s).`);
