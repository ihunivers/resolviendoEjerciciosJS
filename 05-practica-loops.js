/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("--------1-------")

for( let num = 1; num <= 20; num++ ){
    console.log( `${num}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("--------2-------")

for( let i = 1; i <= 100; i++ ){
    console.log(i)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("--------3-------")

for (let p = 0; p <= 50; p += 2) {
    console.log(p);
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("--------4-------")
let nombre = ["zelda","link","ganon", "daruk", "revali","urbosa", "mipha"]


for(let z = 0; z < nombre.length; z++){
    console.log(`${nombre[z]}`)
}



// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("---------5--------")
let texto = "La espada maestra es un barco con el que puedes navegar río arriba o abajo a través del tiempo."


for(let t = 0; t < texto.length; t++){
    console.log(`${t} = ${texto[t]}`)
}


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("---------6--------")
let numero = [12,34,5,6,78,9]
// let total
// let cont
// let multi

//aqui multiplico 2 cifras para degranar el ejercicio
// for(multi = 1;  multi <= 10; multi++){
//     for(cont = 0;  cont <= 10; cont++){
//         total = multi*cont
//         console.log(`${multi} * ${cont} = ${total} `)
//     }
// }
let recorr
for(multi = 1;  multi <= 10; multi++){
    for(recorr = 0; recorr < numero.length; recorr++){
       total = multi * `${numero[recorr]}`
       console.log(`${multi} * ${numero[recorr]} = ${total} `)
    }
}




// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("---------7--------")
let resultado
let enumera

for(let por = 0;  por <= 10; por++){
    
    resultado = 5 * por  
    console.log(`5 * ${por} = ${resultado}`)    
    
}


// 8. Usa un bucle para invertir una cadena de texto
console.log("---------8--------")
let cadena = "dale la vuelta"
let cadenadereves = "", contador = cadena.length -1

while(contador >= 0){
    cadenadereves = cadenadereves + cadena[contador]
    contador = contador - 1
    

}console.log(cadenadereves)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("---------9--------")
/*Fobonacci
La sucesión comienza con dos números naturales (dependiendo de la referencia, con 0 y 1 en ciertos casos, otras inician con 1 y 1) y a partir de estos, «cada término es la suma de los dos anteriores»

0,1,1,2,3,5,8,13..
*/

console.log("---------10--------")
function fibo(maximo){

    const numfibo = [0,1]

    for(let f = 2; f <= maximo; f++){
        numfibo.push(numfibo[f - 1] + numfibo[f-2])
        
    }

    return numfibo
}

const numerosmaximosarrojar = fibo(11)
console.log(numerosmaximosarrojar)



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log("---------11--------")
let ejer = [6,37,2,18,9,46,5,6,3,8,77,35,1,80]
let nuevofilt 

    for(let m = 0; m < ejer.length;m++){
        if (ejer[m] > 10){
            nuevofilt = ejer[m]

            console.log(nuevofilt)
        } 
    

}
