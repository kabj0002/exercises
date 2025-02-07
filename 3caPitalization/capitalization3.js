"use strict";
// 3caPitalization
// Given a single name string in an unknown case, e.g. “peter” or “PETER” -
//create a new string with the same name, where the third letter is uppercase,
//and the rest is lowercase. I.e. “peTer”.

const str = "peter";
const strUpper = str.substring(2, 3).toUpperCase();
console.log(strUpper);
const result = str.slice(0, 2) + strUpper + str.slice(3);
console.log(result);

// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

// Test your code with various crazy combinations of your own name, like “pETer”,
//“PEter”, “peteR”, “PEtER” and so on.

// Make sure that it also works with longer names. Don't worry about names shorter
//than 3 characters.

// When complete, add, commit, and also paste the js-code here below.

//Combo with my own name
const str1 = "katinka";
const strUpper1 = str1.substring(2, 6).toUpperCase();
console.log(strUpper1);
const result1 = str1.slice(0, 2) + strUpper1 + str1.slice(6);
console.log(result1);
