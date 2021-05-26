const firstNumberTag = document.querySelector('#first-number');
const secondNumberTag = document.querySelector('#second-number');
const operator = document.querySelector('#operator');
const btn = document.querySelector('#btn');
const calculator = document.querySelector('#calc');
let result;
let span = document.createElement('span');
calculator.appendChild(span);


btn.addEventListener('click', calculate);

function calculate() {
    let number1 = parseFloat(firstNumberTag.value);
    let number2 = parseFloat(secondNumberTag.value);
    let mathOperator = operator.value;
    console.log(typeof number1)

    switch(mathOperator) {
        case '+': result =  number1 + number2; break;
        case '-': result =  number1 - number2; break;
        case '/': result =  number1 / number2; break;
        case '*': result =  number1 * number2; break;
        default: result = 0;
    }

    /*
    if(mathOperator === '+' ) {
        result =  number1 + number2;
    }

    else if(mathOperator === '-') {
        result =  number1 - number2;
    }

    else if(mathOperator === '/') {
        result =  number1 / number2;
    }

    else if(mathOperator === '*') {
        result =  number1 * number2;
    }

    else {
            result = 0;
    }
    */

    span.textContent = `Result is ${result}`

}