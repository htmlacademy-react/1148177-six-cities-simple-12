export type Reviews = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserInfo;
};

export type UserInfo = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};
