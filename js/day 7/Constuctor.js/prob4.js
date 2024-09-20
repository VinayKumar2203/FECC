// ├── noOfLegs <number>
// ├── vegetarian <boolean>
// ├── eat() <function that returns `eating...`>
// └── greet() <function that returns `Hi, I have {noOfLegs} legs.`>

function animal(noOfLegs,vegetarian) {
    let obj={};
    obj.noOfLegs=noOfLegs;
    obj.vegetarian=vegetarian;

    obj.eat=function() {
        return `Eating...`;
    };
    obj.greet=function() {
        return `Hi, I have ${noOfLegs} legs`;
    };
 return obj;
}
let a1 = animal(4, true);

// console.log(a1.eat());
// console.log(a1.greet()); 

// factory function to a constructor function;

function AnimalCF(noOfLegs,vegetarian) {
    this.noOfLegs=noOfLegs;
    this.vegetarian=vegetarian;

    this.eat=function() {
        return `eating....`
    }
    this.greet=function() {
        return  ` hi ,i have ${noOfLegs} legs`;
    }
}

// let animalCF = new AnimalCF(4, true);
// console.log(animalCF.eat()); 
// console.log(animalCF.greet()); 

// factory function to an ES6 class-------------------

class AnimalES6{
    constructor(noOfLegs,vegetarian){
     this.noOfLegs=noOfLegs;
     this.vegetarian=vegetarian;
    }
    eat(){
        return`eating...`;
    };
    greet(){
        return` Hi,i have ${this.noOfLegs} legs.`;
    };
}

let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.
