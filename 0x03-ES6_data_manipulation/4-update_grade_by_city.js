export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const filtered = students.filter((elem) => elem.location === city)
  .map((student) => {
    const foundData = newGrades.find((item) => student.id === item.studentId);
    return { ...student, grade: foundData ? foundData.grade : 'N/A' };
  });
  return filtered;
}
