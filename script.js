let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretNum) => {
  const human = Math.abs(secretNum - humanGuess);
  const computer = Math.abs(secretNum - computerGuess);

  if(human === computer) return true;
  if(human < computer) return true;
  if(computer < human) return false;

}

const updateScore = winner => {
  if(winner === 'human') {
    humanScore += 1;
  }

  if(winner === 'computer'){
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;

