// Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. Ejemplo:
// Ingrese números: 5 7 99 34 54 2 12

// El array invertido es: [12, 2, 54, 34, 99, 7, 5]


let numeros = prompt("Ingrese los números deseados");
let serieNumeros = numeros.split(" ");

let arrayinvertido=[];
let resultado="";

for (let i = -serieNumeros.length; i <= serieNumeros.length; i++) {
    resultado= serieNumeros.pop()
    arrayinvertido.push(resultado)
}

    alert(`Ingresaste: \n${numeros} \nTus números invertidos son:`+`\n`+ `${arrayinvertido}`)


