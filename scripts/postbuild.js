const fs = require('fs');
const path = require('path');

const source = path.resolve(__dirname, '../dist/api-whisperer');
const target = path.resolve(__dirname, '../build');

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true, force: true });

console.log('Post-build script completed successfully.');