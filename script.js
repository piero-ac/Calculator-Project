const display = document.querySelector(".display p");
const numberButtons = [...document.querySelectorAll(".number-button")];
const operatorButtons = [...document.querySelectorAll(".operator-button")];
const clearAllButton = document.querySelector(".AC-button");
const clearEntryButton = document.querySelector(".CE-button");

const operands = [];

clearAllButton.addEventListener("click", () => console.log("clear all"));
clearEntryButton.addEventListener("click", () => console.log("clear entry"));

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (event) =>
    console.log(event.target.value)
  )
);

operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (event) =>
    console.log(event.target.value)
  )
);
