    const text = document.getElementById ("text");
    const rockBtn = document.getElementById ("1");
    const paperBtn = document.getElementById ("2");
    const scissorsBtn = document.getElementById ("3");
    const pencilBtn = document.getElementById ("4");
    const telephoneBtn = document.getElementById ("5");
    const containerBtn = document.getElementById ("container");
    const playerScoreBoard = document.querySelector('.p-count');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn, pencilBtn, telephoneBtn];
    const computerOptions = ['1', '2', '3', '4', '5']
    const computerScoreBoard = document.querySelector('.c-count');
const result = document.querySelector('.result');

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}
    
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'scissors') {
        if (computer == 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 'paper') {
        if (computer == 'scissors') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

// Function to run when game is over
const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })


    chooseMove.innerText = 'Game Over!!'
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}


// Calling playGame function inside game
playGame();



// Calling the game function
game();