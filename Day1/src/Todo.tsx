import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

function TodoApp() {
  
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [idCounter, setIdCounter] = useState(1); 
  const [taskList, setTaskList] = useState<Array<Todo>>([]);

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }

    setTaskList([
      ...taskList,
      { id: idCounter, title: title, description: desc, isDone: true },
    ]);

    setIdCounter((prev) => prev + 1);

    setTitle("");
    setDesc("");
  }

  function handleIsDone(index: number) {
    setTaskList((prev) =>
      prev.map((item) => {
        if (item.id == index) {
          return {...item, isDone: !item.isDone}
        }
        return item
      })
    );
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
            value={desc}
            onChange={(event) => {
              setDesc(event.target.value);
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
            {taskList.map((item, index) => (
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