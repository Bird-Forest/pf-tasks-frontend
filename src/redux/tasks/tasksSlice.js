import { createSlice } from '@reduxjs/toolkit';
import { addTask, changeTaskColor, deleteTask, fetchTasks } from './servise';

// console.log(tasksData);
// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksData,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.tasks.push(action.payload);
//       },
//       prepare(title) {
//         return {
//           payload: {
//             title,
//             id: nanoid(),
//             color: 'white',
//           },
//         };
//       },
//     },

//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter(task => task.id !== action.payload);
//     },

//     changeTaskColor: (state, action) => {
//       state.tasks = state.tasks.map(task => {
//         if (task.id === action.payload.id) {
//           task.color = action.payload.color;
//         }
//         return task;
//       });
//     },
//   },
// });

// export const { addTask, deleteTask, changeTaskColor } = taskSlice.actions;
// export const tasksReducer = taskSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)

      .addCase(changeTaskColor.pending, handlePending)
      .addCase(changeTaskColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
        // state.tasks.push(action.payload);
        // state.tasks = state.tasks.map(task => {
        //   if (task.id === action.payload.id) {
        //     task.color = action.payload.color;
        //   }
        //   return task;
        // });
      })
      .addCase(changeTaskColor.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(
          task => task._id !== action.payload._id
        );
      })
      .addCase(deleteTask.rejected, handleRejected),
});
export const tasksReducer = tasksSlice.reducer;
