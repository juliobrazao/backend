import IUserRepository from '@/domain/repositories/abstract-user.repository';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

export default class UserRepository implements IUserRepository<UserEntity> {
  private _repository: Repository<UserEntity>;

  constructor(repository: Repository<UserEntity>) {
    this._repository = repository;
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return this._repository.save(user);
  }
}
