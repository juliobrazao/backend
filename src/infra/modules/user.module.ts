import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { UserService } from '../providers/services/user.service';

@Module({
  controllers: [UserController],
  providers: [CreateUserUseCase, UserService],
})
export class UserModule {}
