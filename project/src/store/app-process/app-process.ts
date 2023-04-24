import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, NameSpace, SortType } from '../../types/const';
import { OfferId } from '../../types/offers';

type AppProcessState = {
  city: City;
  sortType: SortType;
  selectedOfferId: OfferId | null;
};

const initialState: AppProcessState = {
  city: City.Paris,
  sortType: SortType.Popular,
  selectedOfferId: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<OfferId | null>) => {
      state.selectedOfferId = action.payload;
    },
  },
});

export const { changeLocation, changeSort, selectOffer } = appProcess.actions;
