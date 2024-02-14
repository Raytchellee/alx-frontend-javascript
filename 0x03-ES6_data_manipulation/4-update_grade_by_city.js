function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const filteredStudents = students.filter((student) => student.location === city).map((student) => {
    const foundData = newGrades.find((item) => student.id === item.studentId);
    return { ...student, grade: foundData ? foundData.grade : 'N/A' };
  });
  return filteredStudents;
}

export default updateStudentGradeByCity;
