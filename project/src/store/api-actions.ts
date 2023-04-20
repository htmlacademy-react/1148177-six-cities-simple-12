import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loadOffers,
  requireAuthorization,
  redirectToRoute,
  setDataLoadingStatus,
  loadNearOffers,
  loadReviews,
  loadOfferById,
} from './action';
import { saveToken, dropToken } from '../services/token';

import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews.js';
import { AppDispatch, State } from '../types/state';
import { Offer, OfferId, Offers } from '../types/offers';
import { APIRoute, AppRoute, AuthorizationStatus } from '../types/const';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<Offers>(APIRoute.Offers);
  dispatch(setDataLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchOfferByIdAction = createAsyncThunk<
  void,
  OfferId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOfferId', async (offerId, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));

  try {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(loadOfferById(data));
    dispatch(setDataLoadingStatus(false));
  } catch {
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(setDataLoadingStatus(false));
  }
});

export const fetchNearOffersAction = createAsyncThunk<
  void,
  OfferId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearOffers', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(
    `${APIRoute.Offers}/${offerId}/nearby`
  );
  dispatch(loadNearOffers(data));
});

export const fetchReviewAction = createAsyncThunk<
  void,
  OfferId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviewAction', async (offerId, { dispatch, extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
  dispatch(loadReviews(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
