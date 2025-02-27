import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  text: string;
  completed: boolean;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.notes.push(newNote);
    },
    toggleNote: (state, action: PayloadAction<number>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.completed = !note.completed;
      }
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, toggleNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
