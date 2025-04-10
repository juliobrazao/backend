import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import IUserRepository from '@/domain/repositories/abstract-user.repository';
import User from '@/domain/entities/user.entity';
import GetUserByIdParams from '@/domain/shared/get-user-by-id.params';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class UserRepository
  implements IUserRepository<User, GetUserByIdParams>
{
  @InjectRepository(User)
  private readonly _repository: Repository<User>;

  constructor(repository: Repository<User>) {
    this._repository = repository;
  }

  async create(user: User): Promise<User> {
    return this._repository.save(user);
  }

  async get(): Promise<User[]> {
    return this._repository.find();
  }

  async find({ id }: GetUserByIdParams): Promise<User> {
    return this._repository.findOneBy({ id }) as unknown as User;
  }

  async update(id: string, updates: Partial<User>): Promise<User> {
    await this._repository.update({ id }, updates);
    return this.find({ id });
  }

  async delete(id: string): Promise<string> {
    const userToDelete = await this.find({ id });
    await this._repository.delete(id);
    return `User '${userToDelete.userId}' was deleted successfully!`;
  }
}
