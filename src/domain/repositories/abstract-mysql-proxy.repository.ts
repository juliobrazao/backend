import User from '@/domain/entities/user.entity';
import IUserRepository from './abstract-user.repository';
import GetUserByIdParams from '../shared/get-user-by-id.params';

export default abstract class IMySQLProxyRepository {
  abstract user: IUserRepository<User, GetUserByIdParams>;
}
