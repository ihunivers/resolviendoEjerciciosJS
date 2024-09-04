/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("------1------")
function suma(a, b){
    return (a + b)
    
} let total = suma(2,4)
console.log(total)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("------2------")

let elmayor 

function maxi(...numeros){
    
    elmayor = (Math.max(...numeros));

}maxi(54,300,3,100,44,77,4)
console.log(elmayor);


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("------3------")

let numVocales = 0
let text

function stringcontar(text){
    for (let valor of text) {
        if ('aeiouAEIOUáéíóú'.includes(valor)) {
            numVocales++
        }
    }console.log(numVocales)

}stringcontar("platano")



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("------4------")

let cosas = ["piano","papel","lapiz","colores","borrador","sacapuntas"]

function cambioMayus(cosas) {
    for (let c = 0; c < cosas.length; c++) {
        cosas[c] = cosas[c].toUpperCase()
    }

    return cosas
}
cosas = cambioMayus(cosas)
console.log(cosas)


/*ejercicio cambiar un a palabra mayuscula o minuscula..*/
let frase 
let cambiomaymin


function transfor(frase){
    if(frase == frase.toLowerCase()){
        cambiomaymin = frase.toUpperCase()
        console.log(`Esto se cambio a mayúscula:  ${cambiomaymin}`)
    }else if(frase == frase.toUpperCase()){
        cambiomaymin = frase.toLowerCase()
        console.log(`Esto se cambio a minúscula:  ${cambiomaymin}`)  
    }else{console.log("strings en formato camelcase y numeros no se acepta")}

}transfor("termales")

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("------5------")

function esPrimo(numero){

    if( numero < 2) return false;
    if(numero === 2) return true;

    let raiz = Math.floor(Math.sqrt(numero))+1;

    for (let d = 2; d < raiz; d++) {

    if(numero % d ===0){
    return false;
    } 
    }
    return true;
}
const esprimo = esPrimo(4)
console.log(esprimo)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("------6------")

let arrUno = [3 , 15 , 16 , 2 , 14]
let arrDos = [0, 1 , 2 , 3 , 4 , 5]
const definitivo = [];

function comun(arrayUno, arrayDos) {
	
	let item;
	for (let a = 0; a < arrayUno.length; a++) {
		for (let b = 0; b < arrayDos.length; b++) {
			if (arrayUno[a] === arrayDos[b]) {
				item = arrayDos[b];
				definitivo.push(item)
			}
		}
	}
	return definitivo;
}
console.log(comun(arrUno, arrDos))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("------7------")

// let numbers = []
// let numpar
// const numpars = []

// function parnumeros(...nums){

//     for (let c = 0; c < nums.length; c++ ){
//         if (nums[c] % 2 == 0)  {
//             numpar = nums[c]
//             numpars.push(numpar)
//         }
//     }
//     return numpars

// }console.log(parnumeros(1,2,3,4))

const numbers = [2, 4, 6, 8, 10]

function parnumeros(par) {
	let result = 0
	for (const value of par) {
		if (value % 2 === 0) {
			const add = value
			result += add
		}
	}
	return result;
}

console.log(parnumeros(numbers));


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("------8------")

let otrosnum = [4,5,7,8,3,5,9]

function elevcua(ele){
    const adds = []
    for(const val of ele){
    adds.push(Math.sqrt(val)) 
    }
    return adds
    
}
console.log(elevcua(otrosnum))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("------9------")

let texto = ""
let nuevotext = ""

function cadena(texto){
    for(let e = texto.length -1; e>=0; e--){
        nuevotext += texto[e]
        
    }return nuevotext
}console.log(cadena("momento de picar código"))


// 10. Crea una función que calcule el factorial de un número dado
console.log("------9------")

//4! = 1*2*3*4=24
//1! = 1
//0! = 1
let dato = 4


function factorial(arg){

    if(arg == 0){
        return 1
    }else{
        return arg * factorial(arg -1)
    }
}console.log(factorial(4))