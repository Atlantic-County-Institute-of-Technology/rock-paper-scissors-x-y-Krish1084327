    //event listeners and 
    
    const text = document.getElementById ("text");
    const rockBtn = document.getElementById ("rock");
    const paperBtn = document.getElementById ("paper");
    const scissorsBtn = document.getElementById ("scissors");
    const pencilBtn = document.getElementById ("pencil");
    const telephoneBtn = document.getElementById ("telephone");
    const containerBtn = document.getElementById ("container");
    const playerScoreBoard = document.querySelector('.p-count');
    const playerOptions = ["rock", "paper", "scissors", "pencil", "telephone"];
    const computerOptions = ["rock", "paper", "scissors", "pencil", "telephone"]
    const computerScoreBoard = document.querySelector('.c-count');
    const result = document.querySelector('.result');
rockBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(1, tempvar)

})

paperBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(2, tempvar)

})

scissorsBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(4, tempvar)

})

pencilBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(3, tempvar)

})

telephoneBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(5, tempvar)

})

const cpuChoice = () => {
    return Math.floor(Math.random() * 5) + 1;//TODO Choose a random number between 1 and 5
    
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}
    
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    if (player === computer) {
        result.textContent = 'Tie'
    }
    else if (player == 1) {
        if (computer == 3) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        } else {
            result.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 2) {
        if (computer == 3) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 2) {
        if (computer == 1) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 5) {
        if (computer == 3) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 5) {
        if (computer == 4) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == 2) {
        if (computer == 5) {
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

// Function to run when game is over//
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


// // Calling playGame function inside game
// playGame();



// // Calling the game function
// game();