
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
function add(numbers) {
    return numbers.reduce((acc, curr) => {
      if (  (curr % 3 == 0) || (curr % 5 == 0) ) {
        return acc + curr;
      }
      else{
        return acc;
      }
    }, 0)
}
console.log(add(numbers))