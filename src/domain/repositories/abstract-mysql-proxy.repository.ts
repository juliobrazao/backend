import User from '@/domain/entities/user.entity';
import IUserRepository from './abstract-user.repository';

export default abstract class IMySQLProxyRepository {
  abstract user: IUserRepository<User>;
}
