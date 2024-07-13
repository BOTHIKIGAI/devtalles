let a = 5;

if (a < 10) {
    console.log('A es menor que 10');
}

/////

a = 10;

if (a === 10) {
    console.log('A es igual que 10');
}

////

a = 15;

if (a > 10) {
    console.log('A es mayor que 10');
}

////

if (a < 10) {
    console.log('A es menor que 10');
} else if (a == 10){
    console.log('A es igual que 10');
} else if (a > 10) {
    console.log('A es mayor que 10');
}

// 

const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes ...

console.log({dia});

if (dia == 0) {
    console.log('Domingo');
} else if (dia == 1) {
    console.log('Lunes');
} else if (dia == 2) {
    console.log('Martes');
} else if (dia == 3) {
    console.log('Miercoles');
} else if (dia == 4) {
    console.log('Jueves');
} else if (dia == 5) {
    console.log('Viernes');
} else if (dia == 6) {
    console.log('Sabado');
}
else {
    console.log('No es ningun dia');
}

let diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

console.log(diaLetras[dia] || 'Dia no definido');

console.log('Fin del programa');