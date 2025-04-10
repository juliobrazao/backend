import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import User from '@/domain/entities/user.entity';
import UpdateUserParams from '@/domain/shared/update-user.params';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(
    userId: string,
    updatedUserParams: UpdateUserParams,
  ): Promise<User> {
    return this.mysqlRepository.user.update(userId, updatedUserParams);
  }
}
