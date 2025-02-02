//Min løsning (Der er hentet lidt hjælp og inspiration fra ChatGPT for at komme i mål)

// Gæt et tal ombyttet
//Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:
// Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.
// Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden.

// Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.
// Der kan også være en knap til at starte det hele
// Computeren skal gætte tallet hurtigst muligt.
// Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.
// For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.
// Hvordan gætter man tallet hurtigst og mest rationelt?
// Her er et link til hvordan opgaven kunne se ud ustylet, jeres skal være stylet og med animationer, giv den gas med UI/UX.
// Ekstra: Når tallet er gættet skal computeren skrive til siden hvor mange gæt den har brugt.

// Super ekstra: Spørg mig

// Og husk:
// Det skal virke
// Det skal se godt ud
// Det skal give relevant feedback

let min, max, guess, attempts;

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("too_low").addEventListener("click", tooLow);
document.getElementById("too_high").addEventListener("click", tooHigh);
document.getElementById("correct").addEventListener("click", correctGuess);

function startGame() {
  min = 0;
  max = 100;
  attempts = 0;
  document.getElementById("spil").classList.remove("hidden");
  document.getElementById("start").disabled = true;
  guessNumber();
}

function guessNumber() {
  guess = Math.floor((min + max) / 2);
  document.getElementById("comp_guess").textContent = guess;
  attempts++;
  toggleButtons(true);
}

function tooLow() {
  min = guess + 1;
  guessNumber();
}

function tooHigh() {
  max = guess - 1;
  guessNumber();
}

function correctGuess() {
  document.getElementById(
    "comp_attempts"
  ).textContent = `Computeren brugte ${attempts} forsøg!`;
  toggleButtons(false);
  document.getElementById("start").disabled = false;
}

function toggleButtons(state) {
  document.getElementById("too_low").disabled = !state;
  document.getElementById("too_high").disabled = !state;
  document.getElementById("correct").disabled = !state;
}

//Første udkast til forsøg på løsning:
//Opretter konstanter
// const computerGuess = document.querySelector("#compGuess");
// const tooLow = document.querySelector(".tooLow");
// const tooHigh = document.querySelector(".tooHigh");
// const correct = document.querySelector(".correct");
// const startAgain = document.querySelector(".start_again");

// //Udskriver??
// tooLow.addEventListener("click", showTooLow);

// tooHigh.addEventListener("click", showTooHigh);

// correct.addEventListener("click", showCorrect);

// startAgain.addEventListener("click", showStartAgain);

// //Opretter functions til forskellige buttons
// function showTooLow() {
//   let showResponse = parseFloat(computerGuess.value);
//   if (isNaN(showResponse)) {
//     tooLow.textContent = "Du gættede for lavt...";
//     return;
//   }
// }

// function showTooHigh() {}

// function showCorrect() {}

// function showStartAgain() {}
