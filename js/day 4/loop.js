// Basic for loop-----------------------------
for (let i = 0; i <= 10; i++) {
    // console.log(i);
    
}
// for loop with Array;------------------------------
function printArrayElement(arr) {
    for (let i = 0; i < arr.length; i++) {
    //  console.log(arr[i])        
    }
}
printArrayElement([1,2,5,4,7,8,5])
// 

// -------Nested for lOOP--------------------
function createMultiplicationTable(n) {
    for (let i = 0; i < n; i++) {
        let bag="";
       for (let j = 0; j < n; j++) {
        // console.log()
        bag+=j+" "
        
       }
        console.log(bag)
    }
}
createMultiplicationTable(5)