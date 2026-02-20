function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }

function operate(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "x") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

let num1 = "";
let num2 = "";
let operador = null;
let esperandoNum2 = false;

const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector(".pantalla");
actualizarPantalla("0");

botones.forEach((btn) => {
    btn.addEventListener("click", () => {

        // OPERADORES ( + - x / )
        if (["+", "-", "/", "x"].includes(btn.textContent)) {
            if (num1 === "") return;
            operador = btn.textContent;
            esperandoNum2 = true;
            actualizarPantalla(num1 + " " + operador);

        // IGUAL
        } else if (btn.classList.contains("igual")) {
            if (num1 === "" || num2 === "" || operador === null) return;
            if (operador === "/" && num2 === "0") {
                actualizarPantalla("Error");
                resetear();
                return;
            }
            const resultado = operate(parseFloat(num1), parseFloat(num2), operador);
            const resultadoFormateado = parseFloat(resultado.toPrecision(10));
            actualizarPantalla(resultadoFormateado);
            num1 = String(resultadoFormateado);
            num2 = "";
            operador = null;
            esperandoNum2 = false;

        // C (reset total)
        } else if (btn.classList.contains("c")) {
            resetear();

        // DEL (borra último dígito)
        } else if (btn.classList.contains("del")) {
            if (esperandoNum2) {
                num2 = num2.slice(0, -1);
                actualizarPantalla(num2 || "0");
            } else {
                num1 = num1.slice(0, -1);
                actualizarPantalla(num1 || "0");
            }

        // NÚMEROS Y PUNTO
        } else if (btn.classList.contains("mostrar")) {
            const digito = btn.textContent;

            if (esperandoNum2) {
                if (digito === "." && num2.includes(".")) return;
                num2 = num2 + digito;
                actualizarPantalla(num1 + "" + operador + "" + num2);
            } else {
                if (digito === "." && num1.includes(".")) return;
                num1 = num1 + digito;
                actualizarPantalla(num1);
            }
        }
    });
});

function resetear() {
    num1 = "";
    num2 = "";
    operador = null;
    esperandoNum2 = false;
    actualizarPantalla("0");
}

function actualizarPantalla(valor) {
    pantalla.textContent = valor;
    const largo = String(valor).length;
    if (largo > 16) {
        pantalla.style.fontSize = "0.85rem";
    } else if (largo > 12) {
        pantalla.style.fontSize = "1.2rem";
    } else if (largo > 8) {
        pantalla.style.fontSize = "1.6rem";
    } else {
        pantalla.style.fontSize = "2.2rem";
    }
}