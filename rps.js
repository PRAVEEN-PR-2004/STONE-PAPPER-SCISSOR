let choiceButtons = document.querySelectorAll(".clickbtn");
let playerChoice = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
let choiceComputer = ["SCISSOR", "ROCK", "PAPER"];
let myturn;
let comturn;

choiceButtons.forEach(btn => btn.addEventListener("click", () => {
    computerturn();
    myturn = btn.textContent;
    playerChoice.innerHTML = "PLAYER: " + myturn;
    computer.innerHTML = "COMPUTER: " + comturn;
    result.innerHTML = wonlose();
}));

function computerturn() {
    comturn = choiceComputer[Math.floor(Math.random() * 3)];
}

function wonlose() {
    if (myturn === comturn) {
        return "DRAW";
    } else if (comturn === 'ROCK') {
        return (myturn === 'SCISSOR') ? "YOU LOSE!" : "YOU WIN!";
    } else if (comturn === 'SCISSOR') {
        return (myturn === 'PAPER') ? "YOU LOSE!" : "YOU WIN!";
    } else if (comturn === 'PAPER') {
        return (myturn === 'ROCK') ? "YOU LOSE!" : "YOU WIN!";
    }
}