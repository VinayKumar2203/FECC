// Rest Parameter--------------------------
function sum(...numbers) {
    // console.log(numbers);
    let add=0;
    for (const number of numbers) {
        add+=number;
    }
    // console.log(add)
}
sum(1,2,3,4,5,6)

// spread with array -------------------------------
 function mergeArrays(arr1,arr2) {
    // console.log(arr1,arr2)
    let combined=[...arr1,...arr2]
    // console.log(combined);
 }
 let array1=[1,2,3,4,5]
 let array2=[6,7,8,9]
 mergeArrays(array1,array2);

//  spread with Objects -----------------------------;
function updatePerson(person,updates) {
    let newObj={...person,...updates}
    // console.log(newObj);
}
let personObj={
    name:"radha",
    name2:"krishana"
}
let objUpdates={
    name3:"neha",
    name4:"vinay"

}
updatePerson(personObj,objUpdates);

// Rest with Destructuring:----------------------------------;

function extraFirstAndRest(arr) {
    // console.log(arr);
    let [name,dob,...rest]=arr
    // console.log(name,dob,rest);
}
let array=["vinay",2003,123564875,"neha","kumar",]
extraFirstAndRest(array)

// Spread in function Calls-------------------------------;

function calculateTotal([...args]) {
    // console.log(args);
    let sum1=0;
    for (const arg of args) {
        // console.log(arg);
        sum1+=arg;
    }
    console.log(sum1);
}
let calTotal=[4,5,8,6,7,9,2,4];
calculateTotal(calTotal)