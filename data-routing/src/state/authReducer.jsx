import { createSlice } from "@reduxjs/toolkit";
import { currentLoginAction, loginUserAction } from "./authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(currentLoginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(currentLoginAction.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export let { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
