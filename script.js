
/*function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)]
    return result;
} */

let result = document.getElementById('result');
let buttons = document.querySelectorAll('#buttons button');


let newgame = document.querySelector('#newgame');

newgame.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerscore').textContent = '';
  document.getElementById('computerscore').textContent = '';
  result.textContent = '';
  }
)

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
    gameWinner();
    trackScore();
  })
})

let playerScore = 0;
let computerScore = 0;

function trackScore() {
  if (result.innerHTML == "Win") {
    playerScore++;
    document.getElementById('playerscore').innerHTML = `${playerScore}`;
    return playerScore;
  } else if (result.innerHTML == "Lose") {
    computerScore++;
    document.getElementById('computerscore').innerHTML = `${computerScore}`;
    return computerScore;
  }
}

function gameWinner() {
  if(playerScore == 5){
    result.textContent = "Victory! Begin new game!";
  } else if(computerScore == 5) {

    result.textContent = "Defeat! Begin new game!";
  
  } 
}


