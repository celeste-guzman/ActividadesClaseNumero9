// Ejercicio 9:  
// Define una constante PI con el valor de pi (3.14159). 
// Pide al usuario que ingrese el radio de un círculo y calcula su área 
// y perímetro utilizando la constante PI. 

const prompt = require ('prompt-sync')();

const PI = 3.14159

let radio = parseFloat(prompt('Ingrese la medida del radio de su círculo en cms: '));

const area = PI * radio * radio;

const perimetro = 2 * PI * radio;

console.log(`El área de su círculo es ${area.toFixed(2)}`);

console.log(`El perímetro de su círculo es ${perimetro.toFixed(2)}`);