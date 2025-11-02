const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const functionsDir = path.join(process.cwd(), 'netlify', 'functions');

function patchFilesInDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      patchFilesInDir(filePath);
    } else if (path.extname(file) === '.mjs') {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Remove import.meta.url
        if (content.includes('import.meta.url')) {
          content = content.replace(/import.meta.url/g, "pathToFileURL(__filename).href");
          // Add the required import at the top of the file if not already present
          if (!content.startsWith("const { pathToFileURL } = require('url');")) {
            content = `const { pathToFileURL } = require('url');\n${content}`;
          }
          modified = true;
        }

        // Remove import './polyfills.server.mjs';
        const polyfillsImportRegex = /import '\.\/polyfills\.server\.mjs';\n?/g;
        if (content.match(polyfillsImportRegex)) {
          content = content.replace(polyfillsImportRegex, '');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Patched ${path.basename(filePath)} successfully.`);
        }
      } catch (error) {
        console.error(`Failed to patch ${file}:`, error);
      }
    }
  }
}

patchFilesInDir(functionsDir);