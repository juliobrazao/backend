import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import UserRepository from '@/infra/repositories/user.repository';
import User from '@/domain/entities/user.entity';

@Injectable()
export default class MySQLRepositoryProxy
  implements OnApplicationBootstrap, IMySQLProxyRepository
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
