function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('Juan', 'Cajiao');
console.log( persona );


const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
const persona2 = crearPersona2('Juan', 'Cajiao');

function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Juan')

// Una función de flecha no crea 
const imprimeArgumentos2 = ( ...args ) => {
    console.log(args);
}


// Una función de flecha no crea 
const imprimeArgumentos3 = ( edad, ...args ) => {
    return args;
}

const [ saluod, estado, lenguaje ] = imprimeArgumentos3(20, 'hola', true,  'javascript');
console.log({saluod, estado, lenguaje});

const { apellido } = crearPersona('Juan', 'Cajiao');
console.log({apellido});

let personaje = {
    //cuando se ven estas llaves se le debe asociar a que es un objeto literal
    nombre: 'Tony Startk',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    

    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(personaje);