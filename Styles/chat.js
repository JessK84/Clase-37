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

let name = prompt`Ingrese los nombres de las participante`;
let userName = name.split("  ");
let mensaje = name  +" está conectada"
let firstName = name.indexOf(0);
let secondName = name.indexOf(1);


for (let i=0; i < userName.length; i ++) {
    userName = Number(name[i])
    if(userName === 1) {
        alert(mensaje)
    } else if (userName === 2) {
        alert(name + ` están conectados`)
    } else if (userName >= 3) {
        alert(name + ` y 1 usuario más están conectados`)
    }    
}

// alert(mensaje);
 // users += name;
    // console.log(userName);