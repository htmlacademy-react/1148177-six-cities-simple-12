import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { UserData } from '../../types/user-data';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../types/const';
import { AuthData } from '../../types/auth-data';
import { dropToken, saveToken } from '../../services/token';
import { toast } from 'react-toastify';

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  try {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    return data;
  } catch (e) {
    toast.error('Failed to authorization');
    throw e;
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
  } catch (e) {
    toast.error('Failed to logout');
    throw e;
  }
});
