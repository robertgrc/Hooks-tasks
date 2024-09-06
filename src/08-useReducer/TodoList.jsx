import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos=[], onDeleteTodo, handleToggleTodo }) => {
  return (
        <ul className="list-group">
            {
                todos.map( todo =>(
                    <TodoItem key={todo.id}  todo = {todo} onDeleteTodo={id=>onDeleteTodo(id)} onToggleTodo={handleToggleTodo} />
                ))
            }
        </ul>
  )
}
