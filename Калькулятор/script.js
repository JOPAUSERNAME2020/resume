let display = document.getElementById('display');
let currentValue = '';
let currentOperator = '';
let previousValue = '';

function appendNumber(num) {
    currentValue += num;
    updateDisplay();
}

function appendDecimal() {
    if (!currentValue.includes('.')){
        currentValue += '.';
        updateDisplay();
    }
}

function applyOperation(operator) {
    if (currentValue = '' && operator !== 'reciprocal' && operator !== 'square' && operator !== 'squareRoot') return;
    
    if (previousValue !== '') {
        calculateResult();
    }

    previousValue = currentValue;
    currentValue = '';
    currentOperator = operator;
}

function calculateResult() {
    if (previousValue === '' || currentValue === '') return;

    let result;
    let num1 = parseFloat(previousValue);
    let num2 = parseFloat(currentValue);

    switch (currentOperator) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num2 !== 0? num1 / num2 : 'Ошбика'; break;
        case 'modulus': result = (num1 * num2) / 100; break;
        default: return;
    }

    currentValue = result.toString();
    previousValue = '';
    currentOperator = '';
    updateDisplay();
}

function clearAll() {
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    updateDisplay();
}

function clearEntry() {
    currentValue = '';
    updateDisplay();
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue || '0';
}

function applyOperation(operator) {
    let num = parseFloat(currentValue);

    switch (operator) {
        case 'reciprocal':
            if (num !== 0) {
                currentValue = (1 / num).toString();
            } else {
                currentValue = 'Ошибка';
            }
            break;
        case 'square':
            currentValue =  (num ** 2).toString();
            break;
        case 'squareRoot':
            currentValue = num >=0 ? Math.sqrt(num).toString() : 'Ошбика';
            break;
        default:
            if (currentValue === '') return;
            if (previousValue !== '') calculateResult();
            previousValue = currentValue;
            currentValue = '';
            currentOperator = operator;
    }
    updateDisplay();
}