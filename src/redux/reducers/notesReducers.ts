export interface NotesState {
  [index: number]: string;
}

const notes = localStorage.getItem("notes");
const notesJson = notes ? JSON.parse(notes) : [];
const initialState: NotesState[] = notesJson;

export type Action =
  | { type: "ADD_NOTE"; payload: string }
  | { type: "DELETE_NOTE"; payload: string };

export const notesReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE":
      localStorage.setItem("notes", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    default:
      return state;
  }
};
