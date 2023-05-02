
//Selectors

const buttons = document.querySelectorAll("button");
const resultMessage = document.querySelector(".result");
const playerScoreEl = document.querySelector(".score__user");
const computerScoreEl = document.querySelector(".score__computer")

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const result = roundPlay(button.id, computerPlay());
        console.log()
        // resultMessage.textContent = result;
        resultMessage.textContent = result;
        
        computerScoreEl.textContent = computerScore;
        
    });
    
});

//Computer player

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice]; //returns the number as array
    // console.log(choices);
}

//Checks winner

function roundPlay(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return "It's a tie!";
   } else if ((playerSelection === "rock" && computerSelection === "scissors") 
   || (playerSelection === "paper" && computerSelection ==="rock") 
   || (playerSelection === "scissors" && computerSelection ==="paper")) {
        playerScore++
        playerScoreEl.textContent = playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        
   }  else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        
   }
}