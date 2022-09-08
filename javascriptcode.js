function getComputerChoice() {
    let thing = Math.floor((Math.random() * 100) % 3);
        console.log(thing);
        if (thing == 0) {return "rock";}
        if (thing == 1) {return "scissors";}
        if (thing == 2) {return "paper";}

}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection) {
        console.log("You tied");
        return 0;
    }
        else if((playerSelection == "rock") && (computerSelection == "scissors")) {
            console.log("You won");
            return 1;
        }
        else if((playerSelection == "rock") && (computerSelection == "paper")) {
            console.log("You lost");
            return 0;
        }
        else if((playerSelection == "paper") && (computerSelection == "rock")) {
            console.log("You won");
            return 1;
        }
        else if((playerSelection == "paper") && (computerSelection == "scissors")) {
            console.log("You lost");
            return 0;
        }
        else if((playerSelection == "scissors") && (computerSelection == "rock")) {
            console.log("You lost");
            return  0;
        }
        else if((playerSelection == "scissors") && (computerSelection == "paper")) {
            console.log("You won");
            return 1;
        }

        return;
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
    console.log("The game will now play\n");
    let score = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your choice>");
        let choice = getComputerChoice();
        console.log("Choice = " + choice);
        let result = playRound(playerSelection, choice);
        if(result == 1) {
            score++;
        }
    }
    console.log("Your score after 5 games is " + score);
    return;
    
}
console.log(game());