import { Todo } from '../models/todo.model'


/**
 * Funcion para crear a los elementos HTML
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {

    if ( !todo ) throw new Error( 'A TODO object is required' )
        
    const html = `<h1>${ todo.description }</h1>`
    const liElement = document.createElement('li')
    liElement.innerHTML = html

    return liElement

}