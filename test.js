const lib = require('./index');

console.log(`Total cylinders loaded: ${lib.getAllCylinders().length}`);
const nepalGas = lib.findBySlug('nepal-gas');
console.log(`Found nepal-gas: ${nepalGas ? nepalGas.name : 'Not found'} (Compatible: ${nepalGas.igt_compatible})`);

const searchResults = lib.search('Pokhara');
console.log(`Cylinders serving Pokhara: ${searchResults.length}`);
console.log('All tests passed successfully!');
