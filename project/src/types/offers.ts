import { UserInfo } from './reviews';

export type Offer = {
  id: number;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  images: string[];
  location: OfferCityLocation;
  maxAdults: number;
};

export type OfferCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: OfferCityLocation;
  name: string;
};

export type OfferItem = Offer;

export type OfferHost = UserInfo;
