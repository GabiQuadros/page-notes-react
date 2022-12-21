import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { NoteType } from "../../types";

const adapter = createEntityAdapter<NoteType>({
  selectId: (item) => item.id,
});

export const { selectAll: selectNotes, selectById: selectNoteById } =
  adapter.getSelectors((state: RootState) => state.NoteSlice);

const sliceNotes = createSlice({
  name: "notes",
  initialState: adapter.getInitialState(),
  reducers: {
    addNote: adapter.addOne,
    updateNote: adapter.updateOne,
    deleteNote: adapter.removeOne,
  },
});

export const { addNote, updateNote, deleteNote } = sliceNotes.actions;
export default sliceNotes.reducer;
