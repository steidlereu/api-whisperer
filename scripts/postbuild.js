const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../dist/api-whisperer');
const target = path.resolve(__dirname, '../build');
const packageJsonPath = path.resolve(__dirname, '../package.json');

// Clean and copy
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true, force: true });

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const version = packageJson.version;

// Write version.txt
const versionFilePath = path.join(target, 'version.txt');
fs.writeFileSync(versionFilePath, version, 'utf-8');

console.log('Post-build script completed successfully.');
