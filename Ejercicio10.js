//Ejercicio 10:  
//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error. 

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingrese el numero del 1 al 7: "));

if (numero <= 1 || numero >= 7){
    console.log("Usted debe ingresar un numero del 1 al 7")
}
if(numero === 1){
    console.log("El día de la semana es Lunes")
}
else if(numero === 2){
    console.log("El día de la semana es Martes")
}
else if( numero === 3){
    console.log("El día de la semana es Miércoles")
}
else if( numero === 4){
    console.log("El día de la semana es Jueves")
}
else if(numero === 5){
    console.log("El día de la semana es Viernes")
}
else if(numero === 6){
    console.log("El día de la semana es Sábado")
}
else if(numero === 7){
    console.log("El día de la semana es Domingo")
}