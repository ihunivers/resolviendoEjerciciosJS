/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Captura una excepción utilizando try-catch
console.log("----1----")

let animal

try{
    console.log(animal.nombre)
}catch{
    console.log("Se ha producido un error ")
}
// 2. Captura una excepción utilizando try-catch y finally
console.log("----2----")

try{
    console.log(animal.especie)
}catch(error){
    console.log("Se ha producido un error: ", error.message)
}finally{
    console.log("finally siempre se ejecuta")
}

// 3. Lanza una excepción genérica
console.log("----3----")

//throw new Error("se produjo error que decidi lanzar yo")

// 4. Crea una excepción personalizada
console.log("----4----")
function resta(numero1, numero2){

    if(!Number.isInteger(numero1) || !Number.isInteger(numero2) ){
        throw new Error("No es número, los valores ingresados")
    }

    if( numero1 < numero2){
        throw new Error("No se puede restar estos valores, el primer valor es menor")
    }
    return numero1-numero2
} 

// console.log(resta(5, 10))
// console.log(resta("patata", 10))


// 5. Lanza una excepción personalizada
console.log("----5----")

try{
    console.log(resta(5, 10))

}catch(error){

    console.log(error.message)

}

// 6. Lanza varias excepciones según una lógica definida
console.log("----6----")
try{
    console.log(resta(2, 10))
    
}catch(error){

    console.log(error.message)

}

try{
    
    console.log(resta("patata", 10))
}catch(error){

    console.log(error.message)

}

try{
    
    console.log(resta("gazpacho", "pescado"))
}catch(error){

    console.log(error.message)

}


// 7. Captura varias excepciones en un mismo try-catch
console.log("----7---")
try{
    console.log(resta(5, 10))
    console.log(resta("patata", 10))
    console.log(resta("gazpacho", "pescado"))
}catch(error){

    console.log(error.message)

}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("---8---")

let nu = [23.876,6.61,5,"dos","jgjh"]

for (let i = 0; i < nu.length; i++) {
    try{

        const floatvalor = parseFloat(nu[i]).toFixed(2)
        
        if(isNaN(floatvalor) ){
            throw new Error(`No es numero ${nu[i]}`)
    
        }
        console.log(
            `El valor: ${nu[i]}, transformado a decimal o float: ${floatvalor}`
        )
    
    }catch(error){    
        console.error(
            `Error al transformar "${nu[i]}" a decimal o float: ${error.message}`
        )
    }
}

    

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("---9---")



let dato = { nombre: 'Tom', edad: 20 };


    
    function contiene(obj, propiedad) {
        
    try{
        
        if (!obj.hasOwnProperty(propiedad)) {
			throw new Error(`la propiedad "${propiedad}" no existe`);
		} else {
			const value = obj[propiedad];
			console.log(`${propiedad}: ${value}`);
		}

    }catch(error){
        console.log(error.message)
    }
}    
contiene(dato, "edad")
contiene(dato, "email")


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10



try{
    let intento = 1

    while (intento < 11) {
        console.log(`intento numero ${intento}`)
        intento++
    }
    if (intento = 11){
        throw new Error(`has llegado al límite`);
    }


}catch(error){
    console.log(error.message)
}

console.log("----10b---")

function seleccionarNumeroAlAzar(maxIntentos = 10) {

    try{   
        const numeroObjetivo = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
        console.log(`Número objetivo: ${numeroObjetivo}`);

        for (let a = 1; a <= maxIntentos; a++) {
            const numeroSeleccionado = Math.floor(Math.random() * 100); // Genera un número aleatorio
            console.log(`Intento ${a}: número seleccionado ${numeroSeleccionado}`);

            if (numeroSeleccionado === numeroObjetivo) {
                console.log(`¡Éxito! Se encontró el número en el intento ${a}`);
                return; // Termina la función si se encuentra el número
            }
        }
        throw new Error('No se encontró el número después de 10 intentos');
    }catch(error){
        console.log(error.message)

    }    
}

// Ejecutar la función
seleccionarNumeroAlAzar();


console.log("----10c----")
function fnTest() {
	const TEST = (Math.random() * 10).toFixed(2);
	if (TEST < 7.0) {
		throw new Error(`${TEST} 🔴`);
	}
	return TEST;
}

testAttempts(fnTest);

function testAttempts(fn) {
	let attempts = 0;
	const MAX_ATTEMPTS = 10;

	const fnAttempts = () => {
		attempts++;

		try {
			const TEST = fn();
			console.log(`Successful test ${TEST} 🟢`);
		} catch (error) {
			if (attempts < MAX_ATTEMPTS) {
				console.error(`Error in attempt ${attempts}: ${error.message}`);
				console.log(`retrying in 1 seconds...`);
				setTimeout(fnAttempts, 1000); // Retrasar el siguiente intento en 1 segundo
			} else {
				console.error(
					"there are no more attempts - last error: ",
					error.message
				);
			}
		}
	};

	fnAttempts();
}