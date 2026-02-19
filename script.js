function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}
function operate(num1, num2, operator){
    let total;

    if (operator === "+") {
        total = add(num1, num2);
    } else if (operator === "-") {
        total = subtract(num1, num2);
    } else if (operator === "*") {
        total = multiply(num1, num2);
    } else if (operator === "/") {
        total = divide(num1, num2);
    }

    return total;
}

let num1;
let num2;
let operator;

//DOM


const botones = document.querySelectorAll(".btn")
let pantalla = document.querySelector(".pantalla")
pantalla.textContent = "0"

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("numero")) {
            pantalla.textContent = btn.textContent //retorna un string.
        }
    })
})