// Get the digits in a NodeList

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector("#screen");
const equal = document.querySelector("#equal");
let operatorSelected = false;
let number1;
let number2;
let result;

digits.forEach((digit) => digit.addEventListener("click", (event) => {
    if (number1 === undefined && number2 === undefined) {
        number1 = parseInt(event.target.textContent);
        screen.textContent = number1;
    } else if (number1 != undefined && number2 === undefined && operatorSelected === false) {
        number1 = number1 * 10 + parseInt(event.target.textContent);
        screen.textContent = number1;
    } else if (number1 != undefined && number2 === undefined && operatorSelected === true) {
        number2 = parseInt(event.target.textContent);
        screen.textContent = number2;
    } else if (number1 != undefined && number2 != undefined) {
        number2 = number2 * 10 + parseInt(event.target.textContent);
        screen.textContent = number2;
    }
}))

operators.forEach((operator) => operator.addEventListener("click", (event) => {
    if (number1 != undefined) {
        op = event.target.textContent;
        console.log(op);
        operatorSelected = true;
    }
}))

equal.addEventListener("click", () => {
    if (number1 != undefined && number2 != undefined) {
        switch (op) {
        case "+":
            result = number1 + number2;
            screen.textContent = result;
            break;
        case "-":
            result = number1 - number2;
            screen.textContent = result;
            break;
        case "x":
            result = number1 * number2;
            screen.textContent = result;
            break;
        case "/":
            result = number1 / number2;
            screen.textContent = result;
            break;
        }
        operatorSelected = false
        number1 = undefined;
        number2 = undefined;
    }  
})