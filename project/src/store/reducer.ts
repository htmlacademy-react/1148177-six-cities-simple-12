import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../types/const';
import { changeCity, selectOffer } from './action';

type InitialStateProps = {
  selectedOfferId: number | null;
  city: string;
};

const initialState: InitialStateProps = {
  selectedOfferId: null,
  city: CITIES[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});
