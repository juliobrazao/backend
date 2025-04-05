import { Injectable } from '@nestjs/common';
import User from '@/domain/entities/user.entity';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';

@Injectable()
export class GetUsersUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute(): Promise<User[]> {
    return this.mysqlRepository.user.get();
  }
}
