// Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con todos los animales menos los mosquitos y alacranes. Ejemplo:
// Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// Animales sin insectos: [🐱, 🐭, 🐶, 🦊]


let animales = prompt("Ingrese animales: mosquitos, alacranes, sapos, perros, gatos, tortugas y pájaros");
let serieAnimales = animales.split(" ");
let indexMosquitos = serieAnimales.indexOf("mosquitos");
let indexAlacranes = serieAnimales.indexOf("alacranes");

// for(let i=0; i<serieAnimales.length; i++){
serieAnimales.splice(indexMosquitos, 1)
serieAnimales.splice(indexAlacranes, 1)

alert(`Animales sin insectos: `+ serieAnimales)

