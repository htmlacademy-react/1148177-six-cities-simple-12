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

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
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

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  Rating = 'Top rated first',
}
