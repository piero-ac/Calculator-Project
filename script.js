const display = document.querySelector(".display p");
const numberButtons = [...document.querySelectorAll(".number-button")];
const operatorButtons = [...document.querySelectorAll(".operator-button")];
const clearAllButton = document.querySelector(".AC-button");
const clearEntryButton = document.querySelector(".CE-button");

const operandsAndOperators = [];
let input = "";

clearAllButton.addEventListener("click", clearAll);

clearEntryButton.addEventListener("click", () => console.log("clear entry"));

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", updateInput)
);

operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", operate)
);

function clearAll() {
  operandsAndOperators.splice(0, operandsAndOperators.length); // empty the array
  display.textContent = "0";
  input = "";
  // console.log("clear all")
}

function updateInput(event) {
  if (input.length <= 8) {
    input += event.target.value;
    updateDisplay(input);
  }
  console.log(input);
}

function updateDisplay(newNumber) {
  display.textContent = newNumber;
}

function operate(event) {}

// Operate Helper Function
function operateHelper(operator) {}
