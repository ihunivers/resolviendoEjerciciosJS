/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades
console.log("-----1,2,4-----")

class Pedido {
    constructor(producto,precio){
        this.product = producto
        this.price = precio
        
    }

// 2. Añade un método a la clase que utilice las propiedades

    promocion(){
        console.log(`Hoy tienes descuento en ${this.product}`)
    }
// 4. Añade un método estático a la primera clase
    static mensajebienvenida(){
        console.log("Bienvenido Surtitienda")
    }
}

    
// 3. Muestra los valores de las propiedades e invoca a la función
console.log("-------3--------")


let pedido1 = new Pedido("gazpacho",1.79)
let pedido2 = new Pedido("huevos",2.19)
let pedido3 = new Pedido("cilantro",1.79)

console.log(pedido1)
console.log(pedido3)
pedido1.promocion()


// 5. Haz uso del método estático
console.log("-------5--------")
Pedido.mensajebienvenida()
// 6. Crea una clase que haga uso de herencia
console.log("-------6--------")
class Centroacuatico{
    constructor(entrada){
        this.entradasimple = entrada
    }
    buceo(){
        console.log("Disfruta del buceo, atento a instructor a los principiantes")
    }
    surf(){
        console.log("Disfruta del surf, atento a instructor a los principiantes")
    }
    restaurante(){
        console.log("Bienvenido al comedor CentroAcuo")
    }
    atracionesPiscinas(){
        console.log("Disfruta de todas las atracciones de las piscinas")
    }
    spa(){
        console.log("Centro de relask spa.CentroAcuo")
    }
}

class Premium extends Centroacuatico {

premium(){
    console.log("Por ser PREMIUM, TE SALTAS LA FILA DE ESPERA, presenta tu manilla de id")
}

}
let usuario1 = new Premium(1)
usuario1.premium()
usuario1.surf()
usuario1.buceo()
usuario1.atracionesPiscinas()
usuario1.restaurante()
usuario1.spa()


let usuario2 = new Centroacuatico(2)

usuario2.surf()
usuario2.buceo()
usuario2.atracionesPiscinas()
usuario2.restaurante()
usuario2.spa()


let usuario3 = new Premium(3)
usuario3.premium()
usuario3.surf()
usuario3.buceo()
usuario3.atracionesPiscinas()
usuario3.restaurante()
usuario3.spa()


// 7. Crea una clase que haga uso de getters y setters
console.log("-------7--------")

class Hospital {


    constructor(name, age, numberHistory) {
        this.nombre = name
        this.edad = age
        this.numeroHistoria = numberHistory
    }

    get name() {
        return this.nombre
    }

    
    set numberHistory(numberHistory) {
        this.numeroHistoria = numberHistory
    }

}

let persona1 = new Hospital("Beto", 35, 12345)

console.log(persona1)
console.log(persona1.nombre)
console.log(persona1.numeroHistoria)


// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log("-------8--------")
class GetSetHospital {

    #nombre
    #edad
    #numeroHistoria

    constructor(name, age, numberHistory) {
        this.#nombre = name
        this.#edad = age
        this.#numeroHistoria = numberHistory
    }

    get name() {
        return this.#nombre
    }

    
    set numberHistory(numberHistory) {
        this.#numeroHistoria = numberHistory
    }

    // get numberHistory() {
    //     return this.#numeroHistoria
    // }Para ver si fue cambiado el numero.

}

let persona2 = new GetSetHospital("Beto", 35, 12345)

console.log(persona2)
console.log(persona2.name)

persona2.numberHistory = 67890
// console.log(persona2.numberHistory)solo funciona si tengo el get


// 9. Utiliza los get y set y muestra sus valores
console.log("-------9--------")

console.log(persona1.nombre)
console.log(persona1.numeroHistoria)
console.log(persona2)
console.log(persona2.name)


// 10. Sobrescribe un método de una clase que utilice herencia 
console.log("-------10--------")
class Cumpleaños extends Premium{

    constructor(entrada,dni,fecha){
        super(entrada)
        this.dni = dni
        this.fecha = fecha
    }
    celebracion(){
        console.log("En tu cumple tienes Entrada premium, tarta y helado gratis")
    }
}

let usuario4 = new Cumpleaños("dni567563423","julio20")
usuario4.celebracion()
usuario4.premium()
usuario4.surf()
usuario4.buceo()
usuario4.atracionesPiscinas()
usuario4.restaurante()
usuario4.spa()
