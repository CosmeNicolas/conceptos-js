//7.- escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt('ingrese un primer numero'));
let numero2 = parseInt(prompt('ingrese un segundo numero'));
let numero3 = parseInt(prompt('ingrese un tercer numero'));

if (numero1 > numero2 && numero1 > numero3) {
 document.write(`El numero 1 (${numero1}) es mayor que el número 2 (${numero2}) y 3 (${numero3})` );
} else if (numero3 > numero2){
  document.write(`El numero 3 (${numero3} es mayor que el numero 2 (${numero2}) y 1 (${numero1}))`);
} else {
  //pendiente codigo
}

