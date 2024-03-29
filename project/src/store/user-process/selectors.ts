import { AuthorizationStatus, NameSpace } from '../../types/const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getIsAuthorized = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getIsLoading = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Loading;

export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].userData;
