function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        // Replace 'x' with '*' for multiplication
        expression = expression.replace(/x/g, '*');
        const result = Function('"use strict";return (' + expression + ')')();
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}