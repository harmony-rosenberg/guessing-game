const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random whole number between min and max
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber;
let numAttempts;

// Function to check the user's guess
function checkGuess(guess) {
  if (guess > secretNumber) {
    console.log('Too high.');
    return false;
  } else if (guess < secretNumber) {
    console.log('Too low.');
    return false;
  } else {
    console.log('Correct!');
    return true;
  }
}

// Function to ask the user for a guess
function askGuess() {
    if (numAttempts === 0) {
        console.log(`You lose😡😡😡`);
        rl.close()
        return;
    }

  rl.question('Enter a guess: ', (guess) => {
    const numberGuess = Number(guess);
    const result = checkGuess(numberGuess);

    if (result === true) {
        console.log('You won!');
      rl.close();
    } else {
        numAttempts--;
      askGuess();
    }
  });
}

function askLimit() {
    rl.question('Enter the number of attempts: ', (limit) => {
        numAttempts = parseInt(limit);
        askRange()
    });
}

// Function to handle user input for the min and max range
function askRange() {
  rl.question('Enter a min number: ', (min) => {
    rl.question('Enter a max number: ', (max) => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(Number(min), Number(max));
      askGuess(); 
    });
  });
}

// Initialize the secret number

//askRange()

askLimit();