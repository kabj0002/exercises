"use strict";
import { getRandomNumber } from "../utils/utils.js";
//Global variables
let userChoice;
let compChoice;
let winner;

document.querySelector(".rock").addEventListener("click", klikRock);
document.querySelector(".paper").addEventListener("click", klikPaper);
document.querySelector(".scissors").addEventListener("click", klikScissors);

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

//Click rock
function klikRock() {
  //console.log("rock");
  userChoice = "rock";
  computerChooses();
}
//Click paper
function klikPaper() {
  //console.log("paper");
  userChoice = "paper";
  computerChooses();
}
//Click scissors
function klikScissors() {
  //console.log("scissors");
  userChoice = "scissors";
  computerChooses();
}

//Computer chooses randomly
function computerChooses() {
  //console.log("computer chooses, user choise:", userChoice);
  cleanUpRPCClasses();
  //const randomNumber = Math.floor(Math.random() * 3);
  getRandomNumber(); //Henter fra utils fil

  if (randomNumber === 0) {
    compChoice = "rock";
  } else if (randomNumber === 1) {
    compChoice = "paper";
  } else if (randomNumber === 2) {
    compChoice = "scissors";
  }

  console.log("user choice", userChoice);
  console.log("comp choice", compChoice);

  determinWinner();
}

//Who wins (big if statements)
function determinWinner() {
  if (userChoice === compChoice) {
    winner = "none";
  } else if (userChoice === "rock") {
    if (compChoice === "paper") {
      winner = "comp";
    } else if (compChoice === "scissors") {
      winner = "user";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      winner = "user";
    } else if (compChoice === "scissors") {
      winner = "comp";
    }
  } else {
    if (compChoice === "rock") {
      winner = "comp";
    } else if (compChoice === "paper") {
      winner = "user";
    }
  }

  console.log("the winner is:", winner);

  runHandAnimations();
}

//the two hand animations runs
function runHandAnimations() {
  player1.addEventListener("animationend", handAnimationEnd);
  player2.addEventListener("animationend", handAnimationEnd);

  player1.classList.add("shake");
  player2.classList.add("shake");
}

//correct hand signs are shown
function handAnimationEnd() {
  //console.log("hand ani end");
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  if (userChoice === "rock") {
    player1.classList.add("rock");
  } else if (userChoice === "paper") {
    player1.classList.add("paper");
  } else {
    player1.classList.add("scissors");
  }
  if (compChoice === "rock") {
    player2.classList.add("rock");
  } else if (compChoice === "paper") {
    player2.classList.add("paper");
  } else {
    player2.classList.add("scissors");
  }

  showWinnerScreen();
}

//correct winner OBS VIRKER IKKE!
function showWinnerScreen() {
  if (winner === "none") {
    document.querySelector("#draw").classList.remove("hidden");
  } else if (winner === "user") {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}

function cleanUpRPCClasses() {
  player1.classList.remove("paper", "scissors");
  player2.classList.remove("paper", "scissors");
}

//OBS jeg manlger at fjerne showWinnerScreen så det ikke står 2 ganger...
