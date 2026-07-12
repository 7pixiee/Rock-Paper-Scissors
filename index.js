function getComputerChoice() {
  let compChoice = "";
  //create a random no. from 1 to 3.
  const num1to3 = Math.floor(Math.random() * 3) + 1;
  if (num1to3 === 1) {
    compChoice = "rock";
  } else if (num1to3 === 2) {
    compChoice = "paper";
  } else if (num1to3 === 3) {
    compChoice = "scissor";
  }
  return compChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: Rock, Paper or Scissor");
  return humanChoice;
}

function playGame() {
  alert("Let's play a game!");
  let humanScore = 0;
  let computerScore = 0;

  function playRound(hChoice, cChoice) {
    // Make the human choice case-insensetive.
    hChoice = hChoice.toLowerCase();

    if ((hChoice === "rock" && cChoice === "scissor") || (hChoice === "paper" && cChoice === "rock") || (hChoice === "scissor" && cChoice === "paper")) {

      alert(`You: ${hChoice}  |  Computer: ${cChoice}\nYou won! ${hChoice} beats ${cChoice}.`);
      humanScore++;
    } else if (hChoice === cChoice) {
      alert(`You: ${hChoice}  |  Computer: ${cChoice}\nIt's a draw!`);
    }
    else if ((cChoice === "rock" && hChoice === "scissor") || (cChoice === "paper" && hChoice === "rock") || (cChoice === "scissor" && hChoice === "paper")) {
      alert(`You: ${hChoice}  |  Computer: ${cChoice}\nYou lose! ${cChoice} beats ${hChoice}.`);
      computerScore++;
    }

  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  //logging score after calling function to see the updated score.

  if (humanScore > computerScore) {
    alert(`Your Score: ${humanScore}  |  Computer Score: ${computerScore}\nYou won the game.`);
  } else if (humanScore < computerScore) {
    alert(`Your Score: ${humanScore}  |  Computer Score: ${computerScore}\nComputer won the game.`);
  } else {
    alert(`Your Score: ${humanScore}  |  Computer Score: ${computerScore}\nIt's a tie.`);

  }

}
playGame()