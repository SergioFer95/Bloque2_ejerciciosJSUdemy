"use strict";

// PASOS A SEGUIR:

// 1) Pide 6 números por pantalla al usuario e introducelos directamente en un array.

// YO LO HICE EN UN PRINCIPIO ASÍ:
// var number1 = parseInt(prompt("Paso 1 de 6: Introduce un número: ", 0)); 
// var number2 = parseInt(prompt("Paso 2 de 6: Introduce un número: ", 0));
// var number3 = parseInt(prompt("Paso 3 de 6: Introduce un número: ", 0));
// var number4 = parseInt(prompt("Paso 4 de 6: Introduce un número: ", 0));
// var number5 = parseInt(prompt("Paso 5 de 6: Introduce un número: ", 0));
// var number6 = parseInt(prompt("Paso 6 de 6: Introduce un número: ", 0));

// var numbersOfUsuary = [number1, number2, number3, number4, number5, number6];


// ESTA SERÍA LA FORMA MÁS LIMPIA DE HACERLO, TRAS CORREGIRLO:
var numbers = [];

for(var i = 0; i <= 5; i++){
    numbers[i] = parseInt(prompt("Paso " + i + " " + "de 5: Introduce un número: ", 0));
}
console.log(numbers);



// 2) Tienes que mostrar el array entero con todos sus elementos en el cuerpo de la página y en la consola.

// document.write("<h3>" + numbersOfUsuary + "</h3>");
// console.log(numbersOfUsuary);



// 3) También tenemos que sacar el array ordenado, mostrar los elementos ordenados

// YO LO HICE EN UN PRINCIPIO ASÍ:
// numbersOfUsuary.sort();
// document.write("<h3>" + numbersOfUsuary + "</h3>");
//console.log(numbersOfUsuary);

numbers.sort();



// 4) Invierte su orden y mostrarlo

// YO LO HICE EN UN PRINCIPIO ASÍ:
// numbersOfUsuary.reverse();
// document.write("<h3>" + numbersOfUsuary + "</h3>");
// console.log(numbersOfUsuary);

numbers.reverse();
document.write("<h3>" + numbers + "</h3>");



// 5) Mostrar cuántos elementos tiene el array


// YO LO HICE EN UN PRINCIPIO ASÍ:
// for(var i = 0; i < numbersOfUsuary.length; i++){
//     console.log(numbersOfUsuary[i]);
// }

document.write("<h1>El array tiene: " + numbers.length +  " elementos</h1>");

// numbers.forEach(elemento => elemento =>{
//     console.log(numbers[elemento]);
// });


// 6) Hacer una búsqueda de un valor introducido por el usuario y que nos diga si existe en el array, y que además, nos diga su índice, su posición:

// YO LO HICE EN UN PRINCIPIO ASÍ:
// var question = parseInt(prompt("Ahora introduce un valor y te diremos si se encuentra dentro del array y en qué posición (índice), en caso de que exista: ", 0));

// var search3 = numbersOfUsuary.includes(question);
// var search2 = numbersOfUsuary.findIndex(numb => numb == question);


// console.log(search2, search3);


var question = parseInt(prompt("Ahora introduce un valor y te diremos si se encuentra dentro del array y en qué posición (índice), en caso de que exista: ", 0));

var search3 = numbers.includes(question);
var search2 = numbers.findIndex(numb => numb == question);

if(search2 == true && search3 != -1){
    document.write("El número que has querido buscar es el: ", question + " y HA SIDO ENCONTRADO");

}else {
    document.write("El número que has querido buscar es el: ", question + " y NO EXISTE");
}



console.log(search2, search3);