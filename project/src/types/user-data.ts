import { UserInfo } from './reviews';

export type UserData = UserInfo & {
  email: string;
  token: string;
};
