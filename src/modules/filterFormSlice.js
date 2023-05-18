import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
  checkIn: '',
  checkOut: '',
  guests: {
    adult: 0,
    children: 0,
    infant: 0,
    pet: 0,
  },
  stayType: '',
};

const filterFormSlice = createSlice({
  name: 'filterForm',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setPlace: (state, action) => {
      return {
        ...state,
        place: action.payload,
      };
    },
    setCheckIn: (state, action) => {
      return {
        ...state,
        checkIn: action.payload,
        checkOut: '',
      };
    },
    setCheckOut: (state, action) => {
      return {
        ...state,
        checkOut: action.payload,
      };
    },
    setGuests: (state, action) => {
      return {
        ...state,
        guests: action.payload,
      };
    },
    setStayType: (state, action) => {
      return {
        ...state,
        stayType: action.payload,
      };
    },
    getFormData: (state, action) => {
      //   return action.payload;
      return state;
    },
  },
});

export const { reset, setPlace, setCheckIn, setCheckOut, setGuests, setStayType, getFormData } =
  filterFormSlice.actions;

export default filterFormSlice.reducer;
