const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const gameOverText = document.querySelector("#gameOverText");
let player;
let computer;
let result;
let playerPoint = 0;
let computerPoint = 0;

choiceBtns.forEach((button) => button.addEventListener("click", () => {
  player = button.id;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = "Result: " + determineWinner();
  scoreUpdate();
  gameOver();
}));

function computerTurn() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    computer = "rock"
  } else if (randomNum === 1) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
}

function determineWinner() {
  if (player === computer) {
    return "The game is a tie";
  } 
  if (player === "rock") {
    if (computer === "paper") {
      return "The computer won! Paper beats Rock";
    } 
      return "You won! Rock beats Scissors";
  } 
  if (player === "paper") {
    if (computer === "scissors") {
      return "The computer won! Scissors beats Paper";
    }
      return "You won! Paper beats Rock"
  }
  if (player === "scissors") {
    if (computer === "rock") {
      return "The computer won! Rock beats Scissors";
    } 
      return "You won! Scissors beats Paper"
  }
}

function scoreUpdate() {
  if (determineWinner() === "The game is a tie") {
    playerPoint;
    computerPoint;
  } else if (determineWinner() === "The computer won! Paper beats Rock" || determineWinner() === "The computer won! Scissors beats Paper" || determineWinner() === "The computer won! Rock beats Scissors") {
    playerPoint;
    computerPoint++;
  } else {
    playerPoint++;
    computerPoint;
  }
  playerScore.textContent = `Player Score: ${playerPoint}`;
  computerScore.textContent = `Computer Score: ${computerPoint}`;
}

function gameOver() {
  if (playerPoint === 10) {
    gameOverText.textContent = "GAME OVER: YOU WIN :))))";
  } else if (computerPoint === 10) {
    gameOverText.textContent = "GAME OVER: YOU LOSE :((("
  }
}

