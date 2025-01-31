//Her kan jeg lave funktioner og variabler jeg kan eksportere til js.js

export function sayHi(user) {
  console.log(`Hello ${user}`);
}

export function getRandomNumber(max) {
  return Math.floor(Math.random() * 3);
}

export function $(selector) {
  return document.querySelector(selector);
}

export function $$(selector) {
  return document.querySelectorAll(selector);
}
