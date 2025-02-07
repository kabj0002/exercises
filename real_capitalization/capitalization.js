"use strict";

// Capitalization
// Use the 3caPitalization exercise as a basis for this exercise. Modify the code,
//so that only the first letter is upper case, and the rest is lower case.

// Make sure that it can take names of any length!

const str = "peter";
const strUpper = str.substring(0, 1).toUpperCase();
console.log(strUpper);
const result = strUpper + str.slice(1);
console.log(result);

//Combo with my own name
const str1 = "katinka";
const strUpper1 = str1.substring(0, 1).toUpperCase();
console.log(strUpper1);
const result1 = strUpper1 + str1.slice(1);
console.log(result1);
