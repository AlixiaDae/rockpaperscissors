
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

//Put variables for playerSelection and computerSelection inside playRound() so that getComputerChoice() will always generate a new value

function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors", "").charAt(0).toUpperCase();
    let computerSelection = getComputerChoice();
    if (computerSelection == "Paper") { 
        console.log("Paper vs. Paper")
        return ("It's a Draw!");
    } else if (computerSelection == "Rock") {
        console.log("Paper vs. Rock")
        return ("You Win!")
    } else if (computerSelection == "Scissors") {
        console.log("Paper vs. Scissors")
        return ("You Lose!")
    } 
}

//function game() {
//    for (let i = 0; i < 5; i++) {
//        console.log(playRound());
//    }
//}

game();


