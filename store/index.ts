import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import credentialReducer from "./credentialSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    credential: credentialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
