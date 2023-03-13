export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
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
