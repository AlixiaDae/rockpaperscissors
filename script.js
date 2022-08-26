
/*function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)]
    return result;
} */

let result = document.getElementById('result');
let buttons = document.querySelectorAll('#buttons button');
let point;
let img = document.getElementById('image1');

let btnImg = document

let newgame = document.querySelector('#newgame');

newgame.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerscore').textContent = '';
  document.getElementById('computerscore').textContent = '';
  result.textContent = '';
  img.style.display = "none";
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
      point = 0;
      result.textContent = "Draw";
      console.log(point);
    }
      else if (playerChoice == "Rock" && computerChoice == "Paper") {
      point = "CP";
      result.textContent = "Lose";
      console.log(point);
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      point = "P"
      result.textContent = "Win";
      console.log(point);

    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
      point = "CP";
      result.textContent = "Lose";
      console.log(point);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
      point = "P";
      result.textContent = "Win";
      console.log(point);

    }  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
      point = "CP";
      result.textContent = "Lose";
      console.log(point);
    }  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      point = "CP";
      result.textContent = "Win";
      console.log(point);
    } 
    
    trackScore();
    gameWinner();
  })
})

let playerScore = 0;
let computerScore = 0;

function trackScore() {
  if (point == "P") {
    playerScore++;
    document.getElementById('playerscore').innerHTML = `${playerScore}`;
    return playerScore;
  } else if (point == "CP") {
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

buttons.forEach((images) => {
  images.addEventListener('click', () => {

      if (button.textContent == "Rock") {
      img.src = "./images/Rock.png";
      img.style.display = "block";
    } else if (button.textContent == "Paper") {
      img.src = "./images/Paper.png";
      img.style.display = "block";
    } else if (button.textContent == "Scissors") {
      img.src = "./images/Scissors.png";
      img.style.display = "block";
    }
  })
})