import { createSlice } from '@reduxjs/toolkit';
// import { colorFilters } from './constans';

const filtersSlice = createSlice({
  name: 'color',
  initialState: {
    filter: null,
    priorities: [],
  },
  reducers: {
    setColorFilter(state, action) {
      state.filter = action.payload;
    },
    getPriorityTasks(state, actions) {
      state.priorities = actions.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setColorFilter, getPriorityTasks } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
