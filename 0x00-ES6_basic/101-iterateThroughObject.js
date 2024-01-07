export default function iterateThroughObject(reportWithIterator) {
  const newString = [];
  for (const report of reportWithIterator) {
    mewString.push(report);
  }
  return newString.join(' | ');
}
