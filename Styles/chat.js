// Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
// Para una usuaria, debe mostrar: nombre usuaria + está conectada
// Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
// Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas

// Ejemplo:
// Ingrese nombres de usuarias: Ada
// Ada está conectada
// Ingrese nombres de usuarias: Ada Grace
// Ada y Grace están conectadas
// Ingrese nombres de usuarias: Ada Grace Marie
// Ada, Grace y 1 persona(s) más están conectadas

let name = prompt("Ingrese los nombres de las participante");
let userName = name.split(" ");
let mensaje = name +" está conectada";
let mensaje2 = name + " están conectados";

if (userName.length == 1) {
    alert(mensaje)
}  else if (userName.length ==2) {
    alert(mensaje2)
} else if (userName.length ==3) {
    let firstName = userName.shift();
    let secondName = userName.shift();
    alert(`${firstName}, ${secondName} y 1 usuario más están conectados`)
} else {
    let firstName = userName.shift();
    let secondName = userName.shift();
    alert(`${firstName}, ${secondName} y más usuarios están conectados`)
}

