const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 17

function checkGuess (guess) {
    if (guess > secretNumber) {
        console.log('Too High')
        return false
    } else if (guess < secretNumber) {
        console.log("Too low")
        return false
    } else (num === secretNumber) {
        console.log("Correct!")
        return true
    }
}
