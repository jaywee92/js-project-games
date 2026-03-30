function getComputerChoice() {
  // Step 1: Define the possible choices in an array
  const choices = ['rock', 'paper', 'scissors'];

  // Step 2: Generate a random number between 0 and 2 (inclusive)
  const randomNumber = Math.floor(Math.random() * 3);

  // Step 3: Return the choice at the random index
  return choices[randomNumber];
}

// Function to determine the winner based on player and computer choices
function determineWinner(playerChoice, computerChoice) {
  // Step 1: Convert both choices to lowercase for case-insensitive comparison
  const player = playerChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  // Step 2: Check if it's a draw (both choices are the same)
  if (player === computer) {
    return 'draw';
  }

  // Step 3: Check winning conditions for the player
  // Player wins if: rock vs scissors, paper vs rock, or scissors vs paper
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }

  // Step 4: If not a draw and not a win, it must be a loss
  return 'lose';
}

// Main function to run the game
function playGame() {
  // Step 1: Get the player's choice from command line arguments
  const playerChoice = process.argv[2];

  // Step 2: Check if the player provided a choice
  if (!playerChoice) {
    console.log('Please enter your choice: rock, paper, or scissors');
    return;
  }

  // Step 3: Define valid choices and check if player's choice is valid
  const validChoices = ['rock', 'paper', 'scissors'];
  if (!validChoices.includes(playerChoice.toLowerCase())) {
    console.log('Invalid choice! Please choose: rock, paper, or scissors');
    return;
  }

  // Step 4: Get computer's choice
  const computerChoice = getComputerChoice();

  // Step 5: Determine the winner
  const result = determineWinner(playerChoice, computerChoice);

  // Step 6: Display the choices
  console.log(`You chose ${playerChoice.toLowerCase()}. Computer chose ${computerChoice}.`);

  // Step 7: Display the result
  if (result === 'win') {
    console.log('You win!');
  } else if (result === 'lose') {
    console.log('You lose!');
  } else {
    console.log('It\'s a draw!');
  }
}

// Step 8: Run the game when the script is executed
playGame();

playGame();
