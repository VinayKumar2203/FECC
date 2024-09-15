// Array Destructuring:----------------------------------
function swap(a, b) {
     let [name,age,PhoneNo]=a;
     let [qualification,duration,division]=b;
    //  console.log(`name:- ${name} age:- ${age} phone:- ${PhoneNo} qualificatio:- ${qualification} duration:- ${duration} division:- ${division}`);
}
let user1 = ["vinay", 25, 74093121]
let user2 = ["BA", 3, "FIRST"]
swap(user1, user2);

// Object Destructuring :---------------------------------------------;
function displayPerson(person) {
    let {name,age}=person;
    // console.log(name,age);
}
let person1={
    name:"LadduGopal",
    age:25
}
displayPerson(person1)

// Nested Destructuring:---------------------------------------;
function extractNestedData(obj) {
    // console.log(obj);/*simple try whole obj */
    let {name:{first,last}}=obj
    // console.log(first);/*nested obj try here */
}
let nestedObj={
    name:{
        first:"vinay",
        last:"kumar"
    }
}
extractNestedData(nestedObj);

// default values in Destructurings:-----------------------------
function getCoordinates({x=0,y=0}={}) {
    if (x==undefined &&y==undefined) {
        return {x,y};
    }
    return (`x value ${x} y value is ${y}`);

}

let x=4;
let y=4;
let getCoordinatesvalue= getCoordinates({x,y});
// console.log(getCoordinatesvalue);

// Rest in destructuring:-------------------------------------------;
function geetUserInfo(user) {
    let {name,...Rest}=user;
    console.log(name,Rest);
}
let getUserObj={
    name:"laddu Gopal",
    otherName:"radha rani",
    otherRani:"rukmani"
    
}
geetUserInfo(getUserObj)