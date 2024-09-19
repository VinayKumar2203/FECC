
function UniqueString(string) {
  return string.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
    
  }, {})
}
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
let un= UniqueString(strings)
console.log(un)


//   { apple: 3, banana: 2, orange: 1, pear: 1 }


