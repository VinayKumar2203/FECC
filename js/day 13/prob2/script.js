"sticky";

let inputField=document.getElementById("inputField");
let goBtn=document.getElementById("goBtn");
let viewResult=document.getElementById("viewResult");

goBtn.addEventListener("click",()=>{
     console.log('helo');
     let getVal= inputField.value;
     let count=0;
     for (let i = 0; i < getVal.length; i++) {
       count++;

     }
     console.log(count);
     viewResult.innerText=`count total word ${count}`;

     
})