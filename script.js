
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)]
    if(result === "Scissors") { 
      document.getElementById('compscissors').style.display = "block";
    } else if(result === "Rock") { 
      document.getElementById('comprock').style.display = "block";
    } else if(result === "Paper") {
      document.getElementById('comppaper').style.display = "block";
    }
      return result;
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
      console.log('Paper');
      result.innerHTML = "Player wins!";
      playerScore++;
    } else if((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
      console.log('Scissors');
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 
    
      else if((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
      console.log('Rock');
      result.innerHTML = "Player wins!";
      playerScore++;
    } else if((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
      console.log('Scissors');
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 

    else if((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
      console.log('Paper');
      result.innerHTML = "Player wins!";
      playerScore++;
    } else if((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
      console.log('Rock');
      result.innerHTML = "Computer wins!";
      computerScore++;
    } 
    
    
  })

})


//show image of computer's corresponding choice
//when another button is clicked, replace the image to reflect computer's new choice
