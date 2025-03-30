export class UserEntity {
  userId: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;

  constructor(
    userId: string,
    name: string,
    email: string,
    isAdmin: boolean,
    createdAt: Date,
  ) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
    this.createdAt = createdAt;
  }
}
