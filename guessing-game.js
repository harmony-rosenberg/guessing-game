const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// make a random whole number between min and max

function randomInRange (min, max) {
    let int =  Math.floor(Math.random() * (max - min + 1)) + min;
    askGuess(int)
}

// init the secret numbers.
let secretNumber = randomInRange(1, 100)


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

    function askRange() {
        rl.question('Enter a min number: ', handleResponseOne);

        function handleResponseOne(min) {
            rl.question('Enter a max number: ', handledResponseTwo);

            function handledResponseTwo(max) {
                console.log(`I'm thinking a number between ${min} and ${max}...`);
                randomInRange(min, max);
            }
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

askRange()
