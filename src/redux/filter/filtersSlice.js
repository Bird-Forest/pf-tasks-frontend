import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'color',
  initialState: {
    filter: null,
  },
  reducers: {
    setColorFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setColorFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
