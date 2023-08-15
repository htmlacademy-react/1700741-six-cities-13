// Подчеркивает import React from 'react'; - Ошибка синтаксического анализа: не удается прочитать файл 'c:\users\user\desktop\tsconfig.json '.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import { offers } from './mocks/offers';
import { users } from './mocks/users';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfOffersCards={Setting.numberOfOfferCards}
      offers={offers}
      comments={comments}
      users={users}
    />
  </React.StrictMode>,
);
