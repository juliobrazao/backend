import { UserMySQLEntity } from '@/domain/entities/user-mysql.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserMySQLRepository {
  constructor(
    @InjectRepository(UserMySQLEntity)
    private readonly userMySQLRepository: UserMySQLRepository,
  ) {}

  async create(user: UserMySQLEntity): Promise<UserMySQLEntity> {
    return await this.userMySQLRepository.create(user);
  }

  async findAll(): Promise<UserMySQLEntity[]> {
    return await this.userMySQLRepository.findAll();
  }

  async findById(id: number): Promise<UserMySQLEntity> {
    return await this.userMySQLRepository.findById(id);
  }
}
