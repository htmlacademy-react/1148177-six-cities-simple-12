import { OfferItem } from '../types/offers';

export function emptyClass(offers: Array<OfferItem>) {
  const className = 'page__main page__main--index';

  return offers.length > 0 ? className : `${className} page__main--index-empty`;
}

export function firstLetterUpper(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
