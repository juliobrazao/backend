import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { MySQLModule } from './mysql.module';
import { GetUsersUseCase } from '@/domain/usecases/get-users.usecase';
import { GetUserByIdUseCase } from '@/domain/usecases/get-user-by-id.usecase';

@Module({
  imports: [MySQLModule],
  controllers: [UserController],
  providers: [CreateUserUseCase, GetUsersUseCase, GetUserByIdUseCase],
})
export class UserModule {}
