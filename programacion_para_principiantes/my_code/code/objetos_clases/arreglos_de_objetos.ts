// CREACION INTERFAZ
interface Person {
    name:string;
    age:number;
    isActive:boolean;
}

let juanes:Person = {
    name: 'Juan',
    age: 20,
    isActive: true
}

let niyi:Person = {
    name: 'Niyi',
    age: 20,
    isActive: true
}

let milan:Person = {
    name: 'Milan',
    age: 2,
    isActive: true
}

// ARREGLOS DE OBJETOS
let people: Person[] = [juanes, niyi, milan];
// console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}