import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllList } from '../apis/stayList';

const initialState = [
  {
    stayId: 1,
    country: '',
    city: '',
    host: '',
    costperday: 170000,
    filter: '',
    img: '',
  },
];

export const __getList = createAsyncThunk('getList', async (payload, thunkAPI) => {
  try {
    // axios 요청
    const response = await getAllList();
    console.log('__getList response => ', response);
    return thunkAPI.fulfillWithValue(response);
    // .data.어쩌구 해야함
  } catch (error) {
    console.log(`__getList Thunk error: ${error}`);
  }
});

export const stayListSlice = createSlice({
  name: 'stayListSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getList.fulfilled]: (state, action) => {
      console.log('stayListSlice action =>', action);
      state.isLoading = false;
      state.isError = false;
      console.log('stayListSlice state =>', state);
      // state.todos = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {} = stayListSlice.actions;
export default stayListSlice.reducer;
