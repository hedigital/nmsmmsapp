/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  point: '',
  cmName: '',
  startDate: '',
  endDate: '',
  isLocationCorrect: '',
  status: '',
  outletCode: '',
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setPoint: (state, action) => {
      state.point = action.payload;
    },
    setCmName: (state, action) => {
      state.cmName = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setLocationCorrect: (state, action) => {
      state.isLocationCorrect = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setOutletCode: (state, action) => {
      state.outletCode = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  setPoint,
  setCmName,
  setStartDate,
  setEndDate,
  setLocationCorrect,
  setStatus,
  setOutletCode,
} = filterSlice.actions;
