import { useReducer, useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

const todoReducer = (todos: Todo[], action: any) => {
  switch(action.type){
    case 'ADD_TODO':  
      return [...todos, {...action.payload}]
    case 'CHANGE_STATUS': 
      return todos.map((task)=> task.id === action.payload ? {...task, isDone: !task.isDone} : task)
    case 'DELETE':
      return todos.filter((task) => task.id != action.payload)
    default:
      return todos
  }
}

function TodoApp() {

  const [idCounter, setIdCounter] = useState(1); 
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [todo, setTodo] = useState<Todo>({id: -1, title: "", description: "", isDone: false})

  function handleAddTask(event: React.FormEvent) {

    event.preventDefault();
    if (!todo.title.trim() || !todo.description.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }
  
    // Reducer call
    dispatch({type:'ADD_TODO', payload: {...todo, id: idCounter}})

    setIdCounter((prev) => prev + 1);
    setTodo((prev)=>({...prev, id: -1,title:"", description:""}))
  }
  
  function handleIsDone(id: number) {
    dispatch({type: 'CHANGE_STATUS', payload: id})
  }


  function handleDelete(id: number) {
    dispatch({type: 'DELETE', payload: id})
  }

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={todo.title}
            onChange={(event) => setTodo((prev) => ({...prev, title: event.target.value}))}
          />
          <label className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            value={todo.description}
            onChange={(event) => {
              setTodo((prev) => 
                ({...prev, description: event.target.value})
            )
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      <br/>
      <br/>
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
            {todos.map((item, index) => (
              <tr key={1 + index} className="">
                <th>{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.isDone ? "Completed" : "Pending"}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleIsDone(item.id)}>
                    Change Status
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoApp;