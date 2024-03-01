import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constans';

const filterInit = {
  status: statusFilters,
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
