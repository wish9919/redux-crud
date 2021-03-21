import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { TodoInput } from "../components/TodoInput";
import { TodoState, Action } from "../redux/reducers/todoReducers";

interface TodoProps {
  todos: TodoState[];
}

const Todos: React.FC = () => {
  const todos = useSelector<TodoProps, TodoState[]>((state) => state.todos);
  const dispatch = useDispatch<Dispatch<Action>>();
  const addTodo = (todo: string) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput addTodo={addTodo} />

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
