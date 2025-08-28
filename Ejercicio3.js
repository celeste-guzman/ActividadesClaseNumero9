//Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2. 
// Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el
//resultado de diversas combinaciones lógicas.

const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingrese el valor de la condición 1 (true/false): ");

let condicion2 = prompt("Ingrese el valor de la condición 2 (true/false): ");

console.log("Condición 1:", condicion1);

console.log("Condición 2:", condicion2);

console.log("AND:", condicion1 && condicion2);

console.log("OR:", condicion1 || condicion2);

console.log("NOT Condición 1:", !condicion1);

console.log("NOT Condición 2:", !condicion2);