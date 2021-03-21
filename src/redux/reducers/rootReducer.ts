import { combineReducers } from "redux";
import { todosReducers } from "./todoReducers";
import { notesReducers } from "./notesReducers";

const rootReducer = combineReducers({
  notes: notesReducers,
  todos: todosReducers,
});

export default rootReducer;
