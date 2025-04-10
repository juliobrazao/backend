import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import IMongoProxyRepository from '@/domain/repositories/abstract-mongo-proxy.repository';
import UserRepository from '@/infra/repositories/user.repository';
import User from '@/domain/entities/user.entity';

@Injectable()
export default class MongoRepositoryProxy
  implements OnApplicationBootstrap, IMongoProxyRepository
{
  user: UserRepository;

  constructor(
    @InjectRepository(User)
    private userEntity: Repository<User>,
  ) {}

  onApplicationBootstrap() {
    this.user = new UserRepository(this.userEntity);
  }
}
