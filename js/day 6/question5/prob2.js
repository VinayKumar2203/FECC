let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};

let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

let result = [];

for (const student of allStudentsMarksData) {
  //  console.log(student); 
  let studentDataObj = {
    name: "student_name",
    marks: []
  }
  for (const key in student) {
    if (key.startsWith("subject") && student[`marks${key.slice(-1)}`] !== null) {
      studentDataObj.name = student.name;
      // console.log(key,student[key])
        studentDataObj.marks.push({ subject: student[key], score: student[`marks${key.slice(-1)}`] })
      console.log(`subject ${student[key]} score ${student[`marks${key.slice(-1)}`]}`)
  
    }
  }
  result.push(studentDataObj);
}
// console.log(result);
// console.log(JSON.stringify(result, null, 2));

