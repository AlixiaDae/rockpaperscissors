let playerSelection = document.getElementById("player1");

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//math.floor + math.random chooses from an array. make sure to multiply by the variable.length so that it can see the number of things items in the array and choose one

let choices = ["Rock","Paper","Scissors"];



//build a rock paper scissors game
//prompt for player's choice between rps
//computer randomly chooses from rps
//make function so that code knows which is the winner or loser from player and computer choice
