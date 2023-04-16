let expression = "";

function insert(value) {
  // Ignore inserting operators at the beginning of the expression
  if (expression.length === 0 && "+-*/%.".includes(value)) {
    return;
  }

  // Ignore inserting operators after other operators
  const lastChar = expression[expression.length - 1];
  if ("+-*/%.".includes(lastChar) && "+-*/%.".includes(value)) {
    return;
  }

  // Ignore inserting decimal point after another decimal point in the same number
  if (value === "." && expression.slice(-1) === ".") {
    return;
  }

  expression += value;
  document.getElementById("result").value = expression;
}

function clearScreen() {
  expression = "";
  document.getElementById("result").value = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  document.getElementById("result").value = expression;
}

function calculate() {
  // Prevent calculating if the last character is an operator or decimal point
  const lastChar = expression[expression.length - 1];
  if ("+-*/%.".includes(lastChar)) {
    return;
  }

  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
    // after decimal only 6 places and then convert to string
    expression = result.toFixed(6).toString();
  } catch (error) {
    alert("Invalid expression");
    clearScreen();
  }
}
