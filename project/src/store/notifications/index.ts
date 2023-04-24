import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Notification } from '../../types/notifications';
import { NameSpace } from '../../types/const';
import { State } from '../../types/state';

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [],
};

export const notifications = createSlice({
  name: NameSpace.Notifications,
  initialState,
  reducers: {
    pushNotification: (
      state,
      action: PayloadAction<Omit<Notification, 'id'>>
    ) => {
      const id = nanoid();
      state.notifications.push({ id, ...action.payload });
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { pushNotification, clearNotification } = notifications.actions;

export const getNotifications = (state: State): Notification[] =>
  state[NameSpace.Notifications].notifications;
