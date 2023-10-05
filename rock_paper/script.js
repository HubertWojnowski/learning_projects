function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Make it case-insensitive
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice (rock, paper, or scissors):');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    
    console.log(result);

    if (result.startsWith('You win')) {
      playerScore++;
    } else if (result.startsWith('You lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game.');
  } else {
    console.log("It's a tie!");
  }
}

// Start the game
game();