import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(unFilteredStudents, city, newGrades) {
  const students = getStudentsByLocation(unFilteredStudents, city);
  return students.map((unModifiedStudent) => {
    const student = unModifiedStudent;
    try {
      student.grade = newGrades.filter((grade) => grade.studentId === student.id)[0].grade;
    } catch (err) {
      student.grade = 'N/A';
    }
    return student;
  });
}
