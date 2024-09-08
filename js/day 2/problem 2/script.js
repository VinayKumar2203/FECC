function printArray(n,arr) {
    let bag='';
    for (let i = n-1; i >= 0; i--) {
        const reverseNumber = arr[i];
        // console.log(reverseNumber);
        bag+=reverseNumber +' ';
    }
    console.log(bag);
}
printArray(5,[1,2,3,4,5]);