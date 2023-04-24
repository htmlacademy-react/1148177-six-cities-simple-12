import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../types/const';
import { offersData } from './offers-data/offers-data';
import { userData } from './user-process/user-process';
import { offerData } from './offer-data/offer-data';
import { appProcess } from './app-process/app-process';
import { notifications } from './notifications';

export const reducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Notifications]: notifications.reducer,
});
