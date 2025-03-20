    const text = document.getElementById ("text");
    const rock = document.getElementById ("rock");
    const container = document.getElementById ("container");
    
    const btn_list = document.querySelectorAll ("button");
    console.log(btn_list);

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors', 'pencil', 'telephone'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
      
      function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
          return "It's a tie!";
        } else if (
          (userChoice === 'rock' && computerChoice === 'scissors') ||
          (userChoice === 'paper' && computerChoice === 'rock') ||
          (userChoice === 'scissors' && computerChoice === 'paper')||
          (userChoice === 'telephone' && computerChoice === 'paper')||
          (userChoice === 'rock' && computerChoice === 'pencil')
        ) {
          return 'You win!';
        } else {
          return 'Computer wins!';
        }
      }
      
      function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
      
        console.log(`You chose ${userChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(result);
      }

    }
    function winner(player, computer) {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        result.textContent = 'Tie';
    }
    else if (player == 'rock') {
        if (computer == 'paper') {
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