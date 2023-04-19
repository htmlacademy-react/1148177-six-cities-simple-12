import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus, CITIES, SortType } from '../types/const';
import { Offer, Offers } from '../types/offers';
import {
  changeCity,
  changeSort,
  loadNearOffers,
  loadOfferById,
  loadOffers,
  loadReviews,
  requireAuthorization,
  selectOffer,
  setDataLoadingStatus,
} from './action';
import { Reviews } from '../types/reviews';

type InitialState = {
  selectedOfferId: number | null;
  city: string;
  sortType: SortType;
  offersList: Offers;
  offerById: Offer | null;
  nearOffers: Offers;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  isDataLoading: boolean;
};

const initialState: InitialState = {
  selectedOfferId: null,
  city: CITIES[0],
  sortType: SortType.Popular,
  offersList: [],
  offerById: null,
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerById = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
