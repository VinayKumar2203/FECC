// Basic Do-while loop==================
let i = 0;
do {
    //   console.log(i);
    i++;
} while (i < 5);
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

    } while (password.length <= 6);
}
// validatePassword()

// random number guessing game;--------------------------------------------------

function guessNumber() {

    let clintGess ; 
    let generateRandomNumber;
    do {
       clintGess= prompt('enter your gess number 1 to 10')
        generateRandomNumber = Math.floor(Math.random() * 10)+1
        if (Number(clintGess) == generateRandomNumber) {
            alert("Conguralation you won the match");
            break;
        } else {
            alert("best but try again");
            // clintGess= prompt("gess with a new value");
        }
    } while (Number(clintGess) != generateRandomNumber);
}
guessNumber()