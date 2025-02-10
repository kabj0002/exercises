"use strict";

// Name-parts
// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three
//variables: firstName, middleName and lastName.
const fullName = "Peter Heronimous Lind";
//const firstName = "Peter";
//const middleName = "Heronimous";
//const lastName = "Lind";

// Hint: use indexOf and substring
//First name
const firstName = fullName.substring(
  fullName.indexOf("P"),
  fullName.indexOf(" ")
);
//eller
const firstName1 = fullName.substring(0, fullName.indexOf(" "));
//Middle name
const middleName = fullName.substring(
  fullName.indexOf("H"),
  fullName.lastIndexOf(" ")
);
//eller
const middleName1 = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.lastIndexOf(" ")
);
//Last name
const lastName = fullName.substring(fullName.indexOf("L"));
//eller
const lastName1 = fullName.substring(fullName.lastIndexOf(" ") + 1);

// Expect the name to be a const - you can’t modify it.

// Console.log the three variables at the very end of your code.
console.log(firstName);
console.log(firstName1);
console.log(middleName);
console.log(middleName1);
console.log(lastName);
console.log(lastName1);

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
