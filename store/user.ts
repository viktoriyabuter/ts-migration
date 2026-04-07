export enum UserStatus {
  Open = 0,
  Closed = 1,
  Blocked = 2,
}

interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: UserStatus;
}

export class UserDTO implements User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: UserStatus;

  constructor(data?: Partial<User>) {
    Object.assign(this, data);
  }
}
