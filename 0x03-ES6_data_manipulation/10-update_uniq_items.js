export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Input must be a Map');
  }

  for (const [key, originalValue] of inputMap.entries()) {
    if (originalValue === 1) {
      inputMap.set(key, 100);
    }
  }

  return inputMap;
}
