export default function getListStudentIds(array) {
  if (!(array instanceof Array)) {
    return [];
  }
  const idArray = [];
  array.map((element) => (
    idArray.push(element.id)
  ));
  return idArray;
}
