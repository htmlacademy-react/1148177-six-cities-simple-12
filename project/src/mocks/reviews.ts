import { Review } from '../types/reviews';

export const reviewsList: Review[] = [
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
  {
    id: 2,
    user: {
      id: 16,
      isPro: false,
      name: 'Jane',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 3.5,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-02-19T07:31:24.880Z',
  },
  {
    id: 3,
    user: {
      id: 17,
      isPro: true,
      name: 'Anna',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 4.2,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-02-19T07:31:24.880Z',
  },
];

export const review: Review = reviewsList[0];
