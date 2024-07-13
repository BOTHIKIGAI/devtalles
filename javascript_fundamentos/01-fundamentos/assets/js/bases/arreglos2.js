let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ]
console.log('Largo:', juegos.length);

juegos.forEach( (elemento, indice, arr) => {
    console.log( elemento, indice, arr );
});

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift('Fire Embled');
console.log(nuevaLongitud, juegos);

let juegoBorrado = juegos.pop()
console.log(juegoBorrado, juegos);

let juegosBorrados = juegos.splice(1, 2);
console.log(juegosBorrados, juegos);

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);