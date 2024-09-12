// Basic Do-while loop==================
let i=0;
do {
//   console.log(i);
    i++;
} while (i<5);
// input Validation Using Do-While

function validatePassword() {
    let password;
    do {
        // password=prompt("please enter your password will be in 6 digits");

        if (password.length >= 6) {
            alert("password is valid ")   
            break;
        } else {
            alert("password is too short ")
         
        }
        
    } while (password.length<=6);
}
// validatePassword()

// random number guessing game;--------------------------------------------------

function guessNumber(num) {
       do {
        let randomNumber= Math.floor(Math.random()*10);
        console.log(randomNumber);
    } while (num >=10);
}
guessNumber()