import _ from 'underscore';

/**
 * @param {Array<string>} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error ('tiposDeCarta es necesario como arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error ('tiposEspeciales es necesario como arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}