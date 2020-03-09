// Crear un programa que pida ingresar números separados por espacios y luego pregunte por cuánto se desea multiplicar cada número. El programa debe devolver un mensaje con un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:
// Ingrese números: 5 7 15 22 40
// Ingrese multiplicador: 2

// El array resultante es: [10, 14, 30, 44, 80]


let numeros = prompt("Ingrese números");
let serieNumeros =numeros.split(" ");
let multiplicador =Number(prompt("Ingrese el número por el que desea multiplicar todo"));

let convertirNumeros="";
// 

for (let i= 0; i < serieNumeros.length; i++) {
     convertirNumeros= Number(serieNumeros[i]);
     serieNumeros[i] = convertirNumeros *multiplicador; // [i] porque tengo que multiplicar todo el array
}


alert(serieNumeros)

