
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)]
    return result;
}


let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let choices = [rock,paper,scissors];
    let computerSelection = getComputerChoice();

 

      if(button == rock && computerSelection == "Rock") {
      let result = "Draw";
      console.log(result);
      
    } else if(button == rock && computerSelection == "Paper") {
      let result = "Lose";
      console.log(result);
     
      
      
    } else if(button == rock && computerSelection == "Scissors") {
      let result = "Win";
      console.log(result);
      
     
      
     
    } 
        
      else if(button == paper && computerSelection == "Paper") {
      let result = "Draw";
      console.log(result);
      
        
    } else if(button == paper && computerSelection == "Scissors") {
      let result = "Lose";
      console.log(result);
     
     
      
    } else if(button == paper && computerSelection == "Rock") {
      let result = "Win";
      console.log(result);
     
      
     
        
    } 

      else if(button == scissors && computerSelection == "Scissors") {
      let result = "Draw";
      console.log(result);
    
       
    } else if(button == scissors && computerSelection == "Rock") {
      let result = "Lose";
      console.log(result);
      
      
      
     
    } else if(button == scissors && computerSelection == "Paper") {
      let result = "Win";
      console.log(result);
      
      
      
      
    }
  }
    

  )
})