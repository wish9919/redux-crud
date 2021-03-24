import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { NoteInput } from "../components/NoteInput";
import { NotesState, Action } from "../redux/reducers/notesReducers";

interface NotesProps {
  notes: NotesState[];
}

const Notes: React.FC = () => {
  const notes = useSelector<NotesProps, NotesState[]>((state) => state.notes);
  const dispatch = useDispatch<Dispatch<Action>>();
  const addNote = (note: string) => {
    dispatch({
      type: "ADD_NOTE",
      payload: note,
    });
  };

  return (
    <div>
      <h1 className="text-4xl">Notes</h1>
      <NoteInput addNote={addNote} />
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
