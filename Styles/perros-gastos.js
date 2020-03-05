// Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:
// Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// Resultado: 🐶🐶🐶🐶🐱🐱🐱


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