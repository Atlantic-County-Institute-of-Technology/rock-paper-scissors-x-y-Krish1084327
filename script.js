    //event listeners and constants//
    
    const text = document.getElementById ("text");
    const rockBtn = document.getElementById ("rock");
    const paperBtn = document.getElementById ("paper");
    const scissorsBtn = document.getElementById ("scissors");
    const pencilBtn = document.getElementById ("pencil");
    const telephoneBtn = document.getElementById ("telephone");
    const restartBtn = document.getElementById ("restart");
    const container = document.getElementById ("container");
    const playerScoreBoard = document.querySelector('.p-count');
    const playerOptions = ["rock", "paper", "scissors", "pencil", "telephone"];
    const computerOptions = ["rock", "paper", "scissors", "pencil", "telephone"]
    const computerScoreBoard = document.querySelector('.c-count');
    const result = document.querySelector('.result');
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
   
   //Rock//
    rockBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(1, tempvar)

})
//Paper//
paperBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(2, tempvar)

})
//Scissors//
scissorsBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(4, tempvar)

})

//Pencil//
pencilBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(3, tempvar)

})

//Telephone//
telephoneBtn.addEventListener("click", () => {
    let tempvar = cpuChoice()
    console.log(tempvar)
    winner(5, tempvar)

})

const cpuChoice = () => {
    return Math.floor(Math.random() * 5) + 1;//TODO Choose a random number between 1 and 5//
    
}


    
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    if (player === computer) {
        result.textContent = 'Tie'
    }
    
    // if (player == 2 && computer == 3 || 5){
    //     result.textContent = "Computer Won"
    //     computerScore++;
    //     computerScoreBoard.textContent = computerScore;
    // }
    //     else {
    //         result.textContent = 'Player Won';
    //         playerScore++;
    //         playerScoreBoard.textContent = playerScore;    
    //     }
    //What the buttons can beat and what they lose to//
       else if (player == 1 && computer == 3 || computer == 5){
            playerwinner()
        }

        else if (player == 2 && computer == 1 || computer == 5){
            playerwinner()
        }

        else if (player == 3 && computer == 2 || computer == 4){
            playerwinner()
        }

        else if (player == 4 && computer == 3 || computer == 2){
            playerwinner()
        }

        else if (player == 5 && computer == 1 || computer == 4){
            playerwinner()
        }

        else {
               computerwinner()
        }
    //Player Wins/Computer Loses//
        function playerwinner () {
             result.textContent = "Player Won"
            playerScore++;
            playerScoreBoard.textContent = playerScore
        }
    //Computer Wins/Computer Loses//
        function computerwinner () {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        }

        //function to reset the UI and all associated values
restartBtn.addEventListener("click", Reset);
}

            // if (player == 3 && computer == 1 || 4){
            //     result.textContent = "Computer Won"
            //     computerScore++;
            //     computerScoreBoard.textContent = computerScore;
            // }
            //     else {
            //     result.textContent = 'Player Won';
            //     playerScore++;
            //     playerScoreBoard.textContent = playerScore;    
            //     }

            //     if (player == 4 && computer == 1 || 5){
            //         result.textContent = "Computer Won"
            //         computerScore++;
            //         computerScoreBoard.textContent = computerScore;
            //     }
            //         else {
            //             result.textContent = 'Player Won';
            //             playerScore++;
            //             playerScoreBoard.textContent = playerScore;    
            //         }

            //         if (player == 2 && computer == 3 || 5){
            //             result.textContent = "Computer Won"
            //             computerScore++;
            //             computerScoreBoard.textContent = computerScore;
            //         }
            //             else {
            //                 result.textContent = 'Player Won';
            //                 playerScore++;
            //                 playerScoreBoard.textContent = playerScore;    
            //             }
            

// // Calling playGame function inside game
// playGame();



// // Calling the game function
// game();