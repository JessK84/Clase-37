

// Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. Ejemplo:
// "planta flor flor planta oruga planta flor planta planta calavera"




// const jardin = "planta flor flor planta oruga planta flor planta planta calavera flor flor"
// const miJardin = jardin.split(" ");
// const indexOruga = 3;
// const indexVeneno = 8;
// let plantas =[];

// for (let i=0; i < indexOruga; i ++) {
//     plantas.push(miJardin[i])
// }


// for (let i= indexVeneno +1; i < miJardin.length; i ++) {
//     plantas.push(miJardin[1])
// }
// console.log(miJardin)
// console.log(plantas)

//OTRA MANERA DE RESOLVER EL EJERCICIO DE MANERA DINÁMICA, es decir, quitando o agregando elementos.
// const jardin = "planta flor flor planta oruga planta flor flor planta planta calavera flor flor"
// const miJardin = jardin.split(" ");
// let indexOruga = 0;
// let indexVeneno = 0;
// let plantas =[];

// for (let i=0; i < miJardin.length; i ++) {
//     if(miJardin[i]=== "oruga") {
//     indexOruga = i;
//     }else if (miJardin [i] ==="calavera") {
//     indexVeneno=i;
//     }
// }
// for (let i=0; i < indexOruga; i ++) {
//     plantas.push(miJardin[i])
// }


// for (let i= indexVeneno +1; i < miJardin.length; i ++) {
//     plantas.push(miJardin[1])
// }
// console.log(miJardin)
// console.log(plantas)

//OTRA MANERA con indexOf
const jardin = "planta flor flor planta oruga planta flor flor planta planta calavera flor flor";
const miJardin = jardin.split(" ");
let indexOruga = miJardin.indexOf("oruga");
let indexVeneno = miJardin.indexOf("calavera");
let plantas =[];

// for (let i=0; i < miJardin.length; i ++) {
//     if(miJardin[i]=== "oruga") {
//     indexOruga = i;
//     }else if (miJardin [i] ==="calavera") {
//     indexVeneno=i;
//     }
// }
for (let i=0; i < miJardin.length; i ++) {
   if (i< indexOruga || i > indexVeneno) {
       plantas.push(miJardin[i])
   }
}


console.log(miJardin)
console.log(plantas)
