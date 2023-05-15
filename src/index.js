import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import { Provider } from 'react-redux';
import rootReducer from './modules/config';
import { createStore } from 'redux';

import { DatePickerProvider } from '@bcad1591/react-date-picker';

export const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DatePickerProvider>
      <App />
    </DatePickerProvider>
  </Provider>
);
