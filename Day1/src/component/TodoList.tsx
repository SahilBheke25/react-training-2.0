import { Todo } from "../models/Todo"
import TodoItem from "./TodoItem"

type Props = {
  todos: Todo[]
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({todos, onToggle, onDelete}: Props) => {

  return (
    <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} ></TodoItem>
            ))}
          </tbody>
        </table>
      </div>
  )
}
export default TodoList