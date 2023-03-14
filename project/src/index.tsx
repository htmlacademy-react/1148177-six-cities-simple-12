import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { reviewsList } from './mocks/reviews';
import { offer, offersList } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={312}
      offersList={offersList}
      offer={offer}
      reviewsList={reviewsList}
    />
  </React.StrictMode>
);
