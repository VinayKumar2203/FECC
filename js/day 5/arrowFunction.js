// Basic arrow Function:--------------
let add =(a,b)=>{
   return a+b;
}
// console.log(add(2,3));

// Single-Line Arrow Function:------------------------

let SingleLine=(n)=>n*2;
// console.log(SingleLine(5));

// Arrow function with implicit Return:--------------------------------
let greet =(name)=>`Hello, ${name}`;
// console.log(greet("vinay"));

// arrow function in callBack---------------------------------------
let filterEvenNumbers=()=>{
    let array=[1,2,3,4,5,6,7,8,9]
    let evenNumber= array.filter(num =>num%2==0);
   //  return evenNumber;
   //  console.log(evenNumber)
 }
 filterEvenNumbers();

//  Arrow function and this Context -------------------------------
// let Person=(name)=>{
//    this.name=name;
// }
// console.log(Person("vinay"));
let Person={
   name:"neha",
   person:function (name) {
      console.log(this.name);
   }

}
Person.person();