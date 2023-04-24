import { State } from '../../types/state';
import { OfferId } from '../../types/offers';
import { City, NameSpace, SortType } from '../../types/const';

export const getCity = (state: State): City => state[NameSpace.App].city;
export const getSortType = (state: State): SortType =>
  state[NameSpace.App].sortType;
export const getSelectedOfferId = (state: State): OfferId | null =>
  state[NameSpace.App].selectedOfferId;
