/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let a = "tomate"
let b = "frito"
console.log(`agrega ${a} ${b} a la mezcla`)

// 2. Muestra la longitud de una cadena de texto

let c = "las palabras"
console.log(c.length)

// 3. Muestra el primer y último carácter de un string

console.log(c[0])
console.log(c[11])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(c.toUpperCase())
console.log(c.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

texto = `Recuerda que estas
en las aventuras
de la 3d`
console.log(texto)

// 6. Interpola el valor de una variable en un string

let apodo = "yoko"
let email = "piña@pon.com"
console.log(`Hola, ${apodo}! Tu email es ${email}.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

frase = "quiero acostarme en el cesped o a la orilla del mar y sentir la armonía"
console.log(frase.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(frase.includes("libre")) //false
console.log(frase.includes("mar")) //true

// 9. Comprueba si dos strings son iguales

if (frase == texto) {
 console.log("ambos son iguales");
} else {
console.log("Son distintos");
}
console.log(frase === texto)
console.log(frase == texto)
console.log(frase != texto)
// 10. Comprueba si dos strings tienen la misma longitud

console.log(frase.length)
