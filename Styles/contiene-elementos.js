// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:
// Ingrese valores: 5 7 99 34 54 2 12
// Ingrese valor a buscar: 54

// El valor 54 se encuentra entre los valores originales


let value = prompt([`Ingrese los valores deseados`]);
let valueList = value.split (" ");
let searchNumber = Number(prompt(`Ingrese el valor que desea encontrar`));
let result = 0;
let mensaje = "El número elegido no se encuentra entre los valores"  + valueList;

 


for (let i= 0; i <valueList.length; i ++) {
    result = Number(valueList[i]);
   if (result == searchNumber) {
    mensaje = alert(`El número ${searchNumber} se encuentra entre los valores a encontrar`);
    } 
}

alert(mensaje) // el problema es que si el número se encuentra luego sale un error que me dice undefined


