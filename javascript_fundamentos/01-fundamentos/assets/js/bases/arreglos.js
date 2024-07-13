const arr = new Array(10); // creación de un array en el cual defino que unicamente tendra 10 elementos
console.log(arr) // [ <10 empty items> ]

let videojuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ]
console.log({ videojuegos }) // { videojuegos: [ 'Mario 3', 'Megaman', 'Chrono Trigger' ] }
console.log( videojuegos[0] ); // Mario 3

// Creación de array con mayor claridad de las operaciones
let arregloCosas = [
    true,
    123,
    'Juanes',
    1 + 2,
    function(){},
    ()=>{},
    { a:1, b:2},
    [ 'X', 'Megaman', 'Zero', 'Dr. Light' ]
];

console.log({ arregloCosas }); // imprimir todo el arreglo
console.log( arregloCosas[0] ); // imprimir elemento del array en el indice 0
console.log( arregloCosas[7][3] ); // imprimir elemento que es un array que tiene otros elementos
