// Crear un programa que permita ingresar una lista de palabras separadas por espacios y que pregunta a cuántos caracteres se desea recortar las palabras. El programa debe devolver una lista con las palabras recortadas en esa cantidad de caracteres. Ejemplo:
// Ingrese palabras: elefante sociedad chocolate avion america
// Ingrese cantidad de caracteres permitidos: 4

// Las palabras recortadas son: elef soci choc avion amer


let words = prompt(`Ingrese algunas palabras`).split(" ");
let index =Number(prompt(`¿Cuántos caracteres desea recortar?`))
let result="";


for (let i = 0; i < words.length; i++) { 
    let cutLetters=words[i].slice(0, -index);
    result+=` `+`\n` + `-`+ cutLetters;
}

alert(`Tu nuevas palabras:`+ result)