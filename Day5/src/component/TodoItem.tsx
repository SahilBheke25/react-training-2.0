import { Todo } from "../models/Todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
      <tr className="table-row">
        <th>{todo.id}</th>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{todo.isDone ? "Completed" : "Pending"}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => onToggle(todo.id)}
          >
            Change Status
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </td>
      </tr>
  );
};

export default TodoItem