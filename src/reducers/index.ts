import { combineReducers } from "redux";
import { todos, ITodoState } from "./todos";
import { draftTodo, IDraftTodo } from "./draftTodo";

export interface IRootState {
  todos: ITodoState;
  draftTodo: IDraftTodo;
}

const rootReducer = combineReducers({
  todos,
  draftTodo
});

export default rootReducer;
