function calculate(operation) {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let result;
    if (operation === 'multiply') {
        result = a * b;
    } else if (operation === 'divide') {
        if (b === 0) {
            result = 'Cannot divide by zero!';
        } else {
            result = a / b;
        }
    }
    document.getElementById('result').textContent = result;
}
