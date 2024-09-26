function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model}`
}
let vehi1 = new Vehicle("hero", 2012);
// console.log(vehi1.getDetails());

// 1-------------------------------===================;


function ElectricVehicle(make, model, bettryCapacity) {
    Vehicle.call(this, make, model);
    this.bettryCapacity = bettryCapacity;
}
ElectricVehicle.prototype.getDetails = function () {
    return `Make: ${this.make}, Model: ${this.model} bettryCapacity ${this.bettryCapacity} `
}


ElectricVehicle.prototype.compareBattery = function (otherVechile) {
    if (this.bettryCapacity === otherVechile.bettryCapacity) {
        return `equal `;
    } else {
        return `not equal`;
    }
};
let e1 = new ElectricVehicle("vinay", 2015, 5000);
let e2 = new ElectricVehicle("sikhera", 2014, 5000);
// console.log(e1.compareBattery(e2));
// console.log(e2.compareBattery(5000));



// -------------------Prob2 --------------------
function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
    if (amount >= 0) {
        return `increase balance ${this.balance += amount}`
    }
}

let bank = new BankAccount(69764265, 30000);
// console.log(bank.deposit());



function SavingAccount(accountNumber, balance) {
    BankAccount.call(this, accountNumber, balance)

}
SavingAccount.prototype.withdraw = function (amount) {
    if (amount >= 0 && amount <= this.balance) {
        return `withdraw ${this.balance -= amount}`
    }
}
SavingAccount.prototype.checkBalance = function () {
    return `remaning balance is ${this.balance}`
}
Object.setPrototypeOf(SavingAccount.prototype, BankAccount.prototype)

let saving = new SavingAccount(12540254, 2000)
console.log(saving.withdraw(100))
// console.log(saving.withdraw(100))
// // console.log(saving.deposit(1000))
// console.log(saving.checkBalance())




// <---------------------prob3 ---------------------->
function Employee(baseSalary) {
    this.baseSalary = baseSalary;
}
Employee.prototype.calculateSalary = function () {
    return `basesalary is ${this.baseSalary}.`;
}

function FullTimeEmployee(baseSalary, monthly, bonuses) {
    Employee.call(this, baseSalary);
    this.monthly = monthly;
    this.bonuses = bonuses;
}


FullTimeEmployee.prototype.calculateSalary = function () {
    return ` FullTimeEmployee salary is basesalary ${this.baseSalary} monthly ${this.monthly} bonus ${this.bonuses} total salary is ${this.bonuses + this.monthly}`;
}

Object.setPrototypeOf(FullTimeEmployee.prototype, Employee.prototype)


function PartTimeEmployee(baseSalary, hourly) {
    Employee.call(this, baseSalary);
    this.hourly = hourly;
}
PartTimeEmployee.prototype.calculateSalary = function () {
    return `basesalary is ${this.baseSalary} and hourly charge is ${this.hourly} and pay ${this.hourly * this.baseSalary}`;
}
Object.setPrototypeOf(PartTimeEmployee.prototype, Employee.prototype)




// prob 4-------------------------------------

function Shape() {
   
}
Shape.prototype.calculateArea = function () {
    return 0;
}

function Rectangle(width,height) {
    
    this.width=width;
    this.height=height;
}

Object.setPrototypeOf(Rectangle.prototype,Shape.prototype);

Rectangle.prototype.calculateArea=function () {
    return  ` ${this.width * this.height}`
}

function Triangle(base,height) {
    this.base=base;
    this.height=height;
}
Object.setPrototypeOf(Triangle.prototype,Shape.prototype);


Triangle.prototype.calculateArea=function () {
    return 0.5*this.base*this.height;
}


function Parallelogram(base,height) {
    Rectangle.call(this,base,height);
}
Object.setPrototypeOf(Parallelogram.prototype,Rectangle.prototype)



Parallelogram.prototype.calculateArea=function () {
    return this.width * this.height 
}


let rect = new Rectangle(10, 5);
let tri = new Triangle(10, 5);
let para = new Parallelogram(10, 5);

console.log('Rectangle area:', rect.calculateArea());
console.log('Triangle area:', tri.calculateArea()); 
console.log('Parallelogram area:', para.calculateArea());