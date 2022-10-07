import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from ".";

type InitialStateType = {
  credential: User | null;
};

const initialState: InitialStateType = {
  credential: null,
};

export const credentialSlice = createSlice({
  name: "credential",
  initialState,
  reducers: {
    setCredential(state, action: PayloadAction<User | null>) {
      state.credential = action.payload;
    },
    deleteCredential(state) {
      state.credential = null;
    },
  },
});

export const { deleteCredential, setCredential } = credentialSlice.actions;
export const selectCredential = (state: RootState) => state.credential;
export default credentialSlice.reducer;
