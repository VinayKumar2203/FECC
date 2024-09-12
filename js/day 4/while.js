let i = 0;
while (i <= 5) {
    // console.log(i);
    i++;
}
// while loop wiht condition
function countDowmFrom(n) {
    while (n >= 0) {
        // console.log(n);
        n--;
    }
}
countDowmFrom(5)

// while loop with break condition--------------------------------
function findFirstEven(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i])
            break;
        }
        i++;
    }
}
findFirstEven([1, 5, 4, 2, 5, 75, 14])