/*Operadores Racionales
if(condicion logica){
  codigo a ejecutar si se cumple la condicion lógica
}
*/

//7- escriba un programa que pida 3 números y escriba en la pantalla el mayor de los 3.

let numero1 = parseInt(prompt('ingrese un primer numero'));
let numero2 = parseInt(prompt('ingrese un segundo numero'));
//let numero3 = parseInt(prompt('ingrese un tercer numero'));

if(numero1 > numero2){
  console.log('El numero '+numero1 + ' es mayor que el numero' + numero2);
} else {
  if(numero2 > numero1) {
    console.log('El numero '+numero2 + ' es mayor que el numero' + numero1);
  }else{
    console.log('Los numeros ingresados son iguales('+ numero2+ ')');
  }
}