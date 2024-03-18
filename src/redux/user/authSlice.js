import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  // refreshThunk,
  registerThunk,
  updateAvatar,
  updateUser,
} from './operations';

const initialState = {
  user: { _id: null, name: null, email: null, avatarURL: null },
  token: null,
  // isLoggedIn: false,
  // isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    // ---------- REGISTER USER ----------------
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        // state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, handleRejected)

      // ---------- LOGIN USER ----------------
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        // state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, handleRejected)

      // ---------- LOGOUT USER ----------------
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        // state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, handleRejected)

      // ---------- REFRESH USER ----------------
      // .addCase(refreshThunk.pending, handlePending)
      // .addCase(refreshThunk.fulfilled, (state, action) => {
      //   state.token = action.payload.token;
      //   state.user = action.payload.user;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      // })
      // .addCase(refreshThunk.rejected, (state, action) => {
      //   state.isRefreshing = false;
      //   state.token = null;
      //   state.isLoading = false;
      //   state.error = action.payload.error;
      // })

      // ---------- USER AVATAR ----------------
      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.user.avatarURL;
      })
      .addCase(updateAvatar.rejected, handleRejected)

      // ---------- USER NAME ----------------
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
      })
      .addCase(updateUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
