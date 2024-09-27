// q.7 with Array filtering with callBack functions

let numbers = [1, 5, 6, 4, 8, 1, 5, 25, 52, 54, 23, 4];
function filterArray(arr, callBack) {
    let result=[];
    arr.filter((ele) => {
        if (ele % 2 == 0) {
           return result.push(ele)
        }
    })
// console.log(result)
    callBack(result);
}


// callBack function is start now 

function callBack(res) {
    // if (res == true) {
    //     console.log(res);
    // }
console.log(res);

}
filterArray(numbers, callBack);