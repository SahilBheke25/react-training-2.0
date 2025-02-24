import { useState } from "react";
import { Todo } from "../models/Todo";

type Props = {
  addTodo: (todo: Todo) => void;
  idCounter: number;
  incrementId: () => void;
};

const TodoForm = ({ addTodo, idCounter, incrementId }: Props) => {

  const [todo, setTodo] = useState<Todo>({
    id: -1, 
    title: "", 
    description: "", 
    isDone: false,
  })
  
  function handleAddTask(event: React.FormEvent) {

    event.preventDefault();
    if (!todo.title.trim() || !todo.description.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }
  
    addTodo({...todo, id: idCounter})

    incrementId();
    setTodo((prev)=>({...prev, title:"", description:""}))
  }

  return (
      <form onSubmit={handleAddTask}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={todo.title}
            onChange={(event) =>
              setTodo((prev) => ({ ...prev, title: event.target.value }))
            }
          />
          <label className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            value={todo.description}
            onChange={(event) => {
              setTodo((prev) => ({ ...prev, description: event.target.value }));
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
  );
};

export default TodoForm