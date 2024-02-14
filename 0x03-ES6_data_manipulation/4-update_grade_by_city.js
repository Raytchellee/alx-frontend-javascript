export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  const filtered = students.filter((item) => item.location === city).map((person) => {
    const found = newGrades.find((elem) => person.id === elem.studentId);
    return { ...person, grade: found ? found.grade : 'N/A' };
  });
  return filtered;
}
