"use strict";
//Momsberegner
// Lav en funktion der modtager to argumenter, beloeb og moms.
// Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

//Her kan man ændre beløb og evt. momsprocent
// beregnProcent(100, 25);

// function beregnProcent(tal, procent) {
//   console.log((tal / 100) * procent);
// }

//OBS Jeg har misforstået opgaven.
//Note to self: Elias har lavet en vildt fed løsning. Nedenstående løsning er lavet med inspiration fra hans løsning.

const inputElement = document.querySelector("#input");
const submitButton = document.querySelector(".udregn");
const priceWithTax = document.querySelector("#beloeb_moms");
const mainPrice = document.querySelector("#beloeb");
const moms = 25; //moms 25% er konstant

submitButton.addEventListener("click", showTotalPrice);

function ShowPrice(mainPrice, moms = 25) {
  console.log(`prisen inkl. moms: ${(mainPrice / 100) * moms + mainPrice} kr`);
}

ShowPrice(100);

function showTotalPrice() {
  let basePrice = parseFloat(inputElement.value);

  if (isNaN(basePrice)) {
    mainPrice.textContent = "skriv et beløb";
    priceWithTax.textContent = "";
    return;
  }

  let totalPrice = (basePrice / 100) * moms + basePrice;

  mainPrice.textContent = basePrice.toFixed(2) + "kr";
  priceWithTax.textContent = totalPrice.toFixed(2) + "kr";
}
