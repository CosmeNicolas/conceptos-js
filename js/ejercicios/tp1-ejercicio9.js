//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)


let frase = prompt('ingrese una frase');


for(let vocales = 0; vocales < frase.length; vocales++){
  if(frase.charAt(vocales) === 'a'|| frase.charAt(vocales) === 'e'|| frase.charAt(vocales) === 'i'|| frase.charAt(vocales) === 'o'|| frase.charAt(vocales) === 'u'){
    console.log(frase[vocales])
    document.writeln(frase[vocales])
  }
} 