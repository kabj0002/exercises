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
const tbodyPointer = document.querySelector("tbody");

//viser alle el drevne fartøjer
const alleElDrevneFartoejer = vehicles.filter((veh) => veh.isElectric);
//console.log("Alle eldrevne fartøjer", alleElDrevneFartoejer);
//viser alle fartøjer med mere end 2 sæder
const alleFartøjerMerEnn2Saeter = vehicles.filter((veh) => veh.passengers > 2);
//console.log("Alle fartøjer med mere end 2 sæder", alleFartøjerMerEnn2Saeter);
//alle fartøjer el-drevne fartøjer ejet af Jonas
const alleJonasElFartoejer = alleElDrevneFartoejer.filter(
  (veh) => veh.ownedBy === "Jonas"
);
// console.log(
//   "Alle fartøjer el-drevne fartøjer ejet af Jonas",
//   alleJonasElFartoejer
// );
//alle rugbrøds drevne fartøjer med plads til mere end en.
const alleFartøjerMerEnn1Passenger = vehicles.filter(
  (veh) => veh.passengers > 1
);
//console.log("alleFartøjerMerEnn1Passenger", alleFartøjerMerEnn1Passenger);
const alleRugbroedDrevneFartoejerMerEnn1 = alleFartøjerMerEnn1Passenger.filter(
  (veh) => veh.fuel === "Rugbrød"
);
// console.log(
//   "Alle rugbrøds drevne fartøjer med plads til mere end en",
//   alleRugbroedDrevneFartoejerMerEnn1
// );

//Filtrering 1
// function klikFiltrering1() {
//   console.log("Filtrering 1");
//   document
//     .querySelector(".filtrering_1")
//     .addEventListener("click", showTheseVehicles1);
// }

showTheseVehicles1(alleElDrevneFartoejer);

function showTheseVehicles1(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td> 
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Filtrering 2
showTheseVehicles2(alleFartøjerMerEnn2Saeter);

function showTheseVehicles2(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td> 
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Filtrering 3
showTheseVehicles3(alleJonasElFartoejer);

function showTheseVehicles3(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td> 
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Filtrering 4
showTheseVehicles4(alleRugbroedDrevneFartoejerMerEnn1);

function showTheseVehicles4(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td> 
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}

//Filtrering ALLE
//Nedenstående var i opgaven fra tidligere!!!
showTheseVehicles(vehicles); //Denne filtrerer. HVis man ændrer constant her viser den den konstant man ønsker

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td>
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
  //   if (each.stops === undefined) {
  //     return false;
  //   } else {
  //     return true;
  //   } //denne virker ikke?
}

//if statement der gør at each.stops denne ikke vises hvis det er undefined (er kun med på 1)

// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver
//smukkere: uden undefined og tomme felter og true;

// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var
//hardcodede + 1 knap til at vise alle (ufiltreret)

// Style tabellen endnu mere
