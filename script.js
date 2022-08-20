
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

const result = document.querySelector('.result');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.innerHTML;
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection) {
      result.innerHTML = 'It\'s a draw!';
    } 
    
      else if((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
      result.innerHTML = "Player wins!";
    } else if((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
      result.innerHTML = "Computer wins!";
    } 
    
      else if((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
      result.innerHTML = "Player wins!";
    } else if((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
      result.innerHTML = "Computer wins!";
    } 

    else if((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
      result.innerHTML = "Player wins!";
    } else if((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
      result.innerHTML = "Computer wins!";
    } 
    
    else {
      result.innerHTML = "TBA";
  }})

})


