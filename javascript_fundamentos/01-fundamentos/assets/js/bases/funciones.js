
// No es conveniente crear funciones de esta manera ya que puede ser sobreescritas
function saludar() {
    console.log('Hola mundo');
}

// sobre escritura de función
// let saludar = 123; 

// se podria definirlas como constante
/* const saludo2 = function() {
    console.log('Hola Mundo');
} */

// 

// Se puede agregar operadores
function saludar4( nombre ){
    console.log('Hola ' + nombre);
}

saludar4('Juanes');

// si se desea conocer los argumentos que se le pasaron a x función se puede usar la palabra arguments

// defino la función
const saludar2 = function( nombre ) {
    console.log( arguments ) // con esta palabra podremos tener todos los argumentos que se le pase a la función
    console.log('Hola ' + nombre);
}

saludar2('Juanes', 21, 'Milan', true, [10,10]); // como se observa hay mas parametros de los que deberian haber


function saludar3(nombre) {
    return 'Hello ' + nombre // retornara el siguiente valor
}

resultadoSaludo3 = saludar3('Juan');
console.log(resultadoSaludo3);

const sumar2 = (a,b) => {
    return a + b
}

const sumar3 = (a,b) => a + b 

function getAleatorio() {
    return Math.random()
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random()

console.log( getAleatorio2() );

