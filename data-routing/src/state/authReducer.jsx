import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers:(builder) =>{

  }
});

export let { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
