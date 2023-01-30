/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import callTypeSlice from '../features/callTypeSlice';
import FilterSlice from '../features/FilterSlice';

const store = configureStore({
  reducer: {
    callType: callTypeSlice,
    filter: FilterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
