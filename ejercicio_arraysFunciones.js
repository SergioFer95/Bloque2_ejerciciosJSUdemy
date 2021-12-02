"use strict";

// PASOS A SEGUIR:

// 1) Pide 6 números por pantalla al usuario e introducelos directamente en un array.

var number1 = parseInt(prompt("Paso 1 de 6: Introduce un número: ", 0)); 
var number2 = parseInt(prompt("Paso 2 de 6: Introduce un número: ", 0));
var number3 = parseInt(prompt("Paso 3 de 6: Introduce un número: ", 0));
var number4 = parseInt(prompt("Paso 4 de 6: Introduce un número: ", 0));
var number5 = parseInt(prompt("Paso 5 de 6: Introduce un número: ", 0));
var number6 = parseInt(prompt("Paso 6 de 6: Introduce un número: ", 0));

var numbersOfUsuary = [number1, number2, number3, number4, number5, number6];


// 2) Tiene que mostrar el array entero con todos sus elementos en el cuerpo de la página y en la consola.

// document.write("<h3>" + numbersOfUsuary + "</h3>");
// console.log(numbersOfUsuary);


// 3) También tenemos que sacar el array ordenado, mostrar los elementos ordenados

numbersOfUsuary.sort();
// document.write("<h3>" + numbersOfUsuary + "</h3>");
//console.log(numbersOfUsuary);

// 4) Invierte su orden y mostrarlo

numbersOfUsuary.reverse();
document.write("<h3>" + numbersOfUsuary + "</h3>");
console.log(numbersOfUsuary);

// 5) Mostrar cuántos elementos tiene el array

for(var i = 0; i < numbersOfUsuary.length; i++){
    console.log(numbersOfUsuary[i]);
}

// 6) Hacer una búsqueda de un valor introducido por el usuario y que nos diga si existe en el array, y que además, nos diga su índice, su posición: