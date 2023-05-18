import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    shouldFetchData: false,
  },
  reducers: {
    setShouldFetchData: (state, action) => {
      state.shouldFetchData = action.payload;
    },
  },
});

export const { setShouldFetchData } = mainSlice.actions;
export default mainSlice.reducer;
