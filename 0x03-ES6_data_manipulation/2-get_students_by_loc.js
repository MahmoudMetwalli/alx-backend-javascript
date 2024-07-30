export default function getStudentsByLocation(array, string) {
  return array.filter((element) => (element.location === string));
}
