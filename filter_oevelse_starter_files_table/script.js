// Filter øvelse
// Lav nogle hardcodede filtreringer:
// 1. en der viser alle el drevne fartøjer
// 2. en der viser alle fartøjer med mere end 2 sæder
// 3. alle fartøjer el-drevne fartøjer ejet af Jonas
// 4. alle rugbrøds drevne fartøjer med plads til mere end en.

const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

//Vi laver knapper og tilknytter filter til hver knap
document.querySelectorAll("button").forEach((btn) => {
  console.log("button", btn.dataset.filter); //Console logger data-filter fra HTML

  btn.addEventListener("click", () => {
    filterHandler(btn.dataset.filter);
  }); //Her har vi lavet en "anonym function"
});

function filterHandler(filter) {
  console.log("filterHandler", filter);
  let filterArr;

  switch (filter) {
    case "all":
      filterArr = vehicles;
      break;

    case "isElectric":
      filterArr = alleElDrevneFartoejer;
      break;

    case "moreThanOnePassenger":
      filterArr = alleFartøjerMerEnn2Saeter;
      break;

    case "jonasOwnedElVeh":
      filterArr = alleJonasElFartoejer;
      break;

    case "ryebread":
      filterArr = alleRugbroedDrevneFartoejerMerEnn1;
      break;
  }
  showTheseVehicles(filterArr);
}

//Laver buttons i JS (anden måde at gøre det på uden at lave buttons i HTML)
// const div = document.querySelector("div");

// div.innerHTML += `<button id="all_btn">Alle</button>`;
// div.innerHTML += `<button id="el_btn">Electric</button>`;
// div.innerHTML += `<button id="pass_btn">Mere end 1 passenger</button>`;
// div.innerHTML += `<button id="jonel_btn">Jonas el fartøjer</button>`;
// div.innerHTML += `<button id="rugbr_btn">Rugbrød</button>`;

// document.querySelector("#all_btn").addEventListener("click", () => {
//   showTheseVehicles(vehicles);
// });
// document.querySelector("#el_btn").addEventListener("click", () => {
//   showTheseVehicles(alleElDrevneFartoejer);
// });
// document.querySelector("#pass_btn").addEventListener("click", () => {
//   showTheseVehicles(alleFartøjerMerEnn2Saeter);
// });
// document.querySelector("#jonel_btn").addEventListener("click", () => {
//   showTheseVehicles(alleJonasElFartoejer);
// });
// document.querySelector("#rugbr_btn").addEventListener("click", () => {
//   showTheseVehicles(alleRugbroedDrevneFartoejerMerEnn1);
// });

const tbodyPointer = document.querySelector("tbody");
//viser alle el drevne fartøjer
const alleElDrevneFartoejer = vehicles.filter((veh) => veh.isElectric);
//console.log("Alle eldrevne fartøjer", alleElDrevneFartoejer);
//viser alle fartøjer med mere end 2 sæder
const alleFartøjerMerEnn2Saeter = vehicles.filter((veh) => veh.passengers > 2);
//console.log("Alle fartøjer med mere end 2 sæder", alleFartøjerMerEnn2Saeter);
//alle fartøjer el-drevne fartøjer ejet af Jonas
const alleJonasElFartoejer = vehicles.filter(
  (veh) => veh.isElectric && veh.ownedBy === "Jonas"
);
// console.log(
//   "Alle fartøjer el-drevne fartøjer ejet af Jonas",
//   alleJonasElFartoejer
// );
//alle rugbrøds drevne fartøjer med plads til mere end en.
const alleRugbroedDrevneFartoejerMerEnn1 = vehicles.filter(
  (veh) => veh.fuel === "Rugbrød" && veh.passengers > 1
);
// console.log(
//   "Alle rugbrøds drevne fartøjer med plads til mere end en",
//   alleRugbroedDrevneFartoejerMerEnn1
// );

//Filtrering ALLE
showTheseVehicles(vehicles); //Denne filtrerer. HVis man ændrer constant her viser den den konstant man ønsker

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${beautify(each.type)}</td>
  <td>${beautify(each.fuel)}</td>
  <td>${beautify(each.passengers)}</td>
  <td>${beautify(each.stops)}</td>
  <td>${beautify(each.ownedBy)}</td>
  <td>${beautify(each.isElectric)}</td>
  <td>${beautify(each.isTandem ? "X" : "-")}</td> 
</tr>`;
  });
  //Ninja kodning hvor man får X hvis tandem er true og - hvis det er false

  //Fjerner undefined i tabel (1 løsning). Sætter det ind i tabellen også fjerne det igen
  // document.querySelectorAll("td").forEach((cell) => {
  //   if (cell.textContent === "undefined") {
  //     cell.textContent = "";
  //   }
  // });
}
// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver
//smukkere: uden undefined og tomme felter og true;
//Fjerner undefined i tabel (anden løsning). Fjerner det inden man sætter det ind i tabellen.

//1 måde at gøre det på
// function beautify(str) {
//   if (str === undefined) {
//     str = "-";
//   }
//   if (str === true) {
//     str = "X";
//   }
//   return str;
// }
//Anden måde at gøre det på (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
function beautify(str) {
  switch (str) {
    case undefined:
      str = "-";
      break;
    case true:
      str = "X";
      break;
  }
  return str;
}

//Random filter noter fra undervisning
// function getFee(isMember) {
//   return isMember ? "$2.00" : "$10.00";
// }                     true      false
