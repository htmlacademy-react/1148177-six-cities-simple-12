import { offersList } from './../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';

import { CITIES, SortType } from '../types/const';
import { Offer } from '../types/offers';
import { changeCity, changeSort, selectOffer, updateOffers } from './action';

type InitialStateProps = {
  selectedOfferId: number | null;
  city: string;
  sortType: SortType;
  offersList: Offer[];
};

const initialState: InitialStateProps = {
  selectedOfferId: null,
  city: CITIES[0],
  sortType: SortType.Popular,
  offersList,
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
    .addCase(updateOffers, (state) => {
      state.offersList = offersList;
    });
});
