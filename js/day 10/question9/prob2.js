//problem 9;
// question:2;
let arrayOfMarks = [15, 25, 100, 100, 14];
let cutOFF = 50;
function HUKUMUScoreCheck(array, cutOffScore) {
    let count = 0;
    let total = array.map((ele) => {
        count++;
        return ele
    }).reduce((acc, curr) => acc + curr, 0)
    console.log(total);
    let averageVal = total / count;
    console.log(averageVal);
  let getPromise=new Promise((res,rej)=>{
    setTimeout(()=>{
        if (cutOffScore <= averageVal) {
            res(`congretulation you have pass the examination ${averageVal}`)
        }
        else{
            rej(`Sorry you haven't cleared the HUKUMU round`);
        }
    },2000);
  })
  getPromise.then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
  .finally(()=>{
    console.log('*completed*')
  })
}
HUKUMUScoreCheck(arrayOfMarks, cutOFF)