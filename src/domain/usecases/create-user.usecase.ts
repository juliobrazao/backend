import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import User from '@/domain/entities/user.entity';
import CreateUserParams from '@/domain/shared/create-user.params';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(user: CreateUserParams): Promise<User> {
    const newUser = await this.mysqlRepository.user.create(
      user as unknown as User,
    );
    return newUser;
  }
}
