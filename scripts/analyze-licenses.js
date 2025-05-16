const fs = require('fs');
const path = require('path');

// Path to the BOM.json file
const bomFilePath = path.resolve(__dirname, '../BOM.json');

// List of common critical licenses
const criticalLicenses = [
  'GPL',
  'AGPL',
  'LGPL',
  'Commercial',
  'Proprietary',
  'Unknown'
];

try {
  // Read and parse the BOM.json file
  const bomData = JSON.parse(fs.readFileSync(bomFilePath, 'utf8'));

  // Validate that the BOM.json is in CycloneDX format
  if (!bomData.components || !Array.isArray(bomData.components)) {
    throw new Error('BOM.json is not in the expected CycloneDX format.');
  }

  // Extract components and check for critical licenses
  const criticalDependencies = bomData.components.filter((component) => {
    const licenses = component.licenses || [];
    const licenseIds = licenses.map((license) => license.license?.id || 'Unknown');
    return licenseIds.some((license) =>
      criticalLicenses.some((critical) => license.includes(critical))
    );
  });

  // Output the report
  if (criticalDependencies.length > 0) {
    console.log('Critical dependencies found:');
    console.table(
      criticalDependencies.map((dep) => ({
        Name: dep.name,
        Version: dep.version || 'Unknown',
        Licenses: dep.licenses
          ? dep.licenses.map((license) => license.license?.id || 'Unknown').join(', ')
          : 'Unknown'
      }))
    );
  } else {
    console.log('No critical dependencies found.');
  }
} catch (err) {
  console.error('Error analyzing BOM.json:', err.message);
}
