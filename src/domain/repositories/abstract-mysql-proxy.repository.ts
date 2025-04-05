import User from '@/domain/entities/user.entity';
import GetUserByIdParams from '@/domain/shared/get-user-by-id.params';
import IUserRepository from './abstract-user.repository';

export default abstract class IMySQLProxyRepository {
  abstract user: IUserRepository<User, GetUserByIdParams>;
}
