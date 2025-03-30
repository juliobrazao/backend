import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { UserMongoRepository } from '@/infra/repositories/user-mongo.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserMongoSchema,
  UserMongoSchemaFactory,
} from '../repositories/user-mongo.schema';
import { MysqlModule } from '@/infra/providers/mysql.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserMongoSchema.name, schema: UserMongoSchemaFactory },
    ]),
    MysqlModule,
  ],
  controllers: [UserController],
  providers: [CreateUserUseCase, UserMongoRepository],
})
export class UserModule {}
