import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../types/const';
import { Offers } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Data].offersStatus;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed,
}));
