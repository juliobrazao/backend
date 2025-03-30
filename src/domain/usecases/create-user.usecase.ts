import { UserMongoRepository } from '@/infra/repositories/user-mongo.repository';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { Injectable } from '@nestjs/common';
import { UserMongoEntity } from '../entities/user-mongo.entity';
import { UserMySQLRepository } from '@/infra/repositories/user-mysql.repository';
import { UserMySQLEntity } from '../entities/user-mysql.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userMongoRepository: UserMongoRepository,
    private readonly userMySQLRepository: UserMySQLRepository,
  ) {}

  async execute(createUserDTO: CreateUserRequestDTO): Promise<any> {
    const mongoUser = new UserMongoEntity(
      createUserDTO.userId,
      createUserDTO.name,
      createUserDTO.email,
      createUserDTO.isAdmin,
      new Date(),
    );

    await this.userMongoRepository.create(mongoUser);

    const mysqlUser = new UserMySQLEntity();
    mysqlUser.userId = createUserDTO.userId;
    mysqlUser.name = createUserDTO.name;
    mysqlUser.email = createUserDTO.email;
    mysqlUser.isAdmin = createUserDTO.isAdmin;
    mysqlUser.createdAt = new Date();

    await this.userMySQLRepository.create(mysqlUser);

    return { mongoUser, mysqlUser };
  }
}
