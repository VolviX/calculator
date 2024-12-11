// this project just showcases eventhough you have terrible coding skills
// you'll still get the job done!

function operate(button) {
    if (button.id == 'add') return result = previousValue + currentValue;
    if (button.id == 'subtract') return result = previousValue - currentValue;
    if (button.id == 'multiply') return result = previousValue * currentValue;
    if (button.id == 'divide') return result = previousValue / currentValue;
    if (button.id == 'equals') {
        if (lastOperator == '/') return result = previousValue / currentValue;
        if (lastOperator == '*') return result = previousValue * currentValue;
        if (lastOperator == '-') return result = previousValue - currentValue;
        if (lastOperator == '+') return result = previousValue + currentValue;
    }
}

function display(button) {
    if (currentOperand.textContent == 0 && button.classList.contains('number')) {
        currentOperand.textContent = button.textContent;
        currentValue = parseInt(currentOperand.textContent, 10);
        console.log('First click: ' + button.textContent);

    } else if (currentOperand.textContent != 0 && button.classList.contains('number')) {
        currentOperand.textContent += button.textContent;
        currentValue = parseInt(currentOperand.textContent, 10);
        console.log('Non-first click: ' + button.textContent);

    } else if (previousOperand.textContent == '' && button.classList.contains('operator')) {
        previousValue = currentValue;
        previousOperand.textContent = previousValue;
        currentOperand.textContent = 0;
        currentValue = 0;
        console.log('Operator click: ' + button.textContent);

    } else if (previousOperand != '' && button.classList.contains('operator')) {
        console.log('Run Operate for Current: ' + currentValue + ' and Previous: ' + previousValue);
        operate(button);
        previousOperand.textContent = result;
        previousValue = result;
        currentOperand.textContent = 0;
        currentValue = 0;
        console.log('New Current: ' + currentValue + ' New Previous: ' + previousValue);
    } else if (previousOperand == '' && button.id == 'equals') {
        // do nothing
    } else if (previousOperand != '' && button.id == 'equals') {
        operate(button);
        previousOperand.textContent = result; // should there be operator sign?
        previousValue = result;
        currentOperand.textContent = 0;
        currentValue = 0;
    }
}

let currentValue = 0;
let previousValue;
let result;
let lastOperator;
const currentOperand = document.querySelector('.current.operand');
const previousOperand = document.querySelector('.previous.operand');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const ac = document.querySelector('.ac');
const del = document.querySelector('.del');

// listens numbers and decimal button
number.forEach(button => {
    button.addEventListener('click', () => {
        display(button);
    });
});

// listens operator buttons
operator.forEach(button => {
    button.addEventListener('click', () => {
        lastOperator = button.textContent;
        display(button);
    });
});

ac.addEventListener('click', () => {
    previousOperand.textContent = '';
    currentOperand.textContent = 0;
});

del.addEventListener('click', () => {
    currentValue = 0;
    currentOperand.textContent = 0;
});

equals.addEventListener('click', () => {
    display(equals);
});
