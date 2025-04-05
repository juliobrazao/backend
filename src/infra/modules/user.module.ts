import { Module } from '@nestjs/common';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { MySQLModule } from './mysql.module';

@Module({
  imports: [MySQLModule],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
