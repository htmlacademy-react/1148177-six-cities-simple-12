import { City, SortType } from '../types/const';
import { OfferItem, Offers } from '../types/offers';

function emptyClass(offers: Array<OfferItem>) {
  const className = 'page__main page__main--index';

  return offers.length > 0 ? className : `${className} page__main--index-empty`;
}

function firstLetterUpper(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

function formatDate(date: string, locales = 'en-US') {
  return new Date(date).toLocaleString(locales, {
    month: 'long',
    year: 'numeric',
  });
}

function getOffersByCity(city: string, offers: Offers) {
  return offers.filter((offer) => offer.city.name === city);
}

function getCurrentOffers(
  offers: Offers,
  city = City.Paris,
  sortType = SortType.Popular
): Offers {
  const offersByLocation = getOffersByCity(city, offers);

  switch (sortType) {
    case SortType.LowPrice:
      return offersByLocation.sort((a, b) => a.price - b.price);
    case SortType.HighPrice:
      return offersByLocation.sort((b, a) => a.price - b.price);
    case SortType.Rating:
      return offersByLocation.sort((b, a) => a.rating - b.rating);
    default:
      return offersByLocation;
  }
}

function getRating(rating: number): number {
  return (Math.round(rating) * 100) / 5;
}

export {
  emptyClass,
  firstLetterUpper,
  formatDate,
  getOffersByCity,
  getCurrentOffers,
  getRating,
};
