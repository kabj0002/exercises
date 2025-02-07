"use strict";

// Name-parts
// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three
//variables: firstName, middleName and lastName.
const fullName = "Peter Heronimous Lind";
//const firstName = "Peter";
//const middleName = "Heronimous";
//const lastName = "Lind";

// Hint: use indexOf and substring

const firstName = fullName.substring(
  fullName.indexOf("P"),
  fullName.indexOf(" ")
);
const middleName = fullName.substring(
  fullName.indexOf("H"),
  fullName.lastIndexOf(" ")
);
const lastName = fullName.substring(fullName.indexOf("L"));

// Expect the name to be a const - you can’t modify it.

// Console.log the three variables at the very end of your code.
console.log(firstName);
console.log(middleName);
console.log(lastName);
// Remember that you may not use "magic numbers" in your code, so you have to create
//the program, so it finds the beginning and end of each part of the name.

// Also test the code with your own name (make up a middle name, if you don't have one)
//to ensure that it works for different lengths.

//Testing the code with my own name
const myFullName = "Katinka Hotvedt Bjerke";
const myFirstName = myFullName.substring(
  myFullName.indexOf("K"),
  myFullName.indexOf(" ")
);
const myMiddleName = myFullName.substring(
  myFullName.indexOf("H"),
  myFullName.lastIndexOf(" ")
);
const myLastName = myFullName.substring(myFullName.indexOf("B"));

console.log(myFirstName);
console.log(myMiddleName);
console.log(myLastName);
