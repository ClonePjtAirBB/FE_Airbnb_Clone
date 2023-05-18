import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import { Provider } from 'react-redux';
import store from './modules/configStore';

import { DatePickerProvider } from '@bcad1591/react-date-picker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DatePickerProvider>
      <App />
    </DatePickerProvider>
  </Provider>
);
