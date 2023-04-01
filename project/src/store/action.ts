import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../types/const';

export const changeCity = createAction('city/changeCity', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction(
  'offers/selectOffer',
  (offerId: number | null) => ({
    payload: offerId,
  })
);

export const changeSort = createAction(
  'offers/changeSort',
  (sort: SortType) => ({ payload: sort })
);

export const updateOffers = createAction('offers/updateOffers');
