let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let p_s = playerSelection.toLowerCase();
    let c_s = computerSelection.toLowerCase();

    let result = "";

    if(p_s == "rock" && c_s == "rock") { result = "Tied, Both are same"; }
    if(p_s == "rock" && c_s == "papper") { computerScore++; result = "You Lose! Papper covers Rock"; }
    if(p_s == "rock" && c_s == "scissors") { playerScore++; result = "Computer Lose! Rock beats Scissors"; }

    if(p_s == "papper" && c_s == "papper") { result = "Tied, Both are same"; }
    if(p_s == "papper" && c_s == "scissors") { computerScore++; result = "You Lose! Scissors cuts Papper"; }
    if(p_s == "papper" && c_s == "rock") { playerScore++; result = "Computer Lose! Papper covers Rock"; }

    if(p_s == "scissors" && c_s == "scissors") { result = "Tied, Both are same"; }
    if(p_s == "scissors" && c_s == "rock") { computerScore++; result = "You Lose! Rock beats Scissors"; }
    if(p_s == "scissors" && c_s == "papper") { playerScore++; result = "Computer Lose! Scissors cuts Papper"; }

    return result;
}

function computerPlay() {
    let compVal = ["Rock", "Papper", "Scissors"];
    return compVal[Math.round(Math.random() * 2)];
}


function game() {

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

    for(let i=0; i<5; i++) {
        let playerSelection = prompt("What\'s your choice: Rock, Papper, Scissors");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
}

game();