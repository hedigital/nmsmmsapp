/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import callTypeSlice from '../features/callTypeSlice';

const store = configureStore({
  reducer: {
    callType: callTypeSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
