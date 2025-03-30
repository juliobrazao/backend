import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserMongoSchema } from './user-mongo.schema';
import { Model } from 'mongoose';
import { UserMongoEntity } from '@/domain/entities/user-mongo.entity';

@Injectable()
export class UserMongoRepository {
  constructor(
    @InjectModel(UserMongoSchema.name)
    private readonly userModel: Model<UserMongoSchema>,
  ) {}

  async create(user: UserMongoEntity): Promise<UserMongoEntity> {
    const createdUser = new this.userModel({
      userId: user.userId,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    });

    return createdUser.save();
  }
}
