import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers } from '../../types/offers';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../types/const';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  } catch (err) {
    throw err;
  }
});
