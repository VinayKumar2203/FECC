
const words = ['apple', 'banana', 'cherry'];
// Expected output: [5, 6, 6]
const arr=[];
words.map((char,index)=>{
    // console.log(char);
    const str=char.length;
    // console.log(str);
    arr.push(str);
})
// console.log(arr)

const mixedNumbers = [-3, 7, -2, 5, -8, 10];
// Expected output: [7, 5, 10]

const maxNum= mixedNumbers.filter((max,index)=>max >0)
// console.log(maxNum);

const prices = [10.99, 20.49, 5.75];
// Expected output: 37.23

let result=prices.map((num,index)=>num)
.reduce((acc,cru)=>acc+cru,0);
console.log(result);