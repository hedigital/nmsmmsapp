/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import testCount from '../features/testCount';

const store = configureStore({
  reducer: {
    count: testCount,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
