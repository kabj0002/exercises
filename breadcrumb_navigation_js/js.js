"use strict";

//I denne opgave vil vi tage et kig på, hvordan vi kan bruge JavaScript til at
//omdanne en simpel datastruktur til en visuel repræsentation på et website.
//Målet er at generere en breadcrumb-navigation baseret på det givne data, med et
//lille twist: det sidste element i navigationen skal ikke være et link!

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

//Få button til at gå igennem varesti
document.querySelector("button").addEventListener("click", lavSti);

//console.log("sidste element", bc[bc.length - 1].name);

function lavSti() {
  bc.forEach((vare) => {
    console.log(vare.name);
    console.log(vare.link);
    //console.log("********");

    const navnetPaaSidsteElement = bc[bc.length - 1].name;
    if (navnetPaaSidsteElement === vare.name) {
      console.log("Vi er igang med sidste element");
      document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href="${vare.link}">${vare.name}</a>&nbsp;>&nbsp;</li>`;
    }
  });
}
//Fjerne link på sidste i array
//   document.querySelector("ul").innerHTML = `<li>${
//     vare.name[bc.length - 1]
//   }</li>`;
// const products = bc;
// products[2] = "";
// let result;
// result = products.pop();
// document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;

//Opretter brødkrummsti
// document.querySelector("ul").innerHTML = `<li><a href="">&nbsp;${
//   bc[bc.length - 1]
// }></a></li>`;

// document.querySelector(
//   "ul"
// ).innerHTML += `<li><a href="">&nbsp;Vaskemaskiner ></a></li>`;

// document.querySelector("ul").innerHTML += `<li>&nbsp;Bos</li>`;

//const arr = ["Ræv", "Hund", "Bjørn", "Abe"];
//console.log(arr[arr.length - 1]); //Viser sidste i array

//&nbsp; Dette er et mellemrom

//Tilføj en event listener til din knap, så når den klikkes, vil din
//breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.
