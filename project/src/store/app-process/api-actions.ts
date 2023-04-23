import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../types/const';

export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({ payload: route })
);
