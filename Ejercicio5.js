//Ejercicio 5:
//Escribe un programa que pida al usuario que ingrese tres números y determine cuál es el mayor de los tres.

const prompt = require ('prompt-sync')();

let primerNumero = parseInt(prompt('Ingrese el primer número: '));

let segundoNumero = parseInt(prompt('Ingrese el segundo número: '));

let tercerNumero = parseInt(prompt('Ingrese el tercer número: '));

if(primerNumero > segundoNumero && primerNumero > tercerNumero){
    console.log('El primer número es el mayor');
}

else if (segundoNumero > primerNumero && segundoNumero > tercerNumero){
    console.log('El segundo número es el mayor');
}

else if (tercerNumero > primerNumero && tercerNumero > segundoNumero){
    console.log('El tercer número es el mayor');
}
