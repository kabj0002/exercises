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

//window.addEventListener("DOMContentLoaded", functionName);

let winner;
let compChoice;

document.querySelector("button").addEventListener("click", evaluateTextfield);
const randomNum = Math.round(Math.random() * 101);
console.log("Random number", randomNum);

function evaluateTextfield() {
  //console.log("click", document.querySelector("#userNumber").value);
  const userNumber = Number(document.getElementById("userNumber").value);

  // Programmet skal herefter give feedback om tallet er for højt, for lavt eller om tallet er gættet
  const responseField = document.querySelector("#compGuess");

  if (userNumber > randomNum) {
    responseField.textContent = "Tallet du har gættet er for lavt!";
  } else if (userNumber < randomNum) {
    responseField.textContent = "Tallet du har gættet er for højt!";
  } else if (userNumber === randomNum) {
    responseField.textContent = "Tallet du har gættet er korrekt!";
    //document.querySelector("#compGuess").classList.add(".input-win");
  }
}

function klikTooLow() {}

function klikTooHigh() {}

function klikCorrectGuess() {}

function klikStartIgen() {}

function showWinnerScreen() {
  if (winner === "comp") {
    document.querySelector(".celebration").classList.remove(".hidden");
  }
}

// Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.
// Ekstra: Når tallet er gættet skal computeren skrive til siden hvor mange gæt den har brugt.

//OBS Hvordan skriver man ud på skærm??
