import React, { ChangeEvent, useState } from "react";

interface TodoInputProps {
  addTodo(note: string): void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [note, setTodo] = useState("");
  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onAddTodoClick = () => {
    if (note === "") {
      alert("Todo Field Required");
    } else {
      addTodo(note);
      setTodo("");
    }
  };

  return (
    <div className="note-input-form">
      <input
        value={note}
        onChange={updateTodo}
        type="text"
        name="note"
        placeholder="Enter Todo"
      />
      <button onClick={onAddTodoClick}>Add note</button>
    </div>
  );
};
