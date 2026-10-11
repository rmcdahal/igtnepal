const cylinders = require('./docs/cylinders.json');

/**
 * Returns all verified Nepali LPG cylinders adhering to NS 533 specifications.
 */
function getAllCylinders() {
  return cylinders;
}

/**
 * Finds a specific cylinder by brand slug (e.g. 'nepal-gas', 'sugam-gas').
 */
function findBySlug(slug) {
  if (!slug) return null;
  return cylinders.find(c => c.slug === slug.toLowerCase()) || null;
}

/**
 * Searches cylinders by brand English name, Nepali name, or regional distribution area.
 */
function search(query) {
  if (!query) return cylinders;
  const q = String(query).toLowerCase().trim();
  return cylinders.filter(c =>
    (c.name && c.name.toLowerCase().includes(q)) ||
    (c.nepali_name && c.nepali_name.includes(q)) ||
    (c.distribution && c.distribution.toLowerCase().includes(q))
  );
}

module.exports = {
  cylinders,
  getAllCylinders,
  findBySlug,
  search
};
