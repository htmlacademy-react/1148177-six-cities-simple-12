import { Reviews } from './../types/reviews';
import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortType } from '../types/const';
import { Offer, Offers } from '../types/offers';
import { UserData } from '../types/user-data';

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

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadOfferById = createAction<Offer>('data/loadOfferById');

export const loadNearOffers = createAction<Offers>('data/loadNearOffers');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus'
);

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({ payload: userData })
);
