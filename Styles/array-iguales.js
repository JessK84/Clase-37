// Crear un programa que permita ingresar dos listas de valores separados por espacio y muestre en un mensaje si las listas son iguales o no (mismos valores en mismo orden). Ejemplo:
// Ingrese valores de lista 1: 10 25 6 33 48 105
// Ingrese valores de lista 2: 10 24 6 33 48 105

// Las listas no son iguales



let elementos = prompt("Ingrese los elementos deseados");
let serieElementos = elementos.split(" ");
let elementosSegundo = prompt("Ingrese los elementos que vamos a comprar con el listado anterior");
let serieElementosSegundos = elementosSegundo.split(" ");

if (serieElementos.length == serieElementosSegundos.length) {
    alert("Los elementos de las listas son iguales")
} else if (serieElementos.length !== serieElementosSegundos.length) {
    alert("Los elementos de ambas listas no coinciden")
}