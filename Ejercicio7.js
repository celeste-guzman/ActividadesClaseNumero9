//Ejercicio 7
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
//Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) 

const prompt = require('prompt-sync')();

let pesoKilos =parseInt(prompt('Ingrese su peso en kilogramos: '));

const pesoLibras= 2.20462

const pesoFinal = pesoKilos * pesoLibras

    console.log(`Su peso el libras es: ${pesoFinal.toFixed(2)} `);