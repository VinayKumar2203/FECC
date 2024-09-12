// --------------------Basic Coercion Check----------------------
function checkCoercion(a, b) {
    if (a === b) {
        // console.log(`${a} and ${b} both are strict equality`)
    }
    else if (a == b) {
        // console.log(`${a} and ${b} both are loose equality`)
    }
}
let num1 = null;
let num2 = undefined;
checkCoercion(num1, num2)
// -------------------- Coercion in Arithmetic----------------------

function coerceInArithmetic(a, b,mark) {
    if (mark == "+") {
        return a + b;
    }
    else if (mark == "-") {
        return a - b;
    }
    else if (mark == "*") {
        return a * b;
    }
    else if (mark == "/") {
        return a / b;
    }
}
let math1 = 5;
let math2 = "5";
let mark="*"
let result = coerceInArithmetic(math1, math2,mark);
// console.log(result);

// ----------------------------implicit Coercion in Conditionals;-----------------------
