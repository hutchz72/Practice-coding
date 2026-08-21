const prompt = require("prompt-sync")();

function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 20 + 1);
  let isGuessedCorrectly = false;

  while (!isGuessedCorrectly) {
    const guessNumber = Number(prompt("Enter your guess number (1-20): "));
    if (guessNumber < 1 || guessNumber > 20) {
      console.log("Your guess number is incorrect");
    } else if (guessNumber < randomNumber) {
      console.log("Your guess number is too low");
    } else if (guessNumber > randomNumber) {
      console.log("Your guess number is too high");
    } else {
      console.log("Congratulations! You guessed the correct number");
      isGuessedCorrectly = true;
    }
  }
}

guessingGame();
