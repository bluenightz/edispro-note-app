import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Note } from "../interfaces";

type notesState = {
  notes: Note[];
};

const initialState: notesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<Pick<Note, "id">>) {
      state.notes = state.notes.filter((note) => note.id != action.payload.id);
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default notesSlice.reducer;
