import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { UserMongoRepository } from '../repositories/user-mongo.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserMongoSchema,
  UserMongoSchemaFactory,
} from '../repositories/user-mongo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserMongoSchema.name, schema: UserMongoSchemaFactory },
    ]),
  ],
  controllers: [UserController],
  providers: [CreateUserUseCase, UserMongoRepository],
})
export class UserModule {}
