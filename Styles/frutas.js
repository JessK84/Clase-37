// Crear un programa que pida ingresar apple, peary peach y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:
// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑


let busqueda = prompt("Tiene: peras, manzanas y duraznos. Ingrese las frutas que quiere");
let totalFrutas = busqueda.split(" ");
let totalDuraznos="";
let totalManzanas="";
let totalPeras=0;
let resultado=0;
 


  for (let i=0; i < totalFrutas.length; i++){  
        if(totalFrutas[i] ==="peras"){
            resultado+=totalPeras;
        } else if (totalFrutas[i] ==="manzanas"){
          resultado++
          resultado+=totalManzanas;
      }   else if (totalFrutas[i] ==="duraznos") {
        resultado++
        resultado+=totalDuraznos;
  }
}


alert(`Hay ${resultado} de peras,
${totalManzanas} de manzanas 
y ${totalDuraznos} de duraznos`)


let frutas = prompt("Ingrese todas las manzanas, peras y duraznos que quiera");

let frutasLista = frutas.split(" ");
let manzanas = "";
let peras = "";
let duraznos = "";
let duracion = Number(frutasLista.length);


// for (let i = 0; i < duracion; i++) {
//     switch (frutasLista.pop()) {
//         case "manzana":
//             manzanas += " manzana";
//             break
//         case "pera":
//             peras += " pera";
//             break
//         case "durazno":
//             duraznos += " durazno";
//     }

// }

// manzanas = manzanas.split(" ");
// peras = peras.split(" ");
// duraznos = duraznos.split(" ");

// manzanas.shift();
// peras.shift();
// duraznos.shift();


// alert(`Hay ${manzanas.length} manzanas, ${peras.length} peras y ${duraznos.length} duraznos`);


