import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../types/const';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import {
  fetchNearOffersAction,
  fetchOfferAction,
  fetchReviewAction,
  sendReviewAction,
} from './api-actions';

export type OfferData = {
  offer: Offer | null;
  offerStatus: FetchStatus;
  nearOffers: Offers;
  reviews: Reviews;
  reviewFormBlockedStatus: FetchStatus;
};

const initialState: OfferData = {
  offer: null,
  offerStatus: FetchStatus.Idle,
  nearOffers: [],
  reviews: [],
  reviewFormBlockedStatus: FetchStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offerStatus = FetchStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerStatus = FetchStatus.Failed;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.reviewFormBlockedStatus = FetchStatus.Loading;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviewFormBlockedStatus = FetchStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.reviewFormBlockedStatus = FetchStatus.Failed;
      });
  },
});
