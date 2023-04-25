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
  Loading = 'LOADING',
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

export enum IconType {
  Default = './img/pin.svg',
  Current = '/img/pin-active.svg',
}

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Offer = 'OFFER',
  App = 'APP',
  Notifications = 'NOTIFICATIONS',
}

export enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}
