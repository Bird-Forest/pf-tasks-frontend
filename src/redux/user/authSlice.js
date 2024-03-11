import { createSlice } from '@reduxjs/toolkit';
// import { FcReddit } from 'react-icons/fc';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateAvatar,
  updateUser,
} from './operations';

const initialState = {
  user: { _id: null, name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.error;
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
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, handleRejected)

      // ---------- LOGIN USER ----------------
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, handleRejected)

      // ---------- LOGOUT USER ----------------
      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        // state.user = action.payload;
        state.token = null;
        state.isLoggedIn = false;
        // return initialState
      })
      .addCase(logoutThunk.rejected, handleRejected)

      // ---------- REFRESH USER ----------------
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })

      // ---------- USER AVATAR ----------------
      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
      })
      .addCase(updateAvatar.rejected, handleRejected)

      // ---------- USER NAME ----------------
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.name;
      })
      .addCase(updateUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
