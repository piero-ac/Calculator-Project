const display = document.querySelector(".display p");
const numberButtons = [...document.querySelectorAll(".number-button")];
const operatorButtons = [...document.querySelectorAll(".operator-button")];
const clearAllButton = document.querySelector(".AC-button");
const clearEntryButton = document.querySelector(".CE-button");

const operands = [];
let input = "";

clearAllButton.addEventListener("click", () => {
  operands.splice(0, operands.length);
  display.textContent = "0";
  input = "";
  //console.log("clear all");
});

clearEntryButton.addEventListener("click", () => console.log("clear entry"));

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (event) => {
    if (input.length <= 8) {
      input += event.target.value;
      display.textContent = input;
    }
    //console.log(event.target.value)
  })
);

operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", (event) =>
    console.log(event.target.value)
  )
);
