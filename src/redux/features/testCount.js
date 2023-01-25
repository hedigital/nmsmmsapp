/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    countIncrease: (state, action) => {
      state.count++;
    },
    countDecrease: (state, action) => {
      state.count--;
    },
  },
});

export default countSlice.reducer;
export const {countIncrease, countDecrease} = countSlice.actions;
