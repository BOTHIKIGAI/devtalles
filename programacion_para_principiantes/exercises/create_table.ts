// IMPRESION TABLA DE MULTIPLICAR

let multiplicador = 1; // es el segundo numero de una multiplicación
let linea = ''; // es la variable que almacena el string

for (let i = 1; i <= 25; i++) {
    
    linea += i * multiplicador;
    linea += ' ';

    if (i == 5) {
        if (i * multiplicador == 30) break;
        linea += '\n';
        i = 0;
        multiplicador++;
    }  
    
}

// SOLUCIÓN DE WILMER
/* let multiplicador2 = 1;
for (let i = 1; i <= 30; i++) {

    linea += (multiplicador2 * multiplicador) + ' ';

    multiplicador2++;
    if (multiplicador2 == 6) {
        linea += '\n';
        multiplicador++;
        multiplicador2 = 1;
    }  
    
} */

console.log(linea);
