// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
// Ingrese números: 5 7 99 34 54 2 12
// El menor número es: 2

let numero = Number(prompt([`Ingrese los numeros`]));


for (let i=0; i < numero.length; i ++) {
    console.log(`El número menor es ${numero[i]}`);
   
}

alert(`El número menor es ${numero}`);