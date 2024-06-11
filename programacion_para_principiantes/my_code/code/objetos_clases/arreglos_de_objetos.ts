// CREACION INTERFAZ
interface Person {
    name:string;
    age:number;
    isActive:boolean;
}

let juanes = {
    name: 'Juan',
    age: 20,
    isActive: true
}

let niyi = {
    name: 'Niyi',
    age: 20
}

let milan = {
    name: 'Milan',
    age: 2
}

// ARREGLOS DE OBJETOS
let people = [juanes, niyi, milan];
// console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}