import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ******************************************************************************

// const tasksURL = axios.create({
//   baseURL: 'https://653aaa722e42fd0d54d44bad.mockapi.io/api/v1/',
// });

// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchAll', // Використовуємо символ підкреслення як ім'я першого параметра,
//   // тому що в цій операції він нам не потрібен ми нічого не передаємо
//   async (_, thunkAPI) => {
//     try {
//       const response = await tasksURL.get('/tasks');
//       // При успішному запиті повертаємо проміс із даними
//       console.log(response.data);
//       return response.data; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
//     } catch (e) {
//       // При помилці запиту повертаємо проміс
//       // який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (title, thunkAPI) => {
//     try {
//       const response = await tasksURL.post('/tasks', { title });
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteTask = createAsyncThunk(
//   'tasks/deleteTask',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await tasksURL.delete(`/tasks/${taskId}`);
//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const toggleCompleted = createAsyncThunk(
//   'tasks/toggleCompleted',
//   async (task, thunkAPI) => {
//     try {
//       const response = await tasksURL.put(`/tasks/${task.id}`, {
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
