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
    console.log(action.payload.title," ", action.payload.description)
      return [...todos, {id: action.payload.id, title: action.payload.title, description: action.payload.description, isDone: false}]
    default:
      return todos
  }
}

function TodoApp() {
  
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [idCounter, setIdCounter] = useState(1); 
  const [taskList, setTaskList] = useState<Array<Todo>>([]);
  const [todos, dispatch] = useReducer(todoReducer, [])
  // const [todo, setTodo] = useState<Todo>({id: 0, title: "", description: "", isDone:false})



  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }

    // Reducer call
    dispatch({type:'ADD_TODO', payload: {id: idCounter, title: title, description: description}})

    // setTaskList([
    //   ...taskList,
    //   { id: idCounter, title: title, description: description, isDone: true },
    // ]);

    setIdCounter((prev) => prev + 1);

    setTitle("");
    setDescription("");
  }

  function handleIsDone(index: number) {
    setTaskList((prev) => prev.map((item)=> item.id == index ? {...item, isDone: !item.isDone} : item))
  }


  function handleDelete(index: number) {
    setTaskList(taskList.filter((task) => task.id != index));
  }

  return (
    <>
      <form onSubmit={handleAddTask}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
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