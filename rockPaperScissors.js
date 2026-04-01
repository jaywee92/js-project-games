// Rock Paper Scissors Game
// node rockPaperScissors.js rock

const choices = ['rock', 'paper', 'scissors'];

function playGame() {
  const playerChoice = process.argv[2];

  // Base case 1: Missing input
  if (!playerChoice) {
    console.log('Error: please provide your choice.');
    console.log('Usage: node rockPaperScissors.js rock');
    return;
  }

  // Base case 2: Invalid input
  const lowerChoice = playerChoice.toLowerCase();
  if (!choices.includes(lowerChoice)) {
    console.log('Error: invalid choice. Use: rock, paper, or scissors.');
    return;
  }

  // Computer choice random 
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  console.log(`You chose ${lowerChoice}. Computer chose ${computerChoice}.`);

  // if else decision
  if (lowerChoice === computerChoice) {
    console.log('Result: It\'s a draw!');
  } else if (
    (lowerChoice === 'rock' && computerChoice === 'scissors') ||
    (lowerChoice === 'paper' && computerChoice === 'rock') ||
    (lowerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('Result: You win!');
  } else {
    console.log('Result: You lose!');
  }
}

playGame();
