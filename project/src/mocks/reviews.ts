import { Reviews } from '../types/reviews';

export const reviewsList: Reviews[] = [
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2023-03-11T20:42:44.999Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
    },
  },
];

export const review: Reviews = {
  comment:
    'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2023-03-11T20:42:44.999Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: 1,
    isPro: false,
    name: 'Oliver.conner',
  },
};
