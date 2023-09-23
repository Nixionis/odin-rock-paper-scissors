function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
        return 'Tie';

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'paper') ? 'Lose' : 'Win';
        case 'paper':
            return (computerSelection === 'scissors') ? 'Lose' : 'Win';
        case 'scissors':
            return (computerSelection === 'rock') ? 'Lose' : 'Win';
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Your next move?');
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result === 'Win') playerWins++;
        else if (result === 'Lose') computerWins++;

        if (result === 'Tie') {
            console.log('Tie!');
            continue;
        }

        console.log(`You ${result}! ${(result === 'Win') ? playerSelection : computerSelection} beats ${(result === 'Win') ? computerSelection : playerSelection}`);
    }
}

game();