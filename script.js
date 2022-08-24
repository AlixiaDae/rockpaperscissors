
/*function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)]
    return result;
} */

let result = document.getElementById('result');
let buttons = document.querySelectorAll('button');


buttons.forEach((playerSelection) => {
  playerSelection.addEventListener('click', () => {

    let playerChoice = playerSelection.textContent;

    console.log(playerChoice)

    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    
    let computerSelection = [rock, paper, scissors];
    let computerChoice = computerSelection[Math.floor(Math.random()*computerSelection.length)].textContent
    
    console.log(computerChoice);
    
      if (playerChoice === computerChoice) {
      result.textContent = "Draw";
    }
      else if (playerChoice == "Rock" && computerChoice == "Paper") {
      result.textContent = "Lose";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      result.textContent = "Win";

    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
      result.textContent = "Lose";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
      result.textContent = "Win";

    }  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
      result.textContent = "Lose";
    }  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      result.textContent = "Win";
    }

    trackScore();
    gameWinner();
    
  })
})

let playerScore = 0;
let computerScore = 0;
let scores = ["Player","Computer"];

function trackScore() {
  if (result.innerHTML == "Win") {
    playerScore++;
    document.getElementById('playerScore').innerHTML = `${playerScore}`;
  } else if (result.innerHTML == "Lose") {
    computerScore++;
    document.getElementById('computerScore').innerHTML = `${computerScore}`;
  }
}

function gameWinner() {
  if(playerScore == 5){
    result.innerHTML = "Victory!";
  } else if(computerScore == 5) {
    result.innerHTML = "Defeat!";
  }
}

