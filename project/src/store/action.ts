import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('city/changeCity', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({
    payload: offerId,
  })
);
