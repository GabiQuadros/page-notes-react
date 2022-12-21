import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Logged = (): string => localStorage.getItem("logged") || "";
const user: string = Logged();
const initialState = user;

const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    loginOn(_, action: PayloadAction<string>) {
      localStorage.setItem("logged", action.payload);
      return action.payload;
    },
  },
});

export const { loginOn } = loggedSlice.actions;
export default loggedSlice.reducer;
