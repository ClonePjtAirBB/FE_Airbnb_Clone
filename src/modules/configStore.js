import { configureStore } from '@reduxjs/toolkit';
import filterFormSlice from './filterFormSlice';

const store = configureStore({
  reducer: { filterFormSlice },
});

export default store;
