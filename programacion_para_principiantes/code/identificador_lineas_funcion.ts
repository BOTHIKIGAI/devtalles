// FUNCION 
// SERIE DE INSTRUCCIONES PARA EJECUTARLO DE MANERA CONTROLADO

numberOfLines = 1;

export function printLineNumber(num) {

    for (let i=1; i<=num; i++) {
        numberOfLines ++
        console.log('Linea #' , numberOfLines);
    }
}

printLineNumber(numberOfLines);