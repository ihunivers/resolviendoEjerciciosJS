/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades
console.log("-----1-----")

let consola = {
    
    marca: "Nintendo",
    modelo: "nintendo switch",
    año: 2017
}

// 2. Accede y muestra su valor
console.log("-----2-----")

console.log(consola.marca)
console.log(consola["modelo"])
console.log(consola.año)



// 3. Agrega una nueva propiedad
console.log("-----3-----")

consola.mandos = "dos joicon"
console.log(consola)

// 4. Elimina una de las 3 primeras propiedades
console.log("-----4-----")

delete consola.marca
console.log(consola)


// 5. Agrega una función e invócala
console.log("-----5-----")

consola.joicon = function (){
    console.log(`Agregando funcionalidad a los control de la ${this.modelo}, en proceso...`)
}

console.log(consola)
consola.joicon()

// 6. Itera las propiedades del objeto
console.log("-----6-----")

for(let key in consola){
    console.log(key + ": " + consola[key])
}

// 7. Crea un objeto anidado
console.log("-----7-----")


let computador = {
    marca: "apple",
    año: 2017,
    botonOnOff: function () {
        console.log("La PC esta encendida/apagada.")
    },
    pantalla2: {
        nombre: "pantalla secundaria",
        tamañoPulgadas: 3.5,
        proyector: function () {
            console.log(`La ${this.nombre} sincronizada con la primera pantalla.`)
        }
    }
}

console.log(computador)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("-----8-----")

for(let llave in computador){
console.log(llave + ":" + computador[llave])
}

console.log(computador.marca)
console.log(computador["modelo"])
console.log(computador.año)
computador.botonOnOff()
console.log(computador.pantalla2)
console.log(computador.pantalla2.nombre)
computador.pantalla2.proyector()

// 9. Comprueba si los dos objetos creados son iguales

console.log("-----9-----")


console.log(computador == consola)
console.log(computador === consola)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(computador.año === consola.año)
console.log(computador.año == consola.año)