export default function cleanSet(set, startString) {
  // Check if the first argument is a set and the second is a string
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new TypeError(
      'First argument should be a Set and second argument should be a String',
    );
  }

  // If startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  // Filter set values that start with startString and map them to remove startString
  const filteredValues = [...set]
    .filter(
      (value) => typeof value === 'string' && value.startsWith(startString),
    )
    .map((value) => value.slice(startString.length));

  // Join the filtered values with '-'
  return filteredValues.join('-');
}
