import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';


const containerCity = ReactDOM.createRoot(
  document.querySelector('cities__places-container') as HTMLElement
);

containerCity.render(
  <React.StrictMode>
    <App
      cityName = {Setting.cityName}
      placesCount = {Setting.placesCount}
    />
  </React.StrictMode>
)
