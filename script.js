let userChoice = prompt("Choose Your Weapon", "");
userChoice = userChoice.toLowerCase();
function getUserChoice() {
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    return userChoice;
  } else {
    alert("Error 404");
  }
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } 
    return "scissors";
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie";
  } 
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won! Paper beats Rock";
    } 
      return "You won! Rock beats Scissors";
  } 
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won! Scissors beats Paper";
    }
      return "You won! Paper beats Rock"
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won! Rock beats Scissors";
    } 
      return "You won! Scissors beats Paper"
  }
}

function playGame() {
  let userChoice = getUserChoice("rock", "paper", "scissors");
  let computerChoice = getComputerChoice();
  alert(`Computer chose ${computerChoice}`);
  alert(determineWinner(userChoice, computerChoice));
}
playGame();