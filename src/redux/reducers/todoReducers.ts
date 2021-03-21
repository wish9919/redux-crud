export interface TodoState {
  [index: number]: string[];
}

const initialState: TodoState[] = [];

export type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string };

export const todosReducers = (
  state: TodoState[] = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};
