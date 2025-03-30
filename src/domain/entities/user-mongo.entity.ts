import { Document } from 'mongoose';

export class UserMongoEntity extends Document {
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
    super();
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
    this.createdAt = createdAt;
  }
}
