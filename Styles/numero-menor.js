// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
// Ingrese números: 5 7 99 34 54 2 12
// El menor número es: 2

let ingreso = prompt(`Ingrese los numeros`);
let arrayNumber = ingreso.split(" ");
let numeroMenor = 1;
let numeroMayor = "";

for (let i=0; i < arrayNumber.length; i ++) {
    numero = Number(arrayNumber[i]);
    console.log(numero);
   
}

// alert(`El número menor es ${numero}`);