import { createStore, combineReducers, Action } from "redux";
import { todos, ITodo } from "./reducers/todos";
import { draftTodo, IDraftTodo } from "./reducers/draftTodo";

export default createStore(
  combineReducers({
    todos,
    draftTodo
  })
);
