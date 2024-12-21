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
            if (computerChoice == "rock"){
                console.log("Tie!");
            } else if (computerChoice == "scissors"){
                console.log("You win!");
                humanScore++
            } else if (computerChoice == "paper"){
                console.log("You lose!");
                computerScore++
            }
            break;
        case "scissors":
            if (computerChoice == "scissors"){
                console.log("Tie!");
            } else if (computerChoice == "paper"){
                console.log("You win!");
                humanScore++
            } else if (computerChoice == "rock"){
                console.log("You lose!");
                computerScore++
            }
            break;
        case "paper":
            if (computerChoice == "paper"){
                console.log("Tie!");
            } else if (computerChoice == "rock"){
                console.log("You win!");
                humanScore++
            } else if (computerChoice == "scissors"){
                console.log("You lose!");
                computerScore++
            }
            break;
    }
}


let humanScore = 0
let computerScore = 0

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice)
console.log(`human: ${humanScore}, computer: ${computerScore}`);