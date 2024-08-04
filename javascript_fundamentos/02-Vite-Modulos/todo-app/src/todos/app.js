import html from "./app.html?raw";
import todoStore, { Filters } from '../store/todo.store'
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
    ClearCompleted: '.clear-completed',
    TodoList : '.todo-list',
    NewTodoInput : '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    
    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos )
        updatePendingCount()
    }

    const updatePendingCount = () => {
        renderPending( ElementIDs.PendingCountLabel )
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
    const clearCompletedButton = document.querySelector( ElementIDs.ClearCompleted )
    const filtersLis = document.querySelectorAll( ElementIDs.TodoFilters )

    // Listeners

    // Crear un nuevo todo
    newDescriptionInput.addEventListener( 'keyup', ( event ) => {
        
        if ( event.keyCode != 13) return
        if ( event.target.value.trim().length === 0 ) return

        todoStore.addTodo( event.target.value)
        displayTodos()
        event.target.value = ''
    })

    // Completar un todo o eliminarlo
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

    // Clear completed
    clearCompletedButton.addEventListener ( 'click' , ( event ) => {
        todoStore.deleteCompleted()
        displayTodos()
    })

    // Filters
    filtersLis.forEach( element => {

        element.addEventListener( 'click', (element) => {
            filtersLis.forEach( el => el.classList.remove( 'selected' ))
            element.target.classList.add('selected');

            switch( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All )
                break

                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending )
                break

                case 'Completados':
                    todoStore.setFilter( Filters.Completed )
                break
            }

            displayTodos()
        })

    })

    // 

}