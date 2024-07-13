


let a = 10;
let b = a;
a     = 30;

console.log({a,b});


let juan = { nombre: 'Juan' }
let ana = juan
ana.nombre = 'Ana'

console.log({juan, ana});

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log(peter, tony);

let milan = {nombre: 'Milan'}
let tara = { ...milan }
tara.nombre = 'Tara';

console.log(milan, tara);

let chelsea = {nombre: 'Chelsea'};
let calcifer = chelsea;

console.log(chelsea, calcifer);

const cambiaNombre2 = ({...persona}) => {
    persona.nombre = 'Calcifer';
    return persona;
}

calcifer = cambiaNombre2(calcifer);

console.log(chelsea, calcifer);

const frutas = ['Manzana', 'Pera', 'Piña'];
const otraFrutas = frutas;
otraFrutas.push('Mango');

console.table({frutas, otraFrutas}); // se agrego a ambas

const lenguajes = ['Java', 'Python', 'JavaScript'];

console.time('spread')
const otrosLenguajes = [...lenguajes];
console.timeEnd('spread')

otrosLenguajes.push('.NET');

console.table({lenguajes, otrosLenguajes}); // se agrego solo a uno

const framework = ['Spring Boot', 'Fast API', 'Nest.js'];

console.time('slice');
const otrosFrameworks = framework.slice();
console.timeEnd('slice');

otrosFrameworks.push('Blazer');

console.table({framework, otrosFrameworks}); // se agrego solo a uno