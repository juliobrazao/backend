import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '../repositories/abstract-mysql-proxy.repository';
import User from '@/domain/entities/user.entity';
import UpdateUserParams from '../shared/update-user.params';
import { GetUserByIdUseCase } from './get-user-by-id.usecase';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly mysqlRepository: IMySQLProxyRepository,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  async execute(
    userId: string,
    updatedUserParams: UpdateUserParams,
  ): Promise<User> {
    return this.mysqlRepository.user.update(userId, updatedUserParams);
  }
}
