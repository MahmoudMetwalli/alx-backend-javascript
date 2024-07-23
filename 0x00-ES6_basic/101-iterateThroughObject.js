export default function iterateThroughObject(reportWithIterator) {
  let array = [];
  for (const name of reportWithIterator) {
	array.push(name);
  }
  return array.join(' | ');
}
