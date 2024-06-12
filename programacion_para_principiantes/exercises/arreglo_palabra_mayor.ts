// RETORNAR DE UN ARREGLO LA PALABRA MAS LARGA

function largestNameOfArray(arrayElementos) {

    let longitudMaxima = arrayElementos[0];
    for (let i = 1; i < arrayElementos.length; i++) {
        if (arrayElementos[0] < arrayElementos[i]){
            longitudMaxima = arrayElementos[i];
        }
    }
    return longitudMaxima;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroesElementLarge = largestNameOfArray(heroes);
console.log(heroesElementLarge);
