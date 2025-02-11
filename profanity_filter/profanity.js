// Profanity Filter, version 1

// Din opgave er at erstatte de "dårlige" ord med "gode" i teksten nedenfor med
// udgangspunkt i følgende datastruktur:
// Dette array viser, hvad de "dårlige" ord skal udskiftes med.
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// Tekst: "Programmering er sjovt! Men husk altid at bruge var, float og marquee i
// moderne kodning."
// Start med at lave en simpel HTML-struktur. Du skal have et tekstafsnit (<p>) med
// ovenstående sætning, og en knap, som brugeren kan klikke på for at opdatere
// teksten med de "gode" ord.

let popUpBox = false;
let theText = document.querySelector("p").textContent;
console.log(theText);
//document.querySelector("button").addEventListener("click", replaceBadWithGood);

function replaceBadWithGood() {
  curseWords.forEach((word) => {
    theText = theText.replaceAll(word.bad, word.good);
  });
  console.log(theText);
  document.querySelector("p").textContent = theText;
  popUpBox = true;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  if (popUpBox) {
    dialog.showModal();
  } else {
    replaceBadWithGood();
    document.body.setAttribute("data-color", theText.target.value); //Giver baggrund gul farve
  }
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede
// array. Hvis teksten allerede er opdateret (ingen "dårlige" ord), skal der vises
// en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et
// flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle
// af de dårlige ord, og derfor har været igennem profanity filteret.
// Tilføj en event listener til din knap. Når den klikkes, bør din
// ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
// Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.
// Husk evt. at kommentere din kode for at forklare, hvordan de forskellige dele fungerer.

//Et flag er en boolian variabel (true/false)

//Har brugt hjælp fra https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
