// LA PALABRA EMPIEZA POR S

function heroesWithLetter(arrayHeroes, letter) {
    let arrayHeroesWithLetter = [];
    for (let i = 0; i < arrayHeroes.length; i++) {
        if (arrayHeroes[i].startsWith(letter)) {
            arrayHeroesWithLetter.push(arrayHeroes[i]);
        }   
    }
    return arrayHeroesWithLetter;
}

let heroesArray = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let resultArray = heroesWithLetter(heroesArray,'S');
console.log(resultArray);

