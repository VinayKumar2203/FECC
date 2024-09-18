// problem one ..........
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


let newObj = {};
// console.log(newObj);

for (const key in subjectsHash) {
    students.map((item) => {
        if (key == item.subjectID) {
        
            // console.log(item.name,[subjectsHash[key]]);
            // newObj[item.name] = [subjectsHash[key]];
          if (newObj[item.name]) {
            newObj[item.name].push(subjectsHash[key])
          }
          else{
            newObj[item.name]=[subjectsHash[key]]
          }
        }
    })
}
console.log(newObj);


/*
Expeted OutPut--------------
{
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
}

*/