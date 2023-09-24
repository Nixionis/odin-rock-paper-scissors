let playerWins = 0;
let computerWins = 0;

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

function game(playerSelection) {

    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result === 'Win') playerWins++;
    else if (result === 'Lose') computerWins++;

    if (result === 'Tie') {
        console.log('Tie!');
    }

    //console.log(`You ${result}! ${(result === 'Win') ? playerSelection : computerSelection} beats ${(result === 'Win') ? computerSelection : playerSelection}`);
    scoreText.textContent = `You ${playerWins} : ${computerWins} Computer`;
    resultText.textContent = (result === 'Tie') ? `${result}!` : `You ${result}!`;

    if (playerWins >= 5 || computerWins >= 5)
        winnerText.textContent = (playerWins >= 5) ? `Player won!` : `Computer won!`;
}

const rockButton = document.querySelector('#btn-rock');
const paperButton = document.querySelector('#btn-paper');
const scissorsButton = document.querySelector('#btn-scissors');

const scoreText = document.querySelector('#score-text');
const resultText = document.querySelector('#result-text');
const winnerText = document.querySelector('#winner-text');

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));