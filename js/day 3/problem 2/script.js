// A.Truthy/falsy Values
// Q1. check Truthiness:-
function isTruthy(value) {
    if (value === 0 || value === null || value === "" || value === undefined || value === false || isNaN(value)) {
        return false;
    } else {
        return true;
    }
}
//  let x= isTruthy(0);
//  let x= isTruthy(1);
//  let x= isTruthy("hello");
//  let x= isTruthy(null);
//  let x= isTruthy([]);
// console.log(x);
// ********************************************
// Q2. Falsy Values Count: 
function countFalsyValues(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value === 0 || value === null || value === "" || value === undefined || value === false || isNaN(value)) {
            count++;
        }
    }
    // console.log(count);
}
let arr1 = ["", null, 4, 0, undefined, true, false, "hello"]
countFalsyValues(arr1)

// **************************************************************************
// Q3.Filter Truthy values************
function filterFalsyValues(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value === 0 || value === null || value === "" || value === undefined || value === false || isNaN(value)) {

        }
        else {
            newArray.push(arr[i]);
        }
    }
    // console.log(newArray);
}
let filerFalsy = ["", null, 4, 0, undefined, true, false, "hello"]
filterFalsyValues(filerFalsy)

// ***********************************************************************************
// Q.B Comparison Operators-------------------------------------
// 1.basic Comparison=====================================
function compareNumbers(a, b) {
    if (a > b) {
        return "a is greater than";
    }
    else if (a < b) {
        return "a is less than";
    }
    else {
        return "equal to";
    }
}
let Comparison = compareNumbers(6, 6)
// console.log(Comparison);

// 2. comparison Table------------------------------------------------------
function comparisonTable(a, b) {
    if (a > b) {
        return "a is greater than b"
    }
    else if (a >= b) {
        return "a is greater than equal to b"
    }
    else if (a < b) {
        return "b is greater than  a"
    }
    else if (a <= b) {
        return "a is less than equal to b"
    }
}

let comparisonTable1 = comparisonTable(4, 7);
// console.log(comparisonTable1);

// 3.Comparison Challenge----------------------------------------------
function compareThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return "a is the largest";
    }
    else if (b > a && b > c) {
        return "b is the largest";
    }
    else {
        return "c is the largest";
    }
}
let compareThreeNumbers3 = compareThreeNumbers(4, 5, 6)
// console.log(compareThreeNumbers3);

// C.Mathematical Operators*************************************
// 1.basic Arithmetic:-


function performArithmetic(a, b, operators) {
    let result;
    switch (operators) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;

        default:
            return "please put a valid thing"
            break;
    }
    return {
        a,
        b,
        operators,
        result
    };
}
let num1 =5;
let num2=10;
let operator = "+"
let math = performArithmetic(num1,num2,operator);
console.log(math);


