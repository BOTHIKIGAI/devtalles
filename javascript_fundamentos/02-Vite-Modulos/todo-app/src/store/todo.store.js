import { Todo } from "../todos/models/todo.model"

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos : [
        new Todo('Pieda del alma'),
        new Todo('Pieda del infinito'),
        new Todo('Pieda del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state),
    console.log('InitStore 🥔');
}

const loadStore = () => {
    throw new Error('Not implemented')
}


/**
 * @param {String} filter 
 */
const getTodos = ( filter = Filters.All) => {

    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done )
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done )
        default:
            throw new Error(`Option ${filter} is not valid.`)
    }

}


/**
 * @param {String} description 
 */
const addTodo = ( description ) => {

    if ( !description ) throw new Error ('Descripción is required')
    state.todos.push( new Todo(description) )

}


/**
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented')
}


/**
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId )
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done )
}


/**
 * Función para crear un filtro
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}


/**
 * Funcion para traer los filtros
 */
const getCurrentFilter = () => {
    return state.filter.toString();
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}