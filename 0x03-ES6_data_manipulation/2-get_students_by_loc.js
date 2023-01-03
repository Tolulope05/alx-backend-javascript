const getStudentsByLocation = (students, city) => {
  const arratyObjec = students.filter((funtion) => funtion.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
