    const text = document.getElementById ("text");
    const rock = document.getElementById ("1");
    const paper = document.getElementById ("2");
    const scissors = document.getElementById ("3");
    const pencil = document.getElementById ("4");
    const telephone = document.getElementById ("5");
    const container = document.getElementById ("container");
    
    const btn_list = document.querySelectorAll ("button");
    console.log(btn_list);
    
    function winner(player, computer) {

      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
          result.textContent = 'Tie'
      }
      else if (player.localeCompare('1')) {
          if (computer == '1' || computer == '5' || computer == '4') {
              result.textContent = 'Computer Won';
              computerScore++;
              computerScoreBoard.textContent = computerScore;

          } else {
              result.textContent = 'Player Won'
              playerScore++;
              playerScoreBoard.textContent = playerScore;
          }
      }
    }