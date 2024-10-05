let inputVal=document.getElementById("inputVal");
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    let getMeg=inputVal.value;
    // console.log('ckk')
    let count=0;
    
    // let convertLowerToUpper=getMeg;
    for (let i = 0; i <getMeg.length; i++) {
        count++;        
    }
    let result=getMeg.toUpperCase();
    console.log(result);
    console.log(count);
    let message=document.getElementById("message");
    message.innerText=`Message:- ${result}`
    let leng=document.getElementById("leng");
    leng.innerText=`total Latter:- ${count}`
})