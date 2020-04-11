// Crear un programa que permita ingresar el nombre de dos jugadoras y dos listas con los puntajes de cada ronda de un juego separados por espacio. Primero debe preguntarse el nombre de la jugadora 1, luego sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes. El programa debe comparar los valores de las listas uno a uno (el primero con el primero, el segundo con el segundo) sumando un punto a la jugadora que tenga mayor puntaje en la ronda. Al finalizar, mostrar quién gano y los puntajes finales. Ejemplo:
// Ingrese nombre jugadora 1: Ada
// Ingrese puntajes de Ada: 5 6 3 1 8

// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: 8 2 4 2 3

// Resultado: 2 (Ada) vs 3 (Grace)
// Ganadora: Grace

let playerName1 = prompt(`Ingrese el nombre de la jugadora 1`)
let player1= Number(prompt(`Ingrese puntaje`))
player1.split(" ")
let playerName2 = prompt(`Ingrese el nombre de la jugadora 2`)
let player2= Number(prompt(`Ingrese puntaje`))
player2.split(" ")

let result ="";
let pointPlayer1=1;
let pointPlayer2=1;
// const vueltas=5,
let mensaje2="";



    if(player1[0]>player2[0]){
        pointPlayer1++
        // result+=pointPlayer1
    } 
    
    
//     else if (numero1[i] < numero2[i]){
//         pointPlayer2++
//     } else {
//         // pointPlayer1="";
//         // pointPlayer2="";
//     }
//     let result1=pointPlayer1
// let result2 = pointPlayer2
//     if(numero1<numero2){
//          mensaje2=(`Resultado: ${result1} (${playerName1}) vs ${result2} (${playerName2})\n Ganadora: Grace`)
//     } else {
//         mensaje2=(`Resultado: ${result1} (${playerName1}) vs ${result2} (${playerName2})\n Ganadora: Grace`)
//     }
    
// }

// alert(mensaje2)




