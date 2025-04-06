import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from '@/domain/entities/user.entity';
import IUserRepository from '@/domain/repositories/abstract-user.repository';
import GetUserByIdParams from '@/domain/shared/get-user-by-id.params';

@Injectable()
export default class UserRepository
  implements IUserRepository<User, GetUserByIdParams>
{
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

  async find({ userId }: GetUserByIdParams): Promise<User> {
    return (await this._repository.findOneBy({ userId })) as User;
  }

  async update(id: string, updates: Partial<User>): Promise<User> {
    await this._repository.update(id, updates);
    const updatedUser = await this._repository.findOneBy({ userId: id });

    if (!updatedUser) {
      throw new Error(`User with id ${id} not found after update.`);
    }

    return updatedUser;
  }
}
