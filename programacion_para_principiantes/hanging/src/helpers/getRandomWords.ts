let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'VEHICULO',
    'PAPAYA',
    'ANIMAL',
    'TELEFONO'
]

export function getRandomWord() {

    let randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}