import { Offer, OfferItem, Offers } from '../types/offers';
import { City, SortType } from '../types/const';
import { Reviews } from '../types/reviews';

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

function sortReviews(reviews: Reviews) {
  return [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

const VIEW_REVIEWS_COUNT = 10;

function viewReviewsCount(reviews: Reviews) {
  return reviews.slice(0, VIEW_REVIEWS_COUNT);
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

const GALLERY_IMAGES_COUNT = 6;

function galleryImages(offer: Offer) {
  return offer.images.slice(0, GALLERY_IMAGES_COUNT);
}

const NEAR_PLACES_COUNT = 3;

function nearPlaces(offers: Offers) {
  return offers.slice(0, NEAR_PLACES_COUNT);
}

function getRandom(max: number): number {
  return Math.floor(Math.random() * (Math.floor(max) - 1));
}

export {
  getCurrentOffers,
  firstLetterUpper,
  viewReviewsCount,
  getOffersByCity,
  galleryImages,
  sortReviews,
  nearPlaces,
  emptyClass,
  formatDate,
  getRating,
  getRandom,
};
