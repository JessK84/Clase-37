// Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:
// Ingrese nombres: Ada Greta Grace

// ¡Hola Ada!
// ¡Hola Greta!
// ¡Hola Grace!
nombres = prompt([`Ingrese los nombres de las participante`]);
nombres = nombres.split( ` ` );




for (let i=0; i < nombres.length; i ++) {
    console.log(`¡Hola ${nombres[i]}!`);
    alert(`¡Hola ${nombres[i]}!`);
}

