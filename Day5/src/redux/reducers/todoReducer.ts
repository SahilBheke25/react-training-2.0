import { Todo } from "../../models/Todo";
import { Todo_Action_Constants } from "../actionConstants/todoActionConstants";

const { ADD, TOGGLE, DELETE} = Todo_Action_Constants;

const initialState: Todo[] = []

type Action = 
  | {type: typeof ADD; payload: Todo}
  | {type: typeof TOGGLE; payload: number}
  | {type: typeof DELETE; payload: number};

export const todoReducer = (state = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case TOGGLE:
      return state.map((task)=> task.id === action.payload ? { ...task, isDone: !task.isDone } : task)
    case DELETE:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  } 
};

export default todoReducer;
