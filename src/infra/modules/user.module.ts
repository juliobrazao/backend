import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { UserRepository } from '../repositories/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaFactory } from '../repositories/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSchema.name, schema: UserSchemaFactory },
    ]),
  ],
  controllers: [UserController],
  providers: [CreateUserUseCase, UserRepository],
})
export class UserModule {}
