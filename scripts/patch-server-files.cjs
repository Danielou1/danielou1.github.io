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
        if (content.includes('import.meta.url')) {
          // More robust replacement for import.meta.url
          content = content.replace(/import.meta.url/g, "pathToFileURL(__filename).href");
          // Add the required import at the top of the file
          if (!content.startsWith("const { pathToFileURL } = require('url');")) {
            content = `const { pathToFileURL } = require('url');\n${content}`;
          }
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
