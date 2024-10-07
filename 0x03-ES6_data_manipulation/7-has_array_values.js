export default function hasValuesFromArray(set, array) {
  // Check if the first argument is a set and the second is an array
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new TypeError(
      'First argument should be a Set and second argument should be an Array',
    );
  }

  // Check if all elements in the array exist in the set
  return array.every((element) => set.has(element));
}
