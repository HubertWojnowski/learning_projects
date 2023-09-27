//generate one of three options 
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}

//Get player choice
function getPlayerSelection() {
  const playerSelection = prompt("Input your choice.").toLowerCase();
  return playerSelection
}


const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return "Tie!"
  }
}
  

console.log(playRound())
