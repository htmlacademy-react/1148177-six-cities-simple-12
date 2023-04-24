import { createSelector } from '@reduxjs/toolkit';
import { sortReviews } from '../../utils/funcs';
import { FetchStatus, NameSpace } from '../../types/const';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getOffer = (state: State): Offer | null =>
  state[NameSpace.Offer].offer;

export const getOfferStatus = (state: State): FetchStatus =>
  state[NameSpace.Offer].offerStatus;

export const getNearOffers = (state: State): Offers =>
  state[NameSpace.Offer].nearOffers;

export const getReviews = (state: State): Reviews =>
  state[NameSpace.Offer].reviews;

export const getBlockedStatus = (state: State): FetchStatus =>
  state[NameSpace.Offer].reviewFormBlockedStatus;

export const getOfferPropertyStatus = createSelector(
  [getOfferStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Failed,
  })
);

export const getReviewFormBlockedStatus = createSelector(
  [getBlockedStatus],
  (status) => ({
    isLoading: status === FetchStatus.Loading,
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Failed,
  })
);

export const getSortedReviews = createSelector(getReviews, (reviews) =>
  sortReviews(reviews).slice(0, 10)
);
