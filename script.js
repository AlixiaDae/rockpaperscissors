let result = document.getElementById('result');
let buttons = document.querySelectorAll('#buttons button');
let point;
let playerImg = document.getElementById('image1');
let compImg = document.getElementById('image2');
let newgame = document.querySelector('#newgame');

newgame.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerscore').textContent = '';
  document.getElementById('computerscore').textContent = '';
  result.textContent = '';
  playerImg.style.display = "none";
  compImg.style.display = "none";
  }
)

buttons.forEach((playerSelection) => {
  playerSelection.addEventListener('click', () => {
    
    let playerChoice = playerSelection.textContent;

    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    
    let computerSelection = [rock, paper, scissors];
    let computerChoice = computerSelection[Math.floor(Math.random()*computerSelection.length)].textContent
    
      if (playerChoice === computerChoice) {
      point = 0;
      result.textContent = "Draw";
      compImg.src = playerImg.src;
      compImg.style.display = "block";
    }
      else if (playerChoice == "Rock" && computerChoice == "Paper") {
      point = "CP";
      result.textContent = "Lose";
      compImg.src = "./images/Paper.png";
      compImg.style.display = "block";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
      point = "P"
      result.textContent = "Win";
      compImg.src = "./images/Scissors.png";
      compImg.style.display = "block";

    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
      point = "CP";
      result.textContent = "Lose";
      compImg.src = "./images/Scissors.png";
      compImg.style.display = "block";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
      point = "P";
      result.textContent = "Win";
      compImg.src = "./images/Rock.png";
      compImg.style.display = "block";

    }  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
      point = "CP";
      result.textContent = "Lose";
      compImg.src = "./images/Rock.png";
      compImg.style.display = "block";
    }  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      point = "CP";
      result.textContent = "Win";
      compImg.src = "./images/Paper.png";
      compImg.style.display = "block";
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

      if (images.textContent == "Rock") {
      playerImg.src = "./images/Rock.png";
      playerImg.style.display = "block";
    } else if (images.textContent == "Paper") {
      playerImg.src = "./images/Paper.png";
      playerImg.style.display = "block";
    } else if (images.textContent == "Scissors") {
      playerImg.src = "./images/Scissors.png";
      playerImg.style.display = "block";
    }
  })
})

