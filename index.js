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
  let humanChoice = prompt("Enter your choice: ");
  return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(hChoice, cChoice) {
  // makeing the humanchoice case -insensetive.
  hChoice = hChoice.toLowerCase();
console.log("human: ", hChoice);
console.log("computer: ", cChoice);

  if ((hChoice === "rock" && cChoice === "scissor") || (hChoice === "paper" && cChoice === "rock") || (hChoice === "scissor" && cChoice === "paper")) {
    console.log(`"You Won! ${hChoice} beats ${cChoice}".`);
    humanScore++;
  } else if (hChoice === cChoice) {
    console.log("It's a draw!");
  }
  else {
    console.log(`"You lose! ${cChoice} beats ${hChoice}".`)
    computerScore++;
  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
//logging score after calling function to see the updated score.
console.log("Human Score: ", humanScore);
console.log("Computer Score:", computerScore);


