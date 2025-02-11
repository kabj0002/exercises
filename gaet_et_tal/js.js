// ØVELSE Gæt et tal

"use strict";
// Lav et program der generer et tilfældigt tal mellem 0 og 100.
// Brugeren skal herefter gætte tallet ved at taste det ind i et inputfelt og trykke på en knap.
document.querySelector("button").addEventListener("click", evaluateTextfield);
const randomNum = Math.round(Math.random() * 101);
console.log("Random number", randomNum);

function evaluateTextfield() {
  //console.log("click", document.querySelector("#userNumber").value);
  const userNumber = Number(document.getElementById("userNumber").value);

  // Programmet skal herefter give feedback om tallet er for højt, for lavt eller om tallet er gættet
  const responseField = document.querySelector("#response");

  if (userNumber > randomNum) {
    responseField.textContent = "Tallet du har gættet er for højt!";
  } else if (userNumber < randomNum) {
    responseField.textContent = "Tallet du har gættet er for lavt!";
  } else if (userNumber === randomNum) {
    responseField.textContent = "Tallet du har gættet er korrekt!";
    document.querySelector("#response").classList.add("input-win");
  }
}

// Når tallet bliver gættet skal der være en fejringsgrafik/animation
