// Find et ord i en streng og udskift det

let theText =
  "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
// Find ordet "ord" i strengen theText og erstat den med ting
const theSplittedText1 = theText.split("ord");
console.log(theSplittedText1);
const theJoinedText1 = theSplittedText1.join("paragrafer");
console.log(theJoinedText1);
// Prøv med split / join.
const theSplittedText2 = theText.split(" ");
console.log(theSplittedText2);
const theJoinedText2 = theSplittedText2.join(" ");
console.log(theJoinedText2);
// Prøv med replaceAll()
const theReplaceAllText = theText.replaceAll("nogle", "alle"); //Skifter nogle ud med alle alle steder i string.
console.log(theReplaceAllText);
// console.log dit resultat
