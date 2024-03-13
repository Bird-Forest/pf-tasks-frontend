import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:3001/api';
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
/*
 * POST @ /users/signup * body: { name, email, password }
 */
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (values, thunkAPI) => {
    console.log(values);
    try {
      const res = await axios.post('/users/register', values);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      // Одразу логінізація для отримання токену
      // loginThunk(values)(thunkAPI.dispatch, thunkAPI.getState);
      // setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/login  * body: { email, password }
 */
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (values, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', values);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PUT @ /users/updateAvatar  * headers: Authorization: Bearer token
 */
export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, thunkAPI) => {
    console.log(file);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const res = await axios.patch('/users/avatar', file);
      // setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * PUT @ /users/updateName  * headers: Authorization: Bearer token
 */
export const updateUser = createAsyncThunk(
  'auth/updateName',
  async (newName, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const token = state.auth.token;
      // setAuthHeader(token);
      const res = await axios.patch('/users/update/', newName);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/logout  * headers: Authorization: Bearer token
 */
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
 * GET @ /users/current * headers: Authorization: Bearer token
 */
export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
