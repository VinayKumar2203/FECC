// Question-3;
let averageCodScore=90;
let averageHukumuScore=75;
let cutOFF=72;
function unitMovementCheck(averageCodingScore,averageHukumuScore,cutOffScore) {
    let getPromise=new Promise((res,rej)=>{
        setTimeout(()=>{
            if (averageHukumuScore && averageCodingScore >= cutOffScore) {
                res(`you are pass your number is above of cutoff ${averageCodScore}`)
            }
            else{
                rej(`Sorry you haven't cleared the final cutoff.`);
            }
        },2000)
    })
    getPromise.then((res)=>{
        console.log(res)
    }).catch((rej)=>{
        console.log(rej);
    }).finally(()=>{
        console.log('*successfull*')
    })
}
unitMovementCheck(averageCodScore,averageHukumuScore,cutOFF)