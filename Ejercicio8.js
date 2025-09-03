// Ejercicio 8: 
// Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
// Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
// (Investiga sobre los triángulos para determinar la formula) 

const prompt = require ('prompt-sync')();

let ladoAB = parseInt(prompt ('Ingrese la medida del lado AB: '));

let ladoBC = parseInt(prompt('Ingrese la medida del lado BC: '));

let ladoCA = parseInt(prompt('Ingrese la medida del lado CA: '));

if (ladoAB === ladoBC && ladoAB === ladoCA){
    console.log('Su triángulo es equilátero.');
}
else if (ladoAB !== ladoBC && ladoAB !== ladoCA && ladoBC !== ladoCA){
    console.log('Su triángulo es escaleno.');
}
else {console.log('Su triángulo es isósceles.')}