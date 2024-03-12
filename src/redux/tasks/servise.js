import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ******************************************************************************
axios.defaults.baseURL = 'http://localhost:3001/api';
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// const tasksURL = axios.create({
//   baseURL: 'http://localhost:3001/api',
// });
// axios.defaults.baseURL = 'http://localhost:3001/api';
// // Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll', // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен ми нічого не передаємо
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setAuthHeader(token);
    try {
      const res = await axios.get('/tasks');

      // При успішному запиті повертаємо проміс із даними
      console.log(res.data);
      return res.data; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', newTask);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    console.log(taskId);
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeTaskColor = createAsyncThunk(
  'tasks/updateColor',
  async (newTask, thunkAPI) => {
    console.log(newTask);
    try {
      const res = await axios.patch(`/tasks/${newTask.taskId}/color`, {
        color: newTask.newColor,
      });
      console.log(res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const toggleCompleted = createAsyncThunk(
//   'tasks/toggleCompleted',
//   async (task, thunkAPI) => {
//     try {
//       const response = await axios.put(`/tasks/${task.id}`, {
//         completed: !task.completed,
//       });
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// *************************************************************************
