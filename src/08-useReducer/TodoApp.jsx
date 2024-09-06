
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

    //todos, handleDeleteTodo, handleToggleTodo, handleNewTodo

    const {handleNewTodo,handleDeleteTodo, handleToggleTodo, todos, pendingTodosCount, todosCount } = useTodo()

  return (
    <>
    <h1>TodoApp:{todosCount}, <small>pendientes:{pendingTodosCount}</small></h1>
    <hr/>
    <div className="row">
        <div className="col-7">        
                <TodoList todos={todos} onDeleteTodo={id=>handleDeleteTodo(id)} handleToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
                <TodoAdd onNewTodo={todo=> handleNewTodo(todo)}/>
        </div>
    </div>
    </>
  )
}
