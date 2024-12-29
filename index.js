const displayOutput = document.getElementById("display-output");
const clearAllBtn = document.getElementById("all-clear-btn");
const numbers = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator input"));
const equalBtn = document.getElementById("equal-btn");
const percentageBtn = document.getElementById("percentage-btn");

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
  firstNum = result;
  numberToDisplay = result;
  displayOutput.textContent = numberToDisplay;
  updateActiveOperator("");
});

clearAllBtn.addEventListener("click", () => {
  numberToDisplay = "";
  currentOperator = "";
  firstNum = null;
  secondNum = null;
  result = null;
  displayOutput.textContent = numberToDisplay;
  updateActiveOperator("");
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
      updateActiveOperator(operator);
      currentOperator = operator.id;
    });
  }
});

function updateActiveOperator(op) {
  operators.forEach((operator) => {
    operator.id !== op.id
      ? operator.classList.remove("active")
      : operator.classList.add("active");
  });
}

percentageBtn.addEventListener("click", () => {
  numberToDisplay = Number(numberToDisplay) * 0.01;
  firstNum = numberToDisplay;
  displayOutput.textContent = numberToDisplay;
});

// display first number and store it in a variable
// select an operator and store it in a variable
// select and display second number, stor it in a variable
// once equal button is clicked, do the math
