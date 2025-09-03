//Ejercicio 4:  
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require ('prompt-sync')();

let nombreUsuario = (prompt('Ingrese su nombre: '));
const nombrePropio = 'Celeste'

if(nombreUsuario.trim().toLowerCase() === nombrePropio)
    console.log ('Nuestros nombres son iguales');
else {
    console.log ('Nuestros nombres no son iguales');
}