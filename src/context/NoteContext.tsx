import createDataContext from "./createDataContext";
import uuid from "react-uuid";

export enum Colors {
  Red = "#fc4103",
  Blue = "#03a9fc",
  Yellow = "#fcec03",
  Green = "#03fc94"
}

// Data Interface
export interface Note {
  id: string;
  title: string;
  description: string;
  color: Colors;
}

export enum NoteActionType {
  ADD_NOTE = "ADD_NOTE",
  EDIT_NOTE = "EDIT_NOTE",
  DELETE_NOTE = "DELETE_NOTE"
}

const initialState = [
  {
    id: uuid(),
    title: "Example note",
    description: "This a starting note that can be either edited or deleted using the actions below.",
    color: Colors.Blue
  },
  {
    id: uuid(),
    title: "Scrollable content",
    description: "This is an example of a note that have a lot text inside. This is wrapped by a scroll view component that allows the user to scroll through to see all the avaiable content. Of course, you can also edit and delete this note. \nYou will notice that when trying to delete a note, you will see a confirmation dialog, that ask if you are sure to delete the current note.",
    color: Colors.Green
  },
]

// reducer
const notesReducer = (state, action) => {
  switch (action.type) {
    // Add a new note and generate a unique ID
    case NoteActionType.ADD_NOTE:
      return [ { id: uuid(), ...action.payload }, ...state ];

    // Edit a note by a given ID
    case NoteActionType.EDIT_NOTE:
      return state.map(note => {
        return note.id === action.payload.id ? action.payload : note;
      });

    // Delete a note by a give ID
    case NoteActionType.DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
}

const addNote = (dispatch) => {
  return (note: Omit<Note, "id">) => {
    dispatch({ type: NoteActionType.ADD_NOTE, payload: note });
  };
}

const editNote = (dispatch) => {
  return (note: Note) => {
    dispatch({ type: NoteActionType.EDIT_NOTE, payload: { ...note } });
  };
}

const deleteNote = (dispatch) => {
  return (id: Pick<Note, "id">) => {
    dispatch({ type: NoteActionType.DELETE_NOTE, payload: { id } });
  };
}

// actions
const actions = {
  addNote,
  editNote,
  deleteNote
}

export const { Context, Provider} = createDataContext(notesReducer, actions, initialState);