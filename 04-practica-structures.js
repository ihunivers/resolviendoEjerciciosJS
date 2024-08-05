/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales
console.log("-------------1-------------")
let animales = ["tigre","elefante","tortuga","delfin", "jirafa"]
console.log(animales)


// 2. Añade dos más. Uno al principio y otro al final

console.log("------------2--------------")
animales.push("cocodrilo", "hipopotamo")
console.log(animales)
console.log(typeof(animales))

// 3. Elimina el que se encuentra en tercera posición

console.log("------------3--------------")
let eliminar = animales.splice(2, 1)
console.log(eliminar)
console.log(animales)


// 4. Crea un set que almacene cinco libros

console.log("------------4--------------")
let setlibros = new Set()
setlibros = new Set(["mahabharata", "el dios ahumado", "zhuan falum","diccionario de biodescodificacion","maestro de la programación"])
console.log(typeof(setlibros))

// 5. Añade dos más. Uno de ellos repetido
console.log("------------5--------------")
setlibros.add("maestro en dibujo")
setlibros.add("maestro en musica")
setlibros.add("maestro en musica") 
//en set los datos no se repiten



console.log(setlibros)

// 6. Elimina uno concreto a tu elección
console.log("------------6--------------")
setlibros.delete("maestro de la programación")
console.log(setlibros)


// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("------------7--------------")
let mapmes = new Map([

    [ 1 , "enero"],
    [ 2 , "febrbero"],
    [ 3 , "marzo"],
    [ 4 , "abril"],
    [ 5, "mayo" ],
    [ 6, "junio"],
    [ 7, "julio"],
    [ 8, "agosto"],
    [ 9, "septiembre"],
    [ 10, "octubre"],
    [ 11, "noviembre"],
    [ 12, "diciembre"]

])

console.log(typeof(mapmes))
console.log(mapmes)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("------------8--------------")
console.log(mapmes.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("------------9--------------")
mapmes.set(13 , ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"] )
console.log(mapmes)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("------------10--------------")
let colorarray = ["rojo","verde","azul","gris","blanco","negro"]
console.log(colorarray)

let nuevoset = new Set(colorarray)
console.log(nuevoset)
console.log(typeof(nuevoset))


mapmes.set(14, nuevoset)
console.log(mapmes)

//opcional convertirlo en array
let nuevoarray = Array.from(nuevoset)
console.log(nuevoarray)
console.log(typeof(nuevoarray))

