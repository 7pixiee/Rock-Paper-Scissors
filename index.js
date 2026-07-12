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

function playGame(){
  
let humanScore = 0;
let computerScore = 0;  

function playRound(hChoice, cChoice) {
  // makeing the humanchoice case -insensetive.
  hChoice = hChoice.toLowerCase();
console.log("You: ", hChoice);
console.log("Computer: ", cChoice);

  if ((hChoice === "rock" && cChoice === "scissor") || (hChoice === "paper" && cChoice === "rock") || (hChoice === "scissor" && cChoice === "paper")) {
    console.log(`"You Won! ${hChoice} beats ${cChoice}".`);
    humanScore++;
  } else if (hChoice === cChoice) {
    console.log("It's a draw!");
  }
  else if((cChoice === "rock" && hChoice === "scissor") || (cChoice === "paper" && hChoice === "rock") || (cChoice === "scissor" && hChoice === "paper")){
    console.log(`"You lose! ${cChoice} beats ${hChoice}".`)
    computerScore++;
  }

}

for(let i = 0; i <5; i++){
  const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

//logging score after calling function to see the updated score.
console.log("Your Score: ", humanScore);
console.log("Computer Score:", computerScore);

if(humanScore > computerScore){
  console.log("You won the game.")
}else if(humanScore < computerScore){
  console.log("Computer won the game.")
} else{
  console.log("It's a tie.")
}

}
playGame()