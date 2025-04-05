import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from '@/domain/entities/user.entity';
import IUserRepository from '@/domain/repositories/abstract-user.repository';

@Injectable()
export default class UserRepository implements IUserRepository<User> {
  private _repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this._repository = repository;
  }

  async create(user: User): Promise<User> {
    return this._repository.save(user);
  }

  async get(): Promise<User[]> {
    return this._repository.find();
  }
}
