// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
// Ingrese números: 5 7 99 34 54 2 12
// El menor número es: 2

let ingreso = prompt(`Ingrese los números`);
ingreso = ingreso.split(" ");
let  numeroMenor =99999999;// había puesto 0, pero en ese caso, 0 siempre iba a ser el menor, asi que reemplacé por un número muy alto para que lo puedan comparar. 


for (let i=0; i < ingreso.length; i ++) {
    let numero = Number(ingreso[i]);  
    if(numero<numeroMenor) {
    numeroMenor=numero;
    } 
}
alert(`El número menor es: ${numeroMenor}. Soy muy genia!`); 