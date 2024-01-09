export default function cleanSet(inputSet, startString) {
  if (!inputSet || !startString || !(inputSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  
  return Array.from(inputSet)
    .filter((element) => element && element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
