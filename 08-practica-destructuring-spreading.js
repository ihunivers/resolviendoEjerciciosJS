/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("-----1------")
let array = ["cama","ventilador","lampara","mesa","silla"]
let [cosa1, cosa2, cosa3, cosa4,cosa5] = array
console.log(cosa1, cosa2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("-----2------")
let [,,,,,cosa6="cosas"] = array 
console.log(cosa6)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("-----3------")
let coche = {
    marca:"audi",
    modelo:"A1" ,
    version: "A1 allstreet",
    desplazar :{
        enciende: "boton On/Off",
        acelera: "pedal uno",
        frena: "pedal dos"

    },

}

let {marca, modelo} = coche
console.log(marca,modelo)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("-----4------")
console.log(coche)
let {version,desplazar} = coche
console.log(version,desplazar)

let {marca:marca1, modelo:modelo1, version:version1} = coche
console.log(marca1, modelo1, version1 )


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("-----5------")
let {desplazar : {enciende : desplaOn, acelera:arranca}} = coche
console.log(desplaOn)
console.log(arranca)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("-----6------")
let array2 = [...array,"pescado Bonito","pescado caballa"]
console.log(array2)
// 7. Usa propagación para crear una copia de un array
console.log("-----7------")
let array3copy = [...array2]
console.log(array3copy)
// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("-----8------")
let vehiculo = {...coche, tipo:"terrestre"}
console.log(vehiculo)

// 9. Usa propagación para crear una copia de un objeto
console.log("-----9------")
let cocheCop = {...coche}
console.log(cocheCop)

// 10. Combina desestructuración y propagación

let fruta = ["platano amarillo","mango","piña","fresa"]
let pescados = ["bonito","caballa","sardina","atun"]

let [fruta1,
    fruta2,
    fruta3,
    fruta4,
    pescado1,
    pescado2,
    pescado3,
    pescado4] = [...fruta,...pescados]

    console.log(fruta1,fruta2,fruta3,fruta4,
        pescado1,pescado2,pescado3,pescado4)