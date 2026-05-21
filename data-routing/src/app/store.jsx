import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authReducer";

export let store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
