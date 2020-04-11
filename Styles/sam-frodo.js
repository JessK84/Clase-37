// Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
// Ingresar nombres: Sam Frodo Legolas
// Sam y Frodo están juntos, ¡Frodo está a salvo!

// Ingresar nombres: Sam Orco Frodo
// Sam y Frodo están separados, ¡Frodo está en peligro!


let value = prompt([`¿Están Frodo y Sam juntos? Ingrese los nombres de los personajes y te diré`]);
let valueList = value.split (" ");
let sam = valueList.indexOf("sam");
let frodo = valueList.indexOf("frodo");
let mensajeJuntos = "Frodo y Sam están juntos, ¡Frodo está a salvo!" ;
let mensajeSeparados = "Frodo y Sam están separados, ¡Frodo está en peligro!" ;

if (sam === (frodo -1)) {
    alert(mensajeJuntos)
} else if (sam === (frodo +1)) {
    alert(mensajeJuntos)
} else {
    alert(mensajeSeparados)
}

