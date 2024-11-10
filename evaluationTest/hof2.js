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

// let allStudentsMarksData = [prateekMarksData, nrupulMarksData];

// let result = allStudentsMarksData.map((student) => {
//     let studentData = { name: student.name, marks: [] };
//     // console.log(studentData);
//     for (let i = 1; i < 5; i++) {
//         let subject=student[`subject${i}`]
//         let score=student[`marks${i}`];

//         if (subject && score) {
//             studentData.marks.push({subject,score});

//         }
//     }
//     return studentData;
// })
// console.log(result);
/*
output
[
{
  name: "Prateek",
  marks: [
    { subject: "Javascript", score: 90 },
    { subject: "HTML", score: 81 },
    { subject: "CSS", score: 80 },
  ],
},
{
  name: "Nrupul",
  marks: [
    { subject: "Java", score: 95 },
    { subject: "Python", score: 85 },
  ],
},
];

*/

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
let result = allStudentsMarksData.map((student) => {
    console.log(student);
    let studentData = { name: student.name, marks: [] };
    console.log(studentData);
    for (let i = 1; i < 5; i++) {
        let subject = student[`subject${i}`];
        let marks = student[`marks${i}`];

        if (subject && marks) {
            studentData.marks.push({ subject: subject, marks: marks });
        }
        else {
            return studentData;
        }

    }
})
console.log(result);