// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

// Main calculator function
function calculate() {

    // Get values from input fields
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    // Switch statement to select operation
    switch (operator) {

        case "add":
            result = add(num1, num2);
            break;

        case "subtract":
            result = subtract(num1, num2);
            break;

        case "multiply":
            result = multiply(num1, num2);
            break;

        case "divide":
            result = divide(num1, num2);
            break;

        default:
            result = "Invalid operation";
    }

    // Display result
    document.getElementById("result").textContent = "Result: " + result;
}