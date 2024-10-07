export default function updateUniqueItems(groceries) {
  // Check if the argument is a map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map and update quantities where the initial quantity is 1
  for (const [key, value] of groceries.entries()) {
    if (value === 1) {
      groceries.set(key, 100);
    }
  }

  return groceries;
}
