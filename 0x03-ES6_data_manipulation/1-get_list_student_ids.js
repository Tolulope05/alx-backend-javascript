const getListStudentIds = (myArray) => {
  if (!Array.isArray(myArray)) {
    return [];
  }
  return myArray.map((studentId) => studentId.id);
};

export default getListStudentIds;
