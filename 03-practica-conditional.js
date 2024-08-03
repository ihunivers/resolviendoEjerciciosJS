/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let alias = "magia"

if (alias == "magia") {
    console.log("El alias coincide con magia")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "tom"
let contraseña = "jerry"

if (usuario == "tom" && contraseña == "jerry") {
    console.log("el usuario y contraseña concide correctamente")
} else {
    console.log("Los datos pedidos son incorrectos")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

const prompt = require('prompt-sync')();
    /*instalé npm unstall prompt-sync para poder ejecutar prompt por consola vscode, 
    es necesario llamarlo con require('prompt-sync')() */


let numero = Number(prompt("Escribe tu edad: "))

if (numero > 0){
    console.log(`el ${numero} es positivo`)
} else if(numero < 0){
    console.log(`el ${numero} es negativo`)
}else{
    console.log("Prueba otro numero distinto de 0")
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = Number(prompt("Escribe tu edad: "))

if (edad >= 18){
    console.log("puedes votar a las marionetas")
}else{
    console.log("Eres menor de edad para esto")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age =  Number(prompt("Escribe tu edad nuevamente: "))
let etapa = age >= 18 ? "Eres mayor de edad" : "eres menor de edad"
console.log(etapa)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes =  prompt("Escribe el mes: ").toLocaleLowerCase()
let dia =  Number(prompt("Escribe el numero del dia del mes que te interesa saber: "))
let mesguardado = mes
let diaguardado = dia
console.log(diaguardado)

if ((mes == "marzo" && dia >= 20 && dia <= 31) 
    || (mes == "abril" && dia >= 1 && dia <= 30 )
    || (mes == "mayo" && dia >= 1 && dia <= 31)
    || (mes == "junio" && dia >= 1 && dia <= 20)
){
    console.log(`El dia ${diaguardado} del mes de ${mesguardado} es primavera`)
    
}else if((mes == "junio" && dia >= 21 && dia <= 30) 
    || (mes == "julio" && dia >= 1 && dia <= 31 )
    || (mes == "agosto" && dia >= 1 && dia <= 31)
    || (mes == "septiembre" && dia >= 1 && dia <= 22)
){
    console.log(`El dia ${diaguardado} del mes de ${mesguardado} es verano`) 

}else if((mes == "septiembre" && dia >= 22 && dia <= 30) 
    || (mes == "octubre" && dia >= 1 && dia <= 31 )
    || (mes == "noviembre" && dia >= 1 && dia <= 30)
    || (mes == "diciembre" && dia >= 1 && dia <= 20)
){
    console.log(`El dia ${diaguardado} del mes de ${mesguardado} es otoño`)

}else if((mes == "diciembre" && dia >= 21 && dia <= 31) 
    || (mes == "enero" && dia >= 1 && dia <= 30 )
    || (mes == "febrero" && dia >= 1 && dia <= 29)
    || (mes == "marzo" && dia >= 1 && dia <= 19)
){
    console.log(`El dia ${diaguardado} del mes de ${mesguardado} es invierno`)
}else{
    console.log("No escribiste el mes y su numero de dia de la forma adecuada, intentalo denuevo")
}     


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mesguardado == "enero" || mesguardado == "abril"|| mesguardado == "junio" || mesguardado == "septiembre" || mesguardado =="noviembre" ){
    console.log(`el mes de ${mesguardado} tiene 30 dias` ) 

}else if(mesguardado == "marzo"|| mesguardado =="mayo"|| mesguardado =="julio"|| mesguardado =="agosto"|| mesguardado =="octubre"|| mesguardado =="diciembre"){
    console.log(`el mes de ${mesguardado} tiene 31 dias` )

}else if(mesguardado == "febrero"){
    console.log(`el mes de ${mesguardado} tiene 28 dias o 29 si es bisiesto`)
}else{
    console.log("No has escrito de la forma correcta, intentalo denuevo")
} 

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = Number(prompt("Cada idioma esta enumero, elije un numero del 0 al 9: "))
let traduce
let safeidi = idioma

switch(safeidi) {
    case 0:
        traduce = "Hola en inglés se escribe Hello"
        break

    case 1:
        traduce = "Hola en portugués se escribe olá"
        break

    case 2:
        traduce = "Hola en frances se escribe Salut"
        break

    case 3:
        traduce = "Hola en italiano se escribe Ciao"
        break

    case 4:
        traduce = "Hola en indonecia se escribe Halo"
        break
    
    case 5:
        traduce = "Hola en Suazi se escribe Sawubona"
        break
    case 6:
        traduce = "Hola en hawaiano se escribe Aloha"
        break  
    
    case 7:
        traduce = "Hola en aleman se escribe Hallo"
        break

    case 8:
        traduce = "Hola en ruso se escribe привет"
        break
        
    case 9:
        traduce = "Hola en tagalo se escribe Kamusta"
        break
    default :
        traduce = "numero elejido incorrecto"    

}  
console.log(traduce)


// 9. Usa un switch para hacer de nuevo el ejercicio 6


switch(estacion){
    case 
}



// 10. Usa un switch para hacer de nuevo el ejercicio 7