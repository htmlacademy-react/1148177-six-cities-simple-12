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
  location: OfferLocation;
  maxAdults: number;
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type OfferItem = {
  id: number;
  previewImage: string;
  price: number;
  title: string;
  type: string;
  rating: number;
  isPremium: boolean;
};

export type OfferHost = UserInfo;
