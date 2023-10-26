/*Bucles , son estructuras de repeticion como for , while , do while*/

//while - la condicion logica se tiene q cumplir para q funcione
/*
while(condicion logica){
  aqui va todo el codigo que quiero repetir varias veces
  agregar un codigo para cambiar la condicion logica 
}
*/


/*let renglon = 1; 

while(renglon <= 10){
  document.write(`<p>renglon numero ${renglon}</p>`);
  renglon++; //renglon = renglon + 1;
}
*/


//do while - hacer mientras , el codigo se ejecuta al menos una vez 
/*let renglon = 1; 

do{

  document.write(`<p>renglon numero ${renglon}</p>`);
  renglon++;

}while(renglon <=10)
*/


//for - si la condicion logica no se cumple , no se ejecuta


//for(inicializar una variable ;condicion logica ;incrementar o decrementar una variables)

for(let contador=5; contador > 0 ; contador--){
  document.write(`<p>Cuenta regresiva ${contador}</p>`)
}

