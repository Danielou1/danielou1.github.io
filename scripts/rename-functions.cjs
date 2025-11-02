const fs = require('fs');
const path = require('path');

const functionsDir = path.join(process.cwd(), 'netlify', 'functions');

function renameInDir(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const oldPath = path.join(dir, f);
    if (fs.statSync(oldPath).isDirectory()) {
      renameInDir(oldPath);
    } else if (f.includes('.server')) {
      const newName = f.replace(/\.server/g, '-server');
      const newPath = path.join(dir, newName);
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${f} → ${newName} in ${dir}`);
    }
  }
}

renameInDir(functionsDir);