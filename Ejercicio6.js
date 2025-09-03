//Ejercicio 6: 
// Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
// Muestra un mensaje personalizado según el caso.

const prompt = require ('prompt-sync')();

let edadUsuario = parseInt(prompt('Ingrese su edad: '));

if (edadUsuario < 18){
    console.log('Usted es menor de edad');
}
else if(edadUsuario => 18){
    console.log('Usted es mayor de edad');
}
    