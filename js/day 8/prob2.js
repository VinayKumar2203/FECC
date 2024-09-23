function Person(name,age) {
    this.name=name;
    this.age=age;

}
Person.prototype.introduce=function () {
    return `Hi,my name is ${this.name} and i am ${this.age} years old.`

}
let p1=new Person("vinay",23)
console.log(p1.introduce())

// employee --------------------------------------\

function Employee(name,age,jobTitle) {
    Person.call(this,name,age);
    this.jobTitle=jobTitle;
}
Employee.prototype.work=function () {
    return `${this.name} and age is ${ this.age} working as a ${this.jobTitle}.`
}

let e1=new Employee('vinay',25,"developer");
console.log(e1.work());

