import { combineReducers } from "@reduxjs/toolkit";
import NoteSlice from "./NoteSlice";
import logged from "./loginSlice";
import account from "./createSlice";

export default combineReducers({
  NoteSlice,
  logged,
  account,
});
