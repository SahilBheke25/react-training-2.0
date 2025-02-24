import { Todo } from "../models/Todo";

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "CHANGE_STATUS"; payload: number }
  | { type: "DELETE"; payload: number };

export const todoReducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, { ...action.payload }];
    case "CHANGE_STATUS":
      return todos.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case "DELETE":
      return todos.filter((task) => task.id !== action.payload);
    default:
      return todos;
  }
};
