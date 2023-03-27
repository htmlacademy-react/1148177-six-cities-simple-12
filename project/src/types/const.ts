export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardType {
  Cities = 'cities',
  NearPlaces = 'near-places',
}

export const RATING_TYPES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CUSTOM_ICON = './img/pin.svg';
export const CURRENT_CUSTOM_ICON = '/img/pin-active.svg';
