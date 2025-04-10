import { Module } from '@nestjs/common';
import { MySQLModule } from '@/infra/modules/mysql.module';
import { MongoModule } from '@/infra/modules/mongo.module';
import { UserController } from '@/presentation/controllers/user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { GetUsersUseCase } from '@/domain/usecases/get-users.usecase';
import { GetUserByIdUseCase } from '@/domain/usecases/get-user-by-id.usecase';
import { UpdateUserUseCase } from '@/domain/usecases/update-user.usecase';
import { DeleteUserUseCase } from '@/domain/usecases/delete-user.usecase';

@Module({
  imports: [MySQLModule, MongoModule],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUsersUseCase,
    GetUserByIdUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UserModule {}
