import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import User from '@/domain/entities/user.entity';
import CreateUserParams from '@/domain/shared/create-user.params';
import IMongoProxyRepository from '../repositories/abstract-mongo-proxy.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly mysqlRepository: IMySQLProxyRepository,
    private readonly mongoRepository: IMongoProxyRepository,
  ) {}

  async execute(user: CreateUserParams): Promise<User> {
    const newUser = await this.mysqlRepository.user.create(
      user as unknown as User,
    );

    await this.mongoRepository.user.create(user as unknown as User);

    return newUser;
  }
}
