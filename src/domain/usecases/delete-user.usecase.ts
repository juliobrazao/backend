import { Injectable } from '@nestjs/common';
import DeleteUserParams from '../shared/delete-user.params';
import IMySQLProxyRepository from '../repositories/abstract-mysql-proxy.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly mysqlRepository: IMySQLProxyRepository) {}

  async execute({ id }: DeleteUserParams): Promise<string> {
    return this.mysqlRepository.user.delete(id);
  }
}
