const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

function getTopScoringStudents(students) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.score > 80) {
      result.push(student.name);
    }
  }

  return result;
}

function getAverageAge(students) {
  if (students.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }

  const average = sum / students.length;

  return average;
}


function addStudent(students, student) {
  students.push(student);
  return students;
}

function removeStudentByName(students, name) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.name !== name) {
      result.push(student);
    }
  }

  return result;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };