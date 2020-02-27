// Suma de todos los números

// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:

// Ingrese números: 5 7 10 12 24
// La suma de todos los números es: 58


let numeros = prompt([`Ingrese los numeros`]);
let listadoNumeros = numeros.split (" ");
let numero =0;
let resultado =0;
 
for (let i= 0; i <listadoNumeros.length; i ++) {
    numero = Number(listadoNumeros[i]);
    resultado += numero;  
}

alert(`El total es ${resultado}`);

