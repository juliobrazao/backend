import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_PROXY_REPOSITORY } from '@/infra/modules/mysql.module'; // ✅ Import the token
import IMySQLProxyRepository from '../repositories/abstract-mysql-proxy.repository';
import CreateUserParams from '../shared/create-user.params';
import { UserEntity } from '@/infra/repositories/mysql/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(MYSQL_PROXY_REPOSITORY) // ✅ Inject using the token
    private readonly mysqlRepository: IMySQLProxyRepository,
  ) {}

  async execute(user: CreateUserParams): Promise<UserEntity> {
    const newUser = await this.mysqlRepository.user.create(user as UserEntity);
    return newUser;
  }
}
