// let display1 = document.getElementById('display1');
let start = document.querySelector('#start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let mint = document.getElementById('mint');
let sec = document.getElementById('sec');

let timer;
let second=0;
let minutes=0;
start.addEventListener('click', () => {
    timer = setInterval(() => {
        second++
        if (second > 60) {
            second=0;
            minutes++;
            mint.innerText=minutes;
        }
        sec.innerText=second;
    }, 1000);
})
pause.addEventListener('click', () => {
    clearInterval(timer);
    console.log(timer)
})
reset.addEventListener('click', () => {
    clearInterval(timer);
    window.location.reload();
})