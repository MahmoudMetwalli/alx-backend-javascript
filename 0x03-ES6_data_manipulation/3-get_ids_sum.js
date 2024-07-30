export default function getStudentIdsSum(array) {
  return array.reduce((accumalative, element) => accumalative + element.id, 0);
}
