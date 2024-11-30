let currentInput = "";
let operator = '';
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = previousInput + " " + operator + " " + currentInput;
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculateResult(); // Calculate the result if there was a previous operation
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    document.getElementById('display').value = previousInput + " " + operator;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = '';
    document.getElementById('display').value = "";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = "";
    document.getElementById('display').value = currentInput;
}