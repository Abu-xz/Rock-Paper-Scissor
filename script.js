const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerDisplay");
const computerdisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" )? "YOU WIN !" : "YOU LOSE!";
                break;
            case "paper":
                result =( computerChoice === "rock" )? "YOU WIN !" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper" )? "YOU WIN !" : "YOU LOSE!";
                break;
        }
    }

    playerdisplay.textContent = ` PLAYER : ${playerChoice}`;
    computerdisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("win", "lose", "tie");

    switch (result) {
        case "YOU WIN !":
            resultDisplay.classList.add("win");
            playerScore++;
            playerScoreDisplay.textContent =playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("lose");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("tie");
    }
}
