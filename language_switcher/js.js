//Language switch
//I denne opgave skal du lave noget javaScript der kan skifte sproget
//på en simpel HTML-side
//I første om gang er sproget sat til dansk: const locale = "da";
//Så du skal finde texts i sproget der er valgt og udskifte teksterne på de
//rigtige querySelectorer ...
//Version 2
//Lav en dropdown (select element) der kan skifte sproget i teksten mellem
//tysk og dansk (de og da)

//Array
// const texts = {
//   de: {
//     texts: [
//       //.header er queryselector og "Das Bot" er det der sættes på
//       { text: "Das Bot", location: ".header" },
//       { text: "Das Ro-Bot", location: ".footer" },
//     ],
//   },
//   da: {
//     texts: [
//       { text: "Båden", location: ".header" },
//       { text: "Robotten", location: ".footer" },
//     ],
//   },
// };

// const locale = "da";
// const internationale = "de";

// //tilknytter filter til hver option
// document.querySelectorAll("option").forEach((opt) => {
//   console.log("option", opt.dataset.filter); //Console logger data-filter fra HTML

//   opt.addEventListener("click", () => {
//     filterHandler(opt.dataset.filter);
//   }); //Her har vi lavet en "anonym function"
// });

// function filterHandler(filter) {
//   console.log("filterHandler", filter);
//   let filterArr;

//   switch (filter) {
//     case "danish":
//       filterArr = locale;
//       break;

//     case "german":
//       filterArr = internationale;
//       break;
//   }
//   showLanguage(filterArr);
// }

// const section = document.querySelector("section");
// function showLanguage(arr) {
//   section.innerHTML = "";
//   arr.forEach((each) => {
//     section.innerHTML += `
//   <p>${each.text}</p>
//   <p>${each.location}</p>`;
//   });
// }

// // console.log(texts.de); //Viser tysk
// // console.log(texts.da); //Viser dansk
// // console.log(texts[locale]); //Viser dansk
// // console.log(texts["da"]); //Viser dansk

// //Laver drop down selector
// const selectElement = document.querySelector(".choose_language");
// const result = document.querySelector(".result");

// selectElement.addEventListener("change", (event) => {
//   result.textContent = `You chose ${event.target.value}`;
// });

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Function til at opdatere tekst i DOM
function showLanguage(language) {
  const selectedTexts = texts[language]?.texts;
  if (!selectedTexts) return;

  selectedTexts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

// Dropdown selection
const selectElement = document.querySelector(".choose_language");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value === "danish" ? "da" : "de";
  // result.textContent = `You chose ${
  //   event.target.options[event.target.selectedIndex].text
  // }`;

  showLanguage(selectedLanguage);
});
