import { OfferItem } from '../types/offers';

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

export { emptyClass, firstLetterUpper, formatDate };
