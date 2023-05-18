import { configureStore } from '@reduxjs/toolkit';
import filterFormSlice from './filterFormSlice';
import staylistSlice from './staylistSlice';

const store = configureStore({
  reducer: { filterFormSlice, staylistSlice },
});

export default store;
