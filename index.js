const displayOutput = document.getElementById("display-output");
const clearAllBtn = document.getElementById("all-clear-btn");
const numbers = Array.from(document.getElementsByClassName("number"));
const operators = Array.from(document.getElementsByClassName("operator input"));
const equalBtn = document.getElementById("equal-btn");
const percentageBtn = document.getElementById("percentage-btn");
const decimalBtn = document.getElementById("decimal-btn");

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

equalBtn.addEventListener("click", () => {
  numberToDisplay = "";
  displayOutput.textContent = numberToDisplay;
  const result = operations[currentOperator](result || firstNum, secondNum);
  numberToDisplay = result;
  displayOutput.textContent = numberToDisplay;

  updateActiveOperator("");
});

clearAllBtn.addEventListener("click", () => {
  numberToDisplay = "";
  currentOperator = "";
  firstNum = null;
  secondNum = null;
  displayOutput.textContent = numberToDisplay;
  updateActiveOperator("");
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    numberToDisplay += num.textContent;
    displayOutput.textContent = numberToDisplay;
    if (currentOperator === "") {
      firstNum = Number(numberToDisplay);
    } else {
      numberToDisplay = num.textContent;
      displayOutput.textContent = numberToDisplay;
      secondNum = Number(numberToDisplay);
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    updateActiveOperator(operator);
    currentOperator = operator.id;
  });
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

decimalBtn.addEventListener("click", () => {
  if (!numberToDisplay.includes(".")) {
    numberToDisplay = `${numberToDisplay}.`;
    displayOutput.textContent = numberToDisplay;
  }
});

// BUG: complete one operation, proceed to start a new operation.
// OUTCOME: the preceding result is operated on
// DESIRE: the previous data should be cleared if a number is clicked after an operation
// Allow for coninous equal-btn clicking however
