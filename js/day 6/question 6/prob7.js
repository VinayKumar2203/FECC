const numbers = [1, 2, 3, 4, 5, 7];

let result = numbers.map((item) => {
    // console.log(item);
    return item;
})
console.log(result);
let filterval = result.filter((num) => {
    if (num % 2 == 1) {
        return true;
    }
})
console.log(filterval);

let redVal = filterval.reduce((acc, curr) => {
    return acc + curr*curr;
}, 0)
console.log(redVal);