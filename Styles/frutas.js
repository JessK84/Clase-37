// Crear un programa que pida ingresar apple, peary peach y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:
// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑


let frutas = prompt("Tiene: peras, manzanas y duraznos. Ingrese las frutas que quiere");
let totalFrutas = frutas.split(" ");
let peras =totalFrutas.indexOf("pera");
let manzanas= totalFrutas.indexOf("manzana");
let duraznos=totalFrutas.indexOf("durazno");
let resultadoPeras=0;
let resultadoManzanas =0;
let resultadoDuraznos =0;

// let numeros = prompt([`Ingrese los numeros`]);
// let listadoNumeros = numeros.split (" ");
// let numero =0;
// let resultado =0;
 
for (let i= 0; i <totalFrutas.length; i ++) {
    if (totalFrutas[i]) {
        
    } 
}



let animales = prompt("Ingrese perros y gatos");
let serieAnimales = animales.split(" ");
const orden = [];


// for (let i=0; i < serieAnimales.length -1; i ++) { // así lo hizo Matías, no yo. Usé mi forma.

for (let i=0; i < serieAnimales.length; i ++) {
    if(serieAnimales[i] === "perros"){
        orden.push("perro");
      }
    }
    for(let i = 0 ; i <= serieAnimales.length; i++){
      if(serieAnimales[i] === "gatos"){
        orden.push("gatos");
      }
}

alert(orden)
console.log(orden);
alert(`El total de peras: ${resultadoPeras}, \n duraznos ${resultadoDuraznos} y manzanas ${resultadoManzanas}`);


