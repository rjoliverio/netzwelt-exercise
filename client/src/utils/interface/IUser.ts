export interface IUser {
  username: string;
  displayName: string;
  roles: Array<string>;
}
export interface IUserResponse {
  success: boolean;
  data: {
    user: IUser;
    accessToken: string;
  };
  message: string;
}
