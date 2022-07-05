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
  operatorButton.addEventListener("click", (event) => {
    const operator = event.target.value;

    // don't do anything with the operator if
    // if user has entered a number first
    //   if (input != "") {
    //     switch (operator) {
    //       case "+/-":
    //         input = input.includes("-") ? input.substring(1) : "-" + input;
    //         display.textContent = input;
    //         break;
    //       case "/":
    //       case "*":
    //       case "-":
    //       case "+":
    //         if (operands.length != 0) {
    //           operands.push(input);
    //           display.textContent = operate();
    //           operators.push(operator);
    //         } else {
    //           operands.push(input);
    //           operators.push(operator);
    //           display.textContent = "0";
    //         }
    //         // operands.push(input);
    //         // operands.push(operator);
    //         // display.textContent = "0";
    //         // input = "";
    //         input = "";

    //         console.table(operands);
    //         console.table(operators);
    //         break;

    //       case "=":
    //         operands.push(input);
    //         display.textContent = operate();
    //         console.table(operands);
    //         console.table(operators);
    //         break;
    //     }
    //   }
    //   //console.log(event.target.value);
  })
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
