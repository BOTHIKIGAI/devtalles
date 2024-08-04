import { Todo } from "../todos/models/todo.model"

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos : [
        
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore()
    console.log('InitStore 🥔');
}

const loadStore = () => {
    if ( !localStorage.getItem('state') ) return
    
    const { todos = [], filter  = Filters.All } = JSON.parse( localStorage.getItem('state') )
    state.todos = todos
    state.filter = filter
    
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state) )
}

/**
 * Funcion para filtrar las todo
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
 * Funcion para crear un todo
 * @param {String} description 
 */
const addTodo = ( description ) => {

    if ( !description ) throw new Error ('Descripción is required')
    state.todos.push( new Todo(description) )
    saveStateToLocalStorage()
}


/**
 * Funcion para completar tarea
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) {
            todo.done = !todo.done
        }
        return todo
    })

    saveStateToLocalStorage()
}


/**
 * Funcion para eliminar un todo
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId )
    saveStateToLocalStorage()
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done )
    saveStateToLocalStorage()
}


/**
 * Función para crear un filtro
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage()
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