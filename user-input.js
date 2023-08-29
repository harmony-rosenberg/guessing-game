const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// init the secret numbers.
let secretNumber = 17

// function for checking the user's guess.
function checkGuess (guess) {
    if (guess > secretNumber) {
        console.log('Too High')
        return false
    } else if (guess < secretNumber) {
        console.log("Too low")
        return false
    } else { 
        console.log("Correct!")
        return true
       }  
    }

// function to check the user's guess for the sn.
function askGuess() {
    rl.question('Enter a guess: ', (guess) => {
        let numberGuess = Number(guess);
        let result = checkGuess(numberGuess);

       if (result === true) {
        console.log('You Won!')
        rl.close()
       } else {
        askGuess()
       }
    })
  }

askGuess()