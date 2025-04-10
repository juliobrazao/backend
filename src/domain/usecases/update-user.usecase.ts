import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import User from '@/domain/entities/user.entity';
import UpdateUserParams from '@/domain/shared/update-user.params';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(
    id: string,
    updatedUserParams: UpdateUserParams,
  ): Promise<User> {
    console.log(id, updatedUserParams);
    return this.mysqlRepository.user.update(id, updatedUserParams);
  }
}
