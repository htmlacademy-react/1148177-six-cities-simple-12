import { Reviews } from '../types/reviews';

export const reviewsList: Reviews[] = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 2,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-02-19T07:31:24.880Z',
  },
];

export const review: Reviews = reviewsList[0];
