const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

function operate(button) {

    if (previousOperand.textContent == '') {
        previousValue = currentValue;
    } else {

        if (button.id == 'add') result = previousValue + currentValue;
        if (button.id == 'subtract') result = previousValue - currentValue;
        if (button.id == 'multiply') result = previousValue * currentValue;
        if (button.id == 'divide') result = previousValue / currentValue;

        previousOperand.textContent = result;
        currentOperand.textContent = 0;
    }
}

function display(button) {
    if (currentOperand.textContent == 0 && button.classList.contains('number')) {
        currentOperand.textContent = button.textContent;
        console.log('Number or decimal clicked as first click: ' + button.textContent);
    } else if (currentOperand.textContent != 0 && button.classList.contains('number')) {
        currentOperand.textContent += button.textContent;
        console.log('Number or decimal clicked as non-first click: ' + button.textContent);
    } else if (previousOperand.textContent == '' && button.classList.contains('operator')) {
        previousOperand.textContent = currentValue + ' ' + operator.textContent;
        currentOperand.textContent = 0;
        console.log('Operator clicked ' + button.textContent);
    }

}

let currentValue;
let previousValue;
let result;
const currentOperand = document.querySelector('.current.operand');
const previousOperand = document.querySelector('.previous.operand');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');

// listens numbers and decimal button
number.forEach(button => {
    button.addEventListener('click', () => {
        display(button);
        currentValue = parseInt(currentOperand.textContent, 10);
    });
});

// listens operator buttons
operator.forEach(button => {
    button.addEventListener('click', () => {
        display(button);
        currentValue = parseInt(currentOperand.textContent, 10);
        operate(button);
    });
});