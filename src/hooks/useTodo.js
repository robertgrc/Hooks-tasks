import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



const init = () =>{
    return JSON.parse(localStorage.getItem('todos')||[])
}


export const useTodo = () =>{


    const [todos, dispatch] = useReducer(todoReducer,[], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    

    const handleNewTodo = (todo) =>{
        console.log({todo})
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action)
    }
    
    const handleDeleteTodo = (id) =>{
        console.log({id})
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    
    const handleToggleTodo = (id) =>{
        console.log({id})
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

return {
todos,
handleNewTodo,
handleDeleteTodo,
handleToggleTodo,
pendingTodosCount:todos.filter(todo=>!todo.done).length, 
todosCount: todos.length
}

}


