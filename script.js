
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

const result = document.querySelector('.result');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const score = document.querySelector('.score');

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.innerHTML;
    let computerSelection = getComputerChoice();
   
      if(playerScore == 5) {
      score.innerHTML = 'Victory!';
      
    } else if(computerScore == 5) {
      score.innerHTML = 'Defeat!'
      
    } else if(playerSelection == computerSelection) {
      result.innerHTML = 'It\'s a draw!';
    } 
    
      else if((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
      result.innerHTML = "Player wins!";
      
      playerScore++;
    } else if((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 
    
      else if((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
      result.innerHTML = "Player wins!";
      
      playerScore++;
    } else if((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 

    else if((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
      result.innerHTML = "Player wins!";
      
      playerScore++;
    } else if((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 
    
    
  })

})


