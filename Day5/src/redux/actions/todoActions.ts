import { Todo } from "../../models/Todo";
import { Todo_Action_Constants } from "../actionConstants/todoActionConstants";

const { ADD, TOGGLE, DELETE} = Todo_Action_Constants;

export const addTodo = (todo: Todo) => ({type: ADD, payload: todo})

export const changeStatus = (id: number) => ({type: TOGGLE, payload: id})

export const deleteTodo = (id: number) => ({type: DELETE, payload: id})

