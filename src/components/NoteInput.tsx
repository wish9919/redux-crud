import React, { ChangeEvent, useState } from "react";

interface NoteInputProps {
  addNote(note: string): void;
}

export const NoteInput: React.FC<NoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    if (note === "") {
      alert("Note Field Required");
    } else {
      addNote(note);
      setNote("");
    }
  };

  return (
    <div className="note-input-form">
      <input
        value={note}
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="Enter Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
