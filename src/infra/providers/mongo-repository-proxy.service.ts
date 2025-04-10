import IMongoProxyRepository from '@/domain/repositories/abstract-mongo-proxy.repository';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import UserRepository from '@/infra/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import User from '@/domain/entities/user.entity';
import { Repository } from 'typeorm';

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
