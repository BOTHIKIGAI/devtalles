// NUMERO MAYOR DENTRO DE UN ARREGLO

let numbers = [25,9,8,20,4,51,7,10,3,5];
let numero_mayor = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numero_mayor < numbers[i]) { 
        numero_mayor = numbers[i];
    }
}

console.log(`Numero mayor de numbers ${numero_mayor}`);