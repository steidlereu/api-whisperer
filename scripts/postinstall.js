const fs = require('fs');
const path = require('path');

const filePath = path.resolve(
  __dirname,
  '../node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js'
);

try {
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(
    "import './codicon/codicon.css';",
    "//import './codicon/codicon.css';"
  );
  content = content.replace(
    "import './codicon/codicon-modifiers.css';",
    "//import './codicon/codicon-modifiers.css';"
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully commented imports in codiconStyles.js');
} catch (err) {
  console.error('Error updating codiconStyles.js:', err);
}
