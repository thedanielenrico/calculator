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

  console.log("hello", { firstNum, secondNum, currentOperator });
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
      } else if (secondNum === null && currentOperator !== "") {
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
  operator.addEventListener("click", () => {
    currentOperator = operator.id;
  });
});

// step 1: display number to display
// step 2: track operator click
// only allow one decimal place
