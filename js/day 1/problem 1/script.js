
let M = 1900;
let N = 2025;
// let bag=[];
let bag="";
for (let i = M; i <= N; i++) {

    if ((i % 4 == 0 && i%100!==0) ||i%400==0) {

        bag += i + " ";
        // bag.push(i);
    }
}
console.log(bag);