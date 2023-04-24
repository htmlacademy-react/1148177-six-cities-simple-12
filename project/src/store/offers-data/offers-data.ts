import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../types/const';
import { Offers } from '../../types/offers';
import { fetchOffersAction } from './api-actions';

export type OffersData = {
  offers: Offers;
  offersStatus: FetchStatus;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: FetchStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersStatus = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      });
  },
});
