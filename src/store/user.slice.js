import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../axios/axios";
import { toast } from "react-toastify";

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
      toast.success("成功登出", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {})
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        toast.success("成功登入", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .addCase(fetchUser.rejected, (state, action) => {});
  },
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
