function printArray(n, arr) {
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        // console.log(num)
        if (max < num) {
            max = num
        }
    }
    console.log(max);
}
printArray(52, [-4, -17, -40, -32, -2, -35, -16, -32, -49, -10, -27, -26 ,-52, -22, -5, -28, -11, -28, -44 ,-17, -11 ,-21, -37, -52, -39, -41 ,-40 ,-41, -49 ,-39, -6 ,-50, -14, -37, -6, -40 ,-48, -43, -31, -6, -31, -34, -51, -51 ,-27, -20, -9, -21, -46, -32, -17, -26]);