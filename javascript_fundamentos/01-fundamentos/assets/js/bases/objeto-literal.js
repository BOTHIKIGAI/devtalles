let personaje = {
    //cuando se ven estas llaves se le debe asociar a que es un objeto literal
    nombre: 'Tony Startk',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    'ultima-pelicula': 'Infinity War'

};

console.log(personaje);
console.log('Nombre', personaje.nombre); // primera forma de imprimir
console.log('Alias', personaje.codeName);
console.log('Edad: ', personaje['edad']);
console.log('Coordenadas', personaje.coords);
console.log('Coordenadas', personaje.coords.lat);

console.log('Numeros de trajes: ', personaje.trajes.length);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);
console.log('Ultima pelicula:', personaje["ultima-pelicula"]);

// Eliminar propiedas

delete personaje.edad;
console.log(personaje);

// Agregar propiedad

personaje.casado = true;

const entriesPares = Object.entries( personaje )
console.log(entriesPares);

// bloque de las modificaciones del objeto iteravle

Object.freeze( personaje ); // congela la asignación de valores

// personaje.dinero = 100000
personaje.coords.country = 'New York'
console.log(personaje);

// nombre de las claves
const propiedades = Object.getOwnPropertyNames( personaje )
console.log({ propiedades });

// todos los valores de las claves
const valores = Object.values( personaje )
console.log(valores);