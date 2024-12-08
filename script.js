const add = (numOne, numTwo) => numOne + numTwo;
const subtract = (numOne, numTwo) => numOne - numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;
const divide = (numOne, numTwo) => numOne / numTwo;

let firstNum;
let secondNum;

function operate(operator, inputOne, inputTwo) {
    return operator(inputOne, inputTwo);
}

console.log(operate(divide, 1, 2));