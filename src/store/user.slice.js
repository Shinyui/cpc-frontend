import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../axios/axios";

const initialState = { user: undefined };

export const fetchUser = createAsyncThunk("api/auth/user", async () => {
  const resp = await API.get("/api/profile");
  return resp?.data?.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {})
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {});
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
