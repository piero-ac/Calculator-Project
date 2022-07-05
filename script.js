const display = document.querySelector(".display p");
const numberButtons = [...document.querySelectorAll(".number-button")];
const operatorButtons = [...document.querySelectorAll(".operator-button")];
const clearAllButton = document.querySelector(".AC-button");
const clearEntryButton = document.querySelector(".CE-button");

const operands = [];
const operators = [];
let input = "";

clearAllButton.addEventListener("click", clearAll);

clearEntryButton.addEventListener("click", () => console.log("clear entry"));

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", updateInput)
);

operatorButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", calculate)
);

// function operate() {
//   let total = 0;
//   const firstOperand = Number(operands.shift());
//   const secondOperand = Number(operands.shift());
//   const operator = operators.shift();

//   switch (operator) {
//     case "+":
//       total = firstOperand + secondOperand;
//       break;
//     case "-":
//       total = firstOperand - secondOperand;
//       break;
//     case "/":
//       total = firstOperand / secondOperand;
//       break;
//     case "*":
//       total = firstOperand * secondOperand;
//       break;
//     case "=":
//       operators.splice(0, operators.length);
//   }

//   operands.unshift(total);
//   return total;
// }

function clearAll() {
  operands.splice(0, operands.length); // empty the operands array
  operators.splice(0, operators.length); // empty the operators array
  display.textContent = "0";
  input = "";
  // console.log("clear all")
}

function updateInput(event) {
  if (input.length <= 8) {
    input += event.target.value;
    updateDisplay(input);
  }
}

function updateDisplay(newNumber) {
  display.textContent = newNumber;
}

function calculate(event) {
  const operator = event.target.value;
  if (input === "") return;

  switch (operator) {
    case "+/-":
      input = input.includes("-") ? input.substring(1) : "-" + input;
      updateDisplay(input);
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      operands.push(input);
      operators.push(operator);
      operate();
      break;
    case "=":
      operate();
      break;
  }
}
