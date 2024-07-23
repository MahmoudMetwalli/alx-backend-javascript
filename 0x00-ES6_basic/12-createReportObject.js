export default function createReportObject(employees) {
  return {
	allEmployees: {
		...employees
	 },
	 getNumberOfDepartments(employees) {
        return Object.keys(employees).length;
	 },
  }
}
