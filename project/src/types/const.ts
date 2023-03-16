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
  'terribly'
];
