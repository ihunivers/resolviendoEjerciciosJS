/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

let a = 8
console.log(a)

let b = 3
console.log(b)

let suma = a + b
console.log(suma)
let resta = a - b
console.log(resta)
let multiplica = a * b
console.log(multiplica)
let divide = a / b
console.log(divide)
let modulo = a % b
console.log(modulo)
let exponencial = a ** b
console.log(exponencial)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let varAsig = 10
console.log(varAsig)
varAsig += 55
console.log(varAsig)
varAsig -= 5
console.log(varAsig)
varAsig *= 40
console.log(varAsig)
varAsig /= 6
console.log(varAsig)
varAsig %= 20
console.log(varAsig)
varAsig **= 9
console.log(varAsig)

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(a != b,  "No es 8 igual que 3")
console.log(a > varAsig, "es 8 mayor que 0")
console.log(a >= b, "es 8 mayor o igual que 3")
console.log(a >= varAsig, "es  8  mayor o igual que 0var..")
console.log(0 == varAsig, "es 0 igual a  0var..")
console.log(0 === varAsig, "es el valor/tipode 0 igual a 0var..")


console.log("0" == varAsig, "es 0(caracter) igual a 0(numero)")

console.log(0 == "", "es 0 igual a '' " )


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("0" === varAsig, "es valor/tipo 0(caracter) igual a 0var")
console.log("1" == varAsig, "es 1(caracter) igual a 0var")
console.log(0 !== varAsig, "No es tipo/valor 0 igual 0var ")
console.log('' == null, "es '' igual a null")
console.log(''== undefined, "es '' igual a undefined")
console.log("cuatro" == "4", "es cuatro igual a 4(caracter)")

console.log(0 == null, "es 0 iguala  null")
console.log(0 == undefined, "es 0 igual a undefined")

console.log(1 == "", "es 1 igual a ''")




// 5. Utiliza el operador lógico and

console.log(3 > 6 && 5 > 2) 

// 6. Utiliza el operador lógico or

console.log(3 > 6 || 5 > 2)

// 7. Combina ambos operadores lógicos

console.log((3 > 6 || 5 > 2)&&(6 >= 6 || 5 > 2))

// 8. Añade alguna negación

console.log(!(3 > 6 || 5 > 2)&&(6 >= 6 || 5 > 2))

// 9. Utiliza el operador ternario

const color= false
color ? console.log("Estaa en verde") : console.log("Esta en rojo")

// 10. Combina operadores aritméticos, de comparáción y lógicas.



