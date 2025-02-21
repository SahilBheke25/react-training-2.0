import { useReducer, useState } from "react";
import { todoReducer } from "../reducer/todoReducer";
import { Todo } from "../models/Todo";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";

function TodoApp() {

  const [idCounter, setIdCounter] = useState(1);
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTask = (newTodo: Todo) => {
    dispatch({type:'ADD_TODO', payload: newTodo})
  };

  const handleIsDone = (id: number) => {
    dispatch({type: 'CHANGE_STATUS', payload: id})
  };

  const handleDelete = (id : number) => {
    dispatch({type: 'DELETE', payload: id})
  };

  return (
    <>
      <TodoForm addTodo={handleAddTask} idCounter={idCounter} incrementId={() => setIdCounter(idCounter+1)} />
      <br />
      <TodoList todos={todos} onToggle={handleIsDone} onDelete={handleDelete} />
    </>
  );

}

export default TodoApp;