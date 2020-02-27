console.log('asd'.indexOf("s",0)) // este es el parámetro por defecto
                                   // se retornara 1(posición de "s")

console.log('asd'.indexOf("s",1)) // se comienza en la misma posición de "s"
                                  //   por tanto retornara 1

console.log('asd'.indexOf("s",2)) //en este caso se comenzara en la letra "d"
                                  //por lo que no se analizara "s" y retornara -1

console.log('asd'.indexOf("s",4)) //en el este caso de igual manera retornara -1 dado que estaría buscando en valores fuera de rango de la cadena

console.log("asd".indexOf("",4))  //en este caso al intentar realizar la búsqueda con un indice 
                    // mayor a la cantidad de elementos y como criterio de búsqueda ""
                     // se retornara 3 equivalente a la propiedad .length de la cadena
console.log('asd'.length) //3