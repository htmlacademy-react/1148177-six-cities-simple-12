export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserInfo;
};

export type Reviews = Review[];

export type UserInfo = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type ReviewData = Omit<Review, 'user' | 'date'>;
