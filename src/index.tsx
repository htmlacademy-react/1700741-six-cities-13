// Подчеркивает import React from 'react'; - Ошибка синтаксического анализа: не удается прочитать файл 'c:\users\user\desktop\tsconfig.json '.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cityName = {Setting.cityName}
      placesCount = {Setting.placesCount}
      favoriteCount={Setting.favoriteCount}
    />
  </React.StrictMode>,
);
