const RESET = 'form/RESET';
const GET_FORM_DATA = 'form/GET_FORM_DATA';
const SET_PLACE = 'form/SET_PLACE';
const SET_CHECKIN = 'form/SET_CHECKIN';
const SET_CHECKOUT = 'form/SET_CHECKOUT';
const SET_GUESTS = 'form/SET_GUESTS';
const SET_STAY_TYPE = 'form/SET_STAY_TYPE';

export const reset = () => ({ type: RESET });

export const setFormData = data => {
  const payload = data.value;
  switch (data.name) {
    case 'place':
      return { type: SET_PLACE, payload };
    case 'checkIn':
      return { type: SET_CHECKIN, payload };
    case 'checkOut':
      return { type: SET_CHECKOUT, payload };
    case 'guests':
      return { type: SET_GUESTS, payload };
    case 'stayType':
      return { type: SET_STAY_TYPE, payload };
    default:
      break;
  }
};

export const getFormData = formData => ({
  type: GET_FORM_DATA,
  formData,
});

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

const filterForm = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    case SET_PLACE:
      return {
        ...state,
        place: action.payload,
      };
    case SET_CHECKIN:
      return {
        ...state,
        checkIn: action.payload,
        checkOut: '',
      };
    case SET_CHECKOUT:
      return {
        ...state,
        checkOut: action.payload,
      };
    case SET_GUESTS:
      return {
        ...state,
        guests: action.payload,
      };
    case SET_STAY_TYPE:
      return {
        ...state,
        stayType: action.payload,
      };
    case GET_FORM_DATA:
      return {
        ...action.formData,
      };
    default:
      return state;
  }
};

export default filterForm;
