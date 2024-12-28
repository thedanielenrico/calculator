const displayOutput = document.getElementById("display-output");
const clearAllBtn = document.getElementById("all-clear-btn");
const numbers = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator input"));
const equalBtn = document.getElementById("equal-btn");

const operations = {
  addition: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

let numberToDisplay = "";
let currentOperator = "";
let firstNum = null;
let secondNum = null;
let result = null;

equalBtn.addEventListener("click", () => {
  numberToDisplay = "";
  displayOutput.textContent = numberToDisplay;
  result = operations[currentOperator](firstNum, secondNum);
  console.log("~~~~~", currentOperator);
  firstNum = result;
  numberToDisplay = result;
  displayOutput.textContent = numberToDisplay;
});

clearAllBtn.addEventListener("click", () => {
  numberToDisplay = "";
  currentOperator = "";
  firstNum = null;
  secondNum = null;
  result = null;
  displayOutput.textContent = numberToDisplay;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (!num.id) {
      numberToDisplay += num.textContent;
      displayOutput.textContent = numberToDisplay;
      if (currentOperator === "") {
        firstNum = Number(numberToDisplay);
      } else {
        numberToDisplay = num.textContent;
        displayOutput.textContent = numberToDisplay;
        secondNum = Number(numberToDisplay);
      }
    } else if (num.id === "decimal" && !numberToDisplay.includes(".")) {
      numberToDisplay += num.textContent;
      displayOutput.textContent = numberToDisplay;
    }
  });
});

operators.forEach((operator) => {
  if (operator.id !== "equal-btn") {
    operator.addEventListener("click", () => {
      currentOperator = operator.id;
    });
  }
});

// display first number and store it in a variable
// select an operator and store it in a variable
// select and display second number, stor it in a variable
// once equal button is clicked, do the math
