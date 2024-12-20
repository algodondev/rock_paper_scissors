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




