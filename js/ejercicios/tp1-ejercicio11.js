// 11.- añadir al ejercicio anterior que nos diga por cual de los cuatro numeros es divisible (hay que decir todos los numeros por los que es divisible (ej, ek numero 210 es divisible por 5,2,3 y 7)).

const numero = parseInt(prompt('Ingrese un numero'));

if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 
    && numero % 7 !== 0) {
  document.write('El numero ingresado no es divisible por 2 , ni por 3 , ni por 5 ni por 7')
} else {
  if(numero % 2 === 0){
    document.write('El numero es divisible por 2')
  }
  if(numero % 3 === 0){
    document.write('El numero es divisible en 3')
  }
  if(numero % 5 === 0){
    document.write('El numero es divisible en 5')
  }
  if(numero % 7 === 0){
    document.write('El numero es divisible en 7')
  }
}