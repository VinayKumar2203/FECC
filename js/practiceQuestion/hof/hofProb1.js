//   {
//     Prateek: ["Rust", "Javascript"],
//     Yogesh: ["HTML"],
//     Nrupul: ["Java"],
// }
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};

let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];

let result =students.reduce((acc,student)=>{
  let {subjectID,name}=student

  let sub= subjectsHash[subjectID];
  // console.log(sub);

  if (acc[name]) {
     acc[name].push(sub);
  } else {
    acc[name]=[sub];
  }

return acc;


},{});
console.log(result);