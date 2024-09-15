// Basic string interpolation:--------------------
function greet(name,age) {
    return `Hello, my name is ${name} and I am ${age} years old.`
}
let temp1=greet("vinay",21);
// console.log(temp1);

// Multi-line string:------------------------------------------------
function generateParagraph() {
    return `<p>this is Paragraph created by template literals</p>`;
}
let genPara=generateParagraph();
// console.log(genPara);

// Expression Inside Template Literals:-----------------------------------
function calculateSum(a,b) {
    return `the sum of ${a} and ${b} is ${a+b}`;
}
let calCulate=calculateSum(5,6);
// console.log(calCulate);

// Embedding a function in template literals-----------------------------
function formatCurrency(value) {
    return `$${value}`;
}
let currency=formatCurrency(50);
console.log(currency);

// Nested Template Literals:--------------------------------------
function formatMessage(name,starus) {
    if (starus===true) {
        return `Welcome back ${name}! Your status is : active.`

    }
}
let msg=formatMessage("vinay",true);
console.log(msg);