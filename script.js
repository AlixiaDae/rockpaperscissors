let player1 = document.getElementById("player1");
let playerSelection = document.getElementById("player1");
//needed to make playerSelection into player1 to run it through the btn click function
//now hopefully playerSelection = the result of btn.onclick function

let btn = document.getElementById("playbtn");


//no need for regular expression. just use else "please pick rock, paper, or scissors"


let computerChoice = function() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let choices = ["Rock","Paper","Scissors"];

//math.floor + math.random chooses from an array. make sure to multiply by the variable.length so that it can see the number of things items in the array and choose one

//just need it so that my function reads what's in input at the time of button press







//build a rock paper scissors game
//make input for player's choice between r/p/s
//computer randomly chooses from rps
//make function so that code knows which is the winner or loser from player and computer choice
