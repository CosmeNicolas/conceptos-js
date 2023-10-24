// Esto es un comentario de una única linea


/*es es un comentario 
de 
multiples lineas */

// declarar una variable (var - let - const)
/* 
var: alamcena cosas "datos de manera temporaria"
let : podemos cambiar su valor 
const : no deja cambiar el valor 
*/

/* ECMAscript - nombre tecnico de Js   */
let anioActual = 2023;

const url = 'https://universe.rollingcodeschool.com/login'

//Mostrar mensajes 
console.log('este es un mensaje en cosola');
console.log(url);
console.log(anioActual);
console.log('Año: '+ (anioActual + 2));

//modficar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

// url = 'otro valor';
console.log(url);


document.write('<h1>Prueba de <br>Titulo</h1>');
document.write('año: '+ anioActual + '<br>');
document.write('año: '+ anioActual);

//ventanas emergentes 
//alert('Esto es una prueba de alerta');

//let color = prompt('ingrese un color'); tiene un input en su alert
//console.log(color);

//solicitar al usuario  un numero, y al numero indicado por el usuario multiplicar 15

let numeroSeleccionado = parseInt(prompt('ingrese un numero de 1 a 100'));

console.log(numeroSeleccionado);
console.log(numeroSeleccionado + 15);

//parseInt('10') devuelve el numero transformado a entero
//parseFloat('10.5')devuelve 10,5



