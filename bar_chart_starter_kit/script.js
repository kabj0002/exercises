"use strict";

//Forestil dig en webside der viser det antal kunder der er i en kø lige nu
//Den opdateres hvert sekund og holder en historik over de sidste 20 værdier
//som et “animeret” søjlediagram hvor det nuværende antal kunder er vist i den
//søjle der er længst til højre og så “scroller” værdien/søjlen til venstre.

//Da du ikke har adgang til rigtig data må du simulere det ved at lave en funktion
//der kan generere et random nummer mellem 0 og 100 der så vil være antallet af kunder
//og bestemme din søjles højde.

const list = document.querySelector("ul");
const li = document.createElement("li");
const barArray = [];

setInterval(generateBars, 1000);

//generere random number
function generateBars() {
  const randomNum = Math.round(Math.random() * 100);
  barArray.push(randomNum);
  console.log("GENERATE BARS", barArray);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (barArray.length > 20) {
    console.log("Den er læst");
    barArray.shift(); //Fjerner det første i arrayet
    list.removeChild(list.firstElementChild); //sørger for at første søjle fjernes så der altid er 20 søjler
  }
  // console.log(barArray);
  // renderChart();
}
// function renderChart() {
//   barArray.forEach(element, (index) => {
//     document.querySelectorAll("li")[index] = style.setProperty(
//       "--height",
//       barArray[index]
//     );
//   });
//}
