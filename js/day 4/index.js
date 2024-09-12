// Basic Type Conversion-------------------
function convertToNumber(value) {
    return Number(value);
}
let result = convertToNumber(true)
// console.log(typeof(result));

// String Conversoion-------------------------
function convertToString(value) {
    return String(value);
}
let putStrValue = {}
let resultOfString = convertToString(putStrValue)
// console.log(typeof (resultOfString));

// complex Type Conversion----------------------------------
function convertAndCompare(a, b) {
    if (Number(a) == String(b)) {
        return "value are equal ";
    } else {
        return "value are not equal";
    }
}
let num1 = 10;
let num2 = 10;
let complexResullt = convertAndCompare(num1, num2)
console.log(complexResullt);