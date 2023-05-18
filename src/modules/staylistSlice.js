import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllList, getFilteredList } from '../apis/stayList';

const initialState = {
  list: [],
  filteredData: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getList = createAsyncThunk('getList', async (payload, thunkAPI) => {
  try {
    const response = await getAllList();
    console.log('__getList payload => ', payload);
    console.log('__getList response => ', response);
    // return thunkAPI.fulfillWithValue(response);
    return response.data;
    // .data.어쩌구 해야함
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getFilteredList = createAsyncThunk('getFilteredList', async (payload, thunkAPI) => {
  try {
    const response = await getFilteredList(payload);
    console.log('__getFilterdeList response => ', response);
    // return thunkAPI.fulfillWithValue(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
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
      state.list = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__getFilteredList.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getFilteredList.fulfilled]: (state, action) => {
      console.log('stayListSlice filterd action =>', action);
      state.isLoading = false;
      state.isError = false;
      console.log('stayListSlice filterd state =>', state);
      state.filteredData = action.payload;
    },
    [__getFilteredList.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const {} = stayListSlice.actions;
export default stayListSlice.reducer;
