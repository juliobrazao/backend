import { Injectable } from '@nestjs/common';
import IMySQLProxyRepository from '../repositories/abstract-mysql-proxy.repository';
import GetUserByIdParams from '../shared/get-user-by-id.params';
import User from '../entities/user.entity';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(params: GetUserByIdParams): Promise<User> {
    return this.mysqlRepository.user.find(params);
  }
}
