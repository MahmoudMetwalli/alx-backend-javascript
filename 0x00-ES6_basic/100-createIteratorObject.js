export default function createIteratorObject(report) {
  return {
	...report,
	[Symbol.iterator] () {
		let step = 0;
		let array = [];
    for (const dep of Object.values(report.allEmployees)) {
    array = [...array, ...dep];
    }
	return {
		next() {
			return {
				value: array[step],
				done: step++ === array.length,
			}
		}
	};
	},
  }
}
