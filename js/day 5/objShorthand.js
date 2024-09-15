// Basic Object Shorthand:-------------------------
let createPerson = (name, age) => {
    let obj = {
        name,
        age
    }
    return obj;
}
// console.log(createPerson("vinay", 23))

// Method Shorthand:-----------------------------
let createPersonModify = (name, age) => {
    let obj = {
        name,
        age,
        introduce:function () {
            return `Hi, I'm ${name} and I'm ${age} years old.`
        }
    }
    
    return obj.introduce();
}
// console.log(createPersonModify("vinay", 23))

// Computed Property Names:----------------------------------

function createObject(key,value) {
    let obj={
        [key]:value,
    }
    return obj;

}
let computeVal= createObject('name',"vinay")
// console.log(computeVal);

// object shorthand with destructuring:------------------------------------
function mergeObjects(obj1,obj2) {
    let {firstName,lastName,age}=obj1;
    let {skill1,skill2}=obj2;
    return {firstName,lastName,age,skill1,skill2};

}
let male={
    firstName:"vinay",
    lastName:"kumar",
    age:23
}
let skills={
   skill1:"html",
   skill2:"css"
    
};

let destructu= mergeObjects(male,skills);
// console.log(destructu);

// advanced shorthand usage

function updatedPerson(oldPerson,newName) {
   let obj1={
    oldPerson,
    age:45,
    address:"State-up"
   }
   let obj2={
    newName,
    age:25,
    address:"Nodia"
   }
   return {obj1,obj2};
}
// updatedPerson('vinay');
let updateName1=updatedPerson('vinay',"vinay kumar");
let updateName2=updatedPerson('neha',"baliyan");
console.log(updateName1,updateName2);
