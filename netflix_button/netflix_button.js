// Netflix-button
// Lav en html-side med en knap på

// Knappen skal have en animation der udfylder den med en farve fra venstre til
// højre

// Animationen skal starte når siden loader

// Hvis brugeren intet foretager sig (ingen cursor bevægelser mm) kører animationen
// i knappen til enden og en interaktion skal ske med siden, fx at den ændrer
// baggrundsfarve og knappen forsvinder eller at der navigeres til en ny side.
// Dette skal selvfølgelig også ske hvis brugeren klikker på knappen.

// Hvis brugeren bevæger cursoren (musen), skal animationen i knappen køre til enden
// men der skal intet ske, med mindre man klikker på knappen

// window.addEventListener("load", () => {
//   document.querySelector(".button").classList.add("loaded");
// });

let userInactive = true; // Hvis brugeren er inaktiv
const button = document.querySelector(".button");

// Starter animation ved page load
setTimeout(() => {
  button.classList.add("loaded");

  // Hvis brugeren er inaktiv under animationen skifter baggrund og knap skjules
  setTimeout(() => {
    if (userInactive) {
      document.body.style.backgroundColor = "#007BFF";
      button.classList.add("hidden");
    }
  }, 10000); // Samme tid som animationen i css
}, 100);

// Hvis brugeren bevæger musen = aktiv (ingenting ændres)
document.addEventListener("mousemove", () => {
  userInactive = false;
});

// Hvis brugeren klikker, skifter baggrund og knap skjules
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "#007bff";
  button.classList.add("hidden");
});
