// 1. Escribe un comentario en una línea

//Esto es un comentario en una linea


// 2. Escribe un comentario en varias líneas

/*
Esto es 
un comentario
en varias lineas
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let id = Symbol(75656)
let nombre = "Yik"
let animal = "Gato"
let edad = 3
let raza = null //objeto?
let color = "Negro"
let sexo = "macho"
let peso = 2.5
let salida = true

// 4. Imprime por consola el valor de todas las variables

console.log(id)
console.log(nombre)
console.log(animal)
console.log(edad)
console.log(raza)
console.log(color)
console.log(sexo)
console.log(salida)

// 5. Imprime por consola el tipo de todas las variables

console.log (typeof(id))
console.log (typeof(nombre))
console.log (typeof(animal))
console.log (typeof(edad))
console.log (typeof(raza))
console.log (typeof(color))
console.log (typeof(sexo))
console.log (typeof(salida))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

id = Symbol(9876)
nombre = "Won"
animal = "perro"
edad = 4
raza = "Labrador"
color = "cafe"
sexo = "hembra"
peso = 9
salida = false

console.log(id)
console.log(nombre)
console.log(animal)
console.log(edad)
console.log(raza)
console.log(color)
console.log(sexo)
console.log(salida)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

id = 9876
nombre = null //objeto
animal = undefined //repasa diferencia null y undefined
edad = "4"
raza = 7
color = BigInt(98098080980809)
sexo = 2
peso = "nueve"
salida = false
console.log (typeof(id))
console.log (typeof(nombre))
console.log (typeof(animal))
console.log (typeof(edad))
console.log (typeof(raza))
console.log (typeof(color))
console.log (typeof(sexo))
console.log (typeof(salida))

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const id1 = Symbol(98798)
console.log (typeof(id1))


// 9. A continuación, modifica los valores de las constantes

/*
id1 = Symbol(11111)
console.log (typeof(id1))
es una constante no cambia
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

/*
id1 = Symbol(11111)
console.log (typeof(id1))
es una constante no cambia
*/


