// Q:9
// promise---;
let array = [50, 20, 25];
let cutOFF = 30;
function codingScoreCheck(arrayMark, cutOffScore) {
    let count = 0;
    let total = arrayMark
        .map((ele) => {
            count++;
            return ele;
        })
        .reduce((acc, curr) => {
            return acc + curr;
        });
    let averageVal = total / count;
    let getPromise = new Promise((res, rej) => {
      setTimeout(()=>{
        if (cutOffScore <= averageVal) {
            res(`you are pass in the coding round ${averageVal}`);
        } else {
            rej(`Sorry you haven't cleared the coding round.`);
        }
      },2000)
    });
    getPromise
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log("*code successfull *");
        });
}
codingScoreCheck(array, cutOFF);
