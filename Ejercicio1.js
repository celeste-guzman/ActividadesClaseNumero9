// Ejercicio 1:  
//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales. 

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

if (numero1 > numero2) {
    respuesta = 'El número mayor es el primer numero (' + numero1 + ')';
} else if (numero1 < numero2) {
    respuesta = 'El número mayor es el segundo numero (' + numero2 + ')';
} else {
    respuesta = 'Los números son iguales.';
}

console.log(respuesta);