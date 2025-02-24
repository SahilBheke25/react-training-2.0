import { useState } from "react";
import { Todo } from "../models/Todo";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeStatus, deleteTodo } from "../redux/actions/todoActions";

function TodoApp() {

  const [idCounter, setIdCounter] = useState(1);

  //Redux
  const todos = useSelector((state:{todo:Todo[]}) => state.todo)
  const dispatch = useDispatch();

  const handleAddTask = (newTodo: Todo) => {
    dispatch(addTodo(newTodo))
  };

  const handleIsDone = (id: number) => {
    dispatch(changeStatus(id))
  };

  const handleDelete = (id : number) => {
    dispatch(deleteTodo(id))
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