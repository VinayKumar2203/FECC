function Employee(name,position) {
    this.name=name;
    this.position=position;
}
Employee.prototype.getDetails=function () {
    return(`employee name '${this.name}' and him position '${this.position}'`);

}
// let e1=new Employee("vinay","developer")
// console.log(e1.getDetails());

function Manager(name,position,team) {
    Employee.call(this,name,position);
    this.team=team;

}
Manager.prototype.getDetails=function () {
    return `manager name is '${this.name}' and him position '${this.position}' team name '${this.team}' `
}

// let m1=new Manager("vinay","fresher","Panghal");
// console.log(m1.getDetails());


function Developer(name,position,programmingLang) {
    Employee.call(this,name,position);
    this.programmingLang=programmingLang;
}
Developer.prototype.getDetails=function () {
    return `developer name is '${this.name}' and him position '${this.position}' programmingLang '${this.programmingLang}' `
}

// let d1=new Developer("vinay","fresher","JavaScript");
// console.log(d1.getDetails());


// No.2===========-------------;

function User(name,role) {
    this.name=name;
    this.role=role;
}
User.prototype.gerRole=function () {
    return `user ${this.name} and role ${this.role}`
}
// let u1=new User("vinay","front-end");
// console.log(u1);

function Admin(name,role) {
    User.call(this,name,role);

}
Admin.prototype.manageUsers=function () {
    return `Admin managing users.`;
}
Admin.prototype.gerRole=function () {
    return`name ${this.name} role ${this.role}`
}
let a1=new Admin("vinay","fe");
// console.log(a1.gerRole(),a1.manageUsers());

function Library() {
    
}
Library.prototype.getBooks=function () {
    return`total book of library`
}
// publicLibrary=========================
function PublicLibrary() {
    Library.call(this)
}
PublicLibrary.prototype.lendBook=function () {
    return `this is lendBook of publicLibrary`
}
// let p1=new PublicLibrary();
// console.log(p1.lendBook());
// UniversityLibrary===========================
function UniversityLibrary() {
    Library.call(this);
}
UniversityLibrary.prototype.addResearchPapers=function () {
    return`UniversityLibrary method of addResearchPapers`
};

// let u1=new UniversityLibrary()
// console.log(u1.addResearchPapers());

// question.4----------------]
function Person(name) {
    this.name=name;
}
Person.prototype.introduce=function () {
    return `Hello , my name is ${this.name}`;
}
let person1=new Person("vinay");
console.log(person1.introduce());

function Athlete(name,sport) {
    Person.call(this,name);
    this.sport=sport;
}
Athlete.prototype.playSport=function (sport) {
    return `playing ${sport}`
}
Athlete.prototype.introduce=function () {
    return `${this.sport} they play `
}
let ath1=new Athlete("singh","hockey");
// console.log(ath1.playSport("footboll"))
// console.log(ath1.introduce())

// Q.5 ========================------------
function Appliance() {
    
}
Appliance.prototype.turnOn=function () {
    return `the appliance is now on.`
}
function WashingMachine() {
    Appliance.call(this)
}
WashingMachine.prototype.startWashing=function () {
    return  ` the washing machine is now washing clothes.`
};

Object.setPrototypeOf(WashingMachine.prototype,Appliance.prototype);
let w1=new WashingMachine()
console.log(w1.turnOn());
console.log(w1.startWashing())