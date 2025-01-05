function getComputerChoice(){
    const number = Math.floor(Math.random() * 3) + 1;
    let choice

    if (number == 1){
        choice = 'rock'
    } else if (number == 2){
        choice = 'paper'
    } else if (number == 3){
        choice = 'scissors'
    }

    return choice;
}

function getHumanChoice(){
    let choice = prompt("Insert your choice: ").toLowerCase()

    return choice
}

function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "rock":
            if (computerChoice == "scissors"){

                humanScore++
            } else if (computerChoice == "paper"){
                console.log("You lose!");
                computerScore++
            }
            break;
        case "scissors":
            if (computerChoice == "paper"){

                humanScore++
            } else if (computerChoice == "rock"){

                computerScore++
            }
            break;
        case "paper":
            if (computerChoice == "rock"){

                humanScore++
            } else if (computerChoice == "scissors"){

                computerScore++
            }
            break;
        
    }
    
}

function playGame(choice){
    let computerChoice = getComputerChoice();
    let humanChoice = choice

    playRound(humanChoice, computerChoice)
    
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if(humanScore == 5 || computerScore == 5){
        if (humanScore > computerScore){
            winnerDisplayMessage.textContent = "The winner is the Human!"
        } else if (computerScore > humanScore){
            winnerDisplayMessage.textContent = "The winner is the Computer!"
        }
        containerDiv.appendChild(resetGameButton)
    }

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

}

const containerDiv = document.querySelector(".container")
const playerChoices = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score")
const winnerDisplayMessage = document.querySelector("#winner-message")
const resetGameButton = document.createElement("button");
resetGameButton.textContent = "Play again";

resetGameButton.addEventListener("click", (e) => {
    resetGame();
    console.log(e.target.remove());
})

let humanScore = 0
let computerScore = 0

playerScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

for (let button of playerChoices){
    button.addEventListener("click", () =>{
        const choice = String(button.id)
        playGame(choice)
    })
}



// playGame(5)