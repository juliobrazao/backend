import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import GetUserByIdParams from '@/domain/shared/get-user-by-id.params';
import User from '@/domain/entities/user.entity';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(params: GetUserByIdParams): Promise<User> {
    return this.mysqlRepository.user.find(params);
  }
}
