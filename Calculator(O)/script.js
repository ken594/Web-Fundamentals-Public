var displayDiv = document.querySelector("#display");
var buffer = 0;
var operator = "";
var isDisplayReset = true;

function press(num) {
  if (isDisplayReset) {
    displayDiv.innerText = num;
    isDisplayReset = false;
  } else {
    displayDiv.innerText += num;
  }
}

function clr() {
  displayDiv.innerText = 0;
  buffer = 0;
  isDisplayReset = true;
}

function setOP(str) {
  buffer = parseFloat(displayDiv.innerText);
  operator = str;
  isDisplayReset = true;
}

function calculate() {
  //   if (operator == "")
  switch (operator) {
    case "+":
      displayDiv.innerText = parseFloat(displayDiv.innerText) + buffer;
      operator = "";
      break;
    case "-":
      displayDiv.innerText = buffer - parseFloat(displayDiv.innerText);
      operator = "";
      break;
    case "*":
      displayDiv.innerText = buffer * parseFloat(displayDiv.innerText);
      operator = "";
      break;
    case "/":
      displayDiv.innerText = buffer / parseFloat(displayDiv.innerText);
      operator = "";
      break;
    default:
      displayDiv.innerText = 0;
      break;
  }
  buffer = 0;
  isDisplayReset = true;
}
