"use strict";

const ratingButton = document.querySelector(".rating");
const submitButton = document.querySelector(".button");
let textChange = document.querySelector(".changing-number");
const containerStart = document.querySelector(".container-start");
const containerEnd = document.querySelector(".container-end");

ratingButton.addEventListener("click", (e) => {
  let buttonValue = e.target.innerText;
  textChange.innerText = buttonValue;
});

submitButton.addEventListener("click", () => {
  containerEnd.classList.remove("vanish");
  containerStart.classList.add("vanish");
});
