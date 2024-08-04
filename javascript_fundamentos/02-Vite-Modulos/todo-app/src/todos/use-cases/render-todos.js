import { Todo } from '../models/todo.model'
import { createTodoHTML } from './';

/**
 * Función para renderizar los todo en la vista
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {
    
    // TODO referencia
    const element = document.querySelector( elementId );

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )
    });

}