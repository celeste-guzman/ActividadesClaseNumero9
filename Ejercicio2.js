//Ejercicio 2:
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
//valores numéricos de tu elección. Pide al usuario que ingrese un
//número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 25;

const RANGO_MAXIMO = 85;

let numero = parseFloat(prompt("Ingrese un número: "));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {

    respuesta = 'El número está dentro del rango.';

} else {

    respuesta = 'El número está fuera del rango.';

}

console.log(respuesta);