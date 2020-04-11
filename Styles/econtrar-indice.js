// Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:
// Ingrese valores: 5 7 12 34 54 2 12
// Ingrese valor a buscar: 12

// El valor 12 se encuentra en el índice 6


let value = prompt(`Ingrese los valores deseados`);
let valueList = value.split (" ");
let searchNumber = Number(prompt(`Ingrese el valor que desea encontrar`));



for (let i= 0; i <valueList.length; i ++) {
    index = Number(valueList[i]);
   if (index === searchNumber) {
    alert(`El número ${searchNumber} se encuentra en el índice ${i}`);
    }   
}




