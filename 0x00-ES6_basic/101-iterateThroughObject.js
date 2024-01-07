export default function iterateThroughObject(reportWithIterator) {
  const newString = [];
  for (const report of reportWithIterator) {
    newString.push(report);
  }
  return newString.join(' | ');
}
