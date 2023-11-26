
$(document).ready(function() {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;
  

    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
      ];
  
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
          return true;
        }
      }
  
      return false;
    }
  
  
    function checkTie() {
      return board.every(cell => cell !== "");
    }
  

    function resetGame() {
      board.fill("");
      currentPlayer = "X";
      gameActive = true;
      updateStatus();
      $(".cell").text("").css("pointer-events", "auto");
    }
  

    function updateStatus() {
      $("#status").text(gameActive ? `Jogador ${currentPlayer}, é sua vez.` : "Jogo encerrado.");
    }
  
    $(".cell").click(function() {
      const cellIndex = $(this).index();
  
      if (board[cellIndex] === "" && gameActive) {
        board[cellIndex] = currentPlayer;
        $(this).text(currentPlayer);
        $(this).css("pointer-events", "none");
  
        if (checkWinner()) {
          $("#status").text(`Jogador ${currentPlayer} venceu!`);
          gameActive = false;
        } else if (checkTie()) {
          $("#status").text("O jogo empatou!");
          gameActive = false;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          updateStatus();
        }
      }
    });
  

    $("#btnRestart").click(function() {
      resetGame();
    });
  

    updateStatus();
  });
  