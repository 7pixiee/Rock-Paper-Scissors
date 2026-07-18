const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".Computer");

const result = document.querySelector("#result");
const finalResult = document.querySelector('.final-result')


  let humanScore = 0;
  let compScore = 0;

function getComputerChoice() {
 const random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) return "rock";
  if (random === 2) return "paper";
  return "scissors";
}

  function playRound(hChoice, cChoice) {
    if ((hChoice === "rock" && cChoice === "scissors") ||
     (hChoice === "paper" && cChoice === "rock") ||
      (hChoice === "scissors" && cChoice === "paper")) {
      humanScore++;
      result.textContent = `You win! ${hChoice} beats ${cChoice}.`;
      playerScore.textContent = `Player: ${humanScore}`;
    } else if (hChoice === cChoice) {
      result.textContent = `It's a draw!`;
    }
    else{
      compScore++;
       result.textContent = `You lose! ${cChoice} beats ${hChoice}.`;
      computerScore.textContent = `Computer: ${compScore}`;
    }

    if (humanScore === 5) {
    finalResult.textContent = "🎉 You won the game!";
    disableButtons();
  } else if (compScore === 5) {
    finalResult.textContent = "💻 Computer won the game!";
    disableButtons();
  }
  }

  function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  rockBtn.style.cursor = "not-allowed";
    paperBtn.style.cursor = "not-allowed";
    scissorsBtn.style.cursor = "not-allowed";
}
  
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
