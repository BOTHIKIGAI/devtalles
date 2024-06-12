// FUNCION PARA RETORNAR EL MAX

function maxNum(a,b,c) {
    let numbers = [a,b,c];
    let numero_mayor = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numero_mayor < numbers[i]) { 
            numero_mayor = numbers[i];
        }
    }
    return numero_mayor;
}

let numeroMayorDe = maxNum(50,5,21);
console.log(numeroMayorDe);