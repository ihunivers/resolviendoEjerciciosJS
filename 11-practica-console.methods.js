/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente
console.log("----1----")

function divide(a, b) {
	if (b === 0) {
		console.error("Error: No dividas con 0", a, b)
		return;
	}

	const total = `${a} / ${b} = ${a / b}`
	return total
}

(divide(4, 2))
(divide(4, 0))

// 2. Crea una función que utilice warn correctamente
console.log("----2----")

function inicioSesion(usuario, contrasena) {
    
    if (!usuario) {
        console.warn('Advertencia: Nombre de usuario vacío.')
    }
    if (!contrasena) {
        console.warn('Advertencia: Contraseña vacía.')
    }

    if (!usuario || !contrasena) {
        console.log('Por favor, introduzca ambos datos para iniciar sesión.')
        return
    }

    console.log(`Bienvenido, ${usuario}. Has iniciado sesión correctamente.`)
}
inicioSesion('til', '0000')      
inicioSesion('tol', '')          
inicioSesion('', '0000')          
inicioSesion('', '')

// 3. Crea una función que utilice info correctamente

// 4. Utiliza table
console.log("----4----")
let unatabla = [
    ["uvas", 1, "kilo"],
    ["setas", 1, "kilo"],
    ["piña", 1, "kilo"],
    ["platano", 1,"kilo"],
    ["merluza", 2, "kilo"],
    ["aceitunas", 2, "kilo"]
]
console.table(unatabla)

console.log("----4b----")
unatabla = [
    {name:"uvas", cantidad:1, unidadDemedida:"kg"},
    {name:"setas", cantidad:1, unidadDemedida:"kg"},
    {name:"piña", cantidad:1, unidadDemedida:"kg"},
    {name:"platano", cantidad:1, unidadDemedida:"kg"},
    {name:"merluza", cantidad:2, unidadDemedida:"kg"},
    {name:"aceitunas", cantidad:2, unidadDemedida:"kg"}
]
console.table(unatabla)

// 5. Utiliza group
console.log("----5----")

console.group("dispositivos")
console.log("name: pantalla" )
console.log("name: mause" )
console.log("name: teclado" )
console.log("name: monitor" )
console.log("name: auriculares" )
console.log("name: controles" )
console.groupEnd()

// 6. Utiliza time
console.log("----6----")

console.time("tiempo de ejecución")
let intento = 1
while (intento < 11) {
        console.log(`intento numero ${intento}`)
        intento++
    }   
console.timeEnd("tiempo de ejecución")

// 7. Valida con assert si un número es positivo
console.log("----7----")

let num = Math.floor(Math.random() * 100);
console.log(num)


function numeroazar(min, max) {
    return Math.random() * (max - min) + min;
}

for (let b = 0; b < 5; b++) {

    const randomNum = numeroazar(-100, 100); // Números aleatorios entre -100 y 100
    console.log(randomNum.toFixed(0));
    console.assert(randomNum <=0, "El numero es positivo")
}

// 8. Utiliza count
console.log("----8----")


// let piedra = "🪨"
// let papel= "📄" 
// let tijeras= "✂️" 

function juegoPPT(jugadorUno){
    const opcion = [ "🪨", "📄", "✂️"]
    const azar = opcion[Math.floor(Math.random()*3)]
    let resultado = ''

    if(jugadorUno === azar){
        resultado = 'han empatado'
    
    }else if(
        (jugadorUno == "🪨" && azar == "✂️")
        || (jugadorUno == "📄" && azar == "🪨")
        || (jugadorUno == "✂️" && azar == "📄")
    ){
        resultado = "has ganado"
    
    }else{
        resultado = "has perdido"
    }

    console.log(`Jugador: ${jugadorUno}`)
    console.log(`pc: ${azar}`)
    console.log(resultado)

}

juegoPPT("✂️")
juegoPPT("📄")
juegoPPT("🪨")
juegoPPT("📄")
juegoPPT("🪨")
juegoPPT("✂️")
juegoPPT("✂️")

console.log("jugador ha ganado en las siguientes rondas de esta forma: ")
console.log("con tijera")
console.count("jugador" && "✂️" && "has ganado" ), 
console.log("con papel")
console.count("jugador" && "📄" && "has ganado" ),
console.log("con piedra")
console.count("jugador" && "🪨" && "has ganado")

// 9. Utiliza trace
console.log("----9----")

console.trace("jugador")



// 10. Utiliza clear
console.log("----10----")
//console.clear()