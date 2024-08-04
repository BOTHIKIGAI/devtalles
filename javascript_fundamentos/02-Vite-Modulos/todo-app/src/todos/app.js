import html from "./app.html?raw";
import todoStore from '../store/todo.store'
import { renderTodos } from "./use-cases";

const ElementIDs = {
    TodoList : '.todo-list',
    NewTodoInput : '#new-todo-input',
    DeleteTodoInput : '.destroy'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos )
    }

    // Cuando la función APP se llama
    (()=>{
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append(app)
        displayTodos()
    })()

    // Referencia HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput )
    const todoListUL = document.querySelector( ElementIDs.TodoList )

    // Listeners

    // Crear un nuevo todo
    newDescriptionInput.addEventListener( 'keyup', ( event ) => {
        
        if ( event.keyCode != 13) return
        if ( event.target.value.trim().length === 0 ) return

        todoStore.addTodo( event.target.value)
        displayTodos()
        event.target.value = ''
    })

    // Completar un todo
    todoListUL.addEventListener('click', ( event ) => {
        const element = event.target.closest('[data-id]')

        if (event.target.classList.value === 'destroy') {
            todoStore.deleteTodo( element.getAttribute('data-id') )
        }
        else {
            todoStore.toggleTodo( element.getAttribute('data-id') )
        }
        
        displayTodos()
    })

}