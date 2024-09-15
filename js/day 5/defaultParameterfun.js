// Basic default paramerers-----------------------
function greet(name = "Guest") {
    return `\"Hello, ${name}!\"`
}
let greetfun = greet()
// console.log(greetfun);

// Multiple default Parameters---------------------------------
function calculateTotal(price, tax = 0.05) {
    let withOuttax = price;
    let value = price * tax / 100
    let withtax = price - value;
    return `withOuttax ${withOuttax} withtax ${withtax}`;
}
let totalPricewithtax = calculateTotal(20000);
// console.log(totalPricewithtax);

// Default Parameters with Undefined Values----------------------------;
function describePerson(name, age = 25) {
    if (age === undefined) {
        return age;
    }
    return { name, age }
}
let undefinedFun = describePerson("vinay",);
// console.log(undefinedFun);

// Default Parameters in Complex Expression:-------------------------
function calculateDiscount(price, discount = price * 0.1) {
    let withDiscount =  discount/price * 100;
    let applyDiscount = price - withDiscount;
    return applyDiscount;
}
let discountCal = calculateDiscount(1000,);
console.log(discountCal);

// Overriding Default Parameters:-----------------------------;

function createUser(username,role="user"){
    return {username,role};
}
let overridingdefault= createUser('vinay',)
console.log(overridingdefault);
